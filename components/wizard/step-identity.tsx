"use client"

import type React from "react"
import { useState, useRef } from "react"
import type { IdentityData } from "@/lib/schemas"
import { portfolioGoalOptions } from "@/lib/schemas"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { InfoTooltip } from "@/components/info-tooltip"
import { useTranslation, type Locale } from "@/lib/i18n"
import { Upload, X, Check } from "lucide-react"
import Image from "next/image"
import { WizardBanner } from "./wizard-banner"

interface StepIdentityProps {
  data: IdentityData
  onChange: (data: IdentityData) => void
  locale?: Locale
}

export function StepIdentity({ data, onChange, locale = "en" }: StepIdentityProps) {
  const t = useTranslation(locale).wizard.step1
  const [imagePreview, setImagePreview] = useState<string | null>(data.profileImage || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const update = (field: keyof IdentityData, value: string) => {
    onChange({ ...data, [field]: value })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file size (2MB limit instead of 5MB)
    if (file.size > 2 * 1024 * 1024) {
      alert(locale === "en" ? "Image must be under 2MB" : "L'immagine deve essere sotto i 2MB")
      return
    }

    // Create an image element to resize
    const img = new window.Image()
    const reader = new FileReader()

    reader.onload = (event) => {
      img.onload = () => {
        // Create canvas to resize image
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Calculate new dimensions (max 400x400)
        const maxSize = 400
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > maxSize) {
            height = (height * maxSize) / width
            width = maxSize
          }
        } else {
          if (height > maxSize) {
            width = (width * maxSize) / height
            height = maxSize
          }
        }

        canvas.width = width
        canvas.height = height

        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height)

        // Convert to base64 with compression (0.8 quality)
        const base64 = canvas.toDataURL("image/jpeg", 0.8)

        setImagePreview(base64)
        update("profileImage", base64)
      }

      img.src = event.target?.result as string
    }

    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setImagePreview(null)
    update("profileImage", "")
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-primary text-xs font-medium tracking-wider uppercase">{t.number}</p>
        <h2 className="text-3xl sm:text-4xl font-serif">{t.title}</h2>
        <p className="text-base text-muted-foreground leading-relaxed">{t.subtitle}</p>
      </div>

      <WizardBanner variant="info">
        {locale === "en" ? (
          <>
            <strong>AI becomes generic with abstract values.</strong> It becomes surgical with behaviors and choices.{" "}
            <span className="block mt-1">→ We ask for specifics: what you did, how you reacted, what you chose.</span>
          </>
        ) : (
          <>
            <strong>L'AI diventa generica con valori astratti.</strong> Diventa chirurgica con comportamenti e scelte.{" "}
            <span className="block mt-1">→ Chiediamo dettagli: cosa hai fatto, come hai reagito, cosa hai scelto.</span>
          </>
        )}
      </WizardBanner>

      <div className="space-y-8">
        {/* Profile Image */}
        <div className="space-y-2.5">
          <Label className="text-base font-medium">{t.profileImage}</Label>
          {!imagePreview ? (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-border rounded-lg hover:border-primary/40 hover:bg-accent/20 transition-all"
            >
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{t.uploadPhoto}</span>
            </button>
          ) : (
            <div className="relative w-24 h-24 group">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image src={imagePreview || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
              </div>
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-1 -right-1 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </div>

        {/* Name + Location */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2.5">
            <Label htmlFor="name" className="text-base font-medium flex items-center gap-2">
              {t.name} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder={t.namePlaceholder}
              value={data.name || ""}
              onChange={(e) => update("name", e.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2.5">
            <Label htmlFor="location" className="text-base font-medium flex items-center gap-2">
              {t.location} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="location"
              placeholder={t.locationPlaceholder}
              value={data.location || ""}
              onChange={(e) => update("location", e.target.value)}
              className="h-11"
            />
          </div>
        </div>

        {/* Childhood Dream */}
        <div className="space-y-2.5">
          <Label htmlFor="childhood" className="text-base font-medium flex items-center gap-2">
            {t.childhood}
            <InfoTooltip content={t.childhoodHint} />
          </Label>
          <Textarea
            id="childhood"
            placeholder={t.childhoodPlaceholder}
            rows={2}
            value={data.childhood || ""}
            onChange={(e) => update("childhood", e.target.value)}
            className="resize-none"
          />
        </div>

        {/* Obsession - Main Question */}
        <div className="space-y-2.5">
          <Label htmlFor="obsession" className="text-base font-medium flex items-center gap-2">
            {t.obsession} <span className="text-destructive">*</span>
            <InfoTooltip content={`${t.tooltip} ${t.obsessionHint}`} />
          </Label>
          <Textarea
            id="obsession"
            placeholder={t.obsessionPlaceholder}
            rows={3}
            value={data.obsession || ""}
            onChange={(e) => update("obsession", e.target.value)}
            className="resize-none"
          />
        </div>

        {/* Unpopular Opinion */}
        <div className="space-y-2.5">
          <Label htmlFor="unpopularOpinion" className="text-base font-medium flex items-center gap-2">
            {locale === "en" ? "Your unpopular opinion" : "La tua opinione poco popolare"}
            <InfoTooltip
              content={
                locale === "en"
                  ? "Share something that not many people agree with you on."
                  : "Condividi qualcosa su cui non molte persone concordano con te."
              }
            />
          </Label>
          <Textarea
            id="unpopularOpinion"
            placeholder={
              locale === "en"
                ? "e.g. I think pineapple goes well on pizza."
                : "Penso che l'ananas stia bene sulla pizza..."
            }
            rows={3}
            value={data.unpopularOpinion || ""}
            onChange={(e) => update("unpopularOpinion", e.target.value)}
            className="resize-none"
          />
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="currentRole" className="text-base font-medium flex items-center gap-2">
            {t.currentRole}
            <InfoTooltip content={t.currentRoleHint} />
          </Label>
          <Input
            id="currentRole"
            placeholder={t.currentRolePlaceholder}
            value={data.currentRole || ""}
            onChange={(e) => update("currentRole", e.target.value)}
            className="h-11"
          />
        </div>

        {/* Portfolio Goal */}
        <div className="space-y-3">
          <Label className="text-base font-medium flex items-center gap-2">
            {locale === "en"
              ? "What's your goal with this anti-portfolio?"
              : "Qual è il tuo obiettivo con questo anti-portfolio?"}
            <span className="text-destructive">*</span>
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {portfolioGoalOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => onChange({ ...data, goal: option.value })}
                className={`px-3 py-2.5 text-sm rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                  data.goal === option.value
                    ? "border-primary bg-primary/5 text-primary font-medium"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {data.goal === option.value && <Check className="w-3.5 h-3.5" />}
                {option.label[locale]}
              </button>
            ))}
          </div>
        </div>

        {/* Links - Collapsible */}
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xs group-open:rotate-90 transition-transform">▶</span>
              <span>{locale === "en" ? "Add links (optional)" : "Aggiungi link (opzionale)"}</span>
            </div>
          </summary>
          <div className="mt-5 space-y-5 pl-4 border-l-2 border-border">
            <div className="space-y-2.5">
              <Label htmlFor="linkedinUrl" className="text-base font-medium flex items-center gap-2">
                {t.linkedinUrl}
                <InfoTooltip content={t.linkedinHint} />
              </Label>
              <Input
                id="linkedinUrl"
                type="url"
                placeholder={t.linkedinPlaceholder}
                value={data.linkedinUrl || ""}
                onChange={(e) => update("linkedinUrl", e.target.value)}
                className="h-11"
              />
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="portfolioUrl" className="text-base font-medium flex items-center gap-2">
                {t.portfolioUrl}
                <InfoTooltip content={t.portfolioUrlHint} />
              </Label>
              <Input
                id="portfolioUrl"
                type="url"
                placeholder={t.portfolioUrlPlaceholder}
                value={data.portfolioUrl || ""}
                onChange={(e) => update("portfolioUrl", e.target.value)}
                className="h-11"
              />
            </div>
          </div>
        </details>
      </div>
    </div>
  )
}
