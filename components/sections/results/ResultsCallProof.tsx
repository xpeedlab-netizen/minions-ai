import Image from "next/image";
import { AudioWaveform, CalendarDays, TrendingUp, CheckCircle2, PhoneCall, ShieldCheck, MapPin, Building2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";

/**
 * INTEGRITY NOTE (2026-08-29). This array used to hold three "pilot case studies" with
 * invented companies, cities, fleet sizes, CRMs and outcomes — Apex Heating & Air in
 * Austin at "+$18,400 / mo", BlueLine Plumbing in Phoenix, ShieldPro Pest Services in
 * Orlando at "91 quarterly plans booked" — under the headings "Pilot Performance & Trade
 * Case Studies" and "What this looks like on a real line".
 *
 * Minions.AI has no customers yet. Those were fabricated results attributed to named
 * businesses, which is the most serious kind of false claim a site can make: a prospect
 * who asks for a reference finds nothing behind it.
 *
 * Replaced with clearly-labelled illustrative scenarios. They describe how the system
 * behaves, name no company, and attribute no outcome to anyone. Every card is stamped
 * "Illustrative" in the UI. When there are real customers with real permission, this is
 * the array to fill in — with their names, their numbers, and their sign-off.
 */
const SCENARIOS = [
  {
    trade: "HVAC & Cooling",
    title: "The 2am heatwave breakdown",
    setting: "After-hours emergency demand",
    metric: "Ring 1",
    metricLabel: "Answered, day or night",
    story:
      "Emergency AC calls cluster overnight, when no office staff are on. Rex answers in your company name, triages whether it is a true emergency, and either books a diagnostic slot or escalates to the on-call phone.",
    highlights: ["Answers overnight without staffing it", "Escalates real emergencies", "Books straight to the calendar"],
  },
  {
    trade: "Plumbing & Drain",
    title: "Four burst-pipe calls at once",
    setting: "Simultaneous inbound spike",
    metric: "5 sec",
    metricLabel: "Text-back to the overflow",
    story:
      "A phone line can only hold one conversation. Rex takes the first caller; Zip texts everyone who hit a busy signal or hung up during the greeting, before they finish dialling a competitor.",
    highlights: ["Covers the second simultaneous caller", "Catches hang-ups", "Covers web forms too"],
  },
  {
    trade: "Pest Control",
    title: "Quarterly plans booked at midnight",
    setting: "Recurring-revenue capture",
    metric: "24/7",
    metricLabel: "Without a third shift",
    story:
      "Termite and rodent enquiries do not keep office hours. Pip answers written questions from your verified data and Rex qualifies the phone line, so a recurring plan can start whenever the customer decides to act.",
    highlights: ["No third-shift payroll", "Answers from your own pricing", "Recurring plans, not one-off jobs"],
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
            <span>How it works in practice</span>
          </div>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-ink">
            What this looks like on a real line
          </h2>
          <p className="mt-3 text-base text-ink/70">
            Illustrative scenarios, not customer results — we are pre-launch and will not invent references. Call the demo line and hear it handle one yourself.
          </p>
        </div>

        {/* Illustrative scenario cards — see the integrity note above. */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {SCENARIOS.map((study, idx) => (
            <Reveal key={study.title} delay={idx * 0.08} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:border-teal/30 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-4">
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal">
                        {study.trade}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-ink mt-0.5">
                        {study.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-cream px-2.5 py-1 text-xs font-medium text-ink/70">
                      <MapPin className="size-3 text-teal" />
                      <span>Illustrative</span>
                    </div>
                  </div>

                  {/* Highlight Metric */}
                  <div className="mt-5 rounded-xl bg-teal/5 border border-teal/15 p-4 text-center">
                    <p className="font-mono text-2xl sm:text-3xl font-extrabold text-teal">
                      {study.metric}
                    </p>
                    <p className="font-mono text-xs text-ink/75 uppercase tracking-wide mt-1">
                      {study.metricLabel}
                    </p>
                  </div>

                  <p className="mt-5 text-sm text-ink/70 leading-relaxed">
                    {study.story}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="flex items-center justify-between text-xs text-ink/75 mb-3">
                    <span className="flex items-center gap-1">
                      <Building2 className="size-3.5" />
                      <span>{study.setting}</span>
                    </span>
                    <span className="font-mono font-medium text-teal">
                      Example scenario
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

        {/* Was a "Request a Reference" banner offering to connect prospects with
            contractors who use Minions.AI — a promise with no customers behind it.
            The demo line is the one proof that is real and needs nobody's permission. */}
        <div className="rounded-2xl border border-teal/20 bg-teal/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal text-white">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-ink">
                Don&apos;t take our word for it — call it.
              </h4>
              <p className="text-[0.9375rem] text-ink/75 mt-1">
                We are pre-launch, so we have no customer references to offer yet. What we do
                have is a live line you can dial right now, with no signup.
              </p>
            </div>
          </div>
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-teal-dark"
          >
            <PhoneCall className="size-4" />
            <span>{SITE_PHONE_NUMBER}</span>
          </a>
        </div>

        {/* Live Call Simulator */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Call Workflow Illustration */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-2">
                  <span className="rounded-md bg-cream border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/75">
                    Interactive Preview
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-teal">Emergency Dispatch Workflow</h3>
                <p className="mt-1 text-sm text-ink/75">
                  How Rex qualifies an after-hours emergency call and books to your calendar.
                </p>
              </div>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cream text-ink/75">
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
              <span className="rounded-full bg-success/10 px-3 py-1 font-mono text-xs text-success-text">
                Outcome: Auto-Dispatched
              </span>
            </div>
          </div>

          {/* The Result */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-teal">Automated Calendar & CRM Sync</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/75">
              Direct ServiceTitan & Jobber Entry
            </p>

            <div className="mt-5 rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-cream px-4 py-3">
                <CalendarDays className="size-4 text-ink/75" />
                <span className="text-sm font-medium text-ink">Tomorrow Schedule — Board A</span>
              </div>
              <div className="border-l-4 border-teal bg-teal/5 px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-ink">Emergency AC Diagnostic — 1420 Oak St</span>
                <span className="font-mono text-xs text-ink/75">8:00 AM</span>
              </div>
              <div className="px-4 py-3 border-t border-border" />
              <div className="border-l-4 border-teal bg-teal/5 px-4 py-3 flex items-center justify-between border-t border-border">
                <span className="text-sm font-medium text-ink">Scheduled Maintenance — 88 Pine Ave</span>
                <span className="font-mono text-xs text-ink/75">10:30 AM</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
