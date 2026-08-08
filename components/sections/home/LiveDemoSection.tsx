"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";

export default function LiveDemoSection() {
  const [started, setStarted] = useState(false);

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-coral bg-white p-8 sm:p-12 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Don&apos;t take our word for it.
            <br />
            Talk to the crew yourself.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl mx-auto">
            We&apos;ve set up a live line where you can experience the speed, tone, and
            intelligence of Minions.AI right now.
          </p>
          <Button type="button" onClick={() => setStarted(true)} size="lg" showArrow className="mt-8">
            <PhoneCall className="size-4" />
            Talk to the AI now
          </Button>
          <p className="mt-4 font-mono text-xs text-ink/40">
            Standard call rates may apply. Rex is standing by.
          </p>
          {started && (
            <p className="mt-6 rounded-xl bg-cream px-4 py-3 text-sm text-ink/70 font-mono">
              This is a design preview — the live voice demo connects once our AI provider is
              wired up.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
