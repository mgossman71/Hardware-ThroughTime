import { describe, expect, it, vi } from 'vitest';
import { FOCUS_YEAR_EVENT, emitFocusYear, onFocusYear } from './focusYear';

describe('focusYear channel', () => {
  it('delivers the year to subscribers', () => {
    const handler = vi.fn();
    const off = onFocusYear(handler);
    emitFocusYear(2001);
    expect(handler).toHaveBeenCalledWith(2001);
    off();
  });

  it('stops delivering after unsubscribe', () => {
    const handler = vi.fn();
    const off = onFocusYear(handler);
    off();
    emitFocusYear(2002);
    expect(handler).not.toHaveBeenCalled();
  });

  it('ignores events without a numeric payload', () => {
    const handler = vi.fn();
    const off = onFocusYear(handler);
    window.dispatchEvent(new CustomEvent(FOCUS_YEAR_EVENT, { detail: 'not-a-year' }));
    window.dispatchEvent(new CustomEvent(FOCUS_YEAR_EVENT));
    expect(handler).not.toHaveBeenCalled();
    off();
  });
});