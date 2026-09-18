import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era displays (1968–1969) — the first real graphics display
 * terminals that put a screen in front of the user.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const DISPLAYS_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'tektronix-4014',
    year: 1968,
    track: 'displays',
    title: 'Tektronix 4014',
    summary:
      'The first widely used high-speed graphics display terminal — a storage-tube CRT that drew 1024×1024 vectors fast.',
    detailedDescription:
      'The Tektronix 4014, introduced in 1968, was the first widely used high-speed graphics display terminal. It used a storage-tube CRT, which held a picture without needing constant refreshing, and could redraw fast, bright 1024×1024 vector images. It was the standard high-speed graphics display for engineering and graphics work throughout the late 1960s and into the 1970s, and it made interactive graphics a practical, everyday thing.',
    manufacturer: 'Tektronix',
    specs: {
      year: 1968,
      type: 'storage-tube graphics terminal',
      resolution: '1024×1024 (vector)',
      trait: 'non-raster storage tube (no refresh buffer)',
    },
    significance:
      'The 4014 is the display that made interactive computer graphics usable in the lab and the office. It established the high-speed vector display as a class of its own and is the ancestor of the dedicated graphics displays that the displays track tracks onward.',
    sourceIds: ['wiki-tektronix-4014'],
    relatedEventIds: ['ibm-2250', 'sketchpad'],
  },
  {
    id: 'ibm-2250',
    year: 1969,
    track: 'displays',
    title: 'IBM 2250 Display Console',
    summary:
      'The first widely used direct-manipulation display terminal — a 1024×1024 green-phosphor screen with a cursor.',
    detailedDescription:
      'The IBM 2250, introduced in 1969, was the first widely used direct-manipulation display terminal. It was a 1024×1024 green-phosphor CRT with a cursor and a set of buttons, letting a user position and edit on-screen content directly rather than only through printed output. It was paired with System/360 machines and its cursor-and-screen model was a direct forerunner of the graphical interface.',
    manufacturer: 'IBM',
    specs: {
      year: 1969,
      type: 'direct-manipulation display terminal',
      resolution: '1024×1024 (green phosphor CRT)',
      input: 'cursor + function buttons',
    },
    significance:
      'The 2250 is the bridge from batch printout to the on-screen, cursor-driven interaction that defines the desktop. Its direct-manipulation screen model is a direct ancestor of the GUI and of the displays and interfaces this site tracks after it.',
    sourceIds: ['wiki-ibm-2250'],
    relatedEventIds: ['tektronix-4014', 'ibm-system-360'],
  },
];
