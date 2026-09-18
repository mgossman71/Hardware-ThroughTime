import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Displays of the Performance Race era (1999–2002) — digital video and the
 * widescreen-era standard LCD resolution.
 */
export const DISPLAYS_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'dvi',
    year: 1999,
    track: 'displays',
    title: 'DVI (Digital Visual Interface)',
    summary:
      'The digital video connector that ended the VGA era — a consortium standard shipping with the GeForce 3.',
    detailedDescription:
      'DVI (Digital Visual Interface, consortium 1999, shipping with the GeForce 3 in 2001) carried a digital TMDS video signal (up to ~7.9 Gbit/s) and an optional analog VGA signal on a 24- or 29-pin connector, so a single port could drive a digital flat panel or an analog CRT. It was the video output in the 2001–2008 GPU cards (GeForce 3 → GeForce 8800 → Radeon HD 2900) and the input in the first “digital” LCD monitors. It replaced the VGA/DB-15 connector as the desktop’s video standard and was superseded by HDMI/DisplayPort.',
    manufacturer: 'DVI consortium (NVIDIA, Compaq, HP, IBM, Intel, Macintosh)',
    specs: {
      type: 'Digital (TMDS) + optional analog',
      maxDigitalRate: '~7.9 Gbit/s (single-link)',
      pins: '24 / 29 (DVI-I)',
      role: 'GPU → flat-panel video',
    },
    significance:
      'DVI is the connector that closed the VGA era and opened the “digital flat-panel” age — it carried the GPU’s digital output to the first LCD monitors and was the video standard of the 2001–2008 desktop. It is the display-floor of the Performance Race era and the direct ancestor of the HDMI/DisplayPort era.',
    sourceIds: ['wiki-dvi'],
    relatedEventIds: ['vga', 'geforce-3', 'sxga-lcd'],
  },
  {
    id: 'sxga-lcd',
    year: 2002,
    track: 'displays',
    title: '1280×1024 LCD (SXGA)',
    summary:
      'The 1.2-megapixel standard — the resolution most people picture for the 2002–2007 desktop.',
    detailedDescription:
      '1280×1024 (SXGA), the “1.2 megapixel” resolution, became the standard desktop LCD resolution in 2002–2003 as 15- and 17-inch TFT-LCD panels matured and replaced the CRT. It was the native resolution in the 2002–2007 desktop monitor (the “15-inch / 17-inch LCD” era), and it was the target the GeForce 3 / Radeon 9700 / GeForce FX 5800 cards were built to drive at full frame rate. It was superseded by 1600×1200 and then 1920×1080 (720p) and 1920×1200.',
    manufacturer: 'Industry (VESA DMT-1)',
    specs: {
      resolution: '1280×1024 (4:3)',
      megapixels: '1.31',
      standard: 'VESA DMT-1 (SXGA)',
      display: 'TFT-LCD (15” / 17”)',
      era: '2002–2007 desktop standard',
    },
    significance:
      '1280×1024 is the resolution most people picture for the 2002–2007 desktop: it was the standard LCD panel of the early-2000s and the target the GeForce 3 / Radeon 9700 cards were built to drive. It closes the Performance Race era’s display story and sets the floor for the later 720p/1080p widescreen era.',
    sourceIds: ['wiki-sxga'],
    relatedEventIds: ['svga', 'dvi', 'geforce-3', 'radeon-9700'],
  },
];