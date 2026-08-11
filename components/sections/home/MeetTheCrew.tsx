import Link from "next/link";
import { ArrowRight, Clock, CalendarCheck, PhoneForwarded, ShieldCheck, CheckCircle2, FileText, Activity } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RexHeroVisual from "./RexHeroVisual";
import ZipHeroVisual from "./ZipHeroVisual";
import PipHeroVisual from "./PipHeroVisual";
import GiaHeroVisual from "./GiaHeroVisual";
import OttoHeroVisual from "./OttoHeroVisual";

export default function MeetTheCrew() {
  return (
    <section id="crew" className="bg-cream py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Intro */}
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            Meet your new digital &ldquo;Front Office&rdquo; crew.
          </h2>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed">
            Each AI persona is specialized to handle a specific part of your customer&apos;s journey. Most shops start with Rex — you can add the rest of the crew whenever you need them.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* REX */}
          <Reveal>
            <div className="rounded-3xl bg-ink overflow-hidden border border-border shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Rex</span>
                    <span className="text-white/60 text-sm font-medium">AI Voice Agent</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4 text-balance">
                    Never miss a $5,000 call while you&apos;re up a ladder.
                  </h3>
                  <p className="text-cream/70 text-lg mb-8 leading-relaxed">
                    Rex answers on the first ring, 24/7. He sounds natural, asks the right questions, and books the job straight into your calendar while you focus on the work.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm border border-white/5 font-medium"><Clock className="w-4 h-4 text-teal" /> 24/7 Answering</span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm border border-white/5 font-medium"><CalendarCheck className="w-4 h-4 text-teal" /> Calendar Booking</span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm border border-white/5 font-medium"><PhoneForwarded className="w-4 h-4 text-teal" /> Warm Transfers</span>
                  </div>
                  <div>
                    <Link href="/ai-voice-agent" className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-bold hover:bg-teal/90 transition-colors">
                      See Rex in action <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <RexHeroVisual />
              </div>
            </div>
          </Reveal>

          {/* ZIP */}
          <Reveal>
            <div className="rounded-3xl bg-white overflow-hidden border border-border shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:order-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#C4472A]/10 text-[#C4472A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Zip</span>
                    <span className="text-ink/60 text-sm font-medium">Speed-to-Lead</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    The lead goes cold in 5 minutes. Be the first to respond.
                  </h3>
                  <p className="text-ink/70 text-lg mb-8 leading-relaxed">
                    Zip texts back every missed call and web lead in seconds. You&apos;re the first one they hear from, and first usually wins.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="bg-cream rounded-xl p-4 border border-border text-center">
                        <div className="font-mono text-3xl text-[#C4472A] font-bold">100×</div>
                        <div className="text-xs text-ink/60 uppercase mt-1 font-bold tracking-wide">Better Reach</div>
                     </div>
                     <div className="bg-cream rounded-xl p-4 border border-border text-center">
                        <div className="font-mono text-3xl text-ink font-bold">42h</div>
                        <div className="text-xs text-ink/60 uppercase mt-1 font-bold tracking-wide">Industry Avg</div>
                     </div>
                  </div>
                  <div>
                    <Link href="/speed-to-lead" className="inline-flex items-center gap-2 bg-[#C4472A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#C4472A]/90 transition-colors">
                      Deploy Zip <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="lg:order-1">
                  <ZipHeroVisual />
                </div>
              </div>
            </div>
          </Reveal>

          {/* PIP */}
          <Reveal>
            <div className="rounded-3xl bg-white overflow-hidden border border-border shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#3A6EA5]/10 text-[#3A6EA5] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Pip</span>
                    <span className="text-ink/60 text-sm font-medium">Support AI</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    Stop answering the same five questions all day.
                  </h3>
                  <p className="text-ink/70 text-lg mb-8 leading-relaxed">
                    Pip answers routine questions by chat and email around the clock, using only your approved information. No guessing, no hallucinations.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="inline-flex items-center gap-1.5 bg-cream text-ink px-3 py-1.5 rounded-lg text-sm border border-border font-medium"><ShieldCheck className="w-4 h-4 text-[#3A6EA5]" /> No-Guess Policy</span>
                    <span className="inline-flex items-center gap-1.5 bg-cream text-ink px-3 py-1.5 rounded-lg text-sm border border-border font-medium"><CheckCircle2 className="w-4 h-4 text-[#3A6EA5]" /> 24/7 Chat Widget</span>
                  </div>
                  <div>
                    <Link href="/customer-support-ai" className="inline-flex items-center gap-2 bg-[#3A6EA5] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#3A6EA5]/90 transition-colors">
                      Meet Pip <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <PipHeroVisual />
              </div>
            </div>
          </Reveal>

          {/* GIA */}
          <Reveal>
            <div className="rounded-3xl bg-[#E8E1DA] overflow-hidden shadow-lg border border-border">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:order-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#1B8A5A]/10 text-[#1B8A5A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white">Gia</span>
                    <span className="text-ink/60 text-sm font-medium">CRM Automation</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    Nothing falls through the cracks.
                  </h3>
                  <p className="text-ink/70 text-lg mb-8 leading-relaxed">
                    Gia keeps your pipeline tidy. Automatic follow-ups, appointment reminders, and review requests run on autopilot without you lifting a finger.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-ink/80 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#1B8A5A]" /> Done-for-you setup
                    </li>
                    <li className="flex items-center gap-3 text-ink/80 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#1B8A5A]" /> Automated follow-ups
                    </li>
                    <li className="flex items-center gap-3 text-ink/80 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#1B8A5A]" /> Google Calendar syncing
                    </li>
                  </ul>
                  <div>
                    <Link href="/crm-automation" className="inline-flex items-center gap-2 bg-[#1B8A5A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1B8A5A]/90 transition-colors">
                      Explore Gia <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="lg:order-1">
                  <GiaHeroVisual />
                </div>
              </div>
            </div>
          </Reveal>

          {/* OTTO */}
          <Reveal>
            <div className="rounded-3xl bg-white overflow-hidden shadow-lg border border-border">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#2C3E50]/10 text-[#2C3E50] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Otto</span>
                    <span className="text-ink/60 text-sm font-medium">Back-Office Automation</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    The paperwork is just&hellip; done.
                  </h3>
                  <p className="text-ink/70 text-lg mb-8 leading-relaxed">
                    Stop paying skilled people to do paperwork. Otto handles client intake flows, pulls key data from forms, and keeps status tracked, quietly in the background.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="inline-flex items-center gap-1.5 text-ink/80 text-sm bg-cream px-3 py-1.5 rounded-lg border border-border font-medium"><FileText className="w-4 h-4 text-ink/50" /> Client intake flows</span>
                    <span className="inline-flex items-center gap-1.5 text-ink/80 text-sm bg-cream px-3 py-1.5 rounded-lg border border-border font-medium"><FileText className="w-4 h-4 text-ink/50" /> Pulls key data</span>
                    <span className="inline-flex items-center gap-1.5 text-ink/80 text-sm bg-cream px-3 py-1.5 rounded-lg border border-border font-medium"><Activity className="w-4 h-4 text-ink/50" /> Status tracking</span>
                  </div>
                  <div>
                    <Link href="/back-office-automation" className="inline-flex items-center gap-2 bg-[#2C3E50] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#2C3E50]/90 transition-colors">
                      Learn about Otto <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <OttoHeroVisual />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
