import Link from "next/link";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL, BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * Clean, High-Conversion B2B Footer — Cooldock-inspired Anchor + Streamlined Directory
 *
 * ARCHITECTURAL PRINCIPLES:
 * 1. Cognitive Simplicity: Drop verbose crew sub-links that clutter the directory.
 *    Keep only high-value pages: Product, Industries (as requested), and Company.
 * 2. Left Hero Anchor: Clear value proposition for Pest Control & Real Estate (Invariant #3)
 *    with a single high-contrast conversion action: call live AI / book a call.
 * 3. Full-Bleed Monumental Plinth: An oversized architectural "MINIONS.AI" watermark
 *    spanning edge-to-edge (15.5vw) using .type-display (Anton) and text-coral/35.
 *    Full-bleed ensures it scales smoothly across all screens (widescreen, desktop, mobile)
 *    without being constrained or clipped by container max-width.
 * 4. Enterprise Colophon: Infrastructure credit (Retell AI · n8n · Google Calendar · EspoCRM)
 *    and clean single-line copyright.
 */

const FOOTER_PRODUCT = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing & Plans", href: "/pricing" },
  { label: "Speed-to-Lead 2026", href: "/reports/speed-to-lead-2026" },
  { label: "FAQ", href: "/faq" },
];

const FOOTER_INDUSTRIES = [
  { label: "Pest Control", href: "/industries/pest-control" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "HVAC", href: "/industries/hvac" },
  { label: "Plumbing", href: "/industries/plumbing" },
];

const FOOTER_COMPANY = [
  { label: "Contact & Support", href: "/contact" },
  { label: "Book Setup Call", href: BOOKING_CALENDAR_URL },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-cream/80">
      {/* Upper Tier: Focused Anchor Block + Minimal 3-Column Directory */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-6 sm:pt-20 sm:pb-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Brand Anchor (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight"
            >
              Minions<span className="text-coral">.AI</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm sm:text-base leading-relaxed text-cream/70">
              The 24/7 AI front office for pest control operators and real estate
              agencies. Answers on ring one and books directly onto your calendar.
            </p>

            {/* Single High-Value Action Pill */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-heading text-xs font-bold text-white shadow-sm transition-all duration-150 hover:border-teal hover:bg-white/10 active:scale-[0.98]"
              >
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-cream/60 group-hover:text-cream">
                  Hear AI Live:
                </span>
                <span>{SITE_PHONE_NUMBER}</span>
              </a>

              <Link
                href={BOOKING_CALENDAR_URL}
                className="font-mono text-xs font-medium text-cream/50 hover:text-teal transition-colors"
              >
                Book 15-min call →
              </Link>
            </div>

            {/* Quiet Operational Telephony Status */}
            <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-cream/45">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>Voice dispatch active · Sub-1.8s answering speed</span>
            </div>
          </div>

          {/* Minimal Links Directory (Right 7 cols: 3 short, clean columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-1">
            {/* Column 1: Product */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Product
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {FOOTER_PRODUCT.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-cream/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Industries */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Industries
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {FOOTER_INDUSTRIES.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-cream/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {FOOTER_COMPANY.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-cream/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Tier: Full-Bleed Monumental Wordmark Plinth */}
      <div className="w-full select-none pointer-events-none border-t border-white/10 pt-10 sm:pt-16 pb-4 sm:pb-8 overflow-hidden">
        <div className="w-full text-center type-display tracking-[-0.02em] text-white/[0.045] uppercase whitespace-nowrap leading-[0.85] text-[16vw] sm:text-[15.5vw]">
          MINIONS<span className="text-coral/35">.AI</span>
        </div>
      </div>

      {/* Bottom Tier: Clean Utility & Infrastructure Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Minions.AI. All rights reserved.</p>

          <p className="font-mono text-[11px] text-center sm:text-right text-cream/45">
            Built on enterprise voice infrastructure — Retell AI · n8n · Google Calendar · EspoCRM
          </p>

          <p className="text-[11px] text-cream/40">
            Not affiliated with any film franchise.
          </p>
        </div>
      </div>
    </footer>
  );
}
