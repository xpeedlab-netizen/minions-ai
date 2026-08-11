import Image from "next/image";
import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";

export default function PlumbingHero() {
  const primaryHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;
  const primaryLabel = DEMO_VIDEO_URL ? "Hear it handle a plumbing call" : "Book a 15-minute call";

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-coral/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-coral-text">
            24/7 Emergency Dispatch
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-teal-dark text-4xl sm:text-5xl leading-[1.1] text-balance">
            For Plumbing companies: catch every{" "}
            <span className="text-coral-text">&quot;my basement is flooding&quot;</span> call —
            even at <span className="text-coral-text">2 AM.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When a pipe bursts at midnight, customers call the first plumber who answers. Rex ensures
            that&apos;s you — 24/7, catching emergency leads while you sleep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryHref} size="lg" showArrow>
              {primaryLabel}
            </Button>
            <Button href={BOOKING_CALENDAR_URL} variant="outline" size="lg">
              Book a Call
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-md mx-auto w-full rounded-3xl bg-white border border-border overflow-hidden shadow-sm">
            <Image
              src="/images/plumbing-hero-bg.jpg"
              alt="Minions.AI crew member monitoring the plumbing dispatch dashboard"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
