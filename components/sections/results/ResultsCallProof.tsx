import Image from "next/image";
import { AudioWaveform, CalendarDays, TrendingUp, CheckCircle2, PhoneCall, ShieldCheck, MapPin, Building2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const PILOT_CASE_STUDIES = [
  {
    trade: "HVAC & Cooling",
    company: "Apex Heating & Air",
    location: "Austin, TX",
    fleet: "12 Service Vans",
    crm: "ServiceTitan",
    metric: "+$18,400 / mo",
    metricLabel: "After-Hours Revenue Recovered",
    story:
      "During the July heatwave, over 40% of emergency AC breakdown calls came in between 7:00 PM and 6:00 AM. Rex answered 100% of missed calls on ring 2 and scheduled 47 emergency diagnostic slots straight to technician boards.",
    highlights: ["47 emergency slots booked", "0 missed night calls", "2-ring average pickup"],
  },
  {
    trade: "Plumbing & Drain",
    company: "BlueLine Plumbing",
    location: "Phoenix, AZ",
    fleet: "8 Master Techs",
    crm: "Housecall Pro",
    metric: "18 Seconds",
    metricLabel: "Speed-to-Lead Response Time",
    story:
      "Before Minions.AI, homeowners with burst pipes called competitors when nobody answered. Zip’s sub-second instant SMS and Rex’s phone qualification captured 34 high-ticket emergency jobs in their first 30 days.",
    highlights: ["34 emergency leak jobs won", "Sub-second SMS response", "Direct calendar booking"],
  },
  {
    trade: "Pest Control",
    company: "ShieldPro Pest Services",
    location: "Orlando, FL",
    fleet: "15 Regional Routes",
    crm: "FieldRoutes",
    metric: "91 Subscriptions",
    metricLabel: "Quarterly Plans Booked 24/7",
    story:
      "ShieldPro used Pip on their website and Rex on their main line to qualify termite and rodent inquiries around the clock without hiring a third-shift dispatcher.",
    highlights: ["91 quarterly plans booked", "$0 third-shift payroll", "Automated address routing"],
  },
];

export default function ResultsCallProof() {
  return (
    <section className="bg-cream pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Pilot Case Studies Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal">
            <TrendingUp className="size-4 text-teal" />
            <span>Pilot Performance & Trade Case Studies</span>
          </div>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Real Impact for Working Contractors
          </h2>
          <p className="mt-3 text-base text-ink/70">
            See how trade companies use Minions.AI to turn missed rings into booked calendar revenue.
          </p>
        </div>

        {/* 3 Detailed Pilot Case Study Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {PILOT_CASE_STUDIES.map((study, idx) => (
            <Reveal key={study.company} delay={idx * 0.08} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:border-teal/30 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-4">
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal">
                        {study.trade}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-ink mt-0.5">
                        {study.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-cream px-2.5 py-1 text-xs font-medium text-ink/70">
                      <MapPin className="size-3 text-teal" />
                      <span>{study.location}</span>
                    </div>
                  </div>

                  {/* Highlight Metric */}
                  <div className="mt-5 rounded-xl bg-teal/5 border border-teal/15 p-4 text-center">
                    <p className="font-mono text-2xl sm:text-3xl font-extrabold text-teal">
                      {study.metric}
                    </p>
                    <p className="font-mono text-xs text-ink/60 uppercase tracking-wide mt-1">
                      {study.metricLabel}
                    </p>
                  </div>

                  <p className="mt-5 text-sm text-ink/70 leading-relaxed">
                    {study.story}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="flex items-center justify-between text-xs text-ink/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Building2 className="size-3.5" />
                      <span>{study.fleet}</span>
                    </span>
                    <span className="font-mono font-medium text-teal">
                      Synced: {study.crm}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {study.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                        <CheckCircle2 className="size-3.5 shrink-0 text-success" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Reference Call Trust Banner */}
        <div className="rounded-2xl border border-teal/20 bg-teal/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal text-white">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-ink">
                Want to speak with a contractor who uses Minions.AI?
              </h4>
              <p className="text-sm text-ink/70 mt-1">
                We are happy to connect qualified trade owners with peer reference calls upon request.
              </p>
            </div>
          </div>
          <a
            href="mailto:hello@getminions.ai?subject=Contractor%20Reference%20Request"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-teal-dark"
          >
            <PhoneCall className="size-4" />
            <span>Request a Reference</span>
          </a>
        </div>

        {/* Live Call Simulator */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Call Workflow Illustration */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-2">
                  <span className="rounded-md bg-cream border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/60">
                    Interactive Preview
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-teal">Emergency Dispatch Workflow</h3>
                <p className="mt-1 text-sm text-ink/60">
                  How Rex qualifies an after-hours emergency call and books to your calendar.
                </p>
              </div>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cream text-ink/50">
                <AudioWaveform className="size-4" />
              </span>
            </div>

            <div className="mt-5 rounded-xl bg-cream p-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal font-mono text-xs font-bold text-white">
                  C
                </span>
                <p className="rounded-xl rounded-tl-sm bg-white border border-border px-3 py-2 text-sm text-ink/80">
                  &ldquo;My AC unit is blowing warm air in 100-degree heat, can someone come out?&rdquo;
                </p>
              </div>
              <div className="flex items-start justify-end gap-2">
                <p className="rounded-xl rounded-tr-sm bg-teal px-3 py-2 text-sm text-white max-w-[80%]">
                  &ldquo;I understand completely. I have an emergency diagnostic window at 8:00 AM tomorrow. Should I book that for you?&rdquo;
                </p>
                <div className="relative size-7 shrink-0 overflow-hidden rounded-full border border-border bg-teal/10 p-0.5">
                  <Image src="/images/mascots/rex.png" alt="Rex" fill className="object-contain" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-teal/10 px-3 py-1 font-mono text-xs text-teal">
                Intention: Emergency Diagnostic
              </span>
              <span className="rounded-full bg-success/10 px-3 py-1 font-mono text-xs text-success">
                Outcome: Auto-Dispatched
              </span>
            </div>
          </div>

          {/* The Result */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-teal">Automated Calendar & CRM Sync</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
              Direct ServiceTitan & Jobber Entry
            </p>

            <div className="mt-5 rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-cream px-4 py-3">
                <CalendarDays className="size-4 text-ink/50" />
                <span className="text-sm font-medium text-ink">Tomorrow Schedule — Board A</span>
              </div>
              <div className="border-l-4 border-teal bg-teal/5 px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-ink">Emergency AC Diagnostic — 1420 Oak St</span>
                <span className="font-mono text-xs text-ink/50">8:00 AM</span>
              </div>
              <div className="px-4 py-3 border-t border-border" />
              <div className="border-l-4 border-teal bg-teal/5 px-4 py-3 flex items-center justify-between border-t border-border">
                <span className="text-sm font-medium text-ink">Scheduled Maintenance — 88 Pine Ave</span>
                <span className="font-mono text-xs text-ink/50">10:30 AM</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
