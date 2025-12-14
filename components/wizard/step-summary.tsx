"use client"
import type { WizardData, VariantOption } from "@/lib/schemas"
import { variantOptions } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2, AlertCircle, Edit2, Scale, Target, Feather, Brain } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/i18n"

interface StepSummaryProps {
  data: WizardData
  selectedVariant: VariantOption
  onVariantChange: (variant: VariantOption) => void
  isGenerating: boolean
  error: string | null
  onGenerate: () => void
  locale?: Locale
  allStepsComplete: boolean
  goToStep: (step: number) => void
}

const variantIcons: Record<VariantOption, typeof Scale> = {
  balanced: Scale,
  direct: Target,
  poetic: Feather,
  analytical: Brain,
}

export function StepSummary({
  data,
  selectedVariant,
  onVariantChange,
  isGenerating,
  error,
  onGenerate,
  locale = "en",
  allStepsComplete,
  goToStep,
}: StepSummaryProps) {
  const t = useTranslation(locale).wizard.summary

  const isIdentityComplete =
    !!data.identity.name?.trim() && !!data.identity.location?.trim() && !!data.identity.obsession?.trim()

  const isStrengthComplete = !!data.strength.problemSolved?.trim() && !!data.strength.energizes?.trim()

  const isProofComplete = !!data.proof.pivotMoment?.trim() && !!data.proof.whatChanged?.trim()

  const isFrictionComplete = !!data.friction.biggestMistake?.trim() && !!data.friction.letDown?.trim()

  const isWorkStyleComplete = !!data.workStyle.weirdHabit?.trim() && !!data.workStyle.dealbreaker?.trim()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-primary text-xs font-medium tracking-wider uppercase">
          {locale === "en" ? "Final Step" : "Ultimo Passo"}
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif">{t.title}</h2>
        <p className="text-sm text-muted-foreground max-w-lg">{t.subtitle}</p>
      </div>

      {!allStepsComplete && (
        <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
              {locale === "en" ? "Some sections are incomplete" : "Alcune sezioni sono incomplete"}
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              {locale === "en"
                ? "Complete all required fields to generate your anti-portfolio"
                : "Completa tutti i campi obbligatori per generare il tuo anti-portfolio"}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-2.5">
        <SummaryCard
          title={t.sections.identity}
          completed={isIdentityComplete}
          onEdit={() => goToStep(0)}
          locale={locale}
        />

        <SummaryCard
          title={t.sections.strength}
          completed={isStrengthComplete}
          onEdit={() => goToStep(1)}
          locale={locale}
        />

        <SummaryCard title={t.sections.proof} completed={isProofComplete} onEdit={() => goToStep(2)} locale={locale} />

        <SummaryCard
          title={t.sections.friction}
          completed={isFrictionComplete}
          onEdit={() => goToStep(3)}
          locale={locale}
        />

        <SummaryCard
          title={t.sections.workStyle}
          completed={isWorkStyleComplete}
          onEdit={() => goToStep(4)}
          locale={locale}
        />
      </div>

      {/* Voice selector */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">{t.variant}</Label>
        <RadioGroup
          value={selectedVariant}
          onValueChange={(v) => onVariantChange(v as VariantOption)}
          className="grid sm:grid-cols-2 gap-2"
        >
          {variantOptions.map((option) => {
            const Icon = variantIcons[option.value as VariantOption]
            return (
              <div key={option.value} className="relative">
                <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                <Label
                  htmlFor={option.value}
                  className="flex flex-col p-3 border-2 border-border bg-card cursor-pointer transition-all text-sm hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 rounded-lg"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    {option.label}
                  </span>
                </Label>
              </div>
            )
          })}
        </RadioGroup>
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-xs">
          <p className="font-medium">Error: {error}</p>
        </div>
      )}

      <Button
        onClick={onGenerate}
        disabled={isGenerating || !allStepsComplete}
        size="lg"
        className="w-full h-12 rounded-full"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            {t.generating}
          </>
        ) : (
          t.generate
        )}
      </Button>
    </div>
  )
}

function SummaryCard({
  title,
  completed,
  onEdit,
  locale,
}: {
  title: string
  completed: boolean
  onEdit: () => void
  locale: Locale
}) {
  return (
    <div
      className={`p-4 border-2 transition-colors rounded-md ${
        completed ? "border-primary/30 bg-card" : "border-muted-foreground/20 bg-muted/20"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-medium text-foreground">{title}</h4>
        <div className="flex items-center gap-2">
          {completed ? (
            <span className="text-xs text-primary font-medium">{locale === "en" ? "Completed" : "Completato"}</span>
          ) : (
            <span className="text-xs text-muted-foreground">{locale === "en" ? "Incomplete" : "Incompleto"}</span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            className="h-8 px-2 text-xs hover:bg-primary/10"
            title={locale === "en" ? "Edit" : "Modifica"}
          >
            <Edit2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
