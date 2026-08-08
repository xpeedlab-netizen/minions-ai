const stats = [
  { value: "92%", label: "Lead Response Rate" },
  { value: "4.9", label: "Avg Review Score" },
  { value: "12hr", label: "Time Saved Weekly" },
  { value: "3x", label: "Appt. Show Rates" },
];

export default function GiaStats() {
  return (
    <section className="bg-[#E8E1DA] py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-mono text-3xl font-medium text-ink">{s.value}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
