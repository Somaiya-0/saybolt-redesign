// Decorative animated globe with trade routes radiating from Bangladesh.
// The surface (grid, land, routes, hub) spins continuously on its own; hovering pauses the spin and gives a gentle zoom.
const HUB = { x: 318, y: 214 }
const routes = [
  { d: `M${HUB.x} ${HUB.y} Q 250 60 120 150`, label: 'Europe', to: { x: 120, y: 150 } },
  { d: `M${HUB.x} ${HUB.y} Q 230 170 150 300`, label: 'Middle East', to: { x: 150, y: 300 } },
  { d: `M${HUB.x} ${HUB.y} Q 420 90 470 180`, label: 'East Asia', to: { x: 470, y: 180 } },
  { d: `M${HUB.x} ${HUB.y} Q 440 300 420 400`, label: 'Oceania', to: { x: 420, y: 400 } },
  { d: `M${HUB.x} ${HUB.y} Q 180 380 90 330`, label: 'Africa', to: { x: 90, y: 330 } },
]

export default function HeroGlobe() {
  return (
    <div className="globe-wrap">
      <svg viewBox="0 0 560 560" className="globe">
        <defs>
          <radialGradient id="g-sphere" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#1d3d6b" />
            <stop offset="60%" stopColor="#0f2748" />
            <stop offset="100%" stopColor="#081a33" />
          </radialGradient>
          <radialGradient id="g-glow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="rgba(212,169,64,0)" />
            <stop offset="100%" stopColor="rgba(212,169,64,0.18)" />
          </radialGradient>
          <linearGradient id="g-route" x1="0" x2="1">
            <stop offset="0%" stopColor="#f3d27a" />
            <stop offset="100%" stopColor="#d4a940" />
          </linearGradient>
          <clipPath id="g-clip"><circle cx="280" cy="280" r="230" /></clipPath>
        </defs>
        <circle cx="280" cy="280" r="268" fill="url(#g-glow)" />
        <circle cx="280" cy="280" r="230" fill="url(#g-sphere)" stroke="rgba(255,255,255,.14)" />
        <g className="globe-surface">
          <g clipPath="url(#g-clip)" stroke="rgba(255,255,255,.08)" fill="none" className="globe-grid">
            {[-160, -100, -40, 0, 40, 100, 160].map((o) => (
              <ellipse key={o} cx="280" cy="280" rx={Math.max(8, 230 - Math.abs(o) * 1.3)} ry="230" transform={`translate(${o * 0.35} 0)`} />
            ))}
            {[-150, -90, -30, 30, 90, 150].map((y) => (
              <line key={y} x1="40" x2="520" y1={280 + y} y2={280 + y} />
            ))}
            {/* abstract land masses */}
            <path d="M300 170c30-10 60 0 80 20s10 40-10 50-50 10-70-5-30-55 0-65z" fill="rgba(255,255,255,.07)" stroke="none" />
            <path d="M110 120c40-20 90-10 110 20s-10 60-50 60-80-50-60-80z" fill="rgba(255,255,255,.06)" stroke="none" />
            <path d="M80 260c30-20 80 0 90 40s-20 90-50 90-60-100-40-130z" fill="rgba(255,255,255,.06)" stroke="none" />
            <path d="M400 360c30-10 70 10 70 40s-40 40-70 30-30-60 0-70z" fill="rgba(255,255,255,.06)" stroke="none" />
          </g>
          <g fill="none">
            {routes.map((r, i) => (
              <g key={r.label}>
                <path d={r.d} stroke="rgba(243,210,122,.25)" strokeWidth="1.5" />
                <path d={r.d} stroke="url(#g-route)" strokeWidth="2.5" strokeLinecap="round" className="route" style={{ animationDelay: `${i * 0.6}s` }} />
                <circle cx={r.to.x} cy={r.to.y} r="5" fill="#f3d27a" />
                <circle cx={r.to.x} cy={r.to.y} r="5" fill="none" stroke="#f3d27a" className="ping" style={{ animationDelay: `${i * 0.6}s` }} />
              </g>
            ))}
          </g>
          {routes.map((r, i) => (
            <circle key={r.label} r="4" fill="#fff" className="traveller" style={{ offsetPath: `path('${r.d}')`, animationDelay: `${i * 0.9}s` }} />
          ))}
          <circle cx={HUB.x} cy={HUB.y} r="9" fill="#d4a940" stroke="#fff" strokeWidth="3" />
          <circle cx={HUB.x} cy={HUB.y} r="9" fill="none" stroke="#d4a940" strokeWidth="2" className="ping hub" />
        </g>
      </svg>
      <div className="globe-badge badge-a"><strong>20,000+</strong><span>TEUs annually</span></div>
      <div className="globe-badge badge-b"><strong>Since 1991</strong><span>Saybolt Group</span></div>
    </div>
  )
}
