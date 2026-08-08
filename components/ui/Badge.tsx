import type { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 font-mono text-sm text-ink/70 ${className}`}
    >
      {children}
    </span>
  );
}
