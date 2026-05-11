import { Header, Watermark } from "./_chrome";

export const slideClass = "s-flywheel";

function FlywheelSvg() {
  const nodes = [
    { label: "Operated miles", short: "MILES" },
    { label: "Sensor + map data", short: "DATA" },
    { label: "Better AV stack", short: "STACK" },
    { label: "Safer geofence expansion", short: "GEOFENCE" },
    { label: "More rides", short: "RIDES" },
  ];
  const cx = 380, cy = 380, R = 260;
  return (
    <svg viewBox="0 0 760 760">
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(79,140,255,0.18)" />
          <stop offset="100%" stopColor="rgba(79,140,255,0)" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={R + 60} fill="url(#halo)" />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.16)" strokeDasharray="3 8" />

      {nodes.map((_, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const b = ((i + 1) / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x1 = cx + Math.cos(a) * R, y1 = cy + Math.sin(a) * R;
        const x2 = cx + Math.cos(b) * R, y2 = cy + Math.sin(b) * R;
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        const nx = -dy / len, ny = dx / len;
        const tx = mx + nx * 14, ty = my + ny * 14;
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} Q ${tx} ${ty} ${x2} ${y2}`}
            fill="none"
            stroke="#4F8CFF"
            strokeWidth="1.5"
            opacity="0.55"
            markerEnd="url(#arrow)"
          />
        );
      })}
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4F8CFF" />
        </marker>
      </defs>

      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * R;
        const y = cy + Math.sin(angle) * R;
        const lx = cx + Math.cos(angle) * (R + 70);
        const ly = cy + Math.sin(angle) * (R + 70);
        const anchor = Math.abs(Math.cos(angle)) < 0.3 ? "middle" : Math.cos(angle) > 0 ? "start" : "end";
        return (
          <g key={n.label}>
            <circle cx={x} cy={y} r="10" fill="#0B0D10" stroke="#8BB4FF" strokeWidth="2" />
            <circle cx={x} cy={y} r="3" fill="#8BB4FF" />
            <text x={lx} y={ly} textAnchor={anchor} fill="#FFFFFF" fontSize="20" fontWeight="600" letterSpacing="-0.5">
              {n.label}
            </text>
            <text x={lx} y={ly + 22} textAnchor={anchor} fill="rgba(255,255,255,0.42)" fontSize="11" letterSpacing="3" fontFamily="monospace">
              {String(i + 1).padStart(2, "0")} · {n.short}
            </text>
          </g>
        );
      })}

      <text x={cx} y={cy - 8} textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="11" letterSpacing="3" fontFamily="monospace">
        THE FLYWHEEL
      </text>
      <text x={cx} y={cy + 24} textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="800" letterSpacing="-0.5">
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
            <div className="cap">Google Maps was the most popular mobile app in 2013 — the data layer the AV stack will plug into.</div>
            <div className="src">Case · p. 7</div>
          </div>
        </div>
      </div>
    </>
  );
}
