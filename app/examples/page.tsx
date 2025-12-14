import Link from "next/link"
import { getAllExamples } from "@/lib/examples"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ExamplesPage() {
  const examples = getAllExamples()

  const cardColors = ["bg-[#e8f5e9]", "bg-[#fff3e0]", "bg-[#fce4ec]"]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-5 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-serif">anti-portfolio</span>
          </Link>
          <Button asChild size="sm" className="rounded-full px-5">
            <Link href="/create">Create Yours</Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center animate-fade-up">
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">Real Examples</p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Three voices. <span className="font-serif italic text-muted-foreground">Three approaches.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              See how anti-portfolios reveal what makes people unique—in ways a CV never could.
            </p>
          </div>

          {/* Example cards */}
          <div className="grid gap-4 stagger-children">
            {examples.map((example, index) => {
              const output = example.output.it || example.output.en

              return (
                <Link
                  key={example.id}
                  href={`/p/${example.id}`}
                  className={`group block p-8 rounded-2xl ${cardColors[index % cardColors.length]} 
                    transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      {/* Number and variant */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-sm text-foreground/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {example.variant && (
                          <span className="px-2.5 py-1 bg-background/50 text-xs font-medium rounded-full capitalize">
                            {example.variant}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-medium tracking-tight mb-2">{output.title}</h2>

                      {/* Subtitle */}
                      <p className="text-muted-foreground mb-5">{output.subtitle}</p>

                      {/* Tone tags */}
                      <div className="flex flex-wrap gap-2">
                        {output.toneTags?.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-background/50 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      className="h-5 w-5 text-foreground/30 group-hover:text-foreground 
                      transition-all flex-shrink-0 mt-2 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground mb-6">Ready to create something that's uniquely you?</p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/create">
                Build Your Anti-Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
