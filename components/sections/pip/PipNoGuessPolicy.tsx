import { PhoneForwarded, ClipboardList, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const promises = [
  {
    icon: PhoneForwarded,
    title: "Instant Escalation",
    body: 'It tells the customer "Let me grab a human expert for that" and pings your phone.',
  },
  {
    icon: ClipboardList,
    title: "Ticket Creation",
    body: "It creates a detailed log of the conversation so you can jump in with all the context you need.",
  },
];

export default function PipNoGuessPolicy() {
  return (
    <section className="bg-teal-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-white/70">
            The No-Guess Policy
          </span>
          <h2 className="mt-5 font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            Pip doesn&apos;t make things up.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Unlike generic AI chatbots that hallucinate when they&apos;re confused, Pip has a strict
            &quot;No Guessing&quot; rule. If it isn&apos;t confident in an answer, it
            does one of two things:
          </p>
          <ul className="mt-6 space-y-5">
            {promises.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <p.icon className="size-4" />
                </span>
                <div>
                  <p className="font-heading font-bold text-white">{p.title}</p>
                  <p className="mt-1 text-sm text-white/60 leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <ShieldCheck className="size-4" />
              </span>
              <div>
                <p className="font-heading font-bold text-white text-sm">Pip Intelligence Node</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-white/50">
                  Status: Reliability First
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-2.5 font-mono text-xs leading-relaxed">
              <p className="rounded-lg bg-black/20 px-3 py-2.5 text-white/70">
                <span className="text-white/40">INPUT: </span>
                &quot;Can you install a Tesla wall charger by Friday?&quot;
              </p>
              <p className="rounded-lg bg-black/20 px-3 py-2.5 text-white/70">
                <span className="text-white/40">CHECK: </span>
                Is this in FAQ? <span className="text-coral font-bold">[NO]</span>
              </p>
              <p className="rounded-lg bg-black/20 px-3 py-2.5 text-white/70">
                <span className="text-white/40">ACTION: </span>
                <span className="font-bold">ESCALATE TO HUMAN</span>
              </p>
              <p className="rounded-lg bg-success/15 px-3 py-2.5 text-success">
                <span className="text-success/70">OUTPUT: </span>
                &quot;That&apos;s a specific technical request! Let me put you in touch with our
                lead electrician, Mike, who can confirm the schedule for you.&quot;
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
