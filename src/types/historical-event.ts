/**
 * Core data model for the site.
 *
 * Everything historical — CPUs, GPUs, PCs, memory, storage, OSes, standards —
 * is expressed as a `HistoricalEvent` so the timeline, gallery, comparisons
 * and "typical PC" feature can all consume the same structured source.
 *
 * Data lives in `src/data/**` as small, domain-scoped TS modules. Components
 * never hardcode historical facts.
 */

/** The 11 parallel technology tracks (see spec §3). */
export type TrackId =
  | 'computers'
  | 'cpus'
  | 'ram'
  | 'graphics'
  | 'storage'
  | 'motherboards'
  | 'networking'
  | 'wifi'
  | 'os'
  | 'displays'
  | 'interfaces';

export interface TrackDefinition {
  id: TrackId;
  /** Short label shown on the timeline lane and in filters. */
  label: string;
  /** One-line description of what this track covers. */
  description: string;
  /** Accent color (CSS color) used for this lane's markers. */
  accent: string;
}

/**
 * A single historical event / product / standard.
 *
 * `specs` holds structured, comparable fields (see SpecValue). Free text goes
 * in `summary` / `detailedDescription` / `significance`.
 */
export interface HistoricalEvent {
  /** Globally unique id, kebab-case, e.g. "ibm-pc-5150". */
  id: string;
  /** Publication / introduction year (AD). Use the year it was announced or shipped, whichever is more commonly cited. */
  year: number;
  /** More precise date if well documented, e.g. "1981-08-12". Omit if only year is reliable. */
  exactDate?: string;
  /** Primary track this event belongs to. */
  track: TrackId;
  title: string;
  /** 1–2 sentence "what is this" description. */
  summary: string;
  /** Longer explanation: why it mattered, what it enabled, what it replaced. */
  detailedDescription: string;
  /** Manufacturer, standards body, or institution responsible. */
  manufacturer: string;
  /** Structured, machine-comparable specifications. Keep units in the value or in a `unit` key. */
  specs: Record<string, number | string>;
  /** The "why this matters" narrative — bottleneck solved, what became possible. */
  significance: string;
  /** Optional image references (see ImageRef). */
  images?: ImageRef[];
  /** ids into `src/data/sources.ts` that back this entry's claims. */
  sourceIds: string[];
  /** ids of related HistoricalEvents (cross-links, predecessor/successor, competitors). */
  relatedEventIds?: string[];
  /**
   * True when a claim in this entry could not be verified from a reliable
   * source. Such entries should be flagged in the UI.
   */
  unverified?: boolean;
}

/**
 * A forward-looking projection for a year AFTER the Modern era (2027+).
 *
 * Kept deliberately separate from `HistoricalEvent` to preserve the site's
 * "no invented facts" policy: projections are estimates grounded in published
 * vendor roadmaps and standards-body timelines, are rendered in a distinct
 * "Projections" band, and are never counted as historical record.
 */
export type ProjectionConfidence = 'high' | 'medium' | 'low';

export interface Projection {
  /** Globally unique id, kebab-case, prefixed with "proj-". */
  id: string;
  /** Projected year (strictly after the Modern era's end year, 2026). */
  year: number;
  /** Primary track this projection belongs to (same tracks as events). */
  track: TrackId;
  title: string;
  /** 1–2 sentence "what this is expected to be" description. */
  summary: string;
  /** Longer explanation of the roadmap basis and what landing it would mean. */
  detailedDescription: string;
  /** Manufacturer or standards body the projection is attributed to. */
  manufacturer: string;
  /** Best-known specifications at projection time (structured, comparable). */
  specs: Record<string, number | string>;
  /** What this projection would matter for, if it lands. */
  significance: string;
  /** Confidence in the estimate (drives the UI badge). */
  confidence: ProjectionConfidence;
  /** The published basis (vendor roadmap / standards timeline) for the estimate. */
  basis: string;
  /** ids into src/data/sources.ts backing the roadmap/standard this draws from. */
  sourceIds: string[];
  /** ids of related HistoricalEvents or Projections (cross-links). */
  relatedEventIds?: string[];
}

/**
 * Type guard: `Projection` requires `confidence` and `basis`, neither of
 * which can exist on a `HistoricalEvent`. Use this instead of ad-hoc
 * `'confidence' in x` checks.
 */
