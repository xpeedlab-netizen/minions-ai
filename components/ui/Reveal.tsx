"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const MotionDiv = motion.div;
const MotionLi = motion.li;

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Rendered element — use "li" to avoid inserting a bare <div> between a
   * list parent (<ul>/<ol>) and its required <li> child. */
  as?: "div" | "li";
}) {
  const MotionTag = as === "li" ? MotionLi : MotionDiv;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
