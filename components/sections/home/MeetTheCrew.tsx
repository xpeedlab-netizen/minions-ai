"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

type Support = {
  id: string;
  code: string;
  name: string;
  role: string;
  hook: string;
  points: string[];
  stat?: string;
  source?: string;
  src: string;
  roleClass: string;
  /**
   * Renders expanded on load. Exactly one row should carry this: three collapsed rows
   * next to the Rex card show only names and one-line hooks, so a visitor who never taps
   * leaves the band knowing what the crew is CALLED and nothing about what it does. One
   * open row shows the shape of the detail and makes the others legible as "same again".
   */
  defaultOpen?: boolean;
};

/**
 * TRIMMED 2026-09-06. This card ran 817px for 81 words and made the crew the tallest
 * band on the page, because most of it restated the hero almost verbatim: the hero
 * already says "Quotes from your real price list, books onto your calendar" and
 * "mid-route and mid-showing", which were two of Rex's three bullets and the whole of
 * the italic aside. "Picks up in under 3 seconds" is also the Proof band's closing line.
 *
 * What survives is the one claim the hero does NOT make: emergency escalation to a real
 * phone. The pricing list mentions "transfers to a human on request", which is a weaker
 * and different promise, so this is the only place the page says a genuine emergency
 * reaches a person. Check the hero before adding a bullet back here.
 */
const rex = {
  name: "Rex",
  role: "24/7 AI receptionist",
  hook: "Answers on ring one, quotes your pricing, books the job, 24/7.",
  /* One sentence, not a bullet list. A single bullet under a rule reads like the rest
     of the list was deleted, and this is the only claim left that the hero does not
     already make, so it carries more weight as prose than as a lone item. */
  escalation:
    "A true emergency goes straight to your on-call phone. It never sits in a message.",
  src: "/images/mascots/rex.png",
};

const supports: Support[] = [
  {
    id: "zip",
    code: "02 // SAFETY NET",
    name: "Zip",
    role: "Missed-call text back",
    hook: "Catches what a phone line physically can't.",
    points: [
      "Texts back within five seconds when two calls land at once.",
      "Picks up callers who hang up during the greeting.",
      "Covers the channels that never ring: web forms, ad leads, portal inquiries.",
    ],
    src: "/images/mascots/zip.png",
    roleClass: "text-[#c4472a]",
  },
  {
    id: "pip",
    code: "03 // INQUIRY",
    name: "Pip",
    role: "Website chat",
    hook: "Handles every written question, from a stranger at 11pm to a customer asking where the tech is.",
    points: [
      "Answers from your verified business data only, never invents a price or a policy.",
      "Qualifies and books visitors who would never pick up the phone.",
      "Absorbs the routine reschedule and arrival-time questions, so the line stays open for new revenue.",
    ],
    stat: "73% of customers try self-service first. Only 14% get a full answer.",
    source: "Gartner Customer Service & Support consumer study, 2024",
    src: "/images/mascots/pip.png",
    roleClass: "text-teal",
    /* Pip, not Zip or Gia: it is the middle row, so an open panel here sits between two
       closed ones and reads as the pattern rather than as the first row being special.
       It also carries a sourced stat, which is the strongest content in the group. */
    defaultOpen: true,
  },
  {
    id: "gia",
    code: "04 // PIPELINE",
    name: "Gia",
    role: "Follow-up & reviews",
    hook: "Works every quote that didn't close, until they book or say no.",
    points: [
      "Follows up on a real cadence instead of once and never again.",
      "Confirms appointments so they don't quietly evaporate.",
      "Asks for the review after the job, on the profile that drives your next call.",
    ],
    stat: "93% of converted leads were reached within six contact attempts.",
    source: "Velocify, Ultimate Contact Strategy (3.5M lead records), 2013",
    src: "/images/mascots/gia.png",
    roleClass: "text-emerald-700",
  },
];

