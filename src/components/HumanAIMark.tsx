"use client";

import React, { useEffect, useState } from "react";

type Props = {
  className?: string;
  colorClass?: string; // e.g., "text-red-500" and background bars will match via arbitrary colors
};

export default function HumanAIMark({ className = "", colorClass = "text-red-500" }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <span
      className={`relative inline-flex items-baseline whitespace-nowrap group cursor-help text-zinc-900 dark:text-white ${
        mounted ? "ai-pulse-once" : ""
      } ${className}`}
      aria-label="human"
    >
      <span>hum</span>
      <span className="relative inline-block align-baseline">
        {/* red "a" */}
        <span
          className={`${colorClass} transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          a
        </span>
        {/* the "i" dot */}
        <span
          aria-hidden="true"
          className={`absolute left-[calc(100%+0.03em)] top-[0.02em] h-[0.18em] w-[0.18em] rounded-full bg-red-500 transition-opacity duration-700 ease-out ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
      <span>n</span>

      {/* Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-1 text-[11px] font-medium text-zinc-900 opacity-0 shadow-md ring-1 ring-black/10 transition-opacity duration-200 group-hover:opacity-100"
      >
        We blend AI + human insight
      </span>

      {/* local styles for one-time color pulse */}
      <style jsx>{`
        @keyframes aiPulseOnce {
          0% { filter: saturate(100%); }
          30% { filter: saturate(160%); }
          60% { filter: saturate(140%); }
          100% { filter: saturate(100%); }
        }
        .ai-pulse-once :global(span.${colorClass?.replace("text-", "text-")}) {
          /* no-op, keep specificity for potential future use */
        }
        .ai-pulse-once {
          animation: aiPulseOnce 900ms ease-out 1;
        }
      `}</style>
    </span>
  );
}


