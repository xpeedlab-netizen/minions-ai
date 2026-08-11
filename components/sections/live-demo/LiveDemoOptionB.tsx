"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function LiveDemoOptionB() {
  const [phone, setPhone] = useState("");
  const [called, setCalled] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-white p-6">

      <h2 className="mt-1 font-heading font-extrabold text-xl sm:text-2xl text-ink">
        Have it call your phone
      </h2>
      <p className="mt-2 text-sm text-ink/60 leading-relaxed">
        Experience the latency-free audio on your own device.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCalled(true);
        }}
        className="mt-5"
      >
        <label htmlFor="livedemo-phone" className="block font-mono text-[11px] uppercase tracking-wide text-ink/50 mb-2">
          Phone Number
        </label>
        <div className="flex items-center gap-2 rounded-xl border border-border px-4 min-h-12">
          <span className="text-ink/50 text-sm">+1</span>
          <input
            id="livedemo-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 000-0000"
            className="flex-1 bg-transparent text-base focus:outline-none"
          />
        </div>
        <Button type="submit" variant="secondary" className="mt-3 w-full">
          <Phone className="size-4" />
          Call me now
        </Button>
      </form>

      <p className="mt-3 text-xs text-ink/40">
        US, UK, Australia and Canada numbers. Your number is never shared.
      </p>

      {called && (
        <p className="mt-3 rounded-lg bg-cream px-3 py-2 text-xs text-ink/60 font-mono">
          Design preview — calling connects once our AI provider is wired up.
        </p>
      )}
    </div>
  );
}