export function isProjection(item: HistoricalEvent | Projection): item is Projection {
  return 'confidence' in item && 'basis' in item;
}

/**
 * An image that can be attached to an event. Only include images with a
 * verifiable license/attribution. Prefer:
 *  - manufacturer press images with reuse rights,
 *  - Computer History Museum / Wikimedia Commons images with permissive licenses,
 *  - clearly-labelled SVG illustrations or CSS recreations (kind: 'diagram').
 */
export interface ImageRef {
  /** Absolute URL (external) or public-path (e.g. "/img/..."). */
  url: string;
  /** Accessible description. Required — images without alt text are a bug. */
  alt: string;
  /** Where the image came from. */
  attribution: string;
  /** License, e.g. "CC BY-SA 4.0", "public domain", "manufacturer press release". */
  license: string;
  /**
   * 'photo' = a real photograph of the actual hardware,
   * 'diagram' = an illustration/SVG/CSS recreation (not the real object),
   * 'render' = a 3D render.
   * The UI labels diagrams clearly so we never misrepresent an illustration as a photo.
   */
  kind: 'photo' | 'diagram' | 'render';
}
/**
 * A decade-scale era used for theming and narrative.
 * `theme` keys map to CSS custom properties in `styles/era-themes.css`.
 */
export interface Era {
  id: string;
  /** Inclusive start year. */
  startYear: number;
  /** Inclusive end year. */
  endYear: number;
  /** Display name, e.g. "Multimedia PC". */
  name: string;
  /** Short narrative hook for the era. */
  tagline: string;
  /** Longer description shown in the era detail view. */
  description: string;
  /** CSS custom-property overrides (accent, background tint, etc.). */
  theme: {
    /** Primary accent color. */
    accent: string;
    /** Secondary accent (highlights, links). */
    accentSecondary: string;
    /** Background tint layered over the base dark. */
    surfaceTint: string;
    /** Optional scanline intensity 0..1 (subtle, disabled under reduced-motion). */
    scanline: number;
  };
  /** Representative events in this era (ids) — drives the era's "highlights". */
  highlightEventIds: string[];
}

/** A source reference. `docs/research-sources.md` is the human-readable twin of this file. */
export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  /** The specific facts drawn from this source (used by data entries). */
  factsUsed: string[];
  /** When the source was last consulted. */
  accessed: string;
}

/**
 * A representative consumer PC configuration for a given year.
 * Used by the "Typical PC Through Time" feature.
 *
 * Every field is nullable: many categories did not exist or were not part of
 * a typical config in a given year (e.g. no GPU as a discrete concept in 1977).
 */
export interface TypicalPc {
  year: number;
  /** Representative machine(s) or "what a buyer actually got that year". */
  referenceMachines: string[];
  cpu: {
    name: string;
    clockMhz: number | null;
    cores: number | null;
    note?: string;
  } | null;
  ram: {
    capacity: string; // e.g. "64 KB", "4 MB"
    technology: string; // e.g. "DRAM DIP", "72-pin SIMM", "DDR"
    note?: string;
  } | null;
  gpu: {
    name: string;
    videoMemory: string | null;
    maxResolution: string | null;
    colorDepth: string | null;
  } | null;
  storage: {
    primary: string; // e.g. "20 MB ST-506 HDD"
    optical?: string | null;
    note?: string;
  } | null;
  network: {
    technology: string;
    speed: string | null; // "10 Mbps", "56 Kbps"
  } | null;
  sound: string | null;
  display: {
    typicalResolution: string | null;
    colorDepth: string | null;
    note?: string;
  } | null;
  expansionBus: string | null;
  operatingSystem: string;
  priceUsd: number | null;
  priceInflatedUsd2025: number | null;
  /** CPI basis used for the inflation conversion. */
  inflationBasis?: string;
  /** Free-form caveats — configurations varied enormously year to year. */
  caveats?: string[];
  sourceIds: string[];
}

/** A component pool entry for the "Build a PC" feature. */
export interface EraComponent {
  id: string;
  track: TrackId; // usually cpus | graphics | ram | storage | os
  name: string;
  manufacturer: string;
  /** Inclusive availability window (the years this component was on sale). */
  availableFrom: number;
  availableTo: number;
  /** Key spec shown in the picker. */
  headlineSpec: string;
  notes?: string;
  sourceIds: string[];
}

