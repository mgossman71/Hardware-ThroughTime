import { describe, expect, it } from 'vitest';
import { placeItems } from './layout';

const SPACING = 110;
const xFor = (year: number) => (year - 1970) * 80;

describe('placeItems', () => {
  it('keeps at least minSpacing between consecutive placed items', () => {
    const items = [
      { id: 'a', year: 1971 },
      { id: 'b', year: 1971 },
      { id: 'c', year: 1972 },
      { id: 'd', year: 1975 },
    ];
    const placed = placeItems(items, xFor, SPACING, 10000);
    for (let i = 1; i < placed.length; i += 1) {
      expect(placed[i].x - placed[i - 1].x).toBeGreaterThanOrEqual(SPACING);
    }
  });

  it('never places an item past maxX, even for a same-year cluster at the edge', () => {
    const maxX = xFor(1975);
    const items = [
      { id: 'a', year: 1975 },
      { id: 'b', year: 1975 },
      { id: 'c', year: 1975 },
    ];
    const placed = placeItems(items, xFor, SPACING, maxX);
    for (const p of placed) {
      expect(p.x).toBeLessThanOrEqual(maxX);
      expect(p.x).toBeGreaterThanOrEqual(0);
    }
    // Items must stay distinct — no overlaps.
    expect(new Set(placed.map((p) => p.x)).size).toBe(placed.length);
  });

  it('separates same-track same-year items (projection overlap regression)', () => {
    // Two CPUs projections both in 2027 previously rendered at the same x.
    const maxX = xFor(2028);
    const items = [
      { id: 'proj-a', year: 2027 },
      { id: 'proj-b', year: 2027 },
    ];
    const placed = placeItems(items, xFor, SPACING, maxX);
    expect(placed[0].x).not.toBe(placed[1].x);
    for (const p of placed) {
      expect(p.x).toBeLessThanOrEqual(maxX);
    }
  });

  it('shifted clusters never collide with the previous cluster', () => {
    // Cluster 1 hits the right edge and shifts left; cluster 2 must still
    // sit at least minSpacing away from it.
    const maxX = xFor(1972);
    const items = [
      { id: 'a', year: 1971 },
      { id: 'b', year: 1971 },
      { id: 'c', year: 1972 },
    ];
    const placed = placeItems(items, xFor, SPACING, maxX);
    for (let i = 1; i < placed.length; i += 1) {
      expect(placed[i].x - placed[i - 1].x).toBeGreaterThanOrEqual(SPACING);
    }
    expect(placed[placed.length - 1].x).toBeLessThanOrEqual(maxX);
  });
});
