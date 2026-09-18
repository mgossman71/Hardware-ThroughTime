import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Motherboards / buses of the Performance Race era (2004) — the point-to-point bus
 * that ended PCI and AGP.
 */
export const MOTHERBOARDS_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'pcie',
    year: 2004,
    track: 'motherboards',
    title: 'PCI Express',
    summary:
      'A point-to-point serial bus (1 Gbit/s per lane) — the slot that ended PCI/AGP and became the GPU slot of the era.',
    detailedDescription:
      'PCI Express (PCIe 1.0, 2004; PCIe 2.0 at 5 Gbit/s in 2007) replaced the shared parallel PCI bus and the AGP graphics slot with a point-to-point serial link, where each device (GPU, disk, NIC) gets its own lanes (x1, x4, x8, x16) at 2.5 Gbit/s per lane per direction. It was the GPU slot in the Pentium 4 / Athlon 64 / Core 2 desktops of 2004–2009, and it removed the AGP-era bottleneck between CPU and GPU. It has remained the standard GPU/peripheral bus ever since, and it is the transport NVMe SSDs are built on.',
    manufacturer: 'Industry (PCI-SIG)',
    specs: {
      version: 'PCIe 1.0 (2.5 Gbit/s/lane)',
      lanes: 'x1 / x4 / x8 / x16',
      bandwidth: '250 MB/s per lane per direction (x16 = 4 GB/s)',
      topology: 'Point-to-point serial',
      role: 'GPU / NVMe / NIC slot',
    },
    significance:
      'PCI Express is the bus that closed the PCI/AGP era and opened the “point-to-point” slot age — it made the GPU its own dedicated link and was the slot in the 2004–2009 desktop. It is the ceiling of the Performance Race era’s bus story and the foundation of the NVMe/PCIe SSD and modern GPU eras.',
    sourceIds: ['wiki-pcie'],
    relatedEventIds: ['pci-bus', 'agp', 'geforce-8800-gtx', 'radeon-hd-2900'],
  },
];