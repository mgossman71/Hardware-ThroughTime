import { ALL_EVENTS } from './registry';
import type { HistoricalEvent, ImageRef } from '../types/historical-event';

/**
 * One gallery card: a registry event plus its primary (first) image.
 */
export interface Exhibit {
  event: HistoricalEvent;
  /** The first (primary) image attached to the event. */
  image: ImageRef;
}

/**
 * Gallery data: every event carrying at least one image, oldest first
 * (ALL_EVENTS is already sorted by year).
 *
 * This is a pure view over the data layer (D-002): attaching an image to
 * an event in `src/data/**` exhibits it automatically — no page-specific
 * facts live here.
 */
export const EXHIBITS: Exhibit[] = ALL_EVENTS.flatMap((event) => {
  const image = event.images?.[0];
  return image ? [{ event, image }] : [];
});
