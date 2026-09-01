/**
 * PRICING — SINGLE SOURCE OF TRUTH.
 *
 * Every figure here comes from the owner-approved "Voice Agent Deployment Packages"
 * proposal (Getminions.ai, August 2026 pricing, prices in USD). That document is the
 * final decision on price, scope, timeline and terms. Do not invent, round, or
 * "modernise" a number in this file — if a figure is wrong, the proposal changes first.
 *
 * WHAT CHANGED ON 2026-08-29, AND WHY IT MATTERS:
 *   - Two packages, not three. The old Starter/Full/Enterprise ladder ($1,000 / $2,000 /
 *     custom) is retired. Multi-location work is now an ADD-ON ($450 + $79/mo per extra
 *     location), not a bespoke tier, so there is no "Contact Sales" card any more.
 *   - Timeline is weeks, not days. The site promised "live in 5-7 days" everywhere; the
 *     proposal commits to 3-4 weeks (Core) and 5-6 weeks (Full). The old promise was not
 *     deliverable and is gone from the whole site, not just this file.
 *   - There is NO money-back guarantee. The proposal offers a 30-day TUNING WINDOW, which
 *     is a different promise: we keep tuning after go-live, we do not refund. See
 *     TUNING_WINDOW in site-content.ts. Never reintroduce a refund claim from memory.
 */

export type PricingPlan = {
  name: string;
  price: string | null;
  /** Struck-through anchor price shown beside `price`. Null when there is no anchor. */
  originalPrice?: string | null;
  setupFee?: string | null;
  minutes?: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
  badge?: string;
  description?: string;
  turnaround?: string;
};

export type PricingAddOn = {
  name: string;
  description: string;
  setup: string;
  monthly?: string;
  note?: string;
};

export type PaymentMilestone = {
  pct: string;
  when: string;
  body: string;
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
    name: "Core Crew",
    price: "$2,500",
    originalPrice: "$3,000",
    setupFee: "One-time build fee",
    popular: false,
    description: "Rex on your phone line — answering, qualifying and booking, 24/7. Best for a single location or one clear call type.",
    turnaround: "3–4 weeks to go-live",
    features: [
      "1 inbound voice agent with one call flow, answering 24/7",
      "Books appointments straight into your calendar",
      "Captures and qualifies leads, answers your FAQs",
      "Transfers to a human on request or on keyword",
      "CRM write-back: contact, call outcome, transcript",
      "Confirmation SMS or email + internal team alert",
      "10 scripted test-call scenarios and 1 revision round",
      "30-day tuning window after go-live",
    ],
    ctaLabel: "Get Core Crew",
  },
  {
    name: "Full Crew",
    price: "$4,500",
    originalPrice: "$5,500",
    setupFee: "One-time build fee",
    popular: true,
    badge: "Most Chosen",
    description: "Rex, Zip and Gia working together — answering, texting back, and following up until the lead converts. Best where the phone drives revenue.",
    turnaround: "5–6 weeks to go-live",
    features: [
      "Everything in Core Crew, plus:",
      "2 agents — inbound reception plus outbound follow-up",
      "Up to 3 call flows with routing by caller intent",
      "Custom knowledge base trained on your services",
      "Full pipeline automation, tagging, and lead scoring",
      "Missed-call text-back, no-show and reminder sequences",
      "Live pilot week before full cutover",
      "Live team training session and performance review",
    ],
    ctaLabel: "Get Full Crew",
  },
];

/** Priced separately and quoted on request — never assumed into a build. */
export const pricingAddOns: PricingAddOn[] = [
  {
    name: "Pip — website chat agent",
    description: "Catches the visitors who will never pick up the phone. Shares one knowledge base with Rex, so a visitor who starts in chat can be handed straight to a call.",
    setup: "$900 setup",
    note: "$900 when added at signature, because Pip reuses the knowledge base and CRM mapping built for Rex. Added later as a standalone project, it is $1,200.",
  },
  {
    name: "Additional call flow",
    description: "A second use case for Rex — a different department, service line or campaign.",
    setup: "$600 setup",
  },
  {
    name: "Additional language",
    description: "Rex and Pip answering in a second language, with scripts written natively.",
    setup: "$800 setup",
  },
  {
    name: "Additional location",
    description: "A further number, calendar and routing set for another branch or franchise.",
    setup: "$450 setup",
  },
];

/**
 * 40 / 40 / 20. Under half falls due before the client sees anything working, and the
 * UAT payment is triggered by OUR delivery into testing, not by their sign-off — so a
 * review is never rushed by an invoice.
 */
