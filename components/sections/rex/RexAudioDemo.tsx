"use client";

import { useState } from "react";
import { Play, Pause, PhoneCall, CalendarCheck, ShieldCheck, CheckCircle2, Sparkles, Volume2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const sampleCalls = [
  {
    id: "emergency-plumbing",
    title: "2:15 AM Emergency Pipe Leak",
    trade: "Plumbing Contractor",
    duration: "1:12",
    scenario: "Customer calls with an overflowing main pipe in the middle of the night.",
    transcript: [
      { speaker: "Rex", text: "Thank you for calling Apex Plumbing. My name is Rex. Are you calling with an urgent leak or to schedule a standard estimate?" },
      { speaker: "Caller", text: "My main pipe just burst under the kitchen sink! Water is everywhere!" },
      { speaker: "Rex", text: "I understand this is an emergency. First, please locate the shut-off valve under the sink or main supply to stop the water. I can dispatch our emergency technician immediately. May I have your service address?" },
      { speaker: "Caller", text: "Yes, it's 742 Evergreen Terrace. How much is the emergency service call?" },
      { speaker: "Rex", text: "Our emergency dispatch fee is $149, which applies toward your repair total. I have placed your emergency appointment on our live calendar for 3:00 AM tonight and alerted our on-call technician. You will receive an SMS confirmation right now." },
    ],
  },
  {
    id: "after-hours-hvac",
    title: "Weekend AC Breakdown",
    trade: "HVAC Contractor",
    duration: "0:58",
    scenario: "Homeowner calls on Saturday afternoon when air conditioning stops cooling.",
    transcript: [
      { speaker: "Rex", text: "Thanks for calling AirPro Comfort Systems. I'm Rex. How can I help you today?" },
      { speaker: "Caller", text: "Hi, our AC stopped cooling and it's 92 degrees inside. Do you have any openings today?" },
      { speaker: "Rex", text: "We certainly do. I have a weekend diagnostic slot open between 4:00 PM and 6:00 PM today. Our diagnostic fee is $89. Would you like me to reserve that window for you?" },
      { speaker: "Caller", text: "Yes please, that would be fantastic!" },
      { speaker: "Rex", text: "Great! I have reserved 4:00 PM today for your home at 124 Main Street. I'm sending a text confirmation to this number right now." },
    ],
  },
  {
    id: "electrical-estimate",
    title: "EV Charger Installation Estimate",
    trade: "Electrical Contractor",
    duration: "1:05",
    scenario: "Prospective client calling to get a quote and schedule an on-site evaluation.",
    transcript: [
      { speaker: "Rex", text: "Thank you for calling Volt Electrical. This is Rex. Are you looking to schedule a panel upgrade, EV charger install, or general repair?" },
      { speaker: "Caller", text: "I bought a Tesla and need a Level 2 charger installed in my garage." },
      { speaker: "Rex", text: "Congratulations on the new EV! Level 2 charger installations typically range from $650 to $1,200 depending on panel distance. We offer free on-site estimates. I have openings tomorrow at 10:00 AM or 2:00 PM. Which works best?" },
      { speaker: "Caller", text: "10:00 AM tomorrow works great." },
      { speaker: "Rex", text: "Perfect. I've booked your free estimate for tomorrow at 10:00 AM with technician Parvej. You're all set!" },
    ],
  },
];

export default function RexAudioDemo() {
  const [activeCallId, setActiveCallId] = useState(sampleCalls[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeCall = sampleCalls.find((c) => c.id === activeCallId) || sampleCalls[0];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border" id="audio-demo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold mb-4">
            <Volume2 className="size-3.5" /> Interactive Call Simulator
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            Hear How Rex Answers Real Calls for Trade Businesses
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Click through real-world call scenarios below to see how Rex handles emergency dispatches, quotes pricing, and books appointments straight to your calendar.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {sampleCalls.map((call) => (
            <button
              key={call.id}
              onClick={() => {
                setActiveCallId(call.id);
                setIsPlaying(false);
              }}
              className={`px-5 py-3 rounded-2xl font-heading font-bold text-sm transition-all flex items-center gap-2 border ${
                activeCallId === call.id
                  ? "bg-ink text-white border-ink shadow-md"
                  : "bg-white text-ink/70 border-border hover:border-ink/30"
              }`}
            >
              <PhoneCall className={`size-4 ${activeCallId === call.id ? "text-teal" : "text-ink/40"}`} />
              <span>{call.title}</span>
            </button>
          ))}
        </div>

        {/* Main Demo Player Card */}
        <Reveal>
          <div className="rounded-3xl border border-border bg-white p-6 sm:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-border pb-6 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="bg-teal/10 text-teal font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-teal/20">
                    {activeCall.trade}
                  </span>
                  <span className="text-ink/50 text-xs font-mono">Duration: {activeCall.duration}</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-ink mt-2">
                  {activeCall.title}
                </h3>
                <p className="text-sm text-ink/70 mt-1">{activeCall.scenario}</p>
              </div>

              <button
                onClick={togglePlay}
                className="inline-flex items-center gap-3 bg-teal text-white px-6 py-3.5 rounded-2xl font-bold hover:bg-teal/90 transition-all shadow-md shrink-0"
              >
                {isPlaying ? <Pause className="size-5" /> : <Play className="size-5 fill-current" />}
                <span>{isPlaying ? "Pause Simulation" : "Simulate Call Audio"}</span>
              </button>
            </div>

            {/* Simulated Live Audio Visualizer Bar */}
            {isPlaying && (
              <div className="mb-8 rounded-2xl bg-ink p-4 flex items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-3 bg-teal"></span>
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                    Simulating Audio Stream...
                  </span>
                </div>
                <div className="flex items-center gap-1 h-6">
                  <div className="w-1 bg-teal animate-bounce h-4" />
                  <div className="w-1 bg-teal animate-bounce h-6 delay-75" />
                  <div className="w-1 bg-teal animate-bounce h-3 delay-150" />
                  <div className="w-1 bg-teal animate-bounce h-5 delay-100" />
                  <div className="w-1 bg-teal animate-bounce h-2 delay-200" />
                </div>
              </div>
            )}

            {/* Interactive Call Transcript Log */}
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
              {activeCall.transcript.map((line, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col p-4 rounded-2xl border text-sm leading-relaxed ${
                    line.speaker === "Rex"
                      ? "bg-cream/60 border-border text-ink ml-0 mr-6 sm:mr-12"
                      : "bg-teal/5 border-teal/20 text-ink ml-6 sm:ml-12 mr-0"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider ${
                        line.speaker === "Rex" ? "text-teal" : "text-ink/60"
                      }`}
                    >
                      {line.speaker === "Rex" ? "Rex (AI Dispatcher)" : "Customer"}
                    </span>
                  </div>
                  <p className="font-medium text-ink/90">{line.text}</p>
                </div>
              ))}
            </div>

            {/* Call Outcome Footnote */}
            <div className="mt-8 border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-ink/70">
                <CalendarCheck className="size-4 text-teal" />
                <span>Job automatically written to Google Calendar</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink/70">
                <CheckCircle2 className="size-4 text-teal" />
                <span>SMS confirmation sent to customer instantly</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink/70">
                <ShieldCheck className="size-4 text-teal" />
                <span>100% Verified Pricing Rules</span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
