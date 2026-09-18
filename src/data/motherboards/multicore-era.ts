import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Motherboards / buses of the Multi-Core era (2010) — PCIe 3.0 doubles the
 * slot bandwidth that GPUs and NVMe drives run on.
 */
export const MOTHERBOARDS_MULTICORE: HistoricalEvent[] = [
  {
    id: 'pcie-3.0',
    year: 2010,
    exactDate: '2010-11',
    track: 'motherboards',
    title: 'PCI Express 3.0',
    summary:
      '8 GT/s per lane — the slot bandwidth that the GTX 480→1080 and NVMe drives ran on.',
    detailedDescription:
      'PCI Express 3.0 (PCIe 3.0, ratified November 2010, mainstream on 2011+ boards) doubled the per-lane signaling rate of PCIe 2.0 to 8 GT/s (1 GB/s per lane per direction after 128b/130b encoding), so an x16 slot delivered 15.75 GB/s per direction. It was the GPU slot in the 2010–2019 desktop (GTX 480 → 680 → 1080 → RTX 2080) and the transport the NVMe SSDs of that window ran on. It remained the standard GPU/peripheral bus of the Multi-Core era, superseded by PCIe 4.0 in 2017–2019.',
    manufacturer: 'Industry (PCI-SIG)',
    specs: {
      version: 'PCIe 3.0 (8 GT/s/lane)',
      bandwidth: '1 GB/s per lane per direction (x16 = 15.75 GB/s)',
      encoding: '128b/130b',
      role: 'GPU / NVMe / NIC slot',
      era: '2010–2019 desktop standard',
    },
    significance:
      'PCIe 3.0 is the bus of the Multi-Core era: it doubled the slot bandwidth of PCIe 2.0 and was the transport the GTX 480→1080 GPU line and the NVMe SSDs of that window ran on. It is the ceiling of the era’s bus story and the direct predecessor of PCIe 4.0 (2017) and 5.0 (2019) that close out the decade.',
    sourceIds: ['wiki-pcie-3.0'],
    relatedEventIds: ['pcie', 'geforce-gtx-480', 'nvme', 'nvidia-rtx-2080'],
  },
];