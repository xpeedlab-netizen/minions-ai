import { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function ServiceHero({
  eyebrow,
  h1,
  subhead,
  ctaLabel,
  ctaHref = "/live-demo",
  image,
  imageAlt,
  visual,
  badges,
}: {
  eyebrow: string;
  h1: string;
  subhead: string;
  ctaLabel: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
  visual?: ReactNode;
  badges?: string[];
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-sm text-teal mb-4">{eyebrow}</p>
          <h1 className="font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            {h1}
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">{subhead}</p>
          <div className="mt-8">
            <Button href={ctaHref} size="lg" showArrow>
              {ctaLabel}
            </Button>
          </div>
          {badges && (
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          {visual ? (
            visual
          ) : image ? (
            <div className="relative aspect-square max-w-md mx-auto w-full rounded-3xl bg-white border border-border overflow-hidden shadow-sm">
              <Image
                src={image}
                alt={imageAlt || ""}
                fill
                priority
                className="object-cover animate-breathe"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
