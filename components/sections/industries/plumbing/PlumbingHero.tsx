import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PlumbingHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-coral/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-coral-text">
            24/7 Emergency Dispatch
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-teal-dark text-4xl sm:text-5xl leading-[1.1] text-balance">
            For Plumbing companies: catch every{" "}
            <span className="text-coral-text">&quot;my basement is flooding&quot;</span> call —
            even at <span className="text-coral-text">2 AM.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When a pipe bursts at midnight, they call the first plumber who answers. Rex ensures
            that&apos;s you — 24/7, catching the emergency leads while you sleep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Hear it handle a plumbing call
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              View ROI Audit
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-md mx-auto w-full rounded-3xl bg-white border border-border overflow-hidden shadow-sm">
            <Image
              src="/images/plumbing-hero-bg.jpg"
              alt="Minions.AI crew member monitoring the plumbing dispatch dashboard"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-2 sm:translate-x-0 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
              <Phone className="size-4" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-ink/50">
                Live status
              </p>
              <p className="text-sm font-heading font-bold text-ink">
                Rex is handling 4 active calls
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
