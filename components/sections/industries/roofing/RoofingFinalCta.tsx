import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";
import { CloudLightning, Sparkles } from "lucide-react";

export default function RoofingFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] border-2 border-teal/30 bg-gradient-to-br from-ink via-ink to-teal-dark p-10 sm:p-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Decorative Background Glows */}
          <div className="absolute top-0 right-1/4 size-72 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 size-72 rounded-full bg-coral/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal/20 border border-teal/40 px-4 py-1.5 font-mono text-xs font-bold text-teal-300 uppercase tracking-wider">
              <CloudLightning className="size-4 text-coral-text" />
              <span>Minions AI for Roofing Fleet Owners</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-balance leading-tight">
              Never Lose Another Storm Surge Call. <br className="hidden sm:inline" />
              Deploy Your AI Crew Before the Next Hail Event.
            </h2>

            <p className="text-white/75 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              We configure your insurance intake, photo upload links, and ServiceTitan / Jobber calendar sync across a 3–6 week build.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow className="bg-teal hover:bg-teal-dark text-white shadow-lg w-full sm:w-auto">
                Deploy Your Roofing AI Crew
              </Button>
              <Button href="/live-demo" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Hear Roofing Voice Demo
              </Button>
            </div>

            <p className="font-mono text-xs text-white/50 pt-2 flex items-center justify-center gap-2">
              <Sparkles className="size-3.5 text-teal-300" />
              Compatible with ServiceTitan, Jobber, Housecall Pro &amp; Google Calendar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
