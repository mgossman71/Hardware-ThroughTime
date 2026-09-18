import type { HistoricalEvent } from '../../types/historical-event';

/**
 * 32-bit microprocessors of the mid-late 1980s (1985–1989).
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 * Where a value varies by stepping (clock speeds, etc.) the range is given
 * and the launch configuration is called out.
 */
export const CPUs_1980S: HistoricalEvent[] = [
  {
    id: 'intel-80386',
    year: 1985,
    exactDate: '1985-10-20',
    track: 'cpus',
    title: 'Intel 80386',
    summary:
      'The first 32-bit x86 microprocessor — 32-bit registers, a 32-bit external bus, and 16 MB of addressable memory.',
    detailedDescription:
      'The 80386 (i386) was the x86 architecture’s first 32-bit design. Introduced at 12.5 MHz (later 20 and 25 MHz), it added protected-mode segments up to 4 GB, a 32-bit external data bus, and on-chip prefetch and write-back buffers. It was expensive at launch, so early machines often ran it alongside a cheaper 16-bit coprocessor or used it in workstations. It is the chip that made 32-bit Windows — and, ultimately, the entire modern PC software ecosystem — possible.',
    manufacturer: 'Intel',
    specs: {
      transistors: 273000,
      clockMhz: 12.5,
      clockRange: '12.5 / 20 / 25 MHz',
      dataWidth: '32-bit',
      addressWidth: '32-bit (4 GB)',
      processNode: '1.6 µm',
      package: 'Ceramic DIP / PLCC',
    },
    significance:
      'Established 32-bit x86. Windows 3.1, Windows NT, and every 32-bit/64-bit OS that followed ultimately target the i386 instruction set introduced here. It ended the 16-bit era the 8086/8088 had started.',
    sourceIds: ['wiki-intel-80386'],
    relatedEventIds: ['intel-8086', 'intel-80486'],
  },
  {
    id: 'intel-80486',
    year: 1989,
    exactDate: '1989-04',
    track: 'cpus',
    title: 'Intel 80486',
    summary:
      'The 80386 with a built-in FPU, RISC-style pipeline, and on-chip cache — the workhorse of the late-1980s PC.',
    detailedDescription:
      'The 80486 (i486DX) integrated the 80387 floating-point unit, a four-stage pipeline, and an 8 KB on-chip cache onto one die. It launched at 25 MHz and 33 MHz, and Intel quickly pushed it to 50, 66, 100 MHz and beyond (the DX2 and DX4 variants doubled or quadrupled the bus clock). The 80486 was the first x86 to be broadly considered “fast enough” for desktop 3D and multimedia, and it anchored the 1989–1993 PC market.',
    manufacturer: 'Intel',
    specs: {
      transistors: 1200000,
      clockMhz: 25,
      clockRange: '25 / 33 / 50 / 66 / 100 MHz (DX/DX2/DX4)',
      dataWidth: '32-bit',
      addressWidth: '32-bit (4 GB)',
      processNode: '1 µm',
      fpu: 'Integrated (80387-equivalent)',
      cache: '8 KB on-chip',
    },
    significance:
      'The integrated FPU and on-chip cache made it dramatically faster than an 80386+80387 system at a lower total cost. It defined the performance baseline that multimedia-era software (and the “486 in the box” marketing of the late 80s/early 90s) was built around.',
    sourceIds: ['wiki-intel-80486'],
    relatedEventIds: ['intel-80386', 'intel-pentium', 'ibm-ps2-model-70'],
  },
];