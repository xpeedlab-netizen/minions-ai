"use client";

import { useState } from "react";
import { PhoneOff, MessageSquare, Clock, CheckCircle2, Sparkles, Send, Smartphone, UserCheck, BellRing } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const scenarios = [
  {
    id: "missed-call-textback",
    title: "Missed Call Auto-Text",
    subtitle: "When hands are full on a job",
    triggerTime: "10:42 AM",
    caller: "Homeowner (Leaky Roof)",
    messages: [
      { sender: "System", text: "📞 Incoming Call Missed — Hands Full on Job Site", type: "event" },
      { sender: "Zip", text: "Hi! This is Zip from Apex Roofing. Saw we just missed your call! How can we help you today?", time: "10:42 AM (+4s)", badge: "< 5s Text-Back" },
      { sender: "Customer", text: "Hi Zip! We have a leak in our living room ceiling from the storm. Can someone come take a look?", time: "10:43 AM" },
      { sender: "Zip", text: "We certainly can! I have an emergency inspection slot open today at 2:00 PM. Would that work for you?", time: "10:43 AM" },
      { sender: "Customer", text: "Yes 2:00 PM works great! Thank you so much for texting back so fast!", time: "10:44 AM" },
      { sender: "System", text: "✅ Appointment Booked & Lead Created in Dedicated CRM Pipeline", type: "status" },
    ],
  },
  {
    id: "web-lead-speed",
    title: "Web Form Lead Instant Text",
    subtitle: "When a customer submits a web quote",
    triggerTime: "3:15 PM",
    caller: "Web Visitor (AC Replacement)",
    messages: [
      { sender: "System", text: "🌐 New Web Form Lead Submitted — Requesting Quote", type: "event" },
      { sender: "Zip", text: "Hi John! Thanks for requesting an AC replacement quote on our site. I'm Zip. Are you looking for a free in-home estimate this week?", time: "3:15 PM (+3s)", badge: "< 4s Response" },
      { sender: "Customer", text: "Yes! Our unit is 15 years old and stopped blowing cold air.", time: "3:16 PM" },
      { sender: "Zip", text: "Got it! I can get technician Parvej out tomorrow morning between 9 AM and 11 AM. Shall I confirm that slot?", time: "3:16 PM" },
      { sender: "Customer", text: "Sounds perfect. Please lock that in.", time: "3:17 PM" },
      { sender: "System", text: "✅ Prospect Qualified & Free Estimate Calendar Slot Reserved", type: "status" },
    ],
  },
  {
    id: "no-reply-escalation",
    title: "No-Reply Auto Escalation",
    subtitle: "Automatic follow-up when prospect stalls",
    triggerTime: "6:00 PM",
    caller: "Missed Evening Lead",
    messages: [
      { sender: "System", text: "📞 Unanswered Missed Call — Initial Text Sent", type: "event" },
      { sender: "Zip", text: "Hi there! Saw we missed your call. We'd love to help with your plumbing service. Let us know what you need!", time: "6:00 PM (+5s)", badge: "< 5s Text-Back" },
      { sender: "System", text: "⏳ 15 Minutes Elapsed — No Reply Detected", type: "event" },
      { sender: "Zip", text: "Just following up! If this is an urgent emergency leak, reply YES and I can patch you directly to our on-call technician.", time: "6:15 PM (+15m Follow-Up)", badge: "Auto Follow-Up" },
      { sender: "Customer", text: "YES it is an emergency pipe leak!", time: "6:16 PM" },
      { sender: "System", text: "🚨 High-Priority Lead Flagged & On-Call Cell Notified", type: "status" },
    ],
  },
];

export default function ZipSmsSimulator() {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border" id="sms-demo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#C4472A] font-bold shadow-sm mb-4">
            <Sparkles className="size-3.5" /> Interactive Speed-to-Lead Simulator
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink text-balance">
            See Zip Turn Missed Calls Into Booked Jobs in Under 5 Seconds
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Click through real-world SMS text-back scenarios below to see how Zip intercepts missed calls and web leads before your competitors even check their phones.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScenarioId(s.id)}
              className={`px-5 py-3 rounded-2xl font-heading font-bold text-sm transition-all flex items-center gap-2 border ${
                activeScenarioId === s.id
                  ? "bg-ink text-white border-ink shadow-md"
                  : "bg-white text-ink/70 border-border hover:border-ink/30"
              }`}
            >
              <Smartphone className={`size-4 ${activeScenarioId === s.id ? "text-[#C4472A]" : "text-ink/40"}`} />
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Linear/Apple-Style Phone Screen Simulation */}
        <Reveal>
          <div className="max-w-2xl mx-auto rounded-[32px] border-4 border-ink bg-ink p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Phone Top Notch Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-[#C4472A] animate-pulse" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Zip Automated SMS Engine
                </span>
              </div>
              <span className="font-mono text-[11px] text-cream/60 bg-white/10 px-3 py-1 rounded-full">
                Response Latency: &lt; 5s
              </span>
            </div>

            {/* Conversation Flow Display */}
            <div className="space-y-4 min-h-[540px]">
              {activeScenario.messages.map((msg, idx) => {
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

                const isZip = msg.sender === "Zip";

                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isZip ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                        isZip
                          ? "bg-white text-ink border border-border shadow-sm rounded-tl-sm"
                          : "bg-[#C4472A] text-white rounded-tr-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${isZip ? "text-[#C4472A]" : "text-white/90"}`}>
                          {isZip ? "Zip (Speed-to-Lead)" : "Customer"}
                        </span>
                        {msg.badge && (
                          <span className="font-mono text-[9px] bg-teal/15 text-teal px-2 py-0.5 rounded font-bold">
                            {msg.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-medium">{msg.text}</p>
                    </div>
                    <span className="font-mono text-[10px] text-cream/75 mt-1 px-1 font-medium">{msg.time}</span>
                  </div>
                );
              })}
            </div>

            {/* Phone Footer Status Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/70 font-mono">
              <span className="flex items-center gap-1.5">
                <UserCheck className="size-3.5 text-teal" />
                Auto-Logged to CRM Pipeline
              </span>
              <span className="flex items-center gap-1.5">
                <BellRing className="size-3.5 text-[#C4472A]" />
                Owner Notified via SMS
              </span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
