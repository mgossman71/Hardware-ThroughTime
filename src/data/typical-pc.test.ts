import { TYPICAL_PCS, typicalPcForYear } from './typical-pc';
import { SOURCES } from './sources';
import { ERAS } from './eras';

const sourceIds = new Set(SOURCES.map((s) => s.id));

describe('typical-pc data', () => {
  it('covers 24 unique milestone years 1977–2026, stored ascending', () => {
    expect(TYPICAL_PCS).toHaveLength(24);
    const years = TYPICAL_PCS.map((p) => p.year);
    expect(new Set(years).size).toBe(years.length);
    const sorted = [...years].sort((a, b) => a - b);
    expect(years).toEqual(sorted);
    expect(sorted[0]).toBe(1977);
    expect(sorted[sorted.length - 1]).toBe(2026);
  });

  it('every sourceId resolves against the sources registry', () => {
    const missing: string[] = [];
    TYPICAL_PCS.forEach((pc) =>
      pc.sourceIds.forEach((id) => {
        if (!sourceIds.has(id)) missing.push(`${pc.year}:${id}`);
      }),
    );
    expect(missing).toEqual([]);
  });

  it('every entry carries the required component fields', () => {
    for (const pc of TYPICAL_PCS) {
      expect(pc.cpu?.name).toBeTruthy();
      expect(pc.ram?.capacity).toBeTruthy();
      expect(pc.ram?.technology).toBeTruthy();
      expect(pc.gpu?.maxResolution).toBeTruthy();
      expect(pc.storage?.primary).toBeTruthy();
      expect(pc.display?.typicalResolution).toBeTruthy();
      expect(pc.expansionBus).toBeTruthy();
      expect(pc.operatingSystem).toBeTruthy();
      expect(pc.referenceMachines.length).toBeGreaterThan(0);
      expect(pc.sourceIds.length).toBeGreaterThan(0);
      expect(pc.caveats?.length ?? 0).toBeGreaterThan(0);
      expect(pc.inflationBasis).toBeTruthy();
    }
  });

  it('inflation figures are consistent with the stated CPI basis (±$100)', () => {
    for (const pc of TYPICAL_PCS) {
      if (pc.priceUsd == null) continue;
      const m = pc.inflationBasis?.match(/= ([\d.]+) → 2024 = 313\.7/);
      expect(m).not.toBeNull();
      const cpi = parseFloat(m![1]);
      const expected = pc.priceUsd * (313.7 / cpi);
      expect(Math.abs(expected - (pc.priceInflatedUsd2024 ?? 0))).toBeLessThanOrEqual(100);
    }
  });

  it('every milestone year falls inside a defined era', () => {
    for (const pc of TYPICAL_PCS) {
      const era = ERAS.find((e) => pc.year >= e.startYear && pc.year <= e.endYear);
      expect(era, `no era for ${pc.year}`).toBeDefined();
    }
  });

  it('typicalPcForYear snaps to the nearest milestone year', () => {
    expect(typicalPcForYear(1980).year).toBe(1981);
    expect(typicalPcForYear(2024).year).toBe(2023);
    expect(typicalPcForYear(1977).year).toBe(1977);
  });
});