import { Building2, Sparkles, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import RealEstateHeroAnimation from "./RealEstateHeroAnimation";
import { BOOKING_CALENDAR_URL, SITE_PHONE_NUMBER } from "@/lib/data/placeholders";

export default function RealEstateHero() {
  return (
    <section className="relative bg-cream border-b border-border overflow-hidden py-16 sm:py-24">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 rounded-full bg-teal/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 size-80 rounded-full bg-coral/15 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 space-y-6 min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-teal shadow-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            <Building2 className="size-3.5 text-teal" />
            <span>Minions AI for Real Estate Agencies (1–10 Agents)</span>
          </div>

          <h1 className="font-heading font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-balance">
            Stop Losing <br className="hidden sm:inline" />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal via-[#4ade80] to-coral-text bg-clip-text text-transparent drop-shadow-sm">
                $15,000 Commissions
              </span>
            </span>{" "}
            to Voicemail.
          </h1>

          <p className="text-lg text-ink/75 leading-relaxed max-w-xl">
            When you&apos;re in a closing or driving between showings, Alex answers on ring one, qualifies buyers with LPMAMA, enforces Fair Housing Act compliance, and books showings directly onto your calendar in &lt; 75s.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow className="bg-teal hover:bg-teal-dark text-white shadow-md">
              Hear Real Estate Voice Demo
            </Button>
            <Button href={BOOKING_CALENDAR_URL} variant="outline" size="lg" className="border-border hover:bg-white">
              Book 15-Min Broker Demo
            </Button>
          </div>

          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-ink/60">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-teal" /> 100-Pt Lead Scoring
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5 text-teal" /> Live Line: {SITE_PHONE_NUMBER}
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Real Estate Voice Simulator */}
        <div className="lg:col-span-6 relative w-full min-w-0">
          <RealEstateHeroAnimation />
        </div>
      </div>
    </section>
  );
}
