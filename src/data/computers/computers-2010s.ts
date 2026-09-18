import type { HistoricalEvent } from '../../types/historical-event';

/**
 * 2010s personal computers — the Retina era and the shift to slimmer,
 * higher-resolution machines.
 */
export const COMPUTERS_2010S: HistoricalEvent[] = [
  {
    id: 'macbook-pro-retina-13',
    year: 2012,
    exactDate: '2012-05-22',
    track: 'computers',
    title: 'MacBook Pro Retina 13"',
    summary:
      'The 2560×1600 Retina laptop that ended the era of 1280×800 portable screens.',
    detailedDescription:
      'The MacBook Pro Retina 13" (May 22, 2012) paired a 2.3 GHz dual-core Sandy Bridge i5 with a 2560×1600 IPS display, 8–16 GB of soldered DDR3, a 512 GB–1 TB PCIe-connected SSD, and dual Thunderbolt ports — no optical drive, no HDD bay. It was the machine that made “Retina” (high pixel density) the new laptop standard and pushed the whole industry to higher-resolution portable screens. It was the power-user portable of 2012–2015 and the direct rival to the ultrabooks of that window.',
    manufacturer: 'Apple',
    specs: {
      cpu: 'Dual-core Intel Core i5-3210M / i7-3520M @ 2.3–2.9 GHz',
      ram: '8 / 16 GB DDR3 (soldered)',
      storage: '256 GB – 1 TB SSD (PCIe)',
      display: '2560×1600 IPS Retina (13.3")',
      ports: 'Dual Thunderbolt, dual USB 3.0, MagSafe 2',
      os: 'OS X 10.8 (Mountain Lion)',
    },
    significance:
      'The MacBook Pro Retina is the “portable power” icon of the early Multi-Core era: it made high pixel density the new laptop standard, replaced the optical drive with a thin all-SSD chassis, and defined the ultrabook/power-user portable that the rest of the industry chased through 2015.',
    images: [
      {
        url: '/images/gallery/macbook-pro-retina-13.jpg',
        alt: 'A MacBook Pro (2012)',
        attribution: 'Leonardo Alcahuamán, via Wikimedia Commons',
        license: 'CC0 1.0',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Macbook_pro_2012.jpg',
        kind: 'photo',
      },
    ],
    sourceIds: ['wiki-macbook-pro-retina'],
    relatedEventIds: ['intel-core-i7-3770k', 'thunderbolt', 'fhd-1080p', 'nvme'],
  },
];