import Image from "next/image";
import { MessageSquareText, FileCheck2, CalendarClock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function RoofingCrew() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-wide text-teal">What your crew does</p>
        <h2 className="mt-2 font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
          Modern Roofing Automation
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Main feature — Rex */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-teal p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full border border-white/20 bg-teal/20 p-0.5">
                  <Image src="/images/mascots/rex.png" alt="Rex" fill className="object-contain" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wide text-white/60">
                  24/7 Voice Dispatch
                </span>
              </div>
              <h3 className="mt-4 font-heading font-bold text-2xl text-white">
                Fast storm-surge answering
              </h3>
              <p className="mt-2 text-white/70 leading-relaxed max-w-md">
                Rex handles multiple simultaneous calls during heavy weather events. He qualifies the
                damage, gathers the location, and reassures the homeowner that help is on the way.
              </p>
            </div>
          </Reveal>

          {/* Secondary — Zip text-backs */}
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal/15 text-teal">
                <MessageSquareText className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-ink">Instant text-backs (Zip)</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                When you&apos;re on a roof and miss a call, Zip automatically texts the lead a link
                to upload photos of their damage.
              </p>
              <p className="mt-4 border-t border-border pt-3 font-mono text-xs text-teal">
                &ldquo;Zip is on it&rdquo; → Instant Text Response
              </p>
            </div>
          </Reveal>

          {/* Third — Insurance intake */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <FileCheck2 className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-ink">Insurance intake assistance</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                Our AI collects carrier names and claim details upfront, so your sales team walks
                into every estimate with a loaded folder.
              </p>
            </div>
          </Reveal>

          {/* Fourth — Scheduling */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-ink p-6 flex items-center justify-between gap-6">
              <div>
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-success mb-4">
                  <CalendarClock className="size-5" />
                </span>
                <h3 className="font-heading font-bold text-white">Scheduling roof inspections</h3>
                <p className="mt-2 text-sm text-cream/60 leading-relaxed max-w-sm">
                  Sync directly with your calendar. Rex books the inspection while the
                  homeowner is still on the line.
                </p>
              </div>
              <div className="hidden sm:flex gap-1.5 shrink-0">
                {[...Array(7)].map((_, i) => (
                  <span
                    key={i}
                    className={`h-16 w-3 rounded-full ${i === 2 || i === 5 ? "bg-success" : "bg-white/10"}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
