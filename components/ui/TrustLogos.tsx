import React from "react";

/**
 * TrustLogos — Visual integration clearance strip.
 *
 * Renders monochrome/ink-toned SVGs for our core integration partners across
 * Pest Control, Real Estate, and Home Services (invariants #3, #4, #5):
 *   - Pest Control / Trades: FieldRoutes, PestPac, GorillaDesk, ServiceTitan, Housecall Pro, Jobber
 *   - Real Estate: Follow Up Boss
 *   - Scheduling: Google Calendar
 *
 * Eliminates the #1 technical friction point ("Does this work with my CRM?")
 * within 2 seconds of landing.
 */

export default function TrustLogos() {
  return (
    <div className="w-full">
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.12em] text-ink/75 sm:text-xs">
        Native Sync With Your Existing CRM &amp; Dispatch Stack
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 text-ink/75 sm:gap-x-12">
        {/* FieldRoutes */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 110 24" fill="currentColor" aria-label="FieldRoutes">
            <path d="M12 2L2 22h6l2-4h8l2 4h6L16 2h-4zm2 12l2-5 2 5h-4z" />
            <text x="32" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              FieldRoutes
            </text>
          </svg>
        </div>

        {/* PestPac */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 95 24" fill="currentColor" aria-label="PestPac">
            <circle cx="10" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <circle cx="10" cy="12" r="3.5" fill="currentColor" />
            <text x="25" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              PestPac
            </text>
          </svg>
        </div>

        {/* GorillaDesk */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 115 24" fill="currentColor" aria-label="GorillaDesk">
            <rect x="2" y="4" width="16" height="16" rx="4" fill="currentColor" />
            <path d="M7 10h6M7 14h4" stroke="#fff8f0" strokeWidth="2" strokeLinecap="round" />
            <text x="25" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              GorillaDesk
            </text>
          </svg>
        </div>

        {/* Follow Up Boss */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 135 24" fill="currentColor" aria-label="Follow Up Boss">
            <path d="M3 4h14v3H3zM3 10h10v3H3zM3 16h6v3H3z" />
            <circle cx="17" cy="17.5" r="3.5" fill="currentColor" />
            <text x="25" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              Follow Up Boss
            </text>
          </svg>
        </div>

        {/* ServiceTitan */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 120 24" fill="currentColor" aria-label="ServiceTitan">
            <path d="M2 18L10 4l4 7-3 2 5 5h-14z" />
            <text x="26" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              ServiceTitan
            </text>
          </svg>
        </div>

        {/* Jobber */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 85 24" fill="currentColor" aria-label="Jobber">
            <rect x="2" y="3" width="16" height="18" rx="3" fill="currentColor" />
            <path d="M7 8l6 4-6 4V8z" fill="#fff8f0" />
            <text x="25" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              Jobber
            </text>
          </svg>
        </div>

        {/* Housecall Pro */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 125 24" fill="currentColor" aria-label="Housecall Pro">
            <path d="M10 2L2 9h4v11h8V9h4L10 2z" />
            <text x="26" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              Housecall Pro
            </text>
          </svg>
        </div>

        {/* Google Calendar */}
        <div className="flex items-center gap-2 transition-colors hover:text-ink">
          <svg className="h-4.5 w-auto" viewBox="0 0 142 24" fill="currentColor" aria-label="Google Calendar">
            <rect x="2" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="2" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="2" />
            <rect x="6" y="11" width="3" height="3" fill="currentColor" />
            <rect x="11" y="11" width="3" height="3" fill="currentColor" />
            <text x="25" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em">
              Google Calendar
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
