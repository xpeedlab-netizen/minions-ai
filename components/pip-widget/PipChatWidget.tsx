"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import PipMessageBubble from "./PipMessageBubble";
import { STARTER_CHIPS } from "./starter-chips";
import { usePipSession } from "./usePipSession";
import { PIP_GREETING } from "@/lib/data/site-content";

const OPEN_STATE_KEY = "pip_widget_open";

type Props = {
  variant: "floating" | "inline";
  defaultOpen?: boolean;
  className?: string;
};

function PipPanelHeader({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative flex size-9 shrink-0 items-center justify-center rounded-2xl bg-[var(--pip-ink)] text-white shadow-sm">
          <Bot className="size-4.5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading font-extrabold text-ink text-sm truncate">
            Pip — Support AI
          </h3>
          <p className="font-mono text-[11px] text-ink/50 truncate">
            24/7 Web Chat &amp; Email Support
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[var(--pip-online)] bg-[var(--pip-online)]/10 border border-[var(--pip-online)]/20 px-2.5 py-1 rounded-xl">
          <span className="size-2 rounded-full bg-[var(--pip-online)] animate-pulse" />
          Online
        </span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="rounded-lg p-1 text-ink/50 transition-colors hover:bg-cream hover:text-ink"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function PipPanel({
  variant,
  onClose,
}: {
  variant: "floating" | "inline";
  onClose?: () => void;
}) {
  const { messages, isPending, sendMessage } = usePipSession();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep the newest turn in view as the conversation grows.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isPending]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;
    sendMessage(input);
    setInput("");
  };

  const isEmpty = messages.length === 0;

  return (
    <div
      className={
        variant === "floating"
          ? "flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl"
          : "flex h-full w-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-white"
      }
    >
      <PipPanelHeader onClose={onClose} />

      <div ref={scrollRef} className="flex-1 min-h-0 space-y-3 overflow-y-auto bg-cream p-4">
        {isEmpty && (
          <div className="mr-auto max-w-[88%] rounded-2xl rounded-tl-xs border border-border bg-[var(--pip-bg)] px-4 py-2.5 text-xs text-ink shadow-xs">
            <p className="leading-relaxed">
              {PIP_GREETING}
            </p>
          </div>
        )}

        {messages.map((message, idx) => (
          <PipMessageBubble
            key={message.id}
            message={message}
            isFirstInRun={idx === 0 || messages[idx - 1].role !== message.role}
          />
        ))}

        {isPending && (
          <div
            className="mr-auto flex items-center gap-1.5 rounded-2xl rounded-tl-xs border border-border bg-[var(--pip-bg)] px-4 py-3 shadow-xs"
            role="status"
            aria-label="Pip is typing"
          >
            <span className="size-1.5 animate-bounce rounded-full bg-ink/30 [animation-delay:-0.3s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-ink/30 [animation-delay:-0.15s]" />
            <span className="size-1.5 animate-bounce rounded-full bg-ink/30" />
          </div>
        )}
      </div>

      <div className="border-t border-border bg-white px-3 py-3">
        {isEmpty && (
          <div className="mb-2.5 space-y-1.5">
            <p className="font-mono text-[10px] uppercase tracking-wide text-ink/50">
              Try Asking Pip:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {STARTER_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  disabled={isPending}
                  onClick={() => sendMessage(chip)}
                  className="rounded-xl border border-border bg-white px-2.5 py-1.5 text-[11px] font-medium text-ink/70 transition-all hover:bg-cream disabled:opacity-50"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Pip a question…"
            aria-label="Message Pip"
            className="min-w-0 flex-1 rounded-xl border border-border bg-cream px-3 py-2 text-xs text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-[var(--pip-ink)]"
          />
          <button
            type="submit"
            disabled={!input.trim() || isPending}
            aria-label="Send message"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--pip-ink)] text-white transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default function PipChatWidget({ variant, defaultOpen = false, className }: Props) {
  if (variant === "inline") {
    return (
      <div className={className ?? "h-full w-full"}>
        <PipPanel variant="inline" />
      </div>
    );
  }
  return <FloatingPipWidget defaultOpen={defaultOpen} className={className} />;
}

function FloatingPipWidget({
  defaultOpen,
  className,
}: {
  defaultOpen: boolean;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return defaultOpen;
    try {
      const stored = window.sessionStorage.getItem(OPEN_STATE_KEY);
      if (stored !== null) return stored === "true";
    } catch {
      // Storage unavailable — fall back to default
    }
    return defaultOpen;
  });

  useEffect(() => {
    try {
      window.sessionStorage.setItem(OPEN_STATE_KEY, String(isOpen));
    } catch {
      // Storage unavailable — state stays in memory
    }
  }, [isOpen]);

  return (
    <div className={className ?? "fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6"}>
      {isOpen && (
        <div className="mb-3 h-[520px] w-[calc(100vw-2rem)] max-w-[380px] sm:w-[380px]">
          <PipPanel variant="floating" onClose={() => setIsOpen(false)} />
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close Pip chat" : "Open Pip chat"}
        aria-expanded={isOpen}
        className="ml-auto flex size-14 items-center justify-center rounded-full bg-[var(--pip-ink)] text-white shadow-lg transition-transform hover:scale-105"
      >
        {isOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
