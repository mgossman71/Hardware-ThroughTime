import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Graphics of the Modern era (2020–2026) — the decade of ray tracing, DLSS
 * frame generation, and the AI workload that reshaped what a GPU is for.
 */
export const GRAPHICS_MODERN: HistoricalEvent[] = [
  {
    id: 'nvidia-rtx-30-ampere',
    year: 2020,
    exactDate: '2020-09-24',
    track: 'graphics',
    title: 'NVIDIA GeForce RTX 30 (Ampere)',
    summary:
      'Second-gen ray tracing, third-gen Tensor cores, and DLSS 2 — the era where AI denoising became a selling point.',
    detailedDescription:
      'Ampere (GA102, RTX 3090, launched 24 September 2020) was built on TSMC 8 nm and paired second-gen RT cores with third-gen Tensor cores. Its most consequential feature was DLSS 2.0: a deep-learning super-sampling pipeline that rendered a game at lower internal resolution and reconstructed a sharp 1440p/4K image, using the Tensor cores to do the heavy lifting. DLSS became a permanent, measurable frame-rate tool and the reason "AI" moved from a marketing word into the frame pipeline of every modern GPU.',
    manufacturer: 'NVIDIA',
    specs: {
      flagship: 'RTX 3090 (GA102)',
      process: 'TSMC 8 nm',
      rtCores: '2nd gen',
      tensorCores: '3rd gen',
      feature: 'DLSS 2.0 (deep learning super sampling)',
    },
    significance:
      'Ampere is where GPUs became AI accelerators in the gaming sense: DLSS turned tensor hardware into a usable frame-rate feature and set the pattern (dedicated AI silicon + neural rendering) that Ada and Blackwell refined into a dominant position.',
    sourceIds: ['wiki-ampere'],
    relatedEventIds: ['nvidia-rtx-2080', 'nvidia-rtx-40-ada', 'hbm2e-a100'],
  },
  {
    id: 'nvidia-rtx-40-ada',
    year: 2022,
    exactDate: '2022-11-16',
    track: 'graphics',
    title: 'NVIDIA GeForce RTX 40 (Ada)',
    summary:
      '4 nm, DLSS 3 frame generation, and a 4× efficiency leap over Ampere — the chip that defined the AI-PC GPU.',
    detailedDescription:
      'Ada Lovelace (AD102, RTX 4090, announced 12 October 2022 / shipped 16 November 2022) moved to TSMC 4 nm and introduced DLSS 3 with Frame Generation: the GPU uses its optical-flow and AI pipeline to synthesize entirely new intermediate frames between rendered ones, roughly doubling perceived frame rates in supported titles. With fourth-gen Tensor cores and a step-change in watts-per-fps over RTX 30, Ada became the reference point against which AMD\'s RDNA 3 and Intel\'s Arc were judged.',
    manufacturer: 'NVIDIA',
    specs: {
      flagship: 'RTX 4090 (AD102)',
      process: 'TSMC 4 nm',
      tensorCores: '4th gen',
      feature: 'DLSS 3.0 Frame Generation',
      efficiency: '~2–4× perf/watt vs RTX 30',
    },
    significance:
      'Ada is the flagship of the Modern GPU story: DLSS 3 Frame Generation made AI synthesis a headline gaming feature, and Ada\'s efficiency set the bar that every 2023–2025 competitor (RDNA 3/4, Intel Arc) had to match.',
    sourceIds: ['wiki-ada-lovelace'],
    relatedEventIds: ['nvidia-rtx-30-ampere', 'amd-rdna-3', 'nvidia-rtx-50-blackwell'],
  },
  {
    id: 'intel-arc-alchemist',
    year: 2022,
    exactDate: '2022-12-27',
    track: 'graphics',
    title: 'Intel Arc (Alchemist)',
    summary:
      'Intel\'s first discrete GPU since Larrabee — Xe-HPG, AV1, and a real three-way GPU market.',
    detailedDescription:
      'Intel Arc (Alchemist, ACM-G10, Arc A750, launched 27 December 2022) was the first credible Intel discrete GPU since the failed Larrabee/Enlight program, built on the Xe-HPG architecture. The Arc A750 shipped with 8 Xe-cores, 8 GB GDDR6, and native AV1 encode/decode. While its launch software was rough, it re-established Intel as a third discrete-GPU vendor and brought AV1 hardware encoding to the mainstream for the first time — a feature that AMD and NVIDIA only matched later.',
    manufacturer: 'Intel',
    specs: {
      flagship: 'Arc A750 (ACM-G10)',
      architecture: 'Xe-HPG (Alchemist)',
      cores: '8 Xe-cores',
      memory: '8 GB GDDR6',
      encode: 'Native AV1 encode/decode',
    },
    significance:
      'Arc is the event that made the Modern GPU market genuinely three-way: it forced NVIDIA and AMD to compete on value and features (not just performance), and its AV1 encoder became a de facto standard that the whole industry adopted.',
    sourceIds: ['wiki-intel-arc'],
    relatedEventIds: ['amd-rdna-3', 'nvidia-rtx-40-ada'],
  },
  {
    id: 'amd-rdna-3',
    year: 2023,
    track: 'graphics',
    title: 'AMD Radeon RX 7900 (RDNA 3)',
    summary:
      'Chiplet GPUs with an integrated iGPU on the same package — RDNA 3 brings AMD\'s data-center playbook to the desktop.',
    detailedDescription:
      'RDNA 3 (RX 7900 XTX "Navi 31", 2023) was AMD\'s first fully chiplet desktop GPU: the graphics die (GCD) and I/O die (IOD) are separate, with an integrated GPU and Infinity Fabric on the IOD, mirroring the EPYC data-center design. On TSMC 5 nm/6 nm with 24 GB GDDR6, the 7900 XTX matched or beat the RTX 4080 while costing less, and its chiplet approach cut cost-per-transistor — the same strategy that won for EPYC — applied to consumer graphics.',
    manufacturer: 'AMD',
    specs: {
      flagship: 'RX 7900 XTX (Navi 31)',
      process: 'TSMC 5 nm (GCD) / 6 nm (IOD)',
      memory: '24 GB GDDR6',
      design: 'Chiplet GCD + IOD, integrated iGPU',
      fabric: 'Infinity Fabric',
    },
    significance:
      'RDNA 3 is the architectural story of the era: it proves the chiplet model works for consumer GPUs, letting AMD trade raw clock for efficiency and cost — and it re-framed "performance per dollar" as the metric that decides the Modern GPU war.',
    sourceIds: ['wiki-rdna-3'],
    relatedEventIds: ['nvidia-rtx-40-ada', 'intel-arc-alchemist', 'amd-zen-4'],
  },
  {
    id: 'nvidia-rtx-50-blackwell',
    year: 2024,
    track: 'graphics',
    title: 'NVIDIA GeForce RTX 50 (Blackwell)',
    summary:
      'Fifth-gen Tensor cores and DLSS 4 Multi-Frame Generation — the GPU built for generative-AI-era rendering.',
    detailedDescription:
      'Blackwell (B200 / RTX 50 series, announced at GTC March 2024, consumer RTX 50 launched 2025) is NVIDIA\'s architecture for the generative-AI era: fifth-gen Tensor cores with a new FP4/FP8 data path, a fourth-gen Transformer Engine, and DLSS 4 Multi-Frame Generation, which can synthesize up to three AI frames between each rendered one. It is the same silicon family (B200) that underpins the data-center AI accelerators, unifying the PC and data-center GPU roadmaps for the first time.',
    manufacturer: 'NVIDIA',
    specs: {
      flagship: 'RTX 5090 (GB202) / B200 (data center)',
      tensorCores: '5th gen, FP4/FP8',
      engine: '4th-gen Transformer Engine',
      feature: 'DLSS 4 Multi-Frame Generation',
      note: 'Same silicon family as the B200 data-center GPU',
    },
    significance:
      'Blackwell completes the Modern GPU arc: by the mid-2020s the gaming GPU and the AI accelerator are the same design, and DLSS 4 Multi-Frame Generation makes neural frame synthesis the default path to high frame rates — the direct descendant of DLSS 2 in Ampere.',
    sourceIds: ['wiki-blackwell'],
    relatedEventIds: ['nvidia-rtx-40-ada', 'hbm3e-h200', 'nvidia-rtx-30-ampere'],
  },
];