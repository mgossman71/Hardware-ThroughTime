# Research Sources

This file is the **human-readable twin** of `src/data/sources.ts`. Keep both in
sync when adding sources. Every `HistoricalEvent` on the site references at
least one entry here via its `sourceIds`.

## Policy

- Prefer primary / authoritative sources: manufacturer pages, Computer
  History Museum, IEEE, standards bodies (Wi-Fi Alliance, IEEE 802.11).
- Wikipedia is used as a convenience aggregator for basic specs; entries it
  provides should ideally be cross-checked against a primary source before
  being relied on for anything beyond "year / clock / capacity / price".
- Where sources disagree, record both values and flag the entry with
  `unverified: true` in the data model.
- Never invent: release dates, clock speeds, transistor counts, capacities,
  bandwidth, prices, performance numbers, historical claims.

## Sources

### wiki-intel-4004 — Intel 4004
- **Publisher:** Wikipedia (citing Intel / IEEE / CHM)
- **URL:** https://en.wikipedia.org/wiki/Intel_4004
- **Facts used:**
  - Released November 15, 1971
  - 2,300 transistors
  - 740 kHz max clock
  - 4-bit BCD, 10 µm process, DIP-16
  - Designed for Busicom 141-PF calculator

### wiki-intel-8080 — Intel 8080
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_8080
- **Facts used:**
  - Launched April 1974
  - 8-bit, 16-bit address bus (64 KB)
  - 6 µm process, DIP-40
  - Max clock 3.125 MHz
  - ~6,000 transistors (range 4,500–6,000 per sources)

### wiki-mos-6502 — MOS Technology 6502
- **Publisher:** Wikipedia (citing MOS Technology / IEEE)
- **URL:** https://en.wikipedia.org/wiki/MOS_Technology_6502
- **Facts used:**
  - Launched September 1975
  - 8-bit, 16-bit address bus
  - 1 MHz to 3 MHz clock
  - ~3,510 transistors
  - DIP-40
  - Used in Apple II, Commodore 64, Atari 8-bit

### wiki-altair-8800 — Altair 8800
- **Publisher:** Wikipedia (citing MITS / Popular Electronics)
- **URL:** https://en.wikipedia.org/wiki/Altair_8800
- **Facts used:**
  - Released December 19, 1974
  - Intel 8080 @ 2 MHz
  - Kit price US$439, assembled US$621
  - ~25,000 units sold
  - No screen, front-panel LEDs, mail-order sales

### wiki-apple-ii — Apple II
- **Publisher:** Wikipedia (citing Apple / Wozniak)
- **URL:** https://en.wikipedia.org/wiki/Apple_II
- **Facts used:**
  - Released June 1977
  - MOS 6502 @ 1.023 MHz
  - Built-in color video (NTSC)
  - Storage: cassette, 5.25" floppy (Disk II)
  - OS: Integer BASIC / Apple DOS / ProDOS

### wiki-trs-80 — TRS-80 (Model I)
- **Publisher:** Wikipedia (citing Tandy / Radio Shack)
- **URL:** https://en.wikipedia.org/wiki/TRS-80
- **Facts used:**
  - Released August 3, 1977
  - Zilog Z80 @ 1.774 MHz
  - 4–48 KB RAM
  - US$599.95 (1977)
  - >100,000 units sold by 1979
  - Monochrome 12" CRT, 64×16 characters

### wiki-commodore-pet — Commodore PET
- **Publisher:** Wikipedia (citing Commodore)
- **URL:** https://en.wikipedia.org/wiki/Commodore_PET
- **Facts used:**
  - Released 1977
  - US$795 (1977)
  - ~219,000 units sold
  - MOS 6502 @ 1 MHz
  - Built-in monochrome CRT, cassette storage

### wiki-commodore-64 — Commodore 64
- **Publisher:** Wikipedia (citing Commodore)
- **URL:** https://en.wikipedia.org/wiki/Commodore_64
- **Facts used:**
  - Released August 1982
  - MOS 6510 @ 1.023 MHz (NTSC) / 0.985 MHz (PAL)
  - 64 KB RAM
  - VIC-II video (8 sprites, multicolor, 16 colors)
  - SID 8580 (3-voice synthesizer)
  - ~12.5 million units sold

### wiki-ibm-pc-5150 — IBM Personal Computer (5150)
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/IBM_Personal_Computer
- **Facts used:**
  - Released August 12, 1981
  - Intel 8088 @ 4.77 MHz
  - 16 KB–256 KB DRAM
  - MDA (720×350 text) or CGA (320×200 color)
  - 5.25" floppy (160/320 KB)
  - Base price US$1,565 (1981)
  - PC DOS 1.0 / CP/M-86
  - Open ISA architecture, third-party compatible

## Sources still needed (research backlog)

- [ ] Intel 80286 / 80386 / 80486 (Intel press archives or IEEE)
- [ ] Pentium / Pentium Pro / Pentium II / Pentium III / Pentium 4 (Intel)
- [ ] AMD K5 / K6 / Athlon / Athlon 64 / Phenom / Zen / Ryzen (AMD press)
- [ ] NVIDIA RIVA / TNT / GeForce 256 / modern GPUs (NVIDIA)
- [ ] 3dfx Voodoo (3dfx / IEEE)
- [ ] DRAM generations (JEDEC / Intel / Micron)
- [ ] SIMM / DIMM history (JEDEC)
- [ ] SATA / NVMe / PCIe (JEDEC, PCI-SIG, NVMe.org)
- [ ] Ethernet / Wi-Fi generations (IEEE, Wi-Fi Alliance)
- [ ] OS release dates (Microsoft, Apple, Linux kernel archives)
- [ ] "Typical PC" configurations per year (PC Magazine, AnandTech,
      contemporaneous reviews)
- [ ] Inflation conversion basis (BLS CPI calculator)
