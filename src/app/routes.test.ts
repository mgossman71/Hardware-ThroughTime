import { describe, expect, it } from 'vitest';
import { parseRoute } from './routes';

describe('parseRoute', () => {
  it('parses known hash routes', () => {
    expect(parseRoute('#/timeline')).toBe('timeline');
    expect(parseRoute('#/typical-pc')).toBe('typical-pc');
    expect(parseRoute('#/build-a-pc')).toBe('build-a-pc');
    expect(parseRoute('#/compare')).toBe('compare');
    expect(parseRoute('#/gallery')).toBe('gallery');
    expect(parseRoute('#/sources')).toBe('sources');
  });

  it('falls back to timeline for empty or malformed hashes', () => {
    expect(parseRoute('')).toBe('timeline');
    expect(parseRoute('#')).toBe('timeline');
    expect(parseRoute('#/')).toBe('timeline');
    expect(parseRoute('#timeline')).toBe('timeline');
    expect(parseRoute('https://example.com/page')).toBe('timeline');
  });

  it('uses the first segment of nested hashes', () => {
    expect(parseRoute('#/sources/extra')).toBe('sources');
  });
});