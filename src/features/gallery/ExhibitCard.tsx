import type { ImageRef } from '../../types/historical-event';
import type { Exhibit } from '../../data/gallery';
import { emitFocusYear } from '../../app/focusYear';

/**
 * House rule (D-003): illustrations must never be mistaken for photos,
 * so `kind` is surfaced as a badge on every card.
 */
const KIND_LABEL: Record<ImageRef['kind'], string> = {
  photo: 'Photo',
  diagram: 'Illustration',
  render: '3D render',
};

interface ExhibitCardProps {
  exhibit: Exhibit;
}

/**
 * One exhibit: image with attribution + license, the event's significance,
 * and a cross-link to the timeline. Pure presentation — all facts come
 * from the registry event and its ImageRef.
 */
export function ExhibitCard({ exhibit }: ExhibitCardProps) {
  const { event, image } = exhibit;

  return (
    <article className="exhibit" aria-label={`${event.title}, ${event.year}`}>
      <figure className="exhibit__figure">
        <img className="exhibit__img" src={image.url} alt={image.alt} loading="lazy" />
        <figcaption className="exhibit__caption">
          <span className={`exhibit__kind exhibit__kind--${image.kind} mono`}>
            {KIND_LABEL[image.kind]}
          </span>
          <span className="exhibit__credit">
            {image.attribution} · {image.license}
            {image.sourcePage ? (
              <>
                {' · '}
                <a href={image.sourcePage} target="_blank" rel="noreferrer">
                  source
                </a>
              </>
            ) : null}
          </span>
        </figcaption>
      </figure>

      <header className="exhibit__head">
        <h2 className="exhibit__title">{event.title}</h2>
        <p className="exhibit__meta mono">
          {event.year} · {event.manufacturer}
        </p>
      </header>

      <p className="exhibit__significance">{event.significance}</p>

      <a
        className="exhibit__timeline mono"
        href="#/timeline"
        onClick={() => emitFocusYear(event.year)}
      >
        view on timeline →
      </a>
    </article>
  );
}
