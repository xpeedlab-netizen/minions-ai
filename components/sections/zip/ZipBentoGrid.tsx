import { MessageCircleReply, Sparkles, MessagesSquare, RefreshCw, Sliders, ShieldCheck, Check, BellRing } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const zipCapabilities = [
  {
    icon: MessageCircleReply,
    title: "Instant Missed-Call Text-Back",
    badge: "< 5 Seconds",
    desc: "Instantly texts missed callers before they move down Google Search to hire a competitor.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    title: "Omnichannel Lead Speed",
    badge: "Web, Google & Meta",
    desc: "Auto-responds to web forms, Google Local Services leads, and Facebook ad inquiries instantly.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: MessagesSquare,
    title: "2-Way SMS Qualification",
    badge: "Interactive Q&A",
    desc: "Asks qualifying project questions and sends direct calendar booking links via text.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: BellRing,
    title: "Smart No-Reply Escalation",
    badge: "Auto Follow-Up",
    desc: "Sends automated follow-up texts if a prospect stalls so no lead goes cold.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: RefreshCw,
    title: "Automated CRM Sync",
    badge: "Zero Manual Entry",
    desc: "Logs every SMS conversation and booking status straight into your dedicated CRM pipeline.",
    colSpan: "lg:col-span-2",
  },
];

const customChips = [
  "Custom SMS Greeting Script & Tone",
  "Territory Zip Code Filtering",
  "Urgent Lead Warm-Transfer Rules",
  "Direct Calendar & CRM Sync",
];

export default function ZipBentoGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block rounded-full bg-[#C4472A]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#C4472A] font-bold mb-3">
            Speed-to-Lead Architecture
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink text-balance">
            5 Core Speed-to-Lead Abilities Built Into Zip
          </h2>
          <p className="mt-3 text-base text-ink/70 max-w-xl mx-auto">
            Zip ensures no missed call or web lead ever slips through the cracks.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zipCapabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.06} className={cap.colSpan}>
              <div className="h-full rounded-3xl border border-border bg-white p-7 shadow-sm hover:border-[#C4472A]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#C4472A]/10 text-[#C4472A] border border-[#C4472A]/20">
                      <cap.icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#C4472A]/10 text-[#C4472A] px-2.5 py-1 rounded-md">
                      {cap.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-ink text-lg mb-2">{cap.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed font-medium">{cap.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* 24/7 Coverage Banner Card */}
          <Reveal delay={0.3} className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl bg-ink p-7 text-white shadow-xl">
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-wider block mb-1">
                  24/7/365 Protection
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Weekend &amp; After-Hours Automatic Coverage
                </h3>
                <p className="mt-1 text-sm text-cream/70 leading-relaxed">
                  Covers evenings, weekends, and holidays so your dead hours stop leaking revenue.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#C4472A] px-4 py-2 font-mono text-xs font-bold text-white shadow-sm">
                24/7 ACTIVE
              </span>
            </div>
          </Reveal>
        </div>

        {/* Customization Card */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl border-2 border-[#C4472A]/30 bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
              <Sliders className="size-48 text-[#C4472A]" />
            </div>

            <div className="max-w-3xl relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#C4472A] text-white shadow-sm">
                  <Sliders className="size-4" />
                </span>
                <span className="font-mono text-xs font-bold text-[#C4472A] uppercase tracking-wider bg-[#C4472A]/10 px-3 py-1 rounded-full border border-[#C4472A]/20">
                  100% Tailored Setup
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink text-balance">
                We Fully Customize Zip for Your Business Operations
              </h3>

              <p className="text-ink/70 text-base leading-relaxed">
                Configured specifically for your business during onboarding: custom SMS greetings, follow-up windows, and CRM pipeline stages.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {customChips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2.5 rounded-xl bg-cream border border-border p-3 text-xs font-semibold text-ink/90">
                    <Check className="size-3.5 text-[#C4472A] shrink-0 font-bold" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-2">
                <ShieldCheck className="size-4 text-teal shrink-0" />
                <p className="text-xs text-ink/70 font-medium">
                  We test all SMS triggers and lead workflows with you before going live.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
