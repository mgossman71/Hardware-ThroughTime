import type { HistoricalEvent } from '../../types/historical-event';

/**
 * I/O of the Multi-Core era (2008–2014) — USB 3.0, Thunderbolt, and the USB-C
 * connector that unified them.
 */
export const INTERFACES_MULTICORE: HistoricalEvent[] = [
  {
    id: 'usb-3.0',
    year: 2008,
    exactDate: '2008-11-12',
    track: 'interfaces',
    title: 'USB 3.0 (SuperSpeed)',
    summary:
      '5 Gbit/s over the same Type-A connector — the USB speed of the 2010–2019 desktop.',
    detailedDescription:
      'USB 3.0 (SuperSpeed, USB-IF, November 12, 2008, mainstream on desktops 2010–2011) delivered 5 Gbit/s (625 MB/s) over the same Type-A / Type-B connectors as USB 2.0, backward-compatible with 480 Mbit/s SuperSpeed and 12 Mbit/s full-speed devices. It was the USB speed in the 2010–2019 desktop, the interface for the first “fast” external SSDs and hard drives, and the port in the i7-3770K / i7-6700K / Ryzen rigs. It was superseded by USB 3.1 Gen 2 (10 Gbit/s, 2017) and USB4 (20–40 Gbit/s, 2019–2020).',
    manufacturer: 'USB Implementers Forum',
    specs: {
      version: 'USB 3.0 (SuperSpeed)',
      speed: '5 Gbit/s (625 MB/s)',
      connectors: 'Type-A / Type-B / Micro-B',
      compat: 'Backward-compatible with USB 2.0 / 1.1',
    },
    significance:
      'USB 3.0 is the USB speed of the Multi-Core era: it made 5 Gbit/s a commodity on the desktop (mainstream 2010–2011) and was the interface for the first “fast” external SSDs and drives of the 2010s. It closes the Performance-Race-era USB 2.0 story and is the direct predecessor of USB 3.1 Gen 2 and USB4.',
    sourceIds: ['wiki-usb-3.0'],
    relatedEventIds: ['usb-2.0', 'sata-ssd', 'usb-c'],
  },
  {
    id: 'thunderbolt',
    year: 2011,
    exactDate: '2011-11-15',
    track: 'interfaces',
    title: 'Thunderbolt',
    summary:
      'PCIe + DisplayPort over a single Mini DisplayPort — the 10 Gbps “one cable” of the 2010s laptop.',
    detailedDescription:
      'Thunderbolt (Intel + Apple, November 15, 2011, on the MacBook Pro) carried PCIe (up to 10 Gbit/s per direction) and DisplayPort over a single Mini DisplayPort connector, so one cable could drive an external GPU, a 4K display, and a storage array at once. It was the “one cable” of the 2010s ultrabook and MacBook Pro, the interface for the external GPU (eGPU) era, and the one that made the MacBook Pro Retina’s thin chassis possible (no internal slots). It was superseded by Thunderbolt 3/4 (USB-C) in 2015–2020.',
    manufacturer: 'Intel + Apple',
    specs: {
      version: 'Thunderbolt 1',
      speed: '10 Gbit/s per direction (PCIe) + DisplayPort',
      connector: 'Mini DisplayPort',
      role: 'GPU / display / storage over one cable',
    },
    significance:
      'Thunderbolt is the “one cable” of the 2010s laptop era: it carried PCIe and DisplayPort over a single Mini DisplayPort connector, made the thin all-SSD MacBook Pro possible, and opened the external-GPU (eGPU) era. It closes the Multi-Core era’s I/O story and is the direct ancestor of Thunderbolt 3/4 (USB-C) and the USB4 that unifies them.',
    sourceIds: ['wiki-thunderbolt'],
    relatedEventIds: ['pcie-3.0', 'macbook-pro-retina-13', 'usb-c'],
  },
  {
    id: 'usb-c',
    year: 2014,
    exactDate: '2014',
    track: 'interfaces',
    title: 'USB-C',
    summary:
      'A reversible, 10 Gbit/s connector with 100 W power — the port that unified the 2015+ laptop.',
    detailedDescription:
      'USB-C (USB-IF, 2014, mainstream 2015 with the all-USB-C MacBook) was a reversible, 24-pin connector carrying USB 3.1 Gen 1 (10 Gbit/s) and up to 100 W of power delivery, and it could carry DisplayPort/Thunderbolt alternate mode. It was the “one port” of the 2015+ ultrabook and MacBook, the one that ended the era of five different connector shapes, and the interface for the USB-C-only laptop of the 2016–2019 era. It was superseded by USB4 (20–40 Gbit/s, 2019–2020) and Thunderbolt 4 (40 Gbit/s, 2020) on the same connector.',
    manufacturer: 'USB Implementers Forum',
    specs: {
      version: 'USB-C (USB 3.1 Gen 1)',
      speed: '10 Gbit/s',
      connector: 'Reversible 24-pin',
      power: 'Up to 100 W (USB-PD)',
      altMode: 'DisplayPort / Thunderbolt',
    },
    significance:
      'USB-C is the connector that closes the Multi-Core era: it unified the era’s five connector shapes (USB-A, Mini, Micro, Thunderbolt, DisplayPort) into one reversible port with 100 W of power, and it was the “one port” of the 2015+ ultrabook and MacBook. It is the direct ancestor of USB4 and Thunderbolt 4 that open the next era.',
    sourceIds: ['wiki-usb-c'],
    relatedEventIds: ['usb-3.0', 'thunderbolt', 'macbook-pro-retina-13'],
  },
];