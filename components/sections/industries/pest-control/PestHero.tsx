import { Bug, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import IndustryCallPanel from "@/components/ui/IndustryCallPanel";
import ReassuranceStrip from "@/components/ui/ReassuranceStrip";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import TrustLogos from "@/components/ui/TrustLogos";
import { BOOKING_CALENDAR_URL, SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";

export default function PestHero() {
  return (
    <section className="relative bg-cream border-b border-border overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-teal shadow-xs">
            <span className="inline-flex size-2 rounded-full bg-teal" />
            <Bug className="size-3.5 text-teal" />
            <span>Minions AI for Pest Control Operators</span>
          </div>

          <h1 className="font-heading font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-balance">
            Turn Midnight Pest Panics Into <br className="hidden sm:inline" />
            <span className="text-teal">Recurring Protection Plans.</span>
          </h1>

          <p className="text-lg text-ink/75 leading-relaxed max-w-xl">
            Rex answers 1st ring 24/7, triages pest panics, pitches $59/mo quarterly protection plans, and books directly into FieldRoutes or PestPac.
          </p>

          {/* Action Buttons — one consultation CTA sitewide. The booking link is a
              30-minute consultation (app/contact/page.tsx), so no "15-min" framing. */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Button
              href={BOOKING_CALENDAR_URL}
              size="lg"
              showArrow
              track={{ event: "cta_click", params: { location: "pest_hero" } }}
              className="bg-teal hover:bg-teal-dark text-white shadow-md"
            >
              Book Setup Call
            </Button>
            <TrackedPhoneLink
              href={`tel:${SITE_PHONE_TEL}`}
              location="pest_hero"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-4.5 font-heading text-base font-bold text-ink shadow-sm transition-all duration-150 hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2"
            >
              <Phone aria-hidden className="size-4 shrink-0 text-teal" />
              Hear AI Live: {SITE_PHONE_NUMBER}
            </TrackedPhoneLink>
          </div>

          {/* Replaces the old "Zero technical setup / 3-6 weeks" line: same promise,
              plus the price and tuning window an ad visitor asks for next. */}
          <ReassuranceStrip className="pt-1" />
        </div>

        {/* Right Column: a real recorded pest call, not a simulation. */}
        <div className="lg:col-span-6 relative">
          <IndustryCallPanel
            recordingId="pest-ants-booking"
            eyebrow="Hear the AI live"
          />
        </div>
      </div>

      {/* Integrations a pest operator actually runs. Text alone answers "does this work
          with my CRM?" more weakly than the names set in type. */}
      <div className="relative mx-auto mt-14 max-w-7xl border-t border-ink/10 px-4 pt-8 sm:px-6 lg:px-8">
        <TrustLogos
          only={["FieldRoutes", "PestPac", "GorillaDesk", "ServiceTitan"]}
          heading="Books Straight Into Your Pest Control Stack"
        />
      </div>
    </section>
  );
}
