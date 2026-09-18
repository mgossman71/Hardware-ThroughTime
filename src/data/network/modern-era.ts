import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Networking of the Modern era (2020–2026) — 2.5GbE becomes a default on the
 * motherboard, and 10GbE comes down to the consumer.
 */
export const NETWORK_MODERN: HistoricalEvent[] = [
  {
    id: '2-5-gigabit-ethernet',
    year: 2020,
    track: 'networking',
    title: '2.5 Gigabit Ethernet (on-board)',
    summary:
      '2.5 Gbit/s over the same RJ-45 — the "free" upgrade that became the default LAN on enthusiast boards.',
    detailedDescription:
      '2.5GbE (IEEE 802.3, ~2.5 Gbit/s over a single twisted pair, backward-compatible with 10/100/1000BASE-T) moved from a discrete NIC to an on-board default on enthusiast motherboards (B550, B560, B550-based boards) in 2019–2021. It is the era\'s "you should just get this" LAN speed: a 2.5× jump over gigabit with no new cabling, and the baseline that both Intel (I225/I226) and Realtek (RTL8125) shipped as standard by 2022.',
    manufacturer: 'Industry (IEEE 802.3; Intel / Realtek PHYs)',
    specs: {
      standard: 'IEEE 802.3 (2.5GBASE-T)',
      speed: '2.5 Gbit/s',
      medium: 'RJ-45, 1 pair, backward-compatible',
      adoption: 'On-board default on enthusiast boards 2020–2022',
      phy: 'Intel I225/I226, Realtek RTL8125',
    },
    significance:
      '2.5GbE is the era\'s quiet networking upgrade: it made "more than gigabit" a default feature rather than a discrete purchase, and it set the LAN baseline that the 10GbE consumer wave then pushed past.',
    sourceIds: ['wiki-2-5-gigabit-ethernet'],
    relatedEventIds: ['ethernet-gigabit', '10gbase-t-consumer'],
  },
  {
    id: '10gbase-t-consumer',
    year: 2023,
    track: 'networking',
    title: '10GBASE-T (consumer)',
    summary:
      '10 Gbit/s over twisted pair in a consumer NIC — the "next LAN" for the home office and content creator.',
    detailedDescription:
      '10GBASE-T (IEEE 802.3bz, 10 Gbit/s over 4 twisted pairs to 30 m, backward-compatible down to 1 GbE) went from a data-center staple to a mainstream consumer NIC in 2022–2023 (Intel X550/X710, Marvell AQtion). It is the era\'s answer to the home-office/creator demand for a LAN that can keep up with a PCIe 4.0 SSD and a 10 Gbps ISP, and it is the natural step up from the 2.5GbE default that boards shipped since 2020.',
    manufacturer: 'Industry (IEEE 802.3bz; Intel / Marvell)',
    specs: {
      standard: 'IEEE 802.3bz (10GBASE-T)',
      speed: '10 Gbit/s',
      medium: 'RJ-45, 4 pairs, up to 30 m',
      compat: 'Backward-compatible to 1/2.5/5 GbE',
      era: '2022–2024 consumer NIC',
    },
    significance:
      '10GBASE-T is the era\'s LAN ceiling for the prosumer: it closes the gap between "2.5GbE default" and "data center," and it is the standard that the 2024–2025 "fast home network" builds now assume.',
    sourceIds: ['wiki-10gbase-t-bz'],
    relatedEventIds: ['2-5-gigabit-ethernet', 'ethernet-10g'],
  },
];