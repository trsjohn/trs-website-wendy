### Information Architecture map (Phase 4)

Target style: Align to the structure and labeling patterns seen on [wisprflow.ai](https://wisprflow.ai/), while preserving our existing routes and SEO.

#### Route mapping

| Target IA (wispr-like) | Our route | Notes |
| --- | --- | --- |
| Home | `/` | Hero → Logos → Value split → Tiles → Feature slices → CTA (already implemented in Phase 3.x). |
| Product | `/services` | Becomes our product/services overview. We will reuse `FeatureSlice` and `TilesGrid` here for a concise narrative. |
| Use cases | `/use-cases/*` | Optional shallow pages that reuse `FeatureSlice` + `TilesGrid`. No content rewrite required. |
| — Executive Search | `/use-cases/executive-search` | New shallow page (optional). |
| — Contract Recruiting | `/use-cases/contract-recruiting` | New shallow page (optional). |
| — Pre-Screening-as-a-Service | `/use-cases/pre-screening` | New shallow page (optional). |
| Individuals/Developers | `/roles`, `/apply` | Our candidate-facing area mirrors “Individuals/Developers”. Keep as-is; improve with Tiles or FeatureSlice later if needed. |
| Teams / Talk to sales | `/contact` | Acts as “Talk to Sales” and general contact. |
| About / Company | `/about` | Mirrors “Company/About”. |
| Resources | (none yet) | Optional future addition (e.g., `/blog`). Not required for this refactor. |
| Pricing | (none) | Keep CTA to contact for pricing; do not introduce pricing page now. |
| Trust / Legal | `/privacy`, `/terms` | Keep as-is. |
| Robots / Sitemap | `/robots.txt`, `/sitemap.ts` | Keep as-is. |

#### Navigation notes
- Keep current top-level: `Home`, `Roles`, `Services`, `About`, `Contact`.
- If we add `/use-cases/*`, expose it via a single `Use cases` item (optionally a dropdown) without changing existing slugs.
- Do not remove or rename existing routes to preserve SEO.

#### Implementation scope for this phase
- Docs-only change. No route or content changes required now.
- If we proceed with `/use-cases/*`, we will add shallow, component-reuse pages in a later PR, not here.


