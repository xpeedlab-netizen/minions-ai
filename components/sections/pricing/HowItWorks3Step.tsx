import { ClipboardCheck, Cpu, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "30-Min Onboarding Call",
    description:
      "We learn your call flows, price book, booking rules, and connect your CRM (ServiceTitan, Jobber, FieldRoutes, etc.).",
  },
  {
    step: "02",
    icon: Cpu,
    title: "We Build & Test (2–4 Weeks)",
    description:
      "Our prompt engineers configure your agent, program custom branching logic, and run rigorous test simulations.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Review & Go Live",
    description:
      "You make test calls, request any adjustments during your included revision round, and forward your phone lines.",
  },
];

export default function HowItWorks3Step() {
  return (
    <section className="bg-cream/50 py-16 sm:py-24 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal">
            Simple 3-Step Process
          </span>
          <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            How your AI build works
          </h2>
          <p className="mt-3 text-base text-ink/70">
            Zero technical work on your end. We handle the entire engineering process from start to finish.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-ink/20">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading font-bold text-lg text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-ink/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-ink/60">
            * A 30-day tuning window after go-live is included in the build fee. Ongoing care afterwards is optional, starts at $297/mo, and is discussed at your 30-day review — not before.
          </p>
        </div>
      </div>
    </section>
  );
}
