import { Building2, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import IndustryCallPanel from "@/components/ui/IndustryCallPanel";
import ReassuranceStrip from "@/components/ui/ReassuranceStrip";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import TrustLogos from "@/components/ui/TrustLogos";
import { BOOKING_CALENDAR_URL, SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";

export default function RealEstateHero() {
  return (
    <section className="relative bg-cream border-b border-border overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 space-y-6 min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-teal shadow-xs">
            <span className="inline-flex size-2 rounded-full bg-teal" />
            <Building2 className="size-3.5 text-teal" />
            <span>Minions AI for Real Estate Agencies (1–10 Agents)</span>
          </div>

          <h1 className="font-heading font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-balance">
            Stop Losing <br className="hidden sm:inline" />
            <span className="text-teal">High-Value Buyers</span>{" "}
            to Voicemail.
          </h1>

          <p className="text-lg text-ink/75 leading-relaxed max-w-xl">
            When you&apos;re in a closing or driving between showings, Alex answers on ring one, qualifies buyers with LPMAMA, follows your approved Fair Housing guardrails and escalation rules, and books showings directly onto your calendar, on the first call.
          </p>

          {/* Action Buttons — one consultation CTA sitewide. The booking link is a
              30-minute consultation (app/contact/page.tsx), so no "15-min" framing.
              The live line moves out of the footnote and into the secondary CTA,
              matching the homepage hero. */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <Button
              href={BOOKING_CALENDAR_URL}
              size="lg"
              showArrow
              track={{ event: "cta_click", params: { location: "real_estate_hero" } }}
              className="bg-teal hover:bg-teal-dark text-white shadow-md"
            >
              Book Setup Call
            </Button>
            <TrackedPhoneLink
              href={`tel:${SITE_PHONE_TEL}`}
              location="real_estate_hero"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-4.5 font-heading text-base font-bold text-ink shadow-sm transition-all duration-150 hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2"
            >
              <Phone aria-hidden className="size-4 shrink-0 text-teal" />
              Hear AI Live: {SITE_PHONE_NUMBER}
            </TrackedPhoneLink>
          </div>

          <ReassuranceStrip className="pt-1" />
        </div>

        {/* Right Column: a real recorded showing call, not a simulation. */}
        <div className="lg:col-span-6 relative w-full min-w-0">
          <IndustryCallPanel
            recordingId="realestate-showing"
            eyebrow="Hear the AI live"
          />
        </div>
      </div>

      {/* Integrations an agency actually runs. Text alone answers "does this work with
          my CRM?" more weakly than the names set in type. */}
      <div className="relative mx-auto mt-14 max-w-7xl border-t border-ink/10 px-4 pt-8 sm:px-6 lg:px-8">
        <TrustLogos
          only={["Follow Up Boss", "Google Calendar", "KVCore", "EspoCRM"]}
          heading="Books Straight Into Your Brokerage Stack"
        />
      </div>
    </section>
  );
}
