import type { HistoricalEvent } from '../../types/historical-event';

/**
 * 32-bit / early-64-bit microprocessors of the 1990s (1993–1997).
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const CPUs_1990S: HistoricalEvent[] = [
  {
    id: 'intel-pentium',
    year: 1993,
    exactDate: '1993-03-22',
    track: 'cpus',
    title: 'Intel Pentium',
    summary:
      'Intel’s first superscalar, dual-issue x86 — and the first to drop the numeric “80xxx” naming for a brand.',
    detailedDescription:
      'The Pentium (P5) shipped in 60, 66, 90, and 100 MHz variants, using a 0.8 µm process and a 64-bit external data bus. Its two parallel integer pipelines could issue two instructions per cycle (superscalar), a big step over the 80486’s in-order design. It was the chip that powered the “Pentium inside” era — arguably the most successful consumer-branding campaign in PC history — and the default CPU in Windows 95-era desktops.',
    manufacturer: 'Intel',
    specs: {
      transistors: 3100000,
      clockMhz: 60,
      clockRange: '60 / 66 / 90 / 100 / 120 / 133 / 166 / 200 MHz',
      dataWidth: '32-bit',
      externalBus: '64-bit',
      processNode: '0.8 µm',
      issue: 'Superscalar (2-wide)',
      fpu: 'Integrated',
    },
    significance:
      'Introduced the “Pentium” brand and superscalar execution to x86. It is the CPU most people picture when they think of the mid-90s desktop, and it set the template (brand + GHz race) for the next decade.',
    sourceIds: ['wiki-intel-pentium'],
    relatedEventIds: ['intel-80486', 'intel-pentium-pro', 'compaq-presario-4600'],
  },
  {
    id: 'intel-pentium-pro',
    year: 1995,
    track: 'cpus',
    title: 'Intel Pentium Pro',
    summary:
      'The first out-of-order x86 — a design so different it looked more like a RISC chip wearing an x86 mask.',
    detailedDescription:
      'The Pentium Pro (P6) introduced out-of-order execution, dynamic scheduling, and a 36 KB split L1 cache plus a 256 KB–1 MB on-package L2 cache. It launched at 150 and 166 MHz on a 0.35 µm process. It was initially aimed at workstations and servers (Windows NT) and was slower than a Pentium for many legacy 16-bit/early-32-bit workloads, but it delivered far higher throughput for modern 32-bit code and established the P6 microarchitecture that evolved into the Pentium II, III, and (via the NetBurst fork and the Core line) modern Intel CPUs.',
    manufacturer: 'Intel',
    specs: {
      transistors: 5500000,
      clockMhz: 150,
      clockRange: '150 / 166 / 180 / 200 MHz',
      dataWidth: '32-bit',
      processNode: '0.35 µm',
      execution: 'Out-of-order',
      l1Cache: '16 KB I + 16 KB D (split)',
      l2Cache: '256 KB / 512 KB / 1 MB on-package',
    },
    significance:
      'Established out-of-order execution as the heart of x86 performance. The P6 design philosophy (decode → rename → schedule → execute) is the ancestor of every modern Intel and AMD high-performance core.',
    sourceIds: ['wiki-intel-pentium-pro'],
    relatedEventIds: ['intel-pentium', 'intel-pentium-2'],
  },
  {
    id: 'amd-k5',
    year: 1996,
    track: 'cpus',
    title: 'AMD K5',
    summary:
      'AMD’s first fully in-house out-of-order x86 design — and the introduction of the MMX-compatible 128-bit packed FPU.',
    detailedDescription:
      'The K5 was AMD’s first CPU designed entirely in-house (the 386/486-compatible parts before it were licensed from Intel). It introduced out-of-order execution to AMD’s line, a 64 KB on-die L2 cache, and the 128-bit packed floating-point unit that became the MMX and later SSE foundation. It shipped at 75, 100, and 120 MHz on a 350 nm process. Though commercially overshadowed by the Pentium, the K5’s architecture (especially its FPU) proved AMD could compete on design, not just price.',
    manufacturer: 'AMD',
    specs: {
      transistors: 2800000,
      clockMhz: 75,
      clockRange: '75 / 100 / 120 / 133 MHz',
      dataWidth: '32-bit',
      processNode: '350 nm',
      execution: 'Out-of-order',
      l2Cache: '64 KB on-die',
    },
    significance:
      'Proved AMD could design a competitive in-house CPU and introduced the packed-FPU instruction set that became the basis for MMX and SSE. A quiet but important step in AMD’s long independence from Intel’s licensing.',
    sourceIds: ['wiki-amd-k5'],
    relatedEventIds: ['intel-pentium-pro', 'intel-pentium-2'],
  },
  {
    id: 'intel-pentium-2',
    year: 1997,
    exactDate: '1997-05',
    track: 'cpus',
    title: 'Intel Pentium II',
    summary:
      'The Slot 1 cartridge CPU — a P6 core with a large on-package L2 cache and a dramatic new package format.',
    detailedDescription:
      'The Pentium II paired the P6 core with a 512 KB–1 MB L2 cache on a 0.25 µm process, launched at 233, 266, and 300 MHz (later 333 MHz). Its most visible feature was the Slot 1 “cartridge” package — a plastic-and-metal housing with a large heat-spreader and an edge connector — which became the icon of late-90s PCs. It was the first x86 to ship with the MMX instruction set enabled by default in mainstream desktops and the chip most associated with the Windows 98 era.',
    manufacturer: 'Intel',
    specs: {
      transistors: 7500000,
      clockMhz: 233,
      clockRange: '233 / 266 / 300 / 333 MHz',
      dataWidth: '32-bit',
      processNode: '0.25 µm',
      package: 'Slot 1 cartridge',
      l2Cache: '512 KB / 1 MB on-package',
      isa: 'MMX',
    },
    significance:
      'Defined the late-90s desktop: the Slot 1 package, MMX, and a large on-package cache. It was the last Intel consumer CPU to use the P6 core before the NetBurst (Pentium 4) fork, and it remains a reference point for “what a fast PC felt like in 1997–1999.”',
    sourceIds: ['wiki-intel-pentium-2'],
    relatedEventIds: ['intel-pentium-pro', 'amd-k5', 'agp'],
  },
];