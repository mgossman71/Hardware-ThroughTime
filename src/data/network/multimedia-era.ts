import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Networking and connectivity of the Multimedia PC era (1990–1996).
 */
export const NETWORK_MULTIMEDIA: HistoricalEvent[] = [
  {
    id: 'ethernet-10base-t',
    year: 1990,
    track: 'networking',
    title: '10BASE-T Ethernet',
    summary:
      'The 10 Mbps twisted-pair Ethernet standard — the first “plug a cable into a wall” PC network and the backbone of office LANs.',
    detailedDescription:
      '10BASE-T (IEEE 802.3, standardized in the late 1980s / widely used from 1990) ran Ethernet at 10 Mbps over twisted-pair (usually Category 3/4) cabling with RJ-45 connectors, replacing coaxial (10BASE-2) and AUI. It made it possible to run network cables through office walls and plug each PC into a hub, and it was the standard office LAN of the 90s. It stayed the baseline LAN speed (before Fast Ethernet/100 Mbps) and is the ancestor of every Ethernet port since.',
    manufacturer: 'IEEE (802.3) / industry',
    specs: {
      speed: '10 Mbps',
      medium: 'Twisted pair (Cat 3/4), RJ-45',
      standard: 'IEEE 802.3 (10BASE-T)',
      topology: 'Star (hub) / shared',
    },
    significance:
      '10BASE-T is what put a network port in a 90s office PC and made LANs practical. It established the twisted-pair + RJ-45 + 10 Mbps baseline that every subsequent Ethernet generation (100/1000/10 GbE) is a multiple of, and it is the default “network” for a late-80s/early-90s business PC.',
    sourceIds: ['wiki-10base-t'],
    relatedEventIds: ['usb-1.0'],
  },
  {
    id: 'usb-1.0',
    year: 1996,
    track: 'networking',
    title: 'USB 1.0',
    summary:
      'The Universal Serial Bus — 1.5/12 Mbps, hot-pluggable, one cable for keyboards, mice, and every “multimedia” peripheral.',
    detailedDescription:
      'USB 1.0 (specification 1996, defined by Compaq, DEC, IBM, Intel, NEC, NTT, and Philips) offered 1.5 Mbps (low speed) and 12 Mbps (full speed) over a single 4-wire cable with hot-plugging and a tiered hub topology. It standardized the keyboard, mouse, joystick, and audio peripherals of the 90s PC and removed the separate PS/2 and game-port connectors. It remained the baseline USB speed until USB 2.0 (480 Mbps) in 2000.',
    manufacturer: 'Compaq / DEC / IBM / Intel / NEC / NTT / Philips',
    specs: {
      speeds: '1.5 Mbps (low) / 12 Mbps (full)',
      connectors: 'Type-A / Type-B, 4-wire',
      hotPlug: 'yes',
      topology: 'Tiered (hub)',
    },
    significance:
      'USB is the connectivity standard of the multimedia PC — the one cable for keyboard, mouse, scanner, and audio. It unified the 90s peripheral mess (PS/2, game port, serial) and set the 12 Mbps baseline that USB 2.0/3.x build on.',
    sourceIds: ['wiki-usb'],
    relatedEventIds: ['ethernet-10base-t', 'windows-95'],
  },
];