import { Droplets } from "lucide-react";
import Button from "@/components/ui/Button";
import PlumbingHeroAnimation from "./PlumbingHeroAnimation";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function PlumbingHero() {
  return (
    <section className="relative bg-cream border-b border-border overflow-hidden py-16 sm:py-24">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 size-80 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-teal shadow-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            <Droplets className="size-3.5 text-teal" />
            <span>Minions AI for Plumbing Contractors &bull; 24/7 Dispatch</span>
          </div>

          <h1 className="font-heading font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-balance">
            Never Lose Another <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal to-accent-blue bg-clip-text text-transparent">
              $5,000+ Emergency Repiping Lead.
            </span>
          </h1>

          <p className="text-lg text-ink/75 leading-relaxed max-w-xl">
            Rex answers 1st ring 24/7, guides emergency main valve shutoffs, quotes dispatch fees, and books jobs directly into ServiceTitan.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow className="bg-teal hover:bg-teal-dark text-white shadow-md">
              Hear Plumbing Voice Demo
            </Button>
            <Button href={BOOKING_CALENDAR_URL} variant="outline" size="lg" className="border-border hover:bg-white">
              Book 15-Min Plumbing Demo
            </Button>
          </div>

          <p className="font-mono text-xs text-ink/65 flex items-center gap-2 pt-1">
            <span className="size-1.5 rounded-full bg-teal" />
            Zero technical setup. Live in 3–6 weeks.
          </p>
        </div>

        {/* Right Column: Interactive Emergency Dispatch Simulator */}
        <div className="lg:col-span-6 relative">
          <PlumbingHeroAnimation />
        </div>
      </div>
    </section>
  );
}
