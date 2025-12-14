"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-serif">Oops!</h1>
          <p className="text-muted-foreground">Something went wrong. Please try again.</p>
        </div>

        <div className="flex gap-3 justify-center">
          <Button onClick={() => reset()} variant="default">
            Try again
          </Button>
          <Button onClick={() => (window.location.href = "/")} variant="outline">
            Go home
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="text-left text-sm">
            <summary className="cursor-pointer text-muted-foreground">Error details</summary>
            <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-auto">{error.message}</pre>
          </details>
        )}
      </div>
    </div>
  )
}
