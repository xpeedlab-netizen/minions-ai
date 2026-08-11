import { Layers, Mail, CalendarClock, Star, Columns3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const tags = ["Pipeline Mapping", "Tagging Architecture", "Data Import"];

export default function GiaBentoGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/50">What Gia Does</p>
          <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Gia isn&apos;t just a bot; she&apos;s your digital office manager who keeps your pipeline moving 24/7.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-success/10 text-success">
                <Layers className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-lg text-ink">
                Done-For-You CRM Setup &amp; Rescue
              </h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed max-w-md">
                Whether you&apos;re starting from scratch or sitting on a messy account you
                don&apos;t know how to use, we clean it up. We build the pipelines that make
                sense for home-services teams.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-cream px-3 py-1 font-mono text-xs text-ink/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl bg-teal p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Mail className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-lg text-white">Lead Follow-up Sequences</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Immediate SMS and email responses the second a lead hits your website or contact form.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <CalendarClock className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-ink">Appointment Reminders</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                Automated 24-hour and 1-hour reminders to ensure your technicians aren&apos;t
                driving to empty driveways.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Star className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-ink">Review Requests</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                Gia pings happy customers for a Google Review the moment the job is marked
                complete in your CRM.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl bg-success p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white">
                <Columns3 className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-white">Visual Pipelines</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                See exactly where every lead is sitting. From &lsquo;Quote Sent&rsquo; to
                &lsquo;Invoice Paid&rsquo; in one glance.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
