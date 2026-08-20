const steps = [
  {
    n: "1",
    title: "Custom Knowledge Ingestion",
    body: "We train Rex on your exact service pricing, diagnostic fees, service zip codes, and business rules.",
  },
  {
    n: "2",
    title: "Voice Tone & Test Calls",
    body: "We configure Rex's voice cadence and test call flows. You review and sign off before launch.",
  },
  {
    n: "3",
    title: "2-Minute Call Forwarding",
    body: "Keep your existing business number. Dial a quick call-forwarding code, and Rex begins answering 24/7.",
  },
];

export default function RexTrainingProcess() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold mb-3">
            Zero-Hassle Onboarding
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
            100% Done-For-You Setup in 3 Steps
          </h2>
          <p className="mt-3 text-ink/70 max-w-md text-base leading-relaxed">
            We handle the technical setup, knowledge base programming, and calendar integration in 7 days.
          </p>
          <ol className="mt-8 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal font-heading font-bold text-white text-sm shadow-sm">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-ink text-lg">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink/70 leading-relaxed font-medium">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl bg-ink p-6 sm:p-8 shadow-xl text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="font-mono text-xs uppercase tracking-wide text-teal font-bold">
              Live Call Audit Preview
            </p>
            <span className="rounded-md bg-teal/20 px-2.5 py-1 font-mono text-[10px] text-teal border border-teal/30 font-bold">
              Verified Pricing Rules
            </span>
          </div>
          
          <div className="mt-6 space-y-3">
            <div className="rounded-xl rounded-tl-sm bg-white/5 border border-white/10 p-3.5 text-sm text-cream/90">
              <span className="text-teal font-mono text-xs block font-bold mb-1">Rex (AI Voice Agent):</span>
              &ldquo;Thanks for calling Metro HVAC! This is Rex. Are you experiencing an emergency breakdown or looking to schedule a routine tune-up?&rdquo;
            </div>
            <div className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm bg-teal/20 border border-teal/30 p-3.5 text-sm text-cream">
              <span className="text-cream/60 font-mono text-xs block font-bold mb-1">Caller:</span>
              &ldquo;Our AC stopped cooling and it&apos;s 90 degrees inside. What is your diagnostic fee?&rdquo;
            </div>
            <div className="rounded-xl rounded-tl-sm bg-white/5 border border-white/10 p-3.5 text-sm text-cream/90">
              <span className="text-teal font-mono text-xs block font-bold mb-1">Rex (AI Voice Agent):</span>
              &ldquo;Our diagnostic fee is $89, which is applied directly to your repair total if you approve service. I have an open slot today at 4:00 PM. Shall I reserve that for you?&rdquo;
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="flex items-center gap-2 font-mono text-xs text-teal font-bold">
              <span className="size-2 rounded-full bg-teal animate-pulse" />
              Calendar Booking Confirmed
            </span>
            <span className="font-mono text-xs text-cream/60">100% Approved by Owner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
