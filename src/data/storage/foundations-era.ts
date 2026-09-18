import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era storage (1956–1966) — the first commercial hard disk and the
 * first high-performance disk that made disks affordable.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const STORAGE_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'ibm-1301-ramac',
    year: 1956,
    exactDate: '1956-09',
    track: 'storage',
    title: 'IBM 350 (RAMAC 1301)',
    summary:
      'The first commercial hard disk drive — fifty 24-inch platters on a 5 MB disk that weighed as much as a car.',
    detailedDescription:
      'Announced in September 1956 as part of the 305 RAMAC computer, the IBM 350 Disk Storage File was the first commercial hard disk drive. It held about 5 MB across fifty 24-inch platters, took roughly 600 ms to seek, drew about 2,400 W, and was priced around $34,500. It weighed about 1 tonne. The basic mechanical arrangement of a spinning platter with a moving read/write head is still how hard disks work today.',
    manufacturer: 'IBM',
    specs: {
      capacity: '5 MB',
      platters: 50,
      platterInches: 24,
      seekMs: 600,
      priceUsd: 34500,
      announced: '1956-09',
    },
    significance:
      'The 350 is the ancestor of every hard disk in this timeline. It established the platter-plus-head architecture, the seek/latency trade-offs, and the economics of direct-access storage — a 4 MB disk was a luxury machine, and the next sixty years of storage history are the story of driving that cost down.',
    sourceIds: ['wiki-ibm-1301'],
    relatedEventIds: ['ibm-2314'],
  },
  {
    id: 'ibm-2314',
    year: 1966,
    track: 'storage',
    title: 'IBM 2314 Disk',
    summary:
      'The 23.14 MB disk that made hard disks affordable — the first high-performance disk aimed at commercial workloads.',
    detailedDescription:
      'The IBM 2314, introduced in 1966, was a 23.14 MB disk drive with a fast ~95 ms average access time, built for commercial rather than purely scientific workloads. It brought hard-disk performance within reach of a much wider market and became one of the best-selling disks of its era. It sits between the monolithic RAMAC and the cheaper, higher-capacity disks of the late 1960s.',
    manufacturer: 'IBM',
    specs: {
      capacity: '23.14 MB',
      seekMs: 95,
      announced: '1966',
      market: 'commercial / business computing',
    },
    significance:
      'The 2314 marked the moment hard disks became practical for everyday business computing, not just flagship scientific systems. It established the mid-range disk that enterprise computing depended on, and it is the bridge from the 1956 RAMAC to the affordable disk storage of the 1970s.',
    sourceIds: ['wiki-ibm-2314'],
    relatedEventIds: ['ibm-1301-ramac'],
  },
];
