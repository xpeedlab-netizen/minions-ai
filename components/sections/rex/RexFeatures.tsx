import {
  Clock,
  AudioLines,
  CheckCircle2,
  CalendarCheck,
  PhoneForwarded,
  Sparkles,
  MessageSquareText,
  ShieldCheck,
  Database,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { INTEGRATION_COPY } from "@/lib/data/site-content";

const features = [
  {
    icon: Clock,
    title: "Ring-1 24/7 Answering",
    badge: "Zero Missed Calls",
    body: "Rex answers on ring one, day or night. After-hours emergency calls and weekend leads get handled instantly before callers hang up.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: CalendarCheck,
    title: "Direct Calendar Booking",
    badge: "Google Calendar",
    body: INTEGRATION_COPY.calendar,
    colSpan: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    title: "Accurate Pricing Quotes",
    badge: "100% Custom Rules",
    body: "Quotes your exact service fees, diagnostic charges, and hourly rates—trained strictly on your business rules with zero hallucinations.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: PhoneForwarded,
    title: "Warm Emergency Transfers",
    badge: "High-Priority Dispatch",
    body: "Instantly patches high-priority gas leaks, major pipe bursts, or electrical emergencies straight to your mobile cell phone.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Database,
    title: "Automatic Lead Pipeline Sync",
    badge: "Zero Manual Entry",
    body: "Every phone call, booking, and inquiry automatically writes a structured lead record into your dedicated CRM pipeline.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: AudioLines,
    title: "Natural Human Voice",
    badge: "Realistic Pacing",
    body: "Speaks with natural inflections, conducts back-and-forth conversations, and handles caller interruptions gracefully.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: CheckCircle2,
    title: "Service Area Verification",
    badge: "Qualifies Leads",
    body: "Asks prospective callers their zip code and service details to ensure the job is in your territory and worth your technician's time.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Robocall & Spam Filtering",
    badge: "Blocks Telemarketers",
    body: "Filters out annoying telemarketers, spam robocalls, and sales pitches so you only get notified about genuine customer revenue.",
    colSpan: "lg:col-span-2",
  },
];

export default function RexFeatures() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold mb-4">
            Built-In Dispatching Architecture
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            Everything Rex Handles for Your Service Business
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Rex isn&apos;t a basic voicemail bot—he&apos;s a focused digital front-office dispatcher built to capture revenue 24/7/365.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06} className={f.colSpan}>
              <div className="h-full rounded-3xl border border-border bg-cream p-7 shadow-sm hover:border-teal/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white border border-border text-teal shadow-xs">
                      <f.icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-teal/10 text-teal px-2.5 py-1 rounded-md">
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-ink text-xl mb-2">{f.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed font-medium">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
