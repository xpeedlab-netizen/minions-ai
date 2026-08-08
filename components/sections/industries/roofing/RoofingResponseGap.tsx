export default function RoofingResponseGap() {
  return (
    <section className="bg-teal py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
          The 100x Response Gap
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-8 max-w-lg mx-auto items-stretch">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-white/50">
              Average Roofing Co.
            </p>
            <p className="mt-2 font-heading font-extrabold text-3xl text-white/70">24+ Hours</p>
          </div>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-coral bg-coral/10 p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-coral">Minions.AI Powered</p>
            <p className="mt-2 font-heading font-extrabold text-3xl text-white">8 Seconds</p>
          </div>
        </div>

        <p className="mt-8 text-white/70 leading-relaxed max-w-xl mx-auto">
          Homeowners call 3-5 roofers after a storm. The one who answers first wins the contract
          78% of the time. We make sure that&apos;s you.
        </p>
      </div>
    </section>
  );
}
