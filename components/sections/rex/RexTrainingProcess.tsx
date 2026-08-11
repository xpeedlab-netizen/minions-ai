const steps = [
  {
    n: "1",
    title: "Knowledge Download",
    body: "We ingest your pricing, service areas, and common troubleshooting tips from your website and documents.",
  },
  {
    n: "2",
    title: "Voice Setup",
    body: 'Select Rex\'s tone: from "Expert Professional" to "Friendly Neighbor," ensuring he matches your business brand.',
  },
  {
    n: "3",
    title: "Listening & Approval",
    body: 'We run test calls for you to review. You only "go live" when you are 100% satisfied with how Rex sounds on your line.',
  },
];

export default function RexTrainingProcess() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            How we train Rex for <em>your</em> business
          </h2>
          <p className="mt-4 text-ink/60 max-w-md">
            We don&apos;t just give you a generic bot. We build a customized setup tailored to your services.
          </p>
          <ol className="mt-8 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal font-heading font-bold text-white text-sm">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink/60 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl bg-ink p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-wide text-cream/50">
              Sample Training Log
            </p>
            <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] text-cream/70">
              Example — not live data
            </span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl rounded-tl-sm bg-white/5 border border-white/10 p-3 text-sm text-cream/80">
              Rex: &ldquo;Thank you for calling. This is Rex. Are you calling for a repair or a new estimate?&rdquo;
            </div>
            <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-teal/20 border border-teal/30 p-3 text-sm text-cream/90">
              &ldquo;My sink is overflowing right now!&rdquo;
            </div>
            <div className="rounded-xl rounded-tl-sm bg-white/5 border border-white/10 p-3 text-sm text-cream/80">
              Rex: &ldquo;I understand this is urgent. I can gather your location and have our emergency slot scheduled. May I get your address?&rdquo;
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="flex items-center gap-1.5 font-mono text-xs text-success">
              <span className="size-1.5 rounded-full bg-success" />
              Workflow Ready
            </span>
            <span className="font-mono text-xs text-cream/60">Reviewed Before Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
