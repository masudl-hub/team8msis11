import { Header, Watermark } from "./_chrome";

export const slideClass = "s-org";

function OrgSvg() {
  return (
    <svg viewBox="0 0 720 540">
      {/* Parent */}
      <rect x={240} y={40} width={240} height={80} fill="none" stroke="#111111" strokeWidth="1.2" />
      <text x={360} y={78} textAnchor="middle" fill="#111111"
        fontSize="20" fontWeight="600" fontFamily="Inter, Helvetica, sans-serif">Google Inc.</text>
      <text x={360} y={102} textAnchor="middle" fill="#6B6B6B"
        fontSize="10" letterSpacing="3" fontFamily="monospace" fontWeight="700">AD-FUNDED CORE</text>

      {/* Connector */}
      <line x1={360} y1={120} x2={360} y2={200} stroke="#B9B7B0" strokeDasharray="3 5" />

      {/* Subsidiary */}
      <rect x={150} y={200} width={420} height={130} fill="#FAFAF7" stroke="#111111" strokeWidth="2" />
      <rect x={150} y={200} width={6} height={130} fill="#1A73E8" />
      <text x={370} y={240} textAnchor="middle" fill="#1A73E8"
        fontSize="10" letterSpacing="3" fontFamily="monospace" fontWeight="700">SEPARATED SUBSIDIARY</text>
      <text x={370} y={278} textAnchor="middle" fill="#111111"
        fontSize="28" fontWeight="600" letterSpacing="-0.5" fontFamily="Inter, Helvetica, sans-serif">AV Mobility Co.</text>
      <text x={370} y={306} textAnchor="middle" fill="#6B6B6B"
        fontSize="13" fontFamily="Inter, Helvetica, sans-serif">Own board · Patient capital · Founder protection</text>

      {/* Pillars */}
      {[
        { x: 80, label: "Safety", color: "#EA4335" },
        { x: 240, label: "Capital", color: "#F9AB00" },
        { x: 400, label: "Metrics", color: "#1A73E8" },
        { x: 560, label: "Governance", color: "#34A853" },
      ].map((p) => (
        <g key={p.label}>
          <line x1={p.x + 40} y1={330} x2={p.x + 40} y2={390} stroke="#B9B7B0" />
          <rect x={p.x} y={390} width={80} height={60} fill="#FAFAF7" stroke="#111111" strokeWidth="1" />
          <rect x={p.x} y={390} width={80} height={4} fill={p.color} />
          <text x={p.x + 40} y={428} textAnchor="middle" fill="#111111"
            fontSize="14" fontWeight="600" fontFamily="Inter, Helvetica, sans-serif">{p.label}</text>
        </g>
      ))}

      <text x={360} y={500} textAnchor="middle" fill="#6B6B6B"
        fontSize="10" letterSpacing="3" fontFamily="monospace" fontWeight="700">
        DIFFERENT METRICS · DIFFERENT TIME HORIZON
      </text>
    </svg>
  );
}

export function Slide08() {
  return (
    <>
      <Watermark />
      <Header
        num="07 · Organizational structure"
        title={<>The bet fails if it's <em>governed like search ads</em>.</>}
      />
      <div className="body">
        <div className="diagram"><OrgSvg /></div>
        <div className="side">
          <div className="stat">84.5<span className="pct">%</span></div>
          <div className="cap">of Google's $59.8B 2013 revenue came from advertising. A mobility bet evaluated on ad-product metrics will not survive a soft quarter.</div>
          <div className="src">Case · Exhibit 4a</div>
          <div className="pull">
            Independence is the safest structure for preserving the bet through resource-allocation pressure.
          </div>
        </div>
      </div>
    </>
  );
}
