import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Storage of the Multi-Core era (2011–2014) — the SSD becomes the default,
 * and NVMe replaces SATA as the ceiling.
 */
export const STORAGE_MULTICORE: HistoricalEvent[] = [
  {
    id: 'sata-ssd',
    year: 2011,
    exactDate: '2011',
    track: 'storage',
    title: 'Commodity SATA SSD',
    summary:
      'Sub-$250 256 GB SSDs — the moment the solid-state drive became the default boot disk.',
    detailedDescription:
      'By 2011–2013, SATA SSDs had fallen below ~US$250 for 256 GB (and ~US$125 for 128 GB), making the solid-state drive the default boot disk for new desktops and laptops. They used the same SATA III (6 Gbit/s) interface as the era’s hard drives but delivered ~500 MB/s sequential reads and, more importantly, single-digit-millisecond random access — the “everything is fast” upgrade that defined the 2012–2015 desktop. They were the storage in the i7-3770K / i7-6700K rigs and the MacBook Pro Retina.',
    manufacturer: 'Industry (Sandisk, Kingston, Samsung, Crucial, Intel)',
    specs: {
      interface: 'SATA III (6 Gbit/s)',
      throughput: '~500 MB/s sequential read',
      commonSizes: '128 / 256 / 512 GB',
      latency: 'Single-digit ms random',
      era: '2011–2015 default boot disk',
    },
    significance:
      'The commodity SATA SSD is the storage event of the early Multi-Core era: it made the solid-state drive the default boot disk, killed the “spinning disk” as the desktop norm, and was the “everything is fast” upgrade of 2012–2015. It is the floor of the era’s storage story and the direct predecessor of the NVMe/PCIe SSD that replaced it as the ceiling.',
    sourceIds: ['wiki-ssd'],
    relatedEventIds: ['ata-ide', 'sata', 'nvme', 'macbook-pro-retina-13'],
  },
  {
    id: 'nvme',
    year: 2014,
    exactDate: '2014',
    track: 'storage',
    title: 'NVMe (Non-Volatile Memory Express)',
    summary:
      'A PCIe-native SSD protocol — 3 GB/s+ reads, the end of the SATA bottleneck.',
    detailedDescription:
      'NVMe (NVM Express, spec 1.0 in April 2011, first consumer PCIe SSDs 2013–2014, mainstream 2016) replaced the SATA/ATA command set with a protocol built natively on PCIe, using many queues (64K) and 64 commands per queue to exploit the parallelism of flash. It delivered 3–7 GB/s of sequential throughput (vs. ~0.5 GB/s for SATA) and single-digit microsecond latency. It was the storage in the 2016–2019 enthusiast desktop, the interface in the MacBook Pro Retina’s PCIe SSD, and the ceiling that the SATA SSD below it couldn’t reach.',
    manufacturer: 'Industry (NVMe Workgroup: Intel, Samsung, Seagate, Adobe, et al.)',
    specs: {
      interface: 'PCIe (x4), NVMe 1.0+',
      throughput: '3–7 GB/s sequential (vs. ~0.5 GB/s SATA)',
      queues: '64K queues × 64 commands',
      latency: 'Single-digit µs random',
      form: 'M.2 / U.2',
    },
    significance:
      'NVMe is the storage event that closes the Multi-Core era: it moved the SSD from the SATA bottleneck to the PCIe bus, tripling (and later doubling again) the ceiling on desktop storage throughput. It is the direct line to today’s NVMe Gen 4/5 drives and the transport the “fast” storage of the 2016–2019 desktop was built on.',
    sourceIds: ['wiki-nvme'],
    relatedEventIds: ['pcie-3.0', 'sata-ssd', 'macbook-pro-retina-13'],
  },
];