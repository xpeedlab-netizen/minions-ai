import { ShieldCheck, Wrench, Zap, MessageCircle } from "lucide-react";

const guaranteeTags = [
  { icon: Wrench, label: "Rex" },
  { icon: Zap, label: "Zip" },
  { icon: MessageCircle, label: "Pip" },
];

export default function AboutHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-teal/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-teal">
            The Mission
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            Two people. One promise: you&apos;ll never lose a job to a missed call again.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            We aren&apos;t a massive agency with thousands of employees. We&apos;re two automation
            experts who believe blue-collar businesses deserve the same high-tech leverage as
            Silicon Valley startups.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal text-white">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <h2 className="font-heading font-bold text-ink text-lg">The Reliability Guarantee</h2>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                &quot;Automation doesn&apos;t work if it breaks when you need it most. Our agents
                are built with the same industrial logic you use to fix a leaking pipe or a broken
                AC.&quot;
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {guaranteeTags.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-cream px-3 py-1.5 font-mono text-xs text-ink/70"
              >
                <t.icon className="size-3.5 text-teal" />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
