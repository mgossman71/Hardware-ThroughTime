# Project Checkpoint

## Current Goal
Build "Computer Hardware Through Time" — a polished, interactive educational React/TS website with parallel technology tracks, a core timeline engine, and strict source-based data architecture. v0.1 (skeleton + 1970s–80s seed data) is complete and green.

## Current State
- ✅ Project scaffolds and builds: `tsc -b` clean, `eslint` clean, `vite build` clean, `vitest` 6/6 pass, `vite preview` serves correctly.
- ✅ Timeline engine: `TimelineCanvas` (era bands, cluster compression, drag-to-scroll, focus-year scroll with `scrollTo` fallback for jsdom), `TrackToggles` (accessible, `aria-pressed`), `EventList` (mobile fallback ≤900px), `EventDetail` (spec sheet, significance, related links, sources).
- ✅ Data layer: `HistoricalEvent` type, `tracks.ts`, `sources.ts`, `registry.ts`; seeded CPUs (4004, 8080, Z80, 6502, 8086/8088) and computers (Altair 8800, Apple II, TRS-80, PET, C64, IBM PC 5150).
- ✅ Pages: `/`, `/typical-pc`, `/build-a-pc`, `/compare`, `/gallery` (placeholders), `/sources` (functional).
- ✅ Cross-page state: `src/app/focusYear.ts` (useSyncExternalStore) — no circular imports.
- ✅ Docs: `README.md`, `docs/research-sources.md`, `docs/decisions.md`, `CHECKPOINT.md`.
- ✅ Deployment: `Dockerfile` (node:22-alpine build → nginx:1.27-alpine), `docker-compose.yml` (prod :8081, dev :5174), `nginx.conf`.

## Completed
- Repo initialized, `.gitignore` added (node_modules, dist, .DS_Store, tsbuildinfo, IDE dirs).
- `App.test.tsx` behavioral tests: header renders, lazy timeline loads, seeded events visible, event selection opens detail panel, track toggle hides CPUs.
- `format.test.ts`: spec label + value formatting.
- Fixed `el.scrollTo` missing in jsdom (feature-detected fallback to `scrollLeft`).
- Fixed registry relative import paths (`./cpu/early`, not `../cpu/early`).
- Fixed `formatSpecValue` unused param (prefixed `_key`).
- Removed `eslint-disable` for `react-hooks/exhaustive-deps` (plugin not installed).

## Architecture
- Vanilla React 18 + Vite 5 + TS5; no frameworks, no state libs.
- `src/data/**` is the single source of truth for content; `registry.ts` aggregates.
- Each top-level page is `React.lazy` → separate chunk.
- Plain CSS with custom properties (design tokens in `src/styles/tokens.css`), BEM-ish, no CSS-in-JS.
- Shared: `PageShell`, `SiteHeader`, `formatSpecValue`/`specLabel`, `useSyncExternalStore`-based `focusYear` store.
- Routes: `src/app/routes.ts`; eras: `src/data/eras.ts`; types: `src/types/historical-event.ts`.

## Important Files
- `src/App.tsx` — shell + lazy routes.
- `src/app/routes.ts` — route table + parser.
- `src/app/focusYear.ts` — cross-page store.
- `src/data/registry.ts`, `src/data/sources.ts`, `src/data/tracks.ts`, `src/data/eras.ts` — data core.
- `src/features/timeline/*` — canvas, toggles, list, detail, CSS.
- `src/features/sources/SourcesPage.tsx` — references page.
- `src/utils/format.ts` — label/value helpers.
- `src/styles/*.css` — tokens, base, app, era themes.
- `Dockerfile`, `docker-compose.yml`, `nginx.conf` — deployment.
- `docs/research-sources.md` — human twin of `sources.ts` (keep in sync).
- `docs/decisions.md` — why.

## Decisions
See `docs/decisions.md` (D-001…D-009). Highlights: data-as-content, strict sourcing, no invented facts, parallel tracks, per-page code splitting, plain CSS + tokens, BLS CPI for inflation.

## Known Issues
- Placeholders for typical-pc / build-a-pc / compare / gallery — intentional (content pending).
- No visual regression tests. No CI yet.

## Work In Progress
- None (v0.1 milestone green).

## Next Steps
1. Research + populate 1990s CPUs (286/386/486, Pentium line, AMD K5→Athlon→Phenom) into `src/data/cpu/`, cross-check with primary sources, extend `docs/research-sources.md`.
2. Add 1990s–2000s computer models (`src/data/computers/`), e.g. Power Mac G3, Dell OptiPlex, eMachines, Compaq Presario.
3. Begin Typical-PC page: year list + per-year configuration cards + "based on" machines + CPI footnote.
4. Begin Build-a-PC: era component pool data model, then interactive build UI.
5. Begin era-comparison: `ComparePage` with honest-ratio callouts.
6. Add gallery with licensed/attributed photography (label illustration vs. photo per spec).
7. Add CI (lint + typecheck + test + build).
8. Add visual regression or at least a smoke screenshot for the timeline.

## Validation
- `npx tsc -b` → clean
- `npm run lint` → clean
- `npm run build` → success (57 modules; index 150.99 kB / TimelinePage 25.21 kB)
- `npx vitest run` → 6 passed (2 files)
- **Docker compose** → `docker compose up --build` OK; container `hardware-throughtime-web-1` healthy on :8081;
  `/` 200, CSS/JS assets 200, deep route `/typical-pc` 200 (SPA fallback), lazy TimelinePage chunk 200.

## Environment
- Node 22 (Docker: node:22-alpine; nginx:1.27-alpine)
- Dev: `npm run dev` → :5173 (Vite); Docker dev profile → :5174; prod Docker → :8081
- Docker Desktop is installed at `/Applications/Docker.app`; the CLI is **not on PATH** —
  invoke as `/Applications/Docker.app/Contents/Resources/bin/docker` (start with
  `open -a Docker` if the daemon is down).
- Current state: `docker compose up` running, web container healthy on :8081.
- **Remote:** public GitHub repo `https://github.com/mgossman71/Hardware-ThroughTime`
  (owner `mgossman71`, default branch `master`), configured as `origin` and pushed.

## Last Updated
2026-07-09 — v0.1 milestone complete: scaffold, timeline engine, seed data (1970s–80s), sources, tests, docs, Docker.
2026-07-09 — docker compose stack built and verified healthy on :8081 (root, assets, SPA fallback, lazy chunks).
2026-07-09 — public GitHub repo created (`mgossman71/Hardware-ThroughTime`) and all commits pushed; README made public-facing.
