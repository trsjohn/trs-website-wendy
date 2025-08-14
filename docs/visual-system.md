### Visual system and utility conventions

Container
- Default: `max-w-7xl mx-auto px-6 sm:px-8`
- Section wrapper: `py-section-y sm:py-section-y-sm`

Typography
- Page hero: `text-hero leading-[var(--line-height-hero)] tracking-tight`
- Subhero: `text-subhero leading-[var(--line-height-subhero)]`
- Use standard steps elsewhere: `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.

Colors
- Primary accent: `text-brand`, `bg-brand`, borders `border-brand` as needed
- Neutral copy: `text-ink-500/600/700` (light), `text-ink-200/300` (dark)

Spacing
- Vertical rhythm: only use `py-section-y` and `sm:py-section-y-sm` for sections
- Internal block spacing: prefer `space-y-4/6/8` over ad-hoc margins

Effects
- Card lift: `shadow-soft transition-transform will-change-transform hover:-translate-y-0.5`
- Radii: `rounded-xl` / `rounded-2xl` only

Motion
- Use a single reveal preset (see `components/Reveal.tsx`): apply to section headings, cards, images only

Notes
- Avoid inline styles; prefer tokenized utilities
- Keep variants via props (e.g., `variant="light|dark"`) rather than custom CSS per-section

