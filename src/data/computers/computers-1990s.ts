import type { HistoricalEvent } from '../../types/historical-event';

/**
 * 1990s personal computers — the multimedia and Pentium era.
 */
export const COMPUTERS_1990S: HistoricalEvent[] = [
  {
    id: 'power-mac-6100',
    year: 1994,
    exactDate: '1994-09',
    track: 'computers',
    title: 'Apple Power Macintosh 6100',
    summary:
      'Apple’s PowerPC-based desktop — the first mainstream machine to pair a RISC CPU with a 60x02 PowerPC bridge, aimed squarely at the Windows NT market.',
    detailedDescription:
      'The Power Mac 6100 launched in September 1994 with a Motorola PowerPC 601 at 33 MHz (a 50 MHz version followed in 1995), 4 MB of standard RAM (expandable to 128 MB), a NuBus expansion architecture, and a 120 MB hard disk. It ran System 7.1 and, later, the transitional “Newton/PowerPC” software stack. The 6100 was Apple’s answer to the rising Pentium/Windows NT threat and proved that a non-x86 CPU could compete in the desktop market — at least briefly — before the PowerPC G3 and the rise of Windows 95/98 shifted the balance back.',
    manufacturer: 'Apple',
    specs: {
      cpu: 'Motorola PowerPC 601 @ 33 MHz (50 MHz variant)',
      ram: '4 MB standard, expandable to 128 MB (FPM/EDO)',
      bus: 'NuBus (32-bit)',
      storage: '120 MB–2 GB hard disk',
      video: '8 MB VRAM, up to 1024×768×16-bit',
      os: 'System 7.1 (later 7.5)',
      basePrice: '~US$2,699 (1994)',
    },
    significance:
      'The first mainstream desktop with a PowerPC CPU. It demonstrated that RISC could compete with x86 on performance and that the “601 bridge” could make legacy 68k software run — a bridge that ultimately kept Apple in the desktop market long enough to reinvent itself with the iMac and OS X.',
    sourceIds: ['wiki-power-mac-6100'],
    relatedEventIds: ['intel-pentium', 'windows-95'],
  },
  {
    id: 'compaq-presario-4600',
    year: 1995,
    track: 'computers',
    title: 'Compaq Presario 4600',
    summary:
      'A best-selling “Pentium-era” consumer desktop — the kind of beige, 66–133 MHz, Windows 95 box that most households bought in the mid-90s.',
    detailedDescription:
      'The Presario 4600 (1995) was Compaq’s mass-market desktop line, built around the Intel Pentium at 66–133 MHz, 8–32 MB of EDO RAM, a 540 MB–3.2 GB IDE hard disk, and a 4× CD-ROM drive. It shipped with Windows 95 and was one of the best-selling consumer PCs of the mid-1990s, embodying the “multimedia PC” of the era: a color monitor, a CD-ROM for software and games, and enough CPU to run the new 32-bit Windows comfortably. It is a representative “typical PC” for 1995–1996.',
    manufacturer: 'Compaq',
    specs: {
      cpu: 'Intel Pentium @ 66–133 MHz',
      ram: '8–32 MB EDO DRAM (72-pin SIMMs)',
      bus: 'ISA + PCI',
      storage: '540 MB–3.2 GB IDE hard disk, 4× CD-ROM',
      video: '2–4 MB VRAM, SVGA',
      os: 'Windows 95',
      basePrice: '~US$1,000 (1995)',
    },
    significance:
      'A defining “multimedia PC” of the mid-90s — the combination of a Pentium, a CD-ROM, EDO RAM, and Windows 95 that most consumers actually owned. It is a strong reference point for the “Typical PC” feature in this era.',
    sourceIds: ['wiki-compaq-presario-4600'],
    relatedEventIds: ['intel-pentium', 'windows-95', 'edo-simm'],
  },
];