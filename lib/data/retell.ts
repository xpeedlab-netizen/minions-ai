/**
 * Content for /retell-ai-implementation.
 *
 * WHY THIS PAGE EXISTS, AND WHY IT IS NOT A HOMEPAGE BAND
 *
 * Retell is a developer platform. A brokerage owner cannot build on it themselves, so
 * "we implement Retell for real estate" is a SPECIALISATION claim, not reseller
 * positioning — and specialisation is what sells a done-for-you service.
 *
 * But it addresses a different visitor than the homepage does. Someone searching
 * "missed calls are costing me jobs" has never heard of Retell; to them this material
 * is a confusing detour, and the product spec's own rule applies — "they don't care
 * about n8n, Retell, or CRMs by name" (docs/Minions_AI_Product_Spec_for_Landing_Page.md
 * §7). Someone searching "Retell AI implementation partner" is a smaller, warmer, and
 * completely separate audience. Giving them their own page lets it rank for terms the
 * homepage can never win, without diluting the homepage's pain-first message.
 *
 * CLAIM SAFETY — READ BEFORE EDITING
 *
 * As of 2026-09-05 the Retell partnership is APPLIED FOR BUT NOT CONFIRMED. Everything
 * here therefore describes what we DO ("we build on", "we implement"), never a status
 * we hold. Do not add, from memory or enthusiasm:
 *   - "Official", "Certified", "Authorised" or "Partner" as a title
 *   - Any claim of being listed in their partner directory
 *   - The logo presented as a badge, seal or endorsement mark of any kind
 *
 * LOGO EXCEPTION (2026-09-15, owner's explicit request): Retell's own white wordmark
 * (public/images/brands/retell-ai-logo-white.svg, sourced from retellai.com/logos) may
 * be used as a nominative brand credit — "built on X", the same way a product credits
 * Stripe or React — because that is not a partnership claim and does not require
 * RETELL_PARTNER_STATUS to be "official". See components/sections/home/BuiltOnRetell.tsx
 * for the one place it is currently used (shown prominently, standalone above the
 * heading, per the owner's follow-up request). Do not pair it with "Partner"/
 * "Official"/"Certified" wording or badge chrome (border/pill/seal) around it — that
 * combination is what would cross into the still-forbidden claim.
 *
 * When the partnership is confirmed, flip RETELL_PARTNER_STATUS to "official" and the
 * page upgrades its own wording in one place. Do not scatter the claim across strings.
 */

/**
 * The single switch governing how strongly the relationship may be stated.
 * "building-on" = we use the platform (safe, accurate today).
 * "official"    = a confirmed partnership exists; only set this with owner sign-off.
 */
export const RETELL_PARTNER_STATUS: "building-on" | "official" = "building-on";

/** Headline wording, derived from the status so the claim lives in exactly one place. */
export const RETELL_CLAIM = {
  "building-on": {
    eyebrow: "Retell AI implementation",
    heading: "We build Retell AI voice agents for real estate teams.",
    lead: "Retell is a developer platform: powerful, and not something a broker or team lead is going to wire up between showings. We do the building, the integrations and the tuning, and hand you a phone line that answers.",
  },
  official: {
    eyebrow: "Official Retell AI implementation partner",
    heading: "Official Retell AI implementation partner for real estate teams.",
    lead: "Retell is a developer platform: powerful, and not something a broker or team lead is going to wire up between showings. We do the building, the integrations and the tuning, and hand you a phone line that answers.",
  },
}[RETELL_PARTNER_STATUS];

/**
 * The honest framing of the gap we close. Deliberately concrete: each line is a real
 * task someone must do, not an abstract benefit. This is the section that earns the
 * page, because it answers "why not just use Retell directly?" without disparaging
 * Retell — the answer is that it is a toolkit, and this is a finished job.
 */
export const RETELL_GAP = {
  heading: "What Retell gives you, and what still has to be built.",
  lead: "Retell handles the hard part of the voice itself. Everything between that and a booked showing is the work.",
  platform: {
    label: "Retell provides",
    items: [
      "Low-latency speech, interruption handling and natural turn-taking",
      "An API, a web dashboard and per-second usage billing",
      "Call recordings, transcripts and function-calling hooks",
    ],
  },
  gap: {
    label: "You still need",
    items: [
      "A prompt that survives a real caller who interrupts, mumbles and changes their mind",
      "Live two-way calendar booking, not just an agent that says it booked something",
      "Writes into the system you actually run: Follow Up Boss, kvCORE or whatever you use",
      "Guardrails so it refuses work you do not do instead of inventing an answer",
      "Number porting, call routing and after-hours behaviour that matches how you work",
      "Someone to fix it in week three when a caller finds a phrasing nobody predicted",
    ],
  },
};

/**
 * Vertical-specific proof.
 *
 * REAL-ESTATE ONLY as of 2026-09-15 (owner's request). This page previously also listed
 * pest control as a genuinely-supported secondary vertical, kept "second, not absent"
 * per invariant #3's 2026-09-13 rewrite (real estate sole primary; pest genuinely
 * supported but never co-equal). The owner flagged that content as stale for THIS page
 * specifically and asked for it removed — pest control keeps its own dedicated page
 * (/industries/pest-control) and its site-wide support is untouched; this is a scope
 * decision about one implementation-detail page, not a reversal of invariant #3.
 */
export const RETELL_VERTICALS = [
  {
    name: "Real estate",
    knows: [
      "Representation has to be checked before a showing is worth booking",
      "Cash versus pre-approved changes whether the lead is real",
      "A listing enquiry at 9pm is a showing on Saturday, if someone answers",
    ],
    stack: "Follow Up Boss · HubSpot · Google Calendar",
  },
];

/**
 * The billing point, which is the most trust-building thing on the page: Retell usage
 * is billed to the client's own account at cost. Mirrors the /pricing calculator —
 * if that copy changes, change this too.
 */
export const RETELL_BILLING = {
  heading: "You own the account. We do not mark up the minutes.",
  body: "Retell usage is billed pay-as-you-go to your own Retell account, to the second, at their published rates. We take a one-time build fee and, if you want it, a care plan. We do not resell you minutes at a markup, and you are not locked to us to keep the line running.",
};

export const retellFaqs = [
  {
    q: "Can I just use Retell AI myself?",
    a:
      "If you have a developer, yes, it is a good platform and the API is well documented. Most brokerages and teams do not, and the platform is only the starting point: the prompt, the calendar integration, the CRM writes, the guardrails and the tuning after go-live are all still work. That is the part we do.",
  },
  {
    q: "Do I own the agent and the phone number?",
    a:
      "Yes. The Retell account is yours, the number is yours, and the agent configuration lives in your account. If you stop working with us the line keeps running. We think that is the only honest way to sell this.",
  },
  {
    q: "What does Retell itself cost?",
    a:
      "Usage is billed by the second directly to your account at Retell's published rates, we add nothing to it. The pricing page has a calculator that estimates the monthly figure from your call volume.",
  },
  {
    q: "Why real estate specifically?",
    a:
      "Because a voice agent is only as good as its script, and a script is only good if it knows the business. We have built and tuned agents for real estate, so we know what disqualifies a buyer before a showing is worth booking and why a 9pm listing enquiry cannot wait until Monday. A generalist build has to learn that on your leads.",
  },
  {
    q: "How long does a build take?",
    a:
      "Typically 3–6 weeks from kickoff to a live line, depending on how many integrations are involved and how quickly we can get access to your calendar and CRM. Thirty days of tuning are included after go-live, because the calls nobody predicted only show up once real customers are on the line.",
  },
];
