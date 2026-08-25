export type PricingPlan = {
  name: string;
  price: string | null;
  setupFee?: string | null;
  minutes?: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
  badge?: string;
  description?: string;
  turnaround?: string;
};

export type CalculatorPreset = {
  id: "budget" | "standard" | "premium";
  name: string;
  models: string;
  ratePerMin: number;
  description: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Build",
    price: "$1,000",
    setupFee: "One-time setup",
    popular: false,
    description: "Ideal for solo operators & small crews wanting reliable after-hours and overflow answering.",
    turnaround: "Live in 5–7 days",
    features: [
      "1 custom AI voice agent configured",
      "After-hours & overflow call answering",
      "Direct CRM integration (ServiceTitan, Jobber, FieldRoutes, etc.)",
      "Instant SMS alerts & call summaries",
      "1 post-launch prompt revision round",
    ],
    ctaLabel: "Get Starter Build",
  },
  {
    name: "Full Crew Build",
    price: "$2,000",
    setupFee: "One-time setup",
    popular: true,
    badge: "Most Popular",
    description: "For busy trade businesses needing 24/7 automated booking, dispatch, and outbound workflows.",
    turnaround: "Live in 5–7 days",
    features: [
      "Everything in Starter Build",
      "24/7 full inbound answering & dispatch routing",
      "Outbound confirmation & quote follow-up calls",
      "Emergency escalation & warm transfer flows",
      "2 post-launch revision rounds + priority launch",
    ],
    ctaLabel: "Get Full Crew Build",
  },
  {
    name: "Enterprise Build",
    price: null,
    setupFee: "Custom scope",
    popular: false,
    description: "Built for multi-location operations, franchises, and complex custom CRM / dispatch workflows.",
    turnaround: "Custom roadmap",
    features: [
      "Multi-location phone & branch architectures",
      "Custom ERP / API webhook workflows",
      "Dedicated project manager & prompt engineer",
      "Unlimited build revisions during implementation",
    ],
    ctaLabel: "Contact Sales",
  },
];

export const calculatorPresets: CalculatorPreset[] = [
  {
    id: "budget",
    name: "Budget",
    models: "GPT-4o mini / Haiku",
    ratePerMin: 0.076,
    description: "High-speed answering for basic triage & messaging.",
  },
  {
    id: "standard",
    name: "Standard (Recommended)",
    models: "GPT-4o / GPT-4.1",
    ratePerMin: 0.13,
    description: "Industry-standard accuracy for complex trade scheduling.",
  },
  {
    id: "premium",
    name: "Frontier",
    models: "Claude 3.5 Sonnet / GPT-5",
    ratePerMin: 0.195,
    description: "Highest reasoning for deep diagnostic conversations.",
  },
];

export const pricingFaq = [
  {
    q: "What is NOT included in the one-time setup fee?",
    a: "Just the raw AI phone call minutes (~$0.13/min) — which are billed directly by Retell AI (the voice engine platform) to your account with zero markup from us, exactly like a phone utility bill.",
  },
  {
    q: "Can I get ongoing maintenance & prompt updates after launch?",
    a: "Yes! While completely optional, we offer our Crew Care Plan ($499/mo for Starter, $940/mo for Full Crew) if you'd like us to handle ongoing seasonal price updates, prompt tuning, transcript audits, and priority support. You can start, pause, or cancel anytime.",
  },
  {
    q: "How long does setup take from start to finish?",
    a: "5 to 7 business days from our initial 30-minute onboarding call to having your AI crew tested, approved, and live taking real customer calls.",
  },
  {
    q: "Which CRMs and dispatch systems do you integrate with?",
    a: "We natively connect with ServiceTitan, Housecall Pro, Jobber, FieldRoutes, PestPac, GorillaDesk, and other systems via direct webhooks and APIs.",
  },
  {
    q: "What if the AI isn't working the way I want?",
    a: "Every build includes dedicated revision rounds where we fine-tune prompts, voice tone, and booking logic on test calls until you are 100% satisfied before pointing your live phone lines.",
  },
];
