"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const SESSION_KEY = "pip_session_id";

export type PipSource = { source_page?: string; heading?: string };

export type PipMessage = {
  id: string;
  role: "user" | "pip";
  text: string;
  timestamp: number;
  sources?: PipSource[];
  error?: boolean;
};

type PipApiResponse = {
  answer?: string;
  sources?: PipSource[];
  session_id?: string;
  error?: boolean;
};

type PipSessionValue = {
  sessionId: string;
  messages: PipMessage[];
  isPending: boolean;
  sendMessage: (question: string) => void;
};

function newId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Reads the shared session id from localStorage, minting one if absent.
 * Every widget instance on the site reads the same key, so conversation
 * context follows the visitor across pages and across mount points.
 */
function readOrCreateSessionId(): string {
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const fresh = newId();
    window.localStorage.setItem(SESSION_KEY, fresh);
    return fresh;
  } catch {
    // Private browsing / storage disabled — fall back to an in-memory id.
    return newId();
  }
}

const PipSessionContext = createContext<PipSessionValue | null>(null);

/**
 * Holds the single source of truth for the conversation. Mounted once in the
 * root layout so every PipChatWidget on a page — inline and floating alike —
 * reads and writes the same message list. The backend already threads them as
 * one conversation via the shared session_id; this keeps the UI in step.
 */
export function PipSessionProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState<PipMessage[]>([]);
  const [isPending, setIsPending] = useState(false);

  // Mirrors sessionId so sendMessage can read it without being re-created.
  const sessionIdRef = useRef("");
  // Guards against two mounted widgets firing overlapping turns: `isPending`
  // reaches them via render, but a ref settles a same-tick double submit.
  const inFlightRef = useRef(false);

  useEffect(() => {
    const id = readOrCreateSessionId();
    sessionIdRef.current = id;
    setSessionId(id);
  }, []);

  const sendMessage = useCallback(async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || inFlightRef.current) return;

    if (sessionIdRef.current === "") {
      sessionIdRef.current = readOrCreateSessionId();
      setSessionId(sessionIdRef.current);
    }

    inFlightRef.current = true;
    setMessages((prev) => [
      ...prev,
      { id: newId(), role: "user", text: trimmed, timestamp: Date.now() },
    ]);
    setIsPending(true);

    try {
      const res = await fetch("/api/pip-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          session_id: sessionIdRef.current,
        }),
      });

      // Never branch on res.ok — the proxy always answers 200 in the canonical
      // shape. `error: true` in the body is the only failure signal.
      const data = (await res.json()) as PipApiResponse;

      // Render data.answer as-is: the backend and proxy both author
      // human-appropriate copy for their own error paths.
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "pip",
          text:
            data.answer ??
            "Let me grab a human for that — try calling (346) 626-4720 or book a call instead.",
          timestamp: Date.now(),
          sources: data.sources ?? [],
          error: data.error === true,
        },
      ]);

      if (data.session_id && data.session_id !== sessionIdRef.current) {
        sessionIdRef.current = data.session_id;
        setSessionId(data.session_id);
        try {
          window.localStorage.setItem(SESSION_KEY, data.session_id);
        } catch {
          // Storage unavailable — the in-memory id still carries the session.
        }
      }
    } catch {
      // The proxy is same-origin and catches its own upstream failures, so this
      // only fires if the app itself is unreachable (offline, navigation abort).
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "pip",
          text: "Let me grab a human for that — try calling (346) 626-4720 or book a call instead.",
          timestamp: Date.now(),
          sources: [],
          error: true,
        },
      ]);
    } finally {
      inFlightRef.current = false;
      setIsPending(false);
    }
  }, []);

  const value = useMemo<PipSessionValue>(
    () => ({ sessionId, messages, isPending, sendMessage }),
    [sessionId, messages, isPending, sendMessage],
  );

  return <PipSessionContext.Provider value={value}>{children}</PipSessionContext.Provider>;
}

export function usePipSession(): PipSessionValue {
  const ctx = useContext(PipSessionContext);
  if (!ctx) {
    throw new Error("usePipSession must be used inside <PipSessionProvider>.");
  }
  return ctx;
}
