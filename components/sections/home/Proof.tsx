import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    stat: "100x",
    label: "The drop in lead qualification chance if you wait just 30 minutes to call back.",
    source: "— MIT Lead Response Study",
  },
  {
    stat: "78%",
    label: "Of customers buy from the company that responds to their inquiry first.",
    source: "— Lead Connect Research",
  },
  {
    stat: "24/7",
    label: "Availability is the #1 factor in customer satisfaction for home services.",
    source: "— HBR Service Excellence",
  },
];

export default function Proof() {
  return (
    <section className="bg-teal py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance text-center">
          Speed is everything — and the research proves it.
        </h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.stat} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
                <div>
                  <p className="font-mono text-4xl sm:text-5xl font-medium text-white">{s.stat}</p>
                  <p className="mt-3 text-white/80 leading-relaxed">{s.label}</p>
                </div>
                <p className="mt-4 text-sm text-white/50">{s.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
