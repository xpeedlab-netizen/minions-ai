import Image from "next/image";
import Link from "next/link";
import { crew } from "@/lib/data/crew";
import Reveal from "@/components/ui/Reveal";

export default function MeetTheCrew() {
  return (
    <section id="crew" className="bg-ink py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            Meet your new digital &ldquo;Front Office&rdquo; crew.
          </h2>
          <p className="mt-4 text-cream/70 text-lg">
            Each AI persona is specialized to handle a specific part of your customer&apos;s journey. Most shops start with Rex — you can add the rest of the crew whenever you need them.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {crew.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08} className="h-full">
              <Link
                href={m.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <div className="relative size-14 overflow-hidden rounded-xl border border-white/10">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <h3 className="mt-4 font-heading font-extrabold text-lg text-white">{m.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-vest-orange">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-cream/60 leading-relaxed flex-1">{m.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
