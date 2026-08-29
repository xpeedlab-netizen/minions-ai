import Button from "@/components/ui/Button";
import ZipHeroAnimation from "./ZipHeroAnimation";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function ZipHero() {
  return (
    <section className="bg-cream border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-[#C4472A]/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-[#C4472A] font-bold">
            Automated Missed-Call Recovery &amp; Speed-to-Lead
          </span>
          <h1 className="mt-5 font-heading font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Instant Missed-Call Text-Back in Under 5 Seconds.
          </h1>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed max-w-xl">
            When you can&apos;t pick up, Zip texts back in under 5 seconds—qualifying the lead before they call your competitor.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
              Deploy Zip With Your Crew
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Pricing Plans
            </Button>
          </div>
        </div>

        <div className="relative">
          <ZipHeroAnimation />
        </div>
      </div>
    </section>
  );
}
