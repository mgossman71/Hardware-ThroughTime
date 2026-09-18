import type { HistoricalEvent } from '../../types/historical-event';

/**
 * I/O interfaces of the Modern era (2020–2026) — Thunderbolt 4 and USB4
 * standardize USB-C, then DisplayPort 2.0 and Thunderbolt 5 push to 80 Gbit/s.
 */
export const INTERFACES_MODERN: HistoricalEvent[] = [
  {
    id: 'thunderbolt-4',
    year: 2020,
    track: 'interfaces',
    title: 'Thunderbolt 4',
    summary:
      'A guaranteed 40 Gbit/s over USB-C — the spec that made one cable do data, video, and power.',
    detailedDescription:
      'Thunderbolt 4 (2020, Intel) standardized a guaranteed minimum 40 Gbit/s bidirectional link over USB-C, with a fixed baseline (40 Gbps, 8K display, 100 W power) so any "Thunderbolt 4" port behaves the same. It is the era\'s one-cable standard: the same USB-C connector carries PCIe data, DisplayPort 1.4 video, and USB-PD power, and it became the default on every modern laptop and Mac.',
    manufacturer: 'Intel (with Apple)',
    specs: {
      standard: 'Thunderbolt 4',
      speed: '40 Gbit/s (bidirectional)',
      connector: 'USB-C',
      video: 'DisplayPort 1.4 (4K@60 or dual 5K)',
      power: 'up to 100 W (USB-PD)',
      era: '2020–2023 laptop standard',
    },
    significance:
      'Thunderbolt 4 is the era\'s one-cable story: it is what made a single USB-C port the default way to connect data, display, and power to a modern laptop, and it set the 40 Gbps baseline that USB4 and Thunderbolt 5 then raised.',
    sourceIds: ['wiki-thunderbolt-4'],
    relatedEventIds: ['usb4', 'thunderbolt-5', 'usb-c'],
  },
  {
    id: 'usb4',
    year: 2020,
    track: 'interfaces',
    title: 'USB4',
    summary:
      'USB-IF\'s answer to Thunderbolt — 20 Gbit/s (and later 40) over USB-C, open to all vendors.',
    detailedDescription:
      'USB4 (USB-IF, 2019 spec; products from 2020) is the open USB implementation of the Thunderbolt 3/4 link: 20 Gbit/s in USB4 1.0 (40 Gbit/s in USB4 V2, 2022), over USB-C, with mandatory DisplayPort alt-mode and PCIe tunneling. It is the era\'s "Thunderbolt without the Intel tax" — the same physical connector and link, but an open standard that any vendor can ship, which is why it is now the baseline for the 40 Gbps USB-C ports on mainstream laptops and phones.',
    manufacturer: 'USB Implementers Forum',
    specs: {
      standard: 'USB4 (1.0 / V2)',
      speed: '20 Gbit/s (V2: 40 Gbit/s)',
      connector: 'USB-C',
      video: 'DisplayPort alt-mode (mandatory)',
      tunneling: 'PCIe (mandatory)',
      era: '2020–2025 USB-C baseline',
    },
    significance:
      'USB4 is the era\'s I/O standardization: it took the Thunderbolt link and made it an open USB standard, which is why 40 Gbps USB-C is now the default on mainstream hardware rather than a premium Apple/Intel feature.',
    sourceIds: ['wiki-usb4'],
    relatedEventIds: ['thunderbolt-4', 'usb-c', 'thunderbolt-5'],
  },
  {
    id: 'displayport-2-0',
    year: 2022,
    track: 'interfaces',
    title: 'DisplayPort 2.0',
    summary:
      '80 Gbit/s with DSC — the video link that finally carried 4K@240 and 8K without compression.',
    detailedDescription:
      'DisplayPort 2.0 (VESA, 2022, DP2.1 in 2024) raised the link to 80 Gbit/s (UHBR10) and made Display Stream Compression (DSC) mandatory, which is what makes 4K@240 Hz and 8K displays practical over a single cable. It is the era\'s high-refresh video standard and the transport behind the 240 Hz and 360 Hz esports monitors that define the 2024+ high-refresh tier.',
    manufacturer: 'VESA',
    specs: {
      standard: 'DisplayPort 2.0 (DP2.1 in 2024)',
      bandwidth: '80 Gbit/s (UHBR10)',
      compression: 'DSC (mandatory)',
      resolutions: '4K@240 Hz, 8K@60 Hz',
      era: '2022–2025 high-refresh video standard',
    },
    significance:
      'DisplayPort 2.0 is the era\'s high-refresh enabler: without the 80 Gbps link and mandatory DSC, the 240 Hz and 360 Hz monitors that define 2024+ esports and creator displays would not be possible over a single cable.',
    sourceIds: ['wiki-displayport'],
    relatedEventIds: ['dvi', '4k-oled-monitor'],
  },
  {
    id: 'thunderbolt-5',
    year: 2023,
    track: 'interfaces',
    title: 'Thunderbolt 5',
    summary:
      '80 Gbit/s (120 for video) over USB-C — the fastest one-cable link of the era.',
    detailedDescription:
      'Thunderbolt 5 (announced 2023, products 2024) is the fastest USB-C link of the Modern era: 80 Gbit/s bidirectional, with an asymmetric mode that pushes 120 Gbit/s for video, PCIe Gen 4 tunneling, and a DisplayPort 2.1 sink. It is the era\'s peak one-cable standard and the link the 2024+ Mac and enthusiast laptops ship with, and it sets the ceiling that the 2025–2026 USB4 V2 wave now chases.',
    manufacturer: 'Intel (with Apple)',
    specs: {
      standard: 'Thunderbolt 5',
      speed: '80 Gbit/s (120 Gbit/s asymmetric for video)',
      connector: 'USB-C',
      video: 'DisplayPort 2.1',
      tunneling: 'PCIe Gen 4',
      era: '2024+ peak one-cable standard',
    },
    significance:
      'Thunderbolt 5 is the Modern era\'s I/O ceiling: it is the fastest single-cable link ever to ship in a mainstream laptop, and it defines the 80/120 Gbps bar that the next-generation USB4 V2 and DisplayPort 2.1 standards now race to match.',
    sourceIds: ['wiki-thunderbolt-5'],
    relatedEventIds: ['thunderbolt-4', 'displayport-2-0', 'usb4'],
  },
];