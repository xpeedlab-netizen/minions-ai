import { MessageCircleReply, Sparkles, MessagesSquare, Route, RefreshCw } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ZipBentoGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Always on, always fast.
          </h2>
          <p className="mt-4 text-ink/60">
            Zip never sleeps, never takes a lunch break, and never lets a lead go cold.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal/15 text-teal">
                <MessageCircleReply className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-ink">
                Instant text-back on every missed call.
              </h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                Don&apos;t let them call the next guy. Catch them the moment they hang up with an
                automated, professional response.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-[#E8E1DA] p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white text-teal">
                <Sparkles className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-bold text-ink">Omnichannel Speed</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                Same for web-form leads, Google leads and Facebook leads.
              </p>
            </div>
          </Reveal>

          {[
            { icon: MessagesSquare, title: "Two-way Texting", body: "Zip answers questions and books appointments directly on your calendar." },
            { icon: Route, title: "Lead Routing", body: "Routes genuinely hot leads straight to your phone when urgent action is needed." },
            { icon: RefreshCw, title: "CRM Sync", body: "Logs every conversation automatically, keeping your customer data pristine." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl bg-ink px-6 py-5">
              <div>
                <h3 className="font-heading font-bold text-white">Weekend &amp; After-Hours Coverage</h3>
                <p className="mt-1 text-sm text-cream/60">
                  Covers evenings and weekends, so your dead hours stop being dead.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-teal px-3 py-1 font-mono text-xs font-bold text-ink">
                24/7 ACTIVE
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
