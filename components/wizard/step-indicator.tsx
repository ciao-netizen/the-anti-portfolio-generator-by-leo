"use client"

import { Check, Lock } from "lucide-react"

interface StepIndicatorProps {
  steps: string[]
  currentStep: number
  isStepCompleted?: (stepIndex: number) => boolean
  onStepClick?: (stepIndex: number) => void
}

export function StepIndicator({ steps, currentStep, isStepCompleted, onStepClick }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between gap-1">
      {steps.map((step, index) => {
        const isActive = index === currentStep
        const isCompleted = isStepCompleted ? isStepCompleted(index) : false
        const isAccessible = index === 0 || (isStepCompleted ? isStepCompleted(index - 1) : false)
        const isBlocked = index > currentStep && !isAccessible
        const isClickable = (isCompleted || isAccessible) && onStepClick && !isActive

        return (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center w-full">
              {/* Step dot */}
              <button
                type="button"
                onClick={() => isClickable && onStepClick(index)}
                disabled={!isClickable}
                className={`
                  w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium 
                  transition-all duration-200
                  ${isClickable ? "cursor-pointer hover:scale-110 hover:ring-2 hover:ring-primary/50" : ""}
                  ${isActive ? "bg-foreground text-background ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}
                  ${isCompleted && !isActive ? "bg-primary/10 text-primary" : ""}
                  ${isBlocked ? "bg-muted text-muted-foreground/30 cursor-not-allowed" : ""}
                  ${!isActive && !isCompleted && !isBlocked ? "bg-border text-muted-foreground" : ""}
                `}
              >
                {isCompleted && !isActive ? (
                  <Check className="w-3.5 h-3.5" />
                ) : isBlocked ? (
                  <Lock className="w-3 h-3" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </button>

              {/* Step label - only show on desktop */}
              <span
                className={`
                  text-[9px] mt-1.5 hidden sm:block transition-colors uppercase tracking-wider font-medium
                  ${isActive ? "text-foreground" : ""}
                  ${isCompleted && !isActive ? "text-primary/70" : ""}
                  ${isBlocked ? "text-muted-foreground/30" : ""}
                  ${!isActive && !isCompleted && !isBlocked ? "text-muted-foreground/50" : ""}
                `}
              >
                {step}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-[1px] mx-1.5 sm:mx-2">
                <div
                  className={`
                    h-full transition-all duration-300
                    ${isCompleted ? "bg-primary/30" : "bg-border"}
                  `}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
