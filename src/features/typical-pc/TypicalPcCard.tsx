import type { TypicalPc } from '../../types/historical-event';
import { eraForYear } from '../../data/eras';
import { emitFocusYear } from '../../app/focusYear';

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function Row({ label, value, note }: { label: string; value: string | null; note?: string }) {
  if (!value) return null;
  return (
    <div className="tpc-row">
      <dt className="mono">{label}</dt>
      <dd>
        {value}
        {note ? <span className="tpc-row__note"> — {note}</span> : null}
      </dd>
    </div>
  );
}

interface TypicalPcCardProps {
  pc: TypicalPc;
}

/**
 * Renders one year's representative configuration. Pure presentation:
 * all facts come from the `TypicalPc` record (see `src/data/typical-pc.ts`).
 */
export function TypicalPcCard({ pc }: TypicalPcCardProps) {
  const era = eraForYear(pc.year);
  const graphics = pc.gpu
    ? [
        pc.gpu.name,
        pc.gpu.videoMemory ? `${pc.gpu.videoMemory} VRAM` : null,
        pc.gpu.maxResolution ? `up to ${pc.gpu.maxResolution}` : null,
        pc.gpu.colorDepth ?? null,
      ]
        .filter(Boolean)
        .join(' · ')
    : null;

  return (
    <article className="tpc-card" aria-live="polite" aria-label={`Typical PC of ${pc.year}`}>
      <header className="tpc-card__head">
        <span className="tpc-card__year mono">{pc.year}</span>
        <span className="tpc-card__era">{era.name}</span>
        <a
          className="tpc-card__timeline mono"
          href="#/timeline"
          onClick={() => emitFocusYear(pc.year)}
        >
          view on timeline →
        </a>
      </header>

      <dl className="tpc-card__specs">
        <Row label="CPU" value={pc.cpu?.name ?? null} note={pc.cpu?.note} />
        <Row
          label="Memory"
          value={pc.ram ? `${pc.ram.capacity} · ${pc.ram.technology}` : null}
          note={pc.ram?.note}
        />
        <Row label="Graphics" value={graphics} />
        <Row
          label="Storage"
          value={pc.storage ? [pc.storage.primary, pc.storage.optical].filter(Boolean).join(' + ') : null}
          note={pc.storage?.note}
        />
        <Row
          label="Networking"
          value={pc.network ? [pc.network.technology, pc.network.speed].filter(Boolean).join(' · ') : null}
        />
        <Row label="Sound" value={pc.sound} />
        <Row
          label="Display"
          value={
            pc.display
              ? [pc.display.typicalResolution, pc.display.colorDepth].filter(Boolean).join(' · ')
              : null
          }
          note={pc.display?.note}
        />
        <Row label="Expansion" value={pc.expansionBus} />
        <Row label="System" value={pc.operatingSystem} />
      </dl>

      <div className="tpc-card__price">
        {pc.priceUsd != null ? (
          <p>
            <strong className="mono">{usd.format(pc.priceUsd)}</strong>
            {pc.priceInflatedUsd2024 != null ? (
              <>
                {' '}
                ≈ <strong className="mono">{usd.format(pc.priceInflatedUsd2024)}</strong> in 2024
                dollars
              </>
            ) : null}
          </p>
        ) : null}
        {pc.inflationBasis ? <p className="tpc-note mono">// {pc.inflationBasis}</p> : null}
      </div>

      <p className="tpc-based mono">
        // based on: {pc.referenceMachines.join(' · ')}
      </p>

      {pc.caveats && pc.caveats.length > 0 ? (
        <ul className="tpc-caveats">
          {pc.caveats.map((c) => (
            <li key={c}>
              <span className="mono">{'// '}</span>
              {c}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}