import { useCallback, useEffect, useState } from 'react';
import { PageShell } from '../../components/PageShell';
import { emitFocusYear, onFocusYear } from '../../app/focusYear';
import { TrackToggles } from './TrackToggles';
import { TimelineCanvas } from './TimelineCanvas';
import { EventList } from './EventList';
import { EventDetail } from './EventDetail';
import { ALL_EVENTS } from '../../data/registry';
import { ERAS } from '../../data/eras';
import type { Era, HistoricalEvent, TrackId } from '../../types/historical-event';
import { TRACKS } from '../../data/tracks';
import './timeline.css';
import './timeline-list.css';

const ALL_TRACKS_ON = Object.fromEntries(TRACKS.map((t) => [t.id, true])) as Record<
  TrackId,
  boolean
>;

const MIN_YEAR = 1970;
const MAX_YEAR = Math.max(2026, ...ALL_EVENTS.map((e) => e.year));

export default function TimelinePage() {
  const [visibleTracks, setVisibleTracks] = useState<Record<TrackId, boolean>>(ALL_TRACKS_ON);
  const [selected, setSelected] = useState<HistoricalEvent | null>(null);
  const [focusYear, setFocusYear] = useState<number>(1981);

  // Listen for focus-year events from other pages/features.
  useEffect(() => onFocusYear(setFocusYear), []);

  const toggleTrack = useCallback((id: TrackId) => {
    setVisibleTracks((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleSelect = useCallback((event: HistoricalEvent) => {
    setSelected(event);
    setFocusYear(event.year);
    emitFocusYear(event.year);
  }, []);

  const handleEraFocus = useCallback((era: Era) => {
    const mid = Math.round((era.startYear + era.endYear) / 2);
    setFocusYear(mid);
    emitFocusYear(mid);
  }, []);

  const handleScrub = useCallback((year: number) => {
    setFocusYear(year);
    emitFocusYear(year);
  }, []);

  const visibleEventCount = ALL_EVENTS.filter((e) => visibleTracks[e.track]).length;

  return (
    <PageShell
      kicker="01 — MAIN TIMELINE"
      title="Computer Hardware Through Time"
      lede="Travel from the first microprocessors to modern enthusiast desktops. Toggle tracks to follow individual technologies, or follow the whole story in parallel. Every entry is traceable to a listed source."
    >
      <div className="timeline-page">
        <section className="timeline-page__controls" aria-label="Timeline filters">
          <div className="timeline-page__eras" role="group" aria-label="Focus an era">
            {ERAS.map((era) => {
              const active = focusYear >= era.startYear && focusYear <= era.endYear;
              return (
                <button
                  key={era.id}
                  type="button"
                  className={`era-chip${active ? ' era-chip--active' : ''}`}
                  style={
                    active
                      ? { borderColor: era.theme.accent, color: era.theme.accent }
                      : undefined
                  }
                  onClick={() => handleEraFocus(era)}
                  aria-pressed={active}
                >
                  <span className="era-chip__years mono">
                    {era.startYear}–{era.endYear}
                  </span>
                  <span className="era-chip__name">{era.name}</span>
                </button>
              );
            })}
          </div>

          <TrackToggles visible={visibleTracks} onToggle={toggleTrack} />

          <label className="timeline-page__scrub">
            <span className="timeline-page__scrub-label mono">
              Focus year: <strong>{focusYear}</strong>
            </span>
            <input
              type="range"
              min={MIN_YEAR}
              max={MAX_YEAR}
              step={1}
              value={focusYear}
              onChange={(e) => handleScrub(Number(e.target.value))}
              aria-label="Focus year"
            />
          </label>
        </section>

        <p className="timeline-page__status" role="status" aria-live="polite">
          {visibleEventCount} event{visibleEventCount === 1 ? '' : 's'} on the timeline
        </p>

        <div className="timeline-page__body">
          <div className="timeline-page__canvas">
            <TimelineCanvas
              events={ALL_EVENTS}
              visibleTracks={visibleTracks}
              selectedId={selected?.id ?? null}
              onSelect={handleSelect}
              onEraFocus={handleEraFocus}
              focusYear={focusYear}
            />
            <EventList
              events={ALL_EVENTS}
              visibleTracks={visibleTracks}
              selectedId={selected?.id ?? null}
              onSelect={handleSelect}
            />
          </div>
          {selected ? (
            <EventDetail
              event={selected}
              onClose={() => setSelected(null)}
              onSelectRelated={handleSelect}
            />
          ) : (
            <aside className="timeline-page__placeholder" aria-hidden="true">
              <p className="mono">select an event…</p>
              <p>
                Click any dot on the timeline — or any item in the list — to see its story,
                specs, and sources.
              </p>
            </aside>
          )}
        </div>
      </div>
    </PageShell>
  );
}
