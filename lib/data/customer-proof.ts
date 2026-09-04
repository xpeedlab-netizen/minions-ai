/**
 * Customer results.
 *
 * EMPTY ON PURPOSE — there are no customers to quote yet, and inventing one is not an
 * option. The band that renders this returns null while the array is empty, so shipping
 * it costs nothing and adding the first real result costs one entry.
 *
 * RULES FOR ADDING AN ENTRY:
 *  1. Real named business, with their written permission to be named.
 *  2. Real measured numbers. "More bookings" is not a result; "+11 booked jobs in
 *     October vs September" is. If it cannot be measured, leave `metrics` empty and let
 *     the quote stand alone.
 *  3. The quote is what they said, not what we wish they had said.
 *
 * Until this fills up, the proof on the homepage is the recorded calls and the cited
 * third-party research — both of which are true and verifiable today.
 */

export type CustomerProof = {
  company: string;
  industry: string;
  /** What was going wrong before. One sentence. */
  problem: string;
  quote: string;
  attribution: string;
  /** Measured outcomes. Each needs a real number and the window it was measured over. */
  metrics: { value: string; label: string }[];
};

export const CUSTOMER_PROOF: CustomerProof[] = [];
