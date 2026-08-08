"use client";

import { Sparkles } from "lucide-react";
import type { PipMessage } from "./usePipSession";

function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

type Props = {
  message: PipMessage;
  /** True when this is the first bubble in a consecutive run from the same role. */
  isFirstInRun: boolean;
};

export default function PipMessageBubble({ message, isFirstInRun }: Props) {
  if (message.role === "user") {
    return (
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-xs bg-[var(--pip-accent)] px-4 py-2.5 text-xs text-white shadow-xs">
        <p className="leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
      </div>
    );
  }

  const firstSource = message.sources?.[0];
  const showSourceTag = !message.error && Boolean(firstSource?.heading);

  return (
    <div className="mr-auto max-w-[88%]">
      <div className="rounded-2xl rounded-tl-xs border border-border bg-[var(--pip-bg)] px-4 py-2.5 text-xs text-ink shadow-xs">
        {/* "Pip Verified Answer" mirrors the hero mockup's label, and is withheld
            on error turns where nothing was verified against the knowledge base. */}
        {isFirstInRun && !message.error && (
          <div className="mb-0.5 flex items-center justify-between font-mono text-[10px] text-ink/40">
            <span className="flex items-center gap-1">
              <Sparkles className="size-3" /> Pip Verified Answer
            </span>
            <span>{formatTime(message.timestamp)}</span>
          </div>
        )}
        {isFirstInRun && message.error && (
          <div className="mb-0.5 flex items-center justify-end font-mono text-[10px] text-ink/40">
            <span>{formatTime(message.timestamp)}</span>
          </div>
        )}
        <p className="leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
      </div>

      {showSourceTag && (
        <p className="mt-1 pl-1 font-mono text-[10px] text-ink/40">
          Based on: {firstSource?.heading}
        </p>
      )}
    </div>
  );
}
