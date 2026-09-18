# Project Checkpoint

## Current Goal
Build "Computer Hardware Through Time" — a polished, interactive educational React/TS website with parallel technology tracks, a core timeline engine, and strict source-based data architecture. **v0.2: Multimedia PC era (1985–1997) complete. v0.3: Performance Race era (1998–2009) complete. v0.4: Multi-Core era (2010–2019) complete. v0.5: Foundations era (1940–1969) complete** — 23 new events across 9 new data modules, all sourced. Only the Modern era (2020–2026) remains unpopulated.

## Current State
- ✅ Project scaffolds and builds: `tsc` clean, `eslint` clean, `vite build` clean, `vitest` 16/16 pass.
- ✅ Timeline engine: `TimelineCanvas` (era bands, cluster compression, drag-to-scroll, focus-year indicator), `TrackToggles`, `EventList` (mobile fallback), `EventDetail`.
- ✅ Data layer: `HistoricalEvent` type, `tracks.ts`, `sources.ts` (115 sources), `registry.ts` (121 events: 1970s–80s seed + full Foundations era (1940–1969) + full 1985–1997 Multimedia era + full 1998–2009 Performance Race era + full 2010–2019 Multi-Core era).
- ✅ Pages: `/`, `/typical-pc`, `/build-a-pc`, `/compare`, `/gallery` (placeholders), `/sources` (functional).
- ✅ Data integrity tests: unique event/source ids, all `sourceIds` and `relatedEventIds` resolve, era cohort sizes for the Foundations, Multimedia, Performance Race, and Multi-Core eras.
- ✅ Cross-page state: `src/app/focusYear.ts` (useSyncExternalStore) — no circular imports.
- ✅ Docs: `README.md`, `docs/research-sources.md`, `docs/decisions.md`, `CHECKPOINT.md`.
- ✅ Deployment: `Dockerfile` (node:22-alpine → nginx:1.27-alpine), `docker-compose.yml` (prod :8081, dev :5174), `nginx.conf`.

## Completed
- Repo initialized, `.gitignore` added.
- `App.test.tsx` behavioral tests + **data-integrity suite** (unique ids, referential integrity, era cohort size).
- `format.test.ts`: spec label + value formatting.
- Timeline focus fix: full-era canvas (1940–2026), moving focus indicator, empty-era bands.
- **Multimedia PC era content (2026-09-18), 29 new events:** CPUs (80386, 80486, Pentium, Pentium Pro, AMD K5, Pentium II + 80286), computers (PS/2 Model 70, Power Mac 6100, Presario 4600), graphics (VGA, SVGA, Voodoo1), storage (CD-ROM, ATA/IDE, 3.5″ floppy), OS (Win 3.1, Win 95), buses (ISA, MCA, VLB, PCI, AGP), RAM (EDO, SDRAM), networking (10BASE-T, USB 1.0), interfaces/audio (Sound Blaster, SB16, AWE32). 27 new sources added.
- **Performance Race era content (2026-09-18), 29 new events across 10 new data modules:**
  - CPUs: Pentium III, Pentium 4, AMD Athlon, Athlon XP, Athlon 64, Core 2 Duo.
  - Computers: Apple Power Mac G5.
  - Graphics: GeForce 256, GeForce 3, Radeon 9700, GeForce 8800 GTX, Radeon HD 2900.
  - RAM: DDR, DDR2, DDR3.
  - Networking: Fast Ethernet (100BASE-TX), ADSL, Gigabit Ethernet.
  - Wi-Fi (was empty): 802.11b, 802.11g.
  - Storage: Serial ATA (SATA).
  - Motherboards/buses: PCI Express.
  - Displays (was empty): DVI, 1280×1024 LCD (SXGA).
  - Interfaces: USB 2.0, Creative Audigy.
  - OS (extended `os/windows-line.ts`): Windows 98, Windows 2000, Windows XP.
