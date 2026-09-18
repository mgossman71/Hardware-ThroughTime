import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era interfaces (1964–1968) — the computer mouse and the "Mother
 * of All Demos", which together invented the way we point and interact.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const INTERFACES_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'mouse',
    year: 1964,
    track: 'interfaces',
    title: 'The Computer Mouse',
    summary:
      'Douglas Engelbart’s pointing device — a wooden box with two wheels that became the most universal computer input ever.',
    detailedDescription:
      'The first computer mouse was invented by Douglas Engelbart and his team at SRI in the mid-1960s (about 1964, patented in 1967). It was a wooden box containing two perpendicular wheels and a ball that tracked movement in two axes, letting a user move a cursor on screen. It was first shown in the 1968 NLS demo and has been the standard pointing input on desktops ever since.',
    manufacturer: 'SRI (Douglas Engelbart)',
    specs: {
      year: 1964,
      inventor: 'Douglas Engelbart (SRI)',
      type: '2-axis pointing device',
      form: 'wooden box, two orthogonal wheels',
      patent: '1967',
    },
    significance:
      'The mouse is the defining human-computer input device of the personal era. It turned the abstract "cursor" into something you could physically point at and drag, and it made graphical, direct-manipulation interfaces practical for real people.',
    sourceIds: ['wiki-mouse'],
    relatedEventIds: ['nls-demo', 'sketchpad'],
  },
  {
    id: 'nls-demo',
    year: 1968,
    exactDate: '1968-12-09',
    track: 'interfaces',
    title: 'The "Mother of All Demos" (NLS)',
    summary:
      'Engelbart’s 1968 oN-Line System demo — the mouse, hypertext, windows, and video conferencing in a single show.',
    detailedDescription:
      'On 9 December 1968, Douglas Engelbart and his SRI/Augment team presented the oN-Line System (NLS) in what became known as "The Mother of All Demos." In one continuous demonstration they showed the computer mouse, hypertext links, split-screen windows, text editing, and live video conferencing between two sites. It was a blueprint for the graphical, networked, collaborative computing that the next two decades would build.',
    manufacturer: 'SRI / Augment (Douglas Engelbart)',
    specs: {
      year: 1968,
      demo: '9 December 1968',
      system: 'NLS / oN-Line System',
      introduced: 'mouse, hypertext, windows, video conferencing',
    },
    significance:
      'The NLS demo is the single best preview of the modern computing interface: pointing, links, multiple windows, and remote collaboration. It is the conceptual root of the GUI, hypertext, and video conferencing, and it frames the interfaces track this site follows forward.',
    sourceIds: ['wiki-nls-demo'],
    relatedEventIds: ['mouse', 'sketchpad'],
  },
];
