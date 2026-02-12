import { Redis } from "@upstash/redis"
import type { StoredPortfolio } from "./schemas"

// Check if KV is configured
export function isKVConfigured(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

// Initialize Redis client
let redis: Redis | null = null
function getRedisClient(): Redis | null {
  if (!isKVConfigured()) {
    return null
  }
  if (!redis) {
    redis = new Redis({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    })
  }
  return redis
}

// In-memory fallback for preview mode
const memoryStore = new Map<string, StoredPortfolio>()

export async function savePortfolio(portfolio: StoredPortfolio): Promise<void> {
  console.log("[v0] savePortfolio called for:", portfolio.id)
  console.log("[v0] KV_REST_API_URL exists:", !!process.env.KV_REST_API_URL)
  console.log("[v0] KV_REST_API_TOKEN exists:", !!process.env.KV_REST_API_TOKEN)
  
  const client = getRedisClient()
  
  if (!client) {
    // Fallback to memory store
    console.log("[v0] KV not configured, using memory store for:", portfolio.id)
    memoryStore.set(`portfolio:${portfolio.id}`, portfolio)
    return
  }

  try {
    console.log("[v0] Attempting to save to Upstash Redis:", portfolio.id)
    const key = `portfolio:${portfolio.id}`
    const value = JSON.stringify(portfolio)
    console.log("[v0] Key:", key, "Value length:", value.length)
    
    // Save to Upstash Redis with 30 days expiration
    const result = await client.set(key, value, { ex: 30 * 24 * 60 * 60 })
    console.log("[v0] Redis SET result:", result)
    console.log("[v0] Portfolio successfully saved to Upstash Redis:", portfolio.id)
  } catch (error) {
    console.error("[v0] Error saving to Upstash Redis:", error)
    console.error("[v0] Error details:", error instanceof Error ? error.message : String(error))
    // Fallback to memory store
    memoryStore.set(`portfolio:${portfolio.id}`, portfolio)
    throw error
  }
}

export async function getPortfolio(id: string): Promise<StoredPortfolio | null> {
  // Check memory store first (for serverless function calls in same instance)
  const memoryResult = memoryStore.get(`portfolio:${id}`)
  if (memoryResult) {
    console.log("[v0] Portfolio found in memory store:", id)
    return memoryResult
  }

  const client = getRedisClient()
  
  if (!client) {
    // KV not configured and not in memory, return null for client-side fallback
    console.log("[v0] KV not configured, portfolio not in memory, using client fallback for:", id)
    return null
  }

  try {
    const data = await client.get<string>(`portfolio:${id}`)
    
    if (!data) {
      console.log("[v0] Portfolio not found in Upstash Redis, using client fallback for:", id)
      return null
    }

    const portfolio = JSON.parse(data) as StoredPortfolio
    console.log("[v0] Portfolio retrieved from Upstash Redis:", id)
    return portfolio
  } catch (error) {
    console.error("[v0] Error fetching from Upstash Redis:", error)
    // Fallback to client-side sessionStorage
    return null
  }
}
