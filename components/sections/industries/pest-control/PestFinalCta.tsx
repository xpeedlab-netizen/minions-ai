import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL, SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";
import { Bug, Sparkles, Phone } from "lucide-react";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";

export default function PestFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] border-2 border-teal/30 bg-gradient-to-br from-ink via-ink to-teal-dark p-10 sm:p-16 text-center text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal/20 border border-teal/40 px-4 py-1.5 font-mono text-xs font-bold text-teal-300 uppercase tracking-wider">
              <Bug className="size-4 text-teal-300" />
              <span>Minions AI for Pest Control Operators</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-balance leading-tight">
              Turn After-Hours Pest Calls <br className="hidden sm:inline" />
              Into Booked Routes.
            </h2>

            <p className="text-white/75 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              We configure your routes, quarterly upsell scripts, and FieldRoutes / PestPac integration across a 3–6 week build. From $2,500, with a 30-day tuning window after go-live. Third-party usage is billed separately.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={BOOKING_CALENDAR_URL}
                size="lg"
                showArrow
                track={{ event: "cta_click", params: { location: "pest_final_cta" } }}
                className="bg-teal hover:bg-teal-dark text-white shadow-lg w-full sm:w-auto"
              >
                Book Setup Call
              </Button>
              {/* Matches the real-estate final CTA and both heroes: the live line, not
                  an untracked /live-demo link, so the secondary action is the same
                  everywhere and is actually measured. */}
              <TrackedPhoneLink
                href={`tel:${SITE_PHONE_TEL}`}
                location="pest_final_cta"
                className="inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 font-heading text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone aria-hidden className="size-4 shrink-0 text-teal-300" />
                Hear AI Live: {SITE_PHONE_NUMBER}
              </TrackedPhoneLink>
            </div>

            <p className="font-mono text-xs text-white/50 pt-2 flex items-center justify-center gap-2">
              <Sparkles className="size-3.5 text-teal-300" />
              Compatible with FieldRoutes, PestPac, GorillaDesk &amp; ServiceTitan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
