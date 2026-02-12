import { nanoid } from "nanoid"
import {
  wizardDataSchema,
  portfolioOutputSchema,
  type WizardData,
  type VariantOption,
  type StoredPortfolio,
  type PortfolioGoal,
} from "./schemas"
import { SYSTEM_PROMPT, getDeveloperPrompt, buildUserPrompt } from "./prompts"
import { savePortfolio } from "./kv"

function generateNiceId(name?: string): string {
  const randomSuffix = nanoid(4).toLowerCase()

  if (!name || name.trim() === "") {
    return `portfolio-${randomSuffix}`
  }

  // Clean and slugify the name
  const slug = name
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Remove consecutive hyphens
    .slice(0, 20) // Limit length

  return `${slug}-${randomSuffix}`
}

async function callOpenAI(messages: { role: string; content: string }[]): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages,
      max_tokens: 5000,
      temperature: 0.8,
      response_format: { type: "json_object" },
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`OpenAI API error: ${response.status} - ${errorBody}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}

async function parseAndValidateResponse(text: string): Promise<any> {
  let parsedOutput
  try {
    parsedOutput = JSON.parse(text)
  } catch (parseError) {
    const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/)
    const rawJsonMatch = text.match(/(\{[\s\S]*\})/)

    const jsonMatch = codeBlockMatch || rawJsonMatch
    if (!jsonMatch) {
      throw new Error("No valid JSON found in OpenAI response")
    }

    const jsonStr = (codeBlockMatch ? codeBlockMatch[1] : jsonMatch[0]).trim()
    parsedOutput = JSON.parse(jsonStr)
  }

  // Clean up invalid URLs
  if (parsedOutput.sections) {
    parsedOutput.sections.forEach((section: any) => {
      if (section.blocks) {
        section.blocks.forEach((block: any) => {
          if (block.url) {
            if (typeof block.url !== "string" || block.url.trim() === "") {
              delete block.url
            } else {
              try {
                new URL(block.url)
              } catch {
                delete block.url
              }
            }
          }
        })
      }
    })
  }

  return portfolioOutputSchema.parse(parsedOutput)
}

export async function generatePortfolio(
  input: WizardData,
  variant: VariantOption = "balanced",
  primaryLanguage: "en" | "it" = "en",
): Promise<StoredPortfolio> {
  // Validate input
  const validatedInput = wizardDataSchema.parse(input)

  const goal = validatedInput.identity.goal as PortfolioGoal | undefined
  const currentRole = validatedInput.identity.currentRole

  const userPrompt = buildUserPrompt(validatedInput)
  const developerPrompt = getDeveloperPrompt(variant, goal, currentRole, primaryLanguage)

  console.log(`[v0] Generating portfolio in ${primaryLanguage} with gpt-4o...`)
  console.log(`[v0] Goal: ${goal || "not specified"}, Role: ${currentRole || "not specified"}`)

  const languageInstruction =
    primaryLanguage === "it"
      ? `LINGUA OBBLIGATORIA: Scrivi TUTTO in italiano. Ogni parola, frase, heading, e contenuto DEVE essere in italiano. NON usare inglese.`
      : `REQUIRED LANGUAGE: Write EVERYTHING in English. Every word, sentence, heading, and content MUST be in English. Do NOT use Italian.`

  const primaryText = await callOpenAI([
    { role: "system", content: `${SYSTEM_PROMPT}\n\n${languageInstruction}` },
    { role: "user", content: `${languageInstruction}\n\n${developerPrompt}` },
    { role: "user", content: `${languageInstruction}\n\n${userPrompt}` },
  ])

  console.log(`[v0] Parsing ${primaryLanguage} version...`)
  const primaryOutput = await parseAndValidateResponse(primaryText)

  const secondaryLanguage = primaryLanguage === "en" ? "it" : "en"
  console.log(`[v0] Translating to ${secondaryLanguage}...`)

  const translationPrompt =
    secondaryLanguage === "it"
      ? `Traduci il seguente portfolio JSON in italiano perfetto. Mantieni la stessa struttura JSON, traduci SOLO il contenuto testuale (title, subtitle, sections headings, blocks content, toneTags, callouts). NON modificare: type, id, url.\n\nJSON da tradurre:\n${JSON.stringify(primaryOutput, null, 2)}`
      : `Translate the following portfolio JSON into perfect English. Keep the same JSON structure, translate ONLY the text content (title, subtitle, section headings, block content, toneTags, callouts). DO NOT modify: type, id, url.\n\nJSON to translate:\n${JSON.stringify(primaryOutput, null, 2)}`

  const translatedText = await callOpenAI([
    {
      role: "system",
      content:
        secondaryLanguage === "it"
          ? "Sei un traduttore professionale italiano. Traduci accuratamente mantenendo tono e stile."
          : "You are a professional English translator. Translate accurately while maintaining tone and style.",
    },
    { role: "user", content: translationPrompt },
  ])

  console.log(`[v0] Parsing ${secondaryLanguage} translation...`)
  const secondaryOutput = await parseAndValidateResponse(translatedText)

  const bilingualOutput = {
    en: primaryLanguage === "en" ? primaryOutput : secondaryOutput,
    it: primaryLanguage === "it" ? primaryOutput : secondaryOutput,
  }

  const niceId = generateNiceId(validatedInput.identity.name)

  // Create stored portfolio
  const portfolio: StoredPortfolio = {
    id: niceId,
    input: validatedInput,
    output: bilingualOutput,
    variant,
    createdAt: new Date().toISOString(),
  }

  try {
    await savePortfolio(portfolio)
  } catch (error) {
    console.error("[v0] Failed to save portfolio to KV:", error)
    // Continue anyway - portfolio can still be used from sessionStorage
  }

  return portfolio
}
