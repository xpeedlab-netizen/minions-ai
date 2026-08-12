"use client";

import { CalendarPlus, CalendarClock, CalendarX, Search, HelpCircle, CheckCircle2, Database, Sparkles, Sliders, ShieldCheck, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const voiceActions = [
  {
    icon: CalendarPlus,
    step: "ACTION 01",
    title: "Books New Appointments Live",
    badge: "Direct Calendar Sync",
    desc: "Rex checks your real-time Google Calendar availability during the call, offers available open slots, and writes the booking directly—with zero double-booking or manual entry.",
    flow: "Caller asks for service ➔ Rex verifies slot ➔ Booked directly to Calendar",
  },
  {
    icon: CalendarClock,
    step: "ACTION 02",
    title: "Modifies & Reschedules Existing Bookings",
    badge: "Live Calendar Update",
    desc: "If a caller needs to move their appointment to a new day or time, Rex finds their existing booking in real time and updates the schedule instantly.",
    flow: "Caller requests time change ➔ Rex locates booking ➔ Updates date/time live",
  },
  {
    icon: CalendarX,
    step: "ACTION 03",
    title: "Cancels Appointments & Frees Slots",
    badge: "Instant Slot Recovery",
    desc: "When a customer calls to cancel, Rex removes the appointment immediately, freeing up the calendar slot for another paying client.",
    flow: "Caller cancels ➔ Rex removes booking ➔ Opens slot for new business",
  },
  {
    icon: Search,
    step: "ACTION 04",
    title: "Instant Customer Booking Lookup",
    badge: "Cross-Device Lookup",
    desc: "If a caller asks 'When is my appointment?', Rex looks up their active record—even if they are calling from a different phone number than the one on file.",
    flow: "Caller asks status ➔ Rex verifies name/address ➔ Reads active appointment",
  },
  {
    icon: HelpCircle,
    step: "ACTION 05",
    title: "Answers Grounded FAQs & Emergency Triage",
    badge: "Zero Hallucinations",
    desc: "Answers exact pricing ranges, service areas, guarantees, and licensing at any point in the call—and warm-transfers emergency calls straight to your cell.",
    flow: "Caller asks pricing/emergency ➔ Rex quotes exact rules ➔ Warm transfers if urgent",
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

        {/* 5 Actions Grid + 6th CRM Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voiceActions.map((action, idx) => (
            <Reveal key={action.title} delay={idx * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-white p-7 shadow-md hover:border-teal/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-teal/10 text-teal border border-teal/20">
                      <action.icon className="size-6" />
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-ink text-white px-3 py-1 rounded-full">
                      {action.step}
                    </span>
                  </div>

                  <span className="inline-block font-mono text-xs font-bold text-teal uppercase tracking-wide mb-2">
                    {action.badge}
                  </span>
                  <h3 className="font-heading font-bold text-ink text-xl mb-3">{action.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-6 font-medium">{action.desc}</p>
                </div>

                <div className="rounded-xl bg-cream p-3.5 border border-border mt-auto">
                  <p className="font-mono text-[11px] text-ink font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-teal shrink-0" />
                    {action.flow}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* 6th Card: Automatic CRM Logging */}
          <Reveal delay={0.4} className="h-full">
            <div className="h-full rounded-3xl border-2 border-teal bg-ink p-7 shadow-xl text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-teal/20 text-teal border border-teal/30">
                    <Database className="size-6 text-teal" />
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-teal text-white px-3 py-1 rounded-full">
                    AUTOMATION
                  </span>
                </div>

                <span className="inline-block font-mono text-xs font-bold text-teal uppercase tracking-wide mb-2">
                  Zero Manual Entry
                </span>
                <h3 className="font-heading font-extrabold text-white text-xl mb-3">
                  Automatic Lead &amp; CRM Pipeline Logging
                </h3>
                <p className="text-sm text-cream/80 leading-relaxed mb-6">
                  Every call—whether booked, rescheduled, cancelled, or a general question—automatically writes a detailed record to your dedicated lead pipeline so you can track revenue at a glance.
                </p>
              </div>

              <div className="rounded-xl bg-teal/20 p-3.5 border border-teal/40 mt-auto">
                <p className="font-mono text-[11px] text-white font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-teal shrink-0" />
                  Call End ➔ Lead Logged ➔ Status Updated ➔ SMS Summary
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3-Column Spanning Full-Width Customization Card */}
        <Reveal delay={0.2}>
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
    </section>
  );
}
