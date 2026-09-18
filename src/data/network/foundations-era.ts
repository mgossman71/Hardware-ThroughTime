import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Foundations-era networking (1964–1969) — the invention of packet switching
 * and the first packet-switched network, ARPANET.
 *
 * Every fact below is traceable to a source in `src/data/sources.ts`.
 */
export const NETWORK_FOUNDATIONS: HistoricalEvent[] = [
  {
    id: 'packet-switching',
    year: 1964,
    track: 'networking',
    title: 'Packet Switching',
    summary:
      'The idea that messages should be split into small packets and routed independently — the foundation of the Internet.',
    detailedDescription:
      'Packet switching was proposed independently in the mid-1960s: Paul Baran at RAND in 1964 as part of a fault-tolerant distributed communications system, and Donald Davies at the UK National Physical Laboratory in 1965. Instead of dedicating a circuit for the whole call, data is chopped into small packets, each routed independently and reassembled at the destination. The idea made networks robust and efficient, and it is the underlying principle of the Internet.',
    manufacturer: 'RAND (Baran) / NPL (Davies)',
    specs: {
      proposedBy: 'Baran (RAND) 1964; Davies (NPL) 1965',
      concept: 'split messages into packets, route independently',
      role: 'foundation of IP routing / the Internet',
    },
    significance:
      'Packet switching is the intellectual root of the networking track. It solved the fragility and inefficiency of circuit switching, and it made ARPANET — and eventually the Internet — possible.',
    sourceIds: ['wiki-packet-switching'],
    relatedEventIds: ['arpnet'],
  },
  {
    id: 'arpnet',
    year: 1969,
    exactDate: '1969-10-29',
    track: 'networking',
    title: 'ARPANET',
    summary:
      'The first operational packet-switched network — the direct ancestor of the Internet.',
    detailedDescription:
      'ARPANET came online in 1969 with its first message sent on 29 October from UCLA to UCSB. It connected four nodes at a time using Interface Message Processors (IMPs) built by Bolt Beranek & Newman, over 55 kbit/s links, running the NCP protocol. It was a research network funded by ARPA, but it demonstrated that geographically separate computers could share a shared, packet-switched fabric — the core idea of the Internet that followed.',
    manufacturer: 'ARPA (funded) / Bolt Beranek & Newman (IMPs)',
    specs: {
      firstMessage: '1969-10-29 (UCLA → UCSB)',
      initialNodes: 4,
      linkKbps: 55,
      equipment: 'IMP (Bolt Beranek & Newman)',
      protocol: 'NCP',
    },
    significance:
      'ARPANET is the first real proof that a packet-switched, multi-node network works. Every later concept — TCP/IP, the public Internet, and the networking era of this site — descends directly from it.',
    sourceIds: ['wiki-arpnet'],
    relatedEventIds: ['packet-switching'],
  },
];
