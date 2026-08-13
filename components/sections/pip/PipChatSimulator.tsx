"use client";

import { useState } from "react";
import { MessageSquare, ShieldCheck, CheckCircle2, Sparkles, Send, Smartphone, UserCheck, BellRing, Database } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const chatScenarios = [
  {
    id: "pricing-service-qa",
    title: "Pricing & Service Inquiries",
    subtitle: "Instant answers grounded in real business data",
    messages: [
      { sender: "Customer", text: "Hi! What is the estimated cost to replace a 50-gallon water heater in Denver?" },
      { sender: "Pip", text: "Hi there! Our standard 50-gallon tank water heater replacements typically range from $1,650 to $2,200, which includes full installation, haul-away of your old unit, and a 6-year warranty. Do you have a gas or electric unit?", badge: "Grounded Business Doc", time: "12:04 PM" },
      { sender: "Customer", text: "It's a gas unit located in the basement. Do you service the 80204 zip code area?", time: "12:05 PM" },
      { sender: "Pip", text: "Yes! Zip code 80204 is within our core service territory. I can help you schedule a technician visit or set up a free phone estimate with our dispatch team. Which would you prefer?", badge: "Territory Verified", time: "12:05 PM" },
      { sender: "Customer", text: "A free phone estimate would be great!", time: "12:06 PM" },
      { sender: "System", text: "✅ Prospect Qualified & Lead Logged into Dedicated CRM Pipeline", type: "status" },
    ],
  },
  {
    id: "zero-hallucination-guardrail",
    title: "Zero-Hallucination Guardrail",
    subtitle: "Polite enforcement of approved company facts",
    messages: [
      { sender: "Customer", text: "Do you guys install residential solar panels and battery backup systems?" },
      { sender: "Pip", text: "Thank you for asking! We specialize strictly in main electrical panel upgrades, EV charger installations, and whole-home rewiring. We do not perform solar panel installations.", badge: "Zero Hallucinations", time: "2:14 PM" },
      { sender: "Customer", text: "Ah got it. Can you do a 200-Amp panel upgrade for a EV charger?", time: "2:15 PM" },
      { sender: "Pip", text: "Absolutely! Panel upgrades to 200 Amps range from $2,400 to $3,800 depending on utility line distance. May I get your name and phone number so our master electrician can review your panel photos?", badge: "Verified Service Rules", time: "2:15 PM" },
      { sender: "Customer", text: "Sure! My name is Rakib and phone is (555) 349-8291.", time: "2:16 PM" },
      { sender: "System", text: "✅ Qualified Inquiry Captured & Summary Sent to Owner", type: "status" },
    ],
  },
  {
    id: "lead-capture-pipeline",
    title: "Automatic CRM Lead Entry",
    subtitle: "Turn website visitors into tracked CRM leads 24/7",
    messages: [
      { sender: "Customer", text: "Hello, my AC is blowing warm air. Can someone come check it out tomorrow morning?" },
      { sender: "Pip", text: "I'm sorry to hear your AC isn't cooling properly! We offer diagnostic service visits starting at $89. I can collect your details right now to reserve a priority morning slot.", badge: "Lead Assistant", time: "7:45 PM" },
      { sender: "Customer", text: "Great, my address is 452 Oak Street and my cell is (555) 881-2049.", time: "7:46 PM" },
      { sender: "Pip", text: "Thank you! I have logged your diagnostic request for tomorrow morning. Our dispatch manager will call you at 8:00 AM sharp to confirm your exact technician window.", badge: "CRM Synced", time: "7:46 PM" },
      { sender: "System", text: "✅ Lead Record Created ➔ CRM Pipeline Updated ➔ Owner Notified", type: "status" },
    ],
  },
];

export default function PipChatSimulator() {
  const [activeScenarioId, setActiveScenarioId] = useState(chatScenarios[0].id);

  const activeScenario = chatScenarios.find((s) => s.id === activeScenarioId) || chatScenarios[0];

  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border" id="chat-demo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#3A6EA5] font-bold shadow-sm mb-4">
            <Sparkles className="size-3.5" /> Interactive Web Chat Simulator
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            See How Pip Answers Website Visitors With 100% Accuracy
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Click through real-world web chat scenarios below to see how Pip handles pricing questions, enforces zero-hallucination guardrails, and captures leads 24/7.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {chatScenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScenarioId(s.id)}
              className={`px-5 py-3 rounded-2xl font-heading font-bold text-sm transition-all flex items-center gap-2 border ${
                activeScenarioId === s.id
                  ? "bg-ink text-white border-ink shadow-md"
                  : "bg-white text-ink/70 border-border hover:border-ink/30"
              }`}
            >
              <MessageSquare className={`size-4 ${activeScenarioId === s.id ? "text-[#3A6EA5]" : "text-ink/40"}`} />
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Linear/Apple Dark-Frame Web Chat Simulator */}
        <Reveal>
          <div className="max-w-2xl mx-auto rounded-[32px] border-4 border-ink bg-ink p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Widget Top Notch Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Pip 24/7 Grounded Website Assistant
                </span>
              </div>
              <span className="font-mono text-[11px] text-cream/60 bg-white/10 px-3 py-1 rounded-full">
                Zero Hallucinations Engine
              </span>
            </div>

            {/* Conversation Flow Display */}
            <div className="space-y-4 min-h-[520px]">
              {activeScenario.messages.map((msg, idx) => {
                if (msg.type === "status") {
                  return (
                    <div key={idx} className="text-center my-3">
                      <span className="inline-block font-mono text-[11px] font-bold text-[#4FD1C5] bg-teal/25 border border-teal/40 px-3.5 py-1 rounded-full shadow-sm">
                        {msg.text}
                      </span>
                    </div>
                  );
                }

                const isPip = msg.sender === "Pip";

                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isPip ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                        isPip
                          ? "bg-white text-ink border border-border shadow-sm rounded-tl-sm"
                          : "bg-[#3A6EA5] text-white rounded-tr-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${isPip ? "text-[#3A6EA5]" : "text-white/90"}`}>
                          {isPip ? "Pip (Grounded Assistant)" : "Website Visitor"}
                        </span>
                        {msg.badge && (
                          <span className="font-mono text-[9px] bg-teal/15 text-teal px-2 py-0.5 rounded font-bold">
                            {msg.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-medium">{msg.text}</p>
                    </div>
                    {msg.time && <span className="font-mono text-[10px] text-cream/75 mt-1 px-1 font-medium">{msg.time}</span>}
                  </div>
                );
              })}
            </div>

            {/* Widget Footer Status Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/70 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-teal" />
                Grounded in Approved Content
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="size-3.5 text-teal" />
                Auto-Logged to CRM Pipeline
              </span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
