"use client"

import { useState, useEffect } from "react"
import type { StoredPortfolio, PortfolioSection, PortfolioBlock } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import { Check, Share2, MapPin, Globe, Linkedin, ExternalLink, Sparkles, Target, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface PortfolioRendererProps {
  portfolio: StoredPortfolio
}

export function PortfolioRenderer({ portfolio }: PortfolioRendererProps) {
  const [copied, setCopied] = useState(false)
  const [locale, setLocale] = useState<"en" | "it">("en")

  const { output, input } = portfolio

  useEffect(() => {
    const savedLocale = localStorage.getItem("portfolio-locale") as "en" | "it" | null
    if (savedLocale) {
      setLocale(savedLocale)
    }

    const shouldScrollToTop = sessionStorage.getItem("scrollToTop")
    if (shouldScrollToTop) {
      sessionStorage.removeItem("scrollToTop")
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [])

  const handleLocaleToggle = () => {
    const newLocale = locale === "en" ? "it" : "en"
    setLocale(newLocale)
    localStorage.setItem("portfolio-locale", newLocale)
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const t = {
    share: locale === "en" ? "Share" : "Condividi",
    copied: locale === "en" ? "Copied" : "Copiato",
    faq: locale === "en" ? "Frequently Asked Questions" : "Domande Frequenti",
  }

  const hasProfileImage = input.identity.profileImage
  const hasName = input.identity.name
  const hasLocation = input.identity.location

  const isBilingual = output && typeof output === "object" && ("en" in output || "it" in output)
  const displayPortfolio = isBilingual ? (output as any)[locale] || (output as any).en || (output as any).it : output
  const showLanguageToggle = isBilingual

  const dedupeQuickLinks = (links: any[] | undefined) => {
    if (!links) return []
    const seen = new Set<string>()
    return links.filter((link) => {
      const normalizedUrl = link.url.toLowerCase().replace(/\/$/, "")
      if (seen.has(normalizedUrl)) return false
      seen.add(normalizedUrl)
      return true
    })
  }

  const quickLinks = dedupeQuickLinks(displayPortfolio.quickLinks)

  const locationLink = hasLocation
    ? `https://www.google.com/maps/search/${encodeURIComponent(input.identity.location!)}`
    : null

  const filteredQuickLinks = quickLinks.filter((link: any) => {
    if (link.icon === "linkedin") {
      return !!input.identity.linkedinUrl
    }
    return true
  })

  return (
    <main className="min-h-screen bg-background animate-fade-scale-in">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 sm:px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-serif tracking-tight text-xl text-foreground hover:text-foreground/80 transition-colors"
          >
            anti-portfolio
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleCopyLink} className="h-8 px-3 text-xs hover:bg-muted/50">
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 mr-1.5 text-primary" />
                  <span className="text-foreground">{t.copied}</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 mr-1.5 text-foreground" />
                  <span className="text-foreground">{t.share}</span>
                </>
              )}
            </Button>
            {showLanguageToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLocaleToggle}
                className="h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <Globe className="h-3.5 w-3.5 mr-1.5" />
                {locale === "en" ? "IT" : "EN"}
              </Button>
            )}
          </div>
        </div>
      </header>

      <article className="px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <header className="mb-12 sm:mb-16">
            <div className="flex flex-col items-center text-center gap-6 mb-6">
              {hasProfileImage && (
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={input.identity.profileImage! || "/placeholder.svg"}
                      alt={hasName ? input.identity.name! : "Profile"}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              )}

              {hasName && displayPortfolio.headline && (
                <h1 className="text-4xl tracking-tight leading-tight max-w-3xl text-foreground sm:text-5xl font-semibold">
                  {displayPortfolio.headline}
                </h1>
              )}
              {hasName && !displayPortfolio.headline && (
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl text-foreground">
                  {locale === "en" ? "I'm" : "Sono"} {input.identity.name}
                </h1>
              )}
            </div>

            {displayPortfolio.subtitle && (
              <div className="text-center mb-6">
                <p className="font-serif italic text-foreground/70 text-3xl">{displayPortfolio.subtitle}</p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
              {hasLocation && locationLink && (
                <a
                  href={locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground hover:underline underline-offset-2 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{input.identity.location}</span>
                </a>
              )}
              {filteredQuickLinks.map((link: { label: string; url: string; icon?: string }, i: number) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground hover:underline underline-offset-2 transition-colors"
                >
                  {link.icon === "linkedin" ? (
                    <Linkedin className="h-3.5 w-3.5" />
                  ) : (
                    <ExternalLink className="h-3.5 w-3.5" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {displayPortfolio.toneTags && displayPortfolio.toneTags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {displayPortfolio.toneTags.map((tag: string, i: number) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm font-medium text-foreground/80 bg-white border border-border rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {displayPortfolio.callouts && displayPortfolio.callouts.length > 0 && (
            <div className="mb-10 sm:mb-12 p-5 bg-white border border-border rounded-xl">
              <div className="space-y-3">
                {displayPortfolio.callouts.slice(0, 3).map((callout: string, i: number) => {
                  const icons = [Sparkles, Target, Heart]
                  const Icon = icons[i % icons.length]
                  return (
                    <p
                      key={i}
                      className="text-sm sm:text-base text-foreground/70 leading-relaxed flex items-start gap-3"
                    >
                      <Icon className="h-4 w-4 text-primary/40 flex-shrink-0 mt-0.5" />
                      {callout}
                    </p>
                  )
                })}
              </div>
            </div>
          )}

          {/* First Section */}
          {displayPortfolio.sections.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <SectionRenderer section={displayPortfolio.sections[0]} index={0} />
            </div>
          )}

          {/* Second Section */}
          {displayPortfolio.sections.length > 1 && (
            <div className="mb-10 sm:mb-12">
              <SectionRenderer section={displayPortfolio.sections[1]} index={1} />
            </div>
          )}

          {/* Core Strengths */}
          {displayPortfolio.strengths && displayPortfolio.strengths.length > 0 && (
            <div className="mb-10 sm:mb-12 py-6 px-6 bg-white border border-border rounded-xl">
              <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4 text-center">
                {locale === "en" ? "Core Strengths" : "Punti di Forza"}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {displayPortfolio.strengths.map((strength: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium text-foreground/70 bg-accent/30 border border-border rounded-md"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Third Section */}
          {displayPortfolio.sections.length > 2 && (
            <div className="mb-10 sm:mb-12">
              <SectionRenderer section={displayPortfolio.sections[2]} index={2} />
            </div>
          )}

          {/* Fourth Section */}
          {displayPortfolio.sections.length > 3 && (
            <div className="mb-10 sm:mb-12">
              <SectionRenderer section={displayPortfolio.sections[3]} index={3} />
            </div>
          )}

          {/* Personality Map */}
          {displayPortfolio.traits && displayPortfolio.traits.length > 0 && (
            <div className="mb-10 sm:mb-12 p-6 bg-white border border-border rounded-xl">
              <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-5 text-center">
                {locale === "en" ? "Personality Map" : "Mappa Personalità"}
              </h3>
              <div className="grid gap-4">
                {displayPortfolio.traits.map(
                  (trait: { name: string; value: number; lowLabel: string; highLabel: string }, i: number) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-foreground/50">
                        <span>{trait.lowLabel}</span>
                        <span>{trait.highLabel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${(trait.value / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          {/* Remaining Sections (5th section onwards) */}
          <div className="space-y-10 sm:space-y-12">
            {displayPortfolio.sections.slice(4).map((section: PortfolioSection, index: number) => (
              <SectionRenderer key={section.id} section={section} index={index + 4} />
            ))}
          </div>

          {/* FAQ Section */}
          {displayPortfolio.faqs && displayPortfolio.faqs.length > 0 && (
            <div className="mt-16 mb-10 pb-8">
              <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-6 text-center">
                {t.faq}
              </h3>
              <Accordion type="single" collapsible className="flex flex-col gap-2 pb-4">
                {displayPortfolio.faqs.map((faq: { question: string; answer: string }, i: number) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          <footer className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              {locale === "en" ? "Created with" : "Creato con"}{" "}
              <Link href="/" className="font-medium text-foreground hover:underline transition-colors">
                anti-portfolio
              </Link>
            </p>
          </footer>
        </div>
      </article>
    </main>
  )
}

function SectionRenderer({ section, index }: { section: PortfolioSection; index: number }) {
  return (
    <section id={section.id} className="scroll-mt-20">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-primary/60 font-mono text-xs font-medium">{String(index + 1).padStart(2, "0")}</span>
        <h2 className="text-xl sm:text-2xl font-serif tracking-tight">{section.heading}</h2>
      </div>
      <div className="space-y-4 pl-0 sm:pl-8">
        {section.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </div>
    </section>
  )
}

function BlockRenderer({ block }: { block: PortfolioBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{block.content as string}</p>

    case "quote":
      return (
        <p className="text-base sm:text-lg font-serif italic text-foreground/70 leading-relaxed pl-4 border-l-2 border-primary/30 my-4">
          {block.content as string}
        </p>
      )

    case "list":
      const items = Array.isArray(block.content) ? block.content : [block.content]
      return (
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-foreground/80">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span className="text-sm sm:text-base leading-relaxed flex-1">{item}</span>
            </li>
          ))}
        </ul>
      )

    case "project-link":
      return (
        <div className="p-4 border-2 border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition-all bg-white">
          <div className="space-y-2">
            {block.label && <h3 className="text-base sm:text-lg font-medium">{block.label}</h3>}
            <p className="text-foreground/70 leading-relaxed text-sm">{block.content as string}</p>
            {block.url && (
              <a
                href={block.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        </div>
      )

    default:
      return null
  }
}
