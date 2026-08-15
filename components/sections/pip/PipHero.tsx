import Button from "@/components/ui/Button";
import PipHeroAnimation from "./PipHeroAnimation";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function PipHero() {
  return (
    <section className="bg-cream border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#3A6EA5] font-bold shadow-sm">
            Grounded 24/7 Website Chat Assistant
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Instant Website Answers Grounded in Real Business Data.
          </h1>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed max-w-xl">
            Pip handles routine website inquiries 24/7—pricing ranges, service areas, and guarantees—with zero hallucinations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
              Deploy Pip in 7 Days
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Pricing Plans
            </Button>
          </div>
        </div>

        <div className="relative">
          <PipHeroAnimation />
        </div>
      </div>
    </section>
  );
}
