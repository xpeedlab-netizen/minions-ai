"use client";

import { useState } from "react";
import { Play, Pause, PhoneCall, CalendarCheck, ShieldCheck, CheckCircle2, Sparkles, Volume2, Mic, Activity, UserCheck, BellRing, PhoneOff } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const sampleCalls = [
  {
    id: "emergency-plumbing",
    title: "2:15 AM Emergency Pipe Leak",
    trade: "Plumbing Contractor",
    duration: "1:12",
    scenario: "Customer calls with an overflowing main pipe in the middle of the night.",
    transcript: [
      { speaker: "System", text: "📞 Incoming Call — 2:15 AM (After Hours Emergency)", type: "event" },
      { speaker: "Rex", text: "Thank you for calling Apex Plumbing. My name is Rex. Are you calling with an urgent leak or to schedule a standard estimate?" },
      { speaker: "Caller", text: "My main pipe just burst under the kitchen sink! Water is everywhere!" },
      { speaker: "Rex", text: "I understand this is an emergency. First, please locate the shut-off valve under the sink or main supply to stop the water. I can dispatch our emergency technician immediately. May I have your service address?" },
      { speaker: "Caller", text: "Yes, it's 742 Evergreen Terrace. How much is the emergency service call?" },
      { speaker: "Rex", text: "Our emergency dispatch fee is $149, which applies toward your repair total. I have placed your emergency appointment on our live calendar for 3:00 AM tonight and alerted our on-call technician. You will receive an SMS confirmation right now." },
      { speaker: "System", text: "✅ Emergency Dispatched ➔ Added to Google Calendar ➔ On-Call Cell Alerted", type: "status" },
    ],
  },
  {
    id: "after-hours-hvac",
    title: "Weekend AC Breakdown",
    trade: "HVAC Contractor",
    duration: "0:58",
    scenario: "Homeowner calls on Saturday afternoon when air conditioning stops cooling.",
    transcript: [
      { speaker: "System", text: "📞 Incoming Call — Saturday 3:30 PM (Weekend Dispatch)", type: "event" },
      { speaker: "Rex", text: "Thanks for calling AirPro Comfort Systems. I'm Rex. How can I help you today?" },
      { speaker: "Caller", text: "Hi, our AC stopped cooling and it's 92 degrees inside. Do you have any openings today?" },
      { speaker: "Rex", text: "We certainly do. I have a weekend diagnostic slot open between 4:00 PM and 6:00 PM today. Our diagnostic fee is $89. Would you like me to reserve that window for you?" },
      { speaker: "Caller", text: "Yes please, that would be fantastic!" },
      { speaker: "Rex", text: "Great! I have reserved 4:00 PM today for your home at 124 Main Street. I'm sending a text confirmation to this number right now." },
      { speaker: "System", text: "✅ Diagnostic Slot Reserved ➔ Google Calendar Updated ➔ Customer SMS Sent", type: "status" },
    ],
  },
  {
    id: "electrical-estimate",
    title: "EV Charger Installation Estimate",
    trade: "Electrical Contractor",
    duration: "1:05",
    scenario: "Prospective client calling to get a quote and schedule an on-site evaluation.",
    transcript: [
      { speaker: "System", text: "📞 Incoming Call — Tuesday 10:15 AM (New Estimate Inquiry)", type: "event" },
      { speaker: "Rex", text: "Thank you for calling Volt Electrical. This is Rex. Are you looking to schedule a panel upgrade, EV charger install, or general repair?" },
      { speaker: "Caller", text: "I bought a Tesla and need a Level 2 charger installed in my garage." },
      { speaker: "Rex", text: "Congratulations on the new EV! Level 2 charger installations typically range from $650 to $1,200 depending on panel distance. We offer free on-site estimates. I have openings tomorrow at 10:00 AM or 2:00 PM. Which works best?" },
      { speaker: "Caller", text: "10:00 AM tomorrow works great." },
      { speaker: "Rex", text: "Perfect. I've booked your free estimate for tomorrow at 10:00 AM with technician Marcus. You're all set!" },
      { speaker: "System", text: "✅ On-Site Estimate Scheduled ➔ Assigned to Technician ➔ Lead Logged to CRM", type: "status" },
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
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold shadow-sm mb-4">
            <Volume2 className="size-3.5 text-teal" /> Interactive Call Simulator
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink text-balance">
            Hear How Rex Answers Real Calls for Trade Businesses
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Click through real-world call scenarios below to see how Rex handles emergency dispatches, quotes pricing, and books appointments straight to your calendar.
          </p>
        </div>

        {/* Scenario Tab Selector */}
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

        {/* Linear/Apple Dark-Frame Call Simulator */}
        <Reveal>
          <div className="max-w-3xl mx-auto rounded-[32px] border-4 border-ink bg-ink p-5 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Phone Top Notch & Audio Status Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-3 bg-teal"></span>
                </span>
                <div>
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block">
                    Rex 24/7 Voice Dispatcher
                  </span>
                  <span className="font-mono text-[10px] text-teal font-semibold">
                    {activeCall.trade} • {activeCall.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {isPlaying && (
                  <div className="flex items-center gap-1 h-5 px-3 py-1 bg-teal/10 rounded-full border border-teal/30">
                    <Activity className="size-3 text-teal animate-pulse" />
                    <span className="font-mono text-[10px] font-bold text-teal">Streaming Audio</span>
                  </div>
                )}
                <button
                  onClick={togglePlay}
                  className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-xl font-heading font-bold text-xs hover:bg-teal/90 transition-all shadow-md shrink-0"
                >
                  {isPlaying ? <Pause className="size-4" /> : <Play className="size-4 fill-current" />}
                  <span>{isPlaying ? "Pause Simulation" : "Simulate Call Audio"}</span>
                </button>
              </div>
            </div>

            {/* Conversation Flow Log */}
            <div className="space-y-4 min-h-[460px]">
              {activeCall.transcript.map((msg, idx) => {
                if (msg.type === "event") {
                  return (
                    <div key={idx} className="text-center my-3">
                      <span className="inline-block font-mono text-[11px] font-bold text-[#FF8C73] bg-[#C4472A]/30 border border-[#C4472A]/60 px-3.5 py-1 rounded-full shadow-sm">
                        {msg.text}
                      </span>
                    </div>
                  );
                }

                if (msg.type === "status") {
                  return (
                    <div key={idx} className="text-center my-3">
                      <span className="inline-block font-mono text-[11px] font-bold text-[#4FD1C5] bg-teal/25 border border-teal/40 px-3.5 py-1 rounded-full shadow-sm">
                        {msg.text}
                      </span>
                    </div>
                  );
                }

                const isRex = msg.speaker === "Rex";

                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isRex ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                        isRex
                          ? "bg-white text-ink border border-border shadow-sm rounded-tl-sm"
                          : "bg-teal text-white rounded-tr-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${isRex ? "text-teal" : "text-white/90"}`}>
                          {isRex ? "Rex (AI Dispatcher)" : "Caller"}
                        </span>
                      </div>
                      <p className="font-medium">{msg.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Phone Footer Status Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/70 font-mono">
              <span className="flex items-center gap-1.5">
                <CalendarCheck className="size-3.5 text-teal" />
                Google Calendar Written Live
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="size-3.5 text-teal" />
                Auto-Logged to Lead Pipeline
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-teal" />
                100% Custom Rules
              </span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
