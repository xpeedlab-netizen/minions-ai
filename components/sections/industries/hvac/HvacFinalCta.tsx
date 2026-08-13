import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";
import { Flame, Sparkles, ShieldCheck } from "lucide-react";

export default function HvacFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] border-2 border-teal/30 bg-gradient-to-br from-ink via-ink to-teal-dark p-10 sm:p-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Decorative Background Glows */}
          <div className="absolute top-0 right-1/4 size-72 rounded-full bg-coral/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 size-72 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal/20 border border-teal/40 px-4 py-1.5 font-mono text-xs font-bold text-teal-300 uppercase tracking-wider">
              <Flame className="size-4 text-coral-text" />
              <span>Minions AI for HVAC Fleet Owners</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white text-balance leading-tight">
              Never Lose Another Emergency AC Call. <br className="hidden sm:inline" />
              Deploy Your AI Crew Before Peak Heat.
            </h2>

            <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              We configure your diagnostic rules, ServiceTitan integration, and 5-second text-backs in 7 days. Zero technical work required on your end.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow className="bg-teal hover:bg-teal-dark text-white shadow-lg w-full sm:w-auto">
                Deploy HVAC AI Crew in 7 Days
              </Button>
              <Button href="/live-demo" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Hear HVAC Voice Demo
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
