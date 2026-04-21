import useVisitorCount from '../hooks/useVisitorCount';

export default function VisitorCounter() {
  const { total, myVisits, error } = useVisitorCount();

  return (
    <div className="visitor-counter" aria-live="polite">
      <div className="vc-card vc-total">
        <span className="vc-label">🌏 전체 방문자</span>
        <span className="vc-value">
          {error ? '—' : total === null ? '···' : total.toLocaleString()}
        </span>
      </div>
      <div className="vc-card vc-mine">
        <span className="vc-label">👋 내 방문</span>
        <span className="vc-value">{myVisits}번째</span>
      </div>
    </div>
  );
}
