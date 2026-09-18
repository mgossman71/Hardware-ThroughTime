import type { ReactNode } from 'react';

interface PageShellProps {
  id?: string;
  kicker?: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

/**
 * Shared page scaffold: consistent max-width, vertical rhythm, and a
 * header block (kicker + title + lede) used by every feature page.
 */
export function PageShell({ id, kicker, title, lede, children }: PageShellProps) {
  return (
    <section className="page-shell" id={id}>
      <header className="page-shell__header">
        {kicker ? <p className="page-shell__kicker mono">{kicker}</p> : null}
        <h1 className="page-shell__title">{title}</h1>
        {lede ? <p className="page-shell__lede">{lede}</p> : null}
      </header>
      <div className="page-shell__body">{children}</div>
    </section>
  );
}
