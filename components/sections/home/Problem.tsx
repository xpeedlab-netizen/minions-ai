const cards = [
  {
    title: "Calls come in after hours...",
    body: "Emergencies don't wait for 9-to-5. If you're asleep, you're losing money to someone who isn't.",
  },
  {
    title: "One busy Tuesday...",
    body: "Four calls hit at once while you're elbow-deep in a furnace. Three of them just hung up.",
  },
  {
    title: "Answering services stall...",
    body: "Traditional services put callers on hold or take basic notes. AI schedules the job immediately.",
  },
];

export default function Problem() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            The phone doesn&apos;t stop. But you can&apos;t always pick it up.
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            When you&apos;re on a job, the call goes to voicemail. By the time you call back, the
            customer has already hired the guy who answered on the first ring.
          </p>
        </div>
        <ul className="mt-10 grid sm:grid-cols-3 gap-6">
          {cards.map((c) => (
            <li key={c.title} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
              <h3 className="font-heading font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
