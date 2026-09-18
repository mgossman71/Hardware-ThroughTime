import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Storage media and interfaces of the Multimedia PC era (1985–1997).
 */
export const STORAGE_MULTIMEDIA: HistoricalEvent[] = [
  {
    id: 'cd-rom',
    year: 1985,
    track: 'storage',
    title: 'CD-ROM (Yellow Book)',
    summary:
      'The 12 cm optical disc that put 700 MB of data — and the “multimedia” software era — into a PC.',
    detailedDescription:
      'CD-ROM (formalized by the “Yellow Book” specification in 1985) adapted the audio CD format for data: a 120 mm disc holding ~700 MB (74 minutes of audio) read at 1× (150 KB/s), later 2×, 4× and up. It was the first mass-market removable storage with more capacity than any floppy or early hard disk, and it became the distribution medium for encyclopedias, software, and games — the defining storage of the “multimedia PC.”',
    manufacturer: 'Philips / Sony (Red Book) → Yellow Book consortium',
    specs: {
      capacity: '~700 MB (74 min)',
      discSize: '120 mm',
      readSpeed: '1× = 150 KB/s',
      format: 'Yellow Book',
    },
    significance:
      'The capacity jump from 1.44 MB (floppy) to 700 MB (CD) is what made “multimedia” real — full-motion video, large software libraries, and data-rich games. CD-ROM was the storage technology that defined the multimedia PC of the late 80s and 90s.',
    sourceIds: ['wiki-cd-rom'],
    relatedEventIds: ['floppy-3.5-1.44', 'compaq-presario-4600'],
  },
  {
    id: 'ata-ide',
    year: 1989,
    track: 'storage',
    title: 'ATA / IDE',
    summary:
      'The integrated hard-disk interface that replaced ST-506/M and became the dominant PC storage bus for a decade.',
    detailedDescription:
      'IDE (Integrated Drive Electronics, standardized as ATA in 1989) moved the drive controller from a separate controller card onto the drive itself, using a simple ribbon cable to the motherboard. It replaced the ST-506 and M (Memorex) interfaces and, because the logic lived on the drive, made hard disks far cheaper and easier to install. It was the standard for PC hard disks and CD-ROMs from the late 1980s until SATA took over in the mid-2000s.',
    manufacturer: 'Comtrol / Seagate / Western Digital (ATA standard)',
    specs: {
      interface: 'ATA / IDE (PATA)',
      replaced: 'ST-506, M (Memorex)',
      cabling: '40-pin ribbon',
      standard: 'ANSI X3.255 (1989)',
    },
    significance:
      'IDE made hard disks and CD-ROMs plug-and-cheap, collapsing the cost of PC storage. It was the interface behind every “multimedia PC” drive bay of the 1990s and stayed the PC storage standard for over a decade.',
    sourceIds: ['wiki-ata'],
    relatedEventIds: ['cd-rom'],
  },
  {
    id: 'floppy-3.5-1.44',
    year: 1991,
    track: 'storage',
    title: '3.5″ 1.44 MB Floppy',
    summary:
      'The compact, shutter-protected 3.5-inch diskette that replaced the bulky 5.25-inch as the standard removable floppy.',
    detailedDescription:
      'By 1991 the 3.5-inch 1.44 MB diskette had largely displaced the 5.25-inch 360 KB/1.2 MB format as the standard PC removable floppy. Its rigid case and metal shutter made it far more reliable, and it became the default boot and distribution medium for PCs and the “save disk” of the 90s. It remained the standard floppy (alongside 720 KB for Macs) until USB flash drives made it obsolete in the mid-2000s.',
    manufacturer: 'Sony (3.5″ form factor) / industry',
    specs: {
      capacity: '1.44 MB (3.5″)',
      formFactor: '3.5-inch, rigid, shutter',
      replaced: '5.25″ 360 KB / 1.2 MB',
    },
    significance:
      'The 3.5-inch 1.44 MB diskette was the ubiquitous removable storage of the 90s PC — the “A:” drive. Its reliability and compactness made it the standard for shipping software, booting, and swapping data before CD-ROM and USB took over.',
    sourceIds: ['wiki-floppy-3.5'],
    relatedEventIds: ['cd-rom', 'usb-1.0'],
  },
];