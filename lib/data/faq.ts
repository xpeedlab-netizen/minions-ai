import { APPROVED_FAQS, GUARANTEE, SETUP_TIME_PROMISE } from "./site-content";

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
    a: `Your entire system is fully configured and live in ${SETUP_TIME_PROMISE.toLowerCase()}. Our team handles 100% of the build, knowledge base setup, calendar sync, and CRM pipeline configuration for you.`,
    tag: "7-Day Onboarding",
  },
  {
    id: "supported-crms",
    category: "setup-tech",
    categoryLabel: "Setup & CRMs",
    q: "Which CRMs and dispatch calendars do you support?",
    a: "We integrate directly with ServiceTitan, Housecall Pro, Jobber, FieldRoutes, PestPac, and GorillaDesk, as well as Google Calendar for direct two-way job scheduling without double bookings.",
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
    categoryLabel: "Pricing & Guarantee",
    q: "Why choose Minions.AI over a traditional call center?",
    a: `Traditional call centers charge per minute, place callers on hold, and can only take basic messages. Minions.AI costs a fraction of the price, answers in under 3 seconds 24/7, quotes accurate pricing, books directly to your calendar, and logs every lead automatically—backed by a ${GUARANTEE.days}-day money-back guarantee.`,
    tag: "Call Center vs AI",
  },
  {
    id: "contracts-and-billing",
    category: "pricing-contracts",
    categoryLabel: "Pricing & Guarantee",
    q: "Are there long-term contracts or cancellation fees?",
    a: "Zero long-term contracts. Everything is billed on a transparent month-to-month basis. If you ever decide to pause or cancel, you can forward your phone line back with zero penalties.",
    tag: "Month-to-Month",
  },
  {
    id: "money-back-guarantee",
    category: "pricing-contracts",
    categoryLabel: "Pricing & Guarantee",
    q: `How does the ${GUARANTEE.days}-day money-back guarantee work?`,
    a: `Try your custom AI crew on your live phone line for ${GUARANTEE.days} days. If it doesn't capture jobs you would have otherwise lost to voicemail, we refund every penny and help you forward your line back. Zero risk.`,
    tag: "100% Risk-Free",
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

  // 5. Founders & Support
  {
    id: "who-builds-this",
    category: "the-team",
    categoryLabel: "Founders & Support",
    q: "Who configures and supports our AI crew?",
    a: "You work directly with the two co-founders, Rakib & Parvej. We personally engineer your prompt architecture, test your phone line with background job-site noise scenarios, and provide white-glove ongoing support.",
    tag: "Founder-Led Setup",
  },
  {
    id: "ongoing-updates",
    category: "the-team",
    categoryLabel: "Founders & Support",
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

