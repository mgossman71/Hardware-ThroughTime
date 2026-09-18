import type { HistoricalEvent } from '../../types/historical-event';

/**
 * GPUs of the Performance Race era (1999–2007) — the rise of the GPU as a serious
 * parallel processor: from the first “GPU” to unified shaders and HD.
 */
export const GRAPHICS_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'geforce-256',
    year: 1999,
    exactDate: '1999-08',
    track: 'graphics',
    title: 'NVIDIA GeForce 256',
    summary:
      'Billed as “the world’s first GPU” — the card that coined the term and defined the discrete-GPU category.',
    detailedDescription:
      'The GeForce 256 (NV10, August 1999) ran at 120 MHz with 32–64 MB of SDRAM/DDR and about 200 million transistors at 0.22 µm. Its four texture pipelines, a full 128-bit memory bus, and transform-and-lighting hardware let it render 3D far faster than the era’s Voodoo3/TNT2 rivals, and NVIDIA’s marketing of it as a “GPU” (as opposed to a “3D accelerator”) stuck and defined the category. It was the go-to card for the 1999–2001 gaming PC and the chip that made NVIDIA the market leader it remains.',
    manufacturer: 'NVIDIA',
    specs: {
      coreClock: '120 MHz',
      vram: '32 / 64 MB (SDRAM / DDR)',
      memoryBus: '128-bit',
      transistors: 200000000,
      processNode: '0.22 µm',
      bus: 'PCI / AGP',
    },
    significance:
      'The GeForce 256 coined “GPU” and made the discrete graphics card a first-class parallel processor for 3D. It started the GPU line (GeForce → HD → RTX) that now underpins gaming, CUDA, and AI — the single most important chip in the “3D game era” the Performance Race era is named for.',
    images: [
      {
        url: '/images/gallery/geforce-256.png',
        alt: 'A Canopus GeForce 256 DDR graphics card',
        attribution: 'Hyins, via Wikimedia Commons',
        license: 'Public domain',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Canopus_GeForce_256_DDR.png',
        kind: 'photo',
      },
    ],
    sourceIds: ['wiki-geforce-256'],
    relatedEventIds: ['3dfx-voodoo-1', 'agp', 'geforce-3', 'intel-pentium-3'],
  },
  {
    id: 'geforce-3',
    year: 2001,
    exactDate: '2001-10',
    track: 'graphics',
    title: 'NVIDIA GeForce 3',
    summary:
      'The first GPU with programmable vertex and pixel shaders — the birth of the modern shader pipeline.',
    detailedDescription:
      'The GeForce 3 (NV20, October 2001) was a 170 MHz card with 64 MB of DDR, but its real breakthrough was hardware programmable shaders: separate vertex and pixel shader stages written in NVIDIA’s “Shader Model 1.x.” That moved 3D from fixed-function pipelines to a programmer-defined pipeline, enabling the lighting and effects that defined games from Unreal Tournament 2003 onward. It was the direct answer to ATI’s Radeon 8500 and the card that established the shader model every GPU since has built on.',
    manufacturer: 'NVIDIA',
    specs: {
      coreClock: '170 MHz',
      vram: '64 MB DDR',
      shaders: 'Programmable (Shader Model 1.x)',
      processNode: '0.15 µm',
      bus: 'AGP',
    },
    significance:
      'The GeForce 3 introduced programmable shaders, which turned the GPU from a fixed-function 3D accelerator into a reprogrammable parallel machine — the conceptual leap that led to today’s compute shaders, ray tracing, and general-purpose GPU computing. It is the architectural hinge of the modern GPU.',
    sourceIds: ['wiki-geforce-3'],
    relatedEventIds: ['geforce-256', 'radeon-9700', 'geforce-8800-gtx'],
  },
  {
    id: 'radeon-9700',
    year: 2002,
    exactDate: '2002-08',
    track: 'graphics',
    title: 'ATI Radeon 9700',
    summary:
      'The pipe-riddled benchmark king of 2002 — the card that beat the GeForce FX 5800 and kept the GPU race alive.',
    detailedDescription:
      'The Radeon 9700 (RV360, August 2002) ran at 320 MHz with 128 MB of DDR and a 128-bit bus, and it used a pipelined, 8-pipe design to outpace NVIDIA’s GeForce FX 5800 in most benchmarks at a lower price. It was ATI’s flagship of 2002–2003, the card most “Radeon vs. GeForce” enthusiasts of that era owned, and the one that forced NVIDIA to answer with the GeForce FX 5900. It cemented the “NVIDIA vs. ATI” GPU rivalry that defined the early-2000s gaming PC.',
    manufacturer: 'ATI',
    specs: {
      coreClock: '320 MHz',
      vram: '128 MB DDR',
      memoryBus: '128-bit',
      pipes: '8',
      processNode: '0.15 µm',
      bus: 'AGP / PCI',
    },
    significance:
      'The Radeon 9700 is the “ATI” half of the era’s GPU rivalry: it beat the contemporary GeForce FX 5800 on performance per dollar and kept the 3D race competitive. It anchored the 2002–2003 enthusiast “gaming rig” and is the direct line to the Radeon X-series that followed.',
    sourceIds: ['wiki-radeon-9700'],
    relatedEventIds: ['geforce-3', 'geforce-8800-gtx', 'radeon-hd-2900'],
  },
  {
    id: 'geforce-8800-gtx',
    year: 2006,
    exactDate: '2006-11-08',
    track: 'graphics',
    title: 'NVIDIA GeForce 8800 GTX',
    summary:
      'G80: unified vertex/fragment shaders and 128 cores — the GPU that made “graphics” and “compute” one machine.',
    detailedDescription:
      'The GeForce 8800 GTX (G80, November 8, 2006) was a 55 nm, 129-million-transistor part with 512 MB of GDDR3 and a unified shader array (128 stream processors, so vertex and fragment work shared the same cores). It ran at a 575 MHz core / 1.94 GHz shader clock and delivered about 400–500 GFLOPs. It was the first consumer GPU with a serious CUDA parallel-compute path and the chip that defined the “modern GPU” — a general-purpose parallel machine that happened to do 3D. It set the template every GeForce/RTX since has followed.',
    manufacturer: 'NVIDIA',
    specs: {
      coreClock: '575 MHz (shader 1.94 GHz)',
      vram: '512 MB GDDR3',
      memoryBus: '384-bit',
      transistors: 129000000,
      processNode: '55 nm',
      streamProcessors: 128,
      compute: 'CUDA (unified shaders)',
    },
    significance:
      'The GeForce 8800 GTX is the moment the GPU became a general-purpose parallel processor: unified shaders erased the vertex/fragment split, and CUDA turned the GPU into a compute device. It is the “modern GPU” archetype that the later Multi-Core era (and today’s AI accelerators) descend from.',
    sourceIds: ['wiki-geforce-8800'],
    relatedEventIds: ['geforce-3', 'radeon-9700', 'pcie', 'intel-core-2-duo'],
  },
  {
    id: 'radeon-hd-2900',
    year: 2007,
    exactDate: '2007-12-11',
    track: 'graphics',
    title: 'ATI Radeon HD 2900',
    summary:
      'R600: the first “High Definition” GPU — 648 stream processors, Shader Model 4.0, and the birth of the “HD” era.',
    detailedDescription:
      'The Radeon HD 2900 (R600, December 11, 2007) was a 65 nm, 648-stream-processor card with 512 MB of GDDR3 and the first consumer support for Shader Model 4.0 and High-Definition (HD) video decode. It ran at a 700 MHz core / 1.4 GHz shader clock and was the card that beat the contemporary GeForce 8800 GTX in rasterization, igniting the “HD 2900 vs. 8800” benchmark war. It introduced the “Radeon HD” branding and the unified-shader, high-stream-count design that AMD has since built on.',
    manufacturer: 'ATI / AMD',
    specs: {
      coreClock: '700 MHz (shader 1.4 GHz)',
      vram: '512 MB GDDR3',
      memoryBus: '512-bit',
      transistors: 719000000,
      processNode: '65 nm',
      streamProcessors: 648,
      shaders: 'Shader Model 4.0 (unified)',
    },
    significance:
      'The Radeon HD 2900 is the “ATI/AMD” half of the era’s GPU story and the card that introduced the “HD” (High Definition) generation. Its 648-stream, unified, 512-bit design and Shader Model 4.0 support mark the point at which the GPU became a high-throughput parallel machine for both 3D and HD video — the direct precursor of the modern Radeon line.',
    sourceIds: ['wiki-radeon-hd-2900'],
    relatedEventIds: ['radeon-9700', 'geforce-8800-gtx', 'pcie'],
  },
];