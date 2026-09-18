import { useCallback, useEffect, useState } from 'react';
import { PageShell } from '../../components/PageShell';
import { emitFocusYear, onFocusYear } from '../../app/focusYear';
import { TrackToggles } from './TrackToggles';
import { TimelineCanvas } from './TimelineCanvas';
import { EventList } from './EventList';
import { EventDetail } from './EventDetail';
import { ProjectionDetail } from './ProjectionDetail';
import { ALL_EVENTS } from '../../data/registry';
import { PROJECTIONS } from '../../data/projections';
import { ERAS } from '../../data/eras';
import type { Era, HistoricalEvent, Projection, TrackId } from '../../types/historical-event';
import { TRACKS } from '../../data/tracks';
import './timeline.css';
import './timeline-list.css';

const ALL_TRACKS_ON = Object.fromEntries(TRACKS.map((t) => [t.id, true])) as Record<
  TrackId,
  boolean
>;

const MIN_YEAR = Math.min(...ERAS.map((e) => e.startYear));
const MAX_YEAR = Math.max(
  ERAS[ERAS.length - 1].endYear,
  ...ALL_EVENTS.map((e) => e.year),
  ...PROJECTIONS.map((p) => p.year),
);

/** The aside can show either a real event or a projection. */
type Selection =
  | { type: 'event'; event: HistoricalEvent }
  | { type: 'projection'; projection: Projection };

export default function TimelinePage() {
  const [visibleTracks, setVisibleTracks] = useState<Record<TrackId, boolean>>(ALL_TRACKS_ON);
  const [selected, setSelected] = useState<Selection | null>(null);
  const [showProjections, setShowProjections] = useState(true);
  const [focusYear, setFocusYear] = useState<number>(1981);

  // Listen for focus-year events from other pages/features.
  useEffect(() => onFocusYear(setFocusYear), []);

  const toggleTrack = useCallback((id: TrackId) => {
    setVisibleTracks((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleSelectEvent = useCallback((event: HistoricalEvent) => {
    setSelected({ type: 'event', event });
    setFocusYear(event.year);
    emitFocusYear(event.year);
  }, []);

  const handleSelectProjection = useCallback((projection: Projection) => {
    setSelected({ type: 'projection', projection });
    setFocusYear(projection.year);
    emitFocusYear(projection.year);
  }, []);

  // Related links can point at a real event OR another projection.
  const handleSelectRelated = useCallback((item: HistoricalEvent | Projection) => {
    if ('confidence' in item) {
      setSelected({ type: 'projection', projection: item });
    } else {
      setSelected({ type: 'event', event: item });
    }
    setFocusYear(item.year);
    emitFocusYear(item.year);
  }, []);

  const handleEraFocus = useCallback((era: Era) => {
    const mid = Math.round((era.startYear + era.endYear) / 2);
    setFocusYear(mid);
    emitFocusYear(mid);
  }, []);

  const handleProjectionFocus = useCallback(() => {
    const first = PROJECTIONS[0];
    const year = first ? first.year : 2027;
    setShowProjections(true);
    setFocusYear(year);
    emitFocusYear(year);
  }, []);

  const handleScrub = useCallback((year: number) => {
    setFocusYear(year);
    emitFocusYear(year);
  }, []);

  const visibleEventCount = ALL_EVENTS.filter((e) => visibleTracks[e.track]).length;
  const visibleProjectionCount = showProjections
    ? PROJECTIONS.filter((p) => visibleTracks[p.track]).length
    : 0;
  const selectedId = selected
    ? selected.type === 'event'
      ? selected.event.id
      : selected.projection.id
    : null;

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

            {/* Projections "era" chip — a distinct chip for the 2027+ band. */}
            <button
              type="button"
              className={`era-chip era-chip--projection${showProjections ? ' era-chip--active' : ''}`}
              onClick={handleProjectionFocus}
              aria-pressed={showProjections}
            >
              <span className="era-chip__years mono">2027 →</span>
              <span className="era-chip__name">Projections</span>
            </button>
          </div>

          <div className="timeline-page__projection-toggle">
            <button
              type="button"
              className="timeline-page__projection-toggle-btn"
              onClick={() => setShowProjections((v) => !v)}
              aria-pressed={showProjections}
            >
              {showProjections ? 'Hide projections (2027+)' : 'Show projections (2027+)'}
            </button>
            <span className="timeline-page__projection-hint mono">
              Estimates from vendor roadmaps &amp; standards — not historical record.
            </span>
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
          {visibleEventCount} event{visibleEventCount === 1 ? '' : 's'}
          {visibleProjectionCount > 0
            ? ` · ${visibleProjectionCount} projection${visibleProjectionCount === 1 ? '' : 's'}`
            : ''}{' '}
          on the timeline
        </p>

        <div className="timeline-page__body">
          <div className="timeline-page__canvas">
            <TimelineCanvas
              events={ALL_EVENTS}
              projections={showProjections ? PROJECTIONS : []}
              visibleTracks={visibleTracks}
              selectedId={selectedId}
              onSelect={handleSelectEvent}
              onSelectProjection={handleSelectProjection}
              onEraFocus={handleEraFocus}
              onProjectionFocus={handleProjectionFocus}
              focusYear={focusYear}
            />
            <EventList
              events={ALL_EVENTS}
              projections={showProjections ? PROJECTIONS : []}
              visibleTracks={visibleTracks}
              selectedId={selectedId}
              onSelect={handleSelectEvent}
              onSelectProjection={handleSelectProjection}
            />
          </div>
          {selected?.type === 'event' ? (
            <EventDetail
              event={selected.event}
              onClose={() => setSelected(null)}
              onSelectRelated={handleSelectRelated}
            />
          ) : selected?.type === 'projection' ? (
            <ProjectionDetail
              projection={selected.projection}
              onClose={() => setSelected(null)}
              onSelectRelated={handleSelectRelated}
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
