// Orijinal, telifsiz çizimler (gerçek fotoğraflar gelene kadar). Renkler CSS değişkenlerinden gelir.
type Kind = 'sabit' | 'surme' | 'plise' | 'rulo' | 'panjur';

export default function Illustration({ kind, label }: { kind: Kind; label: string }) {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label={label} className="ill">
      <title>{label}</title>
      {/* duvar + pencere kasası */}
      <rect x="0" y="0" width="320" height="200" className="ill-wall" />
      <rect x="60" y="22" width="200" height="156" rx="4" className="ill-frame" />
      <rect x="70" y="32" width="180" height="136" className="ill-glass" />

      {kind === 'sabit' && (
        <g className="ill-mesh">
          {Array.from({ length: 15 }, (_, i) => (
            <line key={'v' + i} x1={70 + i * 12.8} y1="32" x2={70 + i * 12.8} y2="168" />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <line key={'h' + i} x1="70" y1={32 + i * 13.6} x2="250" y2={32 + i * 13.6} />
          ))}
        </g>
      )}

      {kind === 'surme' && (
        <g>
          <line x1="64" y1="172" x2="256" y2="172" className="ill-rail" />
          <line x1="64" y1="28" x2="256" y2="28" className="ill-rail" />
          <rect x="70" y="32" width="110" height="136" className="ill-panel" />
          <g className="ill-mesh">
            {Array.from({ length: 9 }, (_, i) => (
              <line key={i} x1={74 + i * 12.5} y1="34" x2={74 + i * 12.5} y2="166" />
            ))}
          </g>
          <path d="M196 100 h44 m-10 -8 l10 8 l-10 8" className="ill-arrow" />
        </g>
      )}

      {kind === 'plise' && (
        <g>
          <path
            d="M70 32 L84 168 L98 32 L112 168 L126 32 L140 168 L154 32 L168 168 L182 32 L196 168 L210 32"
            className="ill-pleat"
          />
          <rect x="70" y="26" width="140" height="8" className="ill-rail-box" />
          <path d="M222 100 h-22 m8 -8 l-8 8 l8 8" className="ill-arrow" />
        </g>
      )}

      {kind === 'rulo' && (
        <g>
          <rect x="66" y="22" width="188" height="20" rx="4" className="ill-rail-box" />
          <g className="ill-mesh">
            {Array.from({ length: 15 }, (_, i) => (
              <line key={'v' + i} x1={74 + i * 12.2} y1="42" x2={74 + i * 12.2} y2="120" />
            ))}
            {Array.from({ length: 6 }, (_, i) => (
              <line key={'h' + i} x1="74" y1={42 + i * 15.6} x2="246" y2={42 + i * 15.6} />
            ))}
          </g>
          <rect x="72" y="120" width="176" height="6" className="ill-rail-box" />
        </g>
      )}

      {kind === 'panjur' && (
        <g>
          <rect x="62" y="16" width="196" height="24" rx="4" className="ill-rail-box" />
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x="68" y={44 + i * 11} width="184" height="9" rx="2" className="ill-slat" />
          ))}
          <rect x="68" y="134" width="184" height="9" rx="2" className="ill-slat-end" />
        </g>
      )}
    </svg>
  );
}
