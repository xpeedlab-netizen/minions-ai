"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Calendar, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    label: "Call answered",
    className: "top-5 left-4 sm:left-6",
    delay: 0,
  },
  {
    icon: Calendar,
    label: "Job scheduled",
    className: "top-1/2 right-3 sm:right-5 -translate-y-1/2",
    delay: 0.9,
  },
  {
    icon: CheckCircle2,
    label: "Job closed",
    className: "bottom-6 left-6 sm:left-10",
    delay: 1.8,
  },
];

const bars = [7, 15, 22, 13, 8];

export default function HeroAnimation() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="animate-idle-bob relative aspect-square max-w-md mx-auto rounded-[2.5rem] bg-white border border-border overflow-hidden shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-cream to-coral/5" />

      {!reduceMotion &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border-2 border-teal/25"
            style={{ width: 72, height: 72, marginLeft: -36, marginTop: -36 }}
            animate={{ scale: [1, 3], opacity: [0.55, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i,
              ease: "easeOut",
            }}
          />
        ))}

      <motion.div
        className="absolute left-1/2 top-1/2 flex size-16 sm:size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-white shadow-lg"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Phone className="size-7 sm:size-8" strokeWidth={2.25} />
      </motion.div>

      <div className="absolute left-1/2 top-[64%] flex -translate-x-1/2 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-full bg-teal origin-bottom"
            style={{ height: h }}
            animate={reduceMotion ? undefined : { scaleY: [0.35, 1, 0.35] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {steps.map(({ icon: Icon, label, className, delay }) => (
        <motion.div
          key={label}
          className={`absolute ${className}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: reduceMotion ? 1 : [0, 1, 1, 0],
            scale: reduceMotion ? 1 : [0.95, 1, 1, 0.95],
          }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-1.5 rounded-xl border border-border bg-white px-2.5 py-1.5 shadow-sm">
            <Icon className="size-3.5 text-teal" strokeWidth={2.25} />
            <span className="font-mono text-[10px] uppercase tracking-wide text-ink">
              {label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
