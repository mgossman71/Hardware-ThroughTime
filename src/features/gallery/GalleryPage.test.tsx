import { render, screen, waitFor } from '@testing-library/react';
import { App } from '../../App';

function gotoGallery() {
  window.location.hash = '#/gallery';
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

describe('Gallery page', () => {
  it('renders one exhibit card per imaged event', async () => {
    render(<App />);
    gotoGallery();

    await waitFor(() => {
      expect(screen.getByText('Historical Hardware Exhibits')).toBeInTheDocument();
    });

    const cards = await screen.findAllByRole('article');
    expect(cards).toHaveLength(13);
  });

  it('labels illustrations distinctly from photos', async () => {
    render(<App />);
    gotoGallery();

    await waitFor(() => {
      expect(screen.getByText('Historical Hardware Exhibits')).toBeInTheDocument();
    });

    // Apple M1 is the one exhibit imaged as an illustration.
    const illustrations = await screen.findAllByText('Illustration');
    expect(illustrations).toHaveLength(1);
    expect(screen.getAllByText('Photo')).toHaveLength(12);
  });

  it('shows attribution, license, and a source link on every card', async () => {
    render(<App />);
    gotoGallery();

    await waitFor(() => {
      expect(screen.getByText('Historical Hardware Exhibits')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByText('source')).toHaveLength(13);
    });
    expect(screen.getAllByText(/via Wikimedia Commons/).length).toBeGreaterThanOrEqual(13);
  });

  it('keeps accessible alt text and timeline cross-links', async () => {
    render(<App />);
    gotoGallery();

    await waitFor(() => {
      expect(screen.getByAltText('An original 1977 Apple II at the Computer History Museum')).toBeInTheDocument();
    });

    expect(screen.getAllByText('view on timeline →')).toHaveLength(13);
  });
});