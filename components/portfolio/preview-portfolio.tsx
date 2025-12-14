"use client"

import { useEffect, useState } from "react"
import { PortfolioRenderer } from "./portfolio-renderer"
import type { StoredPortfolio } from "@/lib/schemas"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PreviewPortfolioProps {
  id: string
}

export function PreviewPortfolio({ id }: PreviewPortfolioProps) {
  const [portfolio, setPortfolio] = useState<StoredPortfolio | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem(`portfolio-${id}`)
    if (stored) {
      try {
        setPortfolio(JSON.parse(stored))
      } catch {
        // Invalid JSON
      }
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground">Loading...</div>
      </main>
    )
  }

  if (!portfolio) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-background">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-medium mb-4">Portfolio Not Found</h1>
          <p className="text-muted-foreground mb-8">
            This portfolio may have expired or was created in a different session.
          </p>
          <Button asChild className="rounded-full px-6">
            <Link href="/create">Create New Portfolio</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <div>
      {/* Preview mode banner */}
      <div className="bg-accent/50 border-b border-accent px-4 py-2.5 text-center text-sm text-foreground/70">
        Preview Mode — This portfolio is stored locally
      </div>
      <PortfolioRenderer portfolio={portfolio} />
    </div>
  )
}
