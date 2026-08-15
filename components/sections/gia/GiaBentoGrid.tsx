import { Layers, Mail, CalendarClock, Star, CheckCircle2, Sparkles, RefreshCw } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const tags = [
  "Pipeline Architecture",
  "Automated Workflows",
  "Google Calendar Sync",
  "Zero Manual Entry",
];

const crmIntegrations = [
  "ServiceTitan",
  "Housecall Pro",
  "Jobber",
  "FieldRoutes",
  "PestPac",
  "Google Calendar",
];

export default function GiaBentoGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-success/10 border border-success/30 px-3.5 py-1 font-mono text-xs font-bold text-success uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Built-In CRM Autopilot Architecture</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Gia runs your pipeline and follow-up on 24/7 autopilot.
          </h2>
          <p className="text-base text-ink/70 max-w-xl mx-auto">
            From instant lead capture to post-job Google review collection with zero manual entry.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Main Large Card — Done-For-You CRM Architecture */}
          <Reveal className="lg:col-span-2">
            <div className="relative h-full rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-success/20 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-success/20 text-success border border-success/40">
                    <Layers className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-success bg-success/15 border border-success/30 px-3 py-1 rounded-full uppercase">
                    100% Done-For-You
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-extrabold text-2xl text-white">
                  Done-For-You Pipeline Setup &amp; Workflow Logic
                </h3>
                <p className="mt-2.5 text-sm text-white/75 leading-relaxed max-w-xl">
                  We build and optimize your pipelines from scratch: deal stages, automated triggers, and lead tagging customized to your trade.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/80"
                  >
                    <CheckCircle2 className="size-3 text-success" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2: Instant Follow-up Sequences */}
          <Reveal delay={0.05}>
            <div className="relative h-full rounded-3xl border border-teal/30 bg-teal p-7 text-white shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Mail className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white bg-white/20 px-2.5 py-1 rounded-full uppercase">
                    Speed to Lead
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-white">
                  Instant Lead Follow-Up
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  Fires off 2-way SMS and email responses within 5 seconds of any web form or missed call.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 font-mono text-xs text-white/90 flex items-center justify-between">
                <span>Response Time</span>
                <span className="font-bold text-cream">&lt; 5 Seconds</span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Appointment Reminders */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-success/10 text-success border border-success/30">
                  <CalendarClock className="size-5" />
                </span>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-ink">
                  Smart SMS Reminders
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  Sends 24h &amp; 1h confirmation links to ensure homeowners are ready when technicians arrive.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-ink/60 flex items-center justify-between">
                <span>No-Show Drop</span>
                <span className="font-bold text-success">Up to 85%</span>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Google Review Engine */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/30">
                  <Star className="size-5" />
                </span>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-ink">
                  5-Star Review Engine
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  Triggers an automated Google review link the second a job is marked closed in your CRM.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-ink/60 flex items-center justify-between">
                <span>Review Link</span>
                <span className="font-bold text-amber-600">Automated 1-Click</span>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Multi-Tool CRM Synchronization */}
          <Reveal delay={0.2}>
            <div className="relative h-full rounded-3xl border border-success/30 bg-success p-7 text-white shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <RefreshCw className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white bg-white/20 px-2.5 py-1 rounded-full uppercase">
                    2-Way Sync
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-white">
                  CRM Sync Engine
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  Bi-directional data sync with your existing dispatch and calendar tools.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 font-mono text-xs text-white/90">
                <p className="text-[10px] uppercase text-white/60 mb-2 font-bold">Supported CRMs</p>
                <div className="flex flex-wrap gap-1.5">
                  {crmIntegrations.map((c) => (
                    <span key={c} className="rounded-md bg-white/20 px-2 py-0.5 text-[10px]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
