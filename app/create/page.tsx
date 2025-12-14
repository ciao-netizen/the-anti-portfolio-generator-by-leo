"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { WizardContainer } from "@/components/wizard/wizard-container"
import type { WizardData } from "@/lib/schemas"
import type { Locale } from "@/lib/i18n"

const STORAGE_KEY = "anti-portfolio-draft"
const LOCALE_KEY = "preferredLocale"

const initialData: WizardData = {
  identity: {
    name: "",
    location: "",
    goal: undefined,
    currentRole: "",
    obsession: "",
    unpopularOpinion: "",
    childhood: "",
    linkedinUrl: "",
    portfolioUrl: "",
    profileImage: "",
  },
  strength: {
    problemSolved: "",
    energizes: "",
    drains: "",
    ratingRisk: 3,
    ratingSpeed: 3,
    ratingPeople: 3,
  },
  proof: {
    pivotMoment: "",
    whatChanged: "",
    sacrifice: "",
    portfolioUrl: "",
  },
  friction: {
    biggestMistake: "",
    letDown: "",
    stillLearning: "",
  },
  workStyle: {
    weirdHabit: "",
    dealbreaker: "",
    perfectDay: "",
    misunderstood: "",
    ratingStructure: 3,
    ratingFeedback: 3,
  },
}

export default function CreatePage() {
  const searchParams = useSearchParams()
  const [data, setData] = useState<WizardData>(initialData)
  const [locale, setLocale] = useState<Locale>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const urlLocale = searchParams.get("locale") as Locale | null
    const savedLocale = localStorage.getItem(LOCALE_KEY) as Locale | null
    const preferredLocale = urlLocale || savedLocale || "en"
    setLocale(preferredLocale)
    localStorage.setItem(LOCALE_KEY, preferredLocale)
  }, [searchParams])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setData({ ...initialData, ...parsed })
      } catch {
        // Ignore parse errors
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
  }, [data, isLoaded])

  const handleClearDraft = () => {
    localStorage.removeItem(STORAGE_KEY)
    setData(initialData)
  }

  if (!isLoaded) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground text-sm">Loading...</p>
      </main>
    )
  }

  return <WizardContainer data={data} setData={setData} onClearDraft={handleClearDraft} locale={locale} />
}
