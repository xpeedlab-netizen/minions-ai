import { MessageSquare, ShieldCheck, Database, Sliders, Check, UserPlus, AlertTriangle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const pipCapabilities = [
  {
    icon: MessageSquare,
    title: "24/7 Grounded Website Chat",
    badge: "0 Hallucinations",
    desc: "Answers customer questions 24/7—pricing ranges, service areas, and guarantees—grounded strictly in your data.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Hallucination Guardrails",
    badge: "Strict Safety",
    desc: "If a visitor asks about services outside your scope, Pip politely clarifies rather than making up answers.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: UserPlus,
    title: "Instant Lead Qualification",
    badge: "Collects Details",
    desc: "Turns casual browsers into structured leads by collecting zip code, job type, and phone numbers.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: AlertTriangle,
    title: "Human Owner Escalation",
    badge: "Real-Time Alerts",
    desc: "Recognizes urgent repair requests and immediately sends an SMS summary straight to the owner.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Database,
    title: "Automatic Lead Pipeline Sync",
    badge: "Zero Manual Entry",
    desc: "Every website chat automatically logs a structured lead record into your dedicated CRM pipeline.",
    colSpan: "lg:col-span-2",
    isDark: true,
  },
];

const customChips = [
  "Custom Website Greeting & Brand Voice",
  "Verified Service Pricing Ranges",
  "Territory Zip Code Filtering",
  "Urgent Owner SMS Escalation Rules",
];

export default function PipBentoGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block rounded-full bg-[#3A6EA5]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#3A6EA5] font-bold mb-3">
            Grounded Chat Architecture
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink text-balance">
            5 Core Grounded Abilities Built Into Pip
          </h2>
          <p className="mt-3 text-base text-ink/70 max-w-xl mx-auto">
            Pip turns your website into a 24/7 front desk that answers customer questions with 100% factual accuracy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipCapabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.06} className={cap.colSpan}>
              <div
                className={`h-full rounded-3xl p-7 shadow-sm transition-all flex flex-col justify-between ${
                  cap.isDark
                    ? "border-2 border-teal bg-ink text-white shadow-xl"
                    : "border border-border bg-white hover:border-[#3A6EA5]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl border ${
                        cap.isDark
                          ? "bg-teal/20 text-teal border-teal/30"
                          : "bg-[#3A6EA5]/10 text-[#3A6EA5] border border-[#3A6EA5]/20"
                      }`}
                    >
                      <cap.icon className="size-5" />
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        cap.isDark
                          ? "bg-teal text-white"
                          : "bg-[#3A6EA5]/10 text-[#3A6EA5]"
                      }`}
                    >
                      {cap.badge}
                    </span>
                  </div>
                  <h3
                    className={`font-heading font-bold text-lg mb-2 ${
                      cap.isDark ? "text-white font-extrabold" : "text-ink"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      cap.isDark ? "text-cream/80" : "text-ink/70"
                    }`}
                  >
                    {cap.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* 24/7 Active Chat Banner */}
          <Reveal delay={0.3} className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl bg-ink p-7 text-white shadow-xl">
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-wider block mb-1">
                  Website Protection 24/7/365
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Never Leave a Midnight Website Visitor Unanswered
                </h3>
                <p className="mt-1 text-sm text-cream/70 leading-relaxed">
                  Pip greets late-night visitors, answers emergency pricing questions, and collects contact details.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#3A6EA5] px-4 py-2 font-mono text-xs font-bold text-white shadow-sm">
                24/7 ACTIVE
              </span>
            </div>
          </Reveal>
        </div>

        {/* Customization Card */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl border-2 border-[#3A6EA5]/30 bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
              <Sliders className="size-48 text-[#3A6EA5]" />
            </div>

            <div className="max-w-3xl relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#3A6EA5] text-white shadow-sm">
                  <Sliders className="size-4" />
                </span>
                <span className="font-mono text-xs font-bold text-[#3A6EA5] uppercase tracking-wider bg-[#3A6EA5]/10 px-3 py-1 rounded-full border border-[#3A6EA5]/20">
                  100% Tailored Setup
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink text-balance">
                We Fully Customize Pip for Your Business Operations
              </h3>

              <p className="text-ink/70 text-base leading-relaxed">
                Configured specifically for your business during onboarding: verified pricing schedules, service area zip codes, and owner alert rules.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {customChips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2.5 rounded-xl bg-cream border border-border p-3 text-xs font-semibold text-ink/90">
                    <Check className="size-3.5 text-[#3A6EA5] shrink-0 font-bold" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-2">
                <ShieldCheck className="size-4 text-teal shrink-0" />
                <p className="text-xs text-ink/70 font-medium">
                  We test all grounded chat answers with you before going live on your site.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
