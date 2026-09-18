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

### wiki-intel-80286 — Intel 80286
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_80286
- **Facts used:**
  - Released October 1, 1982
  - 16-bit, protected mode (segments, rings)
  - 24-bit address bus (16 MB)
  - 6 / 8 / 10 MHz, ~13,000 transistors, 3 µm

### wiki-intel-80386 — Intel 80386
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_80386
- **Facts used:**
  - Announced October 20, 1985
  - First 32-bit x86 (32-bit registers and bus)
  - ~273,000 transistors, 1.6 µm
  - 12.5 / 20 / 25 MHz, 4 GB addressing

### wiki-intel-80486 — Intel 80486
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_80486
- **Facts used:**
  - Introduced April 1989
  - Integrated FPU, 4-stage pipeline, 8 KB on-chip cache
  - ~1.2M transistors, 1 µm
  - 25 / 33 / 50 / 66 / 100 MHz (DX/DX2/DX4)

### wiki-intel-pentium — Intel Pentium
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_Pentium
- **Facts used:**
  - Announced March 22, 1993
  - Superscalar dual-issue
  - ~3.1M transistors, 0.8 µm, 64-bit external bus
  - 60–200 MHz generations

### wiki-intel-pentium-pro — Intel Pentium Pro
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_Pentium_Pro
- **Facts used:**
  - 1995 launch at 150 / 166 MHz
  - First out-of-order x86 (P6)
  - ~5.5M transistors, 0.35 µm
  - 16 KB + 16 KB split L1, 256 KB–1 MB on-package L2

### wiki-amd-k5 — AMD K5
- **Publisher:** Wikipedia (citing AMD / IEEE)
- **URL:** https://en.wikipedia.org/wiki/AMD_K5
- **Facts used:**
  - 1996 launch at 75 / 100 / 120 MHz
  - First fully in-house AMD x86
  - ~2.8M transistors, 350 nm
  - Out-of-order, 64 KB on-die L2

### wiki-intel-pentium-2 — Intel Pentium II
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_Pentium_II
- **Facts used:**
  - May 1997 at 233 / 266 / 300 MHz
  - ~7.5M transistors, 0.25 µm
  - Slot 1 cartridge, 512 KB / 1 MB on-package L2, MMX

### wiki-ibm-ps2 — IBM PS/2
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/IBM_PS/2
- **Facts used:**
  - Model 70 (8551), February 1987
  - Intel 80386 @ 16 MHz (33 MHz 1988)
  - 1–16 MB RAM, 40 MB fixed disk
  - Micro Channel Architecture (MCA), XGA option

### wiki-power-mac-6100 — Apple Power Macintosh 6100
- **Publisher:** Wikipedia (citing Apple)
- **URL:** https://en.wikipedia.org/wiki/Power_Macintosh
- **Facts used:**
  - September 1994, PowerPC 601 @ 33 MHz (50 MHz 1995)
  - 4 MB standard RAM (to 128 MB), NuBus
  - 120 MB HDD, 8 MB VRAM, System 7.1

### wiki-compaq-presario-4600 — Compaq Presario 4600
- **Publisher:** Wikipedia (citing Compaq / PC Magazine)
- **URL:** https://en.wikipedia.org/wiki/Compaq_Presario
- **Facts used:**
  - 1995 consumer line, Pentium 66–133 MHz
  - 8–32 MB EDO (72-pin SIMMs)
  - 540 MB–3.2 GB IDE, 4× CD-ROM, Windows 95

### wiki-vga — VGA
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/VGA
- **Facts used:**
  - January 1987 with PS/2
  - 640×480 (16-color) / 320×200 (256-color)
  - 256 KB VRAM, 262,144 palette, ISA

### wiki-svga — SVGA
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/SVGA
- **Facts used:**
  - 800×600 / 1024×768 mode family
  - S3 86C911 (1989) among first SVGA chipsets
  - 1–4 MB VRAM, 16-bit color typical

### wiki-3dfx-voodoo — 3dfx Voodoo
- **Publisher:** Wikipedia (citing 3dfx)
- **URL:** https://en.wikipedia.org/wiki/3dfx_Voodoo
- **Facts used:**
  - Voodoo1 October 1996, 12.5 MHz core
  - 4 MB SDRAM, ~1 GB/s
  - PCI render-only, OpenGL / Direct3D

### wiki-cd-rom — CD-ROM
- **Publisher:** Wikipedia (citing Yellow Book / Philips–Sony)
- **URL:** https://en.wikipedia.org/wiki/CD-ROM
- **Facts used:**
  - Yellow Book (1985–88)
  - 120 mm, ~700 MB (74 min), 1× = 150 KB/s

### wiki-ata — ATA / IDE
- **Publisher:** Wikipedia (citing ANSI X3.255)
- **URL:** https://en.wikipedia.org/wiki/AT_Attachment
- **Facts used:**
  - ATA standard 1989, controller on drive
  - Replaced ST-506 / M, 40-pin ribbon

