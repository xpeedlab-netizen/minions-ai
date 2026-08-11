import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PestHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-wide text-teal mb-4">
            Pest Control Automation
          </p>
          <h1 className="font-heading font-extrabold text-teal-dark text-4xl sm:text-5xl leading-[1.1] text-balance">
            For Pest Control companies: catch every &quot;there&apos;s a wasp nest by the kids&apos;
            room&quot; call — even on a Saturday.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When a customer sees a pest, they want it gone now. Creepy crawlies don&apos;t wait for
            your office hours. Rex makes sure you&apos;re the one they reach, 24/7.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Hear it handle a pest call
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] max-w-lg mx-auto w-full rotate-1 rounded-2xl bg-white border border-border overflow-hidden shadow-lg">
          <Image
            src="/images/pest-control-hero-photo.jpg"
            alt="Minions.AI-branded pest control van with technician"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
