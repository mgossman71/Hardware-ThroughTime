import type { HistoricalEvent, Projection, TrackId } from '../../types/historical-event';
import { TRACKS } from '../../data/tracks';

interface EventListProps {
  events: HistoricalEvent[];
  /** 2027+ projections, listed in a clearly-labelled section (only when non-empty). */
  projections: Projection[];
  visibleTracks: Record<TrackId, boolean>;
  selectedId: string | null;
  onSelect: (event: HistoricalEvent) => void;
  onSelectProjection: (projection: Projection) => void;
}

/**
 * Vertical, scroll-friendly list of events — used on narrow viewports where
 * the horizontal canvas would be hard to use.
 */
export function EventList({
  events,
  projections,
  visibleTracks,
  selectedId,
  onSelect,
  onSelectProjection,
}: EventListProps) {
  // Group by track, then by year.
  const groups = TRACKS.filter((t) => visibleTracks[t.id]).map((track) => ({
    track,
    events: events
      .filter((e) => e.track === track.id)
      .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title)),
  }));

  // 2027+ projections grouped by track (listed separately, clearly labelled).
  const projGroups = TRACKS.filter((t) => visibleTracks[t.id]).map((track) => ({
    track,
    projections: projections
      .filter((p) => p.track === track.id)
      .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title)),
  }));

  return (
    <div className="event-list">
      {groups
        .filter((g) => g.events.length > 0)
        .map(({ track, events: trackEvents }) => (
          <section key={track.id} className="event-list__group">
            <h3 className="event-list__track" style={{ color: track.accent }}>
              {track.label}
            </h3>
            <ul>
              {trackEvents.map((event) => (
                <li key={event.id}>
                  <button
                    type="button"
                    className={`event-list__item${
                      event.id === selectedId ? ' event-list__item--selected' : ''
                    }`}
                    style={{ borderLeftColor: track.accent }}
                    onClick={() => onSelect(event)}
                  >
                    <span className="event-list__year mono">{event.year}</span>
                    <span className="event-list__title">{event.title}</span>
                    <span className="event-list__summary">{event.summary}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}

      {projections.length > 0 ? (
        <section
          className="event-list__group event-list__group--projections"
          aria-label="Projections (2027 and beyond)"
        >
          <h3 className="event-list__track event-list__track--projections">Projections (2027+)</h3>
          {projGroups
            .filter((g) => g.projections.length > 0)
            .map(({ track, projections: trackProjections }) => (
              <ul key={track.id}>
                {trackProjections.map((proj) => (
                  <li key={proj.id}>
                    <button
                      type="button"
                      className={`event-list__item event-list__item--projection${
                        proj.id === selectedId ? ' event-list__item--selected' : ''
                      }`}
                      style={{ borderLeftColor: track.accent }}
                      onClick={() => onSelectProjection(proj)}
                    >
                      <span className="event-list__year mono">~{proj.year}</span>
                      <span className="event-list__title">{proj.title}</span>
                      <span className="event-list__summary">{proj.summary}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ))}
        </section>
      ) : null}
    </div>
  );
}
