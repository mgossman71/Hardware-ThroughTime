import type { HistoricalEvent, TrackId } from '../../types/historical-event';
import { TRACKS } from '../../data/tracks';

interface EventListProps {
  events: HistoricalEvent[];
  visibleTracks: Record<TrackId, boolean>;
  selectedId: string | null;
  onSelect: (event: HistoricalEvent) => void;
}

/**
 * Vertical, scroll-friendly list of events — used on narrow viewports where
 * the horizontal canvas would be hard to use.
 */
export function EventList({ events, visibleTracks, selectedId, onSelect }: EventListProps) {
  // Group by track, then by year.
  const groups = TRACKS.filter((t) => visibleTracks[t.id]).map((track) => ({
    track,
    events: events
      .filter((e) => e.track === track.id)
      .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title)),
  }));

  return (
    <div className="event-list" role="list">
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
    </div>
  );
}
