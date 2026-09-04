/**
 * Content for /retell-ai-implementation.
 *
 * WHY THIS PAGE EXISTS, AND WHY IT IS NOT A HOMEPAGE BAND
 *
 * Retell is a developer platform. A pest control owner cannot build on it themselves,
 * so "we implement Retell for pest control and real estate" is a SPECIALISATION claim,
 * not reseller positioning — and specialisation is what sells a done-for-you service.
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
 *   - Retell's logo or wordmark as a badge
 *   - Any claim of being listed in their partner directory
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
    heading: "We build Retell AI voice agents for pest control and real estate.",
    lead: "Retell is a developer platform — powerful, and not something a service business owner is going to wire up between jobs. We do the building, the integrations and the tuning, and hand you a phone line that answers.",
  },
  official: {
    eyebrow: "Official Retell AI implementation partner",
    heading: "Official Retell AI implementation partner for pest control and real estate.",
    lead: "Retell is a developer platform — powerful, and not something a service business owner is going to wire up between jobs. We do the building, the integrations and the tuning, and hand you a phone line that answers.",
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
  lead: "Retell handles the hard part of the voice itself. Everything between that and a booked job is the work.",
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
      "Writes into the system you actually run — FieldRoutes, PestPac, GorillaDesk, ServiceTitan, Housecall Pro or Jobber",
      "Guardrails so it refuses work you do not do instead of inventing an answer",
      "Number porting, call routing and after-hours behaviour that matches how you work",
      "Someone to fix it in week three when a caller finds a phrasing nobody predicted",
    ],
  },
};

/**
 * Vertical-specific proof. Invariant #3: pest control and real estate are co-primary
 * and carry EQUAL weight — never let one become the example and the other a footnote.
 */
export const RETELL_VERTICALS = [
  {
    name: "Pest control",
    knows: [
      "Bed bugs, roaches, rodents and wasps are different jobs with different urgency",
      "A quarterly plan is worth more than a one-off treatment, and the agent quotes accordingly",
      "Prep instructions before a technician arrives, so the visit is not wasted",
    ],
    stack: "FieldRoutes · PestPac · GorillaDesk",
  },
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
      "If you have a developer, yes — it is a good platform and the API is well documented. Most pest control and real estate operators do not, and the platform is only the starting point: the prompt, the calendar integration, the CRM writes, the guardrails and the tuning after go-live are all still work. That is the part we do.",
  },
  {
    q: "Do I own the agent and the phone number?",
    a:
      "Yes. The Retell account is yours, the number is yours, and the agent configuration lives in your account. If you stop working with us the line keeps running. We think that is the only honest way to sell this.",
  },
  {
    q: "What does Retell itself cost?",
    a:
      "Usage is billed by the second directly to your account at Retell's published rates — we add nothing to it. The pricing page has a calculator that estimates the monthly figure from your call volume.",
  },
  {
    q: "Why pest control and real estate specifically?",
    a:
      "Because a voice agent is only as good as its script, and a script is only good if it knows the trade. We have built and tuned agents in these two verticals, so we know what a bed bug call needs to ask and what disqualifies a buyer before a showing is worth booking. A generalist build has to learn that on your callers.",
  },
  {
    q: "How long does a build take?",
    a:
      "Typically 3–6 weeks from kickoff to a live line, depending on how many integrations are involved and how quickly we can get access to your calendar and CRM. Thirty days of tuning are included after go-live, because the calls nobody predicted only show up once real customers are on the line.",
  },
];
