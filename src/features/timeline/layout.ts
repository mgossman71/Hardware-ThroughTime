/**
 * Pure layout logic for the timeline canvas.
 *
 * Kept separate from `TimelineCanvas.tsx` so the placement invariants are
 * unit-testable without rendering (see `layout.test.ts`):
 *
 *  - no two placed items in a lane are closer than `minSpacing`
 *  - no item is placed past `maxX` (the right edge of the canvas), even when
 *    a same-year cluster would normally be pushed rightward off the edge
 */
export interface Placeable {
  id: string;
  year: number;
}

export interface Placed<T extends Placeable> {
  item: T;
  x: number;
}

/**
 * Place items (sorted by year) on the horizontal axis.
 *
 * Items closer together than `minSpacing` are stretched into even columns.
 * If the stretch would run past `maxX`, the whole current cluster is shifted
 * left so the last item lands exactly on `maxX` — the cluster can never
 * spill outside the canvas or into a region past the last year.
 */
export function placeItems<T extends Placeable>(
  items: T[],
  xFor: (year: number) => number,
  minSpacing: number,
  maxX: number,
): Placed<T>[] {
  const placed: Placed<T>[] = [];
  let clusterStartIdx = 0;
  let clusterLastX = -Infinity;

  for (const item of items) {
    const naturalX = Math.min(Math.max(xFor(item.year), 0), maxX);
    let x: number;
    if (clusterLastX === -Infinity || naturalX - clusterLastX >= minSpacing) {
      x = naturalX;
      clusterStartIdx = placed.length;
    } else {
      x = clusterLastX + minSpacing;
      if (x > maxX) {
        // Shift the whole current cluster left so it fits on the canvas.
        const delta = x - maxX;
        for (let i = clusterStartIdx; i < placed.length; i += 1) {
          placed[i].x -= delta;
        }
        x = maxX;
      }
    }
    clusterLastX = x;
    placed.push({ item, x });
  }

  return placed;
}
