"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Check } from "lucide-react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

interface RecaptchaFieldProps {
  onVerify: (token: string) => void;
  onExpired?: () => void;
  theme?: "light" | "dark";
  className?: string;
}

export default function RecaptchaField({
  onVerify,
  onExpired,
  theme = "light",
  className = "",
}: RecaptchaFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [siteKey, setSiteKey] = useState<string | null>(null);
  const [isSimulatedVerified, setIsSimulatedVerified] = useState(false);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (key) {
      setSiteKey(key);
    }
  }, []);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    const loadRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        if (containerRef.current && widgetIdRef.current === null) {
          try {
            const id = window.grecaptcha.render(containerRef.current, {
              sitekey: siteKey,
              callback: (token: string) => onVerify(token),
              "expired-callback": () => {
                if (onExpired) onExpired();
              },
              theme,
            });
            widgetIdRef.current = id;
          } catch (e) {
            console.error("reCAPTCHA render error:", e);
          }
        }
      }
    };

    if (window.grecaptcha) {
      window.grecaptcha.ready(loadRecaptcha);
    } else {
      const scriptId = "google-recaptcha-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.grecaptcha) {
            window.grecaptcha.ready(loadRecaptcha);
          }
        };
        document.head.appendChild(script);
      }
    }
  }, [siteKey, onVerify, onExpired, theme]);

  // If site key is configured, render the Google reCAPTCHA mount container
  if (siteKey) {
    return (
      <div className={`recaptcha-container my-1 ${className}`}>
        <div ref={containerRef} />
      </div>
    );
  }

  // Fallback interactive reCAPTCHA box (when site key is pending configuration in .env)
  const handleSimulatedClick = () => {
    const nextState = !isSimulatedVerified;
    setIsSimulatedVerified(nextState);
    if (nextState) {
      onVerify("simulated_recaptcha_token_verified");
    } else if (onExpired) {
      onExpired();
    }
  };

  return (
    <div
      className={`flex items-center justify-between rounded-xl border p-3 shadow-2xs transition-colors ${
        theme === "dark"
          ? "border-white/20 bg-white/5 text-white"
          : "border-border bg-cream/50 text-ink"
      } ${className}`}
    >
      <button
        type="button"
        onClick={handleSimulatedClick}
        className="flex items-center gap-3 text-left focus:outline-none"
      >
        <div
          className={`flex size-6 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
            isSimulatedVerified
              ? "border-teal bg-teal text-white"
              : theme === "dark"
                ? "border-white/40 bg-white/10 hover:border-white"
                : "border-ink/30 bg-white hover:border-teal"
          }`}
        >
          {isSimulatedVerified && <Check className="size-4 stroke-[3]" />}
        </div>
        <span className="text-xs font-medium sm:text-sm">
          {isSimulatedVerified ? "Verification complete" : "I'm not a robot"}
        </span>
      </button>

      <div className="flex flex-col items-center pl-3 text-center">
        <ShieldCheck
          className={`size-6 ${theme === "dark" ? "text-cream/70" : "text-teal"}`}
        />
        <span className="font-mono text-[9px] uppercase tracking-wider opacity-60">
          reCAPTCHA
        </span>
      </div>
    </div>
  );
}
