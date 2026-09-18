import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era graphics (1962–1963) — the first interactive computer
 * graphics: a game and the program that invented the graphical interface.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const GRAPHICS_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'spacewar',
    year: 1962,
    track: 'graphics',
    title: 'Spacewar!',
    summary:
      'The first interactive computer game — real-time 2D vector graphics drawn directly on a PDP-1 oscilloscope.',
    detailedDescription:
      'Spacewar!, written by Steve Russell and colleagues at MIT in 1962 for the DEC PDP-1, is widely regarded as the first interactive computer game. It drew two spaceships in real time on a vector/oscilloscope display, with the player controlling one and a simple AI the other, against a central star’s gravity. It showed that a computer could drive a responsive, visual, interactive experience — a first step toward the graphics track.',
    manufacturer: 'MIT (Steve Russell and others)',
    specs: {
      year: 1962,
      platform: 'DEC PDP-1',
      display: 'vector / oscilloscope CRT',
      type: 'interactive real-time 2D graphics / game',
    },
    significance:
      'Spacewar! is the first demonstration that a computer could render interactive graphics in real time. It established the pattern of direct, responsive visual interaction that the graphics and display tracks later industrialized.',
    sourceIds: ['wiki-spacewar'],
    relatedEventIds: ['pdp-8', 'sketchpad'],
  },
  {
    id: 'sketchpad',
    year: 1963,
    track: 'graphics',
    title: 'Sketchpad',
    summary:
      'Ivan Sutherland’s interactive drawing program — the ancestor of the graphical user interface, CAD, and direct manipulation.',
    detailedDescription:
      'Sketchpad, built by Ivan Sutherland at MIT in 1963 as his PhD project, was the first interactive computer-graphics program. It let a user draw and edit shapes with a light pen and a toggle switch, with constraint-based geometry, zooming, and real-time redrawing on a vector display. It is routinely cited as the origin of the graphical user interface, direct manipulation, and computer-aided design.',
    manufacturer: 'MIT (Ivan Sutherland)',
    specs: {
      year: 1963,
      author: 'Ivan Sutherland (MIT)',
      type: 'interactive vector graphics / GUI precursor',
      input: 'light pen + toggle switch',
    },
    significance:
      'Sketchpad is the direct ancestor of the graphical interface. Its ideas — drawing objects, selecting and moving them, real-time redraw — are the foundation of the GUI, CAD, and the whole "point at a thing and change it" model that later displays and interfaces would be built around.',
    sourceIds: ['wiki-sketchpad'],
    relatedEventIds: ['spacewar', 'mouse'],
  },
];
