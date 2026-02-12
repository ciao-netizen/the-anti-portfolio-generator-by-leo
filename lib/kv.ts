import type { StoredPortfolio } from "./schemas"

// Check if KV is configured
export function isKVConfigured(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

// In-memory fallback for preview mode
const memoryStore = new Map<string, StoredPortfolio>()

export async function savePortfolio(portfolio: StoredPortfolio): Promise<void> {
  if (!isKVConfigured()) {
    // Fallback to memory store
    memoryStore.set(`portfolio:${portfolio.id}`, portfolio)
    return
  }

  const response = await fetch(`${process.env.KV_REST_API_URL}/set/portfolio:${portfolio.id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(portfolio),
  })

  if (!response.ok) {
    throw new Error("Failed to save portfolio to KV")
  }
}

export async function getPortfolio(id: string): Promise<StoredPortfolio | null> {
  if (!isKVConfigured()) {
    // Fallback to memory store
    console.log("[v0] KV not configured, checking memory store for:", id)
    return memoryStore.get(`portfolio:${id}`) || null
  }

  try {
    const response = await fetch(`${process.env.KV_REST_API_URL}/get/portfolio:${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.result ? JSON.parse(data.result) : null
  } catch (error) {
    console.error("[v0] Error fetching from KV:", error)
    return null
  }
}
