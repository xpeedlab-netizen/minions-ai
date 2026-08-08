import { faqCategories } from "./categories";

export default function FaqSidebar() {
  return (
    <div className="lg:sticky lg:top-28">
      <p className="font-mono text-xs uppercase tracking-wide text-ink/40">Categories</p>
      <nav className="mt-3 flex flex-col">
        {faqCategories.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`border-l-2 py-2.5 pl-4 text-sm transition-colors ${
              i === 0
                ? "border-teal font-bold text-teal"
                : "border-transparent text-ink/60 hover:text-ink hover:border-border"
            }`}
          >
            {c.label}
          </a>
        ))}
      </nav>

      <div className="mt-6 rounded-2xl bg-teal-dark p-5">
        <p className="font-mono text-[10px] uppercase tracking-wide text-white/50">Pro Tip</p>
        <p className="mt-2 text-sm text-white/85 leading-relaxed italic">
          &quot;If you don&apos;t see what you need, Rex is always ready for a chat.&quot;
        </p>
      </div>
    </div>
  );
}
