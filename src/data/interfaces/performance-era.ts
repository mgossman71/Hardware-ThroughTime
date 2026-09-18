import type { HistoricalEvent } from '../../types/historical-event';

/**
 * I/O and audio of the Performance Race era (1999–2000) — USB 2.0 and Audigy.
 */
export const INTERFACES_PERFORMANCE: HistoricalEvent[] = [
  {
    id: 'usb-2.0',
    year: 2000,
    track: 'interfaces',
    title: 'USB 2.0 (Hi-Speed)',
    summary:
      '480 Mbit/s over the same Type-A connector — the USB speed of the 2000–2013 desktop.',
    detailedDescription:
      'USB 2.0 (Hi-Speed, 2000) delivered 480 Mbit/s over the same Type-A / Type-B / Mini connectors as USB 1.1, backward-compatible with 12 Mbit/s full-speed and 1.5 Mbit/s low-speed devices. It was the USB speed in the 2000–2013 desktop, the interface for the first “fast” USB flash drives and external hard drives, and the port in the Pentium 4 / Athlon 64 / Core 2 desktops. It was superseded by USB 3.0 (SuperSpeed, 5 Gbit/s) in 2008.',
    manufacturer: 'USB Implementers Forum',
    specs: {
      version: 'USB 2.0 (Hi-Speed)',
      speed: '480 Mbit/s',
      connectors: 'Type-A / Type-B / Mini',
      compat: 'Backward-compatible with USB 1.1 / 1.0',
    },
    significance:
      'USB 2.0 is the USB speed most people picture for the 2000–2013 desktop: it made 480 Mbit/s a commodity and was the interface for the first “fast” USB flash drives and external disks. It is the ceiling of the Performance Race era’s I/O story and the direct ancestor of USB 3.0 (SuperSpeed) and the USB-C era.',
    sourceIds: ['wiki-usb-2.0'],
    relatedEventIds: ['usb-1.0', 'windows-98', 'sata'],
  },
  {
    id: 'audigy',
    year: 1999,
    track: 'interfaces',
    title: 'Creative Audigy',
    summary:
      'The 24-bit / 192 kHz sound card of the late-90s — the “gaming audio” card of the era.',
    detailedDescription:
      'The Audigy (Creative, 1999) was a 24-bit / 48 kHz (later 192 kHz) sound card with 6-channel (5.1) analog and digital (SPDIF) output, built around the CT4560 / CT4780 / EMU10K1 DSPs. It was the “gaming audio” card of the late-90s and early-2000s, the one in the Pentium 4 / Athlon XP “gaming rig,” and it was the first to ship with EAX (Environmental Audio Extensions) and the first to support 5.1 discrete surround. It was the direct successor to the Sound Blaster 16 and AWE32 and the card that defined “serious” PC audio of the era.',
    manufacturer: 'Creative Labs',
    specs: {
      chip: 'CT4560 / CT4780 / EMU10K1 DSP',
      sampleDepth: '24-bit',
      sampleRate: '48 kHz (up to 192 kHz on EMU10K1)',
      channels: '6 (5.1) analog + SPDIF digital',
      bus: 'PCI',
    },
    significance:
      'The Audigy is the “gaming audio” card of the late-90s/early-2000s desktop: it made 24-bit, 5.1, and EAX-augmented PC audio a commodity and was the card in the Pentium 4 / Athlon XP “gaming rig.” It is the ceiling of the Performance Race era’s audio story and the direct successor to the Sound Blaster 16 / AWE32 line.',
    sourceIds: ['wiki-audigy'],
    relatedEventIds: ['sound-blaster-16', 'awe32', 'usb-2.0', 'windows-98'],
  },
];