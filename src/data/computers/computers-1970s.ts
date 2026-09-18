import type { HistoricalEvent } from '../../types/historical-event';

/**
 * 1970s personal computers — the birth of the category.
 */
export const COMPUTERS_1970S: HistoricalEvent[] = [
  {
    id: 'altair-8800',
    year: 1974,
    exactDate: '1974-12-19',
    track: 'computers',
    title: 'Altair 8800',
    summary:
      'The first commercially successful personal computer, sold as a kit from US$439 in late 1974.',
    detailedDescription:
      'Built by MITS around the Intel 8080 running at 2 MHz, the Altair had no screen, no keyboard, and no storage — programming was done with front-panel switches and LED lights. It gained fame when it appeared on the cover of Popular Electronics in January 1975, sparking a hobbyist microcomputer movement. About 25,000 units were sold. Microsoft’s first product, Altair BASIC, was written for this machine.',
    manufacturer: 'MITS',
    specs: {
      cpu: 'Intel 8080 @ 2 MHz',
      kitPrice: 'US$439 (1974)',
      assembledPrice: 'US$621 (1974)',
      unitsSold: '~25,000',
      storage: 'none (memory expansion cards only)',
      display: 'front-panel LEDs, no screen',
    },
    significance:
      'Proved that a microcomputer could be a consumer product. The Altair directly spawned the hobbyist scene, the founding of Microsoft, and the design lineage leading to the Apple II and IBM PC.',
    images: [
      {
        url: '/images/gallery/altair-8800.jpg',
        alt: 'An Altair 8800 computer, exhibited at the Technisches Museum Wien',
        attribution: 'Dr. Bernd Gross, via Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Altair_8800-Computer.jpg',
        kind: 'photo',
      },
    ],
    sourceIds: ['wiki-altair-8800'],
    relatedEventIds: ['intel-8080', 'apple-ii'],
  },
  {
    id: 'apple-ii',
    year: 1977,
    exactDate: '1977-06',
    track: 'computers',
    title: 'Apple II',
    summary:
      'One of the first mass-produced personal computers, notable for built-in color graphics and a closed, polished design.',
    detailedDescription:
      'Designed by Steve Wozniak, the Apple II shipped in June 1977 with a 6502 CPU at 1.023 MHz, built-in color video, and an integrated case — unlike the Altair, it was a finished product you could plug into a TV. Its low-cost CPU (the $25 6502) made it affordable. It ran Integer BASIC, Apple DOS, and later ProDOS, and became the platform for VisiCalc — the first killer spreadsheet app — which helped establish the PC as a business tool.',
    manufacturer: 'Apple Computer',
    specs: {
      cpu: 'MOS 6502 @ 1.023 MHz',
      initialRam: '4 KB (expandable to 48 KB base configuration)',
      graphics: 'built-in color, NTSC video out',
      storage: 'cassette, later 5.25" floppy (Disk II)',
      os: 'Integer BASIC / Apple DOS / ProDOS',
    },
    significance:
      'Established the personal computer as a polished, consumer-ready product rather than a hobbyist kit. Its software ecosystem (VisiCalc, later AppleWorks) demonstrated the business case for PCs.',
    images: [
      {
        url: '/images/gallery/apple-ii.jpg',
        alt: 'An original 1977 Apple II at the Computer History Museum',
        attribution: 'The wub, via Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Apple_II,_1977,_Computer_History_Museum.jpg',
        kind: 'photo',
      },
    ],
    sourceIds: ['wiki-apple-ii', 'wiki-mos-6502'],
    relatedEventIds: ['mos-6502', 'commodore-64'],
  },
  {
    id: 'trs-80-model-1',
    year: 1977,
    exactDate: '1977-08-03',
    track: 'computers',
    title: 'TRS-80 Model I',
    summary:
      'Radio Shack’s affordable 8-bit computer at US$599.95, selling over 100,000 units by 1979.',
    detailedDescription:
      'Tandy/Radio Shack’s entry into personal computing, the TRS-80 Model I shipped in August 1977 with a Z80 CPU at 1.774 MHz, 4–48 KB RAM, and a built-in monochrome display. Its low price and the distribution power of Radio Shack made it one of the most widely owned personal computers of the late 1970s. It ran TRSDOS and Level I BASIC.',
    manufacturer: 'Tandy Corporation (Radio Shack)',
    specs: {
      cpu: 'Zilog Z80 @ 1.774 MHz',
      ram: '4–48 KB',
      price: 'US$599.95 (1977)',
      unitsSold: '>100,000 (as of 1979)',
      display: 'monochrome 12" CRT, 64×16 characters',
      os: 'TRSDOS / Level I BASIC',
    },
    significance:
      'Proved that a personal computer could be sold through mainstream retail at a mass-market price point. Its distribution model prefigured how later PCs would reach consumers.',
    sourceIds: ['wiki-trs-80'],
    relatedEventIds: ['zilog-z80', 'commodore-64'],
  },
  {
    id: 'commodore-pet',
    year: 1977,
    track: 'computers',
    title: 'Commodore PET',
    summary:
      'Commodore’s first personal computer, notable for an integrated design with a built-in display and cassette drive.',
    detailedDescription:
      'Announced in 1977, the PET (Personal Electronic Transactor) was one of the first all-in-one personal computers, integrating CPU, memory, keyboard, cassette storage, and a built-in display in a single case. Priced at US$795, it sold about 219,000 units. It was aimed at business and education markets and ran a variant of BASIC with a built-in disk/cassette OS.',
    manufacturer: 'Commodore International',
    specs: {
      cpu: 'MOS 6502 @ 1 MHz',
      price: 'US$795 (1977)',
      unitsSold: '~219,000',
      storage: 'cassette (built-in), later 8" floppy (CBM 4040)',
      display: 'built-in monochrome CRT',
    },
    significance:
      'One of the first integrated (all-in-one) personal computers, showing that a PC could be a single self-contained product rather than a collection of boards.',
    sourceIds: ['wiki-commodore-pet'],
    relatedEventIds: ['mos-6502', 'commodore-64'],
  },
  {
    id: 'commodore-64',
    year: 1982,
    exactDate: '1982-08',
    track: 'computers',
    title: 'Commodore 64',
    summary:
      'The best-selling single-model personal computer of all time (~12.5 million units), famous for its 64 KB RAM, VIC-II graphics, and SID sound.',
    detailedDescription:
      'Released in August 1982, the C64 combined a 6510 CPU at 1.023 MHz with 64 KB of RAM — ten times the 640 KB ceiling of the contemporary IBM PC — plus the VIC-II video chip (sprites, multicolor, hardware scrolling) and the SID sound chip (3-voice synthesizer). Its price of ~US$595 made it extraordinarily affordable. It dominated the home computer market through the mid-1980s and spawned one of the largest game libraries ever built for a single platform.',
    manufacturer: 'Commodore International',
    specs: {
      cpu: 'MOS 6510 @ 1.023 MHz (NTSC)',
      ram: '64 KB',
      video: 'VIC-II (8 hardware sprites, multicolor, 16 colors)',
      sound: 'SID 8580 (3-voice synthesizer)',
      price: 'US$595 (1982)',
      unitsSold: '~12.5 million',
    },
    significance:
      'The C64 made computing a mass-market, consumer product. Its combination of price, capability, and a huge software library defined the home computer era and influenced generations of developers.',
    images: [
      {
        url: '/images/gallery/commodore-64.jpg',
        alt: 'A Commodore 64 home computer',
        attribution: 'Evan-Amos, via Wikimedia Commons',
        license: 'Public domain',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Commodore-64-Computer-BL.jpg',
        kind: 'photo',
      },
    ],
    sourceIds: ['wiki-commodore-64'],
    relatedEventIds: ['mos-6502', 'apple-ii'],
  },
];

