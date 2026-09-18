import { useEffect, useMemo, useRef, useState } from 'react';
import { ERAS } from '../../data/eras';
import type { Era, HistoricalEvent, TrackId } from '../../types/historical-event';
import { TRACKS } from '../../data/tracks';

const PX_PER_YEAR = 80;
const LANE_HEIGHT = 64;
/** Chip slot: must be >= max chip width so clustered nodes never overlap. */
const MIN_CLUSTER_SPACING = 110;
/** Era-label band (top) and year-axis (bottom) heights — must match timeline.css. */
const ERA_LABEL_AREA = 90;
const AXIS_HEIGHT = 40;

interface TimelineCanvasProps {
  events: HistoricalEvent[];
  visibleTracks: Record<TrackId, boolean>;
  selectedId: string | null;
  onSelect: (event: HistoricalEvent) => void;
  onEraFocus: (era: Era) => void;
  focusYear: number;
}

/**
 * Horizontal year-axis timeline with one lane per visible track.
 *
 * Rendering model:
 *  - container is horizontally scrollable (mouse drag, touch, keyboard)
 *  - era bands are colored regions behind the lanes
 *  - events are absolutely-positioned buttons; close events are compressed
 *    into even 90px columns so labels never overlap
 */
export function TimelineCanvas({
  events,
  visibleTracks,
  selectedId,
  onSelect,
  onEraFocus,
  focusYear,
}: TimelineCanvasProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // The canvas spans the full era range (not just the seeded data), so every
  // era chip has a visible band to focus and the indicator line is always
  // reachable. Empty eras render as "no content yet" bands.
  const minYear = Math.min(...ERAS.map((e) => e.startYear));
  const maxYear = Math.max(...ERAS.map((e) => e.endYear));
  const width = (maxYear - minYear) * PX_PER_YEAR;

  const xFor = (year: number) => (year - minYear) * PX_PER_YEAR;

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

  // Group events per lane and compress clusters so labels never overlap.
  const lanes = useMemo(() => {
    return visibleTrackDefs.map((def) => {
      const laneEvents = events
        .filter((e) => e.track === def.id)
        .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

      type Placed = { event: HistoricalEvent; x: number };
      const placed: Placed[] = [];
      let clusterStart = -1;
      let clusterLastX = -Infinity;
      let clusterCount = 0;

      for (const event of laneEvents) {
        const naturalX = xFor(event.year);
        if (clusterStart < 0 || naturalX - clusterLastX >= MIN_CLUSTER_SPACING) {
          clusterStart = naturalX;
          clusterLastX = naturalX;
          clusterCount = 1;
          placed.push({ event, x: naturalX });
        } else {
          const x = clusterStart + clusterCount * MIN_CLUSTER_SPACING;
          clusterLastX = x;
          clusterCount += 1;
          placed.push({ event, x });
        }
      }
      return { def, placed };
    });
  }, [events, visibleTracks, minYear]);

  // Scroll to focus year when it changes.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const target = Math.max(0, xFor(focusYear) - el.clientWidth / 2);
    if (typeof el.scrollTo === 'function') {
      el.scrollTo({ left: target, behavior: 'smooth' });
    } else {
      // Fallback for environments without Element.scrollTo (e.g. older engines, jsdom).
      el.scrollLeft = target;
    }
  }, [focusYear]);

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
          {lanes.map(({ def, placed }) => (
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
            </div>
          ))}
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