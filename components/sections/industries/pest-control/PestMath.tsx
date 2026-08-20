export default function PestMath() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white text-balance text-center">
          The Math of Missing Calls
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="border-l-4 border-teal pl-6">
            <p className="font-heading font-extrabold text-6xl text-teal">100x</p>
            <p className="mt-3 text-white/70 leading-relaxed max-w-sm">
              The difference in contact rates when you respond in 5 minutes vs 30 minutes.
            </p>
            <p className="mt-3 font-mono text-xs italic text-white/40">
              — Verified MIT / InsideSales Study
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-teal-dark p-6 sm:p-8">
            <p className="text-white/90 leading-relaxed text-lg">
              Don&apos;t lose your weekend wasp calls to the &quot;next guy&quot; on Google. Zip texts them back instantly, booking the job while you sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