### wiki-floppy-3.5 — 3.5″ Floppy
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/3.5-inch_floppy_disk
- **Facts used:**
  - 1.44 MB, rigid shuttered case
  - Replaced 5.25″ (360 KB / 1.2 MB) as standard

### wiki-windows-3.1 — Windows 3.1
- **Publisher:** Wikipedia (citing Microsoft)
- **URL:** https://en.wikipedia.org/wiki/Windows_3.1x
- **Facts used:**
  - April 1992, 286 + 1 MB RAM minimum
  - 256-color VGA, TrueType, MCI / Sound Blaster

### wiki-windows-95 — Windows 95
- **Publisher:** Wikipedia (citing Microsoft)
- **URL:** https://en.wikipedia.org/wiki/Windows_95
- **Facts used:**
  - August 24, 1995, 386 + 8 MB (16 MB recommended)
  - 32-bit file access (VFAT), long file names
  - Plug and Play, USB, Start menu / taskbar

### wiki-isa-bus — ISA
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/Industry_Standard_Architecture
- **Facts used:**
  - AT bus formalized 1984
  - 8/16-bit @ 8.33 MHz, shared bus
  - 32/40-pin form factor

### wiki-mca-bus — MCA
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/Micro_Channel_Architecture
- **Facts used:**
  - PS/2, February 1987
  - 16/32-bit @ 10 MHz, proprietary

### wiki-vesa-local-bus — VESA Local Bus
- **Publisher:** Wikipedia (citing VESA)
- **URL:** https://en.wikipedia.org/wiki/VESA_Local_Bus
- **Facts used:**
  - 1992, 32-bit @ 33 MHz, local bus
  - Tied to 486, superseded by PCI

### wiki-pci — PCI
- **Publisher:** Wikipedia (citing Intel / PCI-SIG)
- **URL:** https://en.wikipedia.org/wiki/PCI_(computer_bus)
- **Facts used:**
  - Specification October 1993
  - 32-bit @ 33 MHz (64/66 variants), bus-mastering
  - Open spec, auto-configuration

### wiki-agp — AGP
- **Publisher:** Wikipedia (citing Intel)
- **URL:** https://en.wikipedia.org/wiki/AGP
- **Facts used:**
  - 1997, 64-bit dedicated @ 66 MHz
  - 1×/2×/4×/8× generations, ~266 MB/s at 1×

### wiki-edo-dram — EDO DRAM
- **Publisher:** Wikipedia (citing JEDEC)
- **URL:** https://en.wikipedia.org/wiki/EDO_DRAM
- **Facts used:**
  - ~1991, Extended Data Out
  - ~30–40% over FPM at same clock
  - 72-pin SIMMs, 30/60/70 ns

### wiki-sdram — SDRAM
- **Publisher:** Wikipedia (citing JEDEC)
- **URL:** https://en.wikipedia.org/wiki/SDRAM
- **Facts used:**
  - 1996, 100-pin DIMM
  - 66/100/133 MHz, pipelined access
  - Replaced EDO SIMMs 1996–97

### wiki-10base-t — 10BASE-T
- **Publisher:** Wikipedia (citing IEEE 802.3)
- **URL:** https://en.wikipedia.org/wiki/10BASE-T
- **Facts used:**
  - 10 Mbps twisted pair, RJ-45
  - Replaced coaxial (10BASE-2)

### wiki-usb — USB
- **Publisher:** Wikipedia (citing USB-IF)
- **URL:** https://en.wikipedia.org/wiki/USB
- **Facts used:**
  - USB 1.0 spec 1996
  - 1.5 Mbps low / 12 Mbps full
  - Hot-plug, tiered hub topology

### wiki-sound-blaster — Sound Blaster
- **Publisher:** Wikipedia (citing Creative Labs)
- **URL:** https://en.wikipedia.org/wiki/Sound_Blaster
- **Facts used:**
  - 1989 original: 8-bit ADPCM + YM3812 FM (OPL), ISA
  - 1992 Sound Blaster 16: first 16-bit, OPL3 + wavetable
  - 1994 AWE32: OPL4 + 1–4 MB wavetable ROM
  - Sound Blaster API (de facto PC standard)

### wiki-pentium-3 — Intel Pentium III
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_Pentium_III
- **Facts used:**
  - Coppermine core, October 1999
  - ~770,000 transistors, 0.25 µm
  - 450–800 MHz generations
  - SSE (128-bit media), 256/512 KB on-die L2

### wiki-pentium-4 — Intel Pentium 4
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Intel_Pentium_4
- **Facts used:**
  - Announced November 20, 2000 at 1.4 GHz
  - ~42 million transistors, 180 nm (Northwood)
  - NetBurst 20-stage pipeline
  - SSE2 (256-bit), 512 KB on-die L2
  - Hyper-Threading (2002), up to 3.0–3.8 GHz

