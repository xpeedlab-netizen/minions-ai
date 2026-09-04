import Image from "next/image";
import { Phone, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function HiwProcessGrid() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Step 1 */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-white p-6">
              <Phone className="absolute -top-2 -right-2 size-24 text-ink/5" />
              <div className="relative flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-full bg-teal font-heading font-bold text-white text-sm">
                  1
                </span>
                <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs text-ink/65">WEEK 1</span>
              </div>
              <h3 className="relative mt-4 font-heading font-bold text-xl text-ink">
                Discovery call (15 minutes)
              </h3>
              <p className="relative mt-2 text-sm text-ink/65 leading-relaxed">
                You tell us how your business actually runs. We tell you honestly whether we can
                help. If we can&apos;t, we&apos;ll say so.
              </p>
              <div className="relative mt-5 flex items-center gap-3 rounded-xl bg-cream p-3">
                <div className="relative size-9 shrink-0 overflow-hidden rounded-full border border-border bg-teal/10 p-0.5">
                  <Image src="/images/mascots/rex.png" alt="Rex" fill className="object-contain" />
                </div>
                <p className="text-sm text-ink/70 italic">
                  &ldquo;No fluff. Just checking if our crew fits your shop.&rdquo; — Rex
                </p>
              </div>
            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-full bg-teal font-heading font-bold text-white text-sm">
                  2
                </span>
                <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs text-ink/65">WEEK 2</span>
              </div>
              <h3 className="mt-4 font-heading font-bold text-xl text-ink">
                We build and train your crew.
              </h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                We load in your services, prices, service area, hours and FAQs, then connect your
                calendar and CRM.
              </p>
              <div className="mt-5 flex gap-3">
                <span className="rounded-lg bg-cream px-3 py-2 font-mono text-xs text-ink/65">CALENDAR</span>
                <span className="rounded-lg bg-cream px-3 py-2 font-mono text-xs text-ink/65">CRM LINK</span>
              </div>
            </div>
          </Reveal>

          {/* Step 3 */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-full bg-teal font-heading font-bold text-white text-sm">
                  3
                </span>
                <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs text-ink/65">WEEK 3</span>
              </div>
              <h3 className="mt-4 font-heading font-bold text-xl text-ink">You listen and approve.</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                You hear real test calls. You tell us what&apos;s wrong. We fix it. Nothing goes
                live without your sign-off.
              </p>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-cream p-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Play className="size-3.5" fill="currentColor" />
                </span>
                <div className="h-1.5 flex-1 rounded-full bg-border overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-teal" />
                </div>
                <span className="font-mono text-xs text-ink/65">0:45</span>
              </div>
            </div>
          </Reveal>

          {/* Step 4 */}
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl bg-teal p-6">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-full bg-teal font-heading font-bold text-ink text-sm">
                  4
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white/70">WEEK 4</span>
              </div>
              <h3 className="mt-4 font-heading font-bold text-xl text-white">Go live.</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                You forward your calls — a two-minute step we walk you through — and your crew
                starts working. We keep tuning it for 30 days as real calls come in, included.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["/images/mascots/rex.png", "/images/mascots/zip.png", "/images/mascots/pip.png"].map((img) => (
                    <div key={img} className="relative size-8 overflow-hidden rounded-full border-2 border-teal bg-white p-0.5">
                      <Image src={img} alt="" fill className="object-contain" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/70">Your full crew is now on duty.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
