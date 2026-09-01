"use client";

import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Phone,
  PhoneCall,
  Volume2,
  Sparkles,
  CheckCircle2,
  Calendar,
  Database,
  Radio,
} from "lucide-react";

type Scenario = {
  id: "pest" | "realestate";
  label: string;
  callerNumber: string;
  callerLocation: string;
  crmTarget: string;
  actionTaken: string;
  lines: {
    from: "caller" | "rex";
    text: string;
    time: string;
    timestampSec: number;
    actionNote?: string;
  }[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "pest",
    label: "Pest Control (2:14 AM)",
    callerNumber: "+1 (832) 555-0194",
    callerLocation: "Houston, TX",
    crmTarget: "FieldRoutes / PestPac",
    actionTaken: "Emergency Slot Reserved (8:00 AM Tomorrow)",
    lines: [
      {
        from: "caller",
        text: "“Hi, we found a severe wasp infestation right by our front door. Can someone come out first thing in the morning?”",
        time: "0:03",
        timestampSec: 3,
      },
      {
        from: "rex",
        text: "“We can have a technician at your home between 8:00 and 10:00 AM tomorrow. Standard diagnostic is $125 and applies directly to treatment. What's your address?”",
        time: "0:08",
        timestampSec: 8,
        actionNote: "Checking tech routes & diagnostic rate",
      },
      {
        from: "caller",
        text: "“742 Evergreen Terrace. Let's do 8:00 AM.”",
        time: "0:11",
        timestampSec: 11,
      },
      {
        from: "rex",
        text: "“Booked for 8:00 AM tomorrow! I've locked it onto the calendar and sent a confirmation SMS to your number.”",
        time: "0:15",
        timestampSec: 15,
        actionNote: "Appointment booked in FieldRoutes & SMS sent",
      },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate (Showing Inquiry)",
    callerNumber: "+1 (512) 555-8831",
    callerLocation: "Austin, TX",
    crmTarget: "Follow Up Boss / KVCore",
    actionTaken: "Showing Tour Booked (Sat 11:30 AM with Sarah)",
    lines: [
      {
        from: "caller",
        text: "“Hi, I'm calling about the 4-bedroom on Oak Ridge Drive. Is it still available for a private tour this Saturday?”",
        time: "0:03",
        timestampSec: 3,
      },
      {
        from: "rex",
        text: "“Yes! 412 Oak Ridge is active at $825,000. Sarah has an opening at 11:30 AM this Saturday. Are you already pre-approved?”",
        time: "0:08",
        timestampSec: 8,
        actionNote: "MLS listing matched & agent availability checked",
      },
      {
        from: "caller",
        text: "“Yes, pre-approved with Chase. 11:30 AM works great for us.”",
        time: "0:11",
        timestampSec: 11,
      },
      {
        from: "rex",
        text: "“You're scheduled for Saturday at 11:30 AM with Sarah. I've sent the property brief and calendar invite to your phone.”",
        time: "0:15",
        timestampSec: 15,
        actionNote: "LPMAMA lead logged & calendar invite dispatched",
      },
    ],
  },
];

const WAVEFORM_BARS = [14, 28, 42, 22, 38, 52, 30, 46, 26, 36, 18, 40, 50, 24, 32, 16];

export default function HeroAudioPreview() {
  const [activeTab, setActiveTab] = useState<"pest" | "realestate">("pest");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [progressSec, setProgressSec] = useState(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];
  const activeLine = scenario.lines[currentLineIndex] || scenario.lines[0];
  const isRexSpeaking = activeLine.from === "rex";

  // Telephony progress simulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentLineIndex((prev) => {
          if (prev >= scenario.lines.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          const next = prev + 1;
          setProgressSec(scenario.lines[next].timestampSec);
          return next;
        });
      }, 3500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, scenario.lines]);

  const handleTabChange = (id: "pest" | "realestate") => {
    setActiveTab(id);
    setCurrentLineIndex(0);
    setProgressSec(3);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (currentLineIndex >= scenario.lines.length - 1) {
        setCurrentLineIndex(0);
        setProgressSec(3);
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-xl">
      {/* Telephony Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 bg-cream/70 px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2">
          {/* Live pulsing call beacon */}
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600"></span>
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
            Live Call Simulation
          </span>
          <span className="rounded bg-teal/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-teal">
            HD Voice · WebRTC
          </span>
        </div>

        {/* Industry Switcher */}
        <div className="flex items-center gap-1 rounded-lg bg-white/90 p-0.5 border border-border text-xs">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleTabChange(s.id)}
              className={`rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all ${
                activeTab === s.id
                  ? "bg-teal text-white shadow-xs"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {s.id === "pest" ? "Pest Control" : "Real Estate"}
            </button>
          ))}
        </div>
      </div>

      {/* Main In-Call HUD */}
      <div className="p-4 sm:p-5">
        {/* Caller ID & Active Audio Stream Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink/10 bg-cream/40 p-3.5">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause audio call" : "Listen to live call audio"}
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-md transition-all hover:scale-105 active:scale-95 hover:bg-teal-dark"
            >
              {isPlaying ? (
                <Pause className="size-4 fill-current" />
              ) : (
                <Play className="ml-0.5 size-4 fill-current" />
              )}
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm font-bold text-ink">
                  {scenario.callerNumber}
                </span>
                <span className="text-[11px] text-ink/60 font-mono">
                  ({scenario.callerLocation})
                </span>
              </div>
              <p className="text-xs text-ink/75 flex items-center gap-1.5 mt-0.5 font-mono">
                <PhoneCall className="size-3 text-teal" />
                Connected to <strong className="text-teal font-semibold">Rex (AI Front Desk)</strong>
              </p>
            </div>
          </div>

          {/* Dynamic Frequency Visualizer / Audio Waveform */}
          <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-lg border border-border/80 shadow-xs">
            <div className="flex items-end gap-[3px] h-6">
              {WAVEFORM_BARS.map((h, idx) => {
                const height = isPlaying
                  ? Math.max(5, (h * (idx % 2 === 0 ? 0.9 : 0.6) * (isRexSpeaking ? 1.1 : 0.8)))
                  : 5;
                return (
                  <span
                    key={idx}
                    className={`w-[3px] rounded-full transition-all duration-200 ${
                      isPlaying
                        ? isRexSpeaking
                          ? "bg-teal"
                          : "bg-coral"
                        : "bg-ink/20"
                    }`}
                    style={{ height: `${height}px` }}
                  />
                );
              })}
            </div>
            <span className="ml-2 font-mono text-[11px] font-bold text-ink/80 tabular-nums">
              0:{progressSec < 10 ? `0${progressSec}` : progressSec} / 0:15
            </span>
          </div>
        </div>

        {/* Live Audio Transcript Display (Captions format, not chat bubbles) */}
        <div className="mt-3 overflow-hidden rounded-xl border border-border bg-ink/[0.02] p-4">
          <div className="flex items-center justify-between border-b border-border/60 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex size-2 rounded-full ${
                  isPlaying ? "animate-pulse" : ""
                } ${isRexSpeaking ? "bg-teal" : "bg-coral"}`}
              />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                {isRexSpeaking ? "Rex speaking (AI)" : "Caller speaking"}
              </span>
            </div>
            <span className="font-mono text-[11px] text-ink/50">
              Turn {currentLineIndex + 1} of {scenario.lines.length}
            </span>
          </div>

          {/* Current Live Speaking Quote */}
          <div className="min-h-[58px]">
            <p className="text-sm font-medium leading-relaxed text-ink transition-opacity duration-300">
              {activeLine.text}
            </p>
          </div>

          {/* Real-time Tool Call / Action Trigger Banner */}
          {activeLine.actionNote && (
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-teal/10 border border-teal/20 px-3 py-1.5 text-xs text-teal font-medium animate-fadeIn">
              <Sparkles className="size-3.5 shrink-0 text-teal" />
              <span className="font-mono text-[11px]">{activeLine.actionNote}</span>
            </div>
          )}
        </div>

        {/* Action summary & CRM integration status */}
        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-3 text-[11px]">
          <div className="flex items-center gap-2 font-medium text-emerald-800">
            <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600" />
            <span>Synced to {scenario.crmTarget} + Google Calendar</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-ink/55">
            <Radio className="size-3 text-teal" />
            <span>Answers 24/7 on Ring 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