### wiki-amd-athlon — AMD Athlon
- **Publisher:** Wikipedia (citing AMD / IEEE)
- **URL:** https://en.wikipedia.org/wiki/AMD_Athlon
- **Facts used:**
  - Launched August 6, 1999
  - 500–760 MHz, 0.25 µm
  - ~36 million transistors, 256 KB on-die L2
  - MMX + SSE

### wiki-amd-athlon-xp — AMD Athlon XP
- **Publisher:** Wikipedia (citing AMD / IEEE)
- **URL:** https://en.wikipedia.org/wiki/AMD_Athlon_XP
- **Facts used:**
  - August 2001, Palomino/Thoroughbred cores
  - 1.3–2.2 GHz, 0.18 µm
  - 256 KB on-die L2
  - PR (Performance Rating) marketing

### wiki-amd-athlon-64 — AMD Athlon 64
- **Publisher:** Wikipedia (citing AMD / IEEE)
- **URL:** https://en.wikipedia.org/wiki/AMD_Athlon_64
- **Facts used:**
  - August 2003 (Clawhammer 1.8 GHz, Winchester 2.4, Sledgehammer 3.2)
  - First x86-64 (AMD64 ABI)
  - Integrated DDR memory controller, HyperTransport
  - 0.13 µm, ~147 million transistors (Winchester)

