import Link from "next/link";
import { ArrowRight, Clock, CalendarCheck, PhoneForwarded, Zap, ShieldCheck, CheckCircle2, FileText, Activity } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
                <div className="bg-[#0b484e] p-8 sm:p-12 flex items-center justify-center relative min-h-[320px]">
                    {/* Visual: Calendar / Call interaction */}
                    <div className="bg-white rounded-2xl p-5 shadow-2xl w-full max-w-sm">
                      <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                        <span className="font-bold text-ink">Incoming Call</span>
                        <span className="text-teal text-sm font-bold flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                          </span>
                          Live
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-ink/10 flex-shrink-0" />
                          <div className="bg-cream p-3 rounded-2xl rounded-tl-sm text-sm text-ink/80">
                            &ldquo;Hi, I have a leak in my roof and it&apos;s getting worse.&rdquo;
                          </div>
                        </div>
                        <div className="flex gap-3 flex-row-reverse">
                          <div className="w-8 h-8 rounded-full bg-teal flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">R</div>
                          <div className="bg-teal/10 p-3 rounded-2xl rounded-tr-sm text-sm text-ink/80">
                            &ldquo;I can help with that. Is water actively coming into the house right now?&rdquo;
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center text-[10px] text-ink/40 uppercase tracking-widest font-mono font-medium">Example — Not Live Data</div>
                    </div>
                </div>
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
                <div className="bg-cream p-8 sm:p-12 lg:order-1 flex items-center justify-center relative min-h-[320px] border-r border-border">
                   {/* Urgent visual */}
                   <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl w-full max-w-sm border border-border relative">
                      <div className="absolute -top-4 -right-2 sm:-right-4 bg-ink text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Zap className="w-3.5 h-3.5 text-vest-orange" /> Missed Call
                      </div>
                      <div className="space-y-4 pt-2">
                        <div className="flex gap-3 flex-row-reverse">
                          <div className="bg-[#C4472A] p-3 rounded-2xl rounded-tr-sm text-sm text-white shadow-sm">
                            &ldquo;Hi, sorry we missed your call! This is Zip from the team. How can we help you today?&rdquo;
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="bg-cream p-3 rounded-2xl rounded-tl-sm text-sm text-ink/80 border border-border">
                            &ldquo;I need a quote for a new AC unit. Are you available?&rdquo;
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center text-[10px] text-ink/40 uppercase tracking-widest font-mono font-medium">Example — Not Live Data</div>
                   </div>
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
                <div className="bg-[#f0f4f8] p-8 sm:p-12 flex items-center justify-center relative min-h-[320px] border-l border-border">
                   <div className="bg-white rounded-2xl p-5 shadow-xl w-full max-w-sm border border-border">
                      <div className="flex items-center gap-3 border-b border-border pb-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#3A6EA5]/10 flex items-center justify-center text-[#3A6EA5] font-bold">P</div>
                        <div>
                          <div className="font-bold text-ink text-sm">Pip Support</div>
                          <div className="text-xs text-ink/50 font-medium">Typically replies instantly</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="bg-cream p-3 rounded-2xl rounded-tl-sm text-sm text-ink/80 border border-border">
                            &ldquo;Do you do free estimates for water heaters?&rdquo;
                          </div>
                        </div>
                        <div className="flex gap-3 flex-row-reverse">
                          <div className="bg-[#3A6EA5]/10 p-3 rounded-2xl rounded-tr-sm text-sm text-ink/90 border border-[#3A6EA5]/20">
                            &ldquo;Yes! We offer free in-home estimates for all water heater replacements. Would you like me to find an available time for you?&rdquo;
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center text-[10px] text-ink/40 uppercase tracking-widest font-mono font-medium">Example — Not Live Data</div>
                   </div>
                </div>
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
                <div className="bg-white/50 p-8 sm:p-12 lg:order-1 flex items-center justify-center border-r border-[#1B8A5A]/10 relative min-h-[320px]">
                    <div className="w-full max-w-sm space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-border flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="w-1.5 h-10 rounded-full bg-vest-orange"></div>
                           <div>
                             <div className="text-sm font-bold text-ink">New Lead Received</div>
                             <div className="text-xs text-ink/50 font-medium mt-0.5">Pipeline Stage</div>
                           </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-[#1B8A5A]" />
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-border flex items-center justify-between ml-4 sm:ml-8">
                        <div className="flex items-center gap-3">
                           <div className="w-1.5 h-10 rounded-full bg-[#3A6EA5]"></div>
                           <div>
                             <div className="text-sm font-bold text-ink">Quote Sent</div>
                             <div className="text-xs text-ink/50 font-medium mt-0.5">Automated Follow-up Queued</div>
                           </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-[#1B8A5A]" />
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-border flex items-center justify-between ml-8 sm:ml-16">
                        <div className="flex items-center gap-3">
                           <div className="w-1.5 h-10 rounded-full bg-[#1B8A5A]"></div>
                           <div>
                             <div className="text-sm font-bold text-ink">Job Won</div>
                             <div className="text-xs text-ink/50 font-medium mt-0.5">Review Request Sent</div>
                           </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-[#1B8A5A]" />
                      </div>
                    </div>
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
                <div className="bg-[#2C3E50] p-8 sm:p-12 flex items-center justify-center min-h-[320px]">
                   <div className="w-full max-w-sm">
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-inner">
                        <div className="animate-pulse space-y-5">
                          <div className="h-3 bg-white/20 rounded w-3/4"></div>
                          <div className="h-3 bg-white/20 rounded w-1/2"></div>
                          <div className="h-3 bg-white/20 rounded w-5/6"></div>
                          
                          <div className="pt-4 border-t border-white/10 mt-4 flex items-center gap-4">
                             <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-4 h-4 text-white/50" />
                             </div>
                             <div className="space-y-2 w-full">
                               <div className="h-2 bg-white/20 rounded w-1/3"></div>
                               <div className="h-2 bg-white/10 rounded w-1/2"></div>
                             </div>
                          </div>
                        </div>
                        <div className="mt-8 text-center text-[10px] text-white/40 uppercase tracking-widest font-mono font-medium">Processing Document...</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
