"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import type { JdGroup } from "@/lib/publicJds";

interface RoleSelectProps {
  groups: JdGroup[];
  value: string;
  onChange: (reqId: string) => void;
  placeholder?: string;
  invalid?: boolean;
}

/**
 * Listbox with department headers. A native <select> supports <optgroup>, but
 * its popup is drawn by the OS and can't be styled, which is why this is a
 * custom control. It follows the ARIA listbox pattern: DOM focus stays on the
 * list while aria-activedescendant tracks the highlighted option.
 */
export default function RoleSelect({
  groups,
  value,
  onChange,
  placeholder = "Choose a role…",
  invalid = false,
}: RoleSelectProps) {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Flat ordering mirrors render order, so an index is a stable handle to an
  // option across both keyboard movement and rendering.
  const flat = useMemo(() => groups.flatMap((group) => group.roles), [groups]);
  const selected = flat.find((role) => role.req_id === value) ?? null;
  const optionId = (index: number) => `${baseId}-option-${index}`;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Move real focus onto the list when it opens so arrow keys land here and
  // not on the page behind it.
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    document
      .getElementById(`${baseId}-option-${activeIndex}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex, baseId]);

  const openList = () => {
    const start = flat.findIndex((role) => role.req_id === value);
    setActiveIndex(start < 0 ? 0 : start);
    setOpen(true);
  };

  const commit = (index: number) => {
    const role = flat[index];
    if (!role) return;
    onChange(role.req_id);
    setOpen(false);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openList();
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flat.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(flat.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        commit(activeIndex);
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative" onKeyDown={onKeyDown}>
      {/* role="combobox" is the ARIA 1.2 select-only pattern. A bare button
          doesn't support aria-invalid or aria-expanded; combobox does. */}
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? `${baseId}-listbox` : undefined}
        aria-invalid={invalid || undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        className={`flex w-full items-center justify-between gap-2 rounded border bg-zinc-900 px-3 py-2 text-left transition-colors focus:outline-none focus:ring-1 focus:ring-brand ${
          invalid ? "border-red-500/70" : "border-zinc-700 hover:border-zinc-600"
        }`}
      >
        <span className={`truncate ${selected ? "text-white" : "text-zinc-500"}`}>
          {selected ? selected.job_title : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          ref={listRef}
          id={`${baseId}-listbox`}
          role="listbox"
          tabIndex={-1}
          aria-label="Open roles"
          aria-activedescendant={activeIndex >= 0 ? optionId(activeIndex) : undefined}
          className="absolute z-50 mt-1 max-h-80 w-full overflow-y-auto rounded-md border border-zinc-700 bg-zinc-900 py-1 shadow-2xl focus:outline-none"
        >
          {groups.map((group) => (
            <div key={group.department} role="group" aria-label={group.department}>
              <div className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                {group.department}
              </div>

              {group.roles.map((role) => {
                const index = flat.indexOf(role);
                const isActive = index === activeIndex;
                const isSelected = role.req_id === value;
                const meta = [role.location, role.work_arrangement]
                  .filter(Boolean)
                  .join(" · ");

                return (
                  <div
                    key={role.req_id}
                    id={optionId(index)}
                    role="option"
                    aria-selected={isSelected}
                    onPointerEnter={() => setActiveIndex(index)}
                    onClick={() => commit(index)}
                    className={`flex cursor-pointer items-start gap-2 px-3 py-2 ${
                      isActive ? "bg-white/10" : ""
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div
                        className={`truncate text-sm ${isActive || isSelected ? "text-white" : "text-zinc-300"}`}
                      >
                        {role.job_title}
                      </div>
                      {meta && (
                        <div className="truncate text-xs text-zinc-500">{meta}</div>
                      )}
                    </div>
                    {isSelected && (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
