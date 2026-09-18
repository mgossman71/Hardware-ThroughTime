import type { TrackDefinition } from '../types/historical-event';

/**
 * The 11 parallel technology tracks.
 *
 * Order here determines the default lane order in the timeline (top → bottom).
 * `accent` colors are intentionally distinct hues that remain readable on the
 * dark base for every era.
 */
export const TRACKS: TrackDefinition[] = [
  {
    id: 'computers',
    label: 'Computers',
    description: 'Whole machines and platforms — from room-sized systems to modern enthusiast desktops.',
    accent: '#e8b45a',
  },
  {
    id: 'cpus',
    label: 'CPUs',
    description: 'Microprocessors and the architectures that made them faster: 8-bit to chiplet, 1971 → present.',
    accent: '#6ac1f2',
  },
  {
    id: 'ram',
    label: 'RAM',
    description: 'Magnetic core → DRAM → SIMM/DIMM → DDR generations. Capacity and bandwidth over time.',
    accent: '#8fd18f',
  },
  {
    id: 'graphics',
    label: 'Graphics',
    description: 'Text adapters, 2D accelerators, 3D accelerators, and GPUs with shaders, ray tracing, and AI acceleration.',
    accent: '#c58bdf',
  },
  {
    id: 'storage',
    label: 'Storage',
    description: 'Punched cards, tape, floppies, early HDDs, optical media, USB flash, and NVMe SSDs.',
    accent: '#e07a5f',
  },
  {
    id: 'motherboards',
    label: 'Buses',
    description: 'S-100, ISA, MCA, EISA, VLB, PCI, AGP, and the PCI Express generations.',
    accent: '#7fb8c9',
  },
  {
    id: 'networking',
    label: 'Networking',
    description: 'Modems, dial-up, Ethernet, and the march from bps to Gbps and beyond.',
    accent: '#d9a441',
  },
  {
    id: 'wifi',
    label: 'Wi-Fi',
    description: 'IEEE 802.11 generations: 11a/b/g/n/ac/ax/6E/7, MIMO, and channel evolution.',
    accent: '#e0709a',
  },
  {
    id: 'os',
    label: 'OS',
    description: 'CP/M, MS-DOS, classic Mac OS, Windows 95 → 11, Linux, BSD — and how OSes shaped hardware requirements.',
    accent: '#9db0c9',
  },
  {
    id: 'displays',
    label: 'Displays',
    description: 'CRT phosphors, VGA/SVGA, LCDs, and the rise of high-resolution panels.',
    accent: '#b9c24a',
  },
  {
    id: 'interfaces',
    label: 'Interfaces',
    description: 'DIN, PS/2, serial/parallel, VGA/DVI/HDMI/DP, USB generations, and Thunderbolt.',
    accent: '#8fb573',
  },
];

/** Convenience lookup: TrackId → TrackDefinition. */
export const TRACK_BY_ID = Object.fromEntries(TRACKS.map((t) => [t.id, t])) as Record<
  (typeof TRACKS)[number]['id'],
  TrackDefinition
>;
