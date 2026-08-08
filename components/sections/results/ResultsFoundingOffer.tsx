import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const perks = [
  "White-glove implementation (we build the AI flows for you)",
  "Direct line to our engineering crew (Zip, Rex, and the humans)",
  "Locked-in founding pricing—forever",
];

export default function ResultsFoundingOffer() {
  return (
    <section className="bg-cream pb-16 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-teal p-8 sm:p-12">
          <Star className="absolute -top-4 right-6 size-24 text-white/5" />
          <div className="flex items-center gap-3">
            <div className="relative size-11 overflow-hidden rounded-full border-2 border-white/20">
              <Image src="/images/zip-mascot.jpg" alt="Zip" fill className="object-cover" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Founding-client offer
            </h2>
          </div>
          <p className="mt-5 max-w-2xl text-white/70 leading-relaxed">
            We are currently looking for 10 established home service businesses to join our
            Founding Client program. In exchange for your honest feedback and a case study,
            you&apos;ll get:
          </p>
          <ul className="mt-5 space-y-2.5">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-white/90">
                <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-success" />
                {p}
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-8">
            Claim Founding Slot
          </Button>
        </div>
      </div>
    </section>
  );
}
