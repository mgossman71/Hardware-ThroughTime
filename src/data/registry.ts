import type { HistoricalEvent } from '../types/historical-event';

/**
 * Central event registry.
 *
 * Every domain data file under `src/data/**` exports an array of
 * `HistoricalEvent`. This module aggregates them and provides lookup
 * helpers used across the site.
 *
 * As more data files are added during the research phase, they are
 * registered here.
 */
import { EARLY_CPUS } from './cpu/early';
import { COMPUTERS_FOUNDATIONS } from './computers/foundations-era';
import { CPUS_FOUNDATIONS } from './cpu/foundations-era';
import { RAM_FOUNDATIONS } from './ram/foundations-era';
import { STORAGE_FOUNDATIONS } from './storage/foundations-era';
import { NETWORK_FOUNDATIONS } from './network/foundations-era';
import { OS_FOUNDATIONS } from './os/foundations-era';
import { GRAPHICS_FOUNDATIONS } from './graphics/foundations-era';
import { DISPLAYS_FOUNDATIONS } from './displays/foundations-era';
import { INTERFACES_FOUNDATIONS } from './interfaces/foundations-era';
import { COMPUTERS_1970S } from './computers/computers-1970s';
import { COMPUTERS_1980S } from './computers/computers-1980s';
import { CPUs_1980S } from './cpu/1980s';
import { CPUs_1990S } from './cpu/1990s';
import { COMPUTERS_1990S } from './computers/computers-1990s';
import { GRAPHICS_MULTIMEDIA } from './graphics/multimedia-era';
import { STORAGE_MULTIMEDIA } from './storage/multimedia-era';
import { OS_WINDOWS } from './os/windows-line';
import { MOTHERBOARDS_MULTIMEDIA } from './motherboards/buses';
import { RAM_MULTIMEDIA } from './ram/multimedia-era';
import { NETWORK_MULTIMEDIA } from './network/multimedia-era';
import { AUDIO_MULTIMEDIA } from './audio/multimedia-era';
import { CPUs_PERFORMANCE } from './cpu/performance-era';
import { COMPUTERS_2000S } from './computers/computers-2000s';
import { GRAPHICS_PERFORMANCE } from './graphics/performance-era';
import { RAM_PERFORMANCE } from './ram/performance-era';
import { NETWORK_PERFORMANCE } from './network/performance-era';
import { WIFI_PERFORMANCE } from './wifi/performance-era';
import { STORAGE_PERFORMANCE } from './storage/performance-era';
import { MOTHERBOARDS_PERFORMANCE } from './motherboards/performance-era';
import { DISPLAYS_PERFORMANCE } from './displays/performance-era';
import { INTERFACES_PERFORMANCE } from './interfaces/performance-era';
import { CPUs_MULTICORE } from './cpu/multicore-era';
import { COMPUTERS_2010S } from './computers/computers-2010s';
import { GRAPHICS_MULTICORE } from './graphics/multicore-era';
import { RAM_MULTICORE } from './ram/multicore-era';
import { NETWORK_MULTICORE } from './network/multicore-era';
import { STORAGE_MULTICORE } from './storage/multicore-era';
import { MOTHERBOARDS_MULTICORE } from './motherboards/multicore-era';
import { DISPLAYS_MULTICORE } from './displays/multicore-era';
import { INTERFACES_MULTICORE } from './interfaces/multicore-era';
import { CPUS_MODERN } from './cpu/modern-era';
import { GRAPHICS_MODERN } from './graphics/modern-era';
import { RAM_MODERN } from './ram/modern-era';
import { STORAGE_MODERN } from './storage/modern-era';
import { COMPUTERS_MODERN } from './computers/modern-era';
import { MOTHERBOARDS_MODERN } from './motherboards/modern-era';
import { NETWORK_MODERN } from './network/modern-era';
import { WIFI_MODERN } from './wifi/modern-era';
import { OS_MODERN } from './os/modern-era';
import { DISPLAYS_MODERN } from './displays/modern-era';
import { INTERFACES_MODERN } from './interfaces/modern-era';

const ALL: HistoricalEvent[] = [
  ...COMPUTERS_FOUNDATIONS,
  ...CPUS_FOUNDATIONS,
  ...RAM_FOUNDATIONS,
  ...STORAGE_FOUNDATIONS,
  ...NETWORK_FOUNDATIONS,
  ...OS_FOUNDATIONS,
  ...GRAPHICS_FOUNDATIONS,
  ...DISPLAYS_FOUNDATIONS,
  ...INTERFACES_FOUNDATIONS,
  ...EARLY_CPUS,
  ...COMPUTERS_1970S,
  ...COMPUTERS_1980S,
  ...CPUs_1980S,
  ...CPUs_1990S,
  ...COMPUTERS_1990S,
  ...GRAPHICS_MULTIMEDIA,
  ...STORAGE_MULTIMEDIA,
  ...OS_WINDOWS,
  ...MOTHERBOARDS_MULTIMEDIA,
  ...RAM_MULTIMEDIA,
  ...NETWORK_MULTIMEDIA,
  ...AUDIO_MULTIMEDIA,
  ...CPUs_PERFORMANCE,
  ...COMPUTERS_2000S,
  ...GRAPHICS_PERFORMANCE,
  ...RAM_PERFORMANCE,
  ...NETWORK_PERFORMANCE,
  ...WIFI_PERFORMANCE,
  ...STORAGE_PERFORMANCE,
  ...MOTHERBOARDS_PERFORMANCE,
  ...DISPLAYS_PERFORMANCE,
  ...INTERFACES_PERFORMANCE,
  ...CPUs_MULTICORE,
  ...COMPUTERS_2010S,
  ...GRAPHICS_MULTICORE,
  ...RAM_MULTICORE,
  ...NETWORK_MULTICORE,
  ...STORAGE_MULTICORE,
  ...MOTHERBOARDS_MULTICORE,
  ...DISPLAYS_MULTICORE,
  ...INTERFACES_MULTICORE,
  ...CPUS_MODERN,
  ...GRAPHICS_MODERN,
  ...RAM_MODERN,
  ...STORAGE_MODERN,
  ...COMPUTERS_MODERN,
  ...MOTHERBOARDS_MODERN,
  ...NETWORK_MODERN,
  ...WIFI_MODERN,
  ...OS_MODERN,
  ...DISPLAYS_MODERN,
  ...INTERFACES_MODERN,
];

/** Sorted by year ascending, then title. Stable for rendering. */
export const ALL_EVENTS: HistoricalEvent[] = [...ALL].sort(
  (a, b) => a.year - b.year || a.title.localeCompare(b.title),
);

const BY_ID = new Map(ALL_EVENTS.map((e) => [e.id, e]));

export function getEvent(id: string): HistoricalEvent | undefined {
  return BY_ID.get(id);
}
