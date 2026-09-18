import { useEffect, useMemo, useRef, useState } from 'react';
import { ERAS } from '../../data/eras';
import type { Era, HistoricalEvent, Projection, TrackId } from '../../types/historical-event';
import { TRACKS } from '../../data/tracks';
import { placeItems } from './layout';

const PX_PER_YEAR = 80;
const LANE_HEIGHT = 64;
/** Chip slot: must be >= max chip width so clustered nodes never overlap. */
const MIN_CLUSTER_SPACING = 110;
/** Era-label band (top) and year-axis (bottom) heights — must match timeline.css. */
const ERA_LABEL_AREA = 90;
const AXIS_HEIGHT = 40;

interface TimelineCanvasProps {
  events: HistoricalEvent[];
  /** 2027+ roadmap estimates rendered in a distinct band (not in ALL_EVENTS). */
  projections: Projection[];
  visibleTracks: Record<TrackId, boolean>;
  selectedId: string | null;
  onSelect: (event: HistoricalEvent) => void;
  onSelectProjection: (projection: Projection) => void;
  onEraFocus: (era: Era) => void;
  /** Focus the projection band (wired to the "Projections" chip / band label). */
  onProjectionFocus: () => void;
  focusYear: number;
  /** 'smooth' for selection jumps; 'auto' while the user is scrubbing. */
  scrollBehavior?: 'auto' | 'smooth';
}

/**
 * Horizontal year-axis timeline with one lane per visible track.
 *
 * Rendering model:
 *  - container is horizontally scrollable (mouse drag, touch, keyboard)
 *  - era bands are colored regions behind the lanes
 *  - events are absolutely-positioned buttons; close events are compressed
 *    into even columns (MIN_CLUSTER_SPACING, via layout.ts) so labels never
 *    overlap, and a cluster is shifted back if it would run past the canvas edge
 */
