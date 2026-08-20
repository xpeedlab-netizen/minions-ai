import PipChatWidget from "@/components/pip-widget/PipChatWidget";

export default function LiveDemoOptionC() {
  return (
    <div className="rounded-2xl border border-border bg-cream p-6">

      <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl text-ink">Try the chat</h2>

      <div className="mt-4 h-[440px]">
        <PipChatWidget variant="inline" defaultOpen />
      </div>
    </div>
  );
}
