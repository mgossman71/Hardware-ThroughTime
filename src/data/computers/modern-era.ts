import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Computers of the Modern era (2020–2026) — ARM returns to the Mac, the PC
 * becomes a handheld, and a new class of spatial computer arrives.
 */
export const COMPUTERS_MODERN: HistoricalEvent[] = [
  {
    id: 'apple-m1',
    year: 2020,
    exactDate: '2020-11-10',
    track: 'computers',
    title: 'Apple M1 (first Apple Silicon Mac)',
    summary:
      'A 16-billion-transistor ARM SoC replaces the Intel Mac — and resets the laptop performance-per-watt race.',
    detailedDescription:
      'The M1 (10 November 2020, debuting in the iMac, MacBook Air, and 13-inch MacBook Pro) was the first Apple-designed CPU in a Mac, a 5 nm SoC with 16 billion transistors, an 8-core CPU (4 performance + 4 efficiency), a 7/8-core GPU, 16 GB of unified memory, and a 16-core Neural Engine. By integrating CPU, GPU, memory, and media engines on one die with shared memory, it delivered desktop-class performance in a fanless or thin chassis — and it began the two-year transition of the entire Mac line away from Intel.',
    manufacturer: 'Apple',
    specs: {
      node: 'TSMC 5 nm',
      transistors: '16 billion',
      cpu: '8-core (4P + 4E)',
      gpu: '7–8-core, hardware RT',
      memory: '8–16 GB unified (LPDDR5)',
      neuralEngine: '16-core, 11 TOPS',
      debut: 'iMac / MacBook Air / MacBook Pro 13" (2020)',
    },
    significance:
      'M1 is the pivot of the Modern Mac: it proved ARM could be the default laptop architecture in the consumer market, and its unified-memory design became the template that every "AI PC" (Snapdragon X, and Apple\'s own M2–M4) has since followed.',
    sourceIds: ['wiki-apple-m1'],
    relatedEventIds: ['apple-m4', 'snapdragon-x-elite', 'macos-big-sur'],
  },
  {
    id: 'steam-deck',
    year: 2022,
    exactDate: '2022-02-25',
    track: 'computers',
    title: 'Valve Steam Deck',
    summary:
      'A handheld that runs your Steam library — the PC becomes a console-shaped, 1280×800, 60 Hz device.',
    detailedDescription:
      'The Steam Deck (launched 25 February 2022) is Valve\'s handheld PC running SteamOS (Linux): a custom AMD APU (4× Zen 2 + 8× RDNA 2), a 7-inch 1280×800 60 Hz display, 64 GB–1 TB NVMe, and full x86-64 compatibility with the Steam catalog. It is the defining "handheld PC" of the era and the direct competitor to the ASUS ROG Ally (2023), and it re-framed "PC gaming" as a portable, Linux-friendly category.',
    manufacturer: 'Valve',
    specs: {
      cpu: '4× AMD Zen 2',
      gpu: '8× AMD RDNA 2',
      display: '7" 1280×800 IPS, 60 Hz',
      storage: '64 GB–1 TB NVMe (user-replaceable)',
      os: 'SteamOS 3.0 (Arch-based Linux)',
      form: 'Handheld PC',
    },
    significance:
      'The Steam Deck is the era\'s statement that a full x86 PC can live in a handheld: it created the "PC gaming handheld" category, proved Linux can run the Steam catalog well enough, and forced the whole industry (ROG Ally, Legion Go) to compete in a brand-new form factor.',
    sourceIds: ['wiki-steam-deck'],
    relatedEventIds: ['asus-rog-ally', 'amd-rdna-3'],
  },
  {
    id: 'asus-rog-ally',
    year: 2023,
    exactDate: '2023-12-13',
    track: 'computers',
    title: 'ASUS ROG Ally',
    summary:
      'A Windows 11 handheld with a Ryzen Z1 Extreme — the x86 answer to the Steam Deck.',
    detailedDescription:
      'The ASUS ROG Ally (launched 13 December 2023) is the era\'s flagship Windows gaming handheld: an AMD Ryzen Z1 Extreme (Zen 3 + RDNA 2) APU, a 7-inch 1080p 60 Hz display, and 52 Wh battery, running full Windows 11 so it can run any x86 game — not just the Steam catalog. It is the direct competitor to the Steam Deck and the reason the "PC gaming handheld" became a real, contested product category in 2023–2024.',
    manufacturer: 'ASUS',
    specs: {
      cpu: 'AMD Ryzen Z1 Extreme (Zen 3 + RDNA 2)',
      display: '7" 1920×1080 IPS, 60 Hz',
      memory: '16 GB LPDDR5',
      storage: '512 GB / 1 TB NVMe',
      os: 'Windows 11',
      battery: '52 Wh',
    },
    significance:
      'The ROG Ally is the Windows counterweight to the Steam Deck: it proves the handheld-PC category is broad enough to hold both Linux and Windows, and it set the spec bar (1080p, Z1 Extreme) that the 2024–2025 handhelds now chase.',
    sourceIds: ['wiki-asus-rog-ally'],
    relatedEventIds: ['steam-deck', 'amd-rdna-3'],
  },
  {
    id: 'apple-vision-pro',
    year: 2024,
    exactDate: '2024-02-02',
    track: 'computers',
    title: 'Apple Vision Pro',
    summary:
      'M2 + R1 and 23 million pixels — Apple\'s first "spatial computer," and a new form factor.',
    detailedDescription:
      'The Apple Vision Pro (launched 2 February 2024) is Apple\'s first spatial computer: an M2 plus a dedicated R1 real-time processing chip drive two micro-OLED displays (about 23 million pixels total) with sub-12 ms motion-to-photon latency. It runs visionOS, blends 3D content with the physical room, and is the first consumer product of a category (head-worn "spatial computing") that had, until this era, been mostly a niche or dev-tool market. At $3,499 it is a luxury item, but it defines the hardware direction Apple is committing to.',
    manufacturer: 'Apple',
    specs: {
      chips: 'Apple M2 + Apple R1',
      displays: '2× micro-OLED, ~23M pixels total',
      latency: '< 12 ms motion-to-photon',
      os: 'visionOS',
      price: 'US$3,499',
      class: 'Spatial computer (head-worn)',
    },
    significance:
      'The Vision Pro is the Modern era\'s new form factor: it is the first head-worn "spatial computer" to ship at consumer scale, and it introduces a whole class of hardware (R1 low-latency chip, eye/facial tracking, micro-OLED) that the rest of the industry is now copying.',
    sourceIds: ['wiki-apple-vision-pro'],
    relatedEventIds: ['apple-m4', 'apple-m1'],
  },
];