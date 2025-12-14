"use client"

import type { ProofData } from "@/lib/schemas"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { InfoTooltip } from "@/components/info-tooltip"
import { useTranslation, type Locale } from "@/lib/i18n"
import { WizardBanner } from "./wizard-banner" // Added banner component

interface StepProofProps {
  data: ProofData
  onChange: (data: ProofData) => void
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

export function StepProof({ data, onChange, locale = "en" }: StepProofProps) {
  const t = useTranslation(locale).wizard.step3

  const update = (field: keyof ProofData, value: string | number) => {
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

      <WizardBanner variant="insight">
        {locale === "en"
          ? "Focus on what happened and what you did—not how you felt about it."
          : "Concentrati su cosa è successo e cosa hai fatto—non su come ti sei sentito."}
      </WizardBanner>

      <div className="space-y-8">
        {/* Pivot Moment - Main Story */}
        <div className="space-y-2.5">
          <Label htmlFor="pivotMoment" className="text-base font-medium flex items-center gap-2">
            {t.pivotMoment} <span className="text-destructive">*</span>
            <InfoTooltip content={`${t.tooltip} ${t.pivotMomentHint}`} />
          </Label>
          <Textarea
            id="pivotMoment"
            placeholder={t.pivotMomentPlaceholder}
            rows={5}
            value={data.pivotMoment || ""}
            onChange={(e) => update("pivotMoment", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* What Changed */}
        <div className="space-y-2.5">
          <Label htmlFor="whatChanged" className="text-base font-medium flex items-center gap-2">
            {t.whatChanged} <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="whatChanged"
            placeholder={t.whatChangedPlaceholder}
            rows={3}
            value={data.whatChanged || ""}
            onChange={(e) => update("whatChanged", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Tough Decision */}
        <div className="space-y-2.5">
          <Label htmlFor="toughDecision" className="text-base font-medium">
            {t.toughDecision}
          </Label>
          <Textarea
            id="toughDecision"
            placeholder={t.toughDecisionPlaceholder}
            rows={3}
            value={data.toughDecision || ""}
            onChange={(e) => update("toughDecision", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Uncertainty Default */}
        <div className="space-y-2.5">
          <Label htmlFor="uncertaintyDefault" className="text-base font-medium">
            {t.uncertaintyDefault}
          </Label>
          <Textarea
            id="uncertaintyDefault"
            placeholder={t.uncertaintyDefaultPlaceholder}
            rows={2}
            value={data.uncertaintyDefault || ""}
            onChange={(e) => update("uncertaintyDefault", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Portfolio Link - Optional */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xs group-open:rotate-90 transition-transform">▶</span>
              <span>{t.portfolioNote}</span>
            </div>
          </summary>
          <div className="mt-5 space-y-2.5 pl-4 border-l-2 border-border">
            <Label className="text-base font-medium flex items-center gap-2">
              {locale === "en" ? "Portfolio/Work URL" : "URL Portfolio/Lavoro"}
              <InfoTooltip content={t.portfolioNoteHint} />
            </Label>
            <Input
              type="url"
              placeholder="https://github.com/yourname"
              value={data.portfolioUrl || ""}
              onChange={(e) => update("portfolioUrl", e.target.value)}
              className="h-11 rounded-lg border-2"
            />
          </div>
        </details>

        <div className="pt-8 border-t border-border space-y-8">
          <RatingSlider
            label={locale === "en" ? "Adaptability" : "Adattabilità"}
            value={data.ratingAdaptability || 0}
            onChange={(v) => update("ratingAdaptability", v)}
            lowLabel={locale === "en" ? "Prefer stability" : "Preferisco stabilità"}
            highLabel={locale === "en" ? "Thrive in change" : "Prospero nel cambiamento"}
          />

          <RatingSlider
            label={locale === "en" ? "Learning style" : "Stile apprendimento"}
            value={data.ratingLearning || 0}
            onChange={(v) => update("ratingLearning", v)}
            lowLabel={locale === "en" ? "Learn by theory" : "Imparo con teoria"}
            highLabel={locale === "en" ? "Learn by doing" : "Imparo facendo"}
          />
        </div>
      </div>
    </div>
  )
}
