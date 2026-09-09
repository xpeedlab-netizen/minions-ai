import { Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import {
  BOOKING_CALENDAR_URL,
  SITE_PHONE_NUMBER,
  SITE_PHONE_TEL,
} from "@/lib/data/placeholders";
import SegmentedHeroCallPlayer from "@/components/segment/SegmentedHeroCallPlayer";
import SegmentedHeroPill from "@/components/segment/SegmentedHeroPill";
import TrustLogos from "@/components/ui/TrustLogos";

/**
 * Hero — band 01 of the landing brief.
 *
 * COPY & CRO:
 *   - Outcome-first H1 + clear subhead covering both co-primary markets.
 *   - Two frictionless conversion paths:
 *     1. A consultation booking
 *     2. Instant interactive dual-market call preview (Pest Control & Real Estate) + live demo phone line
 *   - Visual CRM integration logos (FieldRoutes, PestPac, GorillaDesk, ServiceTitan, Follow Up Boss, Jobber, Google Calendar).
 */
export default function Hero() {
  return (
    // pt-6 on mobile, not pt-14: with the call panel reordered above the CTA the first
    // screen must carry headline, subhead, panel and buttons, and the top gap was the
    // cheapest space to reclaim. Desktop keeps its original pt-20.
    <section className="overflow-x-hidden bg-cream pt-6 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* MOBILE ORDER IS NOT THE DESKTOP ORDER — see the note on the call panel below.
            `contents` on mobile dissolves the text column so its children and the panel
            become siblings of one flex container and can be interleaved by `order`. At
            `lg` it reverts to a normal grid child and the two-column layout is unchanged. */}
        <div className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:grid lg:items-center lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:grid-cols-[1.2fr_1fr] xl:gap-14">
          <div className="contents min-w-0 lg:block">
            {/* Follows ?for= like the call player does; with no param it still names
                both industries, per invariant #3. See SegmentedHeroPill. */}
            <div className="order-1 lg:order-none">
              <SegmentedHeroPill />
            </div>

            <h1 className="order-2 mt-4 type-display text-4xl leading-[0.98] tracking-[-0.005em] text-balance text-ink sm:mt-5 sm:text-5xl lg:order-none lg:mt-5 lg:text-6xl">
              Your AI receptionist answers every call, 24/7.
            </h1>

            <p className="order-3 mt-4 max-w-lg text-[1.0625rem] leading-[1.6] text-ink/75 sm:mt-5 sm:text-lg lg:order-none lg:mt-5">
              Answers on the first ring at 2 AM, on weekends, mid-route and mid-showing.
              Quotes from your real price list, books onto your calendar, and you keep
              your number.
            </p>

            {/* CTA Conversion Triggers — Wraps cleanly at all viewport widths */}
            <div className="order-5 mt-0 flex flex-col gap-3.5 sm:flex-row sm:items-center lg:order-none lg:mt-8 lg:flex-wrap xl:flex-nowrap">
              {/* Ink, not coral. The play button on the call panel is the one coral thing
                  in the first screen, because listening comes before booking — these two
                  are a sequence, not rivals. See the `ink` variant in components/ui/Button.tsx. */}
              <Button
                href={BOOKING_CALENDAR_URL}
                variant="ink"
                size="lg"
                showArrow
                track={{ event: "cta_click", params: { location: "hero" } }}
                /* Taller and wider than the phone link beside it, which sits at the
                   shared min-h-14. The booking CTA is the strongest ACTION in the hero
                   even though the play button is the strongest IMAGE — size carries that
                   here, so the coral never has to. */
                className="w-full sm:w-auto justify-center whitespace-nowrap sm:min-h-[3.75rem] sm:px-10 sm:text-[1.0625rem]"
              >
                Book a Consultation
              </Button>
              <TrackedPhoneLink
                href={`tel:${SITE_PHONE_TEL}`}
                location="hero"
                /* Quieter than the booking CTA on purpose. A solid white card with a
                   2px border and a shadow made this read as a second primary action —
                   it was physically the LARGEST element in the row — when it is really
                   the fallback for someone who would rather not fill in a form. Now: no
                   fill, hairline border, no shadow, medium weight. Still obviously a
                   control, no longer a rival. */
                className="group inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-ink/15 bg-transparent px-4 py-3 sm:px-3.5 font-heading text-sm font-semibold text-ink/80 transition-all duration-150 hover:border-teal hover:text-teal active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2 whitespace-nowrap"
              >
                {/* A steady dot, not a pulsing one. Two things blinking in the same screen
                    cancel each other out — neither reads as urgent — so the animation is
                    spent on the play button, the action this hero wants first. The dot
                    still carries its "line is live" meaning without competing. */}
                <span className="relative flex size-2 shrink-0">
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <Phone aria-hidden className="size-4 shrink-0 text-teal transition-transform group-hover:scale-110" />
                <span>Hear AI Live: {SITE_PHONE_NUMBER}</span>
              </TrackedPhoneLink>
            </div>

            {/* Micro-Reassurance Checkpoints */}
            <div className="order-6 -mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-ink/70 sm:-mt-5 lg:order-none lg:mt-4">
              <span className="inline-flex items-center gap-1">
                <Check className="size-3.5 text-teal" /> Keep your existing number
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="size-3.5 text-teal" /> Done-for-you setup
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="size-3.5 text-teal" /> 30-day tuning included
              </span>
            </div>
          </div>
          {/* A real recorded call, playable in the first screen. Follows `?for=` so a
              visitor arriving from a pest ad hears a pest call; see the note in
              components/segment/SegmentedHeroCallPlayer.tsx.

              ON MOBILE THIS SITS ABOVE THE CTA (order-4, between the subhead and the
              buttons); on lg+ it returns to the right-hand column. Measured 2026-09-10 at
              390x844: the play button landed at y=839 while the fixed bottom bar occupies
              788-844, so the one asset the page is built to showcase was completely
              hidden on the ~83% of landing traffic that is mobile — the page asked for a
              booking before it offered any proof. Reordering costs no vertical space,
              which trimming padding alone could not have bought (~60px available against
              ~130px needed), and it puts the sequence in the order the visitor actually
              reasons: headline -> subhead -> hear it work -> book. Desktop is untouched:
              there the panel already cleared the fold beside the copy. */}
          <div className="relative order-4 min-w-0 w-full lg:order-none lg:max-w-lg lg:ml-auto">
            <SegmentedHeroCallPlayer />
          </div>
        </div>

        {/* Visual CRM Integration Trust Bar */}
        <div className="mt-14 border-t border-ink/10 pt-8">
          <TrustLogos />
        </div>
      </div>
    </section>
  );
}
