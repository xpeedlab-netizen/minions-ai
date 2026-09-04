import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import {
  BOOKING_CALENDAR_URL,
  SITE_PHONE_NUMBER,
  SITE_PHONE_TEL,
} from "@/lib/data/placeholders";
import HeroCallPlayer from "@/components/sections/home/HeroCallPlayer";
import TrustLogos from "@/components/ui/TrustLogos";

/**
 * Hero — band 01 of the landing brief.
 *
 * COPY & CRO:
 *   - Outcome-first H1 + clear subhead covering both co-primary markets.
 *   - Two frictionless conversion paths:
 *     1. 15-minute setup call booking
 *     2. Instant interactive dual-market call preview (Pest Control & Real Estate) + live demo phone line
 *   - Visual CRM integration logos (FieldRoutes, PestPac, GorillaDesk, ServiceTitan, Follow Up Boss, Jobber, Google Calendar).
 */
export default function Hero() {
  return (
    <section className="overflow-x-hidden bg-cream pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:grid-cols-[1.2fr_1fr] xl:gap-14">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.06em] text-ink/70 shadow-sm">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-success animate-breathe"
              />
              For pest control &amp; real estate owners
            </span>

            <h1 className="mt-5 type-display text-4xl leading-[0.98] tracking-[-0.005em] text-balance text-ink sm:text-5xl lg:text-6xl">
              Your AI receptionist answers every call, 24/7.
            </h1>

            <p className="mt-5 max-w-lg text-[1.0625rem] leading-[1.6] text-ink/75 sm:text-lg">
              Answers on the first ring at 2 AM, on weekends, mid-route and mid-showing —
              quotes from your real price list, books onto your calendar, and you keep your
              number.
            </p>

            {/* CTA Conversion Triggers — Wraps cleanly at all viewport widths */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-wrap xl:flex-nowrap">
              <Button
                href={BOOKING_CALENDAR_URL}
                size="lg"
                showArrow
                track={{ event: "cta_click", params: { location: "hero" } }}
                className="w-full sm:w-auto justify-center whitespace-nowrap"
              >
                Book a 15-minute call
              </Button>
              <TrackedPhoneLink
                href={`tel:${SITE_PHONE_TEL}`}
                location="hero"
                className="group inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-4 py-3 sm:px-4.5 font-heading text-sm sm:text-base font-bold text-ink shadow-sm transition-all duration-150 hover:border-teal hover:text-teal hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2 whitespace-nowrap"
              >
                <span className="relative flex size-2.5 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
                <Phone aria-hidden className="size-4 shrink-0 text-teal transition-transform group-hover:scale-110" />
                <span>Hear AI Live: {SITE_PHONE_NUMBER}</span>
              </TrackedPhoneLink>
            </div>

            {/* Micro-Reassurance Checkpoints */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-ink/70">
              <span className="inline-flex items-center gap-1">
                <Check className="size-3.5 text-teal" /> Keep your existing number
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="size-3.5 text-teal" /> Done-for-you setup
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="size-3.5 text-teal" /> 30-day tuning included
              </span>
            </div>
          </div>
          {/* A real recorded call, playable in the first screen. */}
          <div className="relative min-w-0 w-full lg:max-w-lg lg:ml-auto">
            <HeroCallPlayer />
          </div>
        </div>

        {/* Visual CRM Integration Trust Bar */}
        <div className="mt-14 border-t border-ink/10 pt-8">
          <TrustLogos />
        </div>
      </div>
    </section>
  );
}
