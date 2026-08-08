import { MessageSquare, X, ExternalLink } from "lucide-react";

export default function LiveDemoOptionC() {
  return (
    <div className="rounded-2xl border border-border bg-cream p-6">
      <p className="font-mono text-xs uppercase tracking-wide text-teal">Option C</p>
      <h2 className="mt-1 font-heading font-extrabold text-xl sm:text-2xl text-ink">Try the chat</h2>

      <div className="mt-4 rounded-xl border border-border bg-white overflow-hidden">
        <div className="flex items-center justify-between bg-teal px-4 py-2.5">
          <span className="flex items-center gap-2 text-sm font-medium text-white">
            <MessageSquare className="size-4" />
            Pip Assistant
          </span>
          <X className="size-4 text-white/70" />
        </div>
        <div className="p-4 space-y-2">
          <p className="rounded-xl rounded-tl-sm bg-cream px-3 py-2 text-sm text-ink/80 max-w-[85%]">
            Hello! I&apos;m Pip. How can I help with your plumbing needs today?
          </p>
          <p className="ml-auto rounded-xl rounded-tr-sm bg-teal/10 px-3 py-2 text-sm text-ink/80 max-w-[85%] text-right">
            What are your hours?
          </p>
        </div>
      </div>

      <a
        href="/customer-support-ai"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline"
      >
        Open full chat window
        <ExternalLink className="size-3.5" />
      </a>
    </div>
  );
}
