/**
 * Cross-page "focus year" channel.
 *
 * The timeline (and other year-driven features) announce the year they're
 * focused on via a custom event; the app root listens and re-themes the
 * whole site to match that era. Kept in its own module to avoid circular
 * imports between App and feature pages.
 */
export const FOCUS_YEAR_EVENT = 'hardware-timeline-focus-year';

export function emitFocusYear(year: number) {
  window.dispatchEvent(new CustomEvent(FOCUS_YEAR_EVENT, { detail: year }));
}

export function onFocusYear(handler: (year: number) => void): () => void {
  const listener = (e: Event) => {
    const year = (e as CustomEvent<number>).detail;
    if (typeof year === 'number') handler(year);
  };
  window.addEventListener(FOCUS_YEAR_EVENT, listener);
  return () => window.removeEventListener(FOCUS_YEAR_EVENT, listener);
}