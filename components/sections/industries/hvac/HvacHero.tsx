import Image from "next/image";
import { Zap } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HvacHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-success">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Live for Peak Season
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            For HVAC companies: catch every &quot;my AC just died&quot; call —{" "}
            <span className="text-teal">even at 11pm.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When it&apos;s 98° and someone&apos;s AC quits, they call three companies and hire
            whoever answers first. Rex makes sure that&apos;s you — 24/7, including the week your
            phone won&apos;t stop ringing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Hear it handle an HVAC call
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm pb-10 pr-6">
          <div className="absolute bottom-0 right-0 w-56 rotate-2 rounded-2xl border border-border bg-white p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal">
                <Zap className="size-4" fill="currentColor" />
              </span>
              <div className="min-w-0">
                <p className="font-heading font-bold text-ink text-sm">Zip</p>
                <p className="font-mono text-[9px] uppercase tracking-wide text-ink/40">
                  Response Agent
                </p>
              </div>
            </div>
            <p className="mt-3 rounded-lg bg-cream px-3 py-2 text-xs text-ink/70 leading-relaxed">
              &quot;Sent text to 555-0192: On it! Tech arriving in 20 min.&quot;
            </p>
          </div>

          <div className="relative -rotate-1 rounded-2xl border border-border bg-white p-6 shadow-lg">
            <div className="relative mx-auto size-16 overflow-hidden rounded-full border border-border">
              <Image
                src="/images/hvac-rex-avatar.jpg"
                alt="Rex, the Minions.AI HVAC dispatcher"
                fill
                priority
                className="object-cover"
                sizes="64px"
              />
            </div>
            <p className="mt-3 text-center font-heading font-bold text-ink">Rex</p>
            <p className="text-center font-mono text-[10px] uppercase tracking-wide text-teal">
              Chief Dispatcher
            </p>
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              <span className="font-mono text-[10px] text-success">Dispatch Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
