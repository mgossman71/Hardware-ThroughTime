import type { Source } from '../types/historical-event';

/**
 * Source registry.
 *
 * `docs/research-sources.md` is the human-readable mirror of this file — keep
 * them in sync when adding sources. Every HistoricalEvent must reference at
 * least one entry here via `sourceIds`.
 *
 * Sources are added as the research phase progresses (see CHECKPOINT.md for
 * what still needs to be researched).
 */
export const SOURCES: Source[] = [
  {
    id: 'wiki-intel-4004',
    title: 'Intel 4004',
    publisher: 'Wikipedia (citing Intel / IEEE / CHM)',
    url: 'https://en.wikipedia.org/wiki/Intel_4004',
    factsUsed: [
      'Released November 15, 1971',
      '2,300 transistors',
      '740 kHz max clock',
      '4-bit BCD, 10 µm process, DIP-16',
      'Designed for Busicom 141-PF calculator',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-intel-8080',
    title: 'Intel 8080',
    publisher: 'Wikipedia (citing Intel / IEEE)',
    url: 'https://en.wikipedia.org/wiki/Intel_8080',
    factsUsed: [
      'Launched April 1974',
      '8-bit, 16-bit address bus (64 KB)',
      '6 µm process, DIP-40',
      'Max clock 3.125 MHz',
      '~6,000 transistors (range 4,500–6,000 per sources)',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-mos-6502',
    title: 'MOS Technology 6502',
    publisher: 'Wikipedia (citing MOS Technology / IEEE)',
    url: 'https://en.wikipedia.org/wiki/MOS_Technology_6502',
    factsUsed: [
      'Launched September 1975',
      '8-bit, 16-bit address bus',
      '1 MHz to 3 MHz clock',
      '~3,510 transistors',
      'DIP-40',
      'Used in Apple II, Commodore 64, Atari 8-bit',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-altair-8800',
    title: 'Altair 8800',
    publisher: 'Wikipedia (citing MITS / Popular Electronics)',
    url: 'https://en.wikipedia.org/wiki/Altair_8800',
    factsUsed: [
      'Released December 19, 1974',
      'Intel 8080 @ 2 MHz',
      'Kit price US$439, assembled US$621',
      '~25,000 units sold',
      'No screen, front-panel LEDs, mail-order sales',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-apple-ii',
    title: 'Apple II',
    publisher: 'Wikipedia (citing Apple / Wozniak)',
    url: 'https://en.wikipedia.org/wiki/Apple_II',
    factsUsed: [
      'Released June 1977',
      'MOS 6502 @ 1.023 MHz',
      'Built-in color video (NTSC)',
      'Storage: cassette, 5.25" floppy (Disk II)',
      'OS: Integer BASIC / Apple DOS / ProDOS',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-trs-80',
    title: 'TRS-80 (Model I)',
    publisher: 'Wikipedia (citing Tandy / Radio Shack)',
    url: 'https://en.wikipedia.org/wiki/TRS-80',
    factsUsed: [
      'Released August 3, 1977',
      'Zilog Z80 @ 1.774 MHz',
      '4–48 KB RAM',
      'US$599.95 (1977)',
      '>100,000 units sold by 1979',
      'Monochrome 12" CRT, 64×16 characters',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-commodore-pet',
    title: 'Commodore PET',
    publisher: 'Wikipedia (citing Commodore)',
    url: 'https://en.wikipedia.org/wiki/Commodore_PET',
    factsUsed: [
      'Released 1977',
      'US$795 (1977)',
      '~219,000 units sold',
      'MOS 6502 @ 1 MHz',
      'Built-in monochrome CRT, cassette storage',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-commodore-64',
    title: 'Commodore 64',
    publisher: 'Wikipedia (citing Commodore)',
    url: 'https://en.wikipedia.org/wiki/Commodore_64',
    factsUsed: [
      'Released August 1982',
      'MOS 6510 @ 1.023 MHz (NTSC) / 0.985 MHz (PAL)',
      '64 KB RAM',
      'VIC-II video (8 sprites, multicolor, 16 colors)',
      'SID 8580 (3-voice synthesizer)',
      '~12.5 million units sold',
    ],
    accessed: '2026-01-01',
  },
  {
    id: 'wiki-ibm-pc-5150',
    title: 'IBM Personal Computer (5150)',
    publisher: 'Wikipedia (citing IBM)',
    url: 'https://en.wikipedia.org/wiki/IBM_Personal_Computer',
    factsUsed: [
      'Released August 12, 1981',
      'Intel 8088 @ 4.77 MHz',
      '16 KB–256 KB DRAM',
      'MDA (720×350 text) or CGA (320×200 color)',
      '5.25" floppy (160/320 KB)',
      'Base price US$1,565 (1981)',
      'PC DOS 1.0 / CP/M-86',
      'Open ISA architecture, third-party compatible',
    ],
    accessed: '2026-01-01',
  },
];

/** Convenience lookup: id → Source. */
export const SOURCE_BY_ID = new Map(SOURCES.map((s) => [s.id, s]));

/** Look up a source by id. Returns undefined if not found — call sites should handle that. */
export function getSource(id: string): Source | undefined {
  return SOURCE_BY_ID.get(id);
}
