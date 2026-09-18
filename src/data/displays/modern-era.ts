import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Displays of the Modern era (2020–2026) — Mini-LED and OLED move from TV to
 * laptop and monitor, and the panel race shifts from size to contrast.
 */
export const DISPLAYS_MODERN: HistoricalEvent[] = [
  {
    id: 'mini-led-macbook-pro',
    year: 2021,
    track: 'displays',
    title: 'Mini-LED (MacBook Pro 14/16)',
    summary:
      'Thousands of local dimming zones — the LCD that finally matched OLED contrast.',
    detailedDescription:
      'The 2021 MacBook Pro (14" and 16") brought the "Liquid Retina XDR" Mini-LED panel to a mainstream laptop: a thousands-of-zones local-dimming LED backlight that reached 1000 nits sustained (1600 peak) and ~11.8 million pixels. It is the era\'s answer to OLED for bright, large, burn-in-free displays, and it made "XDR" a credible laptop feature for the first time.',
    manufacturer: 'Apple (LG Display / BOE panels)',
    specs: {
      technology: 'Mini-LED backlight, local dimming',
      brightness: '1000 nits sustained / 1600 nits peak',
      zones: 'thousands of dimming zones',
      pixels: '~11.8M (16")',
      debut: 'MacBook Pro 14"/16" (2021)',
    },
    significance:
      'Mini-LED in the MacBook Pro is the era\'s display story for "bright and local-dimming without burn-in": it closed most of the OLED contrast gap for a mainstream laptop and set the 1000-nit XDR bar that the 2022+ OLED and Mini-LED monitors now chase.',
    sourceIds: ['wiki-mini-led'],
    relatedEventIds: ['oled-laptop-wave', '4k-oled-monitor'],
  },
  {
    id: 'oled-laptop-wave',
    year: 2021,
    track: 'displays',
    title: 'OLED laptop wave',
    summary:
      'Self-emissive OLED goes into the premium laptop — true blacks, wide gamut, no backlight.',
    detailedDescription:
      'Starting in 2021, OLED panels moved from TV and phone into the premium laptop (Dell XPS, ASUS Zenbook, LG Gram, HP Spectre). Unlike the LCD-backlit panels that had defined the laptop for two decades, OLED is self-emissive: every pixel is its own light, so it delivers true blacks, near-infinite contrast, wider color gamut, and faster response. It is the era\'s "premium display" differentiator and the direct competitor to the Mini-LED approach.',
    manufacturer: 'Industry (Samsung Display / LG Display)',
    specs: {
      technology: 'OLED (self-emissive, no backlight)',
      traits: 'True blacks, infinite contrast, wide gamut',
      adoption: 'Premium laptops 2021–2024',
      examples: 'Dell XPS, ASUS Zenbook, LG Gram, HP Spectre',
      rival: 'Mini-LED (MacBook Pro)',
    },
    significance:
      'The OLED laptop wave is the era\'s display contrast revolution: it ended the LCD-backlit monopoly on the premium laptop and forced the "XDR" (Mini-LED) response, making contrast and color the headline laptop spec for the first time.',
    sourceIds: ['wiki-oled-display'],
    relatedEventIds: ['mini-led-macbook-pro', '4k-oled-monitor'],
  },
  {
    id: '4k-oled-monitor',
    year: 2024,
    track: 'displays',
    title: '4K OLED monitors (mainstream)',
    summary:
      'OLED panels that were TV-only in 2020 are now the default 27" 4K monitor of the era.',
    detailedDescription:
      'By 2024, 27-inch 4K OLED monitors (LG 27GS95QE, ASUS ProArt, Dell) were a mainstream product, bringing the self-emissive, infinite-contrast, wide-gamut OLED panel that had defined premium TVs into the desktop. The 2024–2025 wave added higher refresh (240 Hz) and larger sizes, making OLED the new premium desktop standard and the direct successor to the 1440p IPS panel that had defined the 2010s.',
    manufacturer: 'Industry (LG Display / BOE)',
    specs: {
      technology: 'OLED (self-emissive)',
      size: '27" 3840×2160',
      refresh: 'up to 240 Hz (2024–2025)',
      traits: 'Infinite contrast, wide gamut, fast response',
      era: '2024+ premium desktop standard',
    },
    significance:
      'The 4K OLED monitor is the era\'s display endpoint: it is the point where the panel technology that started in TVs (2020) and laptops (2021) became the default desktop panel, closing the Modern display story on the side of contrast and color rather than raw size.',
    sourceIds: ['wiki-oled-display'],
    relatedEventIds: ['oled-laptop-wave', 'mini-led-macbook-pro', 'uhq-4k'],
  },
];