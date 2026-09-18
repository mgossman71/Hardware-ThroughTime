import type { HistoricalEvent } from '../../types/historical-event';

/**
 * CPUs of the Multi-Core era (2010–2019) — the GHz wars are over; cores, IPC,
 * and process nodes (22 nm → 7 nm) are the new headline stats.
 */
export const CPUs_MULTICORE: HistoricalEvent[] = [
  {
    id: 'amd-fx-8150',
    year: 2011,
    exactDate: '2011-06-21',
    track: 'cpus',
    title: 'AMD FX-8150',
    summary:
      'Eight cores at a mainstream price — AMD’s Piledriver bet on core count (and its lesson on IPC).',
    detailedDescription:
      'The FX-8150 (June 21, 2011) was AMD’s 32 nm Piledriver part for the AM3+ socket: 8 cores organized in 4 “modules” of 2 shared cores, running at 3.2–3.6 GHz with a 125 W TDP. It was the first 8-core desktop CPU priced for mainstream gamers and content creators, and it dominated multi-threaded benchmarks of 2011–2012. But its shared-L2 “module” design gave it weak single-threaded performance, and it lost to Intel’s 4-core Ivy Bridge in most real workloads — the cautionary half of the era’s “more cores vs. better cores” debate.',
    manufacturer: 'AMD',
    specs: {
      transistors: 131000000,
      clockMhz: 3200,
      clockRange: '3.2–3.6 GHz (Boost)',
      cores: '8 (4 Piledriver modules)',
      processNode: '32 nm (SOI)',
      socket: 'AM3+',
      tdp: '125 W',
    },
    significance:
      'The FX-8150 is the era’s “more cores” thesis: it put 8 cores on a mainstream desktop and led multi-threaded benchmarks, yet its weak IPC lost it the overall war to 4-core Ivy Bridge. That mismatch is exactly why AMD’s 2017 Ryzen comeback — which fixed IPC first — was so decisive.',
    sourceIds: ['wiki-amd-fx'],
    relatedEventIds: ['intel-core-2-duo', 'intel-core-i7-3770k', 'amd-ryzen-7-1800x'],
  },
  {
    id: 'intel-core-i7-3770k',
    year: 2012,
    exactDate: '2012-03',
    track: 'cpus',
    title: 'Intel Core i7-3770K',
    summary:
      'Ivy Bridge: 22 nm, Hyper-Threading, and the 4-core design that defined the 2012–2015 desktop.',
    detailedDescription:
      'The Core i7-3770K (Ivy Bridge, Q1 2012) was Intel’s 22 nm shrink of Sandy Bridge: 4 cores / 8 threads at 3.5 GHz (3.9 GHz Turbo), 8 MB L3, on the LGA 1155 socket. It shipped with a new 22 nm tri-gate process and a higher-performing GPU (IHD 4000), and it was the enthusiast “K” chip of the era — the CPU in most 2012–2014 gaming rigs, paired with DDR3, a SATA III SSD, and a GTX 600/700 card. It held the mainstream 4-core design that AMD FX failed to dislodge.',
    manufacturer: 'Intel',
    specs: {
      transistors: 140000000,
      clockMhz: 3500,
      clockRange: '3.5 GHz (3.9 GHz Turbo)',
      cores: '4 (8 threads)',
      processNode: '22 nm (tri-gate)',
      l3Cache: '8 MB',
      socket: 'LGA 1155',
    },
    significance:
      'The i7-3770K is the “Intel” half of the early Multi-Core era: 22 nm, 4 cores / 8 threads, and the best single-threaded performance of its window. It is the 4-core incumbent that AMD’s FX line couldn’t beat, and the direct ancestor of the Skylake and the 10-core i9 that followed.',
    sourceIds: ['wiki-intel-core-i7-3770k'],
    relatedEventIds: ['intel-core-2-duo', 'amd-fx-8150', 'intel-core-i7-6700k'],
  },
  {
    id: 'intel-core-i7-6700k',
    year: 2015,
    exactDate: '2015-09-08',
    track: 'cpus',
    title: 'Intel Core i7-6700K',
    summary:
      'Skylake: 14 nm, DDR4, and the 4-core design that dominated the 2015–2017 desktop — until Ryzen.',
    detailedDescription:
      'The Core i7-6700K (Skylake, September 8, 2015) was Intel’s 14 nm design: 4 cores / 8 threads at 4.0 GHz (Turbo), 8 MB L3, DDR4 memory, and PCIe 3.0 on the LGA 1151 socket. It was the enthusiast CPU of 2015–2017, the chip paired with DDR4, NVMe-ready boards, and GTX 980/1080 cards. Its IPC lead over Broadwell and its 14 nm efficiency made it the best 4-core mainstream CPU of the window — until AMD’s Ryzen 7 1800X (2017) beat it on both cores and price.',
    manufacturer: 'Intel',
    specs: {
      transistors: 175000000,
      clockMhz: 4000,
      clockRange: '3.4 GHz (4.0 GHz Turbo)',
      cores: '4 (8 threads)',
      processNode: '14 nm',
      ram: 'DDR4',
      socket: 'LGA 1151',
    },
    significance:
      'The i7-6700K is the last great 4-core mainstream desktop CPU and the “Intel” ceiling of the Multi-Core era: 14 nm, DDR4, PCIe 3.0. Its loss to the 8-core Ryzen 7 1800X in 2017 is the inflection point that ended Intel’s decade of consumer CPU dominance.',
    sourceIds: ['wiki-intel-core-i7-6700k'],
    relatedEventIds: ['intel-core-i7-3770k', 'ddr4-sdram', 'amd-ryzen-7-1800x'],
  },
  {
    id: 'intel-core-i9-7900x',
    year: 2017,
    exactDate: '2017-09-30',
    track: 'cpus',
    title: 'Intel Core i9-7900X',
    summary:
      'Ten cores on 14 nm — Intel’s high-end answer in the Ryzen wars (and its power bill).',
    detailedDescription:
      'The Core i9-7900X (Kaby Lake-X, September 30, 2017) was Intel’s 14 nm high-end desktop part: 10 cores / 20 threads, 3.3 GHz (4.3 GHz Turbo), 44 MB L3, on the LGA 2066 socket with quad-channel DDR4 and 28 PCIe 3.0 lanes. It was the enthusiast flagship of late 2017–2018, priced around US$1,000 (plus a ~US$300 board), and it brought 10 cores to the consumer box for the first time at Intel. It matched or beat the Ryzen 7 1800X in multi-threaded work but at a much higher price and a 140 W TDP — the “HEDT” counter to AMD’s mainstream 8-core.',
    manufacturer: 'Intel',
    specs: {
      transistors: 206000000,
      clockMhz: 3300,
      clockRange: '3.3 GHz (4.3 GHz Turbo)',
      cores: '10 (20 threads)',
      processNode: '14 nm',
      ram: 'Quad-channel DDR4-2400',
      socket: 'LGA 2066',
      tdp: '140 W',
    },
    significance:
      'The i9-7900X is Intel’s high-end response to the Ryzen wars: it put 10 cores on a consumer desktop and led multi-threaded benchmarks of 2017–2018, but at a much higher price and power draw than the Ryzen 7 1800X. It marks the split between “mainstream 8-core” (AMD) and “HEDT 10-core” (Intel) that defined the late Multi-Core era.',
    sourceIds: ['wiki-intel-core-i9-7900x'],
    relatedEventIds: ['intel-core-i7-6700k', 'amd-ryzen-7-1800x', 'ddr4-sdram'],
  },
  {
    id: 'amd-ryzen-7-1800x',
    year: 2017,
    exactDate: '2017-08-02',
    track: 'cpus',
    title: 'AMD Ryzen 7 1800X',
    summary:
      'Zen: 8 true cores, 16 threads at $500 — the CPU that ended Intel’s decade of consumer dominance.',
    detailedDescription:
      'The Ryzen 7 1800X (Zen, August 2, 2017) was AMD’s 14 nm part for the new AM4 socket: 8 cores / 16 threads at 3.6 GHz (4.0 GHz Boost), 16 MB L3, priced around US$500. Its Zen core was the first AMD design in years with competitive IPC — it matched or beat the Skylake i7-6700K single-threaded while offering double the cores. It re-ignited the CPU war overnight, forced Intel to respond (the 8-core i7-8086K), and made “Ryzen vs. Intel” the defining PC debate of 2017–2018. It is the landmark CPU of the Multi-Core era.',
    manufacturer: 'AMD',
    specs: {
      transistors: 468000000,
      clockMhz: 3600,
      clockRange: '3.6 GHz (4.0 GHz Boost)',
      cores: '8 (16 threads)',
      processNode: '14 nm',
      ram: 'Dual-channel DDR4',
      socket: 'AM4',
      tdp: '95 W',
    },
    significance:
      'The Ryzen 7 1800X is the single most important CPU of the Multi-Core era: it brought 8 true cores and 16 threads to the mainstream price point with competitive IPC, ending Intel’s decade of consumer CPU dominance. It is the “Ryzen” landmark that the whole 2017–2019 desktop market organized around, and the direct ancestor of Zen 2 and Zen 3.',
    sourceIds: ['wiki-amd-ryzen-7-1800x'],
    relatedEventIds: ['intel-core-i7-6700k', 'amd-fx-8150', 'amd-ryzen-7-3800x', 'geforce-gtx-1080'],
  },
  {
    id: 'amd-ryzen-7-3800x',
    year: 2019,
    exactDate: '2019-07-07',
    track: 'cpus',
    title: 'AMD Ryzen 7 3800X',
    summary:
      'Zen 2: 7 nm, doubled L3 — the 8-core flagship that closed the Multi-Core era on AMD’s terms.',
    detailedDescription:
      'The Ryzen 7 3800X (Zen 2, July 7, 2019) was AMD’s 7 nm flagship for AM4: 8 cores / 16 threads at 3.9 GHz (4.5 GHz Boost), 32 MB L3 (doubled by the new CCD chiplet design), and a 105 W TDP. It beat the contemporary Intel i7-8700K/9700K single-threaded for the first time, and it led multi-threaded at a lower price. It was the enthusiast CPU of 2019, the last major AM4 part, and the chip that closed the Multi-Core era with AMD ahead on both performance and efficiency.',
    manufacturer: 'AMD',
    specs: {
      transistors: 104000000,
      clockMhz: 3900,
      clockRange: '3.9 GHz (4.5 GHz Boost)',
      cores: '8 (16 threads)',
      processNode: '7 nm (CCD) + 12 nm (I/O)',
      l3Cache: '32 MB',
      socket: 'AM4',
      tdp: '105 W',
    },
    significance:
      'The Ryzen 7 3800X is the CPU that closes the Multi-Core era: 7 nm, chiplets, doubled L3, and — for the first time — AMD beating Intel single-threaded at the flagship tier. It is the last great 8-core desktop of the decade and the direct bridge into the next era’s Ryzen 5000 and Intel Alder Lake.',
    sourceIds: ['wiki-amd-ryzen-7-3800x'],
    relatedEventIds: ['amd-ryzen-7-1800x', 'intel-core-i7-6700k'],
  },
];