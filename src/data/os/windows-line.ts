import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Operating systems of the Multimedia PC era (1992–1995).
 */
export const OS_WINDOWS: HistoricalEvent[] = [
  {
    id: 'windows-3.1',
    year: 1992,
    exactDate: '1992-04',
    track: 'os',
    title: 'Windows 3.1',
    summary:
      'The first Windows with 256-color VGA and built-in multimedia (Sound Blaster) support — the OS that made the GUI stick.',
    detailedDescription:
      'Windows 3.1 (April 1992) was a milestone: it required a 286 and 1 MB of RAM, supported 256-color VGA, and added built-in multimedia extensions (MCI) with Sound Blaster audio support, TrueType fonts, and the Windows for Workgroups option. It was the most successful Windows release to that point and the OS most 286/386 users ran in the early 90s, establishing the graphical desktop as the default way to use a PC.',
    manufacturer: 'Microsoft',
    specs: {
      minCpu: 'Intel 286',
      minRam: '1 MB (2 MB recommended)',
      colors: '256 (VGA)',
      audio: 'MCI / Sound Blaster',
      fonts: 'TrueType',
    },
    significance:
      'Windows 3.1 is what made the graphical, multimedia PC mainstream for the 286/386 generation. Its TrueType fonts, 256-color VGA, and built-in audio support defined the “multimedia PC” experience and set the stage for Windows 95.',
    sourceIds: ['wiki-windows-3.1'],
    relatedEventIds: ['windows-95', 'vga'],
  },
  {
    id: 'windows-95',
    year: 1995,
    exactDate: '1995-08-24',
    track: 'os',
    title: 'Windows 95',
    summary:
      'The 32-bit, plug-and-play consumer OS — the defining software of the multimedia PC and the moment Windows won the desktop.',
    detailedDescription:
      'Windows 95 (August 1995) was a ground-up 32-bit operating system (built on the MS-DOS/Windows 95 kernel) that required a 386 and 8 MB of RAM (16 MB recommended). It introduced plug and play, long file names (VFAT), 32-bit file access, a unified Start menu and taskbar, and first-class USB and multimedia support. It was the best-selling OS of its era and is the software most associated with the “multimedia PC” — the OS the Presario, and a generation of beige desktops, shipped with.',
    manufacturer: 'Microsoft',
    specs: {
      minCpu: 'Intel 386DX',
      minRam: '8 MB (16 MB recommended)',
      architecture: '32-bit (32-bit file access, Win32)',
      features: 'Plug and Play, USB, long file names (VFAT)',
      audio: 'Wave / MIDI, multimedia extensions',
    },
    significance:
      'Windows 95 made the graphical, plug-and-play, multimedia PC the default for consumers and is the OS that “seals” the multimedia era. Its combination of 32-bit performance, USB, and multimedia support is the reference point for what a mid-90s PC actually ran.',
    sourceIds: ['wiki-windows-95'],
    relatedEventIds: ['windows-3.1', 'usb-1.0', 'compaq-presario-4600', 'intel-pentium'],
  },
  {
    id: 'windows-98',
    year: 1998,
    exactDate: '1998-06-25',
    track: 'os',
    title: 'Windows 98',
    summary:
      'Windows 95 with USB and FAT32 — the OS of the dial-up, Pentium II “multimedia PC.”',
    detailedDescription:
      'Windows 98 (June 25, 1998) was Windows 95’s successor: it added USB support (which made USB peripherals mainstream), FAT32 (larger partitions and files), improved multimedia, and shipped with Internet Explorer 4. It required a 386DX and 8 MB of RAM (16 MB recommended) and was the OS in the 1998–2000 desktop, the era of 56K modems, Pentium II/III, and the first “gaming PC.” It was the last of the Windows 9x line before Windows ME.',
    manufacturer: 'Microsoft',
    specs: {
      minCpu: 'Intel 386DX (Pentium recommended)',
      minRam: '8 MB (16 MB recommended)',
      architecture: '32-bit (Win32) over MS-DOS',
      features: 'USB, FAT32, long file names',
      audio: 'DirectSound / DirectMusic',
    },
    significance:
      'Windows 98 is the OS of the “dial-up + Pentium II multimedia PC” — it made USB and FAT32 mainstream and is the software most people associate with the late-90s desktop. It closes the Multimedia PC era and opens the Performance Race era, sitting just before the NT-based Windows 2000/XP.',
    sourceIds: ['wiki-windows-98'],
    relatedEventIds: ['windows-95', 'usb-1.0', 'intel-pentium-3', 'windows-2000'],
  },
  {
    id: 'windows-2000',
    year: 2000,
    exactDate: '2000-02-17',
    track: 'os',
    title: 'Windows 2000',
    summary:
      'The first mainstream Windows on the NT kernel — the “serious” OS that replaced Windows 95/98 for business and power users.',
    detailedDescription:
      'Windows 2000 (February 17, 2000) was Windows NT 5.0 brought to the desktop: a 32-bit, preemptive, NTFS-based OS with better stability, security, and networking than the Windows 9x line. It required a 133 MHz CPU and 32 MB of RAM (64 MB recommended) and became the default for business workstations and the basis for Windows XP. It was the OS most “serious” desktops and the early 64-bit push ran in the late 90s/early 2000s.',
    manufacturer: 'Microsoft',
    specs: {
      minCpu: '133 MHz (Pentium / Athlon recommended)',
      minRam: '32 MB (64 MB recommended)',
      architecture: '32-bit (NT kernel, Win32)',
      filesystem: 'NTFS',
      networking: 'TCP/IP, Active Directory (server)',
    },
    significance:
      'Windows 2000 is the OS that moved mainstream desktop computing onto the stable NT kernel, ending the Windows 9x line for business and power users. It is the direct ancestor of Windows XP and the OS that defined the “serious” early-2000s workstation.',
    sourceIds: ['wiki-windows-2000'],
    relatedEventIds: ['windows-98', 'intel-pentium-3', 'windows-xp'],
  },
  {
    id: 'windows-xp',
    year: 2001,
    exactDate: '2001-10-25',
    track: 'os',
    title: 'Windows XP',
    summary:
      'The most successful Windows desktop ever — NT kernel, Luna theme, and the OS of the “gaming rig” era.',
    detailedDescription:
      'Windows XP (October 25, 2001) merged the stability of Windows 2000 (NT 5.1) with the consumer ease of Windows 98, and it became the defining OS of the early-2000s desktop. It required a 233 MHz CPU and 64 MB of RAM (128 MB recommended), introduced the Luna theme, fast user switching, and first-class 32/64-bit support (it was the OS that made the Athlon 64’s x86-64 feature mainstream). It ran on the Pentium 4 / Athlon XP / Athlon 64 “gaming rigs” of 2001–2006 and remained in use until 2014 — the longest-lived Windows desktop of the era.',
    manufacturer: 'Microsoft',
    specs: {
      minCpu: '233 MHz (Pentium / Athlon recommended)',
      minRam: '64 MB (128 MB recommended)',
      architecture: '32-bit (NT 5.1, Win32; x86-64 on 64-bit builds)',
      features: 'Luna theme, Fast User Switching, .NET 1.1',
      bitness: '32-bit (64-bit edition later)',
    },
    significance:
      'Windows XP is the OS of the Performance Race era — it is what the Pentium 4 / Athlon 64 “gaming rig” ran, and it made 64-bit (via the Athlon 64) a real desktop feature. Its longevity (2001–2014) makes it the reference OS for the entire early-2000s desktop, and it is the direct bridge into the Multi-Core era.',
    sourceIds: ['wiki-windows-xp'],
    relatedEventIds: ['windows-2000', 'intel-pentium-4', 'amd-athlon-64', 'geforce-3'],
  },
  {
    id: 'windows-8',
    year: 2012,
    exactDate: '2012-10-26',
    track: 'os',
    title: 'Windows 8',
    summary:
      'The Windows of the tablet era — a Start screen of tiles, and the OS that tried to be two machines at once.',
    detailedDescription:
      'Windows 8 (October 26, 2012) was Windows NT 6.2 brought to the tablet era: it replaced the Start menu with a full-screen “Start” of tiles (the “Modern” interface), added a touch-first shell, and shipped with the first consumer 64-bit ARM edition. It required a 1 GHz CPU and 1–2 GB of RAM (depending on edition), and it was the OS in the 2012–2014 ultrabook and Surface tablet. It was the OS that tried to be a desktop and a tablet at the same time, and it was the one that forced Microsoft to walk back the “no Start button” decision in Windows 8.1 (2013).',
    manufacturer: 'Microsoft',
    specs: {
      minCpu: '1 GHz',
      minRam: '1 GB (32-bit) / 2 GB (64-bit)',
      architecture: '64-bit (NT 6.2); first ARM64 consumer edition',
      features: 'Modern/tile Start, touch shell, File History',
      era: '2012–2014 ultrabook / Surface',
    },
    significance:
      'Windows 8 is the “tablet” OS of the early Multi-Core era: it made touch-first computing a first-class Windows citizen, shipped the first consumer 64-bit ARM edition, and was the OS in the 2012–2014 ultrabook and Surface. Its mixed reception (and the Start-button rollback in 8.1) is the direct setup for the Windows 10 “one Windows” strategy that followed.',
    sourceIds: ['wiki-windows-8'],
    relatedEventIds: ['windows-xp', 'windows-10', 'macbook-pro-retina-13'],
  },
  {
    id: 'windows-10',
    year: 2015,
    exactDate: '2015-07-29',
    track: 'os',
    title: 'Windows 10',
    summary:
      '“One Windows” — the free-upgrade OS that closed the Multi-Core era and is still the desktop default.',
    detailedDescription:
      'Windows 10 (July 29, 2015) was Windows NT 10.0, the “one Windows” strategy: a single OS across PC, tablet, and (eventually) Xbox, with the Start menu back, a Cortana assistant, and a “free upgrade” offer that pushed it past 1 billion devices in two years. It required a 1 GHz CPU and 1–2 GB of RAM (depending on edition), and it was the OS in the 2015–2019 Ryzen / Skylake desktop and the Surface laptop. It introduced Windows Hello (biometric login), the Microsoft Edge browser (replacing IE), and the “Windows as a Service” model. It is still the desktop default today (2026).',
    manufacturer: 'Microsoft',
    specs: {
      minCpu: '1 GHz',
      minRam: '1 GB (32-bit) / 2 GB (64-bit)',
      architecture: '64-bit (NT 10.0)',
      features: 'Start menu, Cortana, Windows Hello, Edge, Windows as a Service',
      era: '2015–2026 desktop default',
    },
    significance:
      'Windows 10 is the OS that closes the Multi-Core era and is still the desktop default: it unified the PC/tablet split, brought the Start menu back, and pushed past 1 billion devices in two years. It is the “one Windows” strategy that defined the 2015–2019 desktop, and the direct bridge into the next era’s Windows 11.',
    sourceIds: ['wiki-windows-10'],
    relatedEventIds: ['windows-8', 'amd-ryzen-7-1800x', 'usb-c'],
  },
];