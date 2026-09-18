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
    highlightEventIds: [
      'eniac',
      'univac-1',
      'ibm-system-360',
      'pdp-8',
      'transistor',
      'integrated-circuit',
      'mosfet',
      'magnetic-core-memory',
      'dram',
      'ibm-1301-ramac',
      'arpnet',
      'unix',
      'sketchpad',
      'ibm-2250',
      'mouse',
      'nls-demo',
    ],
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
    highlightEventIds: [
      'ibm-ps2-model-70',
      'intel-80386',
      'intel-80486',
      'intel-pentium',
      'vga',
      'cd-rom',
      'sound-blaster-16',
      'windows-3.1',
      'windows-95',
      'pci-bus',
      '3dfx-voodoo-1',
      'agp',
      'compaq-presario-4600',
    ],
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
    highlightEventIds: [
      'intel-pentium-4',
      'amd-athlon-64',
      'intel-core-2-duo',
      'geforce-256',
      'geforce-3',
      'geforce-8800-gtx',
      'radeon-9700',
      'windows-xp',
      'ddr-sdram',
      'sata',
      'pcie',
      'wifi-802-11b',
      'usb-2.0',
    ],
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
    highlightEventIds: [
      'amd-fx-8150',
      'intel-core-i7-3770k',
      'macbook-pro-retina-13',
      'usb-c',
      'ddr4-sdram',
      'nvme',
      'windows-10',
      'geforce-gtx-1080',
      'amd-ryzen-7-1800x',
      'radeon-vega-64',
      'intel-core-i7-6700k',
      'intel-core-i9-7900x',
      'nvidia-rtx-2080',
      'amd-ryzen-7-3800x',
    ],
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
    highlightEventIds: [
      'apple-m1',
      'amd-zen-3-ryzen-4000',
      'intel-alder-lake',
      'apple-m4',
      'snapdragon-x-elite',
      'nvidia-rtx-30-ampere',
      'nvidia-rtx-40-ada',
      'amd-rdna-3',
      'ddr5-mainstream',
      'hbm3e-h200',
      'samsung-990-pro',
      'steam-deck',
      'apple-vision-pro',
      'wifi-7',
      'windows-11',
      'thunderbolt-4',
      'mini-led-macbook-pro',
      'atx-3-0',
    ],
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
