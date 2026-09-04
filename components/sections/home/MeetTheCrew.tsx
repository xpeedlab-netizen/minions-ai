"use client";

import { useState } from "react";
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
};

const rex = {
  name: "Rex",
  role: "24/7 AI receptionist",
  hook: "Answers on ring one, quotes your pricing, books the job — 24/7.",
  points: [
    "Picks up in under 3 seconds, day or night, in your company name.",
    "Quotes from your real price list and books straight onto your calendar.",
    "Escalates a true emergency to your on-call phone instead of taking a message.",
  ],
  aside:
    "The operator is on a route. The agent is mid-showing. Rex is the one who is always free.",
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
      "Covers the channels that never ring — web forms, ad leads, portal inquiries.",
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
      "Answers from your verified business data only — never invents a price or a policy.",
      "Qualifies and books visitors who would never pick up the phone.",
      "Absorbs the routine reschedule and arrival-time questions, so the line stays open for new revenue.",
    ],
    stat: "73% of customers try self-service first. Only 14% get a full answer.",
    source: "Gartner Customer Service & Support consumer study, 2024",
    src: "/images/mascots/pip.png",
    roleClass: "text-teal",
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

function SupportRow({ m, delay }: { m: Support; delay: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `crew-panel-${m.id}`;

  return (
    <Reveal as="li" delay={delay}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:border-ink/20">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
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
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold tracking-wider text-ink/40 uppercase">
                {m.code}
              </span>
              <span className="text-ink/20">·</span>
              <p className={`font-mono text-xs font-bold uppercase tracking-wider ${m.roleClass}`}>
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
                open ? "rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <motion.div
          id={panelId}
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          aria-hidden={!open}
          className="relative overflow-hidden"
        >
          <div className="border-t border-border bg-cream/25 px-5 pb-5 pt-4">
            <Detail points={m.points} />
            {m.stat && (
              <div className="mt-4 border-l-2 border-teal pl-3.5">
                <p className="text-[0.9375rem] font-medium leading-snug text-ink">
                  {m.stat}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/60">
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
            the follow-up — the places a phone line can&apos;t reach.
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
                  alt={`${rex.name} — ${rex.role} 3D mascot`}
                  fill
                  sizes="(max-width: 640px) 192px, 240px"
                  className="object-contain drop-shadow-[0_16px_28px_rgba(18,36,42,0.12)]"
                />
              </div>

              <div className="relative mt-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                    {rex.role}
                  </p>
                  <h3 className="mt-1.5 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    {rex.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/80">
                    {rex.hook}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">
                    <Detail points={rex.points} />
                  </div>
                </div>

                <div className="mt-6 border-l-2 border-teal bg-cream/30 p-3 rounded-r-lg">
                  <p className="text-[0.9375rem] italic leading-relaxed text-ink/75">
                    &ldquo;{rex.aside}&rdquo;
                  </p>
                </div>
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
