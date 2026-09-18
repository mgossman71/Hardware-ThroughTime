import { describe, expect, it } from 'vitest';
import { specLabel, formatSpecValue } from '../utils/format';

describe('format helpers', () => {
  it('converts camelCase spec keys to labels', () => {
    expect(specLabel('clockMhz')).toBe('Clock (MHz)');
    expect(specLabel('processNode')).toBe('Process Node');
    expect(specLabel('cpu')).toBe('CPU');
    expect(specLabel('vram')).toBe('VRAM');
    expect(specLabel('l2Cache')).toBe('L2 cache');
    expect(specLabel('unknownKey')).toBe('Unknown Key');
  });

  it('formats large integers with separators', () => {
    expect(formatSpecValue('transistors', 2300)).toBe('2,300');
    expect(formatSpecValue('clockMhz', 4.77)).toBe('4.77');
  });

  it('passes strings through', () => {
    expect(formatSpecValue('package', 'DIP-40')).toBe('DIP-40');
  });
});
