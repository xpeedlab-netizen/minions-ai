import { Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Section, { SectionHeading } from "@/components/ui/Section";
import { PILOT } from "@/lib/data/pilot";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * The founding pilot band — band 07, replacing nothing and answering the question the
 * page could not answer before: "has anyone actually paid you for this?"
 *
 * DESIGN BRIEF (owner, 2026-09-05): low cognitive load, low friction, and the whole
 * page exists to book the meeting. That drove three decisions here:
 *
 *  1. ONE decision, not two. The band offers a single action. There is no secondary
 *     "learn more" or pricing link competing with it — a second option at the moment of
 *     commitment is what turns a yes into a maybe.
 *  2. The terms are ON the page, not on the call. Anything a visitor would have to ask
 *     about ("what does it actually cost me?") is answered before they book, because the
 *     unanswered version of that question is what stops the booking.
 *  3. Two short lists rather than prose. "You get" / "we ask" is scannable in about four
 *     seconds, which is the real attention budget on a mid-page band.
 *
 * ABSORBED THE DISQUALIFIER (2026-09-05). The standalone "Is Minions.AI Right For Your
 * Business?" band used to follow this one, which meant the page removed every reason to
 * hesitate and then immediately manufactured a new one — four consecutive commitment
 * moments, each with its own CTA. Its one honest filter now renders here as a single
 * hairline row on the way to the button. WhoThisIsNotFor.tsx is kept compiling and
 * unrendered rather than deleted, as with the 2026-08-29 cut.
 *
 * TONE. `cream` — the bands either side are teal (Proof) and white (PricingPreview),
 * so cream is the only tone that keeps the alternation rule in components/ui/Section.tsx
 * intact. Check that rule before moving this band.
 *
 * The offer content, including the honesty rules around the hand-maintained counter,
 * lives in lib/data/pilot.ts. Read that file before changing any claim here.
 */
export default function PilotOffer() {
  const soldOut = PILOT.slotsRemaining <= 0;

  /* pb-8 sm:pb-12: cream -> white below is an invisible seam — see the tone note in
     components/ui/Section.tsx. PricingPreview keeps its full `feature` top padding, so
     this boundary lands wider than the other two by design. */
  return (
    /* id: the pricing band links back here so the price never appears without its
       pilot context. Renaming it breaks that link. */
    <Section id="founding-pilot" tone="cream" width="default" className="pb-8 sm:pb-12">
      <div className="mx-auto max-w-3xl rounded-3xl border-2 border-ink bg-white p-6 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-coral-text">
            {PILOT.eyebrow}
          </span>

          {/*
            The counter renders only while it is both enabled and truthful. At zero the
            band switches to the waitlist copy entirely, so "0 of 5 remaining" — which
            reads as a dead offer and invites a stale-number problem — can never print.
          */}
          {PILOT.showCounter && !soldOut && (
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1">
              <span aria-hidden className="flex gap-1">
                {Array.from({ length: PILOT.totalSlots }, (_, i) => (
                  <span
                    key={i}
                    className={`size-1.5 rounded-full ${
                      i < PILOT.slotsRemaining ? "bg-success" : "bg-ink/20"
                    }`}
                  />
                ))}
              </span>
              <span className="font-mono text-xs font-medium text-ink/75">
                {PILOT.slotsRemaining} of {PILOT.totalSlots} remaining
              </span>
            </span>
          )}
        </div>

        <SectionHeading className="mt-5 text-ink">
          {soldOut ? PILOT.waitlistHeading : PILOT.heading}
        </SectionHeading>

        <p className="mt-5 text-base leading-[1.65] text-ink/75 sm:text-[1.0625rem]">
          {soldOut ? PILOT.waitlistLead : PILOT.lead}
        </p>

        {!soldOut && (
          <>
            <div className="mt-9 grid gap-8 sm:grid-cols-[1.35fr_1fr] sm:gap-10">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink/65">
                  You get
                </p>
                <ul className="mt-4 space-y-3">
                  {PILOT.youGet.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-[1.0625rem] shrink-0 text-teal"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      <span className="text-[0.9375rem] leading-[1.55] text-ink/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliberately the shorter column. The asks should look small next to
                  what is given, because they are. */}
              <div className="sm:border-l sm:border-border sm:pl-10">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink/65">
                  We ask
                </p>
                <ul className="mt-4 space-y-3">
                  {PILOT.weAsk.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ArrowRight
                        className="mt-0.5 size-[1.0625rem] shrink-0 text-coral-text"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="text-[0.9375rem] leading-[1.55] text-ink/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/*
              Terms and fit sit SIDE BY SIDE, not stacked. Stacked, they were two grey
              paragraphs in a row above a third (the line under the CTA) — three
              low-contrast blocks of near-identical weight that the eye has to wade
              through to reach the button. Side by side they read as one reference row,
              and the band gets ~90px shorter, which matters: see the height note in the
              docblock. They stack on mobile, where there is no column to share.

              The fit test was absorbed from the deleted disqualifier band; see the
              fitLine note in lib/data/pilot.ts.
            */}
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-[1.5fr_1fr]">
              <p className="bg-cream p-5 text-[0.875rem] leading-[1.6] text-ink/70">
                {PILOT.terms}
              </p>
              <p className="bg-cream p-5 text-[0.875rem] leading-[1.6] text-ink/70">
                {PILOT.fitLine}
              </p>
            </div>
          </>
        )}

        {/* One action. See decision 1 in the docblock — no competing secondary CTA. */}
        <div className="mt-8">
          <Button
            href={BOOKING_CALENDAR_URL}
            size="lg"
            showArrow
            track={{
              event: "cta_click",
              params: { location: soldOut ? "pilot_waitlist" : "pilot_offer" },
            }}
            className="w-full justify-center sm:w-auto"
          >
            {soldOut ? PILOT.waitlistCtaLabel : PILOT.ctaLabel}
          </Button>
          {/* Reassurance, not hedging. The earlier line ("if it is not a fit we will
              tell you") put the possibility of rejection right next to the button,
              which is the last thing that should be in view at the moment of
              commitment. This removes the cost of clicking instead. */}
          {!soldOut && (
            <p className="mt-3 text-xs text-ink/60">
              Fifteen minutes. Bring your call volume and we will show you the numbers.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