### wiki-core-2-duo — Intel Core 2 Duo
- **Publisher:** Wikipedia (citing Intel / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Core_2_Duo
- **Facts used:**
  - July 27, 2006 (Conroe E6300 @ 1.86 GHz)
  - 65 nm, ~290 million transistors
  - Dual-core, out-of-order
  - x86-64, SSE3

### wiki-geforce-256 — NVIDIA GeForce 256
- **Publisher:** Wikipedia (citing NVIDIA)
- **URL:** https://en.wikipedia.org/wiki/GeForce_2
- **Facts used:**
  - NV10, August 1999
  - 120 MHz core, 32/64 MB SDRAM-DDR
  - 128-bit memory bus
  - ~200 million transistors, 0.22 µm
  - “First GPU” marketing

### wiki-geforce-3 — NVIDIA GeForce 3
- **Publisher:** Wikipedia (citing NVIDIA)
- **URL:** https://en.wikipedia.org/wiki/GeForce_3
- **Facts used:**
  - NV20, October 2001
  - 170 MHz core, 64 MB DDR
  - First programmable vertex/pixel shaders (Shader Model 1.x)
  - 0.15 µm

### wiki-radeon-9700 — ATI Radeon 9700
- **Publisher:** Wikipedia (citing ATI)
- **URL:** https://en.wikipedia.org/wiki/Radeon_9700
- **Facts used:**
  - RV360, August 2002
  - 320 MHz core, 128 MB DDR
  - 128-bit bus, 8 render pipes
  - 0.15 µm
  - Competed with GeForce FX 5800

### wiki-geforce-8800 — NVIDIA GeForce 8800 GTX
- **Publisher:** Wikipedia (citing NVIDIA)
- **URL:** https://en.wikipedia.org/wiki/GeForce_8_Series
- **Facts used:**
  - G80, November 8, 2006
  - 55 nm, ~129 million transistors
  - 512 MB GDDR3, 384-bit bus
  - 128 unified stream processors
  - 575 MHz core / 1.94 GHz shader, CUDA

### wiki-radeon-hd-2900 — ATI Radeon HD 2900
- **Publisher:** Wikipedia (citing ATI/AMD)
- **URL:** https://en.wikipedia.org/wiki/Radeon_HD_2900
- **Facts used:**
  - R600, December 11, 2007
  - 65 nm, ~719 million transistors
  - 648 stream processors, 512-bit bus
  - 512 MB GDDR3
  - 700 MHz core / 1.4 GHz shader, Shader Model 4.0, HD decode

### wiki-power-mac-g5 — Power Mac G5
- **Publisher:** Wikipedia (citing Apple)
- **URL:** https://en.wikipedia.org/wiki/Power_Mac_G5
- **Facts used:**
  - Announced August 2003, shipped September
  - Dual PowerPC G5 (970fx) @ 1.8–2.5 GHz
  - Integrated dual-channel DDR memory controller
  - 64-bit capable, Mac OS X 10.3
  - PCI + NuBus, ~US$2,499

### wiki-windows-98 — Windows 98
- **Publisher:** Wikipedia (citing Microsoft)
- **URL:** https://en.wikipedia.org/wiki/Windows_98
- **Facts used:**
  - Released June 25, 1998
  - 386DX + 8 MB minimum (16 MB recommended)
  - USB support, FAT32
  - Internet Explorer 4

### wiki-windows-2000 — Windows 2000
- **Publisher:** Wikipedia (citing Microsoft)
- **URL:** https://en.wikipedia.org/wiki/Windows_2000
- **Facts used:**
  - Released February 17, 2000
  - NT 5.0 kernel, 32-bit
  - 133 MHz + 32 MB minimum (64 MB recommended)
  - NTFS, Active Directory (server)

### wiki-windows-xp — Windows XP
- **Publisher:** Wikipedia (citing Microsoft)
- **URL:** https://en.wikipedia.org/wiki/Windows_XP
- **Facts used:**
  - Released October 25, 2001
  - NT 5.1 kernel
  - 233 MHz + 64 MB minimum (128 MB recommended)
  - Luna theme, Fast User Switching
  - 64-bit edition; supported to 2014

### wiki-ddr-sdram — DDR SDRAM
- **Publisher:** Wikipedia (citing JEDEC)
- **URL:** https://en.wikipedia.org/wiki/DDR_SDRAM
- **Facts used:**
  - JEDEC standard 2000, mainstream 2001
  - 184-pin DIMM
  - 100/133 MHz (200/266 MT/s)
  - Double data rate (both clock edges)

### wiki-ddr2 — DDR2 SDRAM
- **Publisher:** Wikipedia (citing JEDEC)
- **URL:** https://en.wikipedia.org/wiki/DDR2_SDRAM
- **Facts used:**
  - JEDEC standard 2003/2004
  - 240-pin DIMM, 1.8 V
  - 400/533/667 MHz (800/1066/1333 MT/s)
  - 2N prefetch

### wiki-ddr3 — DDR3 SDRAM
- **Publisher:** Wikipedia (citing JEDEC)
- **URL:** https://en.wikipedia.org/wiki/DDR3_SDRAM
- **Facts used:**
  - JEDEC standard 2007
  - 240-pin DIMM, 1.5 V
  - 800/1066/1333 MHz (1600/2133/2666 MT/s)
  - 8N prefetch

### wiki-100base-tx — Fast Ethernet (100BASE-TX)
- **Publisher:** Wikipedia (citing IEEE 802.3u)
- **URL:** https://en.wikipedia.org/wiki/Fast_Ethernet
- **Facts used:**
  - IEEE 802.3u, 1995 (mainstream 1998)
  - 100 Mbit/s over 2 pairs of Cat 5
  - RJ-45, 802.3 frames

### wiki-adsl — ADSL
- **Publisher:** Wikipedia (citing ITU-T)
- **URL:** https://en.wikipedia.org/wiki/Asymmetric_Digital_Subscriber_Line
- **Facts used:**
  - ITU-T G.992.1 (G.dmt)
  - Up to ~8 Mbit/s downstream, ~1 Mbit/s upstream
  - Existing telephone-pair, DSLAM + CPE modem
  - Mainstream 1998–1999

### wiki-gigabit-ethernet — Gigabit Ethernet
- **Publisher:** Wikipedia (citing IEEE 802.3ab)
- **URL:** https://en.wikipedia.org/wiki/Gigabit_Ethernet
- **Facts used:**
  - IEEE 802.3ab, 2002 (mainstream 2003–2004)
  - 1 Gbit/s over 4 pairs of Cat 5
  - RJ-45, 802.3 frames

### wiki-802-11b — 802.11b
- **Publisher:** Wikipedia (citing IEEE 802.11b-1999)
- **URL:** https://en.wikipedia.org/wiki/IEEE_802.11b
- **Facts used:**
  - IEEE 802.11b-1999
  - Up to 11 Mbit/s
  - 2.4 GHz ISM
  - CCK + DSSS

### wiki-802-11g — 802.11g
- **Publisher:** Wikipedia (citing IEEE 802.11g-2003)
- **URL:** https://en.wikipedia.org/wiki/IEEE_802.11g
- **Facts used:**
  - IEEE 802.11g-2003
  - Up to 54 Mbit/s
  - 2.4 GHz ISM, OFDM
  - Backward-compatible with 802.11b

### wiki-sata — Serial ATA
- **Publisher:** Wikipedia (citing SATA-IO)
- **URL:** https://en.wikipedia.org/wiki/Serial_ATA
- **Facts used:**
  - SATA-1 2003 (1.5 Gbit/s), SATA-2 2006 (3.0 Gbit/s)
  - 4-wire serial, 7-pin connector
  - Point-to-point, hot-swap capable
  - ~150 / ~300 MB/s per direction

### wiki-pcie — PCI Express
- **Publisher:** Wikipedia (citing PCI-SIG)
- **URL:** https://en.wikipedia.org/wiki/PCI_Express
- **Facts used:**
  - PCIe 1.0, 2004 (2.5 Gbit/s/lane)
  - x1 / x4 / x8 / x16 lanes
  - Point-to-point serial, 250 MB/s per lane per direction
  - Replaced PCI and AGP

### wiki-dvi — DVI (Digital Visual Interface)
- **Publisher:** Wikipedia (citing DVI consortium)
- **URL:** https://en.wikipedia.org/wiki/Digital_Visual_Interface
- **Facts used:**
  - Consortium 1999 (NVIDIA, Compaq, HP, IBM, Intel, Macintosh)
  - TMDS digital + optional analog
  - 24/29-pin (DVI-I)
  - Up to ~7.9 Gbit/s single-link

### wiki-sxga — SXGA (1280×1024)
- **Publisher:** Wikipedia (citing VESA DMT)
- **URL:** https://en.wikipedia.org/wiki/Display_timing_standards
- **Facts used:**
  - 1280×1024 (4:3)
  - ~1.31 megapixels
  - VESA DMT-1 (SXGA)
  - Standard 15”/17” LCD resolution, 2002–2007

### wiki-usb-2.0 — USB 2.0
- **Publisher:** Wikipedia (citing USB-IF)
- **URL:** https://en.wikipedia.org/wiki/USB_2.0
- **Facts used:**
  - USB 2.0 (Hi-Speed), 2000
  - 480 Mbit/s
  - Type-A / Type-B / Mini
  - Backward-compatible with USB 1.1

### wiki-audigy — Creative Audigy
- **Publisher:** Wikipedia (citing Creative Labs)
- **URL:** https://en.wikipedia.org/wiki/Creative_Audigy
- **Facts used:**
  - Creative, 1999 (CT4560/CT4780/EMU10K1)
  - 24-bit, 48 kHz (up to 192 kHz on EMU10K1)
  - 6-channel (5.1) analog + SPDIF
  - PCI bus, EAX support

### wiki-amd-fx — AMD FX
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/AMD_FX
- **Facts used:**
  - Released June 21, 2011
  - 8 cores (4 Piledriver modules)
  - 3.2–3.6 GHz
  - 32 nm, AM3+, 125 W TDP
  - 131M transistors

### wiki-intel-core-i7-3770k — Intel Core i7-3770K
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture)
- **Facts used:**
  - Q1 2012 release
  - 4 cores / 8 threads
  - 3.5 GHz (3.9 GHz Turbo)
  - 22 nm, 8 MB L3, LGA 1155
  - 140M transistors

