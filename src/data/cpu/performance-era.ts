import type { HistoricalEvent } from '../../types/historical-event';

/**
 * CPUs of the Performance Race era (1999–2006) — GHz wars and the efficiency comeback.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const CPUs_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'intel-pentium-3',
    year: 1999,
    exactDate: '1999-10',
    track: 'cpus',
    title: 'Intel Pentium III',
    summary:
      'The P6 core reborn at 700 MHz and above — the first mainstream CPU with SSE media instructions.',
    detailedDescription:
      'The Pentium III (October 1999) was the P6 architecture at its peak: the Coppermine core at 0.25 µm with 733, 750, and 800 MHz generations, an integrated 512 KB L2 cache, and SSE (Streaming SIMD Extensions) — 128-bit multimedia instructions. It was the CPU of the “500/700 MHz” desktop era and dominated the late-90s Windows 98/Me market. Its SSE instructions became the baseline that Windows 98 SE, Windows 2000, and DirectX 7-era games targeted.',
    manufacturer: 'Intel',
    specs: {
      transistors: 770000,
      clockMhz: 733,
      clockRange: '450 / 500 / 550 / 600 / 700 / 733 / 800 MHz',
      dataWidth: '32-bit',
      processNode: '0.25 µm (Coppermine)',
      isa: 'SSE (128-bit media)',
      l2Cache: '256 KB / 512 KB on-die',
    },
    significance:
      'The Pentium III is the CPU most people picture for the 1998–2000 desktop: 700 MHz, SSE, a Pentium-class brand. It set the SSE baseline for 90s/2000s multimedia software and was the direct competitor AMD’s Athlon beat on price/performance in 1999–2000.',
    sourceIds: ['wiki-pentium-3'],
    relatedEventIds: ['intel-pentium-2', 'intel-pentium-4', 'amd-athlon'],
  },
  {
    id: 'amd-athlon',
    year: 1999,
    exactDate: '1999-08-06',
    track: 'cpus',
    title: 'AMD Athlon',
    summary:
      'The first AMD x86 to beat Intel on both price and performance — and the start of AMD’s 1999–2004 ascendancy.',
    detailedDescription:
      'The original Athlon (August 6, 1999) was a 36-million-transistor, 0.25 µm part running at 600, 700, and 760 MHz, with a 256 KB on-die L2 cache and MMX plus early SSE-like streaming instructions. It was the first time AMD shipped a CPU that beat Intel’s contemporary (Pentium II / early Pentium III) at a lower price, and it made AMD a credible high-end choice for the first time. It anchored the “Athlon vs. Pentium” benchmark war of 1999–2001.',
    manufacturer: 'AMD',
    specs: {
      transistors: 36000000,
      clockMhz: 760,
      clockRange: '500 / 600 / 700 / 760 MHz',
      dataWidth: '32-bit',
      processNode: '0.25 µm',
      l2Cache: '256 KB on-die',
      isa: 'MMX, SSE',
    },
    significance:
      'The Athlon proved AMD could out-perform Intel on price/performance for the first time, igniting the “Athlon vs. Pentium” benchmark war and forcing Intel to respond with the Pentium 4. It is the starting point of AMD’s 1999–2004 high-end dominance and the first half of the Performance Race era’s CPU story.',
    sourceIds: ['wiki-amd-athlon'],
    relatedEventIds: ['amd-k5', 'intel-pentium-3', 'amd-athlon-xp'],
  },
  {
    id: 'intel-pentium-4',
    year: 2000,
    exactDate: '2000-11-20',
    track: 'cpus',
    title: 'Intel Pentium 4',
    summary:
      'NetBurst: a 20-stage pipeline chasing GHz records — the icon of the clock-speed race, and its cautionary tale.',
    detailedDescription:
      'The Pentium 4 (November 20, 2000) was Intel’s NetBurst architecture: a very long (20-stage) pipeline, 180 nm process, 512 KB on-die L2 cache, and 256-bit SSE2. It launched at 1.4 GHz and, by 2004, 3.0–3.8 GHz (Prescott/Nocona). It won the GHz headlines but was hot, power-hungry, and IPC-limited, so AMD’s Athlon XP and Athlon 64 matched or beat it in real-world workloads at lower cost. Hyper-Threading (2002) gave it a pseudo-multithreading edge. NetBurst’s failure to convert clock speed into efficiency is the era’s core “GHz wars” lesson.',
    manufacturer: 'Intel',
    specs: {
      transistors: 42000000,
      clockMhz: 1400,
      clockRange: '1.4 / 1.5 / 2.0 / 2.4 / 3.0 / 3.8 GHz',
      dataWidth: '32-bit',
      processNode: '180 nm (Northwood)',
      isa: 'SSE2 (256-bit)',
      l2Cache: '512 KB on-die',
      pipeline: '20-stage (NetBurst)',
    },
    significance:
      'The Pentium 4 is the face of the GHz wars: clock speed as the headline marketing stat. Its high power, heat, and poor IPC-per-watt are why the industry pivoted to efficiency (AMD’s 64-bit lead, then Intel’s Core 2) — the “GHz wars” lesson that closed the Performance Race era.',
    sourceIds: ['wiki-pentium-4'],
    relatedEventIds: ['intel-pentium-3', 'amd-athlon-xp', 'intel-core-2-duo'],
  },
  {
    id: 'amd-athlon-xp',
    year: 2001,
    exactDate: '2001-08',
    track: 'cpus',
    title: 'AMD Athlon XP',
    summary:
      'The 1.3–2.2 GHz Athlon that beat the early Pentium 4 — and the PR (Performance Rating) era.',
    detailedDescription:
      'The Athlon XP (August 2001) refined the Athlon core (Palomino, then Thoroughbred) to 1.3–2.2 GHz with a 256 KB on-die L2 cache. It introduced AMD’s “PR” (Performance Rating) marketing to counter Intel’s GHz race, and it was widely regarded as faster than the early 1.4–1.5 GHz Pentium 4 in most real workloads at lower power and price. It was the enthusiast CPU of 2001–2003 and the chip most “gaming rigs” of that window were built around.',
    manufacturer: 'AMD',
    specs: {
      clockMhz: 1333,
      clockRange: '1.3 / 1.4 / 1.5 / 1.6 / 1.7 / 1.8 / 2.0 / 2.2 GHz',
      dataWidth: '32-bit',
      processNode: '0.18 µm (Thoroughbred)',
      l2Cache: '256 KB on-die',
      marketing: 'PR (Performance Rating)',
    },
    significance:
      'The Athlon XP is the CPU that won the early GHz wars on efficiency: it matched or beat the Pentium 4 in real performance at lower power and price. It defined the 2001–2003 enthusiast “gaming rig” and is the direct predecessor of the Athlon 64.',
    sourceIds: ['wiki-amd-athlon-xp'],
    relatedEventIds: ['amd-athlon', 'intel-pentium-4', 'amd-athlon-64'],
  },
  {
    id: 'amd-athlon-64',
    year: 2003,
    exactDate: '2003-08',
    track: 'cpus',
    title: 'AMD Athlon 64',
    summary:
      'The first 64-bit x86 — and, with an integrated memory controller and HyperTransport, the CPU that ended the GHz wars.',
    detailedDescription:
      'The Athlon 64 (August 2003, Clawhammer, then Winchester) added 64-bit integer and addressing to the x86 instruction set (the x86-64/AMD64 ABI that still defines 64-bit Windows and Linux), and it integrated the memory controller and used the HyperTransport bus to cut memory latency. It ran at 1.8–3.2 GHz (Clawhammer/Winchester/Sledgehammer) on a 0.13 µm process, and it decisively beat the contemporary Pentium 4 on performance per watt. It made “64-bit” a real consumer desktop feature and is the reason x86-64 exists today.',
    manufacturer: 'AMD',
    specs: {
      transistors: 147000000,
      clockMhz: 1800,
      clockRange: '1.8 / 2.0 / 2.4 / 2.8 / 3.0 / 3.2 GHz',
      dataWidth: '64-bit (x86-64)',
      processNode: '0.13 µm (Winchester)',
      bus: 'HyperTransport',
      memory: 'Integrated DDR memory controller',
    },
    significance:
      'The Athlon 64 is the CPU that ended the GHz wars: it proved a 64-bit, integrated-memory-controller, low-latency design could beat a raw clock-count design on real performance and power. It introduced the x86-64 ABI that still underpins 64-bit computing, and it is the “Athlon” half of the era’s defining Pentium-vs-Athlon story.',
    sourceIds: ['wiki-amd-athlon-64'],
    relatedEventIds: ['amd-athlon-xp', 'intel-pentium-4', 'intel-core-2-duo', 'windows-xp'],
  },
  {
    id: 'intel-core-2-duo',
    year: 2006,
    exactDate: '2006-07-27',
    track: 'cpus',
    title: 'Intel Core 2 Duo',
    summary:
      'The dual-core, efficiency-first Conroe that buried NetBurst — the “GHz wars” over, IPC and cores win.',
    detailedDescription:
      'The Core 2 Duo (July 27, 2006, Conroe/E6300 at 1.86 GHz) was Intel’s 65 nm, dual-core, wide-issue, out-of-order design that discarded the NetBurst pipeline in favor of a shorter, deeper-per-core, lower-power architecture. It beat the Pentium 4 (and often the Athlon 64) in performance while using far less power and heat, and it made “cores” the new headline stat in place of clock speed. It is the CPU that ended the GHz wars and opened the multicore era, and it was the enthusiast/mainstream workhorse of 2006–2008.',
    manufacturer: 'Intel',
    specs: {
      transistors: 290000000,
      clockMhz: 1860,
      clockRange: '1.86 / 2.13 / 2.4 / 2.66 / 3.0 GHz',
      dataWidth: '64-bit (x86-64)',
      processNode: '65 nm (Conroe)',
      cores: 2,
      isa: 'SSE3',
    },
    significance:
      'The Core 2 Duo is the “efficiency comeback” that closes the Performance Race era: it replaced clock speed with IPC and core count as the headline, using 65 nm to beat the NetBurst Pentium 4 on performance per watt. It marks the transition from the GHz wars into the Multi-Core era and is the last major single-socket CPU of the 32-bit→64-bit transition.',
    sourceIds: ['wiki-core-2-duo'],
    relatedEventIds: ['intel-pentium-4', 'amd-athlon-64'],
  },
];