import type { HistoricalEvent } from '../../types/historical-event';

/**
 * System buses of the Multimedia PC era (1982–1997).
 */
export const MOTHERBOARDS_MULTIMEDIA: HistoricalEvent[] = [
  {
    id: 'isa-bus',
    year: 1982,
    track: 'motherboards',
    title: 'ISA (Industry Standard Architecture)',
    summary:
      'The 8/16-bit expansion bus that defined the PC’s inside — and the bus every 90s sound card, video card, and modem plugged into.',
    detailedDescription:
      'ISA (the “AT bus,” formalized with the IBM PC AT in 1984 after the 8-bit XT bus) was a 16-bit (and 8-bit) bus running at 8.33 MHz, tying CPU, memory, and I/O onto one shared bus. Because the whole system shared the bus, adding cards (a Sound Blaster, a VGA card, a modem) directly competed for bandwidth. ISA was the universal PC expansion standard from 1982 until the mid-90s, and it remains the reference “slow bus” that PCI was designed to replace.',
    manufacturer: 'IBM / industry',
    specs: {
      dataWidth: '8-bit / 16-bit',
      clock: '8.33 MHz (AT)',
      bandwidth: '~33 MB/s (16-bit, shared)',
      formFactor: '32-pin (16-bit) / 40-pin (8-bit)',
    },
    significance:
      'ISA is the expansion bus of the classic PC and the one every “multimedia PC” card (audio, video, modem) of the late 80s and early 90s used. Its shared-bus, low-bandwidth design is exactly the bottleneck that VESA Local Bus and PCI were created to fix.',
    sourceIds: ['wiki-isa-bus'],
    relatedEventIds: ['vesa-local-bus', 'pci-bus', 'ibm-pc-5150'],
  },
  {
    id: 'mca-bus',
    year: 1987,
    exactDate: '1987-02',
    track: 'motherboards',
    title: 'Micro Channel Architecture (MCA)',
    summary:
      'IBM’s proprietary 32-bit bus for the PS/2 — faster than ISA, but closed, so the PC industry moved on to open standards instead.',
    detailedDescription:
      'MCA shipped with the PS/2 (February 1987) as a 16/32-bit bus running at 10 MHz, replacing the open ISA on IBM’s business line. It was technically superior to ISA but proprietary: only IBM-designed cards fit, and IBM used it to lock in the PS/2. The industry’s response — Compaq, Dell, and others sticking with open ISA — is a key reason MCA failed commercially, and it reinforced the principle that PC expansion buses have to be open standards (VESA, PCI) to win.',
    manufacturer: 'IBM',
    specs: {
      dataWidth: '16-bit / 32-bit',
      clock: '10 MHz',
      formFactor: 'Proprietary MCA slot',
      open: 'proprietary (IBM-only cards)',
    },
    significance:
      'MCA is the cautionary tale of the era: a technically strong bus that lost because it was closed. Its failure cemented the “open bus” principle that let VESA Local Bus and PCI (and the ISA ecosystem) dominate PC expansion.',
    sourceIds: ['wiki-ibm-ps2', 'wiki-mca-bus'],
    relatedEventIds: ['ibm-ps2-model-70', 'pci-bus'],
  },
  {
    id: 'vesa-local-bus',
    year: 1992,
    track: 'motherboards',
    title: 'VESA Local Bus (VLB)',
    summary:
      'The 32-bit, 33 MHz local bus that briefly solved the “ISA is too slow for a 386/486” problem before PCI took over.',
    detailedDescription:
      'VESA Local Bus (1992) put a 32-bit bus directly on the local (CPU) side of the chipset, running at 33 MHz, to give 386/486 systems much higher I/O bandwidth than ISA. It was the standard for high-end video and sound cards in 1992–1994. VLB was tied to Intel’s 486 architecture and never standardized beyond it, so it was superseded by PCI in 1994–95 — but it was the bridge that made 486-era multimedia cards actually fast.',
    manufacturer: 'VESA (Video Electronics Standards Association)',
    specs: {
      dataWidth: '32-bit',
      clock: '33 MHz',
      bandwidth: '~133 MB/s (theoretical)',
      supersededBy: 'PCI',
    },
    significance:
      'VLB was the first real answer to “ISA can’t keep up with a 486.” It carried the 486-era video and audio cards of the early-90s multimedia PC and proved the value of a local, wide, fast bus — a lesson PCI immediately built on.',
    sourceIds: ['wiki-vesa-local-bus'],
    relatedEventIds: ['isa-bus', 'pci-bus'],
  },
  {
    id: 'pci-bus',
    year: 1993,
    exactDate: '1993-10',
    track: 'motherboards',
    title: 'PCI (Peripheral Component Interconnect)',
    summary:
      'The 32-bit, 33 MHz, bus-mastering expansion slot that replaced ISA/VLB and became the PC’s universal expansion standard.',
    detailedDescription:
      'PCI (specification October 1993, championed by Intel with IBM, Compaq, HP, and others) was a 32-bit, 33 MHz, bus-mastering local bus delivering ~133 MB/s, with a clean, open spec and auto-configuration. It replaced both ISA and VLB as the standard PC expansion slot from 1994 onward and carried the sound, video, network, and modem cards of the multimedia era. PCI remained the dominant PC expansion bus well into the 2000s (PCIe later replaced it).',
    manufacturer: 'Intel / PCI-SIG',
    specs: {
      dataWidth: '32-bit (64-bit variant later)',
      clock: '33 MHz (66 MHz variant later)',
      bandwidth: '~133 MB/s (32-bit / 33 MHz)',
      busMastering: 'yes',
      open: 'open standard',
    },
    significance:
      'PCI is the expansion bus of the multimedia PC — the one the Presario and a generation of 90s desktops used for their audio, video, and network cards. Its open, bus-mastering design is why it displaced both proprietary MCA and Intel-specific VLB, and it set the template for PCIe.',
    sourceIds: ['wiki-pci'],
    relatedEventIds: ['vesa-local-bus', 'isa-bus', 'agp'],
  },
  {
    id: 'agp',
    year: 1997,
    track: 'motherboards',
    title: 'AGP (Accelerated Graphics Port)',
    summary:
      'The dedicated, high-bandwidth graphics slot that gave 3D cards a direct 64-bit path to system memory.',
    detailedDescription:
      'AGP (1997) was a dedicated graphics port (1× = 64-bit at 66 MHz, ~266 MB/s, doubling each generation: 2×, 4×, 8×) giving a 3D accelerator a direct, high-bandwidth path to main memory — something shared PCI could not provide. It was the answer to the Voodoo1-style “render-only” 3D cards and made frame-buffer textures and 3D gaming feasible at 1997–2000 resolutions. AGP defined the discrete-GPU era and was the slot every Voodoo3, GeForce, and Radeon plugged into before PCIe.',
    manufacturer: 'Intel / industry',
    specs: {
      dataWidth: '64-bit (dedicated)',
      baseClock: '66 MHz (1× ≈ 266 MB/s)',
      generations: '1× / 2× / 4× / 8×',
      purpose: 'Dedicated 3D graphics path',
    },
    significance:
      'AGP made the discrete 3D GPU practical by giving graphics its own high-bandwidth pipe. It defined the late-90s/early-2000s gaming PC and directly set up the GPU market that PCIe and modern discrete graphics still follow.',
    sourceIds: ['wiki-agp'],
    relatedEventIds: ['pci-bus', '3dfx-voodoo-1'],
  },
];