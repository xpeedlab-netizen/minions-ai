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
 *   - Loss-framed H1 + a subhead that carries the category, both co-primary markets.
 *   - Two frictionless conversion paths:
 *     1. A consultation booking
 *     2. Instant interactive dual-market call preview (Pest Control & Real Estate) + live demo phone line
 *   - Visual CRM integration logos (FieldRoutes, PestPac, GorillaDesk, ServiceTitan, Follow Up Boss, Jobber, Google Calendar).
 */
export default function Hero() {
  return (
    // The first screen has to carry the headline, the subhead, the CTA, the
    // reassurance line and the call panel at every width, so the top gap is the
    // cheapest space to reclaim at each one. Desktop was pt-20; lg:pt-14 buys 24px
    // toward getting the integration logos into the same screen.
    //
    // pb-8 sm:pb-12 IS DELIBERATELY TIGHTER THAN EVERY OTHER BAND, which all run
    // py-16 sm:py-24. Do not "restore" it for consistency. Measured 2026-09-10 at
    // 1440x900: this boundary was 194px of empty space, which is actually the
    // SMALLEST on the page — the other six run 205 to 273 — so the number was never
    // the problem. It reads as a hole because it is the only boundary where nothing
    // separates the two bands: everywhere else the tone change does that work, but
    // cream -> white is close to invisible, so 96px of empty cream, an unreadable
    // seam and 96px of empty white land as one continuous void. The hero also ends
    // on the lightest thing on the page, a hairline over 54px of small grey logos.
    //
    // So the trust bar stops being treated as a band's closing content. It is an
    // appendix to the hero — its own border-t already separates it from the CTA —
    // and it should sit ATTACHED to the hero rather than floating mid-gap. The next
    // section's own pt (96px desktop, 64 mobile) still does the separating, so the
    // total drops to 144/96 without the white side losing anything.
    <section className="overflow-x-hidden bg-cream pt-6 pb-8 sm:pt-10 sm:pb-12 lg:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* MOBILE ORDER IS NOT THE DESKTOP ORDER — see the note on the call panel below.
            `contents` below lg dissolves the text column so its children, the CTA row's
            children and the panel all become siblings of one flex container and can be
            interleaved by `order`. At `lg` everything reverts and the two-column layout
            is unchanged.

            NO FLEX GAP BELOW lg, DELIBERATELY. The column used to carry gap-8 on top of
            each child's own `mt-*`, so every mobile row was spaced twice — 48px between
            the headline and the subhead where the classes ask for 16 — and the
            reassurance strip needed a `-mt-4` purely to cancel it back out. Spacing is
            now stated once, by each child's margin. lg:gap-12 is the column gutter and
            is a different axis.

            lg:items-center, and the reason it survives is worth writing down. Centring a
            ~418px text column against the call panel used to push the H1 to y=348 on a
            1440x900 screen and shove the integration logos past the fold at 909. Both of
            those were symptoms of the PANEL being 692px, not of centring: with its empty
            air trimmed to 630px the logos land at 807 either way, so the fold no longer
            has an opinion and the choice is composition alone. Top-aligning bought a
            higher headline (187 vs 293) at the cost of ~210px of empty cream under the
            CTA, which read as an unfinished column.

            Centring is also safe against reflow, which is not obvious and was measured:
            every reserve inside the card is a fixed height, so sweeping all 117 cues of
            the clip leaves the panel at a constant 630px and the H1 at a constant y=293.
            A future change that lets the card grow during playback WOULD move the
            headline under the reader — if one lands, this goes back to items-start. */}
        <div className="flex min-w-0 flex-col lg:grid lg:items-center lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:grid-cols-[1.2fr_1fr] xl:gap-14">
          <div className="contents min-w-0 lg:block">
            {/* Follows ?for= like the call player does; with no param it still names
                both industries, per invariant #3. See SegmentedHeroPill. */}
            <div className="order-1 lg:order-none">
              <SegmentedHeroPill />
            </div>

            {/* PAIN FIRST, AND THE NOUN IS LOAD-BEARING.
                The H1 used to be "Your AI receptionist answers every call, 24/7." — the
                product as subject, a capability with no stakes attached. Everything that
                made a visitor FEEL something lived in band 02 ("the caller keeps scrolling
                until someone picks up"), below the fold, which the 5-second rule means
                most of them never reach. So the consequence moves up here and the category
                moves down into the subhead, where the pill and the panel's "Click to hear
                the AI live" already keep it legible.

                "customer", NOT "job". This is invariant #3, not a style preference: a job
                is trades language, and a real estate agent has clients, listings and
                showings, never jobs. A loss-framed H1 built on "job" would quietly make
                brand-level copy pest-only — the exact trades-only umbrella #3 forbids.
                "customer", "caller" and "client" are the nouns that carry the same weight
                for both markets. Any future rewrite of this line inherits that constraint.

                It costs nothing to fit, which is why it was affordable at all. Measured
                2026-09-10: 3 lines / 124px at 390 — IDENTICAL to the line it replaces. At
                1440 it is 3 lines instead of 2, growing the text column 418 -> 487, but the
                row height there is set by the 630px panel and lg:items-center, so the
                column had 143px of unused headroom and the logos do not move from 807. */}
            <h1 className="order-2 mt-4 type-display text-4xl leading-[0.98] tracking-[-0.005em] text-balance text-ink sm:mt-5 sm:text-5xl lg:order-none lg:mt-5 lg:text-6xl">
              Every missed call is a customer someone else just booked.
            </h1>

            <p className="order-3 mt-4 max-w-lg text-[1.0625rem] leading-[1.6] text-ink/75 sm:mt-5 sm:text-lg lg:order-none lg:mt-5">
              Your AI receptionist answers on the first ring at 2 AM, on weekends,
              mid-route and mid-showing — quoting from your real price list and booking
              onto your calendar.
            </p>

            {/* CTA Conversion Triggers — Wraps cleanly at all viewport widths.

                `contents` below lg: the booking button belongs directly under the subhead
                in the first screen, while the phone link does not need to be there at all
                (MobileStickyBar pins "Hear Live AI" to the same tel: at every scroll
                position). Keeping them in one flex row would force both to the same
                place, so the row dissolves and each takes its own `order`. At lg the row
                re-forms exactly as before. */}
            <div className="contents lg:order-none lg:mt-8 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:gap-3.5 xl:flex-nowrap">
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
                className="order-5 mt-6 w-full sm:w-auto justify-center whitespace-nowrap sm:min-h-[3.75rem] sm:px-10 sm:text-[1.0625rem] lg:order-none lg:mt-0"
              >
                Book Setup Call
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
                className="group order-7 mt-3.5 inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-1.5 lg:order-none lg:mt-0 rounded-xl border border-ink/15 bg-transparent px-4 py-3 sm:px-3.5 font-heading text-sm font-semibold text-ink/80 transition-all duration-150 hover:border-teal hover:text-teal active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2 whitespace-nowrap"
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

            {/* Micro-Reassurance Checkpoints — the FUD reducers, and they sit directly
                beneath the booking button at every width, which is where they do their
                work. The old `-mt-4 sm:-mt-5` existed only to cancel the column's flex
                gap; with that gap gone the margin is a plain positive one. */}
            <div className="order-6 mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-ink/70 lg:order-none lg:mt-4">
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

              BELOW lg THIS SITS BETWEEN THE SUBHEAD AND THE CTA (order-4); on lg+ it
              returns to the right-hand column.

              The whole stack does not fit a phone: 707px of usable first screen at
              390x844 against a panel that is ~600px on its own. So one of the two —
              the player or the hero's booking button — is below the fold whichever way
              they are ordered, and the player is the one that has to win. MobileStickyBar
              pins "Book Setup Call" to /contact at every scroll position, so the booking
              path is never actually absent from the screen; there is no second copy of
              the recording. Proof first, and the CTA the visitor already has stays where
              it already is.

              Measured 2026-09-10 at 390x844 after trimming the panel's own empty air:
              headline 149, subhead 289, panel 422, card title 461, play button 550 —
              all above the 788 fold, with the play button clearing it by 158px rather
              than sitting behind the bar at y=839 as it did before any of this work. */}
          <div className="relative order-4 mt-6 min-w-0 w-full lg:order-none lg:mt-0 lg:max-w-lg lg:ml-auto">
            <SegmentedHeroCallPlayer />
          </div>
        </div>

        {/* Visual CRM Integration Trust Bar */}
        {/* lg:mt-10: the integration logos are the "client logos above the fold" item,
            and on a 1440x900 screen they were missing it by 9px. */}
        <div className="mt-12 border-t border-ink/10 pt-8 lg:mt-10">
          <TrustLogos />
        </div>
      </div>
    </section>
  );
}
