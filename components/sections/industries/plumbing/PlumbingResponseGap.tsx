const bars = [
  { label: "Minions.AI Speed", value: "Instant", width: "5%", color: "bg-success" },
  { label: "Traditional Dispatch", value: "Delayed", width: "85%", color: "bg-teal" },
];

export default function PlumbingResponseGap() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white text-balance">
            The Response Gap
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            {/* "landmark" removed and "conversion" corrected to "reach" on 2026-09-05:
                the MIT/InsideSales finding is about CONTACT rate — how often you get the
                person on the phone — not about closing. The study is also 2007 and
                vendor-commissioned, so the year is now stated rather than hidden. See
                the sourcing note on PROOF_STATS in lib/data/site-content.ts. */}
            An MIT/InsideSales study found that responding in 5 minutes rather than 30
            makes you far likelier to reach the lead at all.
          </p>
          <p className="mt-3 font-mono text-xs text-white/40">
            MIT / InsideSales Lead Response Study, 2007
          </p>
          <div className="mt-8 space-y-5">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wide text-white/50">
                  <span>{b.label}</span>
                  <span className="text-white font-bold">{b.value}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className={`h-2 rounded-full ${b.color}`} style={{ width: b.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 sm:p-8">
          <h3 className="font-heading font-bold text-lg text-ink">Why it matters for Plumbers</h3>
          <p className="mt-3 text-ink/70 leading-relaxed">
            In an emergency, the customer is in a panic. If they hit a voicemail, they hang
            up and click the next Google ad. We capture them before they leave your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
