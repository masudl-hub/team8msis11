import { Header, Watermark } from "./_chrome";

export const slideClass = "s-wedge";

function WedgeSvg() {
  const x0 = 60, y0 = 300, x1 = 1440, y1 = 60;
  const slope = (y1 - y0) / (x1 - x0);
  const yOn = (x: number) => y0 + slope * (x - x0);
  const phases = [
    { x: 240,  label: "NOW",   color: "#34A853", big: true },
    { x: 760,  label: "NEXT",  color: "#1A73E8", big: false },
    { x: 1260, label: "LATER", color: "#F9AB00", big: false },
  ];

  return (
    <svg viewBox="0 0 1500 360" preserveAspectRatio="xMidYMid meet">
      {/* wedge fill — paper-toned, subtle */}
      <polygon points={`${x0},${y0} ${x1},${y1} ${x1},${y0}`} fill="#F2F1ED" />
      {/* hypotenuse */}
      <line x1={x0} y1={y0} x2={x1} y2={y1} stroke="#111111" strokeWidth="1.4" />
      {/* baseline */}
      <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="#E4E2DC" strokeWidth="1" />

      {phases.map((p) => {
        const yLine = yOn(p.x);
        return (
          <g key={p.label}>
            <line x1={p.x} y1={yLine} x2={p.x} y2={y0} stroke="#B9B7B0" strokeDasharray="2 5" />
            <circle cx={p.x} cy={yLine} r={p.big ? 12 : 8} fill={p.color} stroke="#FAFAF7" strokeWidth="3" />
            <text x={p.x} y={yLine - 22} textAnchor="middle" fill="#111111"
              fontSize="11" letterSpacing="3"
              fontFamily="ui-monospace, monospace" fontWeight="700">
              {p.label}
            </text>
          </g>
        );
      })}

      <text x={x0} y={y0 + 26} fill="#6B6B6B" fontSize="11" letterSpacing="3"
        fontFamily="ui-monospace, monospace" fontWeight="700">START</text>
      <text x={x1} y={y0 + 26} textAnchor="end" fill="#6B6B6B" fontSize="11" letterSpacing="3"
        fontFamily="ui-monospace, monospace" fontWeight="700">SCALE</text>
      <text x={x0} y={42} fill="#6B6B6B" fontSize="11" letterSpacing="3"
        fontFamily="ui-monospace, monospace" fontWeight="700">MARKET BREADTH ↑</text>
    </svg>
  );
}

export function Slide06() {
  return (
    <>
      <Watermark />
      <Header
        num="04 · §A · Who we serve"
        title={<>Start where there is <em>no incumbent</em>. Expand on proof.</>}
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
          OEM licensing (OAA-style) is retained as a <strong>hedge</strong>, not the primary game — Google keeps the operating loop and the data.
        </div>
      </div>
    </>
  );
}
