import { getPortfolio } from "@/lib/kv"
import { PortfolioRenderer } from "@/components/portfolio/portfolio-renderer"
import { getExamplePortfolio } from "@/lib/examples"
import { PreviewPortfolio } from "@/components/portfolio/preview-portfolio"

interface PortfolioPageProps {
  params: Promise<{ id: string }>
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { id } = await params

  // Check for hardcoded examples first
  const example = getExamplePortfolio(id)
  if (example) {
    return <PortfolioRenderer portfolio={example} />
  }

  // This allows sessionStorage fallback to work even when KV is configured
  const portfolio = await getPortfolio(id)

  if (portfolio) {
    return <PortfolioRenderer portfolio={portfolio} />
  }

  // Fallback to client-side sessionStorage via PreviewPortfolio
  return <PreviewPortfolio id={id} />
}
