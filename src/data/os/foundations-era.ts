import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era operating systems (1956–1969) — the first batch monitor,
 * the first time-sharing OS, and Unix.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const OS_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'gm-naa-io',
    year: 1956,
    track: 'os',
    title: 'GM-NAA I/O',
    summary:
      'One of the earliest operating systems — a batch monitor for the IBM 704 that ran the next job automatically when the current one finished.',
    detailedDescription:
      'GM-NAA I/O, created in 1956 by Robert L. Patrick of General Motors Research and Owen Mock of North American Aviation, was the first operating system for the IBM 704. It built on a 1955 system monitor that General Motors wrote for the IBM 701, and its main job was batch processing: automatically starting the next job as soon as the current one ended, and providing shared I/O routines. It was used in roughly forty 704 installations.',
    manufacturer: 'General Motors Research / North American Aviation',
    specs: {
      year: 1956,
      platform: 'IBM 704',
      type: 'batch (sequential job) monitor',
      authors: 'Patrick (GM), Mock (North American Aviation)',
    },
    significance:
      'GM-NAA I/O is a milestone in the idea that a computer needs software to manage jobs and I/O on the operator’s behalf. It is one of the earliest real operating systems and the ancestor of the batch-processing mainframe OSes that followed.',
    sourceIds: ['wiki-gm-naa-io'],
    relatedEventIds: ['ibm-704', 'ctss'],
  },
  {
    id: 'ctss',
    year: 1961,
    track: 'os',
    title: 'CTSS (Compatible Time-Sharing System)',
    summary:
      'The first practical time-sharing operating system — many users, one computer, at the same time.',
    detailedDescription:
      'CTSS, developed at MIT starting in 1959 and running by 1961, was the first practical time-sharing operating system. It let several users share a single machine interactively, each with their own file store and a live session, rather than submitting batch jobs and waiting. It ran on an IBM-compatible GE 645 and was a direct ancestor of MULTICS, which in turn strongly influenced Unix.',
    manufacturer: 'MIT (Project MAC)',
    specs: {
      year: 1961,
      developer: 'MIT',
      type: 'time-sharing',
      platform: 'GE 645 (IBM 7090-compatible)',
    },
    significance:
      'CTSS introduced interactive time-sharing — the model of many people using one computer at once — which is how most users interact with computers today. It paved the way for MULTICS and Unix, and it is the conceptual root of the multi-user OS era.',
    sourceIds: ['wiki-ctss'],
    relatedEventIds: ['gm-naa-io', 'unix'],
  },
  {
    id: 'unix',
    year: 1969,
    track: 'os',
    title: 'Unix',
    summary:
      'The portable, multi-user operating system born at Bell Labs — the design DNA of Linux, BSD, and macOS.',
    detailedDescription:
      'Unix development began at Bell Labs in 1969, starting with Ken Thompson and Dennis Ritchie, and it grew into a compact, portable, multi-user operating system. Its big ideas — a clean file-system hierarchy, small composable command-line utilities, and (from 1972) an implementation in C — made it portable across hardware in a way no mainframe OS was. Rewritten in C, it became the ancestor of Linux, the BSDs, and macOS.',
    manufacturer: 'Bell Labs (Thompson, Ritchie, and others)',
    specs: {
      year: 1969,
      origin: 'Bell Labs',
      language: 'C (from 1972)',
      traits: 'multi-user, portable, composable shell utilities',
    },
    significance:
      'Unix is the intellectual ancestor of most modern operating systems. Its design philosophy — simple, composable, portable — is why the server, desktop, and mobile software worlds still share a common lineage that reaches back to 1969.',
    sourceIds: ['wiki-unix'],
    relatedEventIds: ['ctss', 'ibm-system-360'],
  },
];
