import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Storage of the Modern era (2020–2026) — PCIe 4.0 becomes the desktop norm,
 * then PCIe 5.0 opens the multi-gigabyte-per-second consumer SSD.
 */
export const STORAGE_MODERN: HistoricalEvent[] = [
  {
    id: 'pcie-4-0-ssd-mainstream',
    year: 2020,
    track: 'storage',
    title: 'PCIe 4.0 NVMe becomes mainstream',
    summary:
      '5,000 MB/s consumer SSDs at mainstream prices — the era where "fast storage" stopped being a niche upgrade.',
    detailedDescription:
      'By 2020 the PCIe 4.0 ×4 NVMe SSD (5,000+ MB/s sequential, e.g. the Samsung 980 Pro and WD Black line) was the default high-end desktop drive, roughly doubling the 3,500 MB/s PCIe 3.0 ceiling that had defined the previous decade. This closed the Multi-Core era\'s storage story (where NVMe was the breakthrough) and made sustained multi-gigabyte-per-second throughput the new baseline that game load times, video editing, and AI dataset reads all depend on.',
    manufacturer: 'Industry (PCI-SIG / Samsung, WD, Micron)',
    specs: {
      interface: 'PCIe 4.0 ×4 NVMe',
      bandwidth: '8 GB/s per direction (~7 GB/s usable)',
      typical: '5,000–7,000 MB/s sequential',
      examples: 'Samsung 980 Pro, WD Black SN770/SN850',
      era: '2020–2023 desktop standard',
    },
    significance:
      'PCIe 4.0 going mainstream is the point at which storage stopped being a bottleneck in the Modern PC: it doubled the era\'s sequential ceiling and made the "fast SSD" a default purchase rather than an enthusiast one.',
    sourceIds: ['wiki-pci-express'],
    relatedEventIds: ['nvme', 'pcie', 'samsung-990-pro'],
  },
  {
    id: 'samsung-990-pro',
    year: 2022,
    track: 'storage',
    title: 'Samsung 990 Pro',
    summary:
      '7,450 MB/s on 96-layer V-NAND — the top PCIe 4.0 drive of the era.',
    detailedDescription:
      'The Samsung 990 Pro (2022) was the first consumer NVMe SSD to use 96-layer V-NAND, delivering ~7,450 MB/s sequential reads and ~6,900 MB/s writes on PCIe 4.0 ×4. It set the ceiling of the PCIe 4.0 generation and became the reference "fastest drive you could buy" for the 2022–2023 desktop, just before PCIe 5.0 parts arrived and pushed the bar past 12 GB/s.',
    manufacturer: 'Samsung',
    specs: {
      interface: 'PCIe 4.0 ×4 NVMe',
      read: '~7,450 MB/s',
      write: '~6,900 MB/s',
      nand: '96-layer V-NAND (PLC/QLC mix)',
      generation: 'Top of the PCIe 4.0 consumer line',
    },
    significance:
      'The 990 Pro is the high-water mark of the PCIe 4.0 era: it shows exactly how fast the "previous generation" got before PCIe 5.0 (990 Pro 2) doubled it again — the same two-step cadence that has driven storage for a decade.',
    sourceIds: ['wiki-samsung-990-pro'],
    relatedEventIds: ['pcie-4-0-ssd-mainstream', 'samsung-990-pro-2', 'nvme'],
  },
  {
    id: 'samsung-990-pro-2',
    year: 2023,
    track: 'storage',
    title: 'Samsung 990 Pro 2 (PCIe 5.0)',
    summary:
      '12.4 GB/s on PCIe 5.0 ×4 — the first time a consumer SSD crossed the 12 GB/s line.',
    detailedDescription:
      'The Samsung 990 Pro 2 (2023) was among the first mainstream PCIe 5.0 ×4 NVMe SSDs, delivering ~12.4 GB/s sequential reads — roughly doubling the PCIe 4.0 ceiling of the 990 Pro. It required a PCIe 5.0-capable platform (Intel 13th/14th-gen or AMD X670E) and a robust heatsink, but it opened the era\'s "ultra-fast storage" tier that 2024–2025 parts (WD SN8100, SK hynix P31) continued to push toward 14 GB/s and beyond.',
    manufacturer: 'Samsung',
    specs: {
      interface: 'PCIe 5.0 ×4 NVMe',
      read: '~12,400 MB/s',
      write: '~11,800 MB/s',
      platform: 'PCIe 5.0 (Intel 13th/14th-gen, AMD X670E)',
      cooling: 'Heatsink required',
    },
    significance:
      'The 990 Pro 2 is the moment consumer storage jumped from the 7 GB/s ceiling to 12 GB/s+: it proves the PCIe 5.0 generation is real and usable, and it sets the new baseline that the late-2020s drives now chase.',
    sourceIds: ['wiki-samsung-990-pro-2'],
    relatedEventIds: ['samsung-990-pro', 'pcie-4-0-ssd-mainstream', 'nvme'],
  },
];