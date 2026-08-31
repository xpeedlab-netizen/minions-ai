"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";

type Scenario = {
  id: "pest" | "realestate";
  label: string;
  badge: string;
  crmTarget: string;
  lines: { from: "caller" | "rex"; text: string; time: string }[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "pest",
    label: "Pest Control (2:14 AM)",
    badge: "2:14 AM Emergency Call",
    crmTarget: "FieldRoutes / PestPac",
    lines: [
      {
        from: "caller",
        text: "Hi, we found a severe wasp infestation right by our front door. Can someone come out first thing in the morning?",
        time: "0:02",
      },
      {
        from: "rex",
        text: "We can have a technician at your home between 8:00 and 10:00 AM tomorrow. Standard diagnostic is $125 and applies directly to treatment. What's your address?",
        time: "0:07",
      },
      {
        from: "caller",
        text: "742 Evergreen Terrace. Let's do 8:00 AM.",
        time: "0:11",
      },
      {
        from: "rex",
        text: "Booked for 8:00 AM tomorrow! I've locked it onto the calendar and sent a confirmation SMS to this number.",
        time: "0:15",
      },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate (Showing Inquiry)",
    badge: "11:30 AM Showing Inquiry",
    crmTarget: "Follow Up Boss / KVCore",
    lines: [
      {
        from: "caller",
        text: "Hi, I'm calling about the 4-bedroom on Oak Ridge Drive. Is it still available for a private tour this Saturday?",
        time: "0:02",
      },
      {
        from: "rex",
        text: "Yes! 412 Oak Ridge is active at $825,000. Sarah has an opening at 11:30 AM this Saturday. Are you already pre-approved?",
        time: "0:07",
      },
      {
        from: "caller",
        text: "Yes, pre-approved with Chase. 11:30 AM works great for us.",
        time: "0:11",
      },
      {
        from: "rex",
        text: "You're scheduled for Saturday at 11:30 AM with Sarah. I've sent the property brief and calendar invite to your phone.",
        time: "0:15",
      },
    ],
  },
];

const BARS = [8, 18, 24, 14, 9, 20, 12, 22, 10, 16];

export default function HeroAudioPreview() {
  const [activeTab, setActiveTab] = useState<"pest" | "realestate">("pest");
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  // Auto step through lines when playing
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStepIndex((prev) => {
          if (prev >= scenario.lines.length) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3200);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, scenario.lines.length]);

  const handleTabChange = (id: "pest" | "realestate") => {
    setActiveTab(id);
    setStepIndex(1);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (stepIndex >= scenario.lines.length) {
        setStepIndex(1);
      }
      setIsPlaying(true);
    }
  };

  const currentSpeaker = scenario.lines[stepIndex - 1]?.from || "rex";

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-ink/15 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:p-5">
      {/* Header bar: Industry Switcher + Latency Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3">
        <div className="flex items-center gap-1.5 rounded-lg bg-cream-dark/80 p-1">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleTabChange(s.id)}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                activeTab === s.id
                  ? "bg-ink text-cream shadow-sm"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-teal">
            <Sparkles className="size-3" />
            Answers on Ring 1
          </span>
        </div>
      </div>

      {/* Interactive Controls & Audio Waveform */}
      <div className="flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause sample call" : "Play sample call"}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? <Pause className="size-4 fill-current" /> : <Play className="ml-0.5 size-4 fill-current" />}
          </button>

          <div>
            <p className="text-xs font-bold text-ink">
              {isPlaying ? "Playing Rex Live Simulation" : "Listen to Rex Answering (15s Sample)"}
            </p>
            <p className="text-[11px] text-ink/70">
              {scenario.badge} · {currentSpeaker === "rex" ? "Rex speaking" : "Customer speaking"}
            </p>
          </div>
        </div>

        {/* Animated Waveform Bars */}
        <div className="hidden items-center gap-0.5 sm:flex">
          {BARS.map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full transition-all duration-300 ${
                isPlaying
                  ? currentSpeaker === "rex"
                    ? "bg-teal"
                    : "bg-coral"
                  : "bg-ink/20"
              }`}
              style={{
                height: isPlaying ? `${Math.max(6, (h * (i % 2 === 0 ? 1.2 : 0.7)))}px` : "6px",
              }}
            />
          ))}
          <Volume2 className="ml-1.5 size-3.5 text-ink/75" />
        </div>
      </div>

      {/* Live Visual Conversation Transcript */}
      <div className="space-y-2 rounded-xl bg-cream p-3 text-xs">
        {scenario.lines.slice(0, stepIndex).map((line, idx) => (
          <div
            key={idx}
            className={`flex ${line.from === "rex" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] rounded-xl p-2.5 ${
                line.from === "rex"
                  ? "border border-teal/20 bg-teal/10 text-ink"
                  : "border border-border bg-white text-ink/90"
              }`}
            >
              <div className="mb-1 flex items-center justify-between gap-2 font-mono text-[10px] text-ink/65">
                <span className="font-bold uppercase tracking-wider text-teal">
                  {line.from === "rex" ? "Rex (AI Receptionist)" : "Inbound Caller"}
                </span>
                <span>{line.time}</span>
              </div>
              <p className="leading-relaxed">{line.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Real-time CRM writeback verification */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-2 text-[11px] text-ink/75">
        <div className="flex items-center gap-1.5 font-medium text-emerald-700">
          <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600" />
          <span>Auto-Logged to {scenario.crmTarget} + Google Calendar</span>
        </div>
        <span className="font-mono text-[10px] uppercase text-ink/65">
          Simulated example call
        </span>
      </div>
    </div>
  );
}
