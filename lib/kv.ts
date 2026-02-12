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
  // Always save to memory store first for immediate availability
  memoryStore.set(`portfolio:${portfolio.id}`, portfolio)
  
  const client = getRedisClient()
  
  if (!client) {
    console.log("[v0] KV not configured, portfolio saved to memory store only:", portfolio.id)
    return
  }

  try {
    // Attempt to save to Upstash Redis with 30 days expiration
    await client.set(`portfolio:${portfolio.id}`, JSON.stringify(portfolio), { ex: 30 * 24 * 60 * 60 })
    console.log("[v0] Portfolio saved to Upstash Redis:", portfolio.id)
  } catch (error) {
    // Silent fail - portfolio is already in memory store and will work via sessionStorage
    console.log("[v0] Upstash Redis unavailable, using memory/session fallback for:", portfolio.id)
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
