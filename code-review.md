# Code Review — Computer Hardware Through Time

**Date:** 2026-09-18
**Scope:** full repository (`src/`, config, Docker, docs, tests) at `5738713` (branch `code-review`)
**Verification performed in a `node:22-alpine` container:**

| Check | Result |
| --- | --- |
| `tsc -b --noEmit` | ✅ clean |
| `eslint .` | ✅ clean |
| `vitest run` | ✅ 35/35 pass (6 files) |
| Data probes (via `tsx` against `src/data`) | see findings H-1 / H-2 |

## Resolution Log (same day)

All **High** findings and all **Medium** findings have been **addressed** in
the current working tree. Post-fix verification (same container): `tsc` clean,
`eslint` clean, **26/26 tests pass** (was 20 — 6 new regression/integrity
tests; `@types/node` added as a devDependency for the doc-sync test).

| Finding | Fix |
| --- | --- |
| H-1 projection overlap | Projections now run through the same cluster placement as events — new pure `placeItems()` in `src/features/timeline/layout.ts`, used by `TimelineCanvas`. The two 2027 CPUs / two 2027 RAM projections no longer stack. Regression tests in `layout.test.ts`. |
| H-2 cluster overflow | `placeItems()` shifts a cluster left when its rightward push would exceed `maxX`, so no node is ever placed past the canvas edge / into the Projections zone. Tested (edge-cluster + collision scenarios). |
| H-3 stale docstring | `TimelineCanvas` docstring now references `MIN_CLUSTER_SPACING` / `layout.ts` instead of "90px". |
| M-1 focus-year drift | `DEFAULT_FOCUS_YEAR` exported from `src/app/focusYear.ts`; both `App` and `TimelinePage` use it (1981, as the test pins). |
| M-2 duck typing | `isProjection()` type guard added in `src/types/historical-event.ts`; `TimelinePage` now uses it. |
| M-3 era clamp | Documented as decision **D-010** in `docs/decisions.md` (deliberate: projections keep their own visual identity). |
| M-4 no CI | Added `.github/workflows/ci.yml` (typecheck + lint + tests on push/PR, Node 22). |
| M-5 sources drift | The 4 entries missing from the md twin (`wiki-zen-6`, `wiki-panther-lake`, `wiki-ddr6`, `wiki-wifi-8`) added to `docs/research-sources.md`; new test asserts the md and `sources.ts` id sets match **exactly** (both directions). |
| M-6 exactDate | New integrity test: every `exactDate` matches `^\d{4}(-\d{2}){0,2}$` (all 85 current values comply). |
| M-7 scrub scroll | New `scrollBehavior` prop on `TimelineCanvas`: `auto` while scrubbing, `smooth` for selection jumps. |
| M-8 vite comment | Comment corrected to describe the actual config (no `manualChunks`). |
| L-1 dead exports | `eventsForTrack` / `eventsInRange` removed from `src/data/registry.ts`. |
| L-2 `role="list"` | Removed from the `EventList` root (the inner `<ul>`s carry the semantics). |
| L-3 gzip_types | `application/javascript` → `text/javascript` in `nginx.conf`. |
| L-4 touch-action | `touch-action: pan-x` added to `.tl-canvas` (browser owns touch pan). |

**Polish batch (same day, L-5 / L-6 / L-8 + test suggestions 2–4):**

| Finding | Fix |
| --- | --- |
| L-5 `specLabel` | `SPEC_LABEL_OVERRIDES` map in `src/utils/format.ts` (32 keys: `clockMhz` → "Clock (MHz)", `cpu` → "CPU", `l2Cache` → "L2 cache", …); generic camelCase split kept as fallback. `format.test.ts` extended to pin the new labels. |
| L-6 favicon / OG | New `public/favicon.svg` (chip glyph in site colors), `<link rel="icon">` + `og:*` / `twitter:card` meta in `index.html`; dev compose now mounts `./public`. |
| L-8 placeholder drift | New shared `src/components/UnderConstruction.tsx` (PageShell + standard status line); all four placeholder pages now use it with their own `progressNote`. |
| Tests: `parseRoute` | New `src/app/routes.test.ts` (known routes, empty/malformed fallbacks, nested hashes). |
| Tests: `eraForYear` | New `src/data/eras.test.ts` (boundary years, D-010 clamping both sides, no-gap/overlap tiling). |
| Tests: `focusYear` channel | New `src/app/focusYear.test.ts` (subscribe/emit, unsubscribe, non-numeric payload ignored). |

