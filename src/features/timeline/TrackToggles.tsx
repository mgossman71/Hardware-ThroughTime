import { TRACKS } from '../../data/tracks';
import type { TrackId } from '../../types/historical-event';

interface TrackTogglesProps {
  visible: Record<TrackId, boolean>;
  onToggle: (id: TrackId) => void;
}

/**
 * The 11 track enable/disable chips. Rendered as real buttons with
 * aria-pressed so keyboard and screen-reader users can control them.
 */
export function TrackToggles({ visible, onToggle }: TrackTogglesProps) {
  const allVisible = TRACKS.every((t) => visible[t.id]);
  const anyVisible = TRACKS.some((t) => visible[t.id]);

  const setAll = (on: boolean) => {
    TRACKS.forEach((t) => {
      if (visible[t.id] !== on) onToggle(t.id);
    });
  };

  return (
    <div className="track-toggles" role="group" aria-label="Toggle technology tracks">
      <button
        type="button"
        className="track-toggles__all"
        onClick={() => setAll(!allVisible)}
        aria-pressed={!allVisible}
      >
        {allVisible ? 'Hide all' : 'Show all'}
      </button>
      {!anyVisible ? (
        <span className="track-toggles__warning" role="status">
          No tracks selected — showing all.
        </span>
      ) : null}
      {TRACKS.map((t) => (
        <button
          key={t.id}
          type="button"
          className="track-toggles__chip"
          style={{ '--chip-accent': t.accent } as React.CSSProperties}
          aria-pressed={visible[t.id]}
          onClick={() => onToggle(t.id)}
        >
          <span className="track-toggles__dot" aria-hidden="true" />
          {t.label}
        </button>
      ))}
    </div>
  );
}
