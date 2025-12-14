"use client"

import { useState } from "react"
import type { Locale } from "@/lib/i18n"

export function OverlappingCards({ locale, t }: { locale: Locale; t: any }) {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      number: "01",
      title: t.landing.difference.cards.identity.title,
      description: t.landing.difference.cards.identity.description,
      color: "bg-[#e8f5e9]",
      borderColor: "border-[#a5d6a7]",
    },
    {
      number: "02",
      title: t.landing.difference.cards.asymmetricAdvantage.title,
      description: t.landing.difference.cards.asymmetricAdvantage.description,
      color: "bg-[#fff3e0]",
      borderColor: "border-[#ffcc80]",
    },
    {
      number: "03",
      title: t.landing.difference.cards.frictionAndFailure.title,
      description: t.landing.difference.cards.frictionAndFailure.description,
      color: "bg-[#fce4ec]",
      borderColor: "border-[#f48fb1]",
    },
    {
      number: "04",
      title: t.landing.difference.cards.processOverPolish.title,
      description: t.landing.difference.cards.processOverPolish.description,
      color: "bg-[#e3f2fd]",
      borderColor: "border-[#90caf9]",
    },
  ]

  return (
    null
  )
}
