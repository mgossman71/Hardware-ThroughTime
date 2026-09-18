import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { App } from '../../App';

function gotoTypicalPc() {
  window.location.hash = '#/typical-pc';
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

describe('Typical PC page', () => {
  it('renders the year rail and the default configuration card', async () => {
    render(<App />);
    gotoTypicalPc();

    await waitFor(() => {
      expect(screen.getByText(/What a “normal” PC looked like each year/i)).toBeInTheDocument();
    });

    // Era-grouped milestone year rail.
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBeGreaterThanOrEqual(20);

    // Spec labels on the default card.
    await waitFor(() => {
      expect(screen.getByText('CPU')).toBeInTheDocument();
    });
    expect(screen.getByText('Memory')).toBeInTheDocument();
    expect(screen.getByText('Graphics')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
  });

  it('switching the year updates the card', async () => {
    render(<App />);
    gotoTypicalPc();

    await waitFor(() => {
      expect(screen.getByText(/What a “normal” PC looked like each year/i)).toBeInTheDocument();
    });

    // Default year (1981) shows the 8088.
    await waitFor(() => {
      expect(screen.getByText(/Intel 8088/)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('radio', { name: '1995' }));

    await waitFor(() => {
      expect(screen.getByText(/Pentium @ 90–133 MHz/)).toBeInTheDocument();
    });
    expect(screen.getByRole('radio', { name: '1995' })).toHaveAttribute('aria-checked', 'true');
  });
});