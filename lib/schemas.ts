import { z } from "zod"

export const portfolioGoalOptions = [
  { value: "job-hunting", label: { en: "Looking for a job", it: "Cerco lavoro" } },
  { value: "freelance", label: { en: "Finding clients", it: "Trovare clienti" } },
  { value: "networking", label: { en: "Building network", it: "Costruire network" } },
  { value: "personal-brand", label: { en: "Personal branding", it: "Personal branding" } },
  { value: "investor", label: { en: "Attracting investors", it: "Attrarre investitori" } },
  { value: "collaborators", label: { en: "Finding collaborators", it: "Trovare collaboratori" } },
] as const

export type PortfolioGoal = (typeof portfolioGoalOptions)[number]["value"]

// Step 1: Identity - Who You Are
export const identitySchema = z.object({
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  goal: z.enum(["job-hunting", "freelance", "networking", "personal-brand", "investor", "collaborators"]).optional(),
  currentRole: z.string().optional(), // Used in prompt but NOT shown in output
  obsession: z.string().min(1, "What can't you stop thinking about?"),
  unpopularOpinion: z.string().optional(),
  childhood: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  profileImage: z.string().optional(),
})

// Step 2: Superpower
export const strengthSchema = z.object({
  problemSolved: z.string().min(1, "Tell us about a problem you solved"),
  disproportionateValue: z.string().optional(),
  highStakesMoment: z.string().optional(),
  energizes: z.string().min(1, "What challenges energize you?"),
  drains: z.string().optional(),
  ratingRisk: z.number().min(1).max(5).optional(),
  ratingSpeed: z.number().min(1).max(5).optional(),
  ratingPeople: z.number().min(1).max(5).optional(),
})

// Step 3: Story - A defining moment
export const proofSchema = z.object({
  pivotMoment: z.string().min(1, "Describe a moment that changed you"),
  whatChanged: z.string().min(1, "What shifted in you?"),
  toughDecision: z.string().optional(),
  uncertaintyDefault: z.string().optional(),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  ratingAdaptability: z.number().min(1).max(5).optional(),
  ratingLearning: z.number().min(1).max(5).optional(),
})

// Step 4: Scars - Failures that shaped you
export const frictionSchema = z.object({
  biggestMistake: z.string().min(1, "What's the biggest mistake you've made?"),
  letDown: z.string().min(1, "Who did you let down?"),
  wouldntDoAgain: z.string().optional(),
  automaticChange: z.string().optional(),
  ratingOwnership: z.number().min(1).max(5).optional(),
  ratingRecovery: z.number().min(1).max(5).optional(),
})

// Step 5: Manual - How to work with you
export const workStyleSchema = z.object({
  weirdHabit: z.string().min(1, "What's the strangest thing you do when working?"),
  dealbreaker: z.string().min(1, "What's a dealbreaker?"),
  perfectDay: z.string().optional(),
  misunderstood: z.string().optional(),
  ratingStructure: z.number().min(1).max(5).optional(),
  ratingFeedback: z.number().min(1).max(5).optional(),
})

// Complete wizard data
export const wizardDataSchema = z.object({
  identity: identitySchema,
  strength: strengthSchema,
  proof: proofSchema,
  friction: frictionSchema,
  workStyle: workStyleSchema,
})

export type WizardData = z.infer<typeof wizardDataSchema>
export type IdentityData = z.infer<typeof identitySchema>
export type StrengthData = z.infer<typeof strengthSchema>
export type ProofData = z.infer<typeof proofSchema>
export type FrictionData = z.infer<typeof frictionSchema>
export type WorkStyleData = z.infer<typeof workStyleSchema>

export const portfolioBlockSchema = z.object({
  type: z.enum(["p", "quote", "list", "project-link", "stat", "trait"]),
  content: z.union([z.string(), z.array(z.string())]),
  url: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (!val || val.trim() === "") return undefined
      try {
        new URL(val)
        return val
      } catch {
        return undefined
      }
    }),
  label: z.string().optional(),
  value: z.number().optional(), // For ratings/stats
})

export const portfolioSectionSchema = z.object({
  id: z.string(),
  heading: z.string(),
  blocks: z.array(portfolioBlockSchema),
})

export const portfolioOutputSchema = z.object({
  headline: z.string(),
  subtitle: z.string(),
  sections: z.array(portfolioSectionSchema),
  toneTags: z.array(z.string()),
  callouts: z.array(z.string()).optional(),
  quickLinks: z
    .array(
      z.object({
        label: z.string(),
        url: z.string(),
        icon: z.enum(["linkedin", "portfolio", "github", "twitter", "email"]).optional(),
      }),
    )
    .optional(),
  traits: z
    .array(
      z.object({
        name: z.string(),
        value: z.number().min(1).max(5),
        lowLabel: z.string(),
        highLabel: z.string(),
      }),
    )
    .optional(),
  strengths: z.array(z.string()).optional(),
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    )
    .optional(),
})

export type PortfolioBlock = z.infer<typeof portfolioBlockSchema>
export type PortfolioSection = z.infer<typeof portfolioSectionSchema>
export type PortfolioOutput = z.infer<typeof portfolioOutputSchema>

export const bilingualPortfolioSchema = z.object({
  en: portfolioOutputSchema,
  it: portfolioOutputSchema,
})

export type BilingualPortfolio = z.infer<typeof bilingualPortfolioSchema>

export const storedPortfolioSchema = z.object({
  id: z.string(),
  input: wizardDataSchema,
  output: bilingualPortfolioSchema,
  variant: z.string().optional(),
  createdAt: z.string(),
})

export type StoredPortfolio = z.infer<typeof storedPortfolioSchema>

export const variantOptions = [
  { value: "balanced", label: "Balanced" },
  { value: "direct", label: "More Direct" },
  { value: "poetic", label: "More Poetic" },
  { value: "analytical", label: "More Analytical" },
] as const

export type VariantOption = (typeof variantOptions)[number]["value"]
