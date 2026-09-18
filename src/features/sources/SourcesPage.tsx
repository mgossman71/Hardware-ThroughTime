import { PageShell } from '../../components/PageShell';
import { SOURCES } from '../../data/sources';

export default function SourcesPage() {
  return (
    <PageShell
      kicker="06 — REFERENCES"
      title="Sources & References"
      lede="Every historical claim on this site traces back to at least one entry here. Where sources disagree, the entry is flagged and the range is shown."
    >
      {SOURCES.length === 0 ? (
        <p className="mono" style={{ color: 'var(--text-2)' }}>
          // sources are being added as content is researched.
        </p>
      ) : (
        <ul className="sources-list">
          {SOURCES.map((s) => (
            <li key={s.id} className="sources-list__item">
              <div className="sources-list__head">
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.title}
                </a>
                <span className="sources-list__pub">{s.publisher}</span>
              </div>
              <ul className="sources-list__facts">
                {s.factsUsed.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}