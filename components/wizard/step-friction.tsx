"use client"

import type { FrictionData } from "@/lib/schemas"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { InfoTooltip } from "@/components/info-tooltip"
import { useTranslation, type Locale } from "@/lib/i18n"
import { WizardBanner } from "./wizard-banner" // Added banner component

interface StepFrictionProps {
  data: FrictionData
  onChange: (data: FrictionData) => void
  locale?: Locale
}

function RatingSlider({
  value,
  onChange,
  lowLabel,
  highLabel,
  label,
}: {
  value: number
  onChange: (v: number) => void
  lowLabel: string
  highLabel: string
  label: string
}) {
  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">{label}</Label>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground min-w-[120px] text-left">{lowLabel}</span>
        <div className="flex-1 flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onChange(n)
              }}
              className={`flex-1 h-12 rounded-lg font-semibold text-base transition-all duration-200 ${
                value === n
                  ? "bg-primary text-primary-foreground scale-105 shadow-sm"
                  : "bg-background border-2 border-border hover:border-primary/50 hover:scale-[1.02]"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <span className="text-sm text-muted-foreground min-w-[120px] text-right">{highLabel}</span>
      </div>
    </div>
  )
}

export function StepFriction({ data, onChange, locale = "en" }: StepFrictionProps) {
  const t = useTranslation(locale).wizard.step4

  const update = (field: keyof FrictionData, value: string | number) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-primary text-xs font-medium tracking-wider uppercase">{t.number}</p>
        <h2 className="text-3xl sm:text-4xl font-serif">{t.title}</h2>
        <p className="text-base text-muted-foreground leading-relaxed">{t.subtitle}</p>
      </div>

      <WizardBanner variant="warning">
        {locale === "en"
          ? "If this feels uncomfortable, you're being honest enough."
          : "Se ti senti a disagio, stai essendo abbastanza onesto."}
      </WizardBanner>

      <div className="space-y-8">
        {/* Biggest Mistake */}
        <div className="space-y-2.5">
          <Label htmlFor="biggestMistake" className="text-base font-medium flex items-center gap-2">
            {t.biggestMistake} <span className="text-destructive">*</span>
            <InfoTooltip content={t.tooltip} />
          </Label>
          <Textarea
            id="biggestMistake"
            placeholder={t.biggestMistakePlaceholder}
            rows={4}
            value={data.biggestMistake || ""}
            onChange={(e) => update("biggestMistake", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Who You Let Down */}
        <div className="space-y-2.5">
          <Label htmlFor="letDown" className="text-base font-medium flex items-center gap-2">
            {t.letDown} <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="letDown"
            placeholder={t.letDownPlaceholder}
            rows={3}
            value={data.letDown || ""}
            onChange={(e) => update("letDown", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Would Not Do Again */}
        <div className="space-y-2.5">
          <Label htmlFor="wouldntDoAgain" className="text-base font-medium">
            {t.wouldntDoAgain}
          </Label>
          <Textarea
            id="wouldntDoAgain"
            placeholder={t.wouldntDoAgainPlaceholder}
            rows={3}
            value={data.wouldntDoAgain || ""}
            onChange={(e) => update("wouldntDoAgain", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Automatic Change */}
        <div className="space-y-2.5">
          <Label htmlFor="automaticChange" className="text-base font-medium">
            {t.automaticChange}
          </Label>
          <Textarea
            id="automaticChange"
            placeholder={t.automaticChangePlaceholder}
            rows={2}
            value={data.automaticChange || ""}
            onChange={(e) => update("automaticChange", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        <div className="pt-8 border-t border-border space-y-8">
          <RatingSlider
            label={locale === "en" ? "Ownership of mistakes" : "Responsabilità degli errori"}
            value={data.ratingOwnership || 0}
            onChange={(v) => update("ratingOwnership", v)}
            lowLabel={locale === "en" ? "Deflect blame" : "Defletto colpe"}
            highLabel={locale === "en" ? "Take full responsibility" : "Piena responsabilità"}
          />

          <RatingSlider
            label={locale === "en" ? "Recovery speed" : "Velocità di recupero"}
            value={data.ratingRecovery || 0}
            onChange={(v) => update("ratingRecovery", v)}
            lowLabel={locale === "en" ? "Dwell on failures" : "Rimugino fallimenti"}
            highLabel={locale === "en" ? "Bounce back quickly" : "Rimbalzo veloce"}
          />
        </div>
      </div>
    </div>
  )
}
