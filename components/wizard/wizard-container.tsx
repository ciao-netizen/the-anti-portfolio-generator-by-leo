"use client"

import type React from "react"
import { useState, useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import type { WizardData, VariantOption } from "@/lib/schemas"
import { useTranslation, type Locale } from "@/lib/i18n"
import { StepIndicator } from "./step-indicator"
import { StepIdentity } from "./step-identity"
import { StepStrength } from "./step-strength"
import { StepProof } from "./step-proof"
import { StepFriction } from "./step-friction"
import { StepWorkStyle } from "./step-work-style"
import { StepSummary } from "./step-summary"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, RotateCcw, Check } from "lucide-react"
import Link from "next/link"

interface WizardContainerProps {
  data: WizardData
  setData: React.Dispatch<React.SetStateAction<WizardData>>
  onClearDraft: () => void
  locale: Locale
}

const STEPS = ["Identity", "Strength", "Proof", "Friction", "Work Style", "Generate"] as const

const LOADING_MESSAGES = {
  en: [
    "Reading between the lines...",
    "Finding your hidden patterns...",
    "Extracting personality DNA...",
    "Connecting the dots...",
    "Building your story...",
    "Almost there...",
  ],
  it: [
    "Leggendo tra le righe...",
    "Trovando i tuoi pattern nascosti...",
    "Estraendo il DNA della personalità...",
    "Collegando i punti...",
    "Costruendo la tua storia...",
    "Quasi pronto...",
  ],
}

const SUCCESS_MESSAGES = {
  en: {
    title: "Your anti-portfolio is ready",
    subtitle: "Redirecting you to your new page...",
  },
  it: {
    title: "Il tuo anti-portfolio è pronto",
    subtitle: "Ti stiamo portando alla tua nuova pagina...",
  },
}

