import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import RexHeroAnimation from "./RexHeroAnimation";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";

export default function RexHero() {
  const primaryHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;
  const primaryLabel = DEMO_VIDEO_URL ? "Hear Rex answer a call" : "Book a 15-minute call";

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-ink/60">
            <Sparkles className="size-3.5 text-teal" />
            Meet Rex: your new receptionist
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            An AI receptionist that <span className="text-coral-text">never sleeps</span>, never
            calls in sick, and never misses a ring.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            Rex answers your phone 24/7 in your business&apos;s name, handles back-and-forth questions politely, and books jobs straight into your calendar — for a fraction of
            the cost of a full-time receptionist.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryHref} size="lg" showArrow>
              {primaryLabel}
            </Button>
            <Button href={BOOKING_CALENDAR_URL} variant="outline" size="lg">
              Book a Call
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <p className="font-mono text-xs text-ink/60 font-medium">New company · Month-to-month · 30-day guarantee</p>
          </div>
        </div>

        <div className="relative">
          <RexHeroAnimation />
        </div>
      </div>
    </section>
  );
}
