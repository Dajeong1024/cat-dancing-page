import { DANCE_MODES } from '../hooks/useAnimation';

export default function AnimationControls({
  isDancing,
  mode,
  speed,
  onToggle,
  onSelectMode,
  onChangeSpeed,
}) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 컨트롤">
      <button
        className={`toggle-btn ${isDancing ? 'is-on' : 'is-off'}`}
        onClick={onToggle}
        aria-pressed={isDancing}
      >
        {isDancing ? '⏸  정지' : '▶  시작'}
      </button>

      <div className="mode-group" role="radiogroup" aria-label="댄스 모드">
        {DANCE_MODES.map((m) => (
          <button
            key={m.id}
            className={`mode-btn ${mode === m.id ? 'is-active' : ''}`}
            role="radio"
            aria-checked={mode === m.id}
            onClick={() => onSelectMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <label className="speed-group">
        <span>속도 × {speed.toFixed(1)}</span>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={speed}
          onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
          aria-label="애니메이션 속도 조절"
        />
      </label>
    </div>
  );
}
