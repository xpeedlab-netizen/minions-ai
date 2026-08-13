import { MessageSquare, ShieldCheck, CheckCircle2, Database, Sparkles, Sliders, Check, Globe, UserPlus, GraduationCap, Mail, AlertTriangle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const pipCapabilities = [
  {
    icon: MessageSquare,
    title: "24/7 Grounded Website Chat",
    badge: "0 Hallucinations",
    desc: "Pip answers customer questions on your website 24/7—pricing ranges, service areas, guarantees, and licensing—grounded strictly in your verified business content.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Hallucination Guardrails",
    badge: "Strict Brand Safety",
    desc: "If a visitor asks about services or prices not in your approved content, Pip politely explains what you offer rather than making up answers.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: UserPlus,
    title: "Instant Lead Qualification",
    badge: "Collects Job Details",
    desc: "Turns casual website browsers into structured lead records by collecting zip code, job type, and contact info immediately.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: AlertTriangle,
    title: "Human Owner Escalation",
    badge: "Real-Time Alerts",
    desc: "Recognizes high-urgency or complex requests and sends an immediate SMS/email summary straight to the owner.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Database,
    title: "Automatic Lead Pipeline Sync",
    badge: "Zero Manual Entry",
    desc: "Every website chat conversation automatically writes a structured lead record into your dedicated CRM lead pipeline.",
    colSpan: "lg:col-span-2",
    isDark: true,
  },
];

const customChips = [
  "Custom Website Greeting Script & Brand Voice",
  "Exact Service Fees & Diagnostic Pricing Ranges",
  "Territory Zip Codes & Service Area Filtering",
  "Custom Owner Escalation Rules & Urgent SMS Triggers",
  "State Licensing & Warranty Disclaimers",
  "Direct CRM Lead Pipeline Integration",
];

export default function PipBentoGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full bg-[#3A6EA5]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#3A6EA5] font-bold mb-4">
            Grounded Chat Architecture
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            6 Core Grounded Abilities Built Into Pip
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Pip turns your website into a 24/7 revenue-capturing front desk that answers customer questions with 100% factual accuracy.
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
                    className={`font-heading font-bold text-xl mb-2 ${
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
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Never Leave a Midnight Website Visitor Unanswered
                </h3>
                <p className="mt-1 text-sm text-cream/70 leading-relaxed">
                  Pip greets late-night visitors, answers emergency pricing questions, and collects contact details so you wake up to booked job leads.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#3A6EA5] px-4 py-2 font-mono text-xs font-bold text-white shadow-sm">
                24/7 ACTIVE
              </span>
            </div>
          </Reveal>
        </div>

        {/* 3-Column Spanning Full-Width Customization Card */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl border-2 border-[#3A6EA5]/30 bg-white p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
              <Sliders className="size-48 text-[#3A6EA5]" />
            </div>

            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex size-9 items-center justify-center rounded-xl bg-[#3A6EA5] text-white shadow-sm">
                  <Sliders className="size-5" />
                </span>
                <span className="font-mono text-xs font-bold text-[#3A6EA5] uppercase tracking-wider bg-[#3A6EA5]/10 px-3 py-1 rounded-full border border-[#3A6EA5]/20">
                  100% Tailored Setup
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-ink text-balance mb-4">
                We Fully Customize Pip for Your Business Operations
              </h3>

              <p className="text-ink/75 text-base sm:text-lg leading-relaxed mb-8">
                Pip is configured specifically for your business during our 100% done-for-you onboarding: custom website greetings, verified pricing schedules, service area zip codes, and human escalation rules.
              </p>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {customChips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2.5 rounded-xl bg-cream border border-border p-3.5 text-sm font-semibold text-ink/90">
                    <Check className="size-4 text-[#3A6EA5] shrink-0 font-bold" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                <ShieldCheck className="size-5 text-teal shrink-0" />
                <p className="text-xs sm:text-sm text-ink/70 font-medium">
                  We test all grounded chat answers and lead capture triggers with you before going live on your site.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
