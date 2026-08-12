const cards = [
  {
    title: "High-Margin 2 AM Emergencies",
    body: "Emergency service calls carry your highest profit margins. If you don't answer immediately, callers keep moving down Google Search until someone picks up.",
  },
  {
    title: "Peak-Hour Call Overlap",
    body: "Four calls hit simultaneously while you're covered in grease or wiring. Voicemail takes a message—your competitor takes the revenue.",
  },
  {
    title: "Call Centers Fall Short",
    body: "Traditional answering services put callers on hold, charge per minute, and read generic scripts. Rex quotes exact pricing and books jobs on the spot.",
  },
];

export default function Problem() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            85% of Callers Who Hit Voicemail Hire Your Competitor Next.
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            When your hands are tied on a job site, unanswered calls mean lost business. By the time you finally check voicemail, the customer has already booked with the shop that answered on the first ring.
          </p>
        </div>
        <ul className="mt-10 grid sm:grid-cols-3 gap-6">
          {cards.map((c) => (
            <li key={c.title} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-teal/40 transition-colors">
              <h3 className="font-heading font-bold text-ink text-lg">{c.title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
