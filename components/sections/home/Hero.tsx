import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  BOOKING_CALENDAR_URL,
  SITE_PHONE_NUMBER,
  SITE_PHONE_TEL,
} from "@/lib/data/placeholders";
import { TRUST_BAR_TEXT } from "@/lib/data/site-content";

/**
 * Hero — band 01 of the landing brief.
 *
 * COPY. The headline was "Stop Sending $5,000 Calls to Voicemail." Two problems: the
 * $5,000 is a number we cannot source, and it opens on fear rather than on the outcome.
 * The buyer is an owner in their late fifties or sixties who says software is essential
 * (66%) and still won't invest in it (20%).
 *
 * THAT ARGUMENT PUT "AI receptionist" IN THE SUBHEAD AND KEPT IT OUT OF THE H1 — the
 * reading being that this buyer is persuaded by the phone being answered, not by the
 * technology. THE OWNER REVERSED THAT ON 2026-08-29: the H1 now names the thing outright.
 * The outcome ("answers every call, 24/7") still closes the line, so the headline promises
 * the result and identifies the product in one breath, and the search term is now in the
 * page's most weighted element rather than one line below it. Do not quietly move it back
 * to the subhead — that is a decision the owner has already made twice.
 *
 * SECONDARY ACTION. Was "See pricing plans", which sent the visitor away from the one
 * action this page exists for. It is now the live demo number as a real `tel:` link at
 * 18px — the only proof we have with no customers, and this buyer will actually dial it.
 * Booking stays primary: a demo caller who never books is a lost contact.
 *
 * ATMOSPHERE REMOVED. The 64px masked grid and the teal bloom both went. They were the
 * generic AI-site treatment, they cost reading clarity, and the brief's floor is calm
 * and legible over distinctive. Flat cream is the differentiated choice in a category
 * where every competitor ships a dark ground with a glow.
 *
 * The `DEMO_VIDEO_ID` branch that used to route the primary button to /live-demo is
 * gone: the constant is empty, so the branch never rendered, and the brief fixes booking
 * as the primary action regardless.
 */
export default function Hero() {
  return (
    <section className="bg-cream pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.06em] text-ink/70">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-success animate-breathe"
              />
              For pest control &amp; real estate owners
            </span>

            {/*
              TOPS OUT AT 6xl, NOT 7xl. The headline went from 25 characters to 45 when it
              took on "AI receptionist", and at 72px in this column (549px at 1536) that
              set FOUR lines: the left column measured 624px against the hero image's
              603px, so the text was driving the row height instead of the image, and the
              primary CTA was pushed 72px further down the page. One step down sets three
              lines, puts the column back inside the image's height, and matches the top
              step PartnersHero already uses. Do not restore lg:text-7xl without either
              shortening the headline or widening this column.
            */}
            <h1 className="mt-6 type-display text-5xl leading-[0.98] tracking-[-0.005em] text-balance text-ink sm:text-6xl">
              Your AI receptionist answers every call, 24/7.
            </h1>

            {/* Trimmed once the H1 took on "AI receptionist": this no longer has to
                introduce the thing, so it opens on the behaviour instead. Both markets
                stay named — "mid-route" is the pest control tech, "mid-showing" the agent
                (invariants.md #3) — and "you keep your number" stays last because it is
                the objection this buyer raises first. */}
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-[1.6] text-ink/75 sm:text-lg">
              Answers on the first ring at 2 AM, on weekends, mid-route and mid-showing —
              quotes from your real price list, books onto your calendar, and you keep your
              number.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow>
                Book a 15-minute call
              </Button>
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="group inline-flex min-h-[44px] items-center gap-2.5 text-lg font-semibold text-teal underline decoration-teal/30 decoration-2 underline-offset-4 transition-colors hover:decoration-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-4"
              >
                <Phone aria-hidden className="size-5 shrink-0" />
                {SITE_PHONE_NUMBER}
              </a>
            </div>

            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">
              Call it now and hear it answer. No form, no signup.
            </p>
          </div>

          {/*
            The hero visual is the pain illustration rather than the live-call
            transcript widget. The widget demonstrated the product working, which is
            real proof, but it asked the visitor to *read a simulation* at the moment
            they should be recognising their own problem. The collage lands the
            recognition instantly. HeroAnimation is still in the repo if this needs
            reverting.

            v2 (2026-08-29) FIXED THE TRADE, THE ATTIRE AND THE AGE. v1 showed a plumber
            under a kitchen sink in an untucked plaid flannel shirt, aged about thirty.
            Three problems in the page's largest image: plumbing is neither co-primary
            market (invariants.md #3 names pest control and real estate, and pest control
            appeared nowhere in the homepage imagery), flannel reads handyman rather than
            an established service company, and the buyer is an owner in their late
            fifties to sixties. Attire was taken from how the category actually presents
            itself — ServiceTitan's own photography is uniformed techs in solid tucked
            work shirts with embroidered chest logos, work belts and caps — so this is a
            pest control owner of about 60 in that uniform, with the chest patch left
            blank rather than inventing a logo.

            KNOWN AND ACCEPTED: the phone in the foreground is composited rather than
            photographed in place — it overlaps the torn edge, is oversized for its
            position on the ground plane, casts no contact shadow, and is rendered
            crisper than the surrounding halftone. This was raised with the owner and
            deliberately kept: the phone is the message and it is unmissable. Do not
            "fix" it unprompted.
          */}
          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/illustrations/hero-missed-call-v2.webp"
                alt="A pest control business owner in company uniform crouched at the foundation of a house, both hands on his sprayer, while his phone lies ringing unanswered in the grass beside him"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/*
          The trust line, pulled up out of its own separate ink band and set as a hairline
          rule inside the hero. It used to be a standalone full-width section immediately
          under the fold — a hard dark bar that cut the page in two before the visitor had
          finished reading the headline.
        */}
        <div className="mt-14 border-t border-ink/10 pt-6">
          <p className="mx-auto max-w-4xl text-balance text-center font-mono text-xs uppercase leading-[1.7] tracking-[0.1em] text-ink/75 sm:text-[0.8125rem]">
            {TRUST_BAR_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
}
