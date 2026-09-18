# Engineering Decisions

Record of non-obvious decisions, so future sessions don't re-litigate them.

## D-001 — Vanilla React 18 + Vite, no framework
React 18, Vite 5, TypeScript 5. No Next.js/Remix (SPA suffices; SEO not a
priority for an interactive museum). State: React hooks + a tiny external
store (`useSyncExternalStore` pattern) for cross-page communication — no
Redux/Zustand dependency.

## D-002 — Data is content, not code
All historical facts live in `src/data/**` as typed `HistoricalEvent`
objects. UI components render data; they never encode facts. Adding content
must not require UI changes (except new track colors in `src/data/tracks.ts`).

## D-003 — Strict sourcing discipline
- Every event references `sourceIds` from `src/data/sources.ts`.
- No invented facts; unknowns are omitted, not guessed.
- Conflicting sources → `unverified: true` + record the range.
- Illustration vs. photography must be explicitly labeled (relevant to the
  Gallery feature).

## D-004 — Parallel tracks, not a single narrative
Timeline has independent lanes (CPUs, Graphics, Memory, Storage, Networking,
Operating Systems). The "typical PC" view is a *separate* page, explicitly
not an average of the tracks.

## D-005 — Code splitting per feature
Each top-level page is a `React.lazy` chunk. The timeline page is the only
heavy one; shell + other pages stay small.

## D-006 — Plain CSS with custom properties, BEM-ish naming
No CSS-in-JS, no Tailwind (per spec: "CSS or CSS Modules"). Design tokens in
`:root`. Feature CSS files live next to feature components.

## D-007 — Accessibility baseline
Semantic elements, `aria-pressed` on toggles, keyboard-focusable event
markers (buttons), sufficient contrast on dark background, 44px minimum
touch targets.

## D-008 — Testing strategy
Vitest + Testing Library (jsdom) for behavior, ESLint + `tsc -b` + `vite
build` for the rest. No visual regression yet.

## D-009 — Inflation basis
All "today equivalent" prices use BLS CPI, stated explicitly in the UI
footnote.

## D-010 — Projection years are themed as the Modern era
`eraForYear` clamps any year past 2026 to the Modern era (the last
historical era). Selecting a projection therefore does **not** change the
site-wide theme; the "beyond-history" identity is carried by the projections
band, its chip, the "present" divider, and the dashed nodes instead.
Deliberate: there is no "future" era theme, and inventing one would blur the
same line the data layer keeps (projections never enter `ALL_EVENTS`).
