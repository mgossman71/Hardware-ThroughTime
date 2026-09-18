import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Memory of the Multi-Core era (2014–2015) — DDR4: lower voltage, higher rates.
 */
export const RAM_MULTICORE: HistoricalEvent[] = [
  {
    id: 'ddr4-sdram',
    year: 2014,
    exactDate: '2014-07',
    track: 'ram',
    title: 'DDR4 SDRAM',
    summary:
      '240-pin, 1.2 V, 1600–3200 MT/s — the memory that halved DDR3’s voltage and opened the 2133+ era.',
    detailedDescription:
      'DDR4 (JEDEC JESD79-4, July 2014, mainstream 2015 with Skylake) ran at 1600–3200 MT/s on a 240-pin DIMM at a lower 1.2 V (down from DDR3’s 1.5 V), and it introduced on-die ECC and larger density support. It was the standard PC memory of 2015–2020, the module in the Skylake / Ryzen desktops, and it moved the industry’s memory bandwidth and efficiency into the 8- and 16-core age. It was superseded by DDR5 in 2020.',
    manufacturer: 'Industry (JEDEC JESD79-4)',
    specs: {
      type: 'DDR4 SDRAM',
      pinCount: '240 (DIMM)',
      clocks: '1600–3200 MT/s',
      commonSizes: '4 / 8 / 16 / 32 GB',
      voltage: '1.2 V',
      features: 'On-die ECC, higher density',
    },
    significance:
      'DDR4 is the memory that closes the Multi-Core era: it halved DDR3’s voltage, doubled the density ceiling, and carried the 2015–2020 Skylake / Ryzen / 8-core desktop. It is the module most people picture in a mid-2010s PC, and it is the direct predecessor of DDR5.',
    sourceIds: ['wiki-ddr4'],
    relatedEventIds: ['ddr3-sdram', 'intel-core-i7-6700k', 'amd-ryzen-7-1800x'],
  },
];