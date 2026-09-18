import type { HistoricalEvent } from '../../types/historical-event';

/**
 * GPUs of the Multi-Core era (2010–2018) — from Fermi’s 1.5 GB to Pascal’s
 * 8 GB GDDR5X, and the first consumer real-time ray tracing.
 */
export const GRAPHICS_MULTICORE: HistoricalEvent[] = [
  {
    id: 'geforce-gtx-480',
    year: 2010,
    exactDate: '2010-03-26',
    track: 'graphics',
    title: 'NVIDIA GeForce GTX 480',
    summary:
      'Fermi: 480 stream processors, 1.5 GB GDDR5, 512-bit — the first 1 GB-class gaming card.',
    detailedDescription:
      'The GeForce GTX 480 (GF100, March 26, 2010) was NVIDIA’s Fermi flagship: 480 stream processors, 1.5 GB of GDDR5 on a 512-bit bus, running at a 700 MHz core / 1.4 GHz shader clock with a 250 W TDP and a dual-slot cooler. It was the first consumer card to ship 1.5 GB of video memory and the one that defined the “gaming rig” GPU of 2010–2011, driving 1920×1080 at high settings. It was the direct successor to the GeForce 256/8800 line and the answer to ATI’s Radeon 5870/HD 5800.',
    manufacturer: 'NVIDIA',
    specs: {
      coreClock: '700 MHz (shader 1.4 GHz)',
      vram: '1.5 GB GDDR5',
      memoryBus: '512-bit',
      streamProcessors: 480,
      processNode: '40 nm',
      tdp: '250 W',
    },
    significance:
      'The GTX 480 is the GPU that opened the Multi-Core era: it brought 1.5 GB of memory and 512-bit bandwidth to the gaming desktop, set the 1080p high-setting baseline, and re-established the “NVIDIA vs. ATI” rivalry that the GTX 1080 and Vega 64 would close out.',
    sourceIds: ['wiki-geforce-gtx-480'],
    relatedEventIds: ['geforce-8800-gtx', 'geforce-gtx-680', 'pcie-3.0'],
  },
  {
    id: 'geforce-gtx-680',
    year: 2012,
    exactDate: '2012-09-12',
    track: 'graphics',
    title: 'NVIDIA GeForce GTX 680',
    summary:
      'Kepler: 2560 CUDA cores, 2 GB GDDR5, 256-bit — the efficient 1080p workhorse of 2012–2014.',
    detailedDescription:
      'The GeForce GTX 680 (GK104, September 12, 2012) was NVIDIA’s Kepler flagship: 2560 CUDA cores, 2 GB of GDDR5 on a 256-bit bus, running at a 1006 MHz core clock with a 195 W TDP. It was the enthusiast “gaming rig” GPU of 2012–2014, the card paired with the i7-3770K and DDR3, and it drove 1920×1080 at high/ultra settings in the titles of that window. It was the direct successor to the Fermi GTX 480/580 line and the answer to AMD’s Radeon HD 7970.',
    manufacturer: 'NVIDIA',
    specs: {
      coreClock: '1006 MHz',
      vram: '2 GB GDDR5',
      memoryBus: '256-bit',
      cudaCores: 2560,
      processNode: '28 nm',
      tdp: '195 W',
    },
    significance:
      'The GTX 680 is the “workhorse” GPU of the early Multi-Core era: 2 GB, 2560 CUDA cores, and the 1080p high-setting ceiling of 2012–2014. It is the Kepler design that set the template (more cores, less power) the GTX 1080 would later push to its limit.',
    sourceIds: ['wiki-geforce-gtx-680'],
    relatedEventIds: ['geforce-gtx-480', 'intel-core-i7-3770k', 'geforce-gtx-1080'],
  },
  {
    id: 'geforce-gtx-1080',
    year: 2016,
    exactDate: '2016-06-27',
    track: 'graphics',
    title: 'NVIDIA GeForce GTX 1080',
    summary:
      'Pascal: 8 GB GDDR5X, 2560 CUDA cores at 180 W — the efficiency landmark of the mid-2010s.',
    detailedDescription:
      'The GeForce GTX 1080 (GP104, June 27, 2016) was NVIDIA’s Pascal flagship: 2560 CUDA cores, 8 GB of GDDR5X on a 256-bit bus, running at a 1607 MHz core / 1.98 GHz shader clock with a 180 W TDP. It was the enthusiast “gaming rig” GPU of 2016–2018, the card paired with the i7-6700K/Ryzen and DDR4, and it drove 1440p and 1080p high-refresh gaming. It was the first Pascal card to bring 8 GB of memory to the mainstream and the one that defined the “Pascal” efficiency era (more performance per watt than any prior generation).',
    manufacturer: 'NVIDIA',
    specs: {
      coreClock: '1607 MHz (shader 1.98 GHz)',
      vram: '8 GB GDDR5X',
      memoryBus: '256-bit',
      cudaCores: 2560,
      processNode: '16 nm (FinFET)',
      tdp: '180 W',
    },
    significance:
      'The GTX 1080 is the “efficiency” GPU of the mid Multi-Core era: 8 GB, 2560 CUDA cores, and a 180 W TDP that beat the prior generation on performance per watt. It is the Pascal design that set the template the RTX 2080 would later add ray tracing to, and the card most 2016–2018 “gaming rigs” were built around.',
    sourceIds: ['wiki-geforce-gtx-1080'],
    relatedEventIds: ['geforce-gtx-680', 'intel-core-i7-6700k', 'amd-ryzen-7-1800x', 'radeon-vega-64'],
  },
  {
    id: 'radeon-vega-64',
    year: 2017,
    exactDate: '2017-02-07',
    track: 'graphics',
    title: 'AMD Radeon Vega 64',
    summary:
      'HBM2: 8 GB of stacked memory on a 2048-bit bus — the memory-bandwidth bet that almost won.',
    detailedDescription:
      'The Radeon Vega 64 (VEGA 10, February 7, 2017) was AMD’s 14 nm flagship: 2048 stream processors, 8 GB of HBM2 on a 2048-bit bus (a record for consumer memory bandwidth at the time), running at a 1296 MHz core clock. It was the “AMD” half of the 2017 GPU wars, the direct rival to the GTX 1080, and the one that bet the era on memory bandwidth (HBM2) rather than raw core count. It matched the GTX 1080 in many bandwidth-bound workloads but at a higher price and power draw — the cautionary “bandwidth king” of the window.',
    manufacturer: 'AMD',
    specs: {
      coreClock: '1296 MHz',
      vram: '8 GB HBM2',
      memoryBus: '2048-bit',
      streamProcessors: 2048,
      processNode: '14 nm',
      tdp: '297 W (reference)',
    },
    significance:
      'The Radeon Vega 64 is AMD’s “memory-bandwidth” thesis of the Multi-Core era: it put HBM2 and a 2048-bit bus on a consumer card and led in bandwidth-bound workloads, but its price and power lost it the overall war to the GTX 1080. It is the “AMD” half of the 2017 GPU rivalry and the direct precursor of the RDNA line that followed.',
    sourceIds: ['wiki-radeon-vega-64'],
    relatedEventIds: ['geforce-gtx-1080', 'geforce-8800-gtx', 'nvidia-rtx-2080'],
  },
  {
    id: 'nvidia-rtx-2080',
    year: 2018,
    exactDate: '2018-09-20',
    track: 'graphics',
    title: 'NVIDIA GeForce RTX 2080',
    summary:
      'Turing: 2944 CUDA cores, 8 GB GDDR6, and the first consumer real-time ray tracing.',
    detailedDescription:
      'The GeForce RTX 2080 (TU104, September 20, 2018) was NVIDIA’s Turing flagship: 2944 CUDA cores, 8 GB of GDDR6 on a 256-bit bus, 384 dedicated ray-tracing (RT) cores, and a 215 W TDP. It was the first consumer GPU with hardware real-time ray tracing (RT cores) and tensor cores (for AI/ML workloads), and it defined the “RTX” line that has carried NVIDIA’s high-end since. It was the enthusiast GPU of late 2018–2019, the card paired with the Ryzen 7 3800X, and the one that made “ray tracing” a consumer gaming feature.',
    manufacturer: 'NVIDIA',
    specs: {
      coreClock: '1515 MHz (boost 1710 MHz)',
      vram: '8 GB GDDR6',
      memoryBus: '256-bit',
      cudaCores: 2944,
      rtCores: 384,
      processNode: '12 nm',
      tdp: '215 W',
    },
    significance:
      'The RTX 2080 is the GPU that closes the Multi-Core era: it introduced hardware real-time ray tracing and tensor cores to the consumer desktop, making the GPU a ray-tracing and AI accelerator, not just a rasterizer. It is the “RTX” landmark that the next era (and today’s AI accelerators) descend from.',
    sourceIds: ['wiki-nvidia-rtx-2080'],
    relatedEventIds: ['radeon-vega-64', 'geforce-gtx-1080', 'amd-ryzen-7-3800x'],
  },
];