import { PageShell } from '../../components/PageShell';

export default function TypicalPcPage() {
  return (
    <PageShell
      kicker="02 — A TYPICAL PC THROUGH TIME"
      title="What a “normal” PC looked like each year"
      lede="Pick a year and see a representative consumer configuration — CPU, RAM, graphics, storage, network, sound, display, OS, and price (with inflation context). Configurations varied significantly, so each entry lists the machines it is based on."
    >
      <p className="mono" style={{ color: 'var(--text-2)' }}>
        // under construction — year-by-year configurations are being researched and
        populated next.
      </p>
    </PageShell>
  );
}