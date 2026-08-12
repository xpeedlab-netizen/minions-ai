"use client";

import { CalendarPlus, CalendarClock, CalendarX, Search, HelpCircle, CheckCircle2, Database, Sparkles, Sliders, ShieldCheck, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const bentoActions = [
  {
    icon: CalendarPlus,
    step: "ACTION 01",
    title: "Books New Appointments Live",
    desc: "Rex checks your real-time Google Calendar availability during the call, offers open slots, and writes the booking directly—with zero double-booking or manual entry.",
    flow: "Caller asks service ➔ Verifies slot ➔ Booked to Calendar",
    colSpan: "lg:col-span-2",
  },
  {
    icon: CalendarClock,
    step: "ACTION 02",
    title: "Modifies & Reschedules Bookings",
    desc: "If a caller needs to move their appointment, Rex finds their existing booking in real time and updates the schedule instantly.",
    flow: "Time Change Request ➔ Booking Updated Live",
    colSpan: "lg:col-span-1",
  },
  {
    icon: CalendarX,
    step: "ACTION 03",
    title: "Cancels Appointments & Frees Slots",
    desc: "When a customer calls to cancel, Rex removes the appointment immediately, freeing up the calendar slot for another paying client.",
    flow: "Cancellation Request ➔ Slot Opened Live",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Search,
    step: "ACTION 04",
    title: "Instant Customer Booking Lookup",
    desc: "If a caller asks 'When is my appointment?', Rex looks up their active record—even if calling from a different phone number.",
    flow: "Status Check ➔ Reads Active Appointment",
    colSpan: "lg:col-span-1",
  },
  {
    icon: HelpCircle,
    step: "ACTION 05",
    title: "Answers Grounded FAQs & Triage",
    desc: "Answers exact pricing ranges, service areas, guarantees, and licensing—and warm-transfers emergency calls straight to your mobile cell.",
    flow: "FAQ / Emergency ➔ Quotes Rules & Warm Transfers",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Database,
    step: "AUTOMATION",
    title: "Automatic Lead & CRM Pipeline Sync",
    desc: "Every call—whether booked, rescheduled, cancelled, or a question—automatically writes a detailed record to your dedicated lead pipeline to track revenue.",
    flow: "Call End ➔ Lead Logged ➔ Pipeline Updated",
    colSpan: "lg:col-span-2",
    isDark: true,
  },
];

const customChips = [
  "Custom Greeting & Business Voice Script",
  "Voice Tone (Expert Professional to Friendly Neighbor)",
  "Exact Service Fees & Diagnostic Pricing Schedules",
  "Territory Zip Codes & Service Area Filtering",
  "Custom Urgent Emergency Warm-Transfer Numbers",
  "State-Specific Call Recording & Consent Rules",
];

export default function RexVoiceActions() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border" id="voice-actions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold shadow-sm mb-4">
            <Sparkles className="size-3.5 text-teal" />
            Built-In Voice Capabilities
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            The 5 Core Actions Rex Executes Live on the Phone
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Rex isn&apos;t just a message-taking bot. He is a full-service AI dispatcher capable of managing your entire appointment lifecycle in real time.
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
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`flex size-12 items-center justify-center rounded-2xl border ${
                        action.isDark
                          ? "bg-teal/20 text-teal border-teal/30"
                          : "bg-teal/10 text-teal border-teal/20"
                      }`}
                    >
                      <action.icon className="size-6" />
                    </span>
                    <span
                      className={`font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        action.isDark ? "bg-teal text-white" : "bg-ink text-white"
                      }`}
                    >
                      {action.step}
                    </span>
                  </div>

                  <h3
                    className={`font-heading font-bold text-xl mb-3 ${
                      action.isDark ? "text-white font-extrabold" : "text-ink"
                    }`}
                  >
                    {action.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 font-medium ${
                      action.isDark ? "text-cream/80" : "text-ink/70"
                    }`}
                  >
                    {action.desc}
                  </p>
                </div>

                <div
                  className={`rounded-xl p-3 border mt-auto ${
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

          {/* 3-Column Spanning Full-Width Customization Card */}
          <Reveal delay={0.2} className="sm:col-span-2 lg:col-span-4">
            <div className="rounded-3xl border-2 border-teal/30 bg-white p-8 sm:p-12 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
                <Sliders className="size-48 text-teal" />
              </div>

              <div className="max-w-3xl relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-teal text-white shadow-sm">
                    <Sliders className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-teal uppercase tracking-wider bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
                    100% Tailored Onboarding
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-ink text-balance mb-4">
                  Beyond Standard Services: We Fully Customize Rex for Your Business
                </h3>

                <p className="text-ink/75 text-base sm:text-lg leading-relaxed mb-8">
                  Rex is never handed over as a rigid, one-size-fits-all bot. During our 100% done-for-you onboarding, our team customizes every aspect of Rex to match your exact operational needs, brand voice, and business policies.
                </p>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {customChips.map((chip) => (
                    <div key={chip} className="flex items-center gap-2.5 rounded-xl bg-cream border border-border p-3.5 text-sm font-semibold text-ink/90">
                      <Check className="size-4 text-teal shrink-0 font-bold" />
                      <span>{chip}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                  <ShieldCheck className="size-5 text-teal shrink-0" />
                  <p className="text-xs sm:text-sm text-ink/70 font-medium">
                    You hear real test call recordings and sign off on all rules before Rex goes live on your line.
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
