import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, UserCheck, PhoneCall, TrendingUp, Timer } from "lucide-react";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";
import { PROOF_STATS } from "@/lib/data/site-content";

/**
 * /reports/speed-to-lead-2026 — an explainer on response-time economics for the trades.
 *
 * REWRITTEN 2026-09-05. READ THIS BEFORE ADDING A NUMBER.
 *
 * This page previously presented itself as "Minions.AI Primary Research Report — Q1
 * 2026", declared schema.org/Dataset with a CC-BY licence (which tells search engines
 * and AI assistants it is citable open research), and reported a table of findings
 * sourced to "Minions.AI Internal Telemetry (Q1 2026)": a 94% live-routing rate, an 18%
 * voicemail drop-off, ~14.5s human answer times, a 21x capture increase, and a 70%
 * drop-off in "$1,800+ emergency contracts" during "115F heatwaves".
 *
 * None of that telemetry existed. There were no customers, no Q1 2026 dataset, and the
 * 21x was the MIT/InsideSales 2007 figure relabelled as our own measurement. The
 * Dataset markup made it worse than ordinary marketing puff, because machine-readable
 * fabrication propagates: an assistant citing it would repeat the numbers as fact.
 *
 * THE RULE NOW:
 *   - No figure on this page may be attributed to Minions.AI unless it was actually
 *     measured, and the sample size must appear next to it.
 *   - Third-party figures come from PRIMARY sources we have opened. See the sourcing
 *     note on PROOF_STATS in lib/data/site-content.ts, including the widely repeated
 *     "ServiceTitan 62%" stat that does not exist at its supposed source.
 *   - No Dataset/primary-research schema until there is a real dataset behind it.
 *     TechArticle is honest for an explainer; Dataset is a claim about evidence.
 *
 * The demo-line latency below IS real: pulled from the Retell API on 2026-09-05 across
 * every call on the account with latency telemetry. It is reported with its sample size
 * and its tail, because 12 calls is a demo line, not a benchmark, and saying so is what
 * makes the number usable.
 */

export const metadata: Metadata = {
  title: "Speed to Lead for the Trades | What Response Time Is Worth",
  description:
    "Why response time decides who books the job in pest control, HVAC and plumbing. What the research actually shows, and measured answer latency from our own demo line.",
  alternates: {
    canonical: "https://www.getminions.ai/reports/speed-to-lead-2026",
  },
};

/**
 * Measured on the Minions.AI demo line via the Retell API, 2026-09-05.
 *
 * n = 12 calls with end-to-end latency telemetry, 67 agent turns. Deliberately small
 * and deliberately labelled: this is what our own line does, not an industry benchmark,
 * and the p90 is published alongside the median because a median on its own hides the
 * turns a caller actually notices.
 *
 * If you re-measure, update the date and the n together, or the figure stops meaning
 * anything. Do not round these toward a rounder marketing number.
 */
const DEMO_LINE_LATENCY = {
  measuredOn: "5 September 2026",
  calls: 12,
  turns: 67,
  medianMs: 1384,
  p90Ms: 2513,
  underTarget: 10,
};

