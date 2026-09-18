import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Wi-Fi of the Performance Race era (1999–2003) — the first two “b/g” generations.
 */
export const WIFI_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'wifi-802-11b',
    year: 1999,
    track: 'wifi',
    title: 'Wi-Fi 802.11b',
    summary:
      '11 Mbit/s in the 2.4 GHz ISM band — the first widely deployed “Wi-Fi,” the wireless of the late-90s home.',
    detailedDescription:
      '802.11b (ratified 1999, products 1999–2000) delivered up to 11 Mbit/s in the 2.4 GHz ISM band using CCK (Complementary Code Keying) and DSSS, and it is the “Wi-Fi” most people picture for the late-90s/early-2000s home. It was the wireless interface in the late-90s desktop and laptop, and the default for the first “wireless home” networks. It was superseded by 802.11g (2003) and then 802.11a/n.',
    manufacturer: 'Industry (IEEE 802.11b-1999)',
    specs: {
      standard: 'IEEE 802.11b-1999',
      maxRate: '11 Mbit/s',
      band: '2.4 GHz ISM',
      modulations: 'CCK, DSSS',
    },
    significance:
      '802.11b is the “Wi-Fi” most people picture for the late-90s home: it made wireless LAN a household reality and was the first generation of the Wi-Fi line. It is the wireless floor of the Performance Race era and the direct ancestor of 802.11g, 802.11n, and today’s Wi-Fi 6.',
    sourceIds: ['wiki-802-11b'],
    relatedEventIds: ['adsl', 'wifi-802-11g'],
  },
  {
    id: 'wifi-802-11g',
    year: 2003,
    track: 'wifi',
    title: 'Wi-Fi 802.11g',
    summary:
      '54 Mbit/s in 2.4 GHz with 802.11b backwards compatibility — the “Wi-Fi” of the 2003–2007 home.',
    detailedDescription:
      '802.11g (ratified 2003, products 2003–2004) delivered up to 54 Mbit/s in the 2.4 GHz ISM band using OFDM (Orthogonal Frequency-Division Multiplexing), and it was backward-compatible with 802.11b so existing 11 Mbit/s clients kept working. It was the “Wi-Fi” most people picture for the 2003–2007 home, the wireless in the Pentium 4 / Athlon 64 / Core 2 desktops and the first-generation Wi-Fi laptops. It was superseded by 802.11n (2009) and then 802.11ac (Wi-Fi 5).',
    manufacturer: 'Industry (IEEE 802.11g-2003)',
    specs: {
      standard: 'IEEE 802.11g-2003',
      maxRate: '54 Mbit/s',
      band: '2.4 GHz ISM',
      modulation: 'OFDM',
      compat: 'Backward-compatible with 802.11b',
    },
    significance:
      '802.11g is the “Wi-Fi” of the 2003–2007 home: it quintupled the 802.11b rate, kept 11 Mbit/s clients working, and was the wireless in the early-2000s desktop and laptop. It is the ceiling of the Performance Race era’s wireless story and the direct ancestor of 802.11n/ac (Wi-Fi 4/5).',
    sourceIds: ['wiki-802-11g'],
    relatedEventIds: ['wifi-802-11b', 'adsl'],
  },
];