import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { App } from '../App';

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
});
