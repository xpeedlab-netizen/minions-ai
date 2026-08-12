import Link from "next/link";
import { ArrowRight, Clock, CalendarCheck, PhoneForwarded, ShieldCheck, CheckCircle2, FileText, Activity, MessageSquare, Sparkles } from "lucide-react";
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
        
        {/* Intro Header */}
        <div className="max-w-3xl text-center mx-auto">
          <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold mb-4">
            Your Digital Front-Office Staff
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            Meet the 5 Specialized Crew Members Who Protect Your Revenue
          </h2>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed">
            Each AI persona is built to take over a specific bottleneck in your service business—so you can stay focused on billable trade work while your front office runs on autopilot 24/7.
          </p>
        </div>

        <div className="space-y-16">
          {/* REX: 24/7 AI VOICE DISPATCHER */}
          <Reveal>
            <div className="rounded-3xl bg-ink overflow-hidden border border-border shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-teal/20 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Rex</span>
                    <span className="text-white/60 text-sm font-medium">24/7 AI Voice Dispatcher</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4 text-balance">
                    Never miss a $5,000 call while your hands are full on the job.
                  </h3>
                  <p className="text-cream/80 text-lg mb-6 leading-relaxed">
                    When you&apos;re up a ladder or sleeping at 2 AM, Rex answers on ring one. He speaks with natural voice pacing, quotes your exact service pricing, and schedules jobs straight into your Google Calendar.
                  </p>
                  
                  {/* Abilities Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/10 text-white p-3 rounded-xl border border-white/5 text-xs font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal shrink-0" /> Ring-1 24/7 Pickup
                    </div>
                    <div className="bg-white/10 text-white p-3 rounded-xl border border-white/5 text-xs font-medium flex items-center gap-2">
                      <CalendarCheck className="w-4 h-4 text-teal shrink-0" /> Direct Calendar Sync
                    </div>
                    <div className="bg-white/10 text-white p-3 rounded-xl border border-white/5 text-xs font-medium flex items-center gap-2">
                      <PhoneForwarded className="w-4 h-4 text-teal shrink-0" /> Warm Emergency Transfers
                    </div>
                    <div className="bg-white/10 text-white p-3 rounded-xl border border-white/5 text-xs font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-teal shrink-0" /> Custom Pricing Quotes
                    </div>
                  </div>

                  {/* Jobs & Clients Saved Box */}
                  <div className="bg-teal/20 border border-teal/40 rounded-xl p-4 mb-8">
                    <p className="text-xs font-mono font-bold uppercase tracking-wide text-teal mb-1">How Rex Saves Your Revenue:</p>
                    <p className="text-xs sm:text-sm text-cream/90 font-medium">
                      Captures high-margin emergency calls and weekend jobs on the first ring—before callers hang up to contact your biggest competitor.
                    </p>
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

          {/* ZIP: 5-SECOND SPEED-TO-LEAD */}
          <Reveal>
            <div className="rounded-3xl bg-white overflow-hidden border border-border shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:order-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#C4472A]/10 text-[#C4472A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Zip</span>
                    <span className="text-ink/60 text-sm font-medium">5-Second Speed-to-Lead</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    Leads go cold in 5 minutes. Zip texts them in under 5 seconds.
                  </h3>
                  <p className="text-ink/70 text-lg mb-6 leading-relaxed">
                    Whenever you miss a call or receive a web form lead, Zip sends an automated SMS text-back instantly. You&apos;re the first contractor they hear from—and first usually wins 80%+ of booked jobs.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-cream rounded-xl p-4 border border-border text-center">
                      <div className="font-mono text-3xl text-[#C4472A] font-bold">100×</div>
                      <div className="text-xs text-ink/60 uppercase mt-1 font-bold tracking-wide">Better Lead Reach</div>
                    </div>
                    <div className="bg-cream rounded-xl p-4 border border-border text-center">
                      <div className="font-mono text-3xl text-ink font-bold">&lt; 5 sec</div>
                      <div className="text-xs text-ink/60 uppercase mt-1 font-bold tracking-wide">Response Speed</div>
                    </div>
                  </div>

                  {/* Jobs & Clients Saved Box */}
                  <div className="bg-[#C4472A]/10 border border-[#C4472A]/30 rounded-xl p-4 mb-8">
                    <p className="text-xs font-mono font-bold uppercase tracking-wide text-[#C4472A] mb-1">How Zip Saves Your Revenue:</p>
                    <p className="text-xs sm:text-sm text-ink/80 font-medium">
                      Converts cold web leads and missed calls into active SMS conversations while competitors are still taking hours to check their email inbox.
                    </p>
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

          {/* PIP: 24/7 CUSTOMER SUPPORT AI */}
          <Reveal>
            <div className="rounded-3xl bg-white overflow-hidden border border-border shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#3A6EA5]/10 text-[#3A6EA5] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Pip</span>
                    <span className="text-ink/60 text-sm font-medium">24/7 Customer Support AI</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    Stop answering the same 5 routine questions all day long.
                  </h3>
                  <p className="text-ink/70 text-lg mb-6 leading-relaxed">
                    Pip answers customer inquiries via web chat and email around the clock. Trained strictly on your verified business knowledge—no guessing, no hallucinations, no wrong information.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 bg-cream text-ink px-3 py-1.5 rounded-lg text-sm border border-border font-medium"><ShieldCheck className="w-4 h-4 text-[#3A6EA5]" /> Zero-Hallucination Policy</span>
                    <span className="inline-flex items-center gap-1.5 bg-cream text-ink px-3 py-1.5 rounded-lg text-sm border border-border font-medium"><CheckCircle2 className="w-4 h-4 text-[#3A6EA5]" /> 24/7 Live Chat & Email</span>
                    <span className="inline-flex items-center gap-1.5 bg-cream text-ink px-3 py-1.5 rounded-lg text-sm border border-border font-medium"><MessageSquare className="w-4 h-4 text-[#3A6EA5]" /> Service Area Verification</span>
                  </div>

                  {/* Jobs & Clients Saved Box */}
                  <div className="bg-[#3A6EA5]/10 border border-[#3A6EA5]/30 rounded-xl p-4 mb-8">
                    <p className="text-xs font-mono font-bold uppercase tracking-wide text-[#3A6EA5] mb-1">How Pip Saves Your Revenue:</p>
                    <p className="text-xs sm:text-sm text-ink/80 font-medium">
                      Frees up 10+ hours of billable labor per week by instantly answering service area, licensing, and pricing questions for interested prospects.
                    </p>
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

          {/* GIA: AUTOMATED CRM & FOLLOW-UPS */}
          <Reveal>
            <div className="rounded-3xl bg-[#E8E1DA] overflow-hidden shadow-xl border border-border">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:order-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#1B8A5A]/10 text-[#1B8A5A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white">Gia</span>
                    <span className="text-ink/60 text-sm font-medium">Automated CRM & Follow-ups</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    Never let an unclosed quote or missed review fall through the cracks.
                  </h3>
                  <p className="text-ink/70 text-lg mb-6 leading-relaxed">
                    Gia runs your customer follow-up engine on autopilot. From automated quote reminders to appointment alerts and 5-star Google review requests, Gia keeps your business growing.
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-3 text-ink/80 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#1B8A5A]" /> Automated SMS & Email Quote Follow-ups
                    </li>
                    <li className="flex items-center gap-3 text-ink/80 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#1B8A5A]" /> Appointment Confirmation Reminders (Near 0% No-Shows)
                    </li>
                    <li className="flex items-center gap-3 text-ink/80 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#1B8A5A]" /> Post-Job 5-Star Google Review Collection
                    </li>
                  </ul>

                  {/* Jobs & Clients Saved Box */}
                  <div className="bg-white/80 border border-[#1B8A5A]/30 rounded-xl p-4 mb-8 shadow-sm">
                    <p className="text-xs font-mono font-bold uppercase tracking-wide text-[#1B8A5A] mb-1">How Gia Saves Your Revenue:</p>
                    <p className="text-xs sm:text-sm text-ink/80 font-medium">
                      Resurrects thousands in dormant estimates by following up with undecided prospects automatically without you lifting a finger.
                    </p>
                  </div>

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

          {/* OTTO: BACK-OFFICE WORKFLOW AI */}
          <Reveal>
            <div className="rounded-3xl bg-white overflow-hidden shadow-xl border border-border">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#2C3E50]/10 text-[#2C3E50] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Otto</span>
                    <span className="text-ink/60 text-sm font-medium">Back-Office Workflow AI</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mb-4 text-balance">
                    Eliminate evening kitchen-table paperwork forever.
                  </h3>
                  <p className="text-ink/70 text-lg mb-6 leading-relaxed">
                    Stop spending your evenings typing up customer intake forms and parsing job documents. Otto handles client intake flows and data routing quietly in the background.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-ink/80 text-sm bg-cream px-3 py-1.5 rounded-lg border border-border font-medium"><FileText className="w-4 h-4 text-ink/50" /> Automated Client Intake</span>
                    <span className="inline-flex items-center gap-1.5 text-ink/80 text-sm bg-cream px-3 py-1.5 rounded-lg border border-border font-medium"><FileText className="w-4 h-4 text-ink/50" /> Document Data Extraction</span>
                    <span className="inline-flex items-center gap-1.5 text-ink/80 text-sm bg-cream px-3 py-1.5 rounded-lg border border-border font-medium"><Activity className="w-4 h-4 text-ink/50" /> Workflow Status Tracking</span>
                  </div>

                  {/* Jobs & Clients Saved Box */}
                  <div className="bg-[#2C3E50]/10 border border-[#2C3E50]/30 rounded-xl p-4 mb-8">
                    <p className="text-xs font-mono font-bold uppercase tracking-wide text-[#2C3E50] mb-1">How Otto Saves Your Revenue:</p>
                    <p className="text-xs sm:text-sm text-ink/80 font-medium">
                      Eliminates 15+ hours of weekly back-office data entry—allowing you to go home to your family on time every night.
                    </p>
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
