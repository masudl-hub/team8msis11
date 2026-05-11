import { Header, Watermark } from "./_chrome";

export const slideClass = "s-flywheel";

const NODE_COLORS = ["#1A73E8", "#EA4335", "#F9AB00", "#34A853", "#1A73E8"];

function FlywheelSvg() {
  const cx = 500, cy = 460, R = 260;
  const nodes = [
    { label: "Operated miles", short: "MILES" },
    { label: "Sensor data", short: "DATA" },
    { label: "Better AV stack", short: "STACK" },
    { label: "Safer geofences", short: "GEOFENCE" },
    { label: "More rides", short: "RIDES" },
  ];
  const N = nodes.length;
  const ang = (i: number) => (i / N) * Math.PI * 2 - Math.PI / 2;

  return (
    <svg viewBox="0 0 1000 920" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker
          id="fw-arrow"
          viewBox="0 0 10 10"
          refX="8" refY="5"
          markerWidth="6" markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#111111" />
        </marker>
      </defs>

      {/* base ring */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#E4E2DC" strokeWidth="1" />

      {/* arc segments */}
      {nodes.map((_, i) => {
        const inset = 0.18;
        const a1 = ang(i) + inset;
        const a2 = ang(i + 1) - inset;
        const x1 = cx + Math.cos(a1) * R;
        const y1 = cy + Math.sin(a1) * R;
        const x2 = cx + Math.cos(a2) * R;
        const y2 = cy + Math.sin(a2) * R;
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`}
            fill="none"
            stroke="#111111"
            strokeWidth="1.4"
            markerEnd="url(#fw-arrow)"
          />
        );
      })}

      {/* nodes + labels */}
      {nodes.map((n, i) => {
        const a = ang(i);
        const x = cx + Math.cos(a) * R;
        const y = cy + Math.sin(a) * R;
        const lx = cx + Math.cos(a) * (R + 64);
        const ly = cy + Math.sin(a) * (R + 64);
        const cosA = Math.cos(a);
        const anchor = Math.abs(cosA) < 0.35 ? "middle" : cosA > 0 ? "start" : "end";
        const dy = Math.abs(cosA) < 0.35 ? (Math.sin(a) < 0 ? -8 : 22) : 6;
        const color = NODE_COLORS[i];
        return (
          <g key={n.label}>
            <circle cx={x} cy={y} r="11" fill="#FAFAF7" stroke={color} strokeWidth="2.5" />
            <circle cx={x} cy={y} r="4" fill={color} />
            <text x={lx} y={ly + dy} textAnchor={anchor} fill="#111111"
              fontSize="22" fontWeight="600" letterSpacing="-0.5"
              fontFamily="Inter, Helvetica, sans-serif">
              {n.label}
            </text>
            <text x={lx} y={ly + dy + 22} textAnchor={anchor} fill="#9A9A98"
              fontSize="11" letterSpacing="3"
              fontFamily="ui-monospace, monospace" fontWeight="600">
              {String(i + 1).padStart(2, "0")} · {n.short}
            </text>
          </g>
        );
      })}

      {/* center label */}
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#6B6B6B"
        fontSize="11" letterSpacing="4"
        fontFamily="ui-monospace, monospace" fontWeight="700">
        THE FLYWHEEL
      </text>
      <text x={cx} y={cy + 28} textAnchor="middle" fill="#111111"
        fontSize="28" fontWeight="600" letterSpacing="-0.6"
        fontFamily="Inter, Helvetica, sans-serif">
        Data compounds.
      </text>
    </svg>
  );
}

export function Slide03() {
  return (
    <>
      <Watermark />
      <Header
        num="02 · Where Google wins"
        title={<>Google's edge is <em>data and algorithms</em>, not auto manufacturing.</>}
      />
      <div className="body">
        <div className="chart"><FlywheelSvg /></div>
        <div className="stats">
          <div className="stat">
            <div className="num">700K<span className="unit">+ mi</span></div>
            <div className="cap">Autonomous miles driven on public roads by 2014.</div>
            <div className="src">Case · p. 6</div>
          </div>
          <div className="stat">
            <div className="num">#1</div>
            <div className="cap">Google Maps — the most popular mobile app in 2013 — is the data layer the AV stack plugs into.</div>
            <div className="src">Case · p. 7</div>
          </div>
        </div>
      </div>
    </>
  );
}
