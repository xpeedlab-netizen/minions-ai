/**
 * The month label printed on the pricing cards ("August 2026 pricing").
 *
 * It exists to date-stamp the rates as current, NOT to imply an expiry: there is no
 * end-of-month deadline on any package, and the copy must never suggest one. A false
 * scarcity claim would contradict the band it sits in, which sells "no contract".
 *
 * Fixed to America/New_York rather than the server's zone so the label turns over on the
 * audience's calendar, not on UTC's — the two disagree for the last five hours of every
 * month.
 *
 * BOTH PAGES THAT RENDER THIS SET `revalidate` so the label cannot go stale between
 * deploys. If you drop this call, drop the revalidate with it; if you add it to a third
 * page, that page needs a revalidate too.
 */
export function currentPricingMonth(): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "America/New_York",
  }).format(new Date());
}