- 29 new source entries in `src/data/sources.ts` + `docs/research-sources.md` (kept in sync); backlog items checked off.
- `eras.ts`: Performance Race `highlightEventIds` populated (13 ids).
- `App.test.tsx`: empty-era assertion relaxed `>= 4` → `>= 3`; new Performance Race cohort test (≥25 events, both previously-empty tracks `wifi` + `displays` now have content).
- **Multi-Core era content (2026-09-18), 26 new events across 10 new data modules + extended OS line:**
  - CPUs (`cpu/multicore-era.ts`): AMD FX-8150, Core i7-3770K, Core i7-6700K, Core i9-7900X, **Ryzen 7 1800X**, Ryzen 7 3800X.
  - Graphics (`graphics/multicore-era.ts`): GTX 480, GTX 680, GTX 1080, Radeon Vega 64, RTX 2080.
  - Computers (`computers/computers-2010s.ts`): MacBook Pro Retina 13".
  - RAM (`ram/multicore-era.ts`): DDR4.
  - Storage (`storage/multicore-era.ts`): Commodity SATA SSD, NVMe.
  - Motherboards (`motherboards/multicore-era.ts`): PCIe 3.0.
  - Networking (`network/multicore-era.ts`): 10GBASE-T, Wi-Fi 5 (802.11ac), Wi-Fi 6 (802.11ax).
  - Displays (`displays/multicore-era.ts`): 1920×1080 FHD, 4K UHD.
  - Interfaces (`interfaces/multicore-era.ts`): USB 3.0 (2008, renders in Performance Race band), Thunderbolt, USB-C.
  - OS (`os/windows-line.ts` extended): Windows 8, Windows 10.
  - 26 new source entries in `src/data/sources.ts` + `docs/research-sources.md` (kept in sync).
  - `eras.ts`: Multi-Core `highlightEventIds` populated (14 ids).
  - `App.test.tsx`: empty-era assertion relaxed `>= 3` → `>= 2` (remaining empty eras: Foundations, Modern); new Multi-Core cohort test (≥24 events in 2010–2019 band + track coverage).
- **Foundations era content (2026-09-18), 23 new events across 9 new data modules:**
  - Computers (`computers/foundations-era.ts`): ENIAC (1945), UNIVAC I (1951), IBM 704 (1954), IBM System/360 (1964), DEC PDP-8 (1965).
  - CPUs (`cpu/foundations-era.ts`): Transistor (1947), Integrated circuit (1958), MOSFET (1962).
  - RAM (`ram/foundations-era.ts`): Magnetic core memory (1955), DRAM (1966).
  - Storage (`storage/foundations-era.ts`): IBM 350/1301 RAMAC (1956), IBM 2314 (1966).
  - Networking (`network/foundations-era.ts`): Packet switching (1964), ARPANET (1969).
  - OS (`os/foundations-era.ts`): GM-NAA I/O (1956), CTSS (1961), Unix (1969).
  - Graphics (`graphics/foundations-era.ts`): Spacewar! (1962), Sketchpad (1963).
  - Displays (`displays/foundations-era.ts`): Tektronix 4014 (1968), IBM 2250 (1969).
  - Interfaces (`interfaces/foundations-era.ts`): Computer mouse (1964), NLS "Mother of All Demos" (1968).
  - `wifi` and `motherboards` deliberately left empty (no honest, well-sourced pre-1970 content).
  - 23 new source entries in `src/data/sources.ts` + `docs/research-sources.md` (kept in sync).
  - `eras.ts`: Foundations `highlightEventIds` populated (16 ids).
  - `App.test.tsx`: empty-era assertion relaxed `>= 2` → `>= 1` (only Modern remains empty); new Foundations cohort test (≥20 events in 1940–1969 band + 9-track coverage).
- **Timeline legend fix (2026-09-18): sticky left gutter.** Track lane labels (`.tl-lane__label`) and era names (`.tl-canvas__era-label`) are now `position: sticky; left: 0` so the "which lane / which era" legend stays pinned at the left edge while the canvas scrolls (Option A — CSS-only, no JS/test changes). Gutter width token `--lane-gutter: 132px` on `.tl-canvas`; z-order era (6) > lane (5) > focus line (4) > events (3) > era bands (1). User-reported design flaw: lane legend scrolled out of view when moving to later years.
- **Transparent gutter (2026-09-18):** per user request the gutter is transparent — era tint shows through. Legibility over events scrolling underneath is preserved with a background-colored text halo on both labels: `text-shadow: 0 0 2px/6px/14px var(--bg-1)`. The 1px `border-right` separator is kept.

## Architecture
- Vanilla React 18 + Vite 5 + TS5; no frameworks, no state libs.
- `src/data/**` is the single source of truth for content; `registry.ts` aggregates.
  - Convention: one exported array per module (`CPUs_1980S`, `COMPUTERS_1990S`, `GRAPHICS_MULTIMEDIA`, …), each entry a full `HistoricalEvent`.
  - `specs` values are `string | number` only (no booleans — the type enforces this).
  - Track ids are the 11 in `TrackId` (`networking`, not `network`; audio cards → `interfaces`).
- Each top-level page is `React.lazy` → separate chunk.
- Plain CSS with custom properties (tokens in `src/styles/tokens.css`), BEM-ish, no CSS-in-JS.
- Shared: `PageShell`, `SiteHeader`, `formatSpecValue`/`specLabel`, `focusYear` store.
- Routes: `src/app/routes.ts`; eras: `src/data/eras.ts`; types: `src/types/historical-event.ts`.

