import { getSource } from '../../data/sources';
import { getEvent } from '../../data/registry';
import { TRACK_BY_ID } from '../../data/tracks';
import type { HistoricalEvent } from '../../types/historical-event';
import { formatSpecValue, specLabel } from '../../utils/format';

interface EventDetailProps {
  event: HistoricalEvent;
  onClose: () => void;
  onSelectRelated: (event: HistoricalEvent) => void;
}

/**
 * Detail panel for a selected timeline event.
 * Desktop: right-hand aside. Mobile: full-width block above the list.
 */
export function EventDetail({ event, onClose, onSelectRelated }: EventDetailProps) {
  const track = TRACK_BY_ID[event.track];

  return (
    <article className="event-detail" aria-label={`Details: ${event.title}`}>
      <header className="event-detail__header">
        <div className="event-detail__meta">
          <span
            className="event-detail__track"
            style={{ background: track?.accent }}
          >
            {track?.label}
          </span>
          <span className="event-detail__year mono">{event.exactDate ?? event.year}</span>
          <span className="event-detail__maker">{event.manufacturer}</span>
        </div>
        <div className="event-detail__heading">
          <h2 className="event-detail__title">{event.title}</h2>
          <button
            type="button"
            className="event-detail__close"
            onClick={onClose}
            aria-label="Close details"
          >
            ×
          </button>
        </div>
      </header>

      <p className="event-detail__summary">{event.summary}</p>
      <p className="event-detail__body">{event.detailedDescription}</p>

      {event.specs && Object.keys(event.specs).length > 0 ? (
        <dl className="event-detail__specs">
          {Object.entries(event.specs).map(([key, value]) => (
            <div key={key} className="event-detail__spec">
              <dt>{specLabel(key)}</dt>
              <dd>{formatSpecValue(key, value)}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <section className="event-detail__significance" aria-label="Significance">
        <h3 className="event-detail__subhead">Why it mattered</h3>
        <p>{event.significance}</p>
      </section>

      {event.relatedEventIds && event.relatedEventIds.length > 0 ? (
        <section className="event-detail__related" aria-label="Related">
          <h3 className="event-detail__subhead">Related</h3>
          <ul className="event-detail__related-list">
            {event.relatedEventIds.map((id) => {
              const related = getEvent(id);
              if (!related) return null;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onSelectRelated(related)}
                    className="event-detail__related-link"
                  >
                    {related.title} <span className="mono">({related.year})</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <footer className="event-detail__sources" aria-label="Sources">
        <h3 className="event-detail__subhead">Sources</h3>
        <ul>
          {event.sourceIds.map((id) => {
            const source = getSource(id);
            if (!source) return null;
            return (
              <li key={id}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>{' '}
                <span className="event-detail__source-pub">— {source.publisher}</span>
              </li>
            );
          })}
        </ul>
      </footer>
    </article>
  );
}
