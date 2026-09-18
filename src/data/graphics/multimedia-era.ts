import type { HistoricalEvent } from '../../types/historical-event';

/**
 * Graphics adapters and accelerators of the Multimedia PC era (1985–1997).
 */
export const GRAPHICS_MULTIMEDIA: HistoricalEvent[] = [
  {
    id: 'vga',
    year: 1987,
    exactDate: '1987-01',
    track: 'graphics',
    title: 'VGA (Video Graphics Array)',
    summary:
      'IBM’s 640×480, 256-color standard — the display resolution the rest of the industry built around for a decade.',
    detailedDescription:
      'Introduced with the PS/2 in January 1987, VGA offered 640×480 at 16 colors (and 320×200 at 256 colors) with 256 KB of VRAM on an ISA card. Because IBM documented it, third-party VGA-compatible chips (and the even higher SVGA mode) proliferated. VGA became the baseline resolution for virtually all consumer PC software through the 1990s — the “640×480” every game and GUI was designed for.',
    manufacturer: 'IBM',
    specs: {
      maxResolution: '640×480 (16 colors) / 320×200 (256 colors)',
      vram: '256 KB',
      bus: 'ISA',
      colors: '262,144 (18-bit palette, 256 on screen)',
      standard: 'VGA',
    },
    significance:
      'The resolution standard of the 1990s. VGA made color, 640×480 desktop computing a commodity and defined the canvas that SVGA, and later 3D acceleration, expanded. It is the reference display mode for the entire multimedia era.',
    sourceIds: ['wiki-vga'],
    relatedEventIds: ['svga', 'ibm-ps2-model-70'],
  },
  {
    id: 'svga',
    year: 1989,
    track: 'graphics',
    title: 'SVGA (Super VGA)',
    summary:
      'The “higher than VGA” resolutions — 800×600 and 1024×768 — that became the 90s desktop norm.',
    detailedDescription:
      'SVGA was never a single strict standard; it was a family of super-VGA modes (800×600, 1024×768, and beyond) that chipmakers like S3, Cirrus Logic, and Tseng Labs shipped from 1989. The S3 86C911 (1989) was one of the first widely used SVGA chipsets. By the mid-90s, 1024×768 at 16-bit color was the target desktop mode, and SVGA chips with 1–4 MB of VRAM were standard in multimedia PCs.',
    manufacturer: 'S3 / Cirrus Logic / Tseng Labs (industry)',
    specs: {
      maxResolution: '800×600, 1024×768',
      vram: '1–4 MB',
      bus: 'ISA / VESA Local Bus / PCI',
      colorDepth: '16-bit (65K colors) typical',
    },
    significance:
      'SVGA is what let a 1990s PC display a usable 16-color-depth desktop at 1024×768 — the resolution most 90s software targeted. It was the bridge between VGA’s 640×480 and the higher-resolution era of dedicated 3D GPUs.',
    sourceIds: ['wiki-svga'],
    relatedEventIds: ['vga', '3dfx-voodoo-1'],
  },
  {
    id: '3dfx-voodoo-1',
    year: 1996,
    exactDate: '1996-10',
    track: 'graphics',
    title: '3dfx Voodoo1',
    summary:
      'The first true consumer 3D accelerator — a render-only PCI card with 4 MB of SDRAM and a hardware triangle engine.',
    detailedDescription:
      'The Voodoo1 (October 1996) was the card that made “3D acceleration” a consumer category. It used the 3Dfx interactive chip, ran at 12.5 MHz, and had 4 MB of SDRAM. Crucially, it was a pure renderer — it produced frames into system memory and needed a separate 2D VGA card to actually display them (3dfx fixed this with the Voodoo2 in 1998). It supported OpenGL and Direct3D and was the go-to card for 3D games from Quake through the late 90s.',
    manufacturer: '3dfx Interactive',
    specs: {
      coreClock: '12.5 MHz',
      vram: '4 MB SDRAM',
      bus: 'PCI (render-only)',
      api: 'OpenGL, Direct3D',
      memoryBandwidth: '~1 GB/s',
    },
    significance:
      'Created the “3D accelerator” product category and made 3D gaming a mainstream purchase. The Voodoo1’s “add a 3D card to your 2D card” model defined the early 3D era and pushed the whole industry toward dedicated GPUs — a direct precursor to AGP and the modern discrete-GPU market.',
    sourceIds: ['wiki-3dfx-voodoo'],
    relatedEventIds: ['svga', 'agp', 'intel-pentium'],
  },
];