## Important Files
- `src/data/cpu/early.ts` (1971–1982), `cpu/1980s.ts`, `cpu/1990s.ts`, **`cpu/performance-era.ts`** — CPUs.
- `src/data/computers/computers-1980s.ts`, `computers-1990s.ts`, **`computers/computers-2000s.ts`** — machines.
- `src/data/{graphics,storage,os,motherboards,ram,network,audio}/multimedia-era.ts` — Multimedia era components.
- **`src/data/{graphics,ram,storage,motherboards,network,wifi,displays,interfaces}/performance-era.ts`** + `os/windows-line.ts` (extended) — Performance Race era components.
- **`src/data/{computers,cpu,ram,storage,network,os,graphics,displays,interfaces}/foundations-era.ts`** — Foundations era (1940–1969) components.
- `src/data/registry.ts`, `sources.ts`, `tracks.ts`, `eras.ts` — data core.
- `src/features/timeline/*` — canvas, toggles, list, detail, CSS.
- `src/features/sources/SourcesPage.tsx` — references page.
- `src/utils/format.ts` — label/value helpers.
- `src/styles/*.css` — tokens, base, app, era themes.
- `Dockerfile`, `docker-compose.yml`, `nginx.conf` — deployment.
- `docs/research-sources.md` — human twin of `sources.ts` (**keep in sync**).
- `docs/decisions.md` — why.

## Decisions
See `docs/decisions.md` (D-001…D-009). Additional (2026-09-18):
- Sound cards (there is no audio track among the 11) are assigned to the `interfaces` track.
- `relatedEventIds` must resolve to registered events — enforced by the new integrity test; prefer adding the missing event (80286) over deleting the link.
- Data defects surfaced by the integrity test are fixed in the same change.
- The previously-empty `wifi` and `displays` tracks are now populated by the Performance Race era (802.11b/g; DVI + SXGA).
- **Foundations era track coverage (2026-09-18):** every track with legitimate pre-1970 content got at least one event (computers, cpus, os, ram, storage, networking, graphics, displays, interfaces). `wifi` and `motherboards` are **deliberately left empty** — there is no honest, well-sourced pre-1970 content for those two tracks (802.11 began in 1997; standard PC expansion buses began in the 1980s), and the project's "never invent / no padding" policy wins over forcing coverage.
- **Sticky left gutter for the timeline legend (2026-09-18):** the user rejected the original design (lane labels absolute-positioned at the left edge of the scrollable canvas, so the legend disappeared when scrolling right). Chose Option A (CSS-only sticky gutter) over B (fixed sidebar restructure) and C (pinned color-key strip). Lane labels + era names are `position: sticky; left: 0`; era bands render oldest→newest so a newer era name naturally covers an older one's at the shared left position. Era label area (top 90px) and lane label area (top: 90px+) never overlap vertically. Initially shipped with an opaque `--bg-1` gutter background; user then asked for a **transparent gutter** so the era tint shows through — legibility is preserved with a `var(--bg-1)` text-shadow halo on both labels (event dots/titles passing underneath remain visible, halo keeps the gutter text crisp).

## Known Issues
- Placeholders for typical-pc / build-a-pc / compare / gallery — intentional (content pending).
- No visual regression tests. No CI yet.
- The era "empty" assertion in `App.test.tsx` is `>= 1` (currently exactly 1 empty era: Modern — Foundations, Performance Race, and Multi-Core are now populated).

## Work In Progress
- None.

## Next Steps
1. ~~Populate Performance Race era (1998–2009)~~ — **done (v0.3).**
2. ~~Populate Multi-Core era (2010–2019)~~ — **done (v0.4).**
3. ~~Populate Foundations era (1940–1969)~~ — **done (v0.5).** Populate Modern era (2020–2026) to remove the last empty band (only Modern remains empty now).
4. Begin Typical-PC page: year list + per-year configuration cards + "based on" machines + CPI footnote.
5. Begin Build-a-PC: era component pool data model (`EraComponent` type already exists), then interactive build UI.
6. Begin era-comparison: `ComparePage` with honest-ratio callouts.
7. Add gallery with licensed/attributed photography (label illustration vs. photo per spec).
8. Add CI (lint + typecheck + test + build).
9. Add visual regression or at least a smoke screenshot for the timeline.

## Validation
- `npx tsc --noEmit` → clean
- `npm run lint` → clean
- `npm run build` → success (95 modules; sources chunk carries 115 sources)
- `npx vitest run` → 16 passed (2 files), incl. data-integrity suite + four era cohort tests (Foundations, Multimedia, Performance Race, Multi-Core)
- **Docker:** the user views the app at `http://10.0.0.86:8081/#/timeline`.
  After any content/UI change, run `docker compose up --build` so the new image is served.
  Verified this session: container-served JS bundles include the Foundations events/sources.

