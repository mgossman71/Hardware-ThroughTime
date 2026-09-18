import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Storage of the Performance Race era (2003) — the serial interface that ended PATA.
 */
export const STORAGE_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'sata',
    year: 2003,
    track: 'storage',
    title: 'Serial ATA (SATA)',
    summary:
      'A 4-wire serial interface at 1.5 Gbit/s — the disk bus that ended the 40-pin PATA era.',
    detailedDescription:
      'Serial ATA (SATA-1, 2003; SATA-2 at 3.0 Gbit/s in 2006) replaced Parallel ATA (PATA) with a 4-wire serial interface carrying ~150 MB/s (SATA-1) or ~300 MB/s (SATA-2) per direction. It used a small 7-pin connector, thin cables, and a point-to-point link (so a drive no longer shared a bus with a second device), and it added hot-swap. It was the disk interface in the Pentium 4 / Athlon 64 / Core 2 desktops of 2003–2009, and it remained the consumer disk standard until NVMe/PCIe SSDs took over.',
    manufacturer: 'Industry (Serial ATA International Organization)',
    specs: {
      version: 'SATA-1 (1.5 Gbit/s)',
      throughput: '~150 MB/s (SATA-1), ~300 MB/s (SATA-2)',
      wires: '4 (2 data + 2 ground)',
      connector: '7-pin',
      topology: 'Point-to-point (hot-swap capable)',
    },
    significance:
      'SATA is the disk bus that closed the PATA era and opened the “serial” storage age — it made the hard-disk connection thinner, faster, and hot-swappable, and it was the interface in the 2003–2009 desktop. It is the floor of the Performance Race era’s storage story and the direct predecessor of the NVMe/PCIe SSD era.',
    sourceIds: ['wiki-sata'],
    relatedEventIds: ['ata-ide', 'usb-2.0', 'intel-core-2-duo'],
  },
];