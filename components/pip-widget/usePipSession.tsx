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
import { SITE_PHONE_NUMBER } from "@/lib/data/placeholders";

const SESSION_KEY = "pip_session_id";
const FALLBACK_MESSAGE = `Let me grab a human for that — try calling ${SITE_PHONE_NUMBER} or book a call instead.`;

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
 */
function readOrCreateSessionId(): string {
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const fresh = newId();
    window.localStorage.setItem(SESSION_KEY, fresh);
    return fresh;
  } catch {
    return newId();
  }
}

const PipSessionContext = createContext<PipSessionValue | null>(null);

export function PipSessionProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState(() => {
    if (typeof window === "undefined") return "";
    return readOrCreateSessionId();
  });
  const [messages, setMessages] = useState<PipMessage[]>([]);
  const [isPending, setIsPending] = useState(false);

  const sessionIdRef = useRef(sessionId);
  const inFlightRef = useRef(false);

  useEffect(() => {
    if (!sessionIdRef.current && typeof window !== "undefined") {
      const id = readOrCreateSessionId();
      sessionIdRef.current = id;
      setSessionId(id);
    }
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

      const data = (await res.json()) as PipApiResponse;

      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "pip",
          text: data.answer ?? FALLBACK_MESSAGE,
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
          // Storage unavailable
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "pip",
          text: FALLBACK_MESSAGE,
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
