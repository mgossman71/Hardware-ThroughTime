import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era computers (1945–1965) — vacuum-tube mainframes, the first
 * commercial systems, and the minicomputer that made computers affordable.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const COMPUTERS_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'eniac',
    year: 1945,
    track: 'computers',
    title: 'ENIAC',
    summary:
      'The first programmable, electronic, general-purpose digital computer — the origin point of the modern machine.',
    detailedDescription:
      'ENIAC (Electronic Numerical Integrator and Computer), completed at the University of Pennsylvania in 1945, was the first machine to be electronic, programmable, and general-purpose at once. It used about 17,000 vacuum tubes, filled a large room, and weighed around 27 tonnes, yet it computed artillery ballistics tables in seconds instead of the hours a human team needed. It was programmed by rewiring plugboards and setting switches, with punched cards supplying data.',
    manufacturer: 'University of Pennsylvania (Eckert & Mauchly)',
    specs: {
      vacuumTubes: 17468,
      weightKg: 27000,
      memory: '20 ten-digit decimal accumulators',
      input: 'punched cards / plugboard',
      primaryUse: 'ballistics and firing-table computation',
    },
    significance:
      'ENIAC is where the electronic general-purpose computer begins. Its speed made computation an engineering discipline, and its limits — fixed wiring, vacuum tubes, no stored program — defined the problems the next decade set out to solve.',
    sourceIds: ['wiki-eniac'],
    relatedEventIds: ['univac-1', 'transistor'],
  },
  {
    id: 'univac-1',
    year: 1951,
    track: 'computers',
    title: 'UNIVAC I',
    summary:
      'The first commercially available general-purpose computer in the US, delivered to the Census Bureau — and the machine that put computing on television.',
    detailedDescription:
      'UNIVAC I (Universal Automatic Computer), built by the Eckert–Mauchly Computer Corporation for the U.S. Census Bureau and delivered in 1951, was the first commercially available general-purpose computer in the United States. It kept its program in a fast 1,024-word mercury delay-line memory, moved bulk data on a large magnetic tape, and read programs from punched tape. In 1952 it forecast the US presidential election on live television, introducing the general public to the computer.',
    manufacturer: 'Eckert–Mauchly Computer Corporation (Remington Rand)',
    specs: {
      memoryWords: 1024,
      memoryType: 'mercury delay line',
      storage: '24-inch magnetic tape',
      input: 'punched tape',
      wordBits: 12,
    },
    significance:
      'UNIVAC I proved a computer could be a commercial product rather than a one-off lab or government artifact. It created the business-computer market, made "computer" a household concept, and its delay-line-plus-tape design was the template for early commercial mainframes.',
    sourceIds: ['wiki-univac'],
    relatedEventIds: ['eniac', 'ibm-704'],
  },
  {
    id: 'ibm-704',
    year: 1954,
    track: 'computers',
    title: 'IBM 704',
    summary:
      'The first commercially successful scientific mainframe — and one of the first built around transistor (diode-transistor) logic and magnetic-core memory.',
    detailedDescription:
      'The IBM 704, introduced in 1954, was the first commercially successful scientific computer and a landmark in the move from vacuum tubes to transistors: it used diode-transistor logic and magnetic-core memory. It was fast enough for serious numerical work and became the workhorse of 1950s science, running projects from missile research to early simulations. It was also the machine on which many early operating-system and batch-processing experiments were built.',
    manufacturer: 'IBM',
    specs: {
      logic: 'diode–transistor (DTL)',
      memory: 'magnetic core',
      era: '1950s scientific workhorse',
      note: 'first commercially successful transistorized scientific mainframe',
    },
    significance:
      'The 704 marked the transition from tube-based science machines to transistorized, core-memory systems. It anchored the era of batch mainframe computing and was the platform on which early operating systems — like GM-NAA I/O — were first built.',
    sourceIds: ['wiki-ibm-704'],
    relatedEventIds: ['univac-1', 'gm-naa-io', 'magnetic-core-memory'],
  },
  {
    id: 'ibm-system-360',
    year: 1964,
    exactDate: '1964-04-07',
    track: 'computers',
    title: 'IBM System/360',
    summary:
      'The first compatible mainframe family: one 32-bit architecture across a full range of machines, commercial and scientific.',
    detailedDescription:
      'The IBM System/360, announced on 7 April 1964, was the first family of mainframes designed to cover both commercial and scientific work across a complete range of sizes, from entry-level to large. Its key idea was to separate architecture from implementation: programs written for a small Model 30 could move to a much larger Model 95, because the whole family shared one 32-bit architecture. Memory was magnetic core (8 KB to about 9 MB), and it shipped with a set of operating systems including DOS/360 and OS/360.',
    manufacturer: 'IBM',
    specs: {
      wordBits: 32,
      memory: 'core (8 KB – 9 MB)',
      announced: '1964-04-07',
      family: 'first compatible mainframe family',
      os: 'DOS/360, OS/360, TSS/360',
    },
    significance:
      'System/360 introduced backward compatibility as a design goal — the idea that software should outlive a particular machine. It defined the 32-bit mainframe baseline and the architecture/implementation split that still shapes computing, and it established IBM as the de-facto standard for enterprise computing.',
    sourceIds: ['wiki-ibm-system-360'],
    relatedEventIds: ['ibm-704', 'pdp-8'],
  },
  {
    id: 'pdp-8',
    year: 1965,
    exactDate: '1965-03-22',
    track: 'computers',
    title: 'DEC PDP-8',
    summary:
      'The 12-bit minicomputer that made computing affordable — the first computer sold for under $20,000.',
    detailedDescription:
      'The PDP-8, launched by Digital Equipment Corporation on 22 March 1965 at $18,500, was the first minicomputer to sell for under $20,000, and it went on to outsell every computer before it. The original "Straight-8" used diode-transistor logic on flip-chip cards, a 12-bit word, and core memory, in a cabinet about the size of a small refrigerator. Over 50,000 were built, and it put a real computer within reach of universities, labs, and small businesses.',
    manufacturer: 'Digital Equipment Corporation (DEC)',
    specs: {
      wordBits: 12,
      priceUsd: 18500,
      unitsSold: 50000,
      logic: 'diode–transistor (Straight-8)',
      memory: 'core',
      released: '1965-03-22',
    },
    significance:
      'The PDP-8 defined the minicomputer class: a smaller, cheaper, cabinet-sized machine for labs and small organizations. It democratized computing a decade before the personal computer, and it was the platform that made interactive time-sharing and early graphics like Spacewar! practical.',
    sourceIds: ['wiki-pdp-8'],
    relatedEventIds: ['ibm-system-360', 'spacewar'],
  },
];
