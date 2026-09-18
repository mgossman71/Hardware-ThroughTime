import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Wired networking of the Performance Race era (1998–2002) — 100 Mbps to 1 Gbps.
 */
export const NETWORK_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'ethernet-100base-tx',
    year: 1998,
    track: 'networking',
    title: 'Fast Ethernet (100BASE-TX)',
    summary:
      '100 Mbps over two pairs of Cat 5 — the LAN speed of the 1998–2003 office and home.',
    detailedDescription:
      'Fast Ethernet (100BASE-TX, standardized 1995, mainstream 1998) delivered 100 Mbit/s full-duplex over two pairs of Category 5 UTP, using the same RJ-45 connectors and 802.3 frame structure as 10BASE-T. It was the LAN speed in the late-90s and early-2000s office and home, the interface in the “LAN party” gaming rigs, and the default for the Pentium II/III and Athlon desktops. It was superseded by Gigabit Ethernet around 2002–2003.',
    manufacturer: 'Industry (IEEE 802.3u)',
    specs: {
      standard: 'IEEE 802.3u',
      speed: '100 Mbit/s (full-duplex 200 Mbit/s)',
      medium: 'Category 5 UTP, 2 pairs',
      connector: 'RJ-45',
    },
    significance:
      'Fast Ethernet is the LAN speed most people picture for the 1998–2003 desktop: it made 100 Mbps a commodity and was the baseline for the “LAN party” gaming rigs. It is the step between the dial-up/10 Mbps world of the Multimedia era and the Gigabit era, and it defines the Performance Race era’s networking floor.',
    sourceIds: ['wiki-100base-tx'],
    relatedEventIds: ['ethernet-10base-t', 'ethernet-gigabit', 'adsl'],
  },
  {
    id: 'adsl',
    year: 1999,
    track: 'networking',
    title: 'ADSL (Asymmetric DSL)',
    summary:
      'The first widespread consumer broadband — up to 8 Mbit/s downstream over existing phone lines.',
    detailedDescription:
      'ADSL (Asymmetric Digital Subscriber Line, mainstream 1998–1999 in the US and Europe) delivered up to ~8 Mbit/s downstream and ~1 Mbit/s upstream over existing telephone-pair wiring, replacing the 56K dial-up modem for home internet. It required a DSL modem at the customer premises and a DSLAM at the telephone exchange, and it was the first technology to make “broadband” a household term. It was the default home internet of 1999–2006 until cable and (later) fiber displaced it.',
    manufacturer: 'Industry (ITU-T G.992.1 / G.dmt)',
    specs: {
      standard: 'ITU-T G.992.1 (G.dmt)',
      downstream: 'up to ~8 Mbit/s',
      upstream: 'up to ~1 Mbit/s',
      medium: 'Existing telephone-pair (POTS line)',
      cpe: 'ADSL modem + DSLAM at exchange',
    },
    significance:
      'ADSL is the “broadband” that closed the dial-up era and opened the broadband age — it made home internet orders of magnitude faster and was the default connection of the 1999–2006 desktop. It is the first of the consumer-wireless-and-wired-broadband wave that the Performance Race era (and the later Wi-Fi and Wi-Fi 6 eras) extend.',
    sourceIds: ['wiki-adsl'],
    relatedEventIds: ['ethernet-10base-t', 'wifi-802-11b', 'ethernet-100base-tx'],
  },
  {
    id: 'ethernet-gigabit',
    year: 2002,
    track: 'networking',
    title: 'Gigabit Ethernet (1000BASE-T)',
    summary:
      '1 Gbps over Cat 5 — the LAN speed of the 2002–2008 home and office, and the end of the 100 Mbps era.',
    detailedDescription:
      'Gigabit Ethernet (1000BASE-T, standardized 2002, mainstream 2003–2004) delivered 1 Gbit/s full-duplex over four pairs of Category 5 UTP, using the same RJ-45 connectors and 802.3 frame structure as Fast Ethernet. It was the LAN speed in the 2002–2008 home and office, the interface in the “gaming rig” and NAS rigs of that window, and the default for the Pentium 4 / Athlon 64 / Core 2 desktops. It was superseded by 10 Gigabit Ethernet in the data center and by Wi-Fi 5/6 in the home.',
    manufacturer: 'Industry (IEEE 802.3ab)',
    specs: {
      standard: 'IEEE 802.3ab',
      speed: '1 Gbit/s (full-duplex 2 Gbit/s)',
      medium: 'Category 5 UTP, 4 pairs',
      connector: 'RJ-45',
    },
    significance:
      'Gigabit Ethernet is the LAN speed most people picture for the 2002–2008 desktop: it made 1 Gbps a commodity and was the ceiling of the “gaming rig” LAN era. It closes the Performance Race era’s networking story and sets the floor for the later Wi-Fi 5/6 and 10G/25G eras.',
    sourceIds: ['wiki-gigabit-ethernet'],
    relatedEventIds: ['ethernet-10base-t', 'ethernet-100base-tx', 'intel-core-2-duo'],
  },
];