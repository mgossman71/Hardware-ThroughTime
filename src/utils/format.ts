/**
 * Formatting helpers for spec values.
 *
 * Keep this pure and dependency-free so it's trivially testable.
 */

/**
 * Display labels for spec keys where the generic camelCase split reads
 * poorly (embedded acronyms, units). Keys not listed fall through to the
 * generic conversion below.
 */
const SPEC_LABEL_OVERRIDES: Record<string, string> = {
  clockMhz: 'Clock (MHz)',
  cpu: 'CPU',
  minCpu: 'Min CPU',
  os: 'OS',
  vram: 'VRAM',
  tdp: 'TDP',
  ram: 'RAM',
  minRam: 'Min RAM',
  initialRam: 'Initial RAM',
  gpu: 'GPU',
  iGPU: 'iGPU',
  npu: 'NPU',
  nand: 'NAND',
  isa: 'ISA',
  ecc: 'ECC',
  fpu: 'FPU',
  phy: 'PHY',
  api: 'API',
  cpe: 'CPE',
  midi: 'MIDI',
  cudaCores: 'CUDA cores',
  rtCores: 'RT cores',
  tensorCores: 'Tensor cores',
  eCores: 'E-cores',
  pCore: 'P-core',
  pCores: 'P-cores',
  l1Cache: 'L1 cache',
  l2Cache: 'L2 cache',
  l3Cache: 'L3 cache',
  psuMin: 'Minimum PSU',
  priceUsd: 'Price (USD)',
  weightKg: 'Weight (kg)',
  seekMs: 'Seek (ms)',
};

/** Convert a spec key like `processNode` → "Process Node", or `clockMhz` → "Clock (MHz)". */
export function specLabel(key: string): string {
  const override = SPEC_LABEL_OVERRIDES[key];
  if (override) return override;
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
