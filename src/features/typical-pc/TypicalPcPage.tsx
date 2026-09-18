import { useState } from 'react';
import { PageShell } from '../../components/PageShell';
import { ERAS } from '../../data/eras';
import { TYPICAL_PCS, typicalPcForYear } from '../../data/typical-pc';
import { DEFAULT_FOCUS_YEAR, emitFocusYear } from '../../app/focusYear';
import { TypicalPcCard } from './TypicalPcCard';
import './typical-pc.css';

/**
 * "Typical PC Through Time" — pick a milestone year, see what a mainstream
 * consumer desktop actually contained. Selecting a year also re-themes the
 * whole site to that era via the shared focus-year channel.
 */
export default function TypicalPcPage() {
  const [year, setYear] = useState<number>(DEFAULT_FOCUS_YEAR);
  const pc = typicalPcForYear(year);

  const select = (y: number) => {
    setYear(y);
    emitFocusYear(y);
  };

  // Group the milestone years under their era for the rail.
  const groups = ERAS.map((era) => ({
    era,
    years: TYPICAL_PCS.filter((p) => p.year >= era.startYear && p.year <= era.endYear),
  })).filter((g) => g.years.length > 0);

  return (
    <PageShell
      kicker="02 — A TYPICAL PC THROUGH TIME"
      title="What a “normal” PC looked like each year"
      lede="Pick a year and see a representative consumer configuration — CPU, RAM, graphics, storage, network, sound, display, OS, and price (with inflation context). Configurations varied significantly, so each entry lists the machines it is based on."
    >
      <nav className="tpc-rail" role="radiogroup" aria-label="Typical PC year">
        {groups.map(({ era, years }) => (
          <div className="tpc-rail__era" key={era.id}>
            <span className="tpc-rail__label mono">{era.name}</span>
            <div className="tpc-rail__years">
              {years.map((p) => (
                <button
                  key={p.year}
                  type="button"
                  role="radio"
                  aria-checked={p.year === pc.year}
                  className={p.year === pc.year ? 'tpc-year tpc-year--active' : 'tpc-year'}
                  onClick={() => select(p.year)}
                >
                  {p.year}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <TypicalPcCard pc={pc} />
    </PageShell>
  );
}