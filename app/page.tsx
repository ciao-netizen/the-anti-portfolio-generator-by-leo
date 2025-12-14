"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation, type Locale } from "@/lib/i18n"
import { FloatingParticles } from "./FloatingParticles"
import { OverlappingCards } from "./OverlappingCards"

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("preferredLocale") as Locale
    if (saved) setLocale(saved)
  }, [])

  const t = useTranslation(locale)

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("preferredLocale", newLocale)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif tracking-tight text-xl cursor-pointer">
            anti-portfolio
          </Link>
          <div className="flex items-center gap-6">
            <LanguageToggle locale={locale} onChange={handleLocaleChange} />
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <FloatingParticles />

        <div className="max-w-4xl text-center mb-16 z-10">
          {/* Status badge */}
          <div className="animate-fade-up mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.landing.tagline}
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-8 animate-fade-up text-balance lg:text-8xl tracking-tighter"
            style={{ animationDelay: "100ms" }}
          >
            {t.landing.title1} <span className="font-serif italic text-muted-foreground">{t.landing.title2}</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up tracking-tight"
            style={{ animationDelay: "200ms" }}
          >
            {t.landing.subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base cursor-pointer">
              <Link href={`/create?locale=${locale}`}>
                {t.landing.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-8 h-12 text-base text-muted-foreground cursor-pointer hover:bg-muted/50 hover:text-muted-foreground"
            >
              <Link href="/framework">Framework</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 px-6 hidden md:block">
          <div className="max-w-5xl mx-auto">
            <OverlappingCards locale={locale} t={t} />
          </div>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none hidden lg:block"
          style={{ bottom: "-150px", width: "400px", height: "400px" }}
        >
          <img src="/images/folder-icon.webp" alt="" className="w-full h-full object-contain opacity-40" />
        </div>
      </section>

      {/* Footer */}
    </main>
  )
}
