import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Memory modules of the Multimedia PC era (1991–1996).
 */
export const RAM_MULTIMEDIA: HistoricalEvent[] = [
  {
    id: 'edo-simm',
    year: 1991,
    track: 'ram',
    title: 'EDO SIMM (Extended Data Out)',
    summary:
      'The 72-pin, extended-data-out 30 ns SIMM — the memory module most 486/Pentium PCs were filled with in the early 90s.',
    detailedDescription:
      'EDO (Extended Data Out) DRAM, standardized around 1991, held the last address on the data bus so the next read could start immediately, giving ~30–40% more bandwidth than plain FPM at the same clock. The common module was a 72-pin SIMM in 1-, 4-, 8-, 16-, and 32-MB sizes, running at 60/70 ns. EDO SIMMs were the standard upgrade for 486 and early Pentium systems (Windows 95 “16 MB recommended” was typically met with EDO SIMMs) until SDRAM DIMMs took over in 1996–97.',
    manufacturer: 'Industry (JEDEC EDO standard)',
    specs: {
      type: 'EDO DRAM',
      pinCount: '72 (SIMM)',
      typicalSpeed: '30 ns (60/70 ns FPM-equivalent)',
      commonSizes: '1 / 4 / 8 / 16 / 32 MB',
      improvement: '~30–40% over FPM at same clock',
    },
    significance:
      'EDO SIMMs are the memory most people picture in a 1992–1996 PC — the beige 72-pin sticks that went from 4 MB to 16/32 MB as Windows 95 and multimedia software demanded more RAM. They are the reference RAM module for the multimedia era.',
    sourceIds: ['wiki-edo-dram'],
    relatedEventIds: ['sdram', 'intel-pentium', 'windows-95'],
  },
  {
    id: 'sdram',
    year: 1996,
    track: 'ram',
    title: 'SDRAM',
    summary:
      'Synchronous DRAM on 100-pin DIMMs — the faster, parallel-access memory that replaced EDO SIMMs in 1996–97.',
    detailedDescription:
      'SDRAM (1996) synchronized the DRAM to the system bus clock, allowing parallel (pipelined) reads and higher effective bandwidth than EDO at the same speed. It shipped as 100-pin DIMMs in 32-, 64-, and 128-MB sizes at 66, 100, and 133 MHz. SDRAM replaced EDO SIMMs as the standard PC memory in 1996–97 and was the memory in late-90s Pentium II/III desktops. It remained the PC standard until DDR DRAM arrived in 2000.',
    manufacturer: 'Industry (JEDEC SDRAM standard)',
    specs: {
      type: 'SDRAM',
      pinCount: '100 (DIMM)',
      clocks: '66 / 100 / 133 MHz',
      commonSizes: '32 / 64 / 128 MB',
      access: 'Synchronous (pipelined)',
    },
    significance:
      'SDRAM is the memory that carried the late-90s PC (Pentium II/III, Windows 98/2000) and the first major step in the “faster clock, pipelined memory” pattern that led to DDR. It marks the point where PC memory moved from the 72-pin EDO SIMM to the 100-pin DIMM.',
    sourceIds: ['wiki-sdram'],
    relatedEventIds: ['edo-simm', 'intel-pentium-2'],
  },
];