import { ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import GiaHeroAnimation from "./GiaHeroAnimation";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function GiaHero() {
  return (
    <section className="bg-cream border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1 font-mono text-xs uppercase tracking-wide text-[#1B8A5A] font-bold shadow-sm">
            <ShieldCheck className="size-3.5 text-[#1B8A5A]" />
            Automated Lead &amp; Appointment Pipeline
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Every Call &amp; Chat Tracked Automatically. Zero Manual Entry.
          </h1>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed max-w-xl">
            Every phone call, website chat, and missed call automatically populates your dedicated lead pipeline. Gia tracks every prospect from first ring to won job—sending appointment reminders and 5-star review requests on autopilot.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
              Deploy Gia in 7 Days
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Pricing Plans
            </Button>
          </div>
        </div>

        <div className="relative">
          <GiaHeroAnimation />
        </div>
      </div>
    </section>
  );
}
