"use client"

import type { Locale } from "@/lib/i18n"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  locale: Locale
  onChange: (locale: Locale) => void
}

export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onChange(locale === "en" ? "it" : "en")}
      className="h-8 px-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
    >
      <Globe className="h-3.5 w-3.5 mr-1.5" />
      {locale === "en" ? "IT" : "EN"}
    </Button>
  )
}
