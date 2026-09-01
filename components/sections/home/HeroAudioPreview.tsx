"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  Radio,
  Activity,
} from "lucide-react";

type Scenario = {
  id: "pest" | "realestate";
  label: string;
  callerNumber: string;
  callerLocation: string;
  crmTarget: string;
  lines: {
    from: "caller" | "rex";
    text: string;
    timestampSec: number;
    actionNote: string;
  }[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "pest",
    label: "Pest Control (2:14 AM)",
    callerNumber: "+1 (832) 555-0194",
    callerLocation: "Houston, TX",
    crmTarget: "FieldRoutes / PestPac",
    lines: [
      {
        from: "caller",
        text: "“Hi, we found a severe wasp infestation right by our front door. Can someone come out first thing in the morning?”",
        timestampSec: 3,
        actionNote: "Transcribing inbound voice stream in real-time...",
      },
      {
        from: "rex",
        text: "“We can have a technician at your home between 8:00 and 10:00 AM tomorrow. Standard diagnostic is $125 and applies directly to treatment. What's your address?”",
        timestampSec: 8,
        actionNote: "Checking tech route availability & service rates",
      },
      {
        from: "caller",
        text: "“742 Evergreen Terrace. Let's do 8:00 AM.”",
        timestampSec: 11,
        actionNote: "Parsing customer address & matching dispatch calendar...",
      },
      {
        from: "rex",
        text: "“Booked for 8:00 AM tomorrow! I've locked it onto the calendar and sent a confirmation SMS to your number.”",
        timestampSec: 15,
        actionNote: "Appointment locked in FieldRoutes & SMS dispatched",
      },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate (Showing Inquiry)",
    callerNumber: "+1 (512) 555-8831",
    callerLocation: "Austin, TX",
    crmTarget: "Follow Up Boss / KVCore",
    lines: [
      {
        from: "caller",
        text: "“Hi, I'm calling about the 4-bedroom on Oak Ridge Drive. Is it still available for a private tour this Saturday?”",
        timestampSec: 3,
        actionNote: "Matching MLS listing address & property status...",
      },
      {
        from: "rex",
        text: "“Yes! 412 Oak Ridge is active at $825,000. Sarah has an opening at 11:30 AM this Saturday. Are you already pre-approved?”",
        timestampSec: 8,
        actionNote: "Checking listing agent Sarah's live schedule",
      },
      {
        from: "caller",
        text: "“Yes, pre-approved with Chase. 11:30 AM works great for us.”",
        timestampSec: 11,
        actionNote: "Validating buyer qualification & pre-approval note...",
      },
      {
        from: "rex",
        text: "“You're scheduled for Saturday at 11:30 AM with Sarah. I've sent the property brief and calendar invite to your phone.”",
        timestampSec: 15,
        actionNote: "LPMAMA lead logged & calendar invite dispatched",
      },
    ],
  },
];

const BARS = [12, 24, 38, 20, 32, 44, 28, 40, 22, 34, 16, 36, 42, 20, 28, 14];

export default function HeroAudioPreview() {
  const [activeTab, setActiveTab] = useState<"pest" | "realestate">("pest");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [progressSec, setProgressSec] = useState(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];
  const activeLine = scenario.lines[currentLineIndex] || scenario.lines[0];
  const isRexSpeaking = activeLine.from === "rex";

  // Seamless telephony simulation
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
      }, 3600);
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
      {/* Telephony Header Bar (Fixed Height) */}
      <div className="flex h-12 items-center justify-between border-b border-ink/10 bg-cream/70 px-4 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600"></span>
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
            Live Call Simulation
          </span>
          <span className="hidden sm:inline-block rounded bg-teal/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-teal">
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
        {/* Caller ID & Active Audio Stream Strip (Fixed Height) */}
        <div className="flex h-16 items-center justify-between gap-3 rounded-xl border border-ink/10 bg-cream/40 px-3.5">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause audio call" : "Listen to live call audio"}
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-teal-dark"
            >
              {isPlaying ? (
                <Pause className="size-4 fill-current" />
              ) : (
                <Play className="ml-0.5 size-4 fill-current" />
              )}
            </button>

            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-heading text-sm font-bold text-ink">
                  {scenario.callerNumber}
                </span>
                <span className="text-[11px] text-ink/60 font-mono">
                  ({scenario.callerLocation})
                </span>
              </div>
              <p className="text-xs text-ink/75 flex items-center gap-1.5 mt-1 font-mono leading-none">
                <PhoneCall className="size-3 text-teal" />
                Connected to <strong className="text-teal font-semibold">Rex (AI Front Desk)</strong>
              </p>
            </div>
          </div>

          {/* Dynamic Frequency Visualizer / Audio Waveform */}
          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-border/80 shadow-xs">
            <div className="flex items-end gap-[2.5px] h-5">
              {BARS.map((h, idx) => {
                const barHeight = isPlaying
                  ? Math.max(4, (h * (idx % 2 === 0 ? 0.85 : 0.55) * (isRexSpeaking ? 1.05 : 0.75)))
                  : 4;
                return (
                  <span
                    key={idx}
                    className={`w-[2.5px] rounded-full transition-all duration-300 ${
                      isPlaying
                        ? isRexSpeaking
                          ? "bg-teal"
                          : "bg-coral"
                        : "bg-ink/20"
                    }`}
                    style={{ height: `${barHeight}px` }}
                  />
                );
              })}
            </div>
            <span className="font-mono text-[11px] font-bold text-ink/80 tabular-nums min-w-[65px] text-right">
              0:{progressSec < 10 ? `0${progressSec}` : progressSec} / 0:15
            </span>
          </div>
        </div>

        {/* Live Audio Transcript Display — STRICT LOCKED HEIGHT to eliminate any blinking */}
        <div className="mt-3 flex h-[156px] sm:h-[148px] flex-col justify-between overflow-hidden rounded-xl border border-border bg-ink/[0.02] p-3.5">
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex size-2 rounded-full transition-colors duration-300 ${
                  isPlaying ? "animate-pulse" : ""
                } ${isRexSpeaking ? "bg-teal" : "bg-coral"}`}
              />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
                {isRexSpeaking ? "Rex speaking (AI Receptionist)" : "Caller speaking"}
              </span>
            </div>
            <span className="font-mono text-[11px] text-ink/50">
              Turn {currentLineIndex + 1} of {scenario.lines.length}
            </span>
          </div>

          {/* Smooth Text Crossfade with Fixed Height */}
          <div className="relative my-auto flex h-[56px] items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${activeTab}-${currentLineIndex}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-xs sm:text-sm font-medium leading-relaxed text-ink line-clamp-3"
              >
                {activeLine.text}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Real-time Tool Call / Action Trigger Slot — ALWAYS PRESENT, NEVER BLINKS */}
          <div
            className={`flex h-7 items-center gap-2 rounded-md px-2.5 text-xs transition-all duration-300 ${
              isRexSpeaking
                ? "bg-teal/10 border border-teal/20 text-teal font-medium"
                : "bg-ink/[0.04] border border-border text-ink/65"
            }`}
          >
            {isRexSpeaking ? (
              <Sparkles className="size-3.5 shrink-0 text-teal" />
            ) : (
              <Activity className="size-3.5 shrink-0 text-ink/40" />
            )}
            <AnimatePresence mode="wait">
              <motion.span
                key={`${activeTab}-${currentLineIndex}-action`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="truncate font-mono text-[11px]"
              >
                {activeLine.actionNote}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Action summary & CRM integration status (Fixed Height) */}
        <div className="mt-3 flex h-6 items-center justify-between border-t border-ink/10 pt-2 text-[11px]">
          <div className="flex items-center gap-1.5 font-medium text-emerald-800">
            <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600" />
            <span className="truncate">Synced to {scenario.crmTarget} + Calendar</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-ink/55 shrink-0">
            <Radio className="size-3 text-teal" />
            <span>Answers on Ring 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
