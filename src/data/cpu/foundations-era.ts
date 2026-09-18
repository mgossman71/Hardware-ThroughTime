import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era computing logic (1947–1962) — the transistor, the
 * integrated circuit, and the MOSFET: the three devices that replaced tubes
 * and made every later CPU possible.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const CPUS_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'transistor',
    year: 1947,
    exactDate: '1947-12',
    track: 'cpus',
    title: 'The Transistor',
    summary:
      'The first working transistor — the switch that replaced the vacuum tube and made small, fast, reliable electronics possible.',
    detailedDescription:
      'In December 1947, at Bell Labs, John Bardeen, Walter Brattain, and William Shockley demonstrated the first working transistor, a solid-state device that could amplify and switch electrical signals without a hot filament. It was smaller, faster, cooler, and far more reliable than a vacuum tube, and it was the single most important hardware breakthrough of the century. Bardeen, Brattain, and Shockley received the 1956 Nobel Prize in Physics for the work.',
    manufacturer: 'Bell Telephone Laboratories',
    specs: {
      type: 'point-contact (first working transistor)',
      lab: 'Bell Labs',
      inventors: 'Bardeen, Brattain, Shockley',
      Nobel: '1956',
    },
    significance:
      'The transistor is the root of everything in this timeline. By replacing vacuum tubes it made computers smaller, cheaper, and more reliable, and it set the stage for the integrated circuit — without it there is no microprocessor and no personal computer.',
    sourceIds: ['wiki-transistor'],
    relatedEventIds: ['eniac', 'integrated-circuit'],
  },
  {
    id: 'integrated-circuit',
    year: 1958,
    exactDate: '1958-09-12',
    track: 'cpus',
    title: 'The Integrated Circuit',
    summary:
      'The chip: putting an entire circuit on a single semiconductor die, first by Jack Kilby and then by Robert Noyce.',
    detailedDescription:
      'The integrated circuit (IC) came into being when Jack Kilby at Texas Instruments demonstrated the first working chip in September 1958, and Robert Noyce at Fairchild independently produced the silicon "planar process" version in 1959. Instead of wiring discrete components together, the IC etched transistors, resistors, and connections onto one piece of semiconductor, making circuits smaller, faster, and mass-producible. This is the physical basis of every CPU, memory chip, and GPU since.',
    manufacturer: 'Texas Instruments (Kilby) / Fairchild (Noyce)',
    specs: {
      firstDemo: '1958-09-12 (Kilby, TI)',
      siliconPlanar: '1959 (Noyce, Fairchild)',
      keyIdea: 'whole circuit on one semiconductor die',
    },
    significance:
      'The integrated circuit is the reason computing shrank from a room to a pocket. It made it possible to put a whole processor on a single die a decade later (the 1971 4004), and it is the foundation of the entire semiconductor industry that this site tracks.',
    sourceIds: ['wiki-integrated-circuit'],
    relatedEventIds: ['transistor', 'mosfet'],
  },
  {
    id: 'mosfet',
    year: 1962,
    track: 'cpus',
    title: 'The MOSFET',
    summary:
      'The insulated-gate (MOS) transistor — the basic switch in every modern CPU and the enabler of CMOS logic.',
    detailedDescription:
      'The metal-oxide-semiconductor field-effect transistor (MOSFET) added an insulated gate to the transistor, so a voltage on the gate could control current with almost no input draw. Developed at Bell Labs in the early 1960s, it became the standard switch for digital logic because many could be packed tightly and switched fast with low static power. Paired into complementary pairs (CMOS), it became the dominant technology for essentially every microprocessor and memory chip since the 1970s.',
    manufacturer: 'Bell Telephone Laboratories',
    specs: {
      type: 'insulated-gate (MOS) field-effect transistor',
      lab: 'Bell Labs',
      role: 'basic switch of modern digital logic and CMOS',
    },
    significance:
      'The MOSFET is the transistor that made modern silicon possible. Its low static power and dense packing are what allow billions of switches on a single die, and CMOS (built from MOSFETs) is the logic family behind every CPU in this timeline.',
    sourceIds: ['wiki-mosfet'],
    relatedEventIds: ['integrated-circuit', 'transistor'],
  },
];
