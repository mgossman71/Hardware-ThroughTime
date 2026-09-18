import type { HistoricalEvent } from '../../types/historical-event';

/**
 * 1980s personal computers — the IBM PC standard and its challengers.
 */
export const COMPUTERS_1980S: HistoricalEvent[] = [
  {
    id: 'ibm-pc-5150',
    year: 1981,
    exactDate: '1981-08-12',
    track: 'computers',
    title: 'IBM PC (5150)',
    summary:
      'Released August 12, 1981, the IBM PC established the open-architecture x86 platform that became the de facto standard for business and later consumer computing.',
    detailedDescription:
      'Built around the Intel 8088 at 4.77 MHz with 16–256 KB of DRAM, the IBM PC’s key innovation was its open architecture: a documented ISA bus, a standard BIOS (PC BIOS), and third-party compatibility. IBM shipped it with 5.25" floppy drives, MDA or CGA video, and PC DOS. Its base price was US$1,565 (a more complete system with monitor and floppy ran about US$3,005). Within a few years, “PC compatibles” (clones) built by Compaq, Dell, Gateway, Packard Bell and others made the platform the dominant computing standard in the world.',
    manufacturer: 'IBM',
    specs: {
      cpu: 'Intel 8088 @ 4.77 MHz',
      ram: '16 KB–256 KB (DRAM)',
      video: 'MDA (720×350 text) or CGA (320×200 color)',
      storage: '5.25" floppy (160/320 KB), cassette option',
      audio: 'PC speaker (1-bit square wave)',
      ports: 'serial (RS-232), parallel (Centronics)',
      basePrice: 'US$1,565 (1981)',
      os: 'PC DOS 1.0 / IBM BASIC / CP/M-86',
    },
    significance:
      'Defined the PC platform. Its open ISA bus, PC BIOS, and x86 architecture became the de facto standard that every subsequent PC — compatible or not — had to follow. This is the machine that “PC” stands for.',
    sourceIds: ['wiki-ibm-pc-5150'],
    relatedEventIds: ['intel-8088', 'intel-8086'],
  },
];