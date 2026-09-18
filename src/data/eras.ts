import type { Era } from '../types/historical-event';

/**
 * Era definitions used for theming and the decade narrative.
 *
 * These are coarse — the timeline itself is year-granular. Eras exist to give
 * the site a visual "chapter" structure (spec §19).
 */
export const ERAS: Era[] = [
  {
    id: 'foundations',
    startYear: 1940,
    endYear: 1969,
    name: 'Foundations',
    tagline: 'Room-sized machines, magnetic core, and the invention of the transistor.',
    description:
      'Before the PC, computing was the domain of universities, governments, and industry. Vacuum-tube machines, magnetic-core memory, and eventually the transistor and the integrated circuit laid the groundwork that made personal computers possible.',
    theme: {
      accent: '#c9a86a',
      accentSecondary: '#8a6d3b',
      surfaceTint: 'rgba(120, 90, 40, 0.08)',
      scanline: 0.12,
    },
    highlightEventIds: [],
  },
  {
    id: 'micro-revolution',
    startYear: 1970,
    endYear: 1977,
    name: 'Microprocessor Revolution',
    tagline: 'The chip that changed everything.',
    description:
      'The 4004, 8080, 6502 and Z80 put a whole CPU on a single chip. Kit builders, engineers and hobbyists could suddenly own a computer — if only they had a soldering iron and a lot of patience.',
    theme: {
      accent: '#ffb347',
      accentSecondary: '#c98524',
      surfaceTint: 'rgba(255, 150, 40, 0.07)',
      scanline: 0.1,
    },
    highlightEventIds: [],
  },
  {
    id: 'birth-pc',
    startYear: 1978,
    endYear: 1984,
    name: 'Birth of the Personal Computer',
    tagline: 'Beige boxes, 640 KB, and the first software you could buy in a store.',
    description:
      'The Apple II, Commodore 64, TRS-80 and IBM PC turned computing into a consumer product. This is when "my computer" became a real thing.',
    theme: {
      accent: '#e8c46a',
      accentSecondary: '#a58a4a',
      surfaceTint: 'rgba(210, 180, 90, 0.08)',
      scanline: 0.15,
    },
    highlightEventIds: [],
  },
  {
    id: 'multimedia',
    startYear: 1985,
    endYear: 1997,
    name: 'Multimedia PC',
    tagline: 'VGA, CD-ROM, Sound Blaster, and the GUI goes mainstream.',
    description:
      'Windows 3.1 and 95, the 386/486, the first 3D accelerators, CD-ROMs and 56K modems — the multimedia PC defined how most people experienced computing for a decade.',
    theme: {
      accent: '#7fd67f',
      accentSecondary: '#4a8a4a',
      surfaceTint: 'rgba(80, 180, 80, 0.08)',
      scanline: 0.18,
    },
    highlightEventIds: [],
  },
  {
    id: 'performance-race',
    startYear: 1998,
    endYear: 2009,
    name: 'Performance Race',
    tagline: 'Pentium vs. Athlon, GHz wars, broadband, and the 3D game era.',
    description:
      'Clock speed was the headline stat, but the real story was IPC, caches, and the rise of the GPU as a serious parallel processor. Broadband replaced dial-up, and the "gaming rig" became a real thing.',
    theme: {
      accent: '#6ab4f5',
      accentSecondary: '#3a7ab0',
      surfaceTint: 'rgba(60, 120, 200, 0.08)',
      scanline: 0.1,
    },
    highlightEventIds: [],
  },
  {
    id: 'multicore',
    startYear: 2010,
    endYear: 2019,
    name: 'Multi-Core Era',
    tagline: 'More cores, SSDs everywhere, PCIe, and high-resolution displays.',
    description:
      'The GHz race hit a wall; the answer was parallelism. Multi-core CPUs, SSDs, PCIe 3.0, USB 3.0, Wi-Fi 5/6, and displays that finally looked crisp.',
    theme: {
      accent: '#b48bf5',
      accentSecondary: '#7a5ab0',
      surfaceTint: 'rgba(120, 80, 180, 0.08)',
      scanline: 0.08,
    },
    highlightEventIds: [],
  },
  {
    id: 'modern',
    startYear: 2020,
    endYear: 2026,
    name: 'Modern Computing',
    tagline: 'NVMe, DDR5, ray tracing, chiplets, and AI acceleration in every corner.',
    description:
      'Today\'s enthusiast desktop is a parallel machine in every sense: dozens of CPU cores, a GPU with tens of billions of transistors, NVMe storage in the multi-gigabyte-per-second range, and networking that would have seemed impossible thirty years ago.',
    theme: {
      accent: '#4fd1c5',
      accentSecondary: '#2a8a7f',
      surfaceTint: 'rgba(40, 160, 150, 0.08)',
      scanline: 0.05,
    },
    highlightEventIds: [],
  },
];

/** Convenience: find the era a given year falls into. */
export function eraForYear(year: number): Era {
  const era = ERAS.find((e) => year >= e.startYear && year <= e.endYear);
  // Fall back to the closest era if the year is out of range.
  if (era) return era;
  if (year < ERAS[0].startYear) return ERAS[0];
  return ERAS[ERAS.length - 1];
}
