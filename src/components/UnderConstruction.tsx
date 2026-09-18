import { PageShell } from './PageShell';

interface UnderConstructionProps {
  kicker: string;
  title: string;
  lede: string;
  /** What is being researched/built — rendered after the standard status prefix. */
  progressNote: string;
}

/**
 * Standard scaffold for pages whose feature data is still being researched.
 * Keeps the four placeholder pages visually identical so they can't drift
 * apart (see code-review.md L-8).
 */
export function UnderConstruction({ kicker, title, lede, progressNote }: UnderConstructionProps) {
  return (
    <PageShell kicker={kicker} title={title} lede={lede}>
      <p className="mono under-construction__note" role="status">
        {'// under construction — ' + progressNote}
      </p>
    </PageShell>
  );
}