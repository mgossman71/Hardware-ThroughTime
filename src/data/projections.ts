import type { Projection } from '../types/historical-event';

/**
 * Projections for the years AFTER the Modern era (2027+).
 *
 * These are estimates, not history. Each entry is grounded in a published
 * vendor roadmap or standards-body timeline (see `basis` and `sourceIds`) and
 * carries a `confidence` rating. They are rendered in a distinct "Projections"
 * band on the timeline and are intentionally kept out of `ALL_EVENTS` so the
 * site's "no invented facts" policy and the historical data-integrity tests
 * stay intact.
 */
export const PROJECTIONS: Projection[] = [
  {
    id: 'proj-amd-zen6-desktop',
    year: 2027,
    track: 'cpus',
    title: 'AMD Zen 6 desktop (Ryzen 10000)',
    summary:
      'The desktop successor to Zen 5, on TSMC 3 nm/2 nm — the next step up from the Ryzen 7000 line.',
    detailedDescription:
      "AMD's roadmap places Zen 6's data-center part (Epyc \"Venice\") for Q4 2026 and the desktop Ryzen 10000 generation for H1 2027, built on TSMC N2P (compute die) with a N6 I/O die, DDR5, up to 1024 MB of L3, and 5 GHz+ clocks. If it lands on schedule, Zen 6 desktop is the 2027 answer to whatever Intel and Apple ship, and the direct successor to the Ryzen 7000 (Zen 4) that defined the late-2020s desktop.",
    manufacturer: 'AMD',
    specs: {
      node: 'TSMC N2P (CCD) / N6 (IOD)',
      memory: 'DDR5',
      cache: 'up to 1024 MB L3',
      socket: 'AM5 (expected)',
    },
    significance:
      "Zen 6 desktop is the CPU-side continuation of the Modern era: it extends the chiplet-plus-node playbook (that won for Ryzen 7000 and Epyc) into 2027, and it is where the era's per-core efficiency race is set to resume after the 2024–2026 AI-PC wave.",
    confidence: 'medium',
    basis:
      "AMD enterprise roadmap (Tom's Hardware, 23 Mar 2026): Zen 6 datacenter Q4 2026, desktop H1 2027 (expected).",
    sourceIds: ['wiki-zen-6'],
    relatedEventIds: ['amd-zen-4', 'amd-epyc-venice'],
  },
  {
    id: 'proj-intel-nova-lake',
    year: 2027,
    track: 'cpus',
    title: 'Intel Nova Lake (Core Ultra Series 4)',
    summary:
      "The generation after Panther Lake — Intel's next client SoC on 18A and/or TSMC N2P.",
    detailedDescription:
      "Intel's core roadmap lists Nova Lake as the successor to Panther Lake (2026), built on Intel 18A and/or TSMC N2P with a new \"Coyote Cove\" P-core. It is the natural 2027 follow-up to Panther Lake and the point where Intel's in-fab (Ohio) 18A node is expected to carry its client line for a second generation.",
    manufacturer: 'Intel',
    specs: {
      node: 'Intel 18A and/or TSMC N2P',
      pCore: 'Coyote Cove',
      predecessor: 'Panther Lake (2026)',
    },
    significance:
      'Nova Lake is the CPU story beyond the present: it is where the "Intel 18A" bet is expected to mature into a second-generation client product, and it frames the 2027–2028 x86 client race against AMD Zen 6 desktop.',
    confidence: 'low',
    basis:
      'Intel CPU core roadmap (Wikipedia, Panther Lake): Panther Lake (2026) → Nova Lake, Intel 18A and/or TSMC N2P, Coyote Cove.',
    sourceIds: ['wiki-panther-lake'],
    relatedEventIds: ['intel-panther-lake'],
  },
  {
    id: 'proj-nvidia-rubin',
    year: 2027,
    track: 'graphics',
    title: 'NVIDIA Rubin (next-gen data-center GPU)',
    summary:
      "The architecture after Blackwell — NVIDIA's next data-center GPU and the Rubin-class HBM4 platform.",
    detailedDescription:
      "NVIDIA's public architecture roadmap runs Blackwell → Rubin → Feynman. Blackwell (the RTX 50 / B200 generation) is the 2024–2025 part; Rubin is the next data-center GPU, expected to pair with the HBM4 memory that ramps in 2026. It is the reference point for the 2027 AI-accelerator market and the ProGPU/workstation counterpart to the Rubin data-center silicon.",
    manufacturer: 'NVIDIA',
    specs: {
      role: 'data-center AI accelerator',
      memory: 'HBM4-class',
      predecessor: 'Blackwell (2024/2025)',
    },
    significance:
      'Rubin is the GPU-side continuation of the Modern era: it is the next step after Blackwell unifies the gaming and data-center silicon families, and it is the silicon that HBM4 and PCIe 7.0 are being built to feed.',
    confidence: 'medium',
    basis:
      'NVIDIA GPU microarchitecture roadmap (Wikipedia, Blackwell): Blackwell → Rubin → Feynman.',
    sourceIds: ['wiki-blackwell'],
    relatedEventIds: ['nvidia-rtx-50-blackwell', 'hbm4'],
  },
  {
    id: 'proj-nvidia-feynman',
    year: 2028,
    track: 'graphics',
    title: 'NVIDIA Feynman (generation after Rubin)',
    summary:
      "The architecture after Rubin — the next step in NVIDIA's roughly-biennial GPU cadence.",
    detailedDescription:
      "NVIDIA's roadmap names Feynman as the generation after Rubin. If NVIDIA holds its roughly-two-year cadence (Hopper 2022, Blackwell 2024, Rubin ~2026–2027), Feynman points to ~2028 as the next data-center and high-end GPU generation. It is the longest-horizon item on the GPU track and the reason the projection band extends to the end of the decade.",
    manufacturer: 'NVIDIA',
    specs: {
      role: 'data-center / high-end GPU',
      predecessor: 'Rubin',
    },
    significance:
      "Feynman marks the far edge of the era's GPU story: it is the next rung after Rubin and the point where the \"AI accelerator and gaming GPU are the same silicon\" pattern is expected to be fully institutionalized.",
    confidence: 'low',
    basis:
      'NVIDIA GPU microarchitecture roadmap (Wikipedia, Blackwell): Blackwell → Rubin → Feynman.',
    sourceIds: ['wiki-blackwell'],
    relatedEventIds: ['proj-nvidia-rubin'],
  },
  {
    id: 'proj-ddr6',
    year: 2027,
    track: 'ram',
    title: 'DDR6 SDRAM',
    summary:
      'The DIMM successor to DDR5 — 8,800–17,600 MT/s, up to 134.4 GB/s, and the CAMM2 form factor.',
    detailedDescription:
      'DDR6 (JEDEC) is the next mainstream DRAM generation after DDR5, expected to reach the market around 2027–2029: 8,800–17,600 MT/s, four 24-bit channels, up to 134.4 GB/s per module, the CAMM2 low-profile form factor, and Decision Feedback Equalization. It is the direct descendant of the DDR5 platform (Alder Lake / AM5) that defined the Modern desktop.',
    manufacturer: 'Industry (JEDEC)',
    specs: {
      standard: 'JEDEC (DDR6)',
      rate: '8,800–17,600 MT/s',
      bandwidth: 'up to 134.4 GB/s',
      channel: '4× 24-bit',
      formFactor: 'CAMM2',
    },
    significance:
      'DDR6 is the memory story beyond the present: it replaces DDR5 as the desktop/server baseline and continues the "wider channel, higher rate" cadence that has driven mainstream DRAM for two decades.',
    confidence: 'medium',
    basis:
      'JEDEC / vendor roadmaps (Wikipedia, DDR6 SDRAM): DDR6 scheduled 2027–2029; TechPowerUp (Jul 2025) and SK hynix DRAM roadmap point to 2027 adoption.',
    sourceIds: ['wiki-ddr6'],
    relatedEventIds: ['ddr5-mainstream'],
  },
  {
    id: 'proj-hbm4',
    year: 2027,
    track: 'ram',
    title: 'HBM4 (wide adoption)',
    summary:
      'The 2048-bit HBM interface in volume — the memory that Rubin-class accelerators are built around.',
    detailedDescription:
      'HBM4 began its production ramp in 2026 (see the HBM4 entry on the historical RAM track); this projection is its wide adoption as the default high-end AI memory in 2027. With a 2048-bit per-stack interface and a higher per-stack rate over HBM3E, HBM4 is what makes Rubin-class and MI-series accelerators practical, and it is the endpoint of the HBM2E → HBM3 → HBM3E → HBM4 bandwidth race that defined the era.',
    manufacturer: 'Industry (JEDEC; SK hynix / Samsung / Micron)',
    specs: {
      standard: 'JEDEC (HBM4)',
      interface: '2048-bit per stack',
      users: 'Rubin-class and next-gen AI accelerators',
    },
    significance:
      "HBM4 in volume is the memory-side endpoint of the Modern era: it is the point where \"bandwidth, not capacity\" becomes the unchallenged design goal for every serious AI accelerator, and it sets the baseline the next decade has to beat.",
    confidence: 'medium',
    basis:
      'JEDEC HBM4 standard (Wikipedia, High Bandwidth Memory); Samsung HBM4 yield reporting (Wccftech, Aug 2026) signals a 2026–2027 ramp.',
    sourceIds: ['wiki-high-bandwidth-memory'],
    relatedEventIds: ['hbm4', 'proj-nvidia-rubin'],
  },
  {
    id: 'proj-wifi8',
    year: 2028,
    track: 'wifi',
    title: 'Wi-Fi 8 (IEEE 802.11bn)',
    summary:
      'The "Ultra High Reliability" generation — Wi-Fi optimized for low latency and reliability, not just speed.',
    detailedDescription:
      'Wi-Fi 8 (IEEE 802.11bn, designated by the Wi-Fi Alliance) is the next 802.11 standard, projected to be finalized around May 2028 with products following in 2028–2029. Unlike Wi-Fi 7, whose headline was raw data rate, Wi-Fi 8 is designed for Ultra High Reliability: multi-AP coordination, seamless roaming, distributed-tone resource units, in-device coexistence, and AI offload. It is the wireless standard the 2028–2029 home and enterprise will standardize on.',
    manufacturer: 'Industry (IEEE 802.11bn; Wi-Fi Alliance)',
    specs: {
      standard: 'IEEE 802.11bn (Wi-Fi 8)',
      focus: 'Ultra High Reliability (UHR)',
      status: 'spec finalization ~2028',
    },
    significance:
      "Wi-Fi 8 is the Wi-Fi track's continuation: it marks the first generation where the design goal shifts from \"faster\" to \"more reliable and lower-latency,\" and it is the standard the 2028–2029 wireless market will converge on.",
    confidence: 'high',
    basis:
      'IEEE / Wi-Fi Alliance (Wikipedia, Wi-Fi 8): 802.11bn "Ultra High Reliability," standard projected finalized May 2028.',
    sourceIds: ['wiki-wifi-8'],
    relatedEventIds: ['wifi-7'],
  },
  {
    id: 'proj-pcie7',
    year: 2027,
    track: 'motherboards',
    title: 'PCI Express 7.0',
    summary:
      "128 GT/s — the doubling of PCIe 6.0 that gives the era's next GPU and NVMe generation their lane.",
    detailedDescription:
      'PCI Express 7.0 (PCI-SIG) doubles the per-lane rate of PCIe 6.0 to 128 GT/s, roughly doubling the ×16 bandwidth to ~256 GB/s. It is the interconnect the 2027+ high-end GPUs (Rubin-class, and the next AMD generation) and NVMe generations are expected to ride, and it is the next rung in the PCI Express cadence that the ATX 3.0/3.1 power story standardized around.',
    manufacturer: 'PCI-SIG',
    specs: {
      standard: 'PCIe 7.0',
      rate: '128 GT/s',
      bandwidth: '~256 GB/s per ×16',
      predecessor: 'PCIe 6.0 (64 GT/s)',
    },
    significance:
      'PCIe 7.0 is the I/O backbone of the next generation: it is what lets 2027+ GPUs and NVMe drives double their throughput, and it completes the "double the lane rate" cadence that has driven the expansion bus since PCIe 1.0.',
    confidence: 'medium',
    basis:
      "PCI-SIG (Wikipedia, PCI Express): PCIe 7.0 follows 6.0 (64 GT/s); DDR6/HBM4/PCIe 7.0 in-the-works (c't Magazin, Jun 2024).",
    sourceIds: ['wiki-pci-express'],
    relatedEventIds: ['atx-3-1'],
  },
];

const PROJECTION_BY_ID = new Map(PROJECTIONS.map((p) => [p.id, p]));

export function getProjection(id: string): Projection | undefined {
  return PROJECTION_BY_ID.get(id);
}

/** Projections for a single track (used by the timeline lanes). */
export function projectionsForTrack(trackId: Projection['track']): Projection[] {
  return PROJECTIONS.filter((p) => p.track === trackId);
}