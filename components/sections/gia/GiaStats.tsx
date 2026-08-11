const items = [
  { value: "24/7", label: "Automated Follow-ups" },
  { value: "Google", label: "Calendar Syncing" },
  { value: "100%", label: "Done-For-You Setup" },
  { value: "0", label: "Long-Term Lock-in" },
];

export default function GiaStats() {
  return (
    <section className="bg-[#E8E1DA] py-10 border-y border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {items.map((s) => (
          <div key={s.label}>
            <p className="font-mono text-3xl font-medium text-ink">{s.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
