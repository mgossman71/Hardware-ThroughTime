import type { HistoricalEvent } from '../../types/historical-event';

/**
 * CPUs of the Modern era (2020–2026) — the decade that re-architected the
 * desktop: 8-core-on-one-die Zen 3, Intel's first hybrid P+E cores, 5 nm Zen 4,
 * and the return of ARM to the PC (Apple M4, Qualcomm Snapdragon X).
 */
export const CPUS_MODERN: HistoricalEvent[] = [
  {
    id: 'amd-zen-3-ryzen-4000',
    year: 2020,
    exactDate: '2020-11-05',
    track: 'cpus',
    title: 'AMD Ryzen 4000 (Zen 3)',
    summary:
      'Eight cores on a single die and a 19% IPC jump — the chip that made AMD the default high-end desktop CPU.',
    detailedDescription:
      'Ryzen 4000 (codename "Vermeer", launched 5 November 2020) brought the Zen 3 core to the desktop on TSMC 7 nm. The big change was structural: all eight cores were consolidated onto a single CCD (core complex die) with one shared L3 cache, which collapsed the cross-die latency that had hurt Zen 2 and lifted per-core performance by up to ~19%. The Ryzen 9 3900X/3950X (12/16 cores) became the default high-end gaming and productivity CPU of 2020–2021 and forced Intel to accelerate its 10 nm roadmap.',
    manufacturer: 'AMD',
    specs: {
      codename: 'Vermeer',
      process: 'TSMC 7 nm',
      coreDesign: '8 cores per CCD, single shared L3',
      ipcGain: 'up to ~19% vs Zen 2',
      flagship: 'Ryzen 9 3950X (16 cores / 32 threads)',
    },
    significance:
      'Zen 3 is the hinge of the Modern era: it ended the decade of Intel desktop dominance by winning both single- and multi-core at a competitive price, and it set the template (shared L3, 8-core dies) that the rest of the industry — including Intel\'s hybrid redesign — had to respond to.',
    sourceIds: ['wiki-amd-zen-3'],
    relatedEventIds: ['amd-ryzen-7-3800x', 'intel-core-i9-7900x', 'intel-alder-lake'],
  },
  {
    id: 'intel-alder-lake',
    year: 2022,
    exactDate: '2021-12-07',
    track: 'cpus',
    title: 'Intel Core 12th Gen (Alder Lake)',
    summary:
      'The first hybrid x86: fast P-cores and efficient E-cores in one chip — a 12-year reset of the desktop core model.',
    detailedDescription:
      'Alder Lake (announced 7 December 2021, shipped with Core i9-12900K) was Intel\'s first hybrid design since the dual-core era of the late 2000s: high-performance P-cores on Intel 7 (10 nm) paired with power-efficient E-cores on Intel 4 (7 nm), scheduled by a new Thread Director in the OS. The i9-12900K (8P + 8E = 16 cores / 24 threads) took the desktop performance lead back from Ryzen 5000, and the move to a new LGA 1700 socket plus DDR5 opened the door to the next decade of platform updates.',
    manufacturer: 'Intel',
    specs: {
      codename: 'Alder Lake',
      process: 'Intel 7 (P-cores) / Intel 4 (E-cores)',
      design: 'Hybrid P-core + E-core',
      flagship: 'Core i9-12900K (8P + 8E, 24 threads)',
      socket: 'LGA 1700',
      memory: 'DDR5 / DDR4 (board-dependent)',
    },
    significance:
      'Alder Lake re-invented the x86 desktop around workload-aware scheduling and put Intel back on top for a generation; its P+E split is the direct ancestor of the "big.Little" AI-PC chips (Snapdragon X, Apple M-series) that define 2024+.',
    sourceIds: ['wiki-alder-lake'],
    relatedEventIds: ['amd-zen-3-ryzen-4000', 'ddr5-mainstream', 'amd-zen-4'],
  },
  {
    id: 'amd-zen-4',
    year: 2022,
    exactDate: '2022-11-04',
    track: 'cpus',
    title: 'AMD Ryzen 7000 (Zen 4)',
    summary:
      '5 nm, AVX-512 back on the desktop, and a new AM5 socket — the chip that re-captured the high-end crown.',
    detailedDescription:
      'Ryzen 7000 (launched 4 November 2022) moved AMD to TSMC 5 nm and introduced the Zen 4 core: a wider fetch/decode pipeline, 32 KB L1 data cache, and AVX-512 brought back to consumer desktops (it had been disabled since Haswell). The new AM5 socket and DDR5-only memory platform were designed to last into 2025+. The 16-core Ryzen 9 7950X reclaimed the top of the desktop charts and cemented chiplet-plus-process-node as AMD\'s winning formula.',
    manufacturer: 'AMD',
    specs: {
      codename: 'Ryzen 7000 (Raphael / Genoa)',
      process: 'TSMC 5 nm',
      features: 'AVX-512 (desktop), 32 KB L1D',
      flagship: 'Ryzen 9 7950X (16 cores / 32 threads)',
      socket: 'AM5',
      memory: 'DDR5',
    },
    significance:
      'Zen 4 is AMD\'s answer to Alder Lake and a statement that the performance race had shifted from clock speed to process node and architecture; AVX-512 on desktop also quietly made the era\'s AI-inference workloads practical on a PC.',
    sourceIds: ['wiki-amd-zen-4'],
    relatedEventIds: ['amd-zen-3-ryzen-4000', 'intel-alder-lake', 'ddr5-mainstream'],
  },
  {
    id: 'apple-m4',
    year: 2024,
    exactDate: '2024-05-07',
    track: 'cpus',
    title: 'Apple M4',
    summary:
      'Apple\'s 3 nm flagship SoC — a 10-core CPU, 32-core GPU, and a 38 TOPS Neural Engine in an iPad Pro.',
    detailedDescription:
      'The M4 (debuted 7 May 2024 in the 13-inch iPad Pro) is Apple\'s most efficient high-performance SoC: built on TSMC N3B (3 nm) with a 10-core CPU (up to 8 performance + 2 efficiency cores in the M4 Max), a configurable GPU up to 32 cores in the M4 Max, hardware ray tracing, and a 16-core Neural Engine rated at ~38 TOPS. It proved Apple could keep out-innovating on the 3 nm node while the PC industry was still settling 5 nm desktop parts.',
    manufacturer: 'Apple',
    specs: {
      node: 'TSMC N3B (3 nm)',
      cpu: 'up to 10 cores (M4 Max)',
      gpu: 'up to 32 cores (M4 Max), hardware RT',
      neuralEngine: '~38 TOPS (16 cores)',
      debut: 'iPad Pro 13-inch (2024)',
    },
    significance:
      'M4 is the benchmark the rest of the AI-PC wave is measured against: it set the bar for per-watt CPU/GPU performance and on-device AI inference that Qualcomm\'s Snapdragon X and Intel/AMD NPU efforts had to chase in 2024–2025.',
    sourceIds: ['wiki-apple-m4'],
    relatedEventIds: ['apple-m1', 'snapdragon-x-elite'],
  },
  {
    id: 'snapdragon-x-elite',
    year: 2024,
    exactDate: '2024-10-15',
    track: 'cpus',
    title: 'Qualcomm Snapdragon X Elite',
    summary:
      'Qualcomm\'s Oryon ARM cores finally go mainstream in Windows laptops — ARM is back in the PC.',
    detailedDescription:
      'The Snapdragon X Elite (announced 15 October 2024) marks the first mass-market Windows-on-ARM laptop chip: 15 Qualcomm-designed Oryon cores (12 performance + 3 efficiency, inherited from the Nuvia acquisition) on TSMC 4 nm, a Hexagon NPU rated ~45 TOPS, and the ability to run x86 apps through Microsoft\'s Prism emulation. It is the direct rival to Apple Silicon for the thin-and-light laptop and the catalyst for the "AI PC" category of 2024–2025.',
    manufacturer: 'Qualcomm',
    specs: {
      cores: '15 Oryon (12P + 3E)',
      process: 'TSMC 4 nm',
      npu: 'Hexagon, ~45 TOPS',
      architecture: 'AArch64 (Windows on ARM)',
      emulation: 'Microsoft Prism (x86/x64)',
    },
    significance:
      'Snapdragon X is the moment ARM became a real alternative to x86 in the laptop, ending a two-decade ARM retreat and forcing both Intel and AMD to ship NPU-equipped "AI" parts in response.',
    sourceIds: ['wiki-snapdragon-x'],
    relatedEventIds: ['apple-m4', 'windows-on-arm-snapdragon', 'intel-alder-lake'],
  },
  {
    id: 'intel-panther-lake',
    year: 2026,
    track: 'cpus',
    title: 'Intel Core Ultra (Panther Lake)',
    summary:
      "Intel's first Intel 18A client chip — Cougar Cove P-cores, an NPU-5, and the launch product for the in-fab Ohio fabs.",
    detailedDescription:
      "Panther Lake (Core Ultra Series 3, 2026) is Intel's first client SoC built on the Intel 18A process: Cougar Cove P-cores paired with Darkmont E-cores, a 12-Xe \"Xe3-LPG\" integrated GPU, an NPU 5 rated up to 50 TOPS, and LPDDR5X-9600 or DDR5-7200 memory. Its significance is process as much as performance — it is the launch product for Intel 18A, Intel's first 2 nm-class node and its first major bet on manufacturing the die in its own Ohio fabs rather than TSMC.",
    manufacturer: 'Intel',
    specs: {
      node: 'Intel 18A',
      pCores: 'Cougar Cove',
      eCores: 'Darkmont',
      npu: 'NPU 5 (up to 50 TOPS)',
      iGPU: 'Xe3-LPG (12 Xe-cores)',
      memory: 'LPDDR5X-9600 / DDR5-7200',
    },
    significance:
      "Panther Lake is the Modern era's process-node story as much as its performance story: it is the first ship of Intel 18A and the first Intel client chip fabricated in the new Ohio fabs — the moment \"Intel-made 2 nm\" becomes real for consumers.",
    sourceIds: ['wiki-panther-lake'],
    relatedEventIds: ['intel-alder-lake', 'amd-zen-4'],
  },
  {
    id: 'amd-epyc-venice',
    year: 2026,
    track: 'cpus',
    title: 'AMD Epyc "Venice" (Zen 6)',
    summary:
      'Up to 256 cores on TSMC 3 nm — the highest-core-count data-center x86 CPU of the era.',
    detailedDescription:
      'Epyc "Venice" (Epyc 9996, Zen 6, Q4 2026) scales the EPYC line to up to 256 cores on TSMC N2P/N6 with up to 1024 MB of L3 cache, 16-channel DDR5, and 5 GHz+ clock speeds. It is the peak of the Modern era\'s server core-count race and the reference AMD sets against NVIDIA Vera and Intel Xeon for the 2026–2027 data-center market, and it is the same Zen 6 silicon that the desktop generation (expected 2027) builds on.',
    manufacturer: 'AMD',
    specs: {
      codename: 'Venice',
      node: 'TSMC N2P (CCD) / N6 (IOD)',
      cores: 'up to 256',
      l3Cache: 'up to 1024 MB',
      memory: '16-channel DDR5',
    },
    significance:
      "Venice is the Modern era's data-center CPU peak: 256 cores and a terabyte-scale L3 push x86 server density further into the AI-inference era, and it is the same Zen 6 family that lands on the desktop in 2027.",
    sourceIds: ['wiki-zen-6'],
    relatedEventIds: ['amd-zen-4', 'intel-panther-lake'],
  },
];
