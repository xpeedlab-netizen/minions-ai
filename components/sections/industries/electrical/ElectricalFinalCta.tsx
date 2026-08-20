import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";
import { Zap, Sparkles } from "lucide-react";

export default function ElectricalFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] border-2 border-teal/30 bg-gradient-to-br from-ink via-ink to-teal-dark p-10 sm:p-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Decorative Background Glows */}
          <div className="absolute top-0 right-1/4 size-72 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 size-72 rounded-full bg-accent-blue/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal/20 border border-teal/40 px-4 py-1.5 font-mono text-xs font-bold text-teal-300 uppercase tracking-wider">
              <Zap className="size-4 text-teal-300" />
              <span>Minions AI for Electrical Fleet Owners</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-balance leading-tight">
              Never Lose Another Sparkling Breaker Call. <br className="hidden sm:inline" />
              Deploy Your Electrical AI Crew.
            </h2>

            <p className="text-white/75 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              We configure your safety rules, panel photo upload links, and ServiceTitan / Housecall Pro sync in 7 days.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow className="bg-teal hover:bg-teal-dark text-white shadow-lg w-full sm:w-auto">
                Deploy Electrical AI Crew in 7 Days
              </Button>
              <Button href="/live-demo" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Hear Electrical Voice Demo
              </Button>
            </div>

            <p className="font-mono text-xs text-white/50 pt-2 flex items-center justify-center gap-2">
              <Sparkles className="size-3.5 text-teal-300" />
              Compatible with ServiceTitan, Housecall Pro, Jobber &amp; Google Calendar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
