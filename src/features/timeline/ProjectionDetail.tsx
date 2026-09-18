import { getSource } from '../../data/sources';
import { getEvent } from '../../data/registry';
import { getProjection } from '../../data/projections';
import { TRACK_BY_ID } from '../../data/tracks';
import type { HistoricalEvent, Projection } from '../../types/historical-event';
import { formatSpecValue, specLabel } from '../../utils/format';

interface ProjectionDetailProps {
  projection: Projection;
  onClose: () => void;
  onSelectRelated: (item: HistoricalEvent | Projection) => void;
}

/**
 * Detail panel for a selected PROJECTION (a 2027+ roadmap estimate).
 *
 * Visually mirrors `EventDetail` but is clearly labelled as a projection: it
 * shows a confidence rating, the published basis for the estimate, and never
 * presents the entry as historical record. Reuses the `event-detail__*`
 * classes so the layout matches the rest of the aside.
 */
export function ProjectionDetail({ projection, onClose, onSelectRelated }: ProjectionDetailProps) {
  const track = TRACK_BY_ID[projection.track];

  // Resolve related ids against BOTH the historical registry and the
  // projections registry (a projection can link to a real event or another
  // projection).
  type Related =
    | { kind: 'event'; item: HistoricalEvent }
    | { kind: 'projection'; item: Projection };

  const related: Related[] = (projection.relatedEventIds ?? [])
    .map((id): Related | null => {
      const event = getEvent(id);
      if (event) return { kind: 'event', item: event };
      const proj = getProjection(id);
      if (proj) return { kind: 'projection', item: proj };
      return null;
    })
    .filter((x): x is Related => x !== null);

  return (
    <article
      className="event-detail event-detail--projection"
      aria-label={`Projection: ${projection.title}`}
    >
      <header className="event-detail__header">
        <div className="event-detail__meta">
          <span className="event-detail__track" style={{ background: track?.accent }}>
            {track?.label}
          </span>
          <span className="event-detail__year mono">~{projection.year}</span>
          <span
            className={`event-detail__confidence event-detail__confidence--${projection.confidence}`}
          >
            {projection.confidence} confidence
          </span>
          <span className="event-detail__maker">{projection.manufacturer}</span>
        </div>
        <div className="event-detail__heading">
          <h2 className="event-detail__title">{projection.title}</h2>
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

      <p className="event-detail__projection-flag mono">projection · estimated, not historical record</p>

      <p className="event-detail__summary">{projection.summary}</p>
      <p className="event-detail__body">{projection.detailedDescription}</p>

      {projection.specs && Object.keys(projection.specs).length > 0 ? (
        <dl className="event-detail__specs">
          {Object.entries(projection.specs).map(([key, value]) => (
            <div key={key} className="event-detail__spec">
              <dt>{specLabel(key)}</dt>
              <dd>{formatSpecValue(key, value)}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <section className="event-detail__significance" aria-label="If it lands">
        <h3 className="event-detail__subhead">If it lands</h3>
        <p>{projection.significance}</p>
      </section>

      <section className="event-detail__basis" aria-label="Basis for the estimate">
        <h3 className="event-detail__subhead">Basis</h3>
        <p>{projection.basis}</p>
      </section>

      {related.length > 0 ? (
        <section className="event-detail__related" aria-label="Related">
          <h3 className="event-detail__subhead">Related</h3>
          <ul className="event-detail__related-list">
            {related.map(({ kind, item }) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelectRelated(item)}
                  className="event-detail__related-link"
                >
                  {item.title} <span className="mono">({kind === 'projection' ? '~' : ''}{item.year})</span>
                  {kind === 'projection' ? ' · projection' : ''}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <footer className="event-detail__sources" aria-label="Sources">
        <h3 className="event-detail__subhead">Sources (roadmap / standard)</h3>
        <ul>
          {projection.sourceIds.map((id) => {
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