export const paymentMilestones: PaymentMilestone[] = [
  {
    pct: "40%",
    when: "On signature",
    body: "Reserves your build slot and starts discovery. This is the only money that moves before you have something to look at.",
  },
  {
    pct: "40%",
    when: "At UAT handover",
    body: "Due when we hand you the working system to test — the milestone marked UAT in the timeline.",
  },
  {
    pct: "20%",
    when: "At go-live",
    body: "Due when your agent takes its first live call and the system is fully in your hands.",
  },
];

/**
 * Optional, and deliberately not sold up front — the proposal says this is discussed at
 * the 30-day review, not before. Nothing on the site should present it as required.
 */
export const carePlan = {
  from: "$297",
  cadence: "/mo",
  heading: "After the first 30 days",
  body: "Your system is yours to run, and many clients do exactly that. If you would rather we kept looking after it, we can pick up ongoing care once the tuning window closes — there is nothing to decide now, and nothing to sign today.",
  includes: [
    "Voice platform, automation and CRM usage included up to your plan's monthly call allowance",
    "Support hours each month for script, workflow and routing changes",
    "Monitoring and alerting on call failures",
    "Fixes when a platform or model changes underneath the system",
    "Monthly performance reporting",
    "Cancel with 30 days' notice — you keep every account and workflow",
  ],
  footnote: "Discussed at your 30-day review, not before.",
};

/** Named so nothing is ambiguous later. Anything here can be added — it is quoted, not assumed. */
export const notIncluded = {
  build: [
    "Additional agents or call flows beyond the contracted number",
    "Integrations with systems not named at kickoff",
    "Custom reporting or business-intelligence dashboards",
    "HIPAA, PCI or other regulated-industry compliance work",
    "Content you own: service lists, pricing, brand voice guidelines",
    "Website, landing page or funnel development",
  ],
  thirdParty: [
    "Voice platform usage, charged per minute of call time",
    "Phone number rental and carrier charges",
    "Your CRM subscription, if you do not already hold one",
    "SMS and email sending credits",
    "Automation platform subscription",
  ],
};

/**
 * Per-minute voice platform rates. These are pass-through infrastructure costs billed to
 * the client's own account, NOT a Minions.AI price — which is why they are separated from
 * the build fee above. A care plan absorbs this usage into its monthly figure; without
 * one, it is billed direct.
 */
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
    q: "What is not included in the one-time build fee?",
    a: "Third-party running costs, billed to you directly: voice platform usage charged per minute of call time, phone number rental and carrier charges, SMS and email sending credits, your automation platform subscription, and your CRM subscription if you do not already hold one. On the build side, anything not named at kickoff — extra agents or call flows, integrations with systems we did not scope, custom BI dashboards, HIPAA or PCI compliance work, and website or funnel development — is quoted separately rather than assumed.",
  },
  {
    q: "How do payments work?",
    a: "40% on signature, 40% when we hand you the working system to test, and 20% at go-live. The price is fixed for the agreed scope — no hourly billing, and no change to the figure without your written approval. The middle payment is triggered by our delivery into testing rather than your sign-off, so your review is never rushed by an invoice. Monthly instalments across the build period can be arranged if you ask before signature.",
  },
  {
    q: "How long does the build take?",
    a: "3 to 4 weeks for Core Crew and 5 to 6 weeks for Full Crew, from kickoff to your agent taking live calls. Typical industry deployments for a voice agent of this kind run 6 to 12 weeks; we work from a pre-built component library, which is what compresses it. The single biggest factor in hitting those dates is feedback returned within 3 business days at each review point.",
  },
  {
    q: "What happens after go-live?",
    a: "A 30-day tuning window is included in the build fee at no extra cost — we keep adjusting scripts, routing and workflows against real conversations. After that the system is yours to run, and many clients do exactly that. If you would rather we kept looking after it, optional care plans are available: voice platform, automation and CRM usage sit inside that figure, along with a monthly allowance of support hours. You can cancel with 30 days' notice and you keep every account and workflow.",
  },
  {
    q: "Which CRMs and dispatch systems do you integrate with?",
    a: "We natively connect with ServiceTitan, Housecall Pro, Jobber, FieldRoutes, PestPac and GorillaDesk on the field-service side, and with GoHighLevel, HubSpot, Salesforce, Zoho and Pipedrive on the sales side — plus 400+ other systems via direct webhooks and APIs.",
  },
  {
    q: "Who owns the accounts and the phone number?",
    a: "You do. Accounts, workflows and phone numbers are created in your name and stay yours if we part ways. Either party may pause the project in writing; work already delivered is invoiced at the last completed milestone and nothing beyond it.",
  },
];
