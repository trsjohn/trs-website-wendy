### LogoStrip

### ValueSplit

### TilesGrid

### FeatureSlice

Props:
- `variant?: "light" | "dark"` (background treatment)
- `imagePosition?: "left" | "right"`
- `eyebrow?: string`
- `title: string`
- `description: string`
- `bullets?: string[]`
- `image: { src: string; alt: string; width?: number; height?: number }`
- `ctas?: { href: string; label: string; variant?: "primary" | "ghost" }[]`
- `className?: string`

Notes:
- Alternating light/dark section with image and copy columns.
- Reveal on scroll via `Reveal`.

Props:
- `items: { Icon: React.ElementType; title: string; description: string }[]`
- `className?: string`

Notes:
- Equal-height cards with subtle lift and `shadow-soft`.
- Use for “X is for …” or value tiles across pages.

Props:
- `claim: string`
- `title: string`
- `bullets: { title: string; body?: string }[]`
- `caption?: string`
- `className?: string`

Notes:
- Two-column split: left big claim, right bullets and optional caption.
- Use to express speed/value claims concisely.

Props:
- `logos: { src: string; alt: string; }[]`
- `className?: string`

Notes:
- Renders a responsive, wrapping list of logos with consistent height.
- Default item style: `h-8 sm:h-10 grayscale opacity-70 hover:opacity-100`.
- Use when a marquee is not necessary. Prefer `LogoMarquee` for continuous scroll.


