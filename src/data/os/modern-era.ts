import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Operating systems of the Modern era (2020–2026) — macOS goes ARM, Windows
 * 11 resets the desktop, and Windows-on-ARM returns with Snapdragon X.
 */
export const OS_MODERN: HistoricalEvent[] = [
  {
    id: 'macos-big-sur',
    year: 2020,
    exactDate: '2020-11-30',
    track: 'os',
    title: 'macOS Big Sur',
    summary:
      'The first macOS to run on both Intel and Apple Silicon — universal binaries land on the Mac.',
    detailedDescription:
      'macOS Big Sur (released 30 November 2020, macOS 11) is the version that bridged the Mac\'s transition to Apple Silicon: it supports both x86-64 and ARM64, introduced universal binaries (a single file containing both architectures), and the Rosetta 2 translation layer that lets Intel apps run on Apple Silicon. It is the OS substrate for the entire M1 era and the reason the 2020–2021 Mac transition was nearly seamless for users.',
    manufacturer: 'Apple',
    specs: {
      version: 'macOS 11 (Big Sur)',
      architecture: 'x86-64 + ARM64 (universal binaries)',
      translation: 'Rosetta 2 (Intel→ARM64)',
      released: '30 November 2020',
      companion: 'Apple M1',
    },
    significance:
      'Big Sur is the OS hinge of the Modern Mac: without universal binaries and Rosetta 2, the M1 transition would have been a hard break, and it is the reason Apple could migrate the entire Mac line to ARM in two years.',
    sourceIds: ['wiki-macos-big-sur'],
    relatedEventIds: ['apple-m1', 'windows-11'],
  },
  {
    id: 'windows-11',
    year: 2021,
    exactDate: '2021-10-05',
    track: 'os',
    title: 'Windows 11',
    summary:
      'A redesigned, centered desktop with TPM 2.0 required — the biggest Windows reset in a decade.',
    detailedDescription:
      'Windows 11 (released 5 October 2021, NT 10.0.22000) is Microsoft\'s largest desktop redesign since Windows 7: a centered Start menu and taskbar, a Fluent design language, Snap Layouts for window management, and a TPM 2.0 requirement that made it the first Windows to mandate a hardware security chip. It is the OS of the Modern era and the platform the Snapdragon X "AI PC" wave runs on.',
    manufacturer: 'Microsoft',
    specs: {
      version: 'Windows 11 (NT 10.0.22000)',
      design: 'Fluent, centered taskbar, Snap Layouts',
      security: 'TPM 2.0 + Secure Boot required',
      released: '5 October 2021',
      successor: 'Windows 11 24H2 (Snapdragon X)',
    },
    significance:
      'Windows 11 is the platform of the Modern era: it reset the desktop look and the security baseline (TPM 2.0), and it is the OS that the 2024+ ARM "AI PC" wave (Snapdragon X) depends on to run x86 apps via Prism.',
    sourceIds: ['wiki-windows-11'],
    relatedEventIds: ['windows-10', 'windows-on-arm-snapdragon'],
  },
  {
    id: 'windows-on-arm-surface-pro-9',
    year: 2022,
    track: 'os',
    title: 'Windows on ARM (Surface Pro 9 5G)',
    summary:
      'A real Windows-on-ARM laptop with x86 emulation — ARM goes back into the Windows laptop.',
    detailedDescription:
      'The Surface Pro 9 5G (2022, Qualcomm Snapdragon 8cx) was the first Windows-on-ARM device that most users could actually buy and use daily, running x86/x64 apps through Microsoft\'s Prism emulation on top of Windows 11. It marked the start of ARM\'s return to the Windows laptop — a quiet step that the Snapdragon X Elite (2024) would then turn into a mainstream category.',
    manufacturer: 'Microsoft / Qualcomm',
    specs: {
      device: 'Surface Pro 9 5G (2022)',
      cpu: 'Qualcomm Snapdragon 8cx',
      os: 'Windows 11 on ARM',
      emulation: 'Prism (x86/x64)',
      milestone: 'First widely-available Windows-on-ARM laptop',
    },
    significance:
      'The Surface Pro 9 5G is the era\'s first credible "Windows on ARM" product: it proved x86 emulation was good enough for daily use and set up the Snapdragon X wave of 2024 to make ARM the default choice in the thin-and-light laptop.',
    sourceIds: ['wiki-windows-on-arm'],
    relatedEventIds: ['windows-11', 'windows-on-arm-snapdragon'],
  },
  {
    id: 'windows-on-arm-snapdragon',
    year: 2024,
    track: 'os',
    title: 'Windows on ARM (Snapdragon X)',
    summary:
      'Windows 11 24H2 on Snapdragon X Elite — ARM becomes the default thin-and-light Windows laptop.',
    detailedDescription:
      'With Windows 11 24H2 (2024) and the Snapdragon X Elite, Windows-on-ARM became a mainstream laptop category: devices from Microsoft (Surface Pro 11), Dell, HP, Lenovo, and others ship 15 Oryon ARM cores, a Hexagon NPU, and Prism x86 emulation as the default experience. It is the era\'s big architecture shift for the laptop, ending a two-decade ARM retreat and putting head-to-head competition with Apple Silicon in the consumer market.',
    manufacturer: 'Microsoft / Qualcomm / OEMs',
    specs: {
      os: 'Windows 11 24H2 on ARM',
      cpu: 'Qualcomm Snapdragon X (Oryon)',
      emulation: 'Prism (x86/x64)',
      npu: 'Hexagon, ~45 TOPS',
      era: '2024–2025 "AI PC" category',
    },
    significance:
      'Windows on ARM with Snapdragon X is the Modern era\'s architectural climax: for the first time since the 1990s, a non-x86 CPU is the default in a mainstream Windows laptop, and it forces the whole industry to compete on efficiency and AI rather than just core count.',
    sourceIds: ['wiki-windows-on-arm'],
    relatedEventIds: ['snapdragon-x-elite', 'windows-on-arm-surface-pro-9', 'windows-11'],
  },
];