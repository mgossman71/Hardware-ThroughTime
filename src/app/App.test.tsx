import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { App } from '../App';
import { ALL_EVENTS } from '../data/registry';
import { SOURCES } from '../data/sources';

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

    // Eras without content are flagged as such (only Modern remains empty now).
    expect(container.querySelectorAll('.tl-canvas__era--empty').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/no entries yet/i).length).toBeGreaterThanOrEqual(1);

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
});
