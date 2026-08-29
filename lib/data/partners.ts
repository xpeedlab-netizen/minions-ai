import type { FaqItem } from "./faq";

/**
 * PARTNER PROGRAM — SINGLE SOURCE OF TRUTH.
 *
 * Every figure here comes from the owner-approved "Partner Program" document
 * (2026-08-29). That document is the final decision on commission, terms and process,
 * exactly as pricing.ts is final on client pricing. Do not invent or round a number.
 *
 * HOW THE WORKED EXAMPLES ARE DERIVED — read this before "correcting" one.
 * The tier examples assume a Core Crew client ($2,500 build + $297/mo care) or a Full
 * Crew client ($4,500 + $297/mo), and that CARE BILLING STARTS IN MONTH 2, so year one
 * contains ELEVEN monthly payments, not twelve:
 *
 *   Referral, Core   15% x (2500 + 297x11) = 15% x 5767 =   $865
 *   Referral, Full   15% x (4500 + 297x11) = 15% x 7767 = $1,165
 *   Agency,   Core   25% x 2500 + 20% x (297x11) = 625 + 653 = $1,278
 *   Agency, ongoing  20% x (297x12) = $713 a year, every year
 *   Agency, x10      $6,250 up front and $7,128 a year recurring
 *
 * A twelve-month reading gives $910 / $1,210 and is WRONG against the document. If the
 * care start month ever changes, every figure in this file moves with it.
 *
 * PRICES REFERENCED HERE MUST TRACK pricing.ts. The build fees and the $297 care plan
 * are quoted from there; if pricing.ts changes, these examples are stale.
 */

export type PartnerTier = {
  id: "introducer" | "referral" | "agency";
  /** Small mono label above the name, e.g. "Tier 1 · Zero effort". */
  eyebrow: string;
  name: string;
  /** Who this tier is for, in the partner's own terms. */
  description: string;
  /** The headline commission figure. */
  rate: string;
  /** Qualifier printed beside the rate, e.g. "per client". */
  rateSuffix: string;
  /** One or two sentences expanding what the rate covers. */
  rateNote: string;
  /** The worked example block. Rendered as monospace lines. */
  worked: string[];
  /** What the partner actually does at this tier. */
  points: string[];
  popular?: boolean;
};

export const partnerTiers: PartnerTier[] = [
  {
    id: "introducer",
    eyebrow: "Tier 1 · Zero effort",
    name: "Introducer",
    description:
      "You know one business that needs this. You make the introduction and step away.",
    rate: "$500",
    rateSuffix: "per client",
    rateNote:
      "$750 when they take the Full Crew package. Paid 30 days after their first invoice clears.",
    worked: ["No agreement to sign", "No targets, no minimums"],
    points: [
      "Send one introduction, that is the whole job",
      "We run every conversation from there",
      "Nothing to learn, nothing to present",
      "Refer once or refer often — both are fine",
    ],
  },
  {
    id: "referral",
    eyebrow: "Tier 2 · Most popular",
    name: "Referral Partner",
    description:
      "You advise businesses and they trust your recommendations. You introduce and vouch, but you do not want to run a sales process.",
    rate: "15%",
    rateSuffix: "",
    rateNote:
      "Of everything the client pays in year one, build fee included. Paid as we collect.",
    worked: ["$865 per Core Crew client", "$1,165 per Full Crew client"],
    points: [
      "You introduce, and join the first call if you want to",
      "Deal registered by a single email",
      "We own the sale, the build and the support",
      "Light agreement, no exclusivity, no quota",
    ],
    popular: true,
  },
  {
    id: "agency",
    eyebrow: "Tier 3 · Highest earning",
    name: "Agency Partner",
    description:
      "You have a roster of clients and an existing commercial relationship with them. You co-sell and stay in the account.",
    rate: "25%",
    rateSuffix: "+ 20% monthly",
    rateNote:
      "25% of every build fee, plus 20% of the monthly plan for as long as you hold the account and the client stays.",
    worked: ["$1,278 in year one per client", "Then $713 a year, every year"],
    points: [
      "Ten clients: **$6,250 up front and $7,128 a year recurring**",
      "You co-sell and stay the client's first point of contact",
      "Quarterly review with a named contact on our side",
      "White-label available above three active clients",
    ],
  },
];

export type PartnerValue = {
  /** lucide-react icon name, resolved in the component. */
  icon: "trending-up" | "shield-check" | "clock" | "briefcase" | "megaphone" | "layout";
  title: string;
  body: string;
};

export const partnerValues: PartnerValue[] = [
  {
    icon: "trending-up",
    title: "Revenue that recurs",
    body: "Agency partners earn on the build and then every month the client stays. It compounds instead of resetting each quarter.",
  },
  {
    icon: "shield-check",
    title: "You never touch delivery",
    body: "No engineers to hire, no platform to learn. We scope, build, test and support every deployment under your relationship.",
  },
  {
    icon: "clock",
    title: "Live in three to six weeks",
    body: "Short enough that your client sees results inside the same quarter they signed, which is what makes the second referral easy.",
  },
  {
    icon: "briefcase",
    title: "Your client stays yours",
    body: "We do not market to, upsell or approach your accounts. Registered deals are protected in writing, and the relationship stays where it started.",
  },
  {
    icon: "megaphone",
    title: "We sell alongside you",
    body: "Proposal templates, a recorded demo, objection answers, and one of our team on the call whenever you want technical cover.",
  },
  {
    icon: "layout",
    title: "Fully white-label at volume",
    body: "Past three active clients you can take the whole thing under your own brand, set your own price, and keep us invisible.",
  },
];