function Detail({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2.5">
      {points.map((p) => (
        <li
          key={p}
          className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink/80"
        >
          <span
            aria-hidden
            className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-ink/35"
          />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Hover peeks, click decides.
 *
 * Hover ADDS to the click state, it never subtracts: a row opened by clicking stays open
 * when the pointer leaves, so the pointer crossing this stack on its way to another row
 * cannot close what the visitor deliberately opened. Without that rule an accordion in a
 * vertical stack collapses panels under the cursor as you travel past them, which moves
 * the very content you are reaching for.
 *
 * `(hover: hover) and (pointer: fine)` gates it to real pointers. A touch device fires a
 * synthetic mouseenter on tap, so without the gate the first tap would both hover-open
 * and click-toggle the row — opening and instantly closing it. Touch keeps click alone,
 * which is the behaviour it already had.
 */
function useHoverIntent() {
  const [hovered, setHovered] = useState(false);
  /**
   * Resolved in an effect, not during render. Reading matchMedia while rendering gives
   * the server one answer and the client another, which is a hydration mismatch; false
   * on the first paint means the markup agrees and hover simply switches on a tick later.
   */
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return {
    hovered: canHover && hovered,
    bind: canHover
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {},
  };
}

function SupportRow({ m, delay }: { m: Support; delay: number }) {
  const [open, setOpen] = useState(Boolean(m.defaultOpen));
  const { hovered, bind } = useHoverIntent();
  const panelId = `crew-panel-${m.id}`;

  // Union, not a replacement — see useHoverIntent. Clicking still owns the durable state.
  const expanded = open || hovered;

  return (
    <Reveal as="li" delay={delay}>
      <div
        {...bind}
        className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:border-ink/20"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="relative flex w-full items-center gap-4 p-5 text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:-outline-offset-2"
        >
          {/* Small avatar container */}
          <div className="relative size-14 shrink-0 select-none rounded-xl bg-cream/70 p-1">
            <Image
              src={m.src}
              alt=""
              fill
              sizes="56px"
              className="object-contain drop-shadow-[0_6px_12px_rgba(18,36,42,0.12)]"
            />
          </div>

          <div className="min-w-0 flex-1">
            {/*
              flex-wrap + whitespace-nowrap, not the default nowrap row. At 390px the
              row is ~197px wide, and a non-wrapping row squeezed BOTH labels until each
              broke mid-phrase onto two lines ("MISSED-CALL / TEXT BACK" beside
              "02 // SAFETY NET"), leaving the separator dot stranded between two ragged
              columns. Letting the ROW wrap while forbidding a break INSIDE each label
              keeps every label whole and drops the role to its own line when it will not
              fit. The dot hides when they wrap, so it never dangles at a line end.
            */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="whitespace-nowrap font-mono text-[10px] font-bold tracking-wider text-ink/65 uppercase">
                {m.code}
              </span>
              <span aria-hidden className="hidden text-ink/20 sm:inline">
                ·
              </span>
              <p
                className={`whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wider ${m.roleClass}`}
              >
                {m.role}
              </p>
            </div>
            <h3 className="mt-1 font-heading text-lg font-bold tracking-tight text-ink">
              {m.name}
            </h3>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink/75">{m.hook}</p>
          </div>

          <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-cream/50 transition-colors">
            <Plus
              aria-hidden
              className={`size-4 text-ink/70 transition-transform duration-300 ${
                expanded ? "rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <motion.div
          id={panelId}
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          aria-hidden={!expanded}
          className="relative overflow-hidden"
        >
          <div className="border-t border-border bg-cream/25 px-5 pb-5 pt-4">
            <Detail points={m.points} />
            {m.stat && (
              <div className="mt-4 border-l-2 border-teal pl-3.5">
                <p className="text-[0.9375rem] font-medium leading-snug text-ink">
                  {m.stat}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/65">
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
    <Section id="crew" tone="cream" width="wide" className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-2xl">
          <Eyebrow className="mb-5">
            The Crew
          </Eyebrow>
          <SectionHeading className="text-ink">
            A 24/7 AI receptionist, and three more behind it.
          </SectionHeading>
          <SectionLead>
            Rex answers the phone. The other three cover the texts, the website chat and
            the follow-up: the places a phone line can&apos;t reach.
          </SectionLead>
        </div>

        {/* Two columns at lg: Rex on the left, supports stacked on the right */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          <Reveal>
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              {/* Editorial dossier top status strip */}
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                  [ AGENT 01 // INBOUND DISPATCH ]
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PRIMARY CALL AGENT
                </span>
              </div>

              {/* Fixed mascot image */}
              <div className="relative mx-auto aspect-square w-full max-w-[12rem] select-none sm:max-w-[15rem] py-2">
                <Image
                  src={rex.src}
                  alt={`${rex.name}: ${rex.role} 3D mascot`}
                  fill
                  sizes="(max-width: 640px) 192px, 240px"
                  className="object-contain drop-shadow-[0_16px_28px_rgba(18,36,42,0.12)]"
                />
              </div>

              {/* mt-auto/mb-auto, not a plain block. The card stretches to match the
                  three accordion rows beside it, so with the copy trimmed the text sat
                  at the top over ~130px of dead space. Auto margins on both sides centre
                  the block in whatever height the right column dictates, so the card
                  reads as composed rather than as a column with the bottom cut off. */}
              <div className="relative my-auto pt-6">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                  {rex.role}
                </p>
                <h3 className="mt-1.5 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  {rex.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink/80">
                  {rex.hook}
                </p>

                <p className="mt-5 border-t border-border pt-5 text-[0.9375rem] leading-relaxed text-ink/75">
                  {rex.escalation}
                </p>
              </div>
            </article>
          </Reveal>

          <ul className="flex flex-col gap-4 lg:justify-center lg:gap-5">
            {supports.map((m, i) => (
              <SupportRow key={m.id} m={m} delay={0.08 + i * 0.06} />
            ))}
          </ul>
        </div>

        {/* Closing Action Pill */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <div>
              <p className="font-heading text-lg font-bold text-ink">
                All four crew members deploy together.
              </p>
              <p className="mt-1 text-sm text-ink/70">
                One fixed setup, pre-integrated with your calendar and CRM. Zero monthly contract.
              </p>
            </div>
            <Button
              href={BOOKING_CALENDAR_URL}
              track={{ event: "cta_click", params: { location: "crew" } }}
              variant="primary"
              showArrow
              className="shrink-0 w-full sm:w-auto"
            >
              Book 15-Minute Setup Call
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
