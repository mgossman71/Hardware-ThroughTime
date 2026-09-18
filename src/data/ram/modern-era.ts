import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Memory of the Modern era (2020–2026) — DDR5 goes mainstream and HBM becomes
 * the defining memory of the AI decade.
 */
export const RAM_MODERN: HistoricalEvent[] = [
  {
    id: 'hbm2e-a100',
    year: 2020,
    track: 'ram',
    title: 'HBM2E (NVIDIA A100)',
    summary:
      '80 GB of stacked DRAM at 2 TB/s — the memory that made the GPU the AI accelerator.',
    detailedDescription:
      'The NVIDIA A100 (May 2020) put 80 GB of HBM2E high-bandwidth memory on a silicon interposer, delivering ~2.0 TB/s of aggregate bandwidth to the GPU. HBM stacks DRAM dies vertically with through-silicon vias and bonds them to the logic die, so it trades capacity-per-dollar for raw bandwidth — the exact property a deep-learning training loop needs. The A100/HBM2E pairing is the reference point for the entire data-center memory story of the 2020s.',
    manufacturer: 'NVIDIA (Samsung / SK hynix HBM2E)',
    specs: {
      technology: 'HBM2E (8-hi stacks)',
      capacity: '80 GB',
      bandwidth: '~2.0 TB/s',
      packaging: 'Silicon interposer, TSV',
      accelerator: 'NVIDIA A100',
    },
    significance:
      'HBM2E on the A100 is the memory-side origin of the Modern AI era: it made "bandwidth, not capacity" the design goal and set the baseline that HBM3 and HBM3E then raced to beat.',
    sourceIds: ['wiki-high-bandwidth-memory'],
    relatedEventIds: ['hbm3', 'hbm3e-h200', 'nvidia-rtx-30-ampere'],
  },
  {
    id: 'ddr5-mainstream',
    year: 2021,
    track: 'ram',
    title: 'DDR5 SDRAM',
    summary:
      '1.1 V, 4800 MT/s base, on-die ECC — the DIMM that replaced DDR4 across the desktop.',
    detailedDescription:
      'DDR5 (JEDEC standard, products from 2020–2021) raised the base rate to 4800 MT/s, split each module into two independent 32-bit sub-channels for better bank concurrency, added on-die ECC, and kept the 1.1 V nominal. It became the mandatory desktop memory with Intel\'s 12th-gen Alder Lake platform (2021–2022) and AMD\'s AM5 (2022), and by 2023–2024 it was the only choice in new builds. The shift also enabled the 5600/6000+ MT/s speeds that define the era\'s enthusiast tuning.',
    manufacturer: 'Industry (JEDEC JESD79-5)',
    specs: {
      standard: 'JEDEC JESD79-5 (DDR5)',
      baseRate: '4800 MT/s',
      voltage: '1.1 V',
      architecture: '2× 32-bit sub-channels per DIMM',
      ecc: 'On-die ECC',
      platform: 'LGA 1700 (Intel) / AM5 (AMD)',
    },
    significance:
      'DDR5 is the memory backbone of the Modern desktop: it replaced DDR4 on both platforms, added a decade\'s headroom of speed, and its sub-channel redesign is the direct ancestor of the higher-rate modules (DDR5-6400+, CUDIMM) of the late 2020s.',
    sourceIds: ['wiki-ddr5-sdram'],
    relatedEventIds: ['ddr4-sdram', 'intel-alder-lake', 'amd-zen-4'],
  },
  {
    id: 'hbm3',
    year: 2022,
    track: 'ram',
    title: 'HBM3',
    summary:
      '12-hi stacks, 1.2 TB/s per stack, and a 1024-bit bus — the memory behind the Hopper and H100 wave.',
    detailedDescription:
      'HBM3 (JEDEC JESD238-3A, products 2022–2023) doubled the per-stack data rate over HBM2E with 12-hi DRAM stacks, a wider 1024-bit interface, and a new PHY, delivering ~1.2 TB/s per stack. It is the memory in NVIDIA\'s Hopper H100 and the AMD MI300 class, and its bandwidth-per-watt was the enabling factor that made large transformer models practical to train. HBM3 set the pace that HBM3E (2024) and HBM4 (2025) continued.',
    manufacturer: 'Industry (JEDEC JESD238-3A; SK hynix / Samsung / Micron)',
    specs: {
      standard: 'JEDEC JESD238-3A (HBM3)',
      stack: '12-hi',
      bus: '1024-bit per stack',
      bandwidth: '~1.2 TB/s per stack',
      users: 'NVIDIA Hopper (H100), AMD MI300 class',
    },
    significance:
      'HBM3 is the memory of the generative-AI inflection: it is what let the H100 and MI300 feed GPUs fast enough for the 2023–2024 model wave, and it established the "more bandwidth per watt" race that defines the era\'s memory market.',
    sourceIds: ['wiki-high-bandwidth-memory'],
    relatedEventIds: ['hbm2e-a100', 'hbm3e-h200', 'nvidia-rtx-40-ada'],
  },
  {
    id: 'hbm3e-h200',
    year: 2024,
    track: 'ram',
    title: 'HBM3E (NVIDIA H200)',
    summary:
      '141 GB at 4.8 TB/s — the highest-bandwidth memory of the era, on the Hopper successor.',
    detailedDescription:
      'The NVIDIA H200 (2024) is a Hopper GPU with 141 GB of HBM3E memory, roughly doubling the H100\'s 80 GB and pushing aggregate bandwidth to ~4.8 TB/s. HBM3E raises the per-stack rate over HBM3 and widens the effective bandwidth, which is exactly what long-context LLM inference and large-batch training demand. The H200/HBM3E pairing became the default "big-memory AI GPU" of 2024–2025 and the direct competitor to the Blackwell/MI300 generation.',
    manufacturer: 'NVIDIA (SK hynix HBM3E)',
    specs: {
      technology: 'HBM3E',
      capacity: '141 GB',
      bandwidth: '~4.8 TB/s',
      accelerator: 'NVIDIA H200 (Hopper)',
      generation: '1.4× the H100\'s 80 GB',
    },
    significance:
      'HBM3E on the H200 is the peak of the era\'s memory-bandwidth race: it shows how far the "feed the GPU faster" arms race has gone, and it is the memory baseline that HBM4 and the Blackwell/MI300X parts now have to beat.',
    sourceIds: ['wiki-nvidia-h200'],
    relatedEventIds: ['hbm3', 'hbm2e-a100', 'nvidia-rtx-50-blackwell'],
  },
  {
    id: 'hbm4',
    year: 2026,
    track: 'ram',
    title: 'HBM4',
    summary:
      'A wider 2048-bit per-stack interface and a higher data rate — the next rung in the AI memory bandwidth race.',
    detailedDescription:
      'HBM4 (JEDEC, production ramp 2026) widens the per-stack interface to 2048 bits and raises the per-stack data rate over HBM3E, targeting the next generation of AI accelerators (NVIDIA Rubin-class and the AMD MI-series). It continues the "feed the GPU faster" arms race that HBM2E → HBM3 → HBM3E established, and by 2026 it is moving from sampling into volume production at SK hynix, Samsung, and Micron.',
    manufacturer: 'Industry (JEDEC; SK hynix / Samsung / Micron)',
    specs: {
      standard: 'JEDEC (HBM4)',
      interface: '2048-bit per stack',
      generation: 'successor to HBM3E',
      era: '2026 AI accelerator memory',
    },
    significance:
      "HBM4 is where the era's memory story points next: doubling the HBM interface width is the only way to keep feeding transformer workloads, and it becomes the memory baseline that Rubin-class and later accelerators will demand.",
    sourceIds: ['wiki-high-bandwidth-memory'],
    relatedEventIds: ['hbm3e-h200', 'hbm3'],
  },
];