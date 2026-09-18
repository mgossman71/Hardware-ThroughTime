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
  {
    id: 'ibm-ps2-model-70',
    year: 1987,
    exactDate: '1987-02',
    track: 'computers',
    title: 'IBM PS/2 Model 70',
    summary:
      'IBM’s first 386-based desktop — the machine that defined the “business workstation” of the late 1980s, built around the Micro Channel Architecture.',
    detailedDescription:
      'The Model 70 (type 8551) launched in February 1987 with the Intel 80386 at 16 MHz (33 MHz versions followed in 1988), 1–16 MB of RAM, a Micro Channel Architecture (MCA) bus, and a 40 MB fixed disk. It was expensive — roughly US$6,500 — but it set the template for the late-80s business desktop: full 32-bit, large hard disk, and a proprietary expansion bus that only IBM cards could use. The MCA lock-in was commercially unsuccessful (compatibles couldn’t be built), but the Model 70 proved that 32-bit desktop computing was a real market.',
    manufacturer: 'IBM',
    specs: {
      cpu: 'Intel 80386 @ 16 MHz (33 MHz from 1988)',
      ram: '1–16 MB (FPM DRAM, 30-pin SIMMs)',
      bus: 'Micro Channel Architecture (MCA)',
      storage: '40 MB fixed disk (later 230 MB+)',
      video: 'XGA (832×624) or VGA',
      basePrice: '~US$6,500 (1987)',
      os: 'OS/2 1.x / MS-DOS',
    },
    significance:
      'The first mass-produced 386 desktop and the flagship of IBM’s PS/2 line. Its MCA bus attempt (a proprietary 32-bit slot) prefigured the industry’s later preference for open standards like PCI — and its price point defined the “workstation vs. clone” divide of the late 1980s.',
    sourceIds: ['wiki-ibm-ps2'],
    relatedEventIds: ['intel-80386', 'mca-bus'],
  },
];