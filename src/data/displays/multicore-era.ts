import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Displays of the Multi-Core era (2010–2014) — 1080p becomes the standard and
 * 4K arrives.
 */
export const DISPLAYS_MULTICORE: HistoricalEvent[] = [
  {
    id: 'fhd-1080p',
    year: 2010,
    exactDate: '2010',
    track: 'displays',
    title: '1920×1080 (Full HD) Standard',
    summary:
      'The 1080p widescreen — the resolution most people picture for the 2010–2019 desktop and TV.',
    detailedDescription:
      '1920×1080 (Full HD, 16:9) became the standard desktop and TV resolution in 2010 as 22-inch and larger LCD panels matured and Blu-ray (1080p) pushed the format. It was the native resolution in the 2010–2019 desktop monitor and the “1080p gaming” target the GTX 480 → GTX 1080 GPU line was built to drive at high settings and 60+ fps. It was the standard for the MacBook Pro Retina (2560×1600, a higher-density sibling) and the 4K TV that followed. It was superseded by 1440p (2560×1440) and 4K (3840×2160).',
    manufacturer: 'Industry (VESA CDM-6 / CEA-861)',
    specs: {
      resolution: '1920×1080 (16:9)',
      megapixels: '2.07',
      standard: 'VESA CDM-6 / CEA-861',
      display: 'IPS / TN LCD (22"+)',
      era: '2010–2019 desktop + TV standard',
    },
    significance:
      '1080p is the resolution most people picture for the 2010–2019 desktop and TV: it was the “1080p gaming” target the whole GPU line of the Multi-Core era was built to drive, and the standard for the 4K TV that followed. It closes the Performance-Race-era SXGA/1280×1024 story and sets the floor for the 1440p/4K era.',
    sourceIds: ['wiki-fhd'],
    relatedEventIds: ['sxga-lcd', 'geforce-gtx-480', 'uhq-4k'],
  },
  {
    id: 'uhq-4k',
    year: 2014,
    exactDate: '2014',
    track: 'displays',
    title: '4K UHD (3840×2160)',
    summary:
      'The 8.3-megapixel standard — the resolution that ended the 1080p era for TVs and pro displays.',
    detailedDescription:
      '3840×2160 (4K UHD, 16:9) became the standard for TVs and pro displays in 2014 as 49-inch and larger panels fell below ~US$2,000 and the UHD (CEA-861) standard shipped. It was the “4K TV” resolution most people picture for the 2014–2019 living room, and the “4K gaming” target the GTX 1080 / RTX 2080 GPU line was built to drive. It was the display standard for the MacBook Pro Retina’s higher-density siblings and the pro 5K/6K monitors that followed. It was superseded by 5K/6K pro displays and 8K (7680×4320) consumer TVs.',
    manufacturer: 'Industry (CEA-861 / ITU-R BT.2100)',
    specs: {
      resolution: '3840×2160 (16:9)',
      megapixels: '8.29',
      standard: 'CEA-861 (UHD) / ITU-R BT.2100',
      display: 'IPS / VA / OLED (49"+ TV, 27"+ pro)',
      era: '2014–2019 TV + pro standard',
    },
    significance:
      '4K UHD is the display event that closes the Multi-Core era: it ended the 1080p era for TVs and pro displays, set the “4K gaming” target the GTX 1080 / RTX 2080 were built to drive, and was the standard for the 2014–2019 living room. It is the ceiling of the era’s display story and the direct ancestor of the 5K/6K pro and 8K consumer eras.',
    sourceIds: ['wiki-uhd-4k'],
    relatedEventIds: ['fhd-1080p', 'geforce-gtx-1080', 'nvidia-rtx-2080'],
  },
];