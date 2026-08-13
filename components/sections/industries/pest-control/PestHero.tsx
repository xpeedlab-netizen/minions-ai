import { ShieldCheck, Sparkles, Bug } from "lucide-react";
import Button from "@/components/ui/Button";
import PestHeroAnimation from "./PestHeroAnimation";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function PestHero() {
  return (
    <section className="relative bg-cream border-b border-border overflow-hidden py-16 sm:py-24">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 size-80 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-teal shadow-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            <Bug className="size-3.5 text-teal" />
            <span>Minions AI for Pest Control Operators &bull; Flagship Target Market</span>
          </div>

          <h1 className="font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-balance">
            Catch Every &quot;Wasp Nest Near Kids&apos; Room&quot; Call. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal to-coral-text bg-clip-text text-transparent">
              Turn Panics into $2,500+ Recurring Subscriptions.
            </span>
          </h1>

          <p className="text-lg text-ink/75 leading-relaxed max-w-xl">
            When homeowners spot rodents, wasps, or bed bugs, they panic. They don&apos;t leave voicemails — they call until someone answers. Rex answers on the 1st ring 24/7, quotes initial treatments, converts one-off callers into $59/mo quarterly protection plans, and locks slots straight into FieldRoutes, GorillaDesk, or PestPac.
          </p>

          {/* Value Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-ink/80">
            <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-white/70 px-3 py-2">
              <Sparkles className="size-4 text-teal shrink-0" />
              <span>FieldRoutes, PestPac &amp; GorillaDesk Sync</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-white/70 px-3 py-2">
              <Sparkles className="size-4 text-teal shrink-0" />
              <span>Quarterly Maintenance Upsell Script</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow className="bg-teal hover:bg-teal-dark text-white shadow-md">
              Hear Pest Control Voice Demo
            </Button>
            <Button href={BOOKING_CALENDAR_URL} variant="outline" size="lg" className="border-border hover:bg-white">
              Book 15-Min PCO Demo
            </Button>
          </div>

          <p className="font-mono text-xs text-ink/50 flex items-center gap-2 pt-1">
            <span className="size-1.5 rounded-full bg-teal" />
            Zero technical setup. We configure your route zips &amp; pricing logic in 7 days.
          </p>
        </div>

        {/* Right Column: Interactive Pest Dispatch Simulator */}
        <div className="lg:col-span-6 relative">
          <PestHeroAnimation />
        </div>
      </div>
    </section>
  );
}
