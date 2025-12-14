import { HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface InfoTooltipProps {
  content: string | { dos?: string[]; donts?: string[] }
}

export function InfoTooltip({ content }: InfoTooltipProps) {
  const renderContent = () => {
    if (typeof content === "string") {
      return <p className="text-xs">{content}</p>
    }

    if (!content) {
      return <p className="text-xs">More information coming soon.</p>
    }

    return (
      <div className="space-y-2 text-xs">
        {content.dos && content.dos.length > 0 && (
          <div className="space-y-1">
            <p className="font-medium text-primary">✅ DO:</p>
            <ul className="space-y-0.5 pl-1">
              {content.dos.map((item, i) => (
                <li key={i} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {content.donts && content.donts.length > 0 && (
          <div className="space-y-1">
            <p className="font-medium text-destructive">❌ DON'T:</p>
            <ul className="space-y-0.5 pl-1">
              {content.donts.map((item, i) => (
                <li key={i} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center justify-center h-4 w-4 rounded-full text-muted-foreground hover:text-primary transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="top">{renderContent()}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