### wiki-intel-core-i7-6700k — Intel Core i7-6700K
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Skylake_(microarchitecture)
- **Facts used:**
  - Released September 8, 2015
  - 4 cores / 8 threads
  - 3.4 GHz (4.0 GHz Turbo)
  - 14 nm, DDR4, LGA 1151
  - 175M transistors

### wiki-intel-core-i9-7900x — Intel Core i9-7900X
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Kaby_Lake_(microarchitecture)
- **Facts used:**
  - Released September 30, 2017
  - 10 cores / 20 threads
  - 3.3 GHz (4.3 GHz Turbo)
  - 14 nm, 44 MB L3, LGA 2066, 140 W TDP
  - 206M transistors

### wiki-amd-ryzen-7-1800x — AMD Ryzen 7 1800X
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/AMD_Ryzen
- **Facts used:**
  - Released August 2, 2017
  - 8 cores / 16 threads
  - 3.6 GHz (4.0 GHz Boost)
  - 14 nm, AM4, 16 MB L3
  - US$499 launch price

### wiki-amd-ryzen-7-3800x — AMD Ryzen 7 3800X
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Zen_2
- **Facts used:**
  - Released July 7, 2019
  - 8 cores / 16 threads
  - 3.9 GHz (4.5 GHz Boost)
  - 7 nm (CCD) + 12 nm (I/O die), 32 MB L3
  - 105 W TDP

### wiki-geforce-gtx-480 — NVIDIA GeForce GTX 480
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/GeForce_400_series
- **Facts used:**
  - Released March 26, 2010
  - 480 stream processors
  - 1.5 GB GDDR5, 512-bit bus
  - 40 nm, 250 W TDP

### wiki-geforce-gtx-680 — NVIDIA GeForce GTX 680
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/GeForce_600_series
- **Facts used:**
  - Released September 12, 2012
  - 2560 CUDA cores
  - 2 GB GDDR5, 256-bit bus
  - 28 nm, 195 W TDP

### wiki-geforce-gtx-1080 — NVIDIA GeForce GTX 1080
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/GeForce_10_series
- **Facts used:**
  - Released June 27, 2016
  - 2560 CUDA cores
  - 8 GB GDDR5X, 256-bit bus
  - 16 nm (FinFET), 180 W TDP

### wiki-radeon-vega-64 — AMD Radeon Vega 64
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Vega_(microarchitecture)
- **Facts used:**
  - Released February 7, 2017
  - 2048 stream processors
  - 8 GB HBM2, 2048-bit bus
  - 14 nm, 297 W (reference)

