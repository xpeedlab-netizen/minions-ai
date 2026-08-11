import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Understands specific service tier pricing by zip code.",
  "Recognizes local landmarks and major intersections.",
  "Optimizes dispatching based on travel time and traffic.",
];

export default function ElectricalLocalMap() {
  return (
    <section className="bg-[#F4EDE5] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/electrical-map-photo.jpg"
              alt="Zip dispatch map showing electrical service zones"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 max-w-[220px] rounded-xl border border-border bg-white p-3 shadow-lg">
            <p className="font-mono text-[9px] uppercase tracking-wide text-ink/40">Example &mdash; not live data</p>
            <p className="mt-1 text-sm font-medium text-ink leading-snug">
              Zip dispatched tech to 60614 (Electrical Outage)
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Trained on Your Local Map
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
            Rex and Zip aren&apos;t just generic bots. They are configured with your specific
            service areas, zip codes, and neighborhood knowledge.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink/70">
                <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-success" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
