import { Sparkles, PhoneCall, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import RexHeroAnimation from "./RexHeroAnimation";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";
import { GUARANTEE } from "@/lib/data/site-content";

export default function RexHero() {
  const primaryHref = "#audio-demo";
  const primaryLabel = "Hear Rex Answer Real Calls";

  return (
    <section className="bg-cream border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold shadow-sm">
            <Sparkles className="size-3.5 text-teal" />
            Rex: 24/7 AI Voice Dispatcher
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Never Miss Another $5,000 Call While Your Hands Are Full.
          </h1>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed max-w-xl">
            When you&apos;re up a ladder, under a sink, or sleeping at 2 AM, Rex answers on ring one. He conducts natural voice conversations, quotes your exact service pricing, and books appointments straight into your Google Calendar 24/7.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryHref} size="lg" showArrow>
              {primaryLabel}
            </Button>
            <Button href={BOOKING_CALENDAR_URL} variant="outline" size="lg">
              Book a 15-Min Setup Call
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-ink/60 font-mono text-xs font-semibold">
            <ShieldCheck className="size-4 text-teal shrink-0" />
            <span>{GUARANTEE.short}</span>
          </div>
        </div>

        <div className="relative">
          <RexHeroAnimation />
        </div>
      </div>
    </section>
  );
}
