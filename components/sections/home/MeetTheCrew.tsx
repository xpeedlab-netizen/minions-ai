"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * The crew showcase — one hero plus three supports.
 *
 * ARCHETYPE HISTORY. Five full-bleed split panels → an asymmetric 3/3/2/2/2 card grid →
 * an equal-cell rail → this. The rail was right to kill the old grid (five square
 * mascots rendered at two different sizes read as a broken row, and the 3/3/2/2/2 split
 * implied Rex and Zip mattered more with no stated reason). But it over-corrected: four
 * interchangeable cells told the visitor nothing about where to look, and it was a lie
 * about the product.
 *
 * The owner interview (2026-08-29) settled what the product actually is: REX IS THE
 * PRODUCT and the other three exist because Rex has physical limits. Zip is the safety
 * net under Rex — the second simultaneous caller, the hang-up, the channels that never
 * ring. Pip owns everything written, before and after the sale. Gia works the quotes
 * that didn't close. That is a hierarchy, so the layout is one now.
 *
 * WHY THIS DOESN'T REPEAT THE BROKEN ROW. The earlier failure was the SAME object
 * rendered at two sizes. Rex's mascot is deliberately large and centred in a tall cell;
 * the three supports are horizontal rows with a small avatar. They aren't the same
 * object at different scales, so the size difference reads as hierarchy rather than as
 * a sizing mistake. Mobile stacks to exactly the same reading order.
 *
 * EXPAND IN PLACE, NOT LINKS. The cards no longer navigate — the detail opens inline so
 * the visitor stays on the page through to the final CTA. KNOWN TRADE-OFF, accepted by
 * the owner: /ai-voice-agent, /speed-to-lead, /customer-support-ai and /crm-automation
 * now receive internal links only from the services nav and the footer. If those pages
 * lose search visibility, this is the change to look at first.
 *
 * Rex is the one card that does NOT collapse. Its detail is always open: collapsing the
 * hero leaves a large empty cell, and the hero's job is to be the thing you read.
 *
 * Otto (Back Office) was removed from this section on 2026-08-29. He still ships on
 * /back-office-automation, in the services nav, in lib/data/crew.ts (the About strip)
 * and in the industry crew bentos — this was a homepage editorial cut, not a product
 * removal. The heading spells the count in words, so it must be hand-edited whenever
 * this array changes.
 *
 * TONE: this band owns the page's second INK slot. The mascots are rendered with rim
 * lighting and drop shadows and have always looked better on dark.
 *
 * Colors are static class strings per member rather than interpolated, because Tailwind
 * only sees classes that appear literally in the source.
 */

type Support = {
  id: string;
  name: string;
  role: string;
  hook: string;
  points: string[];
  /** Optional sourced figure. Carries its year, like the Proof band's citations. */
  stat?: string;
  source?: string;
  /** Mascot PNGs are fixed brand assets — see .claude/invariants.md #1. */
  src: string;
  roleClass: string;
  glowClass: string;
};

/*
 * Card hooks are market-NEUTRAL and the detail names both co-primary markets
 * (invariants.md #3). Naming "a route" and "a showing" in every hook made each line
 * read as a list of two examples; at a glance nobody should feel excluded, and the
 * specificity is there the moment they open a card.
 */
const rex = {
  name: "Rex",
  role: "24/7 Voice",
  hook: "Answers on ring one, quotes your pricing, books the job — 24/7.",
  points: [
    "Picks up in under 3 seconds, day or night, in your company name.",
    "Quotes from your real price list and books straight onto your calendar.",
    "Escalates a true emergency to your on-call phone instead of taking a message.",
  ],
  /* No citation here on purpose. The MIT/InsideSales and HBR speed-to-lead figures are
     already the entire Proof band two sections up; a third run at the same argument
     reads as padding. */
  aside:
    "The operator is on a route. The agent is mid-showing. Rex is the one who is always free.",
  src: "/images/mascots/rex.png",
};

const supports: Support[] = [
  {
    id: "zip",
    name: "Zip",
    role: "Speed-to-Lead",
    hook: "Catches what a phone line physically can't.",
    points: [
      "Texts back within five seconds when two calls land at once.",
      "Picks up callers who hang up during the greeting.",
      "Covers the channels that never ring — web forms, ad leads, portal inquiries.",
    ],
    src: "/images/mascots/zip.png",
    roleClass: "text-crew-zip",
    glowClass: "bg-crew-zip/20",
  },
  {
    id: "pip",
    name: "Pip",
    role: "Support Chat",
    hook: "Handles every written question, from a stranger at 11pm to a customer asking where the tech is.",
    points: [
      "Answers from your verified business data only — never invents a price or a policy.",
      "Qualifies and books visitors who would never pick up the phone.",
      "Absorbs the routine reschedule and arrival-time questions, so the line stays open for new revenue.",
    ],
    /* Gartner's headline finding is that self-service FAILS — quoted flat it argues
       against Pip. The pairing is the honest version: people reach for it first and
       mostly don't get an answer, because 43% can't find relevant content. Grounding
       Pip in verified business data is the fix for exactly that failure. */
    stat: "73% of customers try self-service first. Only 14% get a full answer.",
    source: "Gartner Customer Service & Support consumer study, 2024",
    src: "/images/mascots/pip.png",
    roleClass: "text-crew-pip",
    glowClass: "bg-crew-pip/20",
  },
  {
    id: "gia",
    name: "Gia",
    role: "CRM & Follow-ups",
    hook: "Works every quote that didn't close, until they book or say no.",
    points: [
      "Follows up on a real cadence instead of once and never again.",
      "Confirms appointments so they don't quietly evaporate.",
      "Asks for the review after the job, on the profile that drives your next call.",
    ],
    /* NOT the ubiquitous "80% of sales need five follow-ups". Sales & Marketing
       Executives International traced that one to a 1942 survey of fewer than 40 people
       about wartime door-to-door calls, with no published methodology; Marketing Donut
       has since pulled its version. Velocify's figure comes from 3.5M lead records. The
       year ships with the citation because the study is old. */
    stat: "93% of converted leads were reached within six contact attempts.",
    source: "Velocify, Ultimate Contact Strategy (3.5M lead records), 2013",
    src: "/images/mascots/gia.png",
    roleClass: "text-crew-gia",
    glowClass: "bg-crew-gia/20",
  },
];

