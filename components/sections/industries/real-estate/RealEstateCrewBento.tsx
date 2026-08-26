import { PhoneCall, MessageSquare, Bot, Layers, FileText, CheckCircle2, CalendarCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function RealEstateCrewBento() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Real Estate AI Front-Office Crew</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Autonomous real estate ISA & showing dispatch.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Alex — 24/7 Real Estate Voice ISA (Featured Large Card) */}
          <Reveal className="lg:col-span-2">
            <div className="relative h-full rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-teal/20 hover:border-teal/40 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-teal/20 text-teal-300 border border-teal/40">
                  <PhoneCall className="size-5" />
                </span>
                <span className="font-mono text-xs font-bold text-teal-300 bg-teal/20 border border-teal/40 px-3 py-1 rounded-full uppercase tracking-wide">
                  Alex — Inside Sales
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    24/7 Voice & Calendar Sync
                  </h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    Answers on ring one, qualifies buyers with LPMAMA, and books directly to Google Calendar.
                  </p>
                </div>
                
                {/* Visual UI Mockup */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                    <div className="size-8 rounded-full bg-teal/20 flex items-center justify-center text-teal-300">
                      <CalendarCheck className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">44 Elm St Showing</p>
                      <p className="text-[10px] text-teal-300 font-mono">Friday @ 10:00 AM</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Zip — 5-Second Speed to Lead */}
          <Reveal delay={0.05}>
            <div className="relative h-full rounded-3xl border border-coral/30 bg-coral/5 p-7 text-ink shadow-sm flex flex-col hover:shadow-xl hover:shadow-coral/10 hover:border-coral/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-coral/10 text-coral-text">
                  <MessageSquare className="size-5" />
                </span>
                <h3 className="font-heading font-bold text-lg text-ink">Speed Agent</h3>
              </div>
              
              {/* iMessage Visual Mockup */}
              <div className="mt-auto bg-white border border-border/80 rounded-2xl p-3 shadow-sm relative">
                <div className="absolute -left-2 top-4 w-3 h-3 bg-white border-l border-b border-border/80 rotate-45" />
                <p className="text-xs font-medium text-ink/80 relative z-10 leading-relaxed">
                  Hi! Sorry we missed your call. Would you like to schedule a private tour for 44 Elm St?
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Pip — Listing FAQ AI */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-xl hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  <Bot className="size-5" />
                </span>
                <h3 className="font-heading font-bold text-lg text-ink">Listing FAQ</h3>
              </div>

              {/* Chat Interface Mockup */}
              <div className="mt-auto space-y-3">
                <div className="bg-ink/5 rounded-xl rounded-tr-sm p-2.5 text-[11px] font-medium w-[80%] ml-auto text-right">
                  What are the HOA fees?
                </div>
                <div className="bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded-xl rounded-tl-sm p-2.5 text-[11px] font-medium w-[90%]">
                  HOA is $250/mo. Covers pool & lawn care!
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Gia — 100-Point CRM Scoring */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-xl hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-success/10 text-success border border-success/20">
                  <Layers className="size-5" />
                </span>
                <h3 className="font-heading font-bold text-lg text-ink">CRM Sync</h3>
              </div>

              {/* CRM Tag Mockup */}
              <div className="mt-auto border border-border/80 rounded-xl p-3 bg-cream-dark/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-2 w-16 bg-ink/10 rounded-full" />
                  <span className="bg-coral/10 text-coral-text px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase">
                    Tier 1 Hot
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="text-[10px] font-mono text-ink/50">Lead Score</span>
                  <span className="text-xs font-mono font-bold text-success">90/100</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Otto — Showing Agreements */}
          <Reveal delay={0.2}>
            <div className="relative h-full rounded-3xl border border-ink/20 bg-ink p-7 text-white flex flex-col hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <FileText className="size-5" />
                </span>
                <h3 className="font-heading font-bold text-lg text-white">Document AI</h3>
              </div>

              {/* PDF Mockup */}
              <div className="mt-auto border border-white/20 rounded-xl p-3 bg-white/5 backdrop-blur-sm flex items-center gap-3">
                <div className="size-10 bg-coral/20 rounded-lg flex items-center justify-center text-coral-text shrink-0">
                  <FileText className="size-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white truncate">Showing_Pass.pdf</p>
                  <p className="text-[9px] text-white/50 font-mono mt-0.5">Generated instantly</p>
                </div>
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
