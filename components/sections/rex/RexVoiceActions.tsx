"use client";

import { CalendarPlus, CalendarClock, CalendarX, Search, HelpCircle, CheckCircle2, Database, Sparkles, Sliders, ShieldCheck, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const bentoActions = [
  {
    icon: CalendarPlus,
    step: "ACTION 01",
    title: "Books New Appointments Live",
    desc: "Checks real-time calendar availability during the call, offers open slots, and books directly with zero manual entry.",
    flow: "Caller asks service ➔ Verifies slot ➔ Booked to Calendar",
    colSpan: "lg:col-span-2",
  },
  {
    icon: CalendarClock,
    step: "ACTION 02",
    title: "Modifies & Reschedules",
    desc: "Locates existing bookings in real time and updates appointment slots instantly upon customer request.",
    flow: "Time Change Request ➔ Booking Updated Live",
    colSpan: "lg:col-span-1",
  },
  {
    icon: CalendarX,
    step: "ACTION 03",
    title: "Cancels & Frees Slots",
    desc: "Immediately opens up cancelled calendar slots so another paying customer can book.",
    flow: "Cancellation Request ➔ Slot Opened Live",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Search,
    step: "ACTION 04",
    title: "Customer Booking Lookup",
    desc: "Instantly checks active appointment dates and times by caller name or phone number.",
    flow: "Status Check ➔ Reads Active Appointment",
    colSpan: "lg:col-span-1",
  },
  {
    icon: HelpCircle,
    step: "ACTION 05",
    title: "Answers FAQs & Emergency Triage",
    desc: "Quotes exact service rates, checks service zip codes, and warm-transfers emergencies to your mobile.",
    flow: "FAQ / Emergency ➔ Quotes Rules & Warm Transfers",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Database,
    step: "AUTOMATION",
    title: "Automatic Lead & CRM Pipeline Sync",
    desc: "Every completed, rescheduled, or missed call logs a structured record directly into your CRM.",
    flow: "Call End ➔ Lead Logged ➔ Pipeline Updated",
    colSpan: "lg:col-span-2",
    isDark: true,
  },
];

const customChips = [
  "Custom Greeting Script & Business Voice",
  "Exact Diagnostic & Service Pricing Schedules",
  "Territory Zip Code & Service Area Filtering",
  "Urgent Emergency Warm-Transfer Numbers",
];

export default function RexVoiceActions() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border" id="voice-actions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold shadow-sm mb-3">
            <Sparkles className="size-3.5 text-teal" />
            Built-In Voice Capabilities
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            5 Core Voice Actions Rex Executes Live
          </h2>
          <p className="mt-3 text-base text-ink/70 max-w-xl mx-auto">
            Full-service AI voice dispatching capable of managing your entire appointment lifecycle in real time.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bentoActions.map((action, idx) => (
            <Reveal key={action.title} delay={idx * 0.06} className={action.colSpan}>
              <div
                className={`h-full rounded-3xl p-7 shadow-md transition-all flex flex-col justify-between ${
                  action.isDark
                    ? "border-2 border-teal bg-ink text-white shadow-xl"
                    : "border border-border bg-white hover:border-teal/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`flex size-11 items-center justify-center rounded-2xl border ${
                        action.isDark
                          ? "bg-teal/20 text-teal border-teal/30"
                          : "bg-teal/10 text-teal border-teal/20"
                      }`}
                    >
                      <action.icon className="size-5" />
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        action.isDark ? "bg-teal text-white" : "bg-ink text-white"
                      }`}
                    >
                      {action.step}
                    </span>
                  </div>

                  <h3
                    className={`font-heading font-bold text-lg mb-2 ${
                      action.isDark ? "text-white font-extrabold" : "text-ink"
                    }`}
                  >
                    {action.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 font-medium ${
                      action.isDark ? "text-cream/80" : "text-ink/70"
                    }`}
                  >
                    {action.desc}
                  </p>
                </div>

                <div
                  className={`rounded-xl p-2.5 border mt-auto ${
                    action.isDark
                      ? "bg-teal/20 border-teal/40 text-white font-bold"
                      : "bg-cream border-border text-ink/80"
                  }`}
                >
                  <p className="font-mono text-[11px] font-semibold leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-teal shrink-0 mt-0.5" />
                    <span>{action.flow}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Customization Card */}
          <Reveal delay={0.2} className="sm:col-span-2 lg:col-span-4">
            <div className="rounded-3xl border-2 border-teal/30 bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
                <Sliders className="size-48 text-teal" />
              </div>

              <div className="max-w-3xl relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-teal text-white shadow-sm">
                    <Sliders className="size-4" />
                  </span>
                  <span className="font-mono text-xs font-bold text-teal uppercase tracking-wider bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
                    100% Tailored Setup
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink text-balance">
                  We Fully Customize Rex for Your Business Operations
                </h3>

                <p className="text-ink/70 text-base leading-relaxed">
                  Configured specifically to your trade: greeting scripts, custom diagnostic rates, territory zip codes, and urgent escalation rules.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {customChips.map((chip) => (
                    <div key={chip} className="flex items-center gap-2.5 rounded-xl bg-cream border border-border p-3 text-xs font-semibold text-ink/90">
                      <Check className="size-3.5 text-teal shrink-0 font-bold" />
                      <span>{chip}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border flex items-center gap-2">
                  <ShieldCheck className="size-4 text-teal shrink-0" />
                  <p className="text-xs text-ink/70 font-medium">
                    You review and approve real test call recordings before Rex goes live on your line.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
