/**
 * The founding pilot offer.
 *
 * WHY THIS EXISTS. The homepage had no social proof of any kind — CUSTOMER_PROOF is an
 * empty array because there are no customers yet, and inventing some was declined
 * (2026-09-05). A page that argues well and shows no evidence invites "so I'd be your
 * first?", and the visitor gets to ask it on their terms rather than ours. This band
 * answers it first, in our terms, and turns the weakness into the reason to move now.
 *
 * It is a REAL commitment, not a marketing device. Everything stated here is something
 * the business has to honour when someone books:
 *   - We build the full system at no charge.
 *   - They run it for 30 days.
 *   - If it is not booking jobs they walk away owing nothing and keep their number.
 *   - If they keep it, the normal build fee applies from that point.
 *   - They pay their own Retell usage throughout, billed to their own account at cost.
 *
 * NOT A REFUND PROMISE. There is no money-back guarantee anywhere on this site and this
 * must not become one by accident (see TUNING_WINDOW in site-content.ts). Nothing is
 * paid up front on a pilot, so there is nothing to refund — "walk away owing nothing"
 * is accurate; "we refund you" would not be. Do not reword it in that direction.
 *
 * THE COUNTER. `slotsRemaining` is maintained BY HAND. That is a liability on a page
 * whose whole argument is that we do not invent numbers, so:
 *   - Update it the same day a slot is taken. A stale count is a false claim.
 *   - Never edit it upward to manufacture urgency. If more slots open, say so plainly.
 *   - At 0 the band renders a waitlist instead of "0 of 3 remaining" — see PilotOffer.
 *     Do not "fix" that by resetting the number.
 * If maintaining it honestly becomes a chore, delete the counter and keep the offer:
 * `showCounter: false` renders the band with no count and nothing to keep in sync.
 */

export type PilotOffer = {
  totalSlots: number;
  slotsRemaining: number;
  /** Set false to drop the live count and stop having a number to maintain. */
  showCounter: boolean;
  eyebrow: string;
  heading: string;
  lead: string;
  /** What the client gets. Each is a real deliverable, not a benefit adjective. */
  youGet: string[];
  /** What we ask in return. Kept short — every added ask is a reason to hesitate. */
  weAsk: string[];
  /** The honest small print, stated up front rather than discovered on the call. */
  terms: string;
  /**
   * The one-line fit test. Absorbed 2026-09-05 from the standalone disqualifier band
   * (WhoThisIsNotFor), which asked "Is Minions.AI right for your business?" immediately
   * after this band had removed every reason to hesitate, and routed the answer to a
   * booking rather than answering it.
   *
   * Only genuine filters belong here. The band it replaced listed four, of which three
   * excluded nobody: a receptionist catching 100% of calls, and "you prefer leaving
   * leads in voicemail and risking lost job revenue" — nobody self-identifies with
   * that, and a reader who spots the strawman discounts the rest of the page. What
   * survives is the call-volume floor and the front-desk requirement, which are real.
   */
  fitLine: string;
  ctaLabel: string;
  waitlistHeading: string;
  waitlistLead: string;
  waitlistCtaLabel: string;
};

export const PILOT: PilotOffer = {
  totalSlots: 3,
  slotsRemaining: 3,
  showCounter: true,

  eyebrow: "Founding pilot · 3 operators",

  heading: "Run it free for 30 days. Then decide.",

  /*
   * COPY POSTURE — the owner rejected an earlier draft, correctly, for opening with
   * "We have not done this for you yet", which leads with a deficit and apologises for
   * the company's age. Do not restore that shape.
   *
   * What survives from it, deliberately, is the FACT of being early. A visitor scanning
   * for logos works that out in seconds, and a fact they discover themselves reads as
   * something we concealed, while the same fact stated first reads as confidence. The
   * fix was never to hide it — it was to make it evidence of something good. "We are
   * early, so you get founder terms and direct access" is a strong sentence; "we are
   * new, so please try us" is a weak one. Same fact, opposite posture.
   *
   * So the lead now opens on what the visitor GETS, states the early-stage position as
   * the reason those terms exist rather than as an admission, and closes on the one
   * thing a bigger vendor genuinely cannot match: the people who built it working on
   * your account directly.
   */
  lead: "We are opening three founding slots. You get the complete system built, integrated and tuned to your business, answering your calls for thirty days before you decide anything. Founding operators work directly with the team that builds it, and that access does not survive our first hundred customers.",

  youGet: [
    "The complete build: your agent, your script, your calendar and CRM, connected and live",
    "Your number stays yours. Keep it and forward it, or take a new one",
    "Thirty days answering real calls, tuned against what your callers actually say",
    "Every account in your name from day one. You own it whatever you decide",
  ],

  weAsk: [
    "Thirty minutes up front, so the agent knows your services and your prices",
    "Your honest verdict at the end: whichever way it goes",
  ],

  /*
   * The terms sentence is doing the heaviest lifting on the page and is deliberately
   * plain. "Owing nothing" rather than "risk-free"; the usage cost is named with a real
   * range rather than buried, because a visitor who discovers a cost later treats every
   * other claim as suspect.
   */
  terms: "No card, no contract, nothing to cancel. Your only cost during the pilot is your own Retell usage: billed straight to your account at their per-second rates, typically $30–80 a month at normal call volume. Keep it after thirty days and the standard build fee applies from there. Walk away and you keep your number and owe nothing.",

  fitLine: "Best fit if you take more than ten calls a month and lose some of them after hours. If what you need is a person physically at your front desk, this is not that.",

  ctaLabel: "Claim Your Pilot Slot",

  /* Shown once slotsRemaining hits 0, so the band never prints "0 of 3 remaining". */
  waitlistHeading: "All three founding slots are taken.",
  waitlistLead: "The founding round is allocated and in build. Book a call anyway, you will hear how those builds are going, and we will tell you straight whether to wait for the next round or start a standard build now.",
  waitlistCtaLabel: "Book a consultation",
};
