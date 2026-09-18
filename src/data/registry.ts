import type { HistoricalEvent } from '../types/historical-event';

/**
 * Central event registry.
 *
 * Every domain data file under `src/data/**` exports an array of
 * `HistoricalEvent`. This module aggregates them and provides lookup
 * helpers used across the site.
 *
 * As more data files are added during the research phase, they are
 * registered here.
 */
import { EARLY_CPUS } from './cpu/early';
import { COMPUTERS_1970S } from './computers/computers-1970s';
import { COMPUTERS_1980S } from './computers/computers-1980s';

const ALL: HistoricalEvent[] = [
  ...EARLY_CPUS,
  ...COMPUTERS_1970S,
  ...COMPUTERS_1980S,
];

/** Sorted by year ascending, then title. Stable for rendering. */
export const ALL_EVENTS: HistoricalEvent[] = [...ALL].sort(
  (a, b) => a.year - b.year || a.title.localeCompare(b.title),
);

const BY_ID = new Map(ALL_EVENTS.map((e) => [e.id, e]));

export function getEvent(id: string): HistoricalEvent | undefined {
  return BY_ID.get(id);
}

export function eventsForTrack(trackId: HistoricalEvent['track']): HistoricalEvent[] {
  return ALL_EVENTS.filter((e) => e.track === trackId);
}

export function eventsInRange(startYear: number, endYear: number): HistoricalEvent[] {
  return ALL_EVENTS.filter((e) => e.year >= startYear && e.year <= endYear);
}
