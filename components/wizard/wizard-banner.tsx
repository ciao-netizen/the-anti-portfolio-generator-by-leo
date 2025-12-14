import type React from "react"
import { Search, Info, AlertCircle, Lightbulb } from "lucide-react"

interface WizardBannerProps {
  variant: "info" | "success" | "warning" | "insight"
  children: React.ReactNode
}

const variantConfig: Record<
  WizardBannerProps["variant"],
  {
    bg: string
    border: string
    text: string
    icon: React.ElementType
  }
> = {
  info: {
    bg: "bg-primary/5",
    border: "border-primary/20",
    text: "text-primary",
    icon: Info,
  },
  success: {
    bg: "bg-green-50 dark:bg-green-950/20",
    border: "border-green-200 dark:border-green-900/30",
    text: "text-green-900 dark:text-green-100",
    icon: Search,
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-900/30",
    text: "text-amber-900 dark:text-amber-100",
    icon: AlertCircle,
  },
  insight: {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-900/30",
    text: "text-blue-900 dark:text-blue-100",
    icon: Lightbulb,
  },
}

export function WizardBanner({ variant, children }: WizardBannerProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div className={`p-4 rounded-lg border ${config.bg} ${config.border}`}>
      <div className="flex gap-3 items-start">
        <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${config.text}`} />
        <p className={`text-sm ${config.text}`}>{children}</p>
      </div>
    </div>
  )
}
