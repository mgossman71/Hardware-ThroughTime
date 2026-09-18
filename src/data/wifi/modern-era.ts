import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Wi-Fi of the Modern era (2020–2026) — 6E opens the 6 GHz band, and Wi-Fi 7
 * pushes to 320 MHz channels and 4096-QAM.
 */
export const WIFI_MODERN: HistoricalEvent[] = [
  {
    id: 'wifi-6e',
    year: 2021,
    track: 'wifi',
    title: 'Wi-Fi 6E',
    summary:
      'Wi-Fi 6 in a new 6 GHz band — 160 MHz channels with no legacy interference.',
    detailedDescription:
      'Wi-Fi 6E (802.11ax, 2021) extends the Wi-Fi 6 standard into the 6 GHz band (FCC-authorized 2020), adding twelve 80 MHz channels or two 160 MHz channels with no 2.4/5 GHz legacy interference. It is the era\'s "clean band" upgrade: the same OFDMA and MU-MIMO of Wi-Fi 6, but on a spectrum where a 160 MHz channel can run unobstructed, which is what makes sustained multi-gigabit wireless realistic in the home.',
    manufacturer: 'Industry (IEEE 802.11ax; Wi-Fi Alliance)',
    specs: {
      standard: 'Wi-Fi 6E (802.11ax, 6 GHz)',
      band: '6 GHz (12× 80 MHz or 2× 160 MHz)',
      maxRate: '~9.6 Gbit/s (160 MHz)',
      features: 'OFDMA, MU-MIMO, BSS coloring',
      era: '2021–2023 wireless standard',
    },
    significance:
      'Wi-Fi 6E is the era\'s spectrum story: by opening the 6 GHz band it made a genuinely clean, wide-channel wireless the default for new routers and NICs, and it set the stage for the even wider 320 MHz channels of Wi-Fi 7.',
    sourceIds: ['wiki-wifi-6e'],
    relatedEventIds: ['wifi-802-11ax', 'wifi-7'],
  },
  {
    id: 'wifi-7',
    year: 2023,
    track: 'wifi',
    title: 'Wi-Fi 7',
    summary:
      '320 MHz channels, 4096-QAM, and multi-link — the fastest consumer wireless standard to date.',
    detailedDescription:
      'Wi-Fi 7 (802.11be, ratified 2024, products 2023–2024) is the era\'s fastest wireless: 320 MHz channels in the 6 GHz band, 4096-QAM modulation, 32 spatial streams, and a peak of ~46 Gbit/s. Its headline feature is Multi-Link Operation (MLO), which lets a device transmit and receive over 2.4, 5, and 6 GHz simultaneously, cutting latency and improving reliability. First NICs (Intel BE200, Qualcomm FastConnect) arrived in 2023.',
    manufacturer: 'Industry (IEEE 802.11be; Wi-Fi Alliance)',
    specs: {
      standard: 'Wi-Fi 7 (802.11be)',
      channel: '320 MHz (6 GHz)',
      modulation: '4096-QAM',
      spatialStreams: 'up to 32',
      peak: '~46 Gbit/s',
      feature: 'Multi-Link Operation (MLO)',
      era: '2023–2025 wireless standard',
    },
    significance:
      'Wi-Fi 7 is the wireless ceiling of the Modern era: it is the first standard where consumer wireless can rival a wired 10 GbE link, and MLO is the architectural change that makes low-latency, always-on wireless viable for gaming and AR/VR.',
    sourceIds: ['wiki-wifi-7'],
    relatedEventIds: ['wifi-6e', 'wifi-802-11ax'],
  },
];