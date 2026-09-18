import { PageShell } from '../../components/PageShell';

export default function GalleryPage() {
  return (
    <PageShell
      kicker="05 — HARDWARE GALLERY"
      title="Historical Hardware Exhibits"
      lede="Key machines and components, with real photographs (clearly attributed), specifications, significance, and links to related events. Illustrations are always labeled as such."
    >
      <p className="mono" style={{ color: 'var(--text-2)' }}>
        // under construction — exhibits with licensed photography are being assembled next.
      </p>
    </PageShell>
  );
}