/** The two-column split of responsibilities. */
export const partnerSplit = {
  you: [
    "Introduce the client and tell us what you know about them",
    "Register the deal by email so it is protected",
    "Join the first call if you want to — optional at every tier",
    "Agency partners only: stay the client's first point of contact",
  ],
  us: [
    "Discovery, scoping and the written proposal",
    "The full build — voice agent, automations and CRM integration",
    "Testing, go-live and team training",
    "Ongoing monitoring, fixes and support after launch",
    "Invoicing, collection and your commission payment",
  ],
};

export type PartnerSegment = { title: string; body: string };

/**
 * ORDER IS DELIBERATE (invariants.md #3). Pest control and property lead the examples
 * so the partner page does not quietly reintroduce trades-only framing.
 */
export const partnerSegments: PartnerSegment[] = [
  {
    title: "Marketing & CRM agencies",
    body: "You already run automation for a roster of clients. Missed calls quietly ruin the ROI you report — fixing that makes your own numbers better.",
  },
  {
    title: "MSPs & telecom resellers",
    body: "You already sell the phone system. This is the natural next line on an invoice the client is used to paying.",
  },
  {
    title: "Software & platform vendors",
    body: "You serve an installed base in one industry. A voice layer on top of your product is a differentiator you did not have to build.",
  },
  {
    title: "Web & design studios",
    body: "You build the website. Adding a chat agent and a phone agent is an easy upsell while budget is already approved.",
  },
  {
    title: "Consultants & advisors",
    body: "Owners ask you where revenue is leaking. Unanswered calls are usually the answer nobody has measured.",
  },
  {
    title: "Franchise & multi-location groups",
    body: "Approve once at the centre and roll out across every location on the same scripts and the same reporting.",
  },
];

export type PartnerStep = { label: string; title: string; body: string };

export const partnerSteps: PartnerStep[] = [
  {
    label: "Step 1",
    title: "Apply",
    body: "Two minutes on the form below. We reply within three business days, and there is no cost to join at any tier.",
  },
  {
    label: "Step 2",
    title: "Intro call",
    body: "Thirty minutes to understand your clients and agree which tier fits. You leave with pricing and commission terms in writing.",
  },
  {
    label: "Step 3",
    title: "Get your kit",
    body: "Proposal template, recorded demo, one-pager and objection answers — everything you need to raise it with a client, in your inbox the same week.",
  },
  {
    label: "Step 4",
    title: "Register a deal",
    body: "Send one email naming the client. That protects the deal as yours and starts the clock on your commission.",
  },
  {
    label: "Step 5",
    title: "Get paid",
    body: "We build and launch. Your commission is paid 30 days after the client's payment clears, then monthly for recurring tiers.",
  },
];

export const partnerFaqs: FaqItem[] = [
  {
    q: "Will you approach my clients directly?",
    a: "No. Registered deals are protected in writing, and we do not market to, upsell or contact your accounts outside the work you have introduced us to. If a client you registered later approaches us independently, it still counts as yours.",
  },
  {
    q: "Do I need technical knowledge to sell this?",
    a: "No. You need to recognise a business that misses calls. Every partner gets a recorded demo and a proposal template, and we will join any client call to handle the technical questions. Plenty of our partners have never configured a voice agent and never will.",
  },
  {
    q: "What does it cost to become a partner?",
    a: "Nothing, at any tier. There is no joining fee, no annual fee, no minimum volume and no exclusivity. If you never refer anyone, nothing happens and nothing is owed.",
  },
  {
    q: "When exactly do I get paid?",
    a: "Commission is paid on money actually collected, not on signed contracts — 30 days after the client's payment clears. Recurring commission for agency partners is paid monthly thereafter. If a client refunds or cancels within 90 days, that portion is reversed; after 90 days it is yours regardless.",
  },
  {
    q: "How long does the recurring commission last?",
    a: "For agency partners, it continues for as long as the client stays and you remain the account owner — there is no twelve-month cliff. It is tied to you staying genuinely involved: holding the relationship and taking the first support call. If the account management moves back to us, the recurring share ends and the build commission is unaffected.",
  },
  {
    q: "Can I sell this under my own brand?",
    a: "Yes, once you have three active clients. At that point we can move you to a wholesale arrangement: you set your own pricing, invoice your client directly, and we stay invisible. Terms are agreed individually because margins depend on the volume you commit to.",
  },
  {
    q: "What kinds of businesses is this actually for?",
    a: "Any business where a missed call is lost revenue and a booking is worth real money — pest control, property and real estate, home services, clinics, legal and the trades are the most common. The pattern to look for is a phone that rings during jobs, after hours, or faster than a small team can answer.",
  },
  {
    q: "Can I move between tiers later?",
    a: "Yes, in either direction and at any point. Most partners start as an introducer with a single client to see how the delivery goes, then move up once they trust us with the relationship. Nothing is locked in.",
  },
];

/** Dropdown options on the application form. */
export const partnerTypeOptions = [
  "Marketing or CRM agency",
  "MSP or telecom reseller",
  "Software or platform vendor",
  "Web or design studio",
  "Consultant or advisor",
  "Franchise or multi-location group",
  "Something else",
];

export const partnerClientOptions = [
  "Pest control",
  "Real estate or property",
  "Home services (HVAC, plumbing, roofing, electrical)",
  "Clinics or healthcare",
  "Legal",
  "A mix of industries",
  "Not sure yet",
];
