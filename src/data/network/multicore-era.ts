import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Wired + wireless networking of the Multi-Core era (2010–2019) — 10 Gbps
 * wired and the Wi-Fi 5/6 wireless generations.
 */
export const NETWORK_MULTICORE: HistoricalEvent[] = [
  {
    id: 'ethernet-10g',
    year: 2010,
    exactDate: '2010-07',
    track: 'networking',
    title: '10 Gigabit Ethernet (10GBASE-T)',
    summary:
      '10 Gbps over Cat 6 — the LAN speed of the 2010–2019 prosumer and server edge.',
    detailedDescription:
      '10 Gigabit Ethernet over twisted pair (10GBASE-T, IEEE 802.3an, July 2010, mainstream on prosumer boards 2011–2013) delivered 10 Gbit/s full-duplex over four pairs of Category 6 UTP, using the same RJ-45 connector and 802.3 framing as Gigabit. It was the LAN speed in the 2010–2019 prosumer workstation, NAS, and server edge — the interface for the “gaming rig” with a fast storage array, the content-creator box, and the home lab. It was superseded by 25GBASE-T (2016) and 40/100 GbE in the data center.',
    manufacturer: 'Industry (IEEE 802.3an)',
    specs: {
      standard: 'IEEE 802.3an (10GBASE-T)',
      speed: '10 Gbit/s (full-duplex)',
      medium: 'Category 6 UTP, 4 pairs',
      connector: 'RJ-45',
    },
    significance:
      '10 Gigabit Ethernet is the LAN speed of the Multi-Core era’s “prosumer” segment: it made 10 Gbps a commodity on Cat 6 and was the interface in the 2010–2019 workstation, NAS, and home-lab rigs. It closes the Performance-Race-era Gigabit story and sets the floor for the 25G/40G/100G eras that follow.',
    sourceIds: ['wiki-10gbase-t'],
    relatedEventIds: ['ethernet-gigabit', 'pcie-3.0', 'sata-ssd'],
  },
  {
    id: 'wifi-802-11ac',
    year: 2013,
    exactDate: '2013',
    track: 'networking',
    title: 'Wi-Fi 5 (802.11ac)',
    summary:
      'Up to 1.3 Gbit/s in 5 GHz — the wireless of the 2013–2019 home.',
    detailedDescription:
      '802.11ac (Wi-Fi 5, ratified 2013, products 2013–2014) delivered up to 1.3 Gbit/s in the 5 GHz band using 256-QAM, 80 MHz channels, and multi-user MIMO (Wave 2). It was the “Wi-Fi” most people picture for the 2013–2019 home, the wireless in the 4K streaming box, the ultrabook, and the “whole-home Wi-Fi” router of that window. It was backward-compatible with 802.11n and was superseded by 802.11ax (Wi-Fi 6) in 2019.',
    manufacturer: 'Industry (IEEE 802.11ac-2013)',
    specs: {
      standard: 'IEEE 802.11ac-2013',
      maxRate: 'up to 1.3 Gbit/s (256-QAM, 80 MHz, MU-MIMO)',
      band: '5 GHz',
      compat: 'Backward-compatible with 802.11n',
    },
    significance:
      '802.11ac (Wi-Fi 5) is the wireless of the 2013–2019 home: it pushed home Wi-Fi above 1 Gbit/s, carried the 4K streaming and ultrabook era, and was the default for the “whole-home Wi-Fi” routers of that window. It is the ceiling of the Multi-Core era’s wireless story and the direct ancestor of 802.11ax (Wi-Fi 6).',
    sourceIds: ['wiki-802-11ac'],
    relatedEventIds: ['wifi-802-11g', 'fhd-1080p', 'wifi-802-11ax'],
  },
  {
    id: 'wifi-802-11ax',
    year: 2019,
    exactDate: '2019',
    track: 'networking',
    title: 'Wi-Fi 6 (802.11ax)',
    summary:
      'OFDMA and 9.6 Gbit/s — the “many devices” wireless that closed the Multi-Core era.',
    detailedDescription:
      '802.11ax (Wi-Fi 6, ratified 2019, products 2019–2020) delivered up to 9.6 Gbit/s using OFDMA (Orthogonal Frequency-Division Multiple Access), 1024-QAM, and 160 MHz channels, and it added target wake time for battery life. It was the “many devices” wireless of 2019–2020, the standard for the IoT-dense home and the 160 MHz “gaming” router, and the one that closed the Multi-Core era’s wireless story. It was superseded by Wi-Fi 6E (6 GHz, 2021) and Wi-Fi 7 (2022).',
    manufacturer: 'Industry (IEEE 802.11ax-2021)',
    specs: {
      standard: 'IEEE 802.11ax (Wi-Fi 6)',
      maxRate: 'up to 9.6 Gbit/s (1024-QAM, 160 MHz)',
      band: '2.4 / 5 GHz',
      features: 'OFDMA, TWT, 1024-QAM',
    },
    significance:
      '802.11ax (Wi-Fi 6) is the wireless that closes the Multi-Core era: it pushed home Wi-Fi toward 10 Gbit/s and made the “many devices” IoT-dense home the design target. It is the last Wi-Fi standard of the 2010s and the direct ancestor of Wi-Fi 6E (6 GHz) and Wi-Fi 7 that open the next era.',
    sourceIds: ['wiki-802-11ax'],
    relatedEventIds: ['wifi-802-11ac', 'ethernet-10g'],
  },
];