Post-batch verification (container): `tsc` clean, `eslint` clean, **35/35 tests pass**
(6 files).

Still open (low priority): L-7 source-quality pass only — content work, see
its entry.

---

## Overall Assessment

This is a well-disciplined, above-average codebase for its stage. The
architecture is coherent and the "house rules" (components render data, every
fact is sourced, projections are kept out of the historical record) are
consistently enforced — including by tests, not just convention.

**Particularly strong:**

- **Strict, clean TypeScript** (`strict`, `noUnusedLocals`, `noUnusedParameters`)
  with zero lint errors and zero type errors.
- **Data/content separation** is real: ~60 small domain modules under
  `src/data/**`, aggregated in `registry.ts`; no historical facts in
  components.
- **Data-integrity test suite** (`src/app/App.test.tsx`) covering unique ids,
  referential integrity (`sourceIds` / `relatedEventIds`), era cohort sizes,
  and projection sanity — this is what keeps the "no invented facts" policy
  honest.
- **Accessibility** is thoughtfully done: `aria-pressed` toggles, `role="status"`
  live regions, skip link, keyboard-focusable canvas, `prefers-reduced-motion`
  honored in every CSS layer that animates.
- **Deployment** is production-sensible: multi-stage Dockerfile, healthcheck,
  immutable asset caching, gzip, compose dev profile with `init: true` for HMR.
- **Honest documentation**: `CHECKPOINT.md` and `docs/decisions.md` are actual
  working docs, and `README.md` matches reality (the four "🚧" pages really
  are placeholders).

The findings below are mostly polish and two real rendering edge cases in the
timeline canvas. Nothing here blocks shipping. (All High/Medium findings have
since been fixed — see the Resolution Log above.)

---

## High — real defects, worth fixing

### H-1. Projection nodes with the same track + year overlap exactly — ✅ addressed
`src/features/timeline/TimelineCanvas.tsx:291-307`

Historical events go through cluster compression (`MIN_CLUSTER_SPACING`,
lines 97-114), but projections are placed at the raw position:

```tsx
style={{ left: xFor(proj.year), ... }}
```

The data already contains collisions — verified against
`src/data/projections.ts`:

- `cpus`, 2027: `proj-amd-zen6-desktop` **and** `proj-intel-nova-lake`
- `ram`, 2027: `proj-ddr6` **and** `proj-hbm4`

Both pairs render as two buttons at the **same x**, so the second chip/label
is fully covered on the CPUs and RAM lanes.

