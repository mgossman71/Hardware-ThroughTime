import { useEffect, useMemo, useRef, useState } from 'react';
import { ERAS } from '../../data/eras';
import type { Era, HistoricalEvent, TrackId } from '../../types/historical-event';
import { TRACKS } from '../../data/tracks';

const PX_PER_YEAR = 80;
const LANE_HEIGHT = 64;
const MIN_CLUSTER_SPACING = 90;

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

  const years = events.map((e) => e.year);
  const minYear = Math.min(...years) - 1;
  const maxYear = Math.max(...years) + 1;
  const width = (maxYear - minYear) * PX_PER_YEAR;

  const xFor = (year: number) => (year - minYear) * PX_PER_YEAR;

  const visibleTrackDefs = TRACKS.filter((t) => visibleTracks[t.id]);

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
      <div className="tl-canvas__inner" style={{ width }}>
        {/* Era bands */}
        {ERAS.filter((e) => e.endYear >= minYear && e.startYear <= maxYear).map((era) => {
          const x = xFor(Math.max(era.startYear, minYear));
          const w = xFor(Math.min(era.endYear, maxYear)) - x;
          if (w <= 0) return null;
          const isFocused = focusYear >= era.startYear && focusYear <= era.endYear;
          return (
            <button
              key={era.id}
              type="button"
              className={`tl-canvas__era${isFocused ? ' tl-canvas__era--focused' : ''}`}
              style={{
                left: x,
                width: w,
                background: era.theme.surfaceTint,
                borderColor: era.theme.accent,
              }}
              onClick={() => onEraFocus(era)}
              aria-label={`Focus era: ${era.name}, ${era.startYear}–${era.endYear}`}
            >
              <span className="tl-canvas__era-label mono">{era.name}</span>
              <span className="tl-canvas__era-years mono">
                {era.startYear}–{era.endYear}
              </span>
            </button>
          );
        })}

        {/* Lanes */}
        <div className="tl-canvas__lanes">
          {lanes.map(({ def, placed }) => (
            <div key={def.id} className="tl-lane" style={{ height: LANE_HEIGHT }}>
              <span className="tl-lane__label" style={{ color: def.accent }}>
                {def.label}
              </span>
              {placed.map(({ event, x }) => {
                const isSelected = event.id === selectedId;
                return (
                  <button
                    key={event.id}
                    type="button"
                    className={`tl-event${isSelected ? ' tl-event--selected' : ''}`}
                    style={{ left: x, top: LANE_HEIGHT / 2, background: def.accent }}
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