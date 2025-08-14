"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={reveal.viewport}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};


