import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { App } from '../App';
import { ALL_EVENTS } from '../data/registry';
import { SOURCES } from '../data/sources';
import { PROJECTIONS } from '../data/projections';

describe('App shell + timeline', () => {
  it('renders the site header and timeline with seeded events', async () => {
    render(<App />);

    expect(
      screen.getByRole('link', { name: /hardware.*through.*time/i }),
    ).toBeInTheDocument();

    // Timeline page is lazy — wait for it.
    await waitFor(() => {
      expect(screen.getByText('Computer Hardware Through Time')).toBeInTheDocument();
    });

    // Seeded events appear (desktop canvas or mobile list).
    await waitFor(() => {
      expect(screen.getAllByText(/IBM PC \(5150\)/).length).toBeGreaterThan(0);
    });
    expect(screen.getAllByText(/Altair 8800/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Commodore 64/).length).toBeGreaterThan(0);
  });

  it('shows the detail panel when an event is selected', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getAllByText(/IBM PC \(5150\)/).length).toBeGreaterThan(0);
    });

    // Select the IBM PC event via any rendered button containing its title.
    const buttons = screen
      .getAllByRole('button')
      .filter((b) => b.textContent?.includes('IBM PC (5150)'));
    expect(buttons.length).toBeGreaterThan(0);
    fireEvent.click(buttons[0]);

    await waitFor(() => {
      expect(screen.getByText('Why it mattered')).toBeInTheDocument();
    });
    expect(screen.getByText(/open architecture/i)).toBeInTheDocument();
  });

  it('toggles a track off', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getAllByText(/Altair 8800/).length).toBeGreaterThan(0);
    });

    const cpusChip = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.trim() === 'CPUs');
    expect(cpusChip).toBeDefined();
    fireEvent.click(cpusChip!);

    // Intel 4004 (a CPU) should no longer be rendered.
    await waitFor(() => {
      expect(screen.queryAllByText(/Intel 4004/).length).toBe(0);
    });
    // A non-CPU event should still be visible.
    expect(screen.getAllByText(/Altair 8800/).length).toBeGreaterThan(0);
  });

  it('renders all seven era bands plus the focus indicator', async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      expect(screen.getAllByText(/IBM PC \(5150\)/).length).toBeGreaterThan(0);
    });

    const bands = container.querySelectorAll('.tl-canvas__era');
    expect(bands.length).toBe(7);

    // All seven eras are now populated, so none should be flagged empty.
    expect(container.querySelectorAll('.tl-canvas__era--empty').length).toBe(0);
    expect(screen.queryAllByText(/no entries yet/i).length).toBe(0);

    // The "you are here" indicator exists and shows the initial focus year.
    const focus = container.querySelector<HTMLElement>('.tl-canvas__focus');
    expect(focus).not.toBeNull();
    expect(focus!.textContent).toContain('1981');
  });

  it('moves the focus indicator when switching eras', async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      expect(screen.getAllByText(/IBM PC \(5150\)/).length).toBeGreaterThan(0);
    });

    const focus = container.querySelector<HTMLElement>('.tl-canvas__focus');
    expect(focus).not.toBeNull();
    const before = focus!.style.left;

    // Click the "Multimedia PC" era chip (1985–1997) — a band that previously
    // did nothing on the canvas.
    const chip = [...container.querySelectorAll<HTMLButtonElement>('.era-chip')].find((b) =>
      b.textContent?.includes('Multimedia PC'),
    );
    expect(chip).toBeDefined();
    fireEvent.click(chip!);

    // Indicator moved and now shows the era's mid year (1991).
    expect(focus!.style.left).not.toBe(before);
    expect(focus!.textContent).toContain('1991');

    // The Multimedia PC era band is now the focused one.
    const focusedBand = container.querySelector('.tl-canvas__era--focused');
    expect(focusedBand?.textContent).toContain('Multimedia PC');
  });
});

