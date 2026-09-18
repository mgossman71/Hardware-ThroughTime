import { ROUTES } from '../app/routes';

interface SiteHeaderProps {
  currentRoute: string;
}

export function SiteHeader({ currentRoute }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a href="#/timeline" className="site-header__brand mono" aria-label="Computer Hardware Through Time — home">
        <span aria-hidden="true">▚</span> HARDWARE·THROUGH·TIME
      </a>
      <nav className="site-header__nav" aria-label="Primary">
        {ROUTES.map((r) => (
          <a
            key={r.id}
            href={r.path}
            className="site-header__link"
            aria-current={r.id === currentRoute ? 'page' : undefined}
          >
            {r.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
