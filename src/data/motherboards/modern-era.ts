import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Motherboards / power of the Modern era (2020–2026) — the ATX 2.5 → 3.0 →
 * 3.1 revision line that standardized PCIe 4.0/5.0 and the 12VHPWR GPU connector.
 */
export const MOTHERBOARDS_MODERN: HistoricalEvent[] = [
  {
    id: 'atx-2-5',
    year: 2021,
    track: 'motherboards',
    title: 'ATX 2.5',
    summary:
      'The first ATX revision of the decade — more PCIe lanes and 12V-2x6-ready power delivery.',
    detailedDescription:
      'ATX 2.5 (2021) was the first meaningful ATX revision in a decade, standardizing higher-current power delivery and the 12V-2x6 connector precursor, more PCIe lanes, and cleaner routing for the PCIe 4.0 GPU and NVMe loads that 2020–2022 boards carried. It set the stage for ATX 3.0 and is the spec most 2021–2022 consumer boards (B550, B660, B650) were designed around.',
    manufacturer: 'Industry (PCI-SIG / ATX working group)',
    specs: {
      standard: 'ATX 2.5',
      focus: 'PCIe 4.0, higher-current 12V delivery',
      connector: '12V-2x6 (precursor)',
      era: '2021–2022 consumer boards',
    },
    significance:
      'ATX 2.5 is the revision that broke a decade of "ATX 2.01" stasis: it is the first time the form factor explicitly kept up with PCIe 4.0 and high-draw GPUs, and it set up the 3.0/3.1 power story that followed.',
    sourceIds: ['wiki-atx'],
    relatedEventIds: ['pcie-4-0-ssd-mainstream', 'atx-3-0'],
  },
  {
    id: 'atx-3-0',
    year: 2022,
    exactDate: '2022-09',
    track: 'motherboards',
    title: 'ATX 3.0 (12VHPWR)',
    summary:
      'A 33-amp 12VHPWR connector and a 450 W minimum PSU — the spec that standardized the single-cable RTX 40 GPU.',
    detailedDescription:
      'ATX 3.0 (September 2022) standardized the 12VHPWR connector (16 pins, 3 A per pin for up to 33 A / ~450 W) on the PCIe 5.0 ×16 slot, requiring a minimum 450 W PSU. It is the power standard behind the single-cable RTX 40 and RX 7900 GPUs, and it ended the era of multiple 8-pin PCIe cables for high-end graphics. The 3.1 revision (2024) later replaced the 12VHPWR with the keyed 12V-2x6 to address the melt concerns of the early connector.',
    manufacturer: 'Industry (PCI-SIG / ATX working group)',
    specs: {
      standard: 'ATX 3.0',
      connector: '12VHPWR (16-pin, 3 A/pin)',
      maxDraw: '~450 W on the slot',
      psuMin: '450 W',
      slot: 'PCIe 5.0 ×16',
      era: '2022–2024 GPU/PSU standard',
    },
    significance:
      'ATX 3.0 is the power backbone of the Modern GPU era: it is what let a single cable feed a 450 W card, and its 12VHPWR→12V-2x6 evolution (in ATX 3.1) is the most-watched safety redesign in consumer power delivery in years.',
    sourceIds: ['wiki-atx'],
    relatedEventIds: ['atx-2-5', 'atx-3-1', 'nvidia-rtx-40-ada'],
  },
  {
    id: 'atx-3-1',
    year: 2024,
    exactDate: '2024-11',
    track: 'motherboards',
    title: 'ATX 3.1 (12V-2x6)',
    summary:
      'A keyed 12V-2x6 connector and a 690 W minimum PSU — the safety redesign after the 12VHPWR melts.',
    detailedDescription:
      'ATX 3.1 (November 2024) revised ATX 3.0 in response to the well-documented 12VHPWR melt incidents: it adopts the keyed 12V-2x6 connector (which resists partial insertion) and raises the minimum PSU rating to 690 W to cover the ~450 W slot draw plus the rest of the system. It is the current spec for 2024+ high-end boards and the one the RTX 50 and RDNA 4 GPUs ship with.',
    manufacturer: 'Industry (PCI-SIG / ATX working group)',
    specs: {
      standard: 'ATX 3.1',
      connector: '12V-2x6 (keyed, partial-insertion resistant)',
      psuMin: '690 W',
      slot: 'PCIe 5.0 ×16',
      supersedes: 'ATX 3.0 (12VHPWR)',
      era: '2024+ high-end standard',
    },
    significance:
      'ATX 3.1 is the era\'s power-delivery reckoning: it is the direct industry response to the 12VHPWR safety failures, and it sets the connector and PSU baseline that every 2024+ enthusiast build now assumes.',
    sourceIds: ['wiki-atx'],
    relatedEventIds: ['atx-3-0', 'nvidia-rtx-50-blackwell', 'amd-rdna-3'],
  },
];