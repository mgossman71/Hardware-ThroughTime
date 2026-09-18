import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Sound cards of the Multimedia PC era (1989–1994).
 */
export const AUDIO_MULTIMEDIA: HistoricalEvent[] = [
  {
    id: 'sound-blaster',
    year: 1989,
    track: 'interfaces',
    title: 'Creative Labs Sound Blaster',
    summary:
      'The sound card that defined PC audio — 8-bit digital (ADPCM) plus FM synthesis, with an API that became the de facto PC sound standard.',
    detailedDescription:
      'The original Sound Blaster (1989) combined an 8-bit ADPCM digital channel with Yamaha FM synthesis (YM3812/OPL) on a 16-bit ISA card. Its real innovation was the software API and driver model: game and application programmers wrote to the Sound Blaster, and it became the de facto PC audio standard. It was the audio in the first wave of “multimedia PCs” and the card most 80s/90s PC games (and the “Sound Blaster” option in DOS games) were built for.',
    manufacturer: 'Creative Labs',
    specs: {
      digital: '8-bit ADPCM (mono)',
      synthesis: 'FM (Yamaha YM3812/OPL)',
      bus: 'ISA (16-bit)',
      api: 'Sound Blaster API (de facto PC standard)',
    },
    significance:
      'The Sound Blaster is the audio of the classic PC. Its API made PC sound programmable, and its name became the default “sound card” in a generation of games — the reference audio device for the multimedia era.',
    sourceIds: ['wiki-sound-blaster'],
    relatedEventIds: ['sound-blaster-16', 'isa-bus'],
  },
  {
    id: 'sound-blaster-16',
    year: 1992,
    track: 'interfaces',
    title: 'Sound Blaster 16',
    summary:
      'The first 16-bit PC sound card — and the card that made CD-quality audio and “multimedia” PC sound real.',
    detailedDescription:
      'The Sound Blaster 16 (1992) was the first Sound Blaster to offer 16-bit audio (alongside 8-bit), with OPL3 FM synthesis plus the first wavetable (AWE — Audio Workstation Edition) on Creative’s cards. It ran on a 16-bit ISA/VESA slot and was the standard “multimedia PC” sound card of the early 90s — the card in the Presario and a generation of Windows 3.1 machines. It made CD-quality playback, 16-bit recording, and rich synthesized music practical on a desktop.',
    manufacturer: 'Creative Labs',
    specs: {
      digital: '16-bit / 8-bit (stereo)',
      synthesis: 'OPL3 FM + wavetable (AWE)',
      bus: 'ISA / VESA (16-bit)',
      api: 'Sound Blaster compatible',
    },
    significance:
      'The Sound Blaster 16 is the audio device that defined the “multimedia PC” — 16-bit CD-quality sound and wavetable music on a desktop. It is the reference sound card for a 1992–1994 Windows 3.1 PC and the card most “multimedia” software targeted.',
    sourceIds: ['wiki-sound-blaster'],
    relatedEventIds: ['sound-blaster', 'awe32', 'windows-3.1'],
  },
  {
    id: 'awe32',
    year: 1994,
    track: 'interfaces',
    title: 'Sound Blaster AWE32',
    summary:
      'The first 32-bit PC sound card — OPL4 FM plus 32-bit wavetable and MIDI, the premium audio of the mid-90s.',
    detailedDescription:
      'The AWE32 (1994) was Creative’s flagship: the first Sound Blaster with 32-bit capable audio, OPL4 FM synthesis, and a large (up to 4 MB) onboard wavetable ROM for rich General MIDI. It was the “prosumer” audio card of the mid-90s, the one in enthusiast Pentium systems and the card that made high-quality PC music and sound practical. It cemented Creative’s dominance of PC audio before the move to AC97 and integrated audio.',
    manufacturer: 'Creative Labs',
    specs: {
      digital: '16-bit stereo (32-bit capable)',
      synthesis: 'OPL4 FM + 1–4 MB wavetable ROM',
      bus: 'ISA / PCI (16-bit)',
      midi: 'General MIDI',
    },
    significance:
      'The AWE32 is the audio of the enthusiast mid-90s PC — the premium card that took PC sound from 16-bit “multimedia” toward studio-grade quality. It marked the peak of Creative’s discrete-sound-card era before integrated (AC97) audio took over.',
    sourceIds: ['wiki-sound-blaster'],
    relatedEventIds: ['sound-blaster-16', 'intel-pentium'],
  },
];