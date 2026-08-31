import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  BOOKING_CALENDAR_URL,
  SITE_PHONE_NUMBER,
  SITE_PHONE_TEL,
} from "@/lib/data/placeholders";
import HeroAudioPreview from "@/components/sections/home/HeroAudioPreview";
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
    <section className="bg-cream pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.06em] text-ink/70 shadow-sm">
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
                Book a 15-minute call
              </Button>
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="group inline-flex min-h-[44px] items-center gap-2.5 text-base font-semibold text-teal underline decoration-teal/30 decoration-2 underline-offset-4 transition-colors hover:decoration-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-4 sm:text-lg"
              >
                <Phone aria-hidden className="size-4.5 shrink-0" />
                {SITE_PHONE_NUMBER}
              </a>
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

          {/* Interactive Live Audio & Transcript Preview */}
          <div className="relative w-full">
            <HeroAudioPreview />
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

