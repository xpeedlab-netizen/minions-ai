import { CheckCircle2 } from "lucide-react";

const checklist = [
  "Manual setup handled by us",
  "Daily tuning and optimizations",
  "Zero-headache CRM integration",
];

export default function HiwReassurance() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-ink p-10 sm:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white text-balance">
              You never have to touch a dashboard unless you want to.
            </h2>
            <p className="mt-4 text-cream/60 leading-relaxed max-w-md">
              We run it. You get the jobs. Think of us as your digital dispatcher department that
              never takes a day off.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                  <CheckCircle2 className="size-4" />
                </span>
                <span className="text-sm text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
