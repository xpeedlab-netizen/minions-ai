import Link from "next/link";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { RETELL_CLAIM, RETELL_BILLING } from "@/lib/data/retell";

/**
 * "Built on Retell AI" — the technology trust band, added 2026-09-13 at the owner's
 * request.
 *
 * CLAIM SAFETY — READ lib/data/retell.ts BEFORE EDITING THIS FILE.
 *
 * The Retell partnership is APPLIED FOR BUT NOT CONFIRMED. This band therefore states
 * only what we DO ("built on", "we configure"), never a status we hold. Specifically
 * forbidden here until RETELL_PARTNER_STATUS flips to "official" with owner sign-off:
 *   - "Official", "Certified", "Authorised" or "Partner" as a title
 *   - Retell's logo or wordmark as a badge
 *   - Any claim of being listed in their partner directory
 *
 * The heading is NOT hardcoded — it reads RETELL_CLAIM, which is derived from
 * RETELL_PARTNER_STATUS. That is the whole point of that indirection: the claim lives
 * in one place and upgrades everywhere at once. Do not inline a stronger string here.
 *
 * WHY IT SITS AT 07, AFTER THE PROOF BAND AND BEFORE THE PILOT.
 *
 * lib/data/retell.ts argues that a visitor searching "missed calls are costing me
 * listings" has never heard of Retell, and that naming the platform early is a
 * confusing detour — which is why /retell-ai-implementation exists as a separate page
 * for a separate, warmer audience. That argument is still right about the HERO, and
 * this band deliberately does not go there.
 *
 * But it is the wrong conclusion for the page's back half. By band 07 the visitor has
 * heard the call work and read the response research; the question they are holding is
 * no longer "what is this" but "who is actually behind it, and what happens to me if
 * you disappear". That is a technology-provenance question, and leaving it unanswered
 * is what makes a small agency look like a risk. Answering it here also lets the band
 * carry RETELL_BILLING, which is the strongest trust statement written anywhere in this
 * repository and was previously reachable only from a page almost nobody visits.
 *
 * TONE IS white AND IS NOT FREE TO CHANGE. Proof (06) is teal and PilotOffer (08) is
 * cream, and Section treats the colour change as the separator — adjacent bands must
 * never share a tone. white is the only value that satisfies both neighbours without
 * retoning something else. See components/ui/Section.tsx.
 *
 * NOTE ON THE SEAM BELOW: PilotOffer carries `pb-8 sm:pb-12` because cream -> white was
 * an invisible boundary. That note still holds — it describes the seam between PilotOffer
 * and PricingPreview, which this insertion does not touch. This band's own white -> cream
 * boundary into PilotOffer is a real tone change and keeps full spacing.
 *
 * The two-column split is the argument: what the platform supplies, and what we build on
 * top of it. Stating both honestly is what makes the claim credible — a page that
 * implied we built the speech stack ourselves would be lying, and a page that implied
 * Retell does all of it would be arguing itself out of a job.
 */

const PLATFORM = {
  label: "Retell AI provides",
  items: [
    "Low-latency speech, interruption handling and natural turn-taking",
    "Call recordings, transcripts and analytics",
    "Function-calling hooks and per-second usage billing",
  ],
};

const OURS = {
  label: "We design, build and run",
  items: [
    "The brokerage conversation: representation, financing, timeline and motivation",
    "Live two-way calendar booking, not an agent that says it booked something",
    "CRM writes into Follow Up Boss, kvCORE or whatever you already run",
    "Routing rules, so the right agent gets the lead and escalations reach a person",
    "Recorded test scenarios you sign off before the line goes live",
    "Tuning in week three, when a caller finds a phrasing nobody predicted",
  ],
};

export default function BuiltOnRetell() {
  return (
    <Section tone="white" width="wide">
      <div className="max-w-3xl">
        <Eyebrow>{RETELL_CLAIM.eyebrow}</Eyebrow>
        <SectionHeading className="mt-5 text-ink">
          Built on Retell AI. Configured and run for your brokerage.
        </SectionHeading>
        <SectionLead>
          We did not build the speech engine, and we are not going to pretend we did.
          Retell handles the voice. Everything between that and a booked showing is the
          work we do.
        </SectionLead>
      </div>

      {/* Hairline-divided columns rather than two cards: the point is the DIVISION of
          labour, and a divider draws that where two bordered boxes would just read as
          a feature grid. */}
      <div className="mt-12 grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:divide-x lg:divide-ink/10">
        {[PLATFORM, OURS].map((col, i) => (
          <Reveal key={col.label} delay={i * 0.08} className={i === 1 ? "lg:pl-16" : ""}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink/60">
              {col.label}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.9375rem] leading-[1.6] text-ink/80"
                >
                  <span
                    aria-hidden
                    className="mt-[0.5625rem] size-1.5 shrink-0 rounded-full bg-teal"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* The billing statement, on its own ground. It is the single most trust-building
          thing in lib/data/retell.ts and it answers the question the whole band exists
          to answer: what happens to me if you disappear. Sourced from RETELL_BILLING so
          it cannot drift from the /pricing calculator and the Retell page. */}
      <Reveal delay={0.16}>
        <div className="mt-14 rounded-2xl border border-ink/10 bg-cream p-7 sm:p-9">
          <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-ink sm:text-xl">
            {RETELL_BILLING.heading}
          </h3>
          <p className="mt-3 max-w-2xl text-[0.9375rem] leading-[1.65] text-ink/75">
            {RETELL_BILLING.body}
          </p>
          <Link
            href="/retell-ai-implementation"
            className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-heading text-sm font-bold text-teal underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2"
          >
            How we implement Retell AI
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
