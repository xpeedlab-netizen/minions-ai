import { Check, Asterisk, Radio } from "lucide-react";

const checklist = [
  "Instant live-transfer for active flooding",
  "Automated leak containment advice given instantly",
  "SMS follow-up with arrival time estimates",
];

export default function PlumbingEmergencyMode() {
  return (
    <section className="bg-teal-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            Peak Emergency Mode
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Rex doesn&apos;t just &quot;take a message.&quot; He uses advanced semantic intent to
            identify high-stakes keywords like{" "}
            <span className="text-coral font-semibold">&quot;flooding,&quot;</span>{" "}
            <span className="text-coral font-semibold">&quot;burst pipe,&quot;</span> or{" "}
            <span className="text-coral font-semibold">&quot;sewage backup.&quot;</span>
          </p>
          <ul className="mt-6 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="size-5 mt-0.5 shrink-0 text-success" />
                <span className="text-white/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-2 text-coral-text">
            <Asterisk className="size-4" />
            <span className="font-mono text-xs uppercase tracking-wide">
              Detected: Water Damage Emergency
            </span>
          </div>
          <div className="mt-5 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink/10 font-mono text-[9px] font-bold text-ink/60">
                CUST
              </span>
              <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-cream px-4 py-2.5 text-sm text-ink/80">
                Hello?! Help! My laundry room is flooding, the pipe under the sink just snapped!
              </p>
            </div>
            <div className="flex items-start justify-end gap-2.5">
              <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-coral/15 px-4 py-2.5 text-sm text-ink/80">
                I&apos;m on it. First, do you know where your main water shut-off valve is?
                I&apos;m transferring you to our emergency plumber, Mike, right now so he can guide
                you while he drives over.
              </p>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-coral font-mono text-[9px] font-bold text-white">
                REX
              </span>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between rounded-xl bg-success/10 px-4 py-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wide text-success">
              Emergency Escalation Active
            </span>
            <Radio className="size-4 text-success" />
          </div>
        </div>
      </div>
    </section>
  );
}