### wiki-nvidia-rtx-2080 — NVIDIA GeForce RTX 2080
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/GeForce_RTX_20_series
- **Facts used:**
  - Released September 20, 2018
  - 2944 CUDA cores, 384 RT cores
  - 8 GB GDDR6, 256-bit bus
  - 12 nm, 215 W TDP

### wiki-macbook-pro-retina — MacBook Pro (Retina)
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/MacBook_Pro
- **Facts used:**
  - Released May 22, 2012
  - 2560×1600 IPS Retina (13.3")
  - Dual-core Sandy Bridge i5/i7
  - 8 / 16 GB DDR3 (soldered), PCIe SSD
  - Dual Thunderbolt, dual USB 3.0

### wiki-ddr4 — DDR4 SDRAM
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/DDR4_SDRAM
- **Facts used:**
  - JEDEC JESD79-4 (July 2014)
  - 1600–3200 MT/s, 240-pin DIMM
  - 1.2 V, on-die ECC
  - Mainstream 2015 (Skylake)

### wiki-ssd — Solid-state drive
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Solid-state_drive
- **Facts used:**
  - Commodity sub-US$250 for 256 GB (2011–2013)
  - ~500 MB/s sequential read, single-digit ms random
  - SATA III (6 Gbit/s)
  - Default boot disk of 2012–2015

### wiki-nvme — NVM Express
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/NVM_Express
- **Facts used:**
  - NVMe 1.0 (April 2011), consumer 2013–2014
  - PCIe-native, 64K queues × 64 commands
  - 3–7 GB/s sequential, single-digit µs random
  - M.2 / U.2 form

### wiki-pcie-3.0 — PCI Express 3.0
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/PCI_Express#PCI_Express_3.0
- **Facts used:**
  - Ratified November 2010
  - 8 GT/s per lane, x16 = 15.75 GB/s per direction
  - 128b/130b encoding
  - Standard 2010–2019 desktop bus

### wiki-10gbase-t — 10GBASE-T
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/10GBASE-T
- **Facts used:**
  - IEEE 802.3an (July 2010)
  - 10 Gbit/s full-duplex over Category 6 UTP, 4 pairs
  - RJ-45 connector
  - Mainstream 2011–2013 prosumer

### wiki-802-11ac — 802.11ac (Wi-Fi 5)
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/802.11ac
- **Facts used:**
  - IEEE 802.11ac-2013, up to 1.3 Gbit/s
  - 5 GHz band, 256-QAM, 80 MHz
  - MU-MIMO (Wave 2)
  - Backward-compatible with 802.11n

### wiki-802-11ax — 802.11ax (Wi-Fi 6)
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/802.11ax
- **Facts used:**
  - IEEE 802.11ax, up to 9.6 Gbit/s
  - OFDMA, 1024-QAM, 160 MHz
  - Target wake time (TWT)
  - 2.4 / 5 GHz

### wiki-fhd — Full HD
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Full_HD
- **Facts used:**
  - 1920×1080 (16:9), 2.07 MP
  - VESA CDM-6 / CEA-861
  - Standard 2010–2019 desktop + TV

### wiki-uhd-4k — Ultra HD
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Ultra_HD
- **Facts used:**
  - 3840×2160 (16:9), 8.29 MP
  - CEA-861 (UHD) / ITU-R BT.2100
  - Standard 2014–2019 TV + pro

### wiki-usb-3.0 — USB 3.0
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/USB_3.0
- **Facts used:**
  - USB-IF, November 12, 2008
  - 5 Gbit/s (625 MB/s)
  - Type-A / Type-B / Micro-B
  - Backward-compatible with USB 2.0, mainstream 2010–2011

### wiki-thunderbolt — Thunderbolt
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Thunderbolt_(interface)
- **Facts used:**
  - Intel + Apple, November 15, 2011
  - PCIe + DisplayPort over one cable
  - 10 Gbit/s per direction
  - Mini DisplayPort connector

### wiki-usb-c — USB-C
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/USB-C
- **Facts used:**
  - USB-IF, 2014, reversible 24-pin
  - 10 Gbit/s (USB 3.1 Gen 1)
  - Up to 100 W (USB-PD)
  - DisplayPort / Thunderbolt alt mode, mainstream 2015 (MacBook)

### wiki-windows-8 — Windows 8
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Windows_8
- **Facts used:**
  - Released October 26, 2012
  - NT 6.2, Modern/tile Start, touch shell
  - First consumer 64-bit ARM edition
  - 1 GHz / 1–2 GB RAM minimum

### wiki-windows-10 — Windows 10
- **Publisher:** Wikipedia
- **URL:** https://en.wikipedia.org/wiki/Windows_10
- **Facts used:**
  - Released July 29, 2015
  - NT 10.0, Start menu, Cortana, Windows Hello, Edge
  - Free upgrade, 1B+ devices in ~2 years
  - 1 GHz / 1–2 GB RAM minimum

### wiki-eniac — ENIAC
- **Publisher:** Wikipedia (citing IEEE / University of Pennsylvania)
- **URL:** https://en.wikipedia.org/wiki/ENIAC
- **Facts used:**
  - Completed 1945, first programmable electronic general-purpose digital computer
  - ~17,468 vacuum tubes, ~27,000 kg
  - 20 ten-digit decimal accumulators
  - Ballistics / firing-table computation

### wiki-univac — UNIVAC
- **Publisher:** Wikipedia (citing Remington Rand / Sperry)
- **URL:** https://en.wikipedia.org/wiki/UNIVAC
- **Facts used:**
  - UNIVAC I released March 1951
  - First commercial general-purpose computer in the US (Census Bureau)
  - 1,024-word mercury delay-line memory, 24-inch tape, punched-tape input
  - 12-bit word; 1952 election forecast

### wiki-ibm-704 — IBM 704
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/IBM_704
- **Facts used:**
  - Introduced 1954, first commercially successful scientific mainframe
  - Diode–transistor logic, magnetic-core memory
  - 1950s scientific workhorse

### wiki-ibm-system-360 — IBM System/360
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/IBM_System/360
- **Facts used:**
  - Announced 7 April 1964
  - First compatible mainframe family, 32-bit architecture
  - Core memory 8 KB – 9 MB
  - OSes DOS/360, OS/360, TSS/360

### wiki-pdp-8 — PDP-8
- **Publisher:** Wikipedia (citing DEC)
- **URL:** https://en.wikipedia.org/wiki/PDP-8
- **Facts used:**
  - Released 22 March 1965, first computer under $20,000 ($18,500)
  - 12-bit word, diode-transistor (Straight-8), core memory
  - 50,000+ units sold

### wiki-transistor — Transistor
- **Publisher:** Wikipedia (citing Bell Labs / Nobel Foundation)
- **URL:** https://en.wikipedia.org/wiki/Transistor
- **Facts used:**
  - First working transistor demonstrated December 1947 (Bell Labs)
  - Bardeen, Brattain, Shockley; 1956 Nobel Prize
  - Replaced vacuum tubes

### wiki-integrated-circuit — Integrated circuit
- **Publisher:** Wikipedia (citing TI / Fairchild / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Integrated_circuit
- **Facts used:**
  - Kilby (TI) first working IC, September 1958
  - Noyce (Fairchild) silicon planar process, 1959
  - Whole circuit on one die

### wiki-mosfet — MOSFET
- **Publisher:** Wikipedia (citing Bell Labs / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Field-effect_transistor
- **Facts used:**
  - Insulated-gate field-effect transistor (MOSFET)
  - Developed at Bell Labs, early 1960s
  - Basis of CMOS and modern digital logic

### wiki-magnetic-core-memory — Magnetic core memory
- **Publisher:** Wikipedia (citing computer-history references)
- **URL:** https://en.wikipedia.org/wiki/Magnetic_core_memory
- **Facts used:**
  - Standard main memory 1955 – 1975
  - Ferrite rings, non-volatile, ~10 µs access
  - Bulky, costly, hard to scale

### wiki-dram — DRAM
- **Publisher:** Wikipedia (citing TI / Intersil)
- **URL:** https://en.wikipedia.org/wiki/Dynamic_random-access_memory
- **Facts used:**
  - Demonstrated 1966 (Kilby) / 1967 (Klein)
  - 1 transistor + 1 capacitor per bit, dynamic (needs refresh)
  - Replaced core memory from early 1970s

### wiki-ibm-1301 — IBM 1301 / 350 (RAMAC)
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/History_of_IBM_magnetic_disk_drives
- **Facts used:**
  - IBM 350 Disk Storage File announced September 1956 (305 RAMAC)
  - First commercial hard disk drive
  - ~5 MB, 50 platters, 24-inch, ~600 ms seek, ~$34,500, ~1 tonne

### wiki-ibm-2314 — IBM 2314
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/IBM_2314
- **Facts used:**
  - Introduced 1966, 23.14 MB
  - ~95 ms average access
  - First high-performance disk for commercial workloads

### wiki-packet-switching — Packet switching
- **Publisher:** Wikipedia (citing RAND / NPL / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Packet_switching
- **Facts used:**
  - Proposed by Paul Baran (RAND) 1964 and Donald Davies (NPL) 1965
  - Messages split into packets, routed independently
  - Basis of IP routing / the Internet

### wiki-arpnet — ARPANET
- **Publisher:** Wikipedia (citing ARPA / BBN / IEEE)
- **URL:** https://en.wikipedia.org/wiki/ARPANET
- **Facts used:**
  - First message 29 October 1969 (UCLA to UCSB)
  - Four initial nodes, 55 kbit/s links
  - IMPs by Bolt Beranek & Newman, NCP protocol

### wiki-gm-naa-io — GM-NAA I/O
- **Publisher:** Wikipedia (citing CHM / IEEE)
- **URL:** https://en.wikipedia.org/wiki/GM-NAA_I/O
- **Facts used:**
  - Created 1956, first operating system for the IBM 704
  - Batch processing / job monitor
  - Patrick (GM), Mock (North American Aviation); ~40 installations

### wiki-ctss — Compatible Time-Sharing System
- **Publisher:** Wikipedia (citing MIT / CHM)
- **URL:** https://en.wikipedia.org/wiki/Compatible_Time-Sharing_System
- **Facts used:**
  - First practical time-sharing OS, running by 1961
  - MIT Project MAC, GE 645 (7090-compatible)
  - Ancestor of MULTICS and Unix

### wiki-unix — Unix
- **Publisher:** Wikipedia (citing Bell Labs / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Unix
- **Facts used:**
  - Development began 1969 at Bell Labs (Thompson, Ritchie)
  - Multi-user, portable; rewritten in C (1972)
  - Ancestor of Linux, BSD, macOS

### wiki-spacewar — Spacewar!
- **Publisher:** Wikipedia (citing MIT / CHM)
- **URL:** https://en.wikipedia.org/wiki/Spacewar!
- **Facts used:**
  - 1962, MIT, Steve Russell et al.
  - First interactive computer game, DEC PDP-1
  - Real-time 2D vector graphics on a CRT

### wiki-sketchpad — Sketchpad
- **Publisher:** Wikipedia (citing MIT / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Sketchpad
- **Facts used:**
  - 1963, Ivan Sutherland (MIT PhD project)
  - First interactive computer-graphics program
  - Light pen, constraint-based editing, GUI ancestor

### wiki-tektronix-4014 — Tektronix 4014
- **Publisher:** Wikipedia (citing Tektronix)
- **URL:** https://en.wikipedia.org/wiki/Tektronix_4014
- **Facts used:**
  - 1968, first widely used high-speed graphics display terminal
  - Storage-tube CRT, 1024×1024 vector

### wiki-ibm-2250 — IBM 2250
- **Publisher:** Wikipedia (citing IBM)
- **URL:** https://en.wikipedia.org/wiki/IBM_2250
- **Facts used:**
  - 1969, first widely used direct-manipulation display terminal
  - 1024×1024 green-phosphor CRT, cursor + buttons

### wiki-mouse — Computer mouse
- **Publisher:** Wikipedia (citing SRI / CHM / IEEE)
- **URL:** https://en.wikipedia.org/wiki/Computer_mouse
- **Facts used:**
  - Invented by Douglas Engelbart (SRI), mid-1960s (~1964), patent 1967
  - Wooden box, two orthogonal wheels, ball
  - Standard desktop pointing input

### wiki-nls-demo — oN-Line System
- **Publisher:** Wikipedia (citing SRI / CHM)
- **URL:** https://en.wikipedia.org/wiki/oN-Line_System
- **Facts used:**
  - Engelbart "Mother of All Demos", 9 December 1968
  - NLS / oN-Line System
  - Introduced mouse, hypertext, windows, video conferencing

## Sources still needed (research backlog)

- [x] Pentium III / Pentium 4 (Intel) — `wiki-pentium-3`, `wiki-pentium-4`
- [ ] AMD K6 / Phenom / Zen / Ryzen (AMD press) — Athlon line done: `wiki-amd-athlon`, `wiki-amd-athlon-xp`, `wiki-amd-athlon-64`
- [x] NVIDIA GeForce 256 (NVIDIA) — `wiki-geforce-256`, `wiki-geforce-3`, `wiki-geforce-8800` (RIVA/TNT still missing)
- [x] DRAM beyond EDO/SDRAM: DDR, DDR2, DDR3 (JEDEC / Intel / Micron) — `wiki-ddr-sdram`, `wiki-ddr2`, `wiki-ddr3` (DDR4/DDR5 still missing)
- [ ] NVMe (NVMe.org)
- [ ] Token Ring (IEEE 802.5)
- [x] Wi-Fi 802.11 b/g (IEEE / Wi-Fi Alliance) — `wiki-802-11b`, `wiki-802-11g` (802.11a/n still missing)
- [ ] Windows NT 4.0 / OS/2 2.x (Microsoft, IBM) — Win98/2000/XP done: `wiki-windows-98`, `wiki-windows-2000`, `wiki-windows-xp`
- [ ] "Typical PC" configurations per year (PC Magazine, AnandTech,
      contemporaneous reviews)
- [ ] Inflation conversion basis (BLS CPI calculator)
- [ ] Creative Sound Blaster line beyond AWE32 — Audigy done: `wiki-audigy`
