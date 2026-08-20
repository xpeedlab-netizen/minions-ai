import { CheckCircle2 } from "lucide-react";

const report = [
  "Perfect English proficiency across the team.",
  "Overlap with US Central Time for live calls.",
  "Enterprise-grade data security & privacy.",
];

export default function AboutOffshore() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-ink p-10 sm:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white text-balance">
              Straight talk about offshore.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              We are based in Dhaka, Bangladesh. We know that can sometimes raise eyebrows. But
              here is the reality: being offshore allows us to provide 24/7 dedicated support and
              world-class AI engineering at a fraction of the cost of a US agency.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              We don&apos;t want you to take our word for it. We&apos;ll prove it with a{" "}
              <strong className="text-white font-bold">Free Custom Demo</strong> built specifically
              for your business before you ever pay us a dime.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 className="size-5" />
              <span className="font-mono text-xs uppercase tracking-wide">
                Transparency Report
              </span>
            </div>
            <ul className="mt-5 space-y-4">
              {report.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-sm font-bold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
