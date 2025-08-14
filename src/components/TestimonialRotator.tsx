"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

type Props = {
  testimonials: Testimonial[];
  intervalMs?: number;
  className?: string;
};

export default function TestimonialRotator({
  testimonials,
  intervalMs = 6000,
  className = "",
}: Props) {
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (testimonials.length <= 1) return;
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, testimonials.length, isPaused]);

  const current = testimonials[index];

  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-white/5 p-8 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-lg leading-relaxed whitespace-pre-line">“{current.quote}”</p>
          <p className="text-sm text-neutral-400">
            — {current.author}
            {current.role ? `, ${current.role}` : ""}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


