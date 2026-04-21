import Cat from '../assets/images/Cat';

export default function DancingCat({ isDancing, mode, speed }) {
  const stageClass = [
    'cat-stage',
    isDancing ? 'is-dancing' : 'is-paused',
    `mode-${mode}`,
  ].join(' ');

  const durationStyle = {
    '--dance-speed': `${1 / speed}`,
  };

  return (
    <div className={stageClass} style={durationStyle}>
      <div className="stage-glow" aria-hidden="true" />

      <div className="notes" aria-hidden="true">
        <span className="note note-1">♪</span>
        <span className="note note-2">♫</span>
        <span className="note note-3">♬</span>
        <span className="note note-4">♩</span>
        <span className="note note-5">✨</span>
        <span className="note note-6">★</span>
      </div>

      <div className="cat-wrapper">
        <div className="cat-shadow" aria-hidden="true" />
        <Cat className="cat-svg" />
      </div>
    </div>
  );
}
