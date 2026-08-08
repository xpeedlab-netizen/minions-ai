import { TrendingUp } from "lucide-react";

export default function ElectricalResponseGap() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-8 sm:p-10 grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink text-balance">
              The 100x Response Gap
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              According to MIT research, you are 100x more likely to reach a lead if you respond
              within 5 minutes.
            </p>
            <p className="mt-3 text-ink/70 leading-relaxed">
              In the electrical world, &ldquo;later&rdquo; means the customer has already called
              the next guy on Google. Rex bridges the gap by answering instantly, every single
              time.
            </p>
            <p className="mt-4 flex items-center gap-2 font-heading font-bold text-success">
              <TrendingUp className="size-4" />
              100x Better Conversion
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-cream p-5 space-y-5">
            <div>
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wide">
                <span className="text-ink/50">With Minions.AI (Rex)</span>
                <span className="text-success font-bold">5 Seconds</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-border overflow-hidden">
                <div className="h-full w-[2%] rounded-full bg-success" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wide">
                <span className="text-ink/50">Typical Response Time</span>
                <span className="text-coral-text font-bold">45 Minutes</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-border overflow-hidden">
                <div className="h-full w-[85%] rounded-full bg-coral" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
