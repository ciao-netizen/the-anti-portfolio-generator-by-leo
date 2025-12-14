import { type NextRequest, NextResponse } from "next/server"
import { portfolioOutputSchema } from "@/lib/schemas"

export async function POST(req: NextRequest) {
  try {
    const { portfolio, targetLang } = await req.json()

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a professional translator. Translate the following portfolio content to ${targetLang === "it" ? "Italian" : "English"}. Maintain the tone, style, and formatting. Return only valid JSON with the same structure.`,
          },
          {
            role: "user",
            content: JSON.stringify(portfolio),
          },
        ],
        temperature: 0.3,
      }),
    })

    if (!response.ok) {
      throw new Error("Translation failed")
    }

    const data = await response.json()
    const translatedText = data.choices[0].message.content

    // Parse and validate
    let parsed
    try {
      parsed = JSON.parse(translatedText)
    } catch {
      const jsonMatch = translatedText.match(/```(?:json)?\s*([\s\S]*?)```/) || translatedText.match(/(\{[\s\S]*\})/)
      if (!jsonMatch) throw new Error("No JSON in response")
      parsed = JSON.parse(jsonMatch[1].trim())
    }

    const validated = portfolioOutputSchema.parse(parsed)

    return NextResponse.json(validated)
  } catch (error) {
    console.error("[v0] Translation error:", error)
    return NextResponse.json({ error: "Translation failed" }, { status: 500 })
  }
}