**Fix:** run projections through the same lane-clustering pass as events
(e.g., include projections in the `lanes` memo's `placed` list, or reuse the
cluster loop per track), or at minimum offset them by their index within the
track+year group. A regression test ("no two placed nodes in the same lane
share an x within `MIN_CLUSTER_SPACING`") would have caught this.

### H-2. Cluster compression pushes late-year events past the canvas edge —
and into the Projections zone — ✅ addressed
`src/features/timeline/TimelineCanvas.tsx:97-114` (constants at 6-12)

Two related problems with the cluster-push algorithm:

1. **It extends to the right with no bound.** `PX_PER_YEAR = 80` but
   `MIN_CLUSTER_SPACING = 110`, so a same-year cluster of *n* events pushes
   the last one `110·(n−1)px` past its year line — ~2.75 "years" for a
   3-event cluster. The data already triggers this: verified same-track
   same-year duplicates include `computers:1977` (3 events), `cpus:1999`,
   `cpus:2017`, `cpus:2022`, `cpus:2024`, `cpus:2026` (2 each), etc.
2. **Worst case spills out of the canvas.** The last era ends at 2026, so
   `width = (2026 − 1940)·80`. The second 2026 CPUs event is placed at
   `x(2026) + 110px` — **beyond the inner width**, i.e., a *historical* node
   rendered inside the "Projections (2027+)" band (which starts at
   `presentX = x(2026) + 40px`). This directly undermines the
   history-vs-projection visual contract the project is proud of.

**Fix:** compute the push within a bounded range — e.g., cap placement at
`min(x, width − CHIP_W)` and stack/vertical-offset overflows, or center the
cluster on the year rather than growing it rightward (push both directions).
Add a test that max placed x ≤ canvas width.

### H-3. Stale docstring misstates the clustering contract — ✅ addressed
`src/features/timeline/TimelineCanvas.tsx:35`

> "close events are compressed into even **90px** columns"

The constant is `MIN_CLUSTER_SPACING = 110` (line 9). Minor in isolation, but
this is exactly the kind of comment that misleads the next person editing the
layout. Align it (or derive the comment from the constant).

---

## Medium — correctness, consistency, maintainability

### M-1. Default focus year disagrees between App and TimelinePage — ✅ addressed
- `src/App.tsx:27` — `useState<number>(1995)` → whole-site era theme starts
  at the *Multimedia* era.
- `src/features/timeline/TimelinePage.tsx:38` — `useState<number>(1981)` →
  the canvas starts at the *Birth of the PC* era.

On first load the site is themed as 1995 while the timeline shows 1981.
Pick one constant (or initialize App from the timeline's default) and export
it from `src/app/focusYear.ts` so there is a single source of truth. Note
`src/app/App.test.tsx:86` hard-codes `1981`, so the test will pin whichever
value you keep — good, but keep them in sync.

### M-2. Duck-typed event/projection discrimination — ✅ addressed
`src/features/timeline/TimelinePage.tsx:61`

```tsx
if ('confidence' in item) { /* projection */ }
```

This works only because `Projection.confidence` is required and
`HistoricalEvent` has no `confidence` key. A future field rename or a
`confidence` spec on an event silently breaks this. Prefer an explicit
type guard:

```ts
const isProjection = (x: HistoricalEvent | Projection): x is Projection =>
  'confidence' in x && 'basis' in x;
```

### M-3. `eraForYear` silently clamps projection years to the Modern era — ✅ addressed (documented as D-010)
`src/data/eras.ts:204-210`

Selecting any projection sets `focusYear ≥ 2027`, and the whole-site theme
falls back to the *Modern* era with no visual hint that the user is "beyond
history." That's a defensible choice, but the site has a distinct
projections identity (band, chip, dashed nodes) — consider either a small
"projections" theme state in `App.tsx` or documenting this fallback in
`docs/decisions.md`.

### M-4. No CI — ✅ addressed
There is no `.github/workflows/`. The only gates are "ran locally / in
Docker," which is exactly how H-1/H-2 survived to v0.8. A small workflow
(`npm ci && npm run typecheck && npm run lint && npm test`, or the same
container run used for this review) would cost ~3 minutes per push.

### M-5. `sources.ts` ↔ `docs/research-sources.md` sync is manual and untested — ✅ addressed (4 missing entries added + sync test)
Both files claim to be mirrors of each other (`src/data/sources.ts:3-7`,
2095 lines of sources). The integrity tests verify that *event → source id*
resolves, but nothing verifies the two files agree with each other, or that
`factsUsed` / `accessed` are sane (e.g., the seed sources all carry
`accessed: '2026-01-01'` — placeholder-looking). Consider generating the
Markdown from `sources.ts` (or a test that diffs id sets).

### M-6. `exactDate` format is inconsistent — ✅ addressed (integrity test added; all 85 current values comply)
`src/types/historical-event.ts:47-48` documents `"1981-08-12"`-style dates,
but the data contains `exactDate: '1974-04'` (`src/data/cpu/early.ts:57`)
and mixed precisions. `EventDetail` renders whatever string is stored
(`EventDetail.tsx:30`), so that's safe — but a one-line integrity-test regex
(`^\d{4}(-\d{2}){0,2}$`) would prevent free-text creep into a field the UI
treats as a date.

### M-7. Auto-scroll fires on every scrub step — ✅ addressed
`src/features/timeline/TimelineCanvas.tsx:119-130`

`el.scrollTo({ behavior: 'smooth' })` runs on **every** `focusYear` change,
including each step of the range-input scrub (`TimelinePage.tsx:163-171`),
so dragging the scrubber queues many competing smooth scrolls. Batch it
(throttle/debounce, or `behavior: 'auto'` for programmatic scrub and
`'smooth'` only for event selection).

### M-8. Misleading build config comment — ✅ addressed
`vite.config.ts:14-17`

```ts
// Split React + app into stable vendor chunks.
chunkSizeWarningLimit: 600,
```

There is no `manualChunks` / rollup splitting config here — the comment
describes intent, not behavior. Either add the `manualChunks` config or drop
the comment (React 18 + this page count currently stays under the limit).


---

## Low — polish & nits

| # | Where | Note |
| --- | --- | --- |
| L-1 | `src/data/registry.ts:132-138` | `eventsForTrack` and `eventsInRange` are unused everywhere (verified by grep). Either wire them into the placeholder pages or delete; exported dead code reads like an API. — ✅ deleted. |
| L-2 | `src/features/timeline/EventList.tsx:43` | `role="list"` wraps `<section>` elements, but a list's children must be list items. Drop the role (the `<ul>`s already provide semantics) or restructure. — ✅ role removed. |
| L-3 | `nginx.conf:15` | `gzip_types … application/javascript` — modern browsers report `text/javascript`. Harmless today, but worth correcting. — ✅ fixed. |
| L-4 | `src/features/timeline/TimelineCanvas.tsx:135-150` | Custom pointer-drag on top of native scrolling with no `touch-action` set. Works on trackpads, but on touch devices the interaction between `setPointerCapture` and native pan is browser-dependent. Consider `touch-action: pan-x` on `.tl-canvas` and letting the browser own touch panning. — ✅ `touch-action: pan-x` added to `.tl-canvas`. |
| L-5 | `src/utils/format.ts:8-13` | `specLabel` turns keys into "Cpu" / "Mhz" labels. A small `KEY → label` override map for the ~10 common spec keys would read better in the detail panel. — ✅ `SPEC_LABEL_OVERRIDES` map added (32 keys), test-pinned. |
| L-6 | `index.html` | No favicon, no Open Graph tags. One line each, cheap win for a public repo. — ✅ `public/favicon.svg` + `og:*`/`twitter:card` meta added. |
| L-7 | `src/data/sources.ts` | The overwhelming majority of publishers are "Wikipedia (citing …)". Fine for a v0.x museum, but the site's positioning ("no invented history") is only as strong as its weakest source — the next content pass should lean on CHM / vendor archives where possible. _(open — content work)_ |
| L-8 | `src/features/gallery/*`, `typical-pc/*`, etc. | Placeholder pages inline their status text. Fine, but a shared `<UnderConstruction lede=…/>` would keep the four pages from drifting apart. — ✅ shared component added; all four pages use it. |

---

## Testing — what's missing

Current coverage (20 tests) is good for its shape: shell behavior, data
integrity, era cohorts, projections. Gaps that map directly to the bugs
above:

1. **Clustering invariant** (would catch H-1 & H-2) — ✅ done:
   `src/features/timeline/layout.test.ts` (4 tests: min spacing, max-x bound,
   same-year separation, shifted-cluster collision) after extracting the
   placement into pure `src/features/timeline/layout.ts`.
2. **`parseRoute`** (`src/app/routes.ts`): unknown / hash-only / empty cases.
   — ✅ done: `src/app/routes.test.ts`.
3. **`eraForYear`** boundary years (1939, 1940, 1969, 1970, 2026, 2027) —
   especially the 2027 clamp behavior (M-3). — ✅ done: `src/data/eras.test.ts`
   (also asserts the eras tile 1940–2026 with no gaps or overlaps).
4. **`focusYear` channel**: emit / subscribe / cleanup (small, but it's the
   cross-page contract). — ✅ done: `src/app/focusYear.test.ts`.


---

## Suggested next steps (ordered)

1. ~~Fix H-1 (projection overlap)~~ — ✅ done (see Resolution Log).
2. ~~Fix H-2 (cluster overflow) + H-3 comment~~ — ✅ done.
3. ~~Unify the default focus year (M-1) + layout-invariant tests~~ — ✅ done.
4. ~~Add a GitHub Actions workflow (M-4)~~ — ✅ done (`.github/workflows/ci.yml`).
5. ~~M-5 / M-6 data hygiene~~ — ✅ done (md twin re-synced + two new integrity tests).
6. ~~Remaining polish (low priority): L-5 spec-label map, L-6 favicon/OG tags,
   L-8 shared `<UnderConstruction/>` component, and open test suggestions 2–4
   in the Testing section above.~~ — ✅ done (see Resolution Log, polish batch).
7. **L-7 source-quality pass** (content work): replace "Wikipedia (citing …)"
   with primary sources (CHM, vendor archives) where available.
8. **Commit & push** the `code-review` branch — first run of the new CI
   workflow (`.github/workflows/ci.yml`) validates the whole batch in the cloud.

---

## What I'd change nothing about

- The `HistoricalEvent` / `Projection` type split — the right call, and the
  tests defend it.
- Hash-based routing — appropriate for a static, single-container deployment;
  don't pay the React Router tax for six routes.
- The 52-import `registry.ts` — verbose but explicit; at 160 events it's
  clearer than a glob-aggregator and the integrity tests cover the seams.
- Era theming via CSS custom properties on `<body>` — simple, effective,
  and the reduced-motion fallbacks are all in place.

