const prompts = [
  { q: '"What are your hours?"', cta: "Ask this" },
  { q: '"How much for a drain cleaning?"', cta: "Ask this" },
  { q: '"Can I book Thursday morning?"', cta: "Ask this" },
  { q: '"Try to stump it. Go on."', cta: "Push the limits" },
];

export default function LiveDemoPrompts() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-ink p-8 sm:p-10">
          <h3 className="font-heading font-extrabold text-xl text-white">What to try:</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {prompts.map((p) => (
              <div key={p.q} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-sm text-white">{p.q}</p>
                <p className="mt-2 font-mono text-xs text-teal">{p.cta} →</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
