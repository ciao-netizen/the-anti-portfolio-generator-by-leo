"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation, type Locale } from "@/lib/i18n"
import {
  ArrowRight,
  Brain,
  Zap,
  BookOpen,
  Target,
  Sparkles,
  XCircle,
  CheckCircle,
  Users,
  Lightbulb,
  Heart,
  Settings,
} from "lucide-react"

export default function FrameworkPage() {
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
    <main className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif tracking-tight text-xl cursor-pointer">
            anti-portfolio
          </Link>
          <div className="flex items-center gap-6">
            <LanguageToggle locale={locale} onChange={handleLocaleChange} />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="px-6 pt-28 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="mb-16 text-center animate-fade-up">
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">{t.framework.badge}</p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              {t.framework.title}{" "}
              <span className="font-serif italic text-muted-foreground">{t.framework.titleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.framework.subtitle}</p>
          </div>

          {/* Section 1: Base Assumptions */}
          <section className="mb-12 bg-white rounded-2xl p-6 md:p-8 border border-border/30">
            <p className="text-sm text-primary font-medium mb-2">01</p>
            <h2 className="text-2xl font-medium mb-4">{t.framework.assumptions.title}</h2>
            <p className="text-muted-foreground mb-8">{t.framework.assumptions.intro}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-4 h-4 text-muted-foreground/50" />
                  <p className="text-sm font-medium text-muted-foreground">{t.framework.assumptions.traditional}</p>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {t.framework.assumptions.traditionalList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">{t.framework.assumptions.antiPortfolio}</p>
                </div>
                <ul className="space-y-3">
                  {t.framework.assumptions.antiPortfolioList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Patterns & Questions */}
          <section className="mb-12 bg-white rounded-2xl p-6 md:p-8 border border-border/30">
            <p className="text-sm text-primary font-medium mb-2">02</p>
            <h2 className="text-2xl font-medium mb-4">{t.framework.patterns.title}</h2>
            <p className="text-muted-foreground mb-8">{t.framework.patterns.intro}</p>

            <div className="space-y-5">
              {t.framework.patterns.items.map((item, i) => {
                const icons = [Brain, Zap, BookOpen, Target, Settings]
                const Icon = icons[i] || Brain
                return (
                  <div key={i} className="flex gap-4">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Section 3: Design Principles */}
          <section className="mb-12 bg-white rounded-2xl p-6 md:p-8 border border-border/30">
            <p className="text-sm text-primary font-medium mb-2">03</p>
            <h2 className="text-2xl font-medium mb-4">{t.framework.design.title}</h2>
            <p className="text-muted-foreground mb-8">{t.framework.design.intro}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {t.framework.design.principles.map((principle, i) => {
                const icons = [Sparkles, Users, Heart, Lightbulb]
                const Icon = icons[i] || Sparkles
                return (
                  <div key={i} className="flex gap-3">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-sm">{principle.title}</p>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Section 4: 5 Distinctive Elements */}
          <section className="mb-12 bg-white rounded-2xl p-6 md:p-8 border border-border/30">
            <p className="text-sm text-primary font-medium mb-2">04</p>
            <h2 className="text-2xl font-medium mb-4">{t.framework.elements.title}</h2>
            <p className="text-muted-foreground mb-8">{t.framework.elements.intro}</p>

            <div className="space-y-4">
              {t.framework.elements.items.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-background border border-border/30">
                  <span className="text-primary font-mono text-sm">0{i + 1}</span>
                  <div>
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: AI-Native Vision */}
          <section className="mb-12 bg-white rounded-2xl p-6 md:p-8 border border-border/30">
            <p className="text-sm text-primary font-medium mb-2">05</p>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-medium">{t.framework.aiVision.title}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{t.framework.aiVision.intro}</p>

            <div className="p-5 rounded-xl bg-primary/5 mb-6">
              <p className="text-muted-foreground leading-relaxed">{t.framework.aiVision.insight}</p>
            </div>

            <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
              {t.framework.aiVision.quote}
            </blockquote>
          </section>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">{t.framework.cta.text}</p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href={`/create?locale=${locale}`}>
                {t.framework.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
