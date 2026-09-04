/**
 * GA4 event helper.
 *
 * The site loads gtag.js directly in app/layout.tsx, gated on
 * NEXT_PUBLIC_GA_MEASUREMENT_ID, and until now nothing on the page fired a single
 * event — so we could see traffic but not what any of it did. This is the thinnest
 * thing that makes the funnel measurable.
 *
 * Deliberately NOT a provider abstraction. GA4 is the only sink, `gtag` is already
 * global, and a queue/context layer would be more code than the thing it wraps. If a
 * second analytics provider ever lands, change this file — every call site stays put.
 *
 * Every failure mode is a silent no-op: server render, missing env var, adblock, or a
 * script that has not finished loading. Analytics must never be able to break a page.
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  /** Any click on a booking CTA. `location` says which band it came from. */
  | "cta_click"
  /** Tap on a tel: link — the hero number or the mobile sticky bar. */
  | "phone_click"
  /** First play of a given call recording. */
  | "call_play"
  /** Listen-depth milestone on a recording: 25 / 50 / 75 / 100. */
  | "call_complete"
  /** Visitor picked an industry in the audience fork. */
  | "segment_select"
  /** A FAQ question was opened. */
  | "faq_open"
  /** Contact form submitted successfully. */
  | "lead_submit";

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

/**
 * The visitor's selected industry, held module-level so every event can carry it
 * without threading a prop through every band. Set by the audience fork; read by
 * `track`. Undefined until the visitor chooses, which is itself the useful default.
 */
let currentSegment: string | undefined;

export function setAnalyticsSegment(segment: string | undefined) {
  currentSegment = segment;
}

export function track(name: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  gtag("event", name, {
    ...(currentSegment ? { segment: currentSegment } : {}),
    ...params,
  });
}
