import { APPROVED_FAQS, TUNING_WINDOW, SETUP_TIME_CORE, SETUP_TIME_FULL } from "./site-content";

export type FaqItem = {
  id?: string;
  category?: string;
  categoryLabel?: string;
  q: string;
  a: string;
  tag?: string;
};

export const KNOWLEDGE_BASE_FAQS: FaqItem[] = [
  // 1. AI Voice & Experience
  {
    id: "sound-like-robot",
    category: "ai-experience",
    categoryLabel: "AI Voice & Experience",
    q: "Will it sound robotic to my callers?",
    a: "No. Your AI voice agent speaks with natural voice pacing, conducts realistic back-and-forth conversations, and handles interruptions smoothly. You hear full test call recordings and sign off on everything before your line ever goes live.",
    tag: "Voice Quality",
  },
  {
    id: "know-its-ai",
    category: "ai-experience",
    categoryLabel: "AI Voice & Experience",
    q: "Will callers know they are talking to AI?",
    a: "Most callers simply focus on getting their job scheduled immediately by someone who knows your exact pricing. If a caller asks directly, the AI answers honestly while seamlessly continuing to assist them.",
    tag: "Caller Transparency",
  },
  {
    id: "wrong-price",
    category: "ai-experience",
    categoryLabel: "AI Voice & Experience",
    q: "What if it quotes the wrong pricing or service detail?",
    a: "The AI is strictly trained on your exact pricing schedules, service areas, and company rules. It never guesses or hallucinates details—and both voice and website chat answers are grounded in your verified data.",
    tag: "Zero Hallucination",
  },
  {
    id: "if-it-breaks",
    category: "ai-experience",
    categoryLabel: "AI Voice & Experience",
    q: "What happens if a call fails or is disconnected?",
    a: "If an unexpected issue occurs, calls automatically fall back to your existing phone voicemail system or warm-transfer directly to your mobile phone. You are completely protected.",
    tag: "Fail-Safe Routing",
  },

  // 2. Setup & CRMs
  {
    id: "change-number",
    category: "setup-tech",
    categoryLabel: "Setup & CRMs",
    q: "Do I have to change my business phone number?",
    a: "Never. You keep your existing business phone number. You simply activate call forwarding—which takes under 2 minutes and works with any carrier.",
    tag: "Keep Your Number",
  },
  {
    id: "how-long-setup",
    category: "setup-tech",
    categoryLabel: "Setup & CRMs",
    q: "How long does setup take?",
    a: `${SETUP_TIME_CORE} for Core Crew and ${SETUP_TIME_FULL} for Full Crew, from kickoff to your agent taking live calls. Our team handles 100% of the build, knowledge base setup, calendar sync, and CRM pipeline configuration for you. What we need from you is a 60–90 minute kickoff session, your call script inputs, and feedback returned within 3 business days at each review point — that last one is the single biggest factor in hitting the dates.`,
    tag: "3–6 Week Build",
  },
  {
    id: "supported-crms",
    category: "setup-tech",
    categoryLabel: "Setup & CRMs",
    q: "Which CRMs and dispatch calendars do you support?",
    a: "We integrate directly with ServiceTitan, Housecall Pro, Jobber, FieldRoutes, PestPac and GorillaDesk on the field-service side, and with GoHighLevel, HubSpot, Salesforce, Zoho and Pipedrive on the sales side — plus Google Calendar for two-way job scheduling without double bookings, and 400+ other systems via direct webhooks and APIs.",
    tag: "Direct CRM Sync",
  },
  {
    id: "after-hours-rules",
    category: "setup-tech",
    categoryLabel: "Setup & CRMs",
    q: "Can I customize after-hours vs daytime handling?",
    a: "Yes. You can route calls differently based on time of day—for example, booking daytime estimates during normal hours and dispatching high-priority emergency rates directly to on-call technicians at night.",
    tag: "Custom Dispatch Rules",
  },

  // 3. Pricing & Guarantee
  {
    id: "why-trust-you",
    category: "pricing-contracts",
    categoryLabel: "Pricing & Terms",
    q: "Why choose Minions.AI over a traditional call center?",
    a: `Traditional call centers charge per minute, place callers on hold, and can only take basic messages. Minions.AI is a one-time build fee rather than a per-minute bill, answers in under 3 seconds 24/7, quotes accurate pricing, books directly to your calendar, and logs every lead automatically — then stays open for ${TUNING_WINDOW.days} days of tuning after go-live.`,
    tag: "Call Center vs AI",
  },
  {
    id: "contracts-and-billing",
    category: "pricing-contracts",
    categoryLabel: "Pricing & Terms",
    q: "Are there long-term contracts or cancellation fees?",
    a: "No long-term contract. The build is a fixed one-time fee paid across three milestones — 40% on signature, 40% when we hand you the working system to test, 20% at go-live — and the price does not change without your written approval. Either party may pause the project in writing, in which case work already delivered is invoiced at the last completed milestone and nothing beyond it. Ongoing care afterwards is optional and cancellable on 30 days' notice.",
    tag: "Fixed Price, No Lock-In",
  },
  {
    id: "tuning-window",
    category: "pricing-contracts",
    categoryLabel: "Pricing & Terms",
    q: `What does the ${TUNING_WINDOW.days}-day tuning window cover?`,
    a: `For ${TUNING_WINDOW.days} days after your agent takes its first live call, we keep working on it at no extra cost — script wording, routing rules, follow-up sequences and edge cases you only discover once real callers are on the line. It is included in the build fee. We do not offer a money-back guarantee; what we offer instead is that you approve the script before we build, you run the test calls yourself, and 60% of the fee falls due only after you have a working system in front of you.`,
    tag: "Included In Your Build",
  },

  // 4. Compliance & Legal
  {
    id: "calls-recorded",
    category: "compliance-safety",
    categoryLabel: "Compliance & Safety",
    q: "Are call logs and recordings compliant with state laws?",
    a: "Yes. Call recording and transcription are fully configurable to comply with state laws (including two-party consent states like California and Illinois). All consent disclaimers are reviewed and configured during onboarding.",
    tag: "Two-Party Consent",
  },
  {
    id: "data-security",
    category: "compliance-safety",
    categoryLabel: "Compliance & Safety",
    q: "Who owns our customer data and call logs?",
    a: "You own 100% of your customer records, phone logs, and call recordings. Your business data is isolated and encrypted in transit and at rest, and is never shared or used to train public models.",
    tag: "256-bit AES Security",
  },

  // 5. Your Build Team
  {
    id: "who-builds-this",
    category: "the-team",
    categoryLabel: "Your Build Team",
    q: "Who configures and supports our AI crew?",
    a: "You work directly with the engineers who build your system — not a support queue or an account manager. The same people engineer your prompt architecture, test your phone line against background job-site noise, and handle your ongoing support.",
    tag: "Direct Access"
  },
  {
    id: "ongoing-updates",
    category: "the-team",
    categoryLabel: "Your Build Team",
    q: "What happens when our pricing or service areas change?",
    a: "Simply text or message us your changes. We update your AI crew's knowledge profile and dispatch rules within hours, with zero downtime on your live line.",
    tag: "Zero-Downtime Updates",
  },
];

export const homeFaq: FaqItem[] = APPROVED_FAQS.map((item) => ({
  q: item.q,
  a: item.a,
}));

export const fullFaq: FaqItem[] = KNOWLEDGE_BASE_FAQS;

