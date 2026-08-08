const items = ["Live in about a week", "Month-to-month", "You forward calls, we do the rest"];

export default function TrustStrip() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-cream/70">
            {i > 0 && <span className="hidden sm:inline text-cream/30">|</span>}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
