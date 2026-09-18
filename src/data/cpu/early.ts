import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Early microprocessors (1970–1979) — the foundation for the PC CPU story.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 * Where sources disagree (e.g. transistor counts), both values are noted
 * and the entry is flagged `unverified: true` only if the discrepancy
 * materially affects the claim.
 */
export const EARLY_CPUS: HistoricalEvent[] = [
  {
    id: 'intel-4004',
    year: 1971,
    exactDate: '1971-11-15',
    track: 'cpus',
    title: 'Intel 4004',
    summary:
      'The first commercially available microprocessor, integrating 2,300 transistors onto a 10 µm chip.',
    detailedDescription:
      'Designed by Federico Faggin, Ted Hoff, and Masatoshi Shima, the 4004 was originally built for the Busicom 141-PF printing calculator. It ran at 740 kHz and was BCD-oriented (4-bit). Though too slow for general computing, it proved that a complete CPU could fit on a single chip — the premise on which every personal computer was eventually built.',
    manufacturer: 'Intel',
    specs: {
      transistors: 2300,
      clockMhz: 0.74,
      dataWidth: '4-bit BCD',
      processNode: '10 µm',
      package: 'DIP-16',
      application: 'Busicom calculator',
    },
    significance:
      'Established the microprocessor as a practical, manufacturable component. Without it, the hobbyist microcomputer movement of 1974–1977 — and therefore the PC itself — would not have happened on that timeline.',
    images: [
      {
        url: '/images/gallery/intel-4004.jpg',
        alt: 'The Intel 4004 microprocessor in its open package, manufactured by Intel in the United States, 1971',
        attribution: 'the Science Museum, via Wikimedia Commons',
        license: 'CC BY 4.0',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Intel_4004_open.jpg',
        kind: 'photo',
      },
    ],
    sourceIds: ['wiki-intel-4004'],
    relatedEventIds: ['intel-8008', 'intel-8080'],
  },
  {
    id: 'intel-8008',
    year: 1972,
    track: 'cpus',
    title: 'Intel 8008',
    summary: 'Intel’s first 8-bit microprocessor, stepping up from the 4-bit 4004.',
    detailedDescription:
      'The 8008 was Intel’s response to the 4004’s limitations in general-purpose computing. It was used in some early terminals and, most importantly, in the Datapoint 2200 handheld terminal, which in turn influenced the design of the Altair 8800 and Apple I.',
    manufacturer: 'Intel',
    specs: {
      dataWidth: '8-bit',
      package: 'DIP-18',
    },
    significance:
      'Bridged the gap between calculator chips and general-purpose computing, making 8-bit microcomputers a realistic product category.',
    sourceIds: ['wiki-intel-4004'],
    relatedEventIds: ['intel-4004', 'intel-8080'],
  },
  {
    id: 'intel-8080',
    year: 1974,
    exactDate: '1974-04',
    track: 'cpus',
    title: 'Intel 8080',
    summary:
      'The 8-bit microprocessor that powered the first generation of personal computers, running at up to 2 MHz with ~6,000 transistors.',
    detailedDescription:
      'The 8080 was the chip that made the hobbyist computer era possible. It was fast enough, cheap enough, and well-documented enough that MITS built the Altair 8800 around it, and CP/M (written for the 8080) became the dominant microcomputer OS of the mid-1970s. Its 16-bit address bus gave 64 KB of addressable memory — a huge leap over the 4004’s 4 KB.',
    manufacturer: 'Intel',
    specs: {
      transistors: 6000,
      clockMhz: 2.0,
      dataWidth: '8-bit',
      addressWidth: '16-bit (64 KB)',
      processNode: '6 µm',
      package: 'DIP-40',
    },
    significance:
      'The de facto standard CPU for the first wave of personal computers. CP/M, the Altair, IMSAI, and many other early machines were built around the 8080 or its compatible Z80.',
    sourceIds: ['wiki-intel-8080'],
    relatedEventIds: ['intel-4004', 'zilog-z80', 'mos-6502'],
  },
  {
    id: 'zilog-z80',
    year: 1976,
    track: 'cpus',
    title: 'Zilog Z80',
    summary:
      'A pin-compatible 8080 upgrade with a richer instruction set, becoming the dominant microcomputer CPU of the late 1970s.',
    detailedDescription:
      'Designed by Federico Faggin after leaving Intel, the Z80 was a drop-in replacement for the 8080 with more instructions, better addressing modes, and a cleaner programmer’s model. It powered the TRS-80, Amstrad CPC, and countless other machines, and became the most widely used microprocessor of its era.',
    manufacturer: 'Zilog',
    specs: {
      dataWidth: '8-bit',
      clockMhz: 4.0,
      package: 'DIP-40',
      compatibleWith: 'Intel 8080 (pin-compatible)',
    },
    significance:
      'Gave the 8-bit microcomputer market a stronger, more capable CPU standard. Its success demonstrated that a single well-designed chip could define an entire product category.',
    sourceIds: ['wiki-intel-8080'],
    relatedEventIds: ['intel-8080'],
  },
  {
    id: 'mos-6502',
    year: 1975,
    exactDate: '1975-09',
    track: 'cpus',
    title: 'MOS Technology 6502',
    summary:
      'A radically cheaper 8-bit CPU (~$25 at launch) that became the heart of the Apple II, Commodore 64, Atari 8-bit, and NES.',
    detailedDescription:
      'Designed by Chuck Peddle, Bill Mensch, and Randy Wittke, the 6502 was priced at $25 — a fraction of the 8080’s ~$175 — which made it the obvious choice for affordable consumer computers. It ran at 1 MHz, had a 16-bit address bus, and was used in the Apple II, Commodore 64, Atari 400/800, and thousands of other machines. The 6502’s low cost is a major reason the Apple II and Commodore 64 could be priced for the mass market.',
    manufacturer: 'MOS Technology',
    specs: {
      transistors: 3510,
      clockMhz: 1.0,
      dataWidth: '8-bit',
      addressWidth: '16-bit (64 KB)',
      package: 'DIP-40',
      launchPrice: 'US$25 (1975)',
    },
    significance:
      'The low-cost CPU that made personal computers affordable. The Apple II, Commodore 64, and Atari 8-bit line — the machines that introduced millions of people to computing — were all 6502-based.',
    sourceIds: ['wiki-mos-6502'],
    relatedEventIds: ['intel-8080', 'apple-ii', 'commodore-64'],
  },
  {
    id: 'intel-8086',
    year: 1978,
    track: 'cpus',
    title: 'Intel 8086',
    summary:
      'Intel’s first 16-bit microprocessor, the foundation of the x86 architecture that still powers most PCs today.',
    detailedDescription:
      'The 8086 was Intel’s leap from 8-bit to 16-bit. Its instruction set architecture (x86) evolved continuously through the 80286, 80386, 80486, Pentium, and into modern Core and Xeon processors. The 8086’s 20-bit address bus allowed 1 MB of memory, and its segmented memory model, while awkward, was the basis for the real-mode that MS-DOS ran in for over a decade.',
    manufacturer: 'Intel',
    specs: {
      dataWidth: '16-bit',
      addressWidth: '20-bit (1 MB)',
      clockMhz: 5.0,
      package: 'DIP-40',
    },
    significance:
      'Created the x86 architecture — the single most important CPU lineage in PC history. Every subsequent Intel and AMD PC processor is an evolution of this design.',
    sourceIds: ['wiki-ibm-pc-5150'],
    relatedEventIds: ['intel-8088', 'intel-80286'],
  },
  {
    id: 'intel-80286',
    year: 1982,
    exactDate: '1982-10-01',
    track: 'cpus',
    title: 'Intel 80286',
    summary:
      'The 16-bit microprocessor that added protected mode and 24-bit addressing — the stepping stone between the 8088 and the 32-bit 80386.',
    detailedDescription:
      'The 80286 (October 1982) was Intel’s first 16-bit microprocessor with protected-mode operation: hardware memory segmentation, ring-based privilege levels, and a 24-bit address bus (16 MB). It ran at 6, 8, and 10 MHz and had ~13,000 transistors at 3 µm. Its protected mode was the foundation that Windows/OS 2 later used, and it was the CPU in the IBM PC/AT — the machine that defined the 16-bit PC standard. It was also the first x86 with a hardware FPU option (80287) and the chip that moved the PC from 1 MB to 16 MB of addressable memory.',
    manufacturer: 'Intel',
    specs: {
      transistors: 13000,
      clockMhz: 10,
      clockRange: '6 / 8 / 10 MHz',
      dataWidth: '16-bit',
      addressWidth: '24-bit (16 MB)',
      processNode: '3 µm',
      features: 'Protected mode (segments, rings)',
    },
    significance:
      'The 80286 is the hinge between the 8-bit/16-bit hobbyist PC and the 32-bit era: its protected mode is what Windows/OS 2 and later Windows NT were built on, and it is the CPU in the IBM PC/AT — the machine that made “PC” a durable standard. It is the direct predecessor of the 80386.',
    sourceIds: ['wiki-intel-80286'],
    relatedEventIds: ['intel-8088', 'intel-80386'],
  },
  {
    id: 'intel-8088',
    year: 1979,
    track: 'cpus',
    title: 'Intel 8088',
    summary:
      'The 16-bit internal / 8-bit external variant of the 8086, chosen for the IBM PC in 1981 to reduce system cost.',
    detailedDescription:
      'The 8088 had a 16-bit internal architecture like the 8086 but an 8-bit external data bus, which made the surrounding board cheaper to build. IBM chose it for the original IBM PC in 1981, running it at 4.77 MHz. This decision defined the first generation of PCs and locked in the x86 architecture for the personal computer market.',
    manufacturer: 'Intel',
    specs: {
      dataWidth: '16-bit internal / 8-bit external',
      addressWidth: '20-bit (1 MB)',
      clockMhz: 4.77,
      package: 'DIP-40',
      usedIn: 'IBM PC 5150 (1981)',
    },
    significance:
      'The CPU inside the first IBM PC. Its 8-bit external bus was a cost-saving compromise that nonetheless defined the performance ceiling of the first PC generation.',
    sourceIds: ['wiki-ibm-pc-5150'],
    relatedEventIds: ['intel-8086', 'ibm-pc-5150'],
  },
];
