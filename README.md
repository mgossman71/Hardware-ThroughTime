# Computer Hardware Through Time

An interactive educational website exploring the evolution of computer
hardware — from early CPUs (1971) to modern enthusiast systems.

> **Content status (v0.1):** the timeline engine and data architecture are
> complete, with verified 1970s–1980s CPU and computer content. Typical-PC,
> Build-a-PC, era comparison, and gallery pages are placeholders awaiting
> researched content. Every historical fact traces to `docs/research-sources.md`.

## Pages

| Route | Page | Status |
| --- | --- | --- |
| `/` | Timeline (parallel tracks, 1971 → 2026) | ✅ seeded 1970s–80s |
| `/typical-pc` | What a "normal" PC looked like each year | 🚧 |
| `/build-a-pc` | Build a PC from era-appropriate parts | 🚧 |
| `/compare` | Then vs now | 🚧 |
| `/gallery` | Hardware exhibits (licensed photos) | 🚧 |
| `/sources` | References | ✅ |

## Development

```bash
npm install
npm run dev       # Vite dev server (http://localhost:5173)
npm test          # vitest
npm run lint      # eslint
npm run build     # tsc -b && vite build
```

### Docker

```bash
docker compose up --build          # production build + nginx → http://localhost:8081
docker compose --profile dev up   # Vite dev hot-reload          → http://localhost:5174
```

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
