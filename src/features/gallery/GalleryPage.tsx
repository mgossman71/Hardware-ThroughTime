import { PageShell } from '../../components/PageShell';
import { EXHIBITS } from '../../data/gallery';
import { ExhibitCard } from './ExhibitCard';
import './gallery.css';

/**
 * "Hardware Gallery" — the imaged subset of the event registry, oldest
 * first. Every card shows its attribution + license, and illustrations are
 * always badged as such (D-003). Adding an image to an event in
 * `src/data/**` adds it to this page automatically.
 */
export default function GalleryPage() {
  return (
    <PageShell
      kicker="05 — HARDWARE GALLERY"
      title="Historical Hardware Exhibits"
      lede="Iconic machines and components from the timeline, each with real photography (clearly attributed, license shown) or an explicitly labeled illustration. Selecting a card's timeline link jumps to that year on the parallel tracks."
    >
      {EXHIBITS.length === 0 ? (
        <p className="gallery__empty">
          No exhibits have been imaged yet. Attach an <code>ImageRef</code> to an
          event in <code>src/data/**</code> and it will appear here.
        </p>
      ) : (
        <div className="gallery__grid">
          {EXHIBITS.map((exhibit) => (
            <ExhibitCard key={exhibit.event.id} exhibit={exhibit} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
