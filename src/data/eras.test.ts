import { describe, expect, it } from 'vitest';
import { ERAS, eraForYear } from './eras';

describe('eraForYear', () => {
  it('maps boundary years to the correct era', () => {
    expect(eraForYear(1940).id).toBe('foundations');
    expect(eraForYear(1969).id).toBe('foundations');
    expect(eraForYear(1970).id).toBe('micro-revolution');
    expect(eraForYear(1977).id).toBe('micro-revolution');
    expect(eraForYear(1978).id).toBe('birth-pc');
    expect(eraForYear(1984).id).toBe('birth-pc');
    expect(eraForYear(1985).id).toBe('multimedia');
    expect(eraForYear(1997).id).toBe('multimedia');
    expect(eraForYear(1998).id).toBe('performance-race');
    expect(eraForYear(2009).id).toBe('performance-race');
    expect(eraForYear(2010).id).toBe('multicore');
    expect(eraForYear(2019).id).toBe('multicore');
    expect(eraForYear(2020).id).toBe('modern');
    expect(eraForYear(2026).id).toBe('modern');
  });

  it('clamps out-of-range years to the nearest era (documented as D-010)', () => {
    expect(eraForYear(1939).id).toBe('foundations');
    // Projection years (2027+) intentionally keep the Modern era theme.
    expect(eraForYear(2027).id).toBe('modern');
    expect(eraForYear(2030).id).toBe('modern');
  });

  it('eras tile the 1940–2026 range with no gaps or overlaps', () => {
    const sorted = [...ERAS].sort((a, b) => a.startYear - b.startYear);
    expect(sorted[0].startYear).toBe(1940);
    expect(sorted[sorted.length - 1].endYear).toBe(2026);
    for (let i = 1; i < sorted.length; i += 1) {
      expect(sorted[i].startYear).toBe(sorted[i - 1].endYear + 1);
    }
  });
});