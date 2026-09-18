import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Memory of the Performance Race era (2000–2007) — the DDR generations.
 */
export const RAM_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'ddr-sdram',
    year: 2000,
    track: 'ram',
    title: 'DDR SDRAM',
    summary:
      'Double Data Rate DRAM on 184-pin DIMMs — the memory that doubled bandwidth and replaced SDRAM in 2000–2003.',
    detailedDescription:
      'DDR (Double Data Rate) SDRAM, standardized by JEDEC in 2000 and mainstream from 2001, transferred data on both the rising and falling edge of the clock, doubling effective bandwidth over plain SDRAM at the same frequency. It ran at 100 / 133 MHz (200 / 266 MT/s) on 184-pin DIMMs in 128 / 256 / 512-MB and 1-GB sizes. It was the standard PC memory of 2000–2003, the module in the Pentium 4 / Athlon XP desktop, and the first of the “DDR” generations that define PC memory to this day.',
    manufacturer: 'Industry (JEDEC DDR standard)',
    specs: {
      type: 'DDR SDRAM',
      pinCount: '184 (DIMM)',
      clocks: '100 / 133 MHz (200 / 266 MT/s)',
      commonSizes: '128 / 256 / 512 MB, 1 GB',
      access: 'Double data rate (both clock edges)',
    },
    significance:
      'DDR is the memory that closed the Multimedia era and opened the Performance Race era — it doubled bandwidth over SDRAM and was the module in the Pentium 4 / Athlon XP desktop. It is the first of the DDR generations (DDR → DDR2 → DDR3 → DDR5) that define PC memory to this day.',
    sourceIds: ['wiki-ddr-sdram'],
    relatedEventIds: ['sdram', 'ddr2-sdram', 'intel-pentium-4', 'amd-athlon-xp'],
  },
  {
    id: 'ddr2-sdram',
    year: 2003,
    track: 'ram',
    title: 'DDR2 SDRAM',
    summary:
      'DDR with a 2N prefetch buffer — higher clocks (400–800 MHz) and the memory of the 2003–2007 desktop.',
    detailedDescription:
      'DDR2 (JEDEC standard 2003/2004, mainstream 2004–2005) used a 2N prefetch buffer to run at higher effective rates than DDR: 400 / 533 / 667 MHz (800 / 1066 / 1333 MT/s) on a 240-pin DIMM, at 1.8 V. It was the standard PC memory of 2003–2007, the module in the Pentium 4 / Athlon 64 / Core 2 desktop, and it moved the industry’s memory bandwidth another step up in the GHz/DDR race. It was superseded by DDR3 in 2007.',
    manufacturer: 'Industry (JEDEC DDR2 standard)',
    specs: {
      type: 'DDR2 SDRAM',
      pinCount: '240 (DIMM)',
      clocks: '400 / 533 / 667 MHz (800 / 1066 / 1333 MT/s)',
      commonSizes: '512 MB, 1 / 2 GB',
      voltage: '1.8 V',
      prefetch: '2N',
    },
    significance:
      'DDR2 is the “middle” memory of the Performance Race era — it carried the 2003–2007 Pentium 4 / Athlon 64 / Core 2 desktop and moved PC bandwidth another step up. It is the module most people picture in a mid-2000s “gaming rig,” and it is the direct predecessor of DDR3.',
    sourceIds: ['wiki-ddr2'],
    relatedEventIds: ['ddr-sdram', 'ddr3-sdram', 'intel-core-2-duo'],
  },
  {
    id: 'ddr3-sdram',
    year: 2007,
    track: 'ram',
    title: 'DDR3 SDRAM',
    summary:
      'DDR with an 8N prefetch buffer and lower 1.5 V — the memory that opened the Multi-Core era and defined 2007–2020.',
    detailedDescription:
      'DDR3 (JEDEC standard 2007, mainstream 2007–2008) used an 8N prefetch buffer to run at 800 / 1066 / 1333 MHz (1600 / 2133 / 2666 MT/s) on a 240-pin DIMM at a lower 1.5 V. It was the standard PC memory of 2007–2020, the module in the Core 2 / Core i3 / i5 / i7 desktops, and it moved the industry’s memory bandwidth and efficiency into the multicore age. It was superseded by DDR4 in 2014 and DDR5 in 2020.',
    manufacturer: 'Industry (JEDEC DDR3 standard)',
    specs: {
      type: 'DDR3 SDRAM',
      pinCount: '240 (DIMM)',
      clocks: '800 / 1066 / 1333 MHz (1600 / 2133 / 2666 MT/s)',
      commonSizes: '1 / 2 / 4 GB',
      voltage: '1.5 V',
      prefetch: '8N',
    },
    significance:
      'DDR3 is the memory that closes the Performance Race era and opens the Multi-Core era — it carried the 2007–2020 Core 2 / Core i-series desktop and defined PC memory bandwidth for the multicore age. It is the module most people picture in a 2007–2014 PC, and it is the direct predecessor of DDR4/DDR5.',
    sourceIds: ['wiki-ddr3'],
    relatedEventIds: ['ddr2-sdram', 'intel-core-2-duo'],
  },
];