describe('data integrity', () => {
  it('has unique event ids', () => {
    const ids = ALL_EVENTS.map((e) => e.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dupes).toEqual([]);
  });

  it('has unique source ids', () => {
    const ids = SOURCES.map((s) => s.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dupes).toEqual([]);
  });

  it('references only known source ids', () => {
    const known = new Set(SOURCES.map((s) => s.id));
    const missing = ALL_EVENTS.flatMap((e) => e.sourceIds.filter((id) => !known.has(id)));
    expect(missing).toEqual([]);
  });

  it('references only known event ids in relatedEventIds', () => {
    const known = new Set(ALL_EVENTS.map((e) => e.id));
    const missing = ALL_EVENTS.flatMap((e) =>
      (e.relatedEventIds ?? []).filter((id) => !known.has(id)),
    );
    expect(missing).toEqual([]);
  });

  it('has a solid cohort of Foundations era events (1940–1969)', () => {
    const inEra = ALL_EVENTS.filter((e) => e.year >= 1940 && e.year <= 1969);
    expect(inEra.length).toBeGreaterThanOrEqual(20);
    // Every in-era event carries at least one resolvable source.
    for (const e of inEra) {
      expect(e.sourceIds.length).toBeGreaterThan(0);
    }
    // Every track with legitimate pre-1970 content now has an entry.
    const tracks = new Set(inEra.map((e) => e.track));
    expect(tracks.has('computers')).toBe(true);
    expect(tracks.has('cpus')).toBe(true);
    expect(tracks.has('ram')).toBe(true);
    expect(tracks.has('storage')).toBe(true);
    expect(tracks.has('networking')).toBe(true);
    expect(tracks.has('os')).toBe(true);
    expect(tracks.has('graphics')).toBe(true);
    expect(tracks.has('displays')).toBe(true);
    expect(tracks.has('interfaces')).toBe(true);
  });

  it('has a solid cohort of Multimedia PC era events (1985–1997)', () => {
    const inEra = ALL_EVENTS.filter((e) => e.year >= 1985 && e.year <= 1997);
    expect(inEra.length).toBeGreaterThanOrEqual(20);
    // Every in-era event carries at least one resolvable source.
    for (const e of inEra) {
      expect(e.sourceIds.length).toBeGreaterThan(0);
    }
  });

  it('has a solid cohort of Performance Race era events (1998–2009)', () => {
    const inEra = ALL_EVENTS.filter((e) => e.year >= 1998 && e.year <= 2009);
    expect(inEra.length).toBeGreaterThanOrEqual(25);
    // Every in-era event carries at least one resolvable source.
    for (const e of inEra) {
      expect(e.sourceIds.length).toBeGreaterThan(0);
    }
    // Both previously-empty tracks now have content.
    const tracks = new Set(inEra.map((e) => e.track));
    expect(tracks.has('wifi')).toBe(true);
    expect(tracks.has('displays')).toBe(true);
  });

  it('has a solid cohort of Multi-Core era events (2010–2019)', () => {
    const inEra = ALL_EVENTS.filter((e) => e.year >= 2010 && e.year <= 2019);
    expect(inEra.length).toBeGreaterThanOrEqual(24);
    // Every in-era event carries at least one resolvable source.
    for (const e of inEra) {
      expect(e.sourceIds.length).toBeGreaterThan(0);
    }
    // The era spans its signature tracks: CPUs, GPUs, RAM, storage, I/O.
    const tracks = new Set(inEra.map((e) => e.track));
    expect(tracks.has('cpus')).toBe(true);
    expect(tracks.has('graphics')).toBe(true);
    expect(tracks.has('ram')).toBe(true);
    expect(tracks.has('storage')).toBe(true);
    expect(tracks.has('interfaces')).toBe(true);
    expect(tracks.has('networking')).toBe(true);
  });

  it('has a solid cohort of Modern era events (2020–2026)', () => {
    const inEra = ALL_EVENTS.filter((e) => e.year >= 2020 && e.year <= 2026);
    expect(inEra.length).toBeGreaterThanOrEqual(30);
    // Every in-era event carries at least one resolvable source.
    for (const e of inEra) {
      expect(e.sourceIds.length).toBeGreaterThan(0);
    }
    // The Modern era is the only era that spans all eleven tracks.
    const tracks = new Set(inEra.map((e) => e.track));
    expect(tracks.has('cpus')).toBe(true);
    expect(tracks.has('graphics')).toBe(true);
    expect(tracks.has('ram')).toBe(true);
    expect(tracks.has('storage')).toBe(true);
    expect(tracks.has('computers')).toBe(true);
    expect(tracks.has('motherboards')).toBe(true);
    expect(tracks.has('networking')).toBe(true);
    expect(tracks.has('wifi')).toBe(true);
    expect(tracks.has('os')).toBe(true);
    expect(tracks.has('displays')).toBe(true);
    expect(tracks.has('interfaces')).toBe(true);
  });

  it('projections form a clean, sourced, future cohort (2027+)', () => {
    expect(PROJECTIONS.length).toBeGreaterThanOrEqual(5);
    const sourceIds = new Set(SOURCES.map((s) => s.id));
    for (const p of PROJECTIONS) {
      expect(p.year).toBeGreaterThanOrEqual(2027);
      expect(p.sourceIds.length).toBeGreaterThan(0);
      for (const id of p.sourceIds) {
        expect(sourceIds.has(id)).toBe(true);
      }
      expect(['high', 'medium', 'low']).toContain(p.confidence);
      expect(p.basis.length).toBeGreaterThan(0);
    }
  });

  it('new Modern-era backfill events resolve to real sources', () => {
    const byId = new Map(ALL_EVENTS.map((e) => [e.id, e]));
    const sourceIds = new Set(SOURCES.map((s) => s.id));
    for (const id of ['intel-panther-lake', 'amd-epyc-venice', 'hbm4', 'amd-rdna-4-rx9070']) {
      const e = byId.get(id);
      expect(e).toBeDefined();
      expect(e!.sourceIds.length).toBeGreaterThan(0);
      for (const sid of e!.sourceIds) {
        expect(sourceIds.has(sid)).toBe(true);
      }
    }
  });

  it('renders the projections band and dashed projection nodes by default', async () => {
    const { container } = render(<App />);
    await waitFor(() => {
      expect(screen.getAllByText(/IBM PC \(5150\)/).length).toBeGreaterThan(0);
    });
    // The "Projections" control surfaces (era chip / toggle / band label).
    expect(screen.getAllByText(/Projections/i).length).toBeGreaterThan(0);
    // The distinct band: tinted zone + "present" divider + projection nodes.
    expect(container.querySelector('.tl-proj-zone')).not.toBeNull();
    expect(container.querySelector('.tl-proj-divider')).not.toBeNull();
    expect(container.querySelectorAll('.tl-event--projection').length).toBeGreaterThan(0);
  });

  it('every exactDate is ISO-ish (YYYY, YYYY-MM, or YYYY-MM-DD)', () => {
    for (const e of ALL_EVENTS) {
      if (e.exactDate !== undefined) {
        expect(e.exactDate).toMatch(/^\d{4}(-\d{2}){0,2}$/);
      }
    }
  });

  it('docs/research-sources.md mirrors every source id in sources.ts (and no extras)', () => {
    // vitest runs with the repo root as cwd (see the `npm test` script).
    const md = readFileSync('docs/research-sources.md', 'utf8');
    const mdIds = new Set([...md.matchAll(/^### (\S+) /gm)].map((m) => m[1]));
    for (const s of SOURCES) {
      expect(mdIds.has(s.id)).toBe(true);
    }
    // No orphan headings in the doc that sources.ts doesn't define.
    expect(mdIds.size).toBe(SOURCES.length);
  });
});
