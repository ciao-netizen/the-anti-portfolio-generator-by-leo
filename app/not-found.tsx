import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-md text-center">
        <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">404</p>
        <h1 className="text-3xl font-medium mb-4">Portfolio Not Found</h1>
        <p className="text-muted-foreground mb-10">
          This portfolio doesn't exist or may have been created in preview mode.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="rounded-full px-6">
            <Link href="/create">Create Your Own</Link>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground">
            <Link href="/examples">View Examples</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
