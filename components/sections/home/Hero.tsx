import Button from "@/components/ui/Button";
import HeroAnimation from "@/components/sections/home/HeroAnimation";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_ID } from "@/lib/data/placeholders";
import { GUARANTEE } from "@/lib/data/site-content";

export default function Hero() {
  const hasDemo = Boolean(DEMO_VIDEO_ID && DEMO_VIDEO_ID.trim() !== "");
  const primaryHref = hasDemo ? "/live-demo" : BOOKING_CALENDAR_URL;

  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-white">
            24/7 AI Voice & Lead Dispatcher for Service Businesses
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Stop Losing $5,000 Jobs to Voicemail.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When your hands are full on a roof, under a sink, or sleeping, Rex answers every incoming call instantly, quotes your exact pricing, and books appointments straight to your calendar 24/7.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryHref} size="lg" showArrow>
              {hasDemo ? "Hear the AI answer a call" : "Book a 15-Minute Setup Call"}
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing plans
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink/60 font-mono font-medium">
            {GUARANTEE.short}
          </p>
        </div>

        <div className="relative">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}