export function WizardContainer({ data, setData, onClearDraft, locale }: WizardContainerProps) {
  const router = useRouter()
  const t = useTranslation(locale)
  const [currentStep, setCurrentStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationComplete, setGenerationComplete] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<VariantOption>("balanced")
  const [error, setError] = useState<string | null>(null)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)
  const loadingIntervalRef = useRef<NodeJS.Timeout>()
  const generatedIdRef = useRef<string | null>(null)

  const triggerConfetti = useCallback(() => {
    if (typeof window !== "undefined" && window.confetti) {
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 100,
        zIndex: 9999,
        gravity: 0.8,
        scalar: 1.2,
        drift: 0,
      }
      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now()
        if (timeLeft <= 0) return clearInterval(interval)
        const particleCount = 40 * (timeLeft / duration)
        window.confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: randomInRange(0.2, 0.5) },
          colors: ["#1a5c3a", "#2d7d50", "#4a9d6d", "#d4c5a0", "#e8dcc0"],
        })
        window.confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: randomInRange(0.2, 0.5) },
          colors: ["#1a5c3a", "#2d7d50", "#4a9d6d", "#d4c5a0", "#e8dcc0"],
        })
      }, 250)
    }
  }, [])

  useEffect(() => {
    if (isGenerating && !generationComplete) {
      setLoadingMessageIndex(0)
      loadingIntervalRef.current = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES[locale].length)
      }, 3000)
    } else {
      if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current)
    }
    return () => {
      if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current)
    }
  }, [isGenerating, generationComplete, locale])

  const handleNext = useCallback(() => {
    if (currentStep < STEPS.length - 1) {
      setDirection("forward")
      setCurrentStep(currentStep + 1)
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      })
    }
  }, [currentStep])

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection("backward")
      setCurrentStep(currentStep - 1)
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      })
    }
  }, [currentStep])

  const handleGenerate = async () => {
    setIsGenerating(true)
    setGenerationComplete(false)
    setError(null)

    try {
      const cleanedData: WizardData = {
        ...data,
        identity: {
          ...data.identity,
          linkedinUrl: data.identity.linkedinUrl?.trim() || undefined,
          portfolioUrl: data.identity.portfolioUrl?.trim() || undefined,
        },
        proof: {
          ...data.proof,
          portfolioUrl: data.proof.portfolioUrl?.trim()
            ? data.proof.portfolioUrl.startsWith("http")
              ? data.proof.portfolioUrl
              : undefined
            : undefined,
        },
      }

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: cleanedData, variant: selectedVariant, locale }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate portfolio")
      }

      const result = await response.json()

      if (result.portfolio) {
        sessionStorage.setItem(`portfolio-${result.id}`, JSON.stringify(result.portfolio))
      }

      generatedIdRef.current = result.id
      setGenerationComplete(true)

      // Trigger confetti celebration
      triggerConfetti()

      // Wait for user to see the success state, then redirect
      sessionStorage.setItem("scrollToTop", "true")
      await new Promise((resolve) => setTimeout(resolve, 3000))
      router.push(`/p/${result.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setIsGenerating(false)
      setGenerationComplete(false)
    }
  }

  const updateData = <K extends keyof WizardData>(key: K, value: WizardData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const isStepCompleted = (stepIndex: number): boolean => {
    switch (stepIndex) {
      case 0:
        return (
          !!data.identity.name?.trim() &&
          !!data.identity.location?.trim() &&
          !!data.identity.obsession?.trim() &&
          !!data.identity.goal
        )
      case 1:
        return !!data.strength.problemSolved?.trim() && !!data.strength.energizes?.trim()
      case 2:
        return !!data.proof.pivotMoment?.trim() && !!data.proof.whatChanged?.trim()
      case 3:
        return !!data.friction.biggestMistake?.trim() && !!data.friction.letDown?.trim()
      case 4:
        return !!data.workStyle.weirdHabit?.trim() && !!data.workStyle.dealbreaker?.trim()
      case 5:
        return true
      default:
        return false
    }
  }

  const allStepsComplete = () => {
    return [0, 1, 2, 3, 4].every((stepIndex) => isStepCompleted(stepIndex))
  }

  const handleStepClick = useCallback(
    (stepIndex: number) => {
      if (stepIndex < currentStep || isStepCompleted(stepIndex)) {
        setDirection(stepIndex > currentStep ? "forward" : "backward")
        setCurrentStep(stepIndex)
        requestAnimationFrame(() => {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        })
      }
    },
    [currentStep],
  )

  const renderStep = () => {
    const animationClass = direction === "forward" ? "animate-slide-in-right" : "animate-fade-in"

    const stepContent = (() => {
      switch (currentStep) {
        case 0:
          return <StepIdentity data={data.identity} onChange={(val) => updateData("identity", val)} locale={locale} />
        case 1:
          return <StepStrength data={data.strength} onChange={(val) => updateData("strength", val)} locale={locale} />
        case 2:
          return <StepProof data={data.proof} onChange={(val) => updateData("proof", val)} locale={locale} />
        case 3:
          return <StepFriction data={data.friction} onChange={(val) => updateData("friction", val)} locale={locale} />
        case 4:
          return (
            <StepWorkStyle data={data.workStyle} onChange={(val) => updateData("workStyle", val)} locale={locale} />
          )
        case 5:
          return (
            <StepSummary
              data={data}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
              isGenerating={isGenerating}
              error={error}
              onGenerate={handleGenerate}
              locale={locale}
              allStepsComplete={allStepsComplete()}
              goToStep={setCurrentStep}
            />
          )
        default:
          return null
      }
    })()

    return (
      <div key={currentStep} className={animationClass}>
        {stepContent}
      </div>
    )
  }

  const isSummaryStep = currentStep === STEPS.length - 1

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {(isGenerating || generationComplete) && (
        <div className="fixed inset-0 bg-background/98 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="text-center space-y-8 max-w-md px-6">
            {/* Success State */}
            {generationComplete ? (
              <div className="animate-fade-in">
                {/* Success Icon with animation */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                  <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-12 w-12 text-primary-foreground animate-scale-in" strokeWidth={3} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-serif font-medium">{SUCCESS_MESSAGES[locale].title}</h2>
                  <p className="text-muted-foreground">{SUCCESS_MESSAGES[locale].subtitle}</p>
                </div>

                {/* Progress bar for redirect */}
                <div className="mt-8 w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-progress" />
                </div>
              </div>
            ) : (
              /* Loading State */
              <>
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-0 border-4 border-border rounded-full" />
                  <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                  <div className="absolute inset-2 border-4 border-t-transparent border-r-primary/50 border-b-transparent border-l-transparent rounded-full animate-spin-reverse" />
                </div>
                <div className="space-y-3">
                  <p className="text-2xl font-serif italic transition-all duration-500">
                    {LOADING_MESSAGES[locale][loadingMessageIndex]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {locale === "en" ? "This may take 30-60 seconds" : "Può richiedere 30-60 secondi"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="px-6 py-5 border-b border-border">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-tight hover:opacity-70 transition-opacity">
            anti-portfolio
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearDraft}
            className="text-muted-foreground hover:bg-[#8C1C13] hover:text-white transition-all"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Start Over
          </Button>
        </div>
      </header>

      {/* Step Indicator */}
      <div className="px-6 py-6">
        <div className="max-w-2xl mx-auto">
          <StepIndicator
            steps={STEPS as unknown as string[]}
            currentStep={currentStep}
            isStepCompleted={isStepCompleted}
            onStepClick={handleStepClick}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">{renderStep()}</div>
      </div>

      {/* Footer Navigation */}
      {!isSummaryStep && (
        <footer className="px-6 py-5 border-t border-border bg-background">
          <div className="max-w-2xl mx-auto flex justify-between">
            <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0} className="text-muted-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.wizard.navigation.back}
            </Button>
            <Button onClick={handleNext} disabled={!isStepCompleted(currentStep)} className="rounded-full px-6">
              {t.wizard.navigation.next}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </footer>
      )}
    </main>
  )
}
