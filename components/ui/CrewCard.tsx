import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CrewMember } from "@/lib/data/crew";

export default function CrewCard({ member }: { member: CrewMember }) {
  return (
    <Link
      href={member.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading font-extrabold text-xl text-ink">{member.name}</h3>
        <p className="font-mono text-sm text-teal mt-0.5">{member.role}</p>
        <p className="mt-3 text-sm text-ink/70 leading-relaxed flex-1">{member.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
