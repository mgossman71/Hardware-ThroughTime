# Computer Hardware Through Time

> **An interactive museum of personal-computer hardware — from the Intel 4004
> (1971) to modern enthusiast desktops.**

Explore computer hardware the way a historian would: **parallel tracks, not a
single narrative**. See what CPUs, GPUs, memory, storage, networking, and
operating systems existed in each era — what a real consumer PC actually
contained that year — and how each generation changed what people could do,
with every claim traceable to a cited source.

> **Content status (v0.1):** the timeline engine and data architecture are
> complete, with verified 1970s–1980s CPU and computer content. Typical-PC,
> Build-a-PC, era comparison, and gallery pages are placeholders awaiting
> researched content. Every historical fact traces to `docs/research-sources.md`.

## Why it's different

- **Parallel tracks.** CPUs, graphics, memory, storage, networking, and OSes
  evolved on independent timelines — the site keeps them in separate lanes
  instead of pretending there was one "best" component per year.
- **No invented history.** Every spec, price, and date on the site references
  a source in `docs/research-sources.md`. Unknowns are left blank; conflicts
  are flagged, not silently resolved.
- **Period-correct builds.** Choose to assemble a PC only from parts that
  were actually on sale in that era.
- **Then vs. now, honestly.** Comparisons include the context that makes raw
  ratios meaningful (or misleading).

## Pages

| Route | Page | Status |
| --- | --- | --- |
| `/` | Timeline (parallel tracks, 1971 → 2026) | ✅ seeded 1970s–80s |
| `/typical-pc` | What a "normal" PC looked like each year | 🚧 |
| `/build-a-pc` | Build a PC from era-appropriate parts | 🚧 |
| `/compare` | Then vs now | 🚧 |
| `/gallery` | Hardware exhibits (licensed photos) | 🚧 |
| `/sources` | References | ✅ |

## Quickstart

```bash
git clone https://github.com/mgossman71/Hardware-ThroughTime.git
cd Hardware-ThroughTime
npm install
npm run dev        # → http://localhost:5173
```

## Development

```bash
npm run dev        # Vite dev server (http://localhost:5173)
npm test           # vitest
npm run lint       # eslint
npm run build      # tsc -b && vite build
```

### Docker

```bash
docker compose up --build          # production build + nginx → http://localhost:8081
docker compose --profile dev up   # Vite dev hot-reload          → http://localhost:5174
```

> If `docker` is not found on macOS with Docker Desktop: start it with
> `open -a Docker` and use
> `/Applications/Docker.app/Contents/Resources/bin/docker`, or add that
> directory to your PATH.

## Architecture

```
src/
├─ App.tsx                 # shell: header + lazy-loaded pages
├─ app/
│  ├─ routes.ts            # route table + parser
│  └─ focusYear.ts         # tiny cross-page store (useSyncExternalStore)
├─ components/             # shared UI (PageShell, SiteHeader)
├─ data/                   # ⚠ content lives here, not in components
│  ├─ registry.ts          # aggregates all HistoricalEvents
│  ├─ tracks.ts            # track ids, colors, order
│  ├─ eras.ts              # era bands
│  ├─ sources.ts           # source of record for every fact
│  ├─ cpu/early.ts         # 1970s–80s CPUs (seeded)
│  └─ computers/*.ts       # 1970s–80s computers (seeded)
├─ features/
│  ├─ timeline/            # TimelineCanvas, TrackToggles, EventList, EventDetail
│  ├─ typical-pc/  build-a-pc/  era-comparison/  gallery/  sources/
├─ styles/                 # tokens, base, app, era themes
├─ types/historical-event.ts
└─ utils/format.ts
```

**Rules of the house**

- Components render data; they never contain historical facts.
- Every event references `sourceIds`; unknowns are omitted, never invented.
- Conflicting sources → `unverified: true` + recorded range.
- Each page is a lazy chunk (Vite code splitting).
- See `docs/decisions.md` for the why, `CHECKPOINT.md` for current state.
