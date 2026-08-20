import { ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import GiaHeroAnimation from "./GiaHeroAnimation";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function GiaHero() {
  return (
    <section className="relative bg-cream border-b border-border overflow-hidden py-16 sm:py-24">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 rounded-full bg-success/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 size-80 rounded-full bg-teal/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-success shadow-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            <ShieldCheck className="size-3.5 text-success" />
            <span>Gia — Managed CRM &amp; Pipeline Autopilot</span>
          </div>

          <h1 className="font-heading font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-balance">
            Every Call &amp; Chat Tracked Automatically. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-success to-teal bg-clip-text text-transparent">
              Zero Manual CRM Entry.
            </span>
          </h1>

          <p className="text-lg text-ink/75 leading-relaxed max-w-xl">
            Gia logs every call and chat into your CRM, dispatches appointment reminders, and collects 5-star Google reviews on autopilot.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow className="bg-success hover:bg-success/90 text-white shadow-md">
              Deploy Gia in 7 Days
            </Button>
            <Button href="/pricing" variant="outline" size="lg" className="border-border hover:bg-white">
              See Pricing Plans
            </Button>
          </div>

          <p className="font-mono text-xs text-ink/50 flex items-center gap-2 pt-1">
            <span className="size-1.5 rounded-full bg-success" />
            No technical setup required. We build and manage your pipeline for you.
          </p>
        </div>

        {/* Right Column: Interactive CRM Simulator */}
        <div className="lg:col-span-6 relative">
          <GiaHeroAnimation />
        </div>
      </div>
    </section>
  );
}
