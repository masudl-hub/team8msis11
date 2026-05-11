import { Header, Watermark } from "./_chrome";

export const slideClass = "s-wedge";

function WedgeSvg() {
  // Line: (60, 300) → (1440, 60). slope = (60-300)/(1440-60) = -0.17391
  const x0 = 60, y0 = 300, x1 = 1440, y1 = 60;
  const slope = (y1 - y0) / (x1 - x0);
  const yOn = (x: number) => y0 + slope * (x - x0);
  const phases = [
    { x: 240, label: "NOW",   color: "#5BC98E", big: true },
    { x: 760, label: "NEXT",  color: "#4F8CFF", big: false },
    { x: 1260, label: "LATER", color: "#8BB4FF", big: false },
  ];

  return (
    <svg viewBox="0 0 1500 360" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="wedge-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5BC98E" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#4F8CFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* wedge fill */}
      <polygon points={`${x0},${y0} ${x1},${y1} ${x1},${y0} ${x0},${y0}`} fill="url(#wedge-g)" />
      {/* hypotenuse */}
      <line x1={x0} y1={y0} x2={x1} y2={y1} stroke="#8BB4FF" strokeWidth="1.5" />
      {/* baseline */}
      <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />

      {/* phase markers — dots sit exactly on the hypotenuse */}
      {phases.map((p) => {
        const yLine = yOn(p.x);
        return (
          <g key={p.label}>
            <line x1={p.x} y1={yLine} x2={p.x} y2={y0} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 6" />
            <circle cx={p.x} cy={yLine} r={p.big ? 13 : 8} fill={p.color} stroke="#0B0D10" strokeWidth="3" />
            <text
              x={p.x}
              y={yLine - 22}
              textAnchor="middle"
              fill={p.color}
              fontSize="11"
              letterSpacing="3"
              fontFamily="ui-monospace, monospace"
              fontWeight="700"
            >
              {p.label}
            </text>
          </g>
        );
      })}

      {/* axes */}
      <text x={x0} y={y0 + 28} fill="rgba(255,255,255,0.42)" fontSize="12" letterSpacing="3" fontFamily="ui-monospace, monospace">START</text>
      <text x={x1} y={y0 + 28} textAnchor="end" fill="rgba(255,255,255,0.42)" fontSize="12" letterSpacing="3" fontFamily="ui-monospace, monospace">SCALE</text>
      <text x={x0} y={42} fill="rgba(255,255,255,0.42)" fontSize="12" letterSpacing="3" fontFamily="ui-monospace, monospace">MARKET BREADTH ↑</text>
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
