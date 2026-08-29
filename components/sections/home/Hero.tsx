import Image from "next/image";
import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_ID } from "@/lib/data/placeholders";
import { GUARANTEE, TRUST_BAR_TEXT } from "@/lib/data/site-content";

/**
 * Hero.
 *
 * Design reference: Linear and Sierra both open on a *quiet* canvas — a faint grid or
 * gradient wash rather than a flat fill — and set the headline lighter and tighter than
 * feels natural (Linear: 64px, weight 510, -1.4px tracking, 1.0 line-height). The
 * restraint is the effect. Our previous hero was flat `bg-cream` with an extrabold
 * headline at default tracking, which read as a template rather than a product.
 *
 * Three changes, no copy touched:
 *   1. Atmosphere — a subtle grid + a teal bloom behind the animation, so the right
 *      column sits *in* the page instead of floating on it.
 *   2. Type — the headline drops to `font-bold` with -0.03em tracking and 1.02
 *      line-height; the subhead caps at a readable measure.
 *   3. Asymmetry — the columns are 1fr/1.1fr and top-aligned on large screens, so the
 *      composition has a direction instead of being two centered halves.
 */
export default function Hero() {
  const hasDemo = Boolean(DEMO_VIDEO_ID && DEMO_VIDEO_ID.trim() !== "");
  const primaryHref = hasDemo ? "/live-demo" : BOOKING_CALENDAR_URL;

  return (
    <section className="relative overflow-hidden bg-cream pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Atmosphere layer. A 64px grid at 4% ink keeps the cream from reading as a
          blank fill; the radial mask fades it out before it reaches the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,var(--color-ink)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-ink)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-[38rem] rounded-full bg-teal/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.06em] text-ink/70 backdrop-blur-sm">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-success animate-breathe"
              />
              24/7 AI Voice &amp; Lead Dispatcher for Service Businesses
            </span>

            {/*
              "Jobs" and "on a roof, under a sink" were trades-only: a real-estate
              broker — one of the two co-primary markets (invariants.md #3) — has
              showings and commissions, not jobs. "Calls" is the one noun both
              businesses share, and the subhead now names both situations plus the
              universal one, so neither reader is reading about someone else.
            */}
            <h1 className="mt-6 type-display text-5xl leading-[0.98] tracking-[-0.005em] text-balance text-ink sm:text-6xl lg:text-7xl">
              Stop Sending $5,000 Calls to Voicemail.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-[1.6] text-ink/65 sm:text-lg">
              Whether you&apos;re out on a route, mid-showing, or asleep at 2 AM, Rex answers every call instantly, qualifies the lead, and books it straight to your calendar 24/7.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href={primaryHref} size="lg" showArrow>
                {hasDemo ? "Hear the AI answer a call" : "Book a 15-Minute Setup Call"}
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing plans
              </Button>
            </div>

            <p className="mt-5 font-mono text-sm font-medium text-ink/55">
              {GUARANTEE.short}
            </p>
          </div>

          {/*
            The hero visual is the pain illustration rather than the live-call
            transcript widget. The widget demonstrated the product working, which is
            real proof, but it asked the visitor to *read a simulation* at the moment
            they should be recognising their own problem. The collage lands the
            recognition instantly and matches the three cards directly below it, so
            the top of the page now reads as one designed system instead of a product
            demo followed by unrelated artwork. HeroAnimation is still in the repo if
            this needs reverting.
          */}
          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/illustrations/hero-missed-call.webp"
                alt="A plumber working under a kitchen sink with both hands busy while a phone glows with an unanswered call on the floor beside him"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/*
          The trust line, pulled up out of its own separate ink band and set as a hairline
          rule inside the hero. It used to be a standalone full-width section immediately
          under the fold — a hard dark bar that cut the page in two before the visitor had
          finished reading the headline. As a rule it does the same job at a fraction of
          the visual cost, and it lets TheRealCost follow the hero directly.
        */}
        <div className="mt-14 border-t border-ink/10 pt-6">
          <p className="mx-auto max-w-4xl text-balance text-center font-mono text-[0.6875rem] uppercase leading-[1.7] tracking-[0.1em] text-ink/40 sm:text-xs">
            {TRUST_BAR_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
}
