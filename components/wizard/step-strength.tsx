"use client"

import type { StrengthData } from "@/lib/schemas"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { InfoTooltip } from "@/components/info-tooltip"
import { useTranslation, type Locale } from "@/lib/i18n"
import { WizardBanner } from "./wizard-banner" // Added banner component

interface StepStrengthProps {
  data: StrengthData
  onChange: (data: StrengthData) => void
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

export function StepStrength({ data, onChange, locale = "en" }: StepStrengthProps) {
  const t = useTranslation(locale).wizard.step2

  const update = (field: keyof StrengthData, value: string | number) => {
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

      <WizardBanner variant="success">
        {locale === "en"
          ? "The more specific the example, the clearer your superpower becomes."
          : "Più l'esempio è specifico, più chiaro diventa il tuo superpotere."}
      </WizardBanner>

      <div className="space-y-8 pb-0">
        {/* Problem Solved Story */}
        <div className="space-y-2.5">
          <Label htmlFor="problemSolved" className="text-base font-medium flex items-center gap-2">
            {t.problemSolved} <span className="text-destructive">*</span>
            <InfoTooltip content={`${t.tooltip} ${t.problemSolvedHint}`} />
          </Label>
          <Textarea
            id="problemSolved"
            placeholder={t.problemSolvedPlaceholder}
            rows={4}
            value={data.problemSolved || ""}
            onChange={(e) => update("problemSolved", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Disproportionate Value Behavioral Question */}
        <div className="space-y-2.5">
          <Label htmlFor="disproportionateValue" className="text-base font-medium">
            {t.disproportionateValue}
          </Label>
          <Textarea
            id="disproportionateValue"
            placeholder={t.disproportionateValuePlaceholder}
            rows={3}
            value={data.disproportionateValue || ""}
            onChange={(e) => update("disproportionateValue", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* High Stakes Moment Behavioral Question */}
        <div className="space-y-2.5">
          <Label htmlFor="highStakesMoment" className="text-base font-medium">
            {t.highStakesMoment}
          </Label>
          <Textarea
            id="highStakesMoment"
            placeholder={t.highStakesMomentPlaceholder}
            rows={3}
            value={data.highStakesMoment || ""}
            onChange={(e) => update("highStakesMoment", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* What Energizes */}
        <div className="space-y-2.5">
          <Label htmlFor="energizes" className="text-base font-medium flex items-center gap-2">
            {t.energizes} <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="energizes"
            placeholder={t.energizesPlaceholder}
            rows={2}
            value={data.energizes || ""}
            onChange={(e) => update("energizes", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* What Drains */}
        <div className="space-y-2.5">
          <Label htmlFor="drains" className="text-base font-medium">
            {t.drains}
          </Label>
          <Textarea
            id="drains"
            placeholder={t.drainsPlaceholder}
            rows={2}
            value={data.drains || ""}
            onChange={(e) => update("drains", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Rating Scales */}
        <div className="border-t border-border space-y-8 leading-7 pt-8">
          <RatingSlider
            label={t.ratingRisk}
            value={data.ratingRisk || 0}
            onChange={(v) => update("ratingRisk", v)}
            lowLabel={t.ratingRiskLow}
            highLabel={t.ratingRiskHigh}
          />

          <RatingSlider
            label={t.ratingSpeed}
            value={data.ratingSpeed || 0}
            onChange={(v) => update("ratingSpeed", v)}
            lowLabel={t.ratingSpeedLow}
            highLabel={t.ratingSpeedHigh}
          />

          <RatingSlider
            label={t.ratingPeople}
            value={data.ratingPeople || 0}
            onChange={(v) => update("ratingPeople", v)}
            lowLabel={t.ratingPeopleLow}
            highLabel={t.ratingPeopleHigh}
          />
        </div>
      </div>
    </div>
  )
}