export default function SpeedToLeadReportPage() {
  /*
   * TechArticle only. The previous version also emitted schema.org/Dataset with a
   * CC-BY licence, asserting to crawlers that this page publishes citable research —
   * it did not. Do not reintroduce Dataset markup unless a real, documented dataset
   * ships with it.
   */
  const techArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Speed to Lead for the Trades: What Response Time Is Worth",
    description:
      "An explainer on inbound response-time economics for pest control, HVAC and plumbing, citing third-party research plus measured latency from the Minions.AI demo line.",
    author: { "@type": "Organization", name: "Minions.AI" },
    publisher: { "@id": "https://www.getminions.ai/#organization" },
    datePublished: "2026-08-22",
    dateModified: "2026-09-05",
    mainEntityOfPage: "https://www.getminions.ai/reports/speed-to-lead-2026",
  };

  return (
    <div className="min-h-screen bg-cream py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/65 transition-colors hover:text-teal"
          >
            <ArrowLeft className="size-4" />
            Back to Playbooks
          </Link>
        </div>

        <header className="mb-12">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-teal">
            <Timer className="size-4" />
            Speed to lead, an explainer
          </div>
          <h1 className="mb-6 font-heading text-4xl font-black leading-[1.12] tracking-tight text-ink sm:text-5xl">
            What response time is actually worth in the trades
          </h1>
          <p className="text-xl leading-relaxed text-ink/70">
            Most inbound leads are lost before anyone quotes a price, and not to a
            competitor&apos;s pitch, but to the fact that nobody picked up. Here is what
            the research shows, and what our own line measures.
          </p>
        </header>

        {/* The answer, stated plainly for both readers and assistants extracting it. */}
        <section className="my-8 rounded-2xl border border-border/60 border-l-4 border-l-teal bg-white p-6 shadow-xs">
          <h2 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider text-teal">
            The short answer
          </h2>
          <p className="font-heading text-lg font-semibold leading-snug text-ink">
            When researchers submitted real enquiries to 1,000 businesses, 63% never
            replied at all, and the ones that did averaged 29 hours. In a trade where the
            caller has a wasp nest, a leak or a buyer on a deadline, that is not a slow
            reply, it is an absent one. Whoever answers first books the job.
          </p>
        </section>

        {/* Third-party research. Same primary sources as the homepage proof band. */}
        <section className="my-12">
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-ink">
            <TrendingUp className="size-5 text-teal" />
            What the research shows
          </h2>

          <dl className="grid gap-6 sm:grid-cols-3">
            {PROOF_STATS.map((s) => (
              <div
                key={s.stat}
                className="flex flex-col rounded-2xl border border-border/60 bg-white p-6"
              >
                <dt className="font-mono text-3xl font-medium tabular-nums text-ink">
                  {s.stat}
                </dt>
                <dd className="mt-3 flex flex-1 flex-col">
                  <p className="text-[0.9375rem] leading-[1.6] text-ink/75">
                    {s.description}
                  </p>
                  <p className="mt-auto pt-4 font-mono text-[0.6875rem] leading-[1.5] text-ink/55">
                    {s.source}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-[0.9375rem] leading-[1.65] text-ink/70">
            A note on sourcing, because this topic is full of laundered numbers. A widely
            repeated claim that 62% of contractor calls go unanswered, supposedly from an
            analysis of 50,000 phone lines, does not appear at the source it is credited
            to: that study covers about 3,000 businesses and reports a booking rate, a
            different measure entirely. We do not cite it, and we would treat any
            missed-call statistic published by a company selling missed-call software the
            same way.
          </p>
        </section>

        {/* Our own measurement — small, dated, and labelled as what it is. */}
        <section className="my-12">
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-ink">
            <Timer className="size-5 text-teal" />
            What our demo line measures
          </h2>

          <div className="rounded-2xl border border-border/60 bg-white p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-3xl font-medium tabular-nums text-teal">
                  {(DEMO_LINE_LATENCY.medianMs / 1000).toFixed(2)}s
                </p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink/75">
                  median time to respond once the caller stops speaking
                </p>
              </div>
              <div>
                <p className="font-mono text-3xl font-medium tabular-nums text-ink">
                  {(DEMO_LINE_LATENCY.p90Ms / 1000).toFixed(2)}s
                </p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink/75">
                  90th percentile: the slower turns, published because a median hides
                  them
                </p>
              </div>
              <div>
                <p className="font-mono text-3xl font-medium tabular-nums text-ink">
                  {DEMO_LINE_LATENCY.underTarget}/{DEMO_LINE_LATENCY.calls}
                </p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink/75">
                  calls whose median turn came in under 1.8 seconds
                </p>
              </div>
            </div>

            <p className="mt-7 border-t border-border pt-5 font-mono text-xs leading-[1.6] text-ink/60">
              Measured {DEMO_LINE_LATENCY.measuredOn} across{" "}
              {DEMO_LINE_LATENCY.calls} calls ({DEMO_LINE_LATENCY.turns} agent turns) on
              the Minions.AI demo line, from Retell end-to-end latency telemetry. This is
              a demo line, not an industry benchmark, a sample this size tells you what
              our stack does, not what yours will average under load.
            </p>
          </div>

          <p className="mt-6 text-[0.9375rem] leading-[1.65] text-ink/70">
            For context, a phone that rings four times before voicemail has already taken
            about fifteen seconds. The gap that matters is not the difference between one
            second and two, it is the difference between answering and not.
          </p>
        </section>

        {/* Architecture, stated as what we do rather than as a physics discovery. */}
        <section className="my-12">
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-ink">
            <UserCheck className="size-5 text-teal" />
            How the latency is kept down
          </h2>
          <div className="rounded-2xl bg-ink p-8 text-white shadow-lg">
            <h3 className="mb-4 font-heading text-xl font-bold text-white">
              Streaming, not turn-taking after the fact
            </h3>
            <p className="leading-relaxed text-cream/85">
              Response time is dominated by how long the system waits before it starts
              working. Transcribing a complete sentence, then sending it to a model, then
              synthesising a reply, stacks three waits end to end. Streaming speech
              recognition and starting generation before the caller has finished their
              sentence removes most of that: which is what the numbers above reflect. We
              build on Retell for this layer rather than assembling it ourselves, and the
              honest framing is that the platform does the hard part of the voice while we
              build the booking, the integrations and the guardrails around it.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-border/80 pt-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-ink">
            Hear it for yourself
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-ink/70">
            The line above is a real one. Call it and time the answer yourself: that is
            a better test than any number on this page.
          </p>
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-xl bg-coral px-8 py-4 font-heading text-lg font-bold text-ink shadow-md transition-transform hover:scale-105 hover:bg-vest-orange"
          >
            <PhoneCall className="size-5" />
            {SITE_PHONE_NUMBER}
          </a>
        </section>
      </article>
    </div>
  );
}
