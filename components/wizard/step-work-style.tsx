"use client"

import type { WorkStyleData } from "@/lib/schemas"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { InfoTooltip } from "@/components/info-tooltip"
import { useTranslation, type Locale } from "@/lib/i18n"

interface StepWorkStyleProps {
  data: WorkStyleData
  onChange: (data: WorkStyleData) => void
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

export function StepWorkStyle({ data, onChange, locale = "en" }: StepWorkStyleProps) {
  const t = useTranslation(locale).wizard.step5

  const update = (field: keyof WorkStyleData, value: string | number) => {
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

      <div className="space-y-8">
        {/* Weird Habit */}
        <div className="space-y-2.5">
          <Label htmlFor="weirdHabit" className="text-base font-medium flex items-center gap-2">
            {t.weirdHabit} <span className="text-destructive">*</span>
            <InfoTooltip content={t.tooltip} />
          </Label>
          <Textarea
            id="weirdHabit"
            placeholder={t.weirdHabitPlaceholder}
            rows={2}
            value={data.weirdHabit || ""}
            onChange={(e) => update("weirdHabit", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Dealbreaker */}
        <div className="space-y-2.5">
          <Label htmlFor="dealbreaker" className="text-base font-medium flex items-center gap-2">
            {t.dealbreaker} <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="dealbreaker"
            placeholder={t.dealbreakerPlaceholder}
            rows={2}
            value={data.dealbreaker || ""}
            onChange={(e) => update("dealbreaker", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Perfect Day */}
        <div className="space-y-2.5">
          <Label htmlFor="perfectDay" className="text-base font-medium">
            {t.perfectDay}
          </Label>
          <Textarea
            id="perfectDay"
            placeholder={t.perfectDayPlaceholder}
            rows={3}
            value={data.perfectDay || ""}
            onChange={(e) => update("perfectDay", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Misunderstood */}
        <div className="space-y-2.5">
          <Label htmlFor="misunderstood" className="text-base font-medium">
            {t.misunderstood}
          </Label>
          <Textarea
            id="misunderstood"
            placeholder={t.misunderstoodPlaceholder}
            rows={2}
            value={data.misunderstood || ""}
            onChange={(e) => update("misunderstood", e.target.value)}
            className="resize-none rounded-lg border-2"
          />
        </div>

        {/* Rating Scales */}
        <div className="pt-8 border-t border-border space-y-8">
          

          <RatingSlider
            label={t.ratingStructure}
            value={data.ratingStructure || 0}
            onChange={(v) => update("ratingStructure", v)}
            lowLabel={t.ratingStructureLow}
            highLabel={t.ratingStructureHigh}
          />

          <RatingSlider
            label={t.ratingFeedback}
            value={data.ratingFeedback || 0}
            onChange={(v) => update("ratingFeedback", v)}
            lowLabel={t.ratingFeedbackLow}
            highLabel={t.ratingFeedbackHigh}
          />
        </div>
      </div>
    </div>
  )
}
