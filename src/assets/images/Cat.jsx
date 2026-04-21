export default function Cat({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="귀여운 댄싱 고양이"
    >
      <defs>
        <radialGradient id="catBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffd9a3" />
          <stop offset="100%" stopColor="#f0a860" />
        </radialGradient>
        <radialGradient id="catBelly" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fff5e6" />
          <stop offset="100%" stopColor="#ffe3bd" />
        </radialGradient>
        <radialGradient id="catCheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff9fbf" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff9fbf" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="cat-tail">
        <path
          d="M175 185 Q215 165 205 125 Q200 100 180 110"
          stroke="#e89a52"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      <ellipse cx="110" cy="205" rx="72" ry="42" fill="url(#catBody)" />
      <ellipse cx="110" cy="215" rx="48" ry="28" fill="url(#catBelly)" />

      <ellipse cx="78" cy="245" rx="14" ry="9" fill="#e89a52" />
      <ellipse cx="142" cy="245" rx="14" ry="9" fill="#e89a52" />

      <g className="cat-head">
        <path d="M62 88 L52 40 L96 70 Z" fill="#f0a860" />
        <path d="M56 45 L66 65 L78 55 Z" fill="#ff9fbf" />
        <path d="M158 88 L168 40 L124 70 Z" fill="#f0a860" />
        <path d="M164 45 L154 65 L142 55 Z" fill="#ff9fbf" />

        <circle cx="110" cy="110" r="60" fill="url(#catBody)" />

        <circle cx="88" cy="108" r="8" fill="#2b2b2b" />
        <circle cx="132" cy="108" r="8" fill="#2b2b2b" />
        <circle cx="90" cy="105" r="2.5" fill="#fff" />
        <circle cx="134" cy="105" r="2.5" fill="#fff" />

        <circle cx="78" cy="128" r="10" fill="url(#catCheek)" />
        <circle cx="142" cy="128" r="10" fill="url(#catCheek)" />

        <path d="M104 128 Q110 134 116 128" fill="#ff7d9b" />
        <path
          d="M100 132 Q110 142 120 132"
          fill="none"
          stroke="#2b2b2b"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <g stroke="#6b4423" strokeWidth="1.2" strokeLinecap="round">
          <line x1="70" y1="122" x2="50" y2="118" />
          <line x1="70" y1="128" x2="48" y2="130" />
          <line x1="150" y1="122" x2="170" y2="118" />
          <line x1="150" y1="128" x2="172" y2="130" />
        </g>
      </g>
    </svg>
  );
}
