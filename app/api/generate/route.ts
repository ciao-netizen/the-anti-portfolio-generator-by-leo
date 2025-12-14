import { NextResponse } from "next/server"
import { generatePortfolio } from "@/lib/generate-portfolio"
import { wizardDataSchema } from "@/lib/schemas"
import { z } from "zod"

const requestSchema = z.object({
  input: wizardDataSchema,
  variant: z.enum(["balanced", "direct", "poetic", "analytical"]).optional(),
  locale: z.enum(["en", "it"]).optional(), // Accept locale from request
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { input, variant, locale } = requestSchema.parse(body)

    const result = await generatePortfolio(input, variant || "balanced", locale || "en")

    return NextResponse.json({
      id: result.id,
      portfolio: result,
      success: true,
    })
  } catch (error) {
    console.error("Portfolio generation error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input data", details: error.errors }, { status: 400 })
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate portfolio" },
      { status: 500 },
    )
  }
}
