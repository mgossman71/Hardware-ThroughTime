import { lazy, Suspense, useEffect, useState } from 'react';
import { ROUTES, parseRoute } from './app/routes';
import { eraForYear } from './data/eras';
import { onFocusYear } from './app/focusYear';
import { SiteHeader } from './components/SiteHeader';
import './styles/app.css';

// Feature pages are code-split. Each lives in its own `src/features/**` module.
const TimelinePage = lazy(() => import('./features/timeline/TimelinePage'));
const TypicalPcPage = lazy(() => import('./features/typical-pc/TypicalPcPage'));
const BuildAPcPage = lazy(() => import('./features/build-a-pc/BuildAPcPage'));
const ComparePage = lazy(() => import('./features/era-comparison/ComparePage'));
const GalleryPage = lazy(() => import('./features/gallery/GalleryPage'));
const SourcesPage = lazy(() => import('./features/sources/SourcesPage'));

const PAGE_COMPONENTS: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  timeline: TimelinePage,
  'typical-pc': TypicalPcPage,
  'build-a-pc': BuildAPcPage,
  compare: ComparePage,
  gallery: GalleryPage,
  sources: SourcesPage,
};

export function App() {
  const [route, setRoute] = useState<string>(() => parseRoute(window.location.hash));
  const [focusYear, setFocusYear] = useState<number>(1995);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const off = onFocusYear(setFocusYear);
    return off;
  }, []);

  // Drive era theming off the focused year so the whole site shifts character
  // as the user travels through time.
  const era = eraForYear(focusYear);

  useEffect(() => {
    document.body.dataset.era = era.id;
    document.body.style.setProperty('--accent', era.theme.accent);
    document.body.style.setProperty('--accent-2', era.theme.accentSecondary);
    document.body.style.setProperty('--surface-tint', era.theme.surfaceTint);
    document.body.style.setProperty('--scanline-opacity', String(era.theme.scanline));
  }, [era]);

  const Page = PAGE_COMPONENTS[route] ?? TimelinePage;

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader currentRoute={route} />
      <main id="main" className="app-main">
        <Suspense fallback={<PageFallback />}>
          <Page />
        </Suspense>
      </main>
      <AppFooter />
      <div className="scanline-overlay" aria-hidden="true" />
    </div>
  );
}

function PageFallback() {
  return (
    <div className="page-fallback" role="status" aria-live="polite">
      <span className="page-fallback__label mono">loading…</span>
    </div>
  );
}

function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer__inner">
        <p className="app-footer__brand mono">HARDWARE·THROUGH·TIME</p>
        <p className="app-footer__note">
          An interactive museum of personal-computer hardware. Historical figures are drawn from
          the listed sources; where sources disagree, entries are flagged.
        </p>
        <p className="app-footer__links">
          {ROUTES.map((r) => (
            <a key={r.id} href={r.path}>
              {r.label}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}