function Detail({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2.5">
      {points.map((p) => (
        <li
          key={p}
          className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-white/70"
        >
          <span
            aria-hidden
            className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-white/40"
          />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function SupportRow({ m, delay }: { m: Support; delay: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `crew-panel-${m.id}`;

  return (
    <Reveal as="li" delay={delay}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-white/20">
        <div
          aria-hidden
          className={`pointer-events-none absolute -left-8 -top-10 size-32 rounded-full blur-3xl ${m.glowClass}`}
        />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="relative flex w-full items-center gap-4 p-5 text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:-outline-offset-2"
        >
          {/* Small avatar, not a scaled-down copy of the hero treatment — see the
              "broken row" note in the header comment. */}
          <div className="relative size-14 shrink-0 select-none">
            <Image
              src={m.src}
              alt=""
              fill
              sizes="56px"
              className="object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p
              className={`font-mono text-[0.625rem] font-bold uppercase tracking-wider ${m.roleClass}`}
            >
              {m.role}
            </p>
            <h3 className="mt-1 font-heading text-lg font-bold tracking-[-0.01em] text-white">
              {m.name}
            </h3>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-white/60">{m.hook}</p>
          </div>

          <Plus
            aria-hidden
            className={`size-5 shrink-0 text-white/40 transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>

        {/* Rendered ALWAYS and collapsed by height, never conditionally mounted. These
            cards no longer link to the service pages, so this panel IS the only place
            the bullets and the two citations exist — mounting them on click would keep
            the section's entire substance out of the server HTML and therefore out of
            the index. `aria-hidden` keeps a screen reader from reading collapsed rows;
            the button's `aria-expanded` carries the state. */}
        <motion.div
          id={panelId}
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          aria-hidden={!open}
          className="relative overflow-hidden"
        >
          <div className="border-t border-white/10 px-5 pb-5 pt-4">
            <Detail points={m.points} />
            {m.stat && (
              <div className="mt-4 border-l-2 border-white/20 pl-3.5">
                <p className="text-[0.8125rem] font-medium leading-snug text-white">
                  {m.stat}
                </p>
                <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-wide text-white/40">
                  {m.source}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

export default function MeetTheCrew() {
  return (
    <Section id="crew" tone="ink" width="wide" className="relative overflow-hidden">
      {/* Depth, matching the treatment on the teal Proof band so the page's two dark
          bands share one atmosphere rather than being flat rectangles. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="relative z-10">
        <div className="max-w-2xl">
          <Eyebrow tone="dark" className="mb-5">
            Your Digital Front Office
          </Eyebrow>
          <SectionHeading className="text-white">
            Four specialists. One front desk.
          </SectionHeading>
          <SectionLead tone="dark">
            Rex answers the phone. The other three cover everything a phone line
            can&apos;t reach.
          </SectionLead>
        </div>

        {/* Two columns at lg: the hero holds the left, the three supports stack down the
            right. Below lg the same grid collapses to one column, which puts Rex
            full-width above three stacked rows — the intended mobile order, with no
            sideways scroll and no orphan cell. */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 left-1/2 size-64 -translate-x-1/2 rounded-full bg-teal/25 blur-3xl"
              />

              {/* Deliberately much larger than the support avatars. A small difference
                  would read as a mistake; this reads as the hero.

                  Capped below sm for the same reason the HowItWorks portrait is: at
                  240px inside a 358px phone card, the mascot pushed Rex's actual copy
                  most of a screen down. The hierarchy only has to survive next to the
                  56px support avatars, and 176px still does that by a factor of three. */}
              <div className="relative mx-auto aspect-square w-full max-w-[11rem] select-none sm:max-w-[15rem]">
                <Image
                  src={rex.src}
                  alt={`${rex.name} — ${rex.role} 3D mascot`}
                  fill
                  sizes="(max-width: 640px) 176px, 240px"
                  className="object-contain drop-shadow-[0_20px_32px_rgba(0,0,0,0.4)]"
                />
              </div>

              <div className="relative mt-6">
                <p className="font-mono text-[0.625rem] font-bold uppercase tracking-wider text-teal">
                  {rex.role}
                </p>
                <h3 className="mt-1.5 font-heading text-2xl font-bold tracking-[-0.01em] text-white">
                  {rex.name}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/75">
                  {rex.hook}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <Detail points={rex.points} />
                </div>

                <p className="mt-5 text-[0.8125rem] italic leading-relaxed text-white/45">
                  {rex.aside}
                </p>
              </div>
            </article>
          </Reveal>

          <ul className="flex flex-col gap-4 lg:gap-6">
            {supports.map((m, i) => (
              <SupportRow key={m.id} m={m} delay={0.08 + i * 0.06} />
            ))}
          </ul>
        </div>

        {/* The band had no next step: a heading, four outbound links, then the
            Industries table. This is the one action. */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
              Book a 15-minute call
            </Button>
            <p className="text-sm leading-relaxed text-white/55">
              Not sure which ones you need? We&apos;ll scope it on the call.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