## Environment
- Node 22 (Docker: node:22-alpine; nginx:1.27-alpine)
- Dev: `npm run dev` → :5173 (Vite); Docker dev profile → :5174; prod Docker → :8081
- Docker Desktop at `/Applications/Docker.app`; CLI **not on PATH** —
  invoke as `/Applications/Docker.app/Contents/Resources/bin/docker` (start with `open -a Docker` if daemon is down).
- **Remote:** public GitHub repo `https://github.com/mgossman71/Hardware-ThroughTime`
  (owner `mgossman71`, default branch `master`), configured as `origin`.

## Last Updated
2026-09-18 — Foundations era (1940–1969) fully populated: 23 new events across 9 new data modules
    (computers 5, cpus 3, os 3, ram 2, storage 2, networking 2, graphics 2, displays 2, interfaces 2).
    23 new sources added to both `src/data/sources.ts` and `docs/research-sources.md` (kept in sync).
    `wifi` + `motherboards` deliberately left empty (no honest pre-1970 content). Foundations
    `highlightEventIds` set (16 ids). `App.test.tsx` empty-era assertion relaxed `>= 2` → `>= 1`
    (only Modern remains empty); new Foundations cohort test added (≥20 events in 1940–1969 band +
    9-track coverage). 16/16 tests passing; `tsc --noEmit` / `eslint` / `vite build` all clean.
    Docker rebuilt + container-served bundles verified to include the new events/sources.
    Totals: 121 events, 115 sources.
2026-09-18 — Gutter made transparent (user request): removed opaque `--bg-1` background from
   `.tl-lane__label` + `.tl-canvas__era-label`; added `var(--bg-1)` text-shadow halo on both for
   legibility over events scrolling underneath. CSS-only. 15/15 tests, tsc/eslint/build clean,
   Docker rebuilt + served CSS verified (no background, halo present, container healthy).
2026-09-18 — Timeline legend UX fix: sticky left gutter for track lane labels + era names
   (CSS-only in `src/features/timeline/timeline.css`; `--lane-gutter: 132px`; z-order 6/5/4/3/1).
   Resolves user-reported flaw where the lane legend scrolled out of view on the right side of
   the timeline. 15/15 tests, tsc/eslint/build clean, Docker rebuilt + served CSS verified.
2026-09-18 — Multi-Core era (2010–2019) fully populated: 26 new events across 10 new data modules
   (CPU, computers, graphics, RAM, storage, motherboards, networking, displays, interfaces) +
   `os/windows-line.ts` extended with Win 8/10. 26 new sources added to both `src/data/sources.ts`
   and `docs/research-sources.md` (kept in sync). Multi-Core `highlightEventIds` set (14 ids).
   `App.test.tsx` empty-era assertion relaxed `>= 3` → `>= 2`; new Multi-Core cohort test added
   (≥24 events in 2010–2019 band + track coverage). 15/15 tests passing; `tsc --noEmit` / `eslint` /
   `vite build` all clean. Totals: 98 events, 92 sources.
2026-09-18 — Performance Race era (1998–2009) fully populated: 29 new events across 10 new data
   modules (CPU, computers, graphics, RAM, networking, wifi, storage, motherboards, displays,
   interfaces) + `os/windows-line.ts` extended with Win 98/2000/XP. 29 new sources added to both
   `src/data/sources.ts` and `docs/research-sources.md` (kept in sync, backlog items checked off).
   Performance Race `highlightEventIds` set (13 ids); previously-empty `wifi` + `displays` tracks now
   populated. `App.test.tsx` empty-era assertion relaxed `>= 4` → `>= 3`; new Performance Race cohort
   test added (≥25 events + wifi/displays presence). 14/14 tests passing; `tsc --noEmit` / `eslint` /
   `vite build` all clean.
2026-09-18 — Multimedia PC era (1985–1997) fully populated: 29 new events across CPUs, computers,
   graphics, storage, OS, buses, RAM, networking, and audio (interfaces track); 27 new sources added to
   both `src/data/sources.ts` and `docs/research-sources.md` (kept in sync, backlog items checked off);
   80286 added to fix a dangling `relatedEventIds` reference; Multimedia era `highlightEventIds` set;
   new data-integrity test suite (unique ids + referential integrity + era cohort size).
   13/13 tests passing, `tsc -b` / `eslint` / `vite build` all clean.
2026-07-09 — v0.1 milestone complete: scaffold, timeline engine, seed data (1970s–80s), sources, tests, docs, Docker.
2026-07-09 — Fixed "focus column never moves" on timeline: full-era-range canvas (1940–2026), moving focus-year
   indicator line, empty-era "no entries yet" bands, consistent scrubber range; 8/8 tests; Docker rebuilt + verified.
