import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era RAM (1955–1966) — magnetic core memory, then the first
 * semiconductor DRAM that would eventually replace it.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const RAM_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'magnetic-core-memory',
    year: 1955,
    track: 'ram',
    title: 'Magnetic Core Memory',
    summary:
      'The standard main memory of the mainframe era — a grid of tiny ferrite rings, non-volatile and reliable.',
    detailedDescription:
      'Magnetic-core memory became the standard main memory for computers from the mid-1950s through the 1970s, used on machines like the IBM 704 and the PDP-8. Each bit was stored in the magnetization of a tiny ferrite ring threaded with wires, and the whole assembly formed a plane of wires addressing a grid of cores. It was non-volatile (it kept its data with power off), fast for its time, and rugged, but it was physically bulky, expensive to assemble, and hard to scale down.',
    manufacturer: 'Widely used (An Wang / Remington Rand early work; standard from ~1955)',
    specs: {
      years: '1955 – 1975 (standard main memory)',
      type: 'magnetic ferrite core',
      nonVolatile: 'yes',
      access: 'order 10 µs',
      drawback: 'bulky, costly, hard to scale',
    },
    significance:
      'Core memory was the main memory that made 1950s–60s computers practical: fast, non-volatile, and reliable enough for production. Its physical and cost limits are exactly the bottleneck that semiconductor DRAM then solved.',
    sourceIds: ['wiki-magnetic-core-memory'],
    relatedEventIds: ['ibm-704', 'pdp-8', 'dram'],
  },
  {
    id: 'dram',
    year: 1966,
    track: 'ram',
    title: 'Dynamic RAM (DRAM)',
    summary:
      'The first semiconductor main memory — one transistor plus a capacitor per bit — the successor to core.',
    detailedDescription:
      'Dynamic RAM was first demonstrated in the mid-1960s (Jack Kilby in 1966, Eugene Klein in 1967), storing each bit as charge on a capacitor behind a single transistor. Because the charge leaks and must be constantly refreshed, it is "dynamic," but it could be made far smaller and cheaper than magnetic core. DRAM became the standard computer main memory from the early 1970s onward, and it is the ancestor of every DDR generation on the RAM track.',
    manufacturer: 'Texas Instruments (Kilby) / Intersil (Klein)',
    specs: {
      invented: '1966 (Kilby) / 1967 (Klein)',
      cell: '1 transistor + 1 capacitor (1T1C)',
      trait: 'dynamic — needs periodic refresh (volatile)',
      replaced: 'magnetic core memory from early 1970s',
    },
    significance:
      'DRAM is the point where main memory left the physical world of ferrite rings and entered silicon. Its 1-transistor-1-capacitor cell is the foundation of all later DRAM (SDRAM, DDR, DDR5), and it is the memory technology the rest of this timeline builds on.',
    sourceIds: ['wiki-dram'],
    relatedEventIds: ['magnetic-core-memory'],
  },
];
