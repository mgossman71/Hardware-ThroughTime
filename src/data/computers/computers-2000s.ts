import type { HistoricalEvent } from '../../types/historical-event';

/**
 * 2000s personal computers — the enthusiast/gaming and performance-desktop era.
 */
export const COMPUTERS_2000S: HistoricalEvent[] = [
  {
    id: 'power-mac-g5',
    year: 2003,
    exactDate: '2003-08',
    track: 'computers',
    title: 'Apple Power Mac G5',
    summary:
      'The first 64-bit-capable desktop and Apple’s flagship “performance” machine — dual PowerPC G5 CPUs in a brushed-steel tower.',
    detailedDescription:
      'The Power Mac G5 (announced August 2003, shipping September) paired two PowerPC G5 (970fx) CPUs at 1.8–2.5 GHz with Apple’s integrated dual-channel DDR memory controller (a design feature borrowed from the Athlon 64 idea of putting the RAM controller on the CPU). It was the first widely sold 64-bit-capable desktop, ran Mac OS X (10.3), and was the enthusiast “tower” of the early 2000s — a direct rival to the Athlon 64 / Pentium 4 gaming-and-workstation box. It was the last PowerPC-based desktop before Apple’s 2006 move to Intel.',
    manufacturer: 'Apple',
    specs: {
      cpu: 'Dual PowerPC G5 (970fx) @ 1.8 / 2.0 / 2.5 GHz',
      ram: 'Dual-channel DDR-333 / DDR-400 (up to 10 GB)',
      bus: 'PCI + NuBus',
      memory: 'Integrated dual-channel DDR controller',
      bitness: '64-bit capable (x86-64-class address space)',
      os: 'Mac OS X 10.3 (Panther)',
      basePrice: '~US$2,499 (2003)',
    },
    significance:
      'The Power Mac G5 is the “performance tower” icon of the early-2000s era and Apple’s answer to the Intel/AMD performance race. Its integrated memory controller and 64-bit capability anticipated the industry’s 64-bit pivot (led by AMD’s Athlon 64), and it was the last great PowerPC desktop before Apple’s 2006 switch to Intel Core.',
    sourceIds: ['wiki-power-mac-g5'],
    relatedEventIds: ['power-mac-6100', 'amd-athlon-64', 'windows-xp'],
  },
];