export function TimelineCanvas({
  events,
  projections,
  visibleTracks,
  selectedId,
  onSelect,
  onSelectProjection,
  onEraFocus,
  onProjectionFocus,
  focusYear,
  scrollBehavior = 'smooth',
}: TimelineCanvasProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // The canvas spans the full era range (not just the seeded data), so every
  // era chip has a visible band to focus and the indicator line is always
  // reachable. Empty eras render as "no content yet" bands.
  const minYear = Math.min(...ERAS.map((e) => e.startYear));
  const eraMax = Math.max(...ERAS.map((e) => e.endYear));
  // Extend the canvas past the Modern era only when there are projections to
  // show, so the "Projections (2027+)" band has room on the right.
  const maxYear = Math.max(eraMax, ...projections.map((p) => p.year));
  const width = (maxYear - minYear) * PX_PER_YEAR;

  const xFor = (year: number) => (year - minYear) * PX_PER_YEAR;

  // The "2026 · present" divider sits on the boundary between the last
  // historical year (2026) and the first projection year (2027).
  const hasProjections = projections.length > 0;
  const presentX = xFor(eraMax) + PX_PER_YEAR / 2;
  const projZoneLeft = presentX;
  const projZoneWidth = Math.max(0, width - presentX);

  const visibleTrackDefs = TRACKS.filter((t) => visibleTracks[t.id]);

  // The canvas hugs its lanes exactly (era-label band + one row per visible
  // track + year axis), so the last lane is never clipped off-screen.
  const innerHeight =
    ERA_LABEL_AREA + visibleTrackDefs.length * LANE_HEIGHT + AXIS_HEIGHT;

  // Which eras have at least one event (any track) — used to mark empty bands.
  const eventsByEra = useMemo(() => {
    const counts = new Map<string, number>();
    for (const era of ERAS) {
      counts.set(
        era.id,
        events.filter((e) => e.year >= era.startYear && e.year <= era.endYear).length,
      );
    }
    return counts;
  }, [events]);

  // Group events AND projections per lane and compress clusters so labels
  // never overlap (see layout.ts). Projections get the same treatment, so
  // two same-year projections (e.g. two 2027 CPUs) no longer stack exactly.
  const lanes = useMemo(() => {
    return visibleTrackDefs.map((def) => {
      const laneEvents = events
        .filter((e) => e.track === def.id)
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
      const placed = placeItems(laneEvents, xFor, MIN_CLUSTER_SPACING, width).map(
        (p) => ({ event: p.item, x: p.x }),
      );

      const laneProjections = projections
        .filter((p) => p.track === def.id)
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
      const placedProjections = placeItems(laneProjections, xFor, MIN_CLUSTER_SPACING, width).map(
        (p) => ({ projection: p.item, x: p.x }),
      );

      return { def, placed, placedProjections };
    });
  }, [events, projections, visibleTracks, minYear, width]);

  // Scroll to focus year when it changes. 'auto' while scrubbing (each slider
  // step should not queue a competing smooth scroll); 'smooth' for selections.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const target = Math.max(0, xFor(focusYear) - el.clientWidth / 2);
    if (typeof el.scrollTo === 'function') {
      el.scrollTo({ left: target, behavior: scrollBehavior });
    } else {
      // Fallback for environments without Element.scrollTo (e.g. older engines, jsdom).
      el.scrollLeft = target;
    }
  }, [focusYear, scrollBehavior]);

  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    // Only start a drag from non-interactive areas (don't hijack buttons).
    if ((e.target as HTMLElement).closest('button, a')) return;
    setDragging(true);
    dragState.current = { startX: e.clientX, startScroll: el.scrollLeft };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  };

  const endDrag = () => setDragging(false);

  // Tick marks: every year, labeled every N years.
  const allYears: number[] = [];
  for (let y = minYear; y <= maxYear; y++) allYears.push(y);
  const range = maxYear - minYear;
  const labelEvery = range <= 20 ? 2 : range <= 60 ? 5 : 10;

  return (
    <div
      className={`tl-canvas${dragging ? ' tl-canvas--dragging' : ''}`}
      ref={scrollRef}
      role="region"
      aria-label="Timeline"
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div className="tl-canvas__inner" style={{ width, height: innerHeight }}>
        {/* Era bands — full range, so every era chip has a visible target */}
        {ERAS.map((era) => {
          const x = xFor(Math.max(era.startYear, minYear));
          const w = xFor(Math.min(era.endYear, maxYear)) - x;
          if (w <= 0) return null;
          const isFocused = focusYear >= era.startYear && focusYear <= era.endYear;
          const isEmpty = (eventsByEra.get(era.id) ?? 0) === 0;
          return (
            <button
              key={era.id}
              type="button"
              className={[
                'tl-canvas__era',
                isFocused ? 'tl-canvas__era--focused' : '',
                isEmpty ? 'tl-canvas__era--empty' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{
                left: x,
                width: w,
                background: era.theme.surfaceTint,
                borderColor: era.theme.accent,
              }}
              onClick={() => onEraFocus(era)}
              aria-label={`Focus era: ${era.name}, ${era.startYear}–${era.endYear}${isEmpty ? ' (no entries yet)' : ''}`}
            >
              <span className="tl-canvas__era-label mono">{era.name}</span>
              <span className="tl-canvas__era-years mono">
                {era.startYear}–{era.endYear}
              </span>
              {isEmpty && <span className="tl-canvas__era-soon mono">no entries yet</span>}
            </button>
          );
        })}

        {/* Projection band (2027+) — distinct from the historical eras: a tinted
            future zone, a "2026 · present" divider, and a clickable band label. */}
        {hasProjections ? (
          <>
            <div
              className="tl-proj-zone"
              style={{ left: projZoneLeft, width: projZoneWidth }}
              aria-hidden="true"
            />
            <button
              type="button"
              className="tl-proj-label"
              style={{ left: projZoneLeft, width: projZoneWidth }}
              onClick={onProjectionFocus}
              aria-label="Focus the projections band (2027 and beyond)"
            >
              <span className="tl-proj-label__title mono">PROJECTIONS</span>
              <span className="tl-proj-label__years mono">2027+</span>
            </button>
            <div
              className="tl-proj-divider"
              style={{ left: presentX }}
              aria-hidden="true"
            >
              <span className="tl-proj-divider__label mono">{eraMax} · present</span>
            </div>
          </>
        ) : null}

        {/* Year gridlines — faint vertical guides tying nodes to the axis */}
        {allYears.map((y) =>
          y % labelEvery === 0 ? (
            <span
              key={`grid-${y}`}
              className="tl-canvas__gridline"
              style={{ left: xFor(y) }}
              aria-hidden="true"
            />
          ) : null,
        )}

        {/* Focus indicator — the "you are here" line; moves with focusYear */}
        <div
          className="tl-canvas__focus"
          style={{ left: xFor(Math.min(Math.max(focusYear, minYear), maxYear)) }}
          aria-hidden="true"
        >
          <span className="tl-canvas__focus-year mono">{focusYear}</span>
        </div>

        {/* Lanes */}
        <div className="tl-canvas__lanes">
          {lanes.map(({ def, placed, placedProjections }) => {
            return (
              <div
                key={def.id}
                className="tl-lane"
                style={{ height: LANE_HEIGHT, '--track-accent': def.accent } as React.CSSProperties}
              >
                <span className="tl-lane__label">{def.label}</span>
                {placed.map(({ event, x }) => {
                  const isSelected = event.id === selectedId;
                  return (
                    <button
                      key={event.id}
                      type="button"
                      className={`tl-event${isSelected ? ' tl-event--selected' : ''}`}
                      style={{ left: x, top: LANE_HEIGHT / 2, '--track-accent': def.accent } as React.CSSProperties}
                      onClick={() => onSelect(event)}
                      aria-pressed={isSelected}
                      title={`${event.title} (${event.year})`}
                    >
                      <span className="tl-event__dot" aria-hidden="true" />
                      <span className="tl-event__label">{event.title}</span>
                    </button>
                  );
                })}
                {placedProjections.map(({ projection: proj, x }) => {
                  const isSelected = proj.id === selectedId;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      className={`tl-event tl-event--projection${isSelected ? ' tl-event--selected' : ''}`}
                      style={{ left: x, top: LANE_HEIGHT / 2, '--track-accent': def.accent } as React.CSSProperties}
                      onClick={() => onSelectProjection(proj)}
                      aria-pressed={isSelected}
                      title={`${proj.title} (~${proj.year}, projection)`}
                    >
                      <span className="tl-event__dot" aria-hidden="true" />
                      <span className="tl-event__label">{proj.title}</span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Year axis */}
        <div className="tl-axis" aria-hidden="true">
          {allYears.map((y) => (
            <span
              key={y}
              className={`tl-axis__tick${y % labelEvery === 0 ? ' tl-axis__tick--labeled' : ''}`}
              style={{ left: xFor(y) }}
            >
              {y % labelEvery === 0 ? y : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}