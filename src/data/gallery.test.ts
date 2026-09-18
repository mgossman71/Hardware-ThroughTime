import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { EXHIBITS } from './gallery';
import { ALL_EVENTS } from './registry';

describe('gallery data', () => {
  it('exhibits 10+ events, oldest first', () => {
    expect(EXHIBITS.length).toBeGreaterThanOrEqual(10);
    const years = EXHIBITS.map((e) => e.event.year);
    expect(years).toEqual([...years].sort((a, b) => a - b));
  });

  it('every exhibit is a real registry event with complete image metadata', () => {
    const ids = new Set(ALL_EVENTS.map((e) => e.id));
    for (const { event, image } of EXHIBITS) {
      expect(ids.has(event.id), `unknown event ${event.id}`).toBe(true);
      expect(image.url, `${event.id}: url`).toMatch(/^\/images\/gallery\//);
      expect(image.alt, `${event.id}: alt`).toBeTruthy();
      expect(image.attribution, `${event.id}: attribution`).toBeTruthy();
      expect(image.license, `${event.id}: license`).toBeTruthy();
      expect(['photo', 'diagram', 'render'], `${event.id}: kind`).toContain(image.kind);
      expect(image.sourcePage, `${event.id}: sourcePage`).toMatch(/^https:\/\/commons\.wikimedia\.org\//);
    }
  });

  it('every referenced image file exists in public/', () => {
    const missing = EXHIBITS.filter(({ image }) => !existsSync(join(process.cwd(), 'public', image.url))).map(
      ({ event }) => event.id,
    );
    expect(missing).toEqual([]);
  });

  it('illustrations are explicitly flagged as diagrams, photos as photos', () => {
    expect(EXHIBITS.filter(({ image }) => image.kind === 'diagram').length).toBeGreaterThanOrEqual(1);
    expect(EXHIBITS.filter(({ image }) => image.kind === 'photo').length).toBeGreaterThanOrEqual(10);
  });

  it('spans the full museum range (1945 → 2020s)', () => {
    const years = EXHIBITS.map((e) => e.event.year);
    expect(years[0]).toBe(1945);
    expect(years[years.length - 1]).toBeGreaterThanOrEqual(2020);
  });
});