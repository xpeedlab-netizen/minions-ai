import Button from "@/components/ui/Button";
import HeroAnimation from "@/components/sections/home/HeroAnimation";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";
import { GUARANTEE } from "@/lib/data/site-content";

export default function Hero() {
  const primaryHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;
  const primaryLabel = DEMO_VIDEO_URL ? "Hear the AI answer a call" : "Book a 15-minute call";

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-white">
            AI for blue-collar businesses
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Never miss another call. Never lose another job.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            Your phone rings while you&apos;re on a roof, under a sink, or asleep. Don&apos;t let
            your next $5,000 job go to a competitor. Meet the AI crew that answers, schedules, and
            follows up.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryHref} size="lg" showArrow>
              {primaryLabel}
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink/50 font-mono">
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
