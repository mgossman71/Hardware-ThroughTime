/**
 * Formatting helpers for spec values.
 *
 * Keep this pure and dependency-free so it's trivially testable.
 */

/** Convert a spec key like `clockMhz` → "Clock" or `processNode` → "Process Node". */
export function specLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

/** Format a numeric spec value with reasonable separators. */
export function formatSpecValue(_key: string, value: number | string): string {
  if (typeof value === 'string') return value;
  // Heuristic: large integers get thousands separators; small floats keep decimals.
  if (Number.isInteger(value) && value >= 1000) {
    return value.toLocaleString('en-US');
  }
  return String(value);
}
