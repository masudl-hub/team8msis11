import { Header, Watermark } from "./_chrome";

export const slideClass = "s-flywheel";

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
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(79,140,255,0.22)" />
          <stop offset="70%" stopColor="rgba(79,140,255,0.04)" />
          <stop offset="100%" stopColor="rgba(79,140,255,0)" />
        </radialGradient>
        <marker
          id="fw-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#8BB4FF" />
        </marker>
      </defs>

      {/* halo + base ring */}
      <circle cx={cx} cy={cy} r={R + 90} fill="url(#halo)" />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.10)" />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(139,180,255,0.28)" strokeDasharray="1 7" />

      {/* arc segments between nodes — proper circular flywheel with arrows */}
      {nodes.map((_, i) => {
        const inset = 0.18; // angular gap at each end
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
            stroke="#8BB4FF"
            strokeWidth="1.6"
            opacity="0.75"
            markerEnd="url(#fw-arrow)"
          />
        );
      })}

      {/* nodes + labels */}
      {nodes.map((n, i) => {
        const a = ang(i);
        const x = cx + Math.cos(a) * R;
        const y = cy + Math.sin(a) * R;
        const lx = cx + Math.cos(a) * (R + 60);
        const ly = cy + Math.sin(a) * (R + 60);
        const cosA = Math.cos(a);
        const anchor = Math.abs(cosA) < 0.35 ? "middle" : cosA > 0 ? "start" : "end";
        const dy = Math.abs(cosA) < 0.35 ? (Math.sin(a) < 0 ? -8 : 22) : 6;
        return (
          <g key={n.label}>
            <circle cx={x} cy={y} r="9" fill="#0B0D10" stroke="#8BB4FF" strokeWidth="2" />
            <circle cx={x} cy={y} r="3" fill="#8BB4FF" />
            <text
              x={lx}
              y={ly + dy}
              textAnchor={anchor}
              fill="#FFFFFF"
              fontSize="22"
              fontWeight="600"
              letterSpacing="-0.5"
            >
              {n.label}
            </text>
            <text
              x={lx}
              y={ly + dy + 22}
              textAnchor={anchor}
              fill="rgba(255,255,255,0.38)"
              fontSize="11"
              letterSpacing="3"
              fontFamily="ui-monospace, monospace"
            >
              {String(i + 1).padStart(2, "0")} · {n.short}
            </text>
          </g>
        );
      })}

      {/* center label */}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fill="rgba(255,255,255,0.40)"
        fontSize="11"
        letterSpacing="4"
        fontFamily="ui-monospace, monospace"
      >
        THE FLYWHEEL
      </text>
      <text
        x={cx}
        y={cy + 28}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-0.6"
      >
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
