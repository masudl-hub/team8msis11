import { Header, Watermark } from "./_chrome";

export const slideClass = "s-wedge";

function WedgeSvg() {
  return (
    <svg viewBox="0 0 1500 360">
      <defs>
        <linearGradient id="wedge-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5BC98E" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#4F8CFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <polygon points="40,300 1460,40 1460,320 40,320" fill="url(#wedge-g)" opacity="0.25" />
      <polyline points="40,300 1460,40" stroke="#4F8CFF" strokeWidth="1.5" />
      <polyline points="40,320 1460,320" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

      {/* phase markers */}
      {[
        { x: 220, y: 280, t: 0 },
        { x: 760, y: 174, t: 1 },
        { x: 1300, y: 70, t: 2 },
      ].map((p, i) => (
        <g key={i}>
          <line x1={p.x} y1={p.y} x2={p.x} y2={320} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 6" />
          <circle cx={p.x} cy={p.y} r={i === 0 ? 14 : 9} fill={i === 0 ? "#5BC98E" : "#4F8CFF"} stroke="#0B0D10" strokeWidth="3" />
        </g>
      ))}

      {/* axes */}
      <text x={40} y={350} fill="rgba(255,255,255,0.42)" fontSize="12" letterSpacing="3" fontFamily="monospace">START</text>
      <text x={1460} y={350} textAnchor="end" fill="rgba(255,255,255,0.42)" fontSize="12" letterSpacing="3" fontFamily="monospace">SCALE</text>
      <text x={40} y={32} fill="rgba(255,255,255,0.42)" fontSize="12" letterSpacing="3" fontFamily="monospace">MARKET BREADTH ↑</text>
    </svg>
  );
}

export function Slide06() {
  return (
    <>
      <Watermark />
      <Header
        num="05 · The recommended model"
        title={<>Operate <em>rides</em> to own the learning loop.</>}
      />
      <div className="body">
        <div className="wedge-chart"><WedgeSvg /></div>
        <div className="legend">
          <div className="leg now">
            <div className="tag">Now · Foothold</div>
            <div className="title">Constrained-mobility non-consumers</div>
            <div className="who">Elderly, disabled, unlicensed, poorly served by paratransit and family rides.</div>
          </div>
          <div className="leg next">
            <div className="tag">Next · Expansion</div>
            <div className="title">Ride-hail substitution</div>
            <div className="who">Urban riders already paying per trip — only after geofence economics clear.</div>
          </div>
          <div className="leg later">
            <div className="tag">Later · Mainstream</div>
            <div className="title">Personal-driving replacement</div>
            <div className="who">Suburban household trips, weather-tolerant routes, broader car-ownership decay.</div>
          </div>
        </div>
        <div className="gate">
          Launch only after a modeled cost per revenue-mile beats threshold across utilization, safety-driver, remote-operator, insurance, and maintenance.
        </div>
      </div>
    </>
  );
}
