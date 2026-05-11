import { Header, Watermark } from "./_chrome";

export const slideClass = "s-org";

function OrgSvg() {
  return (
    <svg viewBox="0 0 720 540">
      {/* Parent */}
      <rect x={240} y={40} width={240} height={80} rx={8} fill="none" stroke="rgba(255,255,255,0.5)" />
      <text x={360} y={78} textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700">Google Inc.</text>
      <text x={360} y={102} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" letterSpacing="3" fontFamily="monospace">AD-FUNDED CORE</text>

      {/* Connector */}
      <line x1={360} y1={120} x2={360} y2={200} stroke="rgba(255,255,255,0.3)" strokeDasharray="3 6" />

      {/* Subsidiary */}
      <rect x={150} y={200} width={420} height={130} rx={12} fill="rgba(79,140,255,0.08)" stroke="#4F8CFF" />
      <text x={360} y={240} textAnchor="middle" fill="#8BB4FF" fontSize="11" letterSpacing="3" fontFamily="monospace">SEPARATED SUBSIDIARY</text>
      <text x={360} y={278} textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="800" letterSpacing="-0.5">AV Mobility Co.</text>
      <text x={360} y={306} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="14">Own board · Patient capital · Founder protection</text>

      {/* Pillars */}
      {[
        { x: 80, label: "Safety", y: 420 },
        { x: 240, label: "Capital", y: 420 },
        { x: 400, label: "Metrics", y: 420 },
        { x: 560, label: "Governance", y: 420 },
      ].map((p) => (
        <g key={p.label}>
          <line x1={p.x + 40} y1={330} x2={p.x + 40} y2={390} stroke="rgba(255,255,255,0.18)" />
          <rect x={p.x} y={390} width={80} height={60} rx={6} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.18)" />
          <text x={p.x + 40} y={426} textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="600">{p.label}</text>
        </g>
      ))}

      <text x={360} y={500} textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="11" letterSpacing="3" fontFamily="monospace">
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
            "Independence is the safest structure for preserving the bet through resource-allocation pressure."
          </div>
        </div>
      </div>
    </>
  );
}
