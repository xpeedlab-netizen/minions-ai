import Image from "next/image";
import { AudioWaveform, CalendarDays } from "lucide-react";

export default function ResultsCallProof() {
  return (
    <section className="bg-cream pb-16 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-start">
        {/* Real Call Analysis */}
        <div className="rounded-2xl border border-border bg-white p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-bold text-lg text-teal">Real Call Analysis</h3>
              <p className="mt-1 text-sm text-ink/60">
                Rex analyzing a 2:00 AM plumbing emergency call.
              </p>
            </div>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cream text-ink/50">
              <AudioWaveform className="size-4" />
            </span>
          </div>

          <div className="mt-5 rounded-xl bg-cream p-4 space-y-3">
            <div className="flex items-start gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal font-mono text-xs font-bold text-white">
                C
              </span>
              <p className="rounded-xl rounded-tl-sm bg-white border border-border px-3 py-2 text-sm text-ink/80">
                &ldquo;My water heater just burst, can you get someone here?&rdquo;
              </p>
            </div>
            <div className="flex items-start justify-end gap-2">
              <p className="rounded-xl rounded-tr-sm bg-teal px-3 py-2 text-sm text-white max-w-[80%]">
                &ldquo;I hear you. I&apos;ve got an emergency slot for 7:00 AM. Does that
                work?&rdquo;
              </p>
              <div className="relative size-7 shrink-0 overflow-hidden rounded-full">
                <Image src="/images/rex-mascot.jpg" alt="Rex" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-coral/10 px-3 py-1 font-mono text-xs text-coral-text">
              Intention: Urgent
            </span>
            <span className="rounded-full bg-success/10 px-3 py-1 font-mono text-xs text-success">
              Outcome: Booked
            </span>
          </div>
        </div>

        {/* The Result */}
        <div className="rounded-2xl border border-border bg-white p-6">
          <h3 className="font-heading font-bold text-lg text-teal">The Result</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
            Automatic Booking
          </p>

          <div className="mt-5 rounded-xl border border-border overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-cream px-4 py-3">
              <CalendarDays className="size-4 text-ink/50" />
              <span className="text-sm font-medium text-ink">Mon, Oct 24</span>
            </div>
            <div className="border-l-4 border-coral bg-coral/5 px-4 py-3 flex items-center justify-between">
              <span className="text-sm font-medium text-ink">Emergency Leak Repair</span>
              <span className="font-mono text-xs text-ink/50">7:00 AM</span>
            </div>
            <div className="px-4 py-3 border-t border-border" />
            <div className="border-l-4 border-teal bg-teal/5 px-4 py-3 flex items-center justify-between border-t border-border">
              <span className="text-sm font-medium text-ink">Maintenance Check</span>
              <span className="font-mono text-xs text-ink/50">10:30 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
