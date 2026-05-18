import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

// 6 platforms around a circle, AV at center (blue)
const RING = [
  { tag: "NAVIGATION",     nm: "Maps",         d: "Most-used navigation product globally; Waze real-time traffic." },
  { tag: "INTERFACE",      nm: "Android Auto", d: "~70% smartphone share; in nearly every new U.S. vehicle." },
  { tag: "FRONTIER AI",    nm: "Gemini",       d: "Pichai's centerpiece; physical-world products are the moat." },
  { tag: "INFRASTRUCTURE", nm: "Google Cloud", d: "Fastest-growing major cloud; TPU silicon; Vertex AI." },
  { tag: "ATTENTION",      nm: "YouTube",      d: "2.5B+ monthly users; the in-ride entertainment surface." },
  { tag: "DEPLOYMENT",     nm: "AV subsidiary",d: "170M autonomous miles — the physical-AI proof point." },
];

const VB = 720;
const CX = 360, CY = 360;
const R_RING = 270;  // node center radius
const R_HUB = 110;   // central hub radius

export function Slide08() {
  // angle per node, starting top
  const N = RING.length;
  const nodes = RING.map((p, i) => {
    const a = (-Math.PI / 2) + (i * 2 * Math.PI) / N;
    return { ...p, x: CX + R_RING * Math.cos(a), y: CY + R_RING * Math.sin(a), a };
  });

  // arc arrow between adjacent nodes around the ring
  const arcs = nodes.map((_, i) => {
    const n1 = nodes[i];
    const n2 = nodes[(i + 1) % N];
    // shorten endpoints so arrows don't overlap node circles
    const shrink = 40;
    const dx = n2.x - n1.x, dy = n2.y - n1.y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len;
    const sx = n1.x + ux * shrink, sy = n1.y + uy * shrink;
    const ex = n2.x - ux * shrink, ey = n2.y - uy * shrink;
    // curve via large arc with sweep
    return { sx, sy, ex, ey };
  });

  return (
    <>
      <Eyebrow>08 · STRATEGIC POSITION</Eyebrow>
      <Title>Google's moat is six platforms compounding around the AV unit — not the AV unit alone.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="fly-wrap">
          <div className="fly-stage">
            <svg viewBox={`0 0 ${VB} ${VB}`} className="fly-svg" aria-hidden="true">
              <defs>
                <marker id="fly-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--g-blue)" />
                </marker>
              </defs>
              {/* dashed ring */}
              <circle cx={CX} cy={CY} r={R_RING} fill="none" stroke="var(--rule-strong)" strokeWidth="1.5" strokeDasharray="4 6" />
              {/* arcs */}
              {arcs.map((a, i) => (
                <path
                  key={i}
                  d={`M ${a.sx} ${a.sy} A ${R_RING} ${R_RING} 0 0 1 ${a.ex} ${a.ey}`}
                  fill="none" stroke="var(--g-blue)" strokeWidth="1.8" opacity="0.75"
                  markerEnd="url(#fly-arrow)"
                />
              ))}
              {/* hub */}
              <circle cx={CX} cy={CY} r={R_HUB} fill="var(--g-blue)" />
              <text x={CX} y={CY - 8} textAnchor="middle" fill="#fff"
                style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 16, fontWeight: 700, letterSpacing: "0.2em" }}>
                AV SUBSIDIARY
              </text>
              <text x={CX} y={CY + 22} textAnchor="middle" fill="#fff" opacity="0.85"
                style={{ fontSize: 14 }}>
                170M autonomous miles
              </text>
              {/* node dots */}
              {nodes.map((n, i) => (
                <circle key={i} cx={n.x} cy={n.y} r="10" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
              ))}
            </svg>
            {nodes.map((n, i) => {
              // place card outside the dot, away from center
              const dx = n.x - CX, dy = n.y - CY;
              const len = Math.hypot(dx, dy);
              const px = n.x + (dx / len) * 70;
              const py = n.y + (dy / len) * 70;
              const align = px < CX ? "right" : "left";
              return (
                <div key={i} className={`fly-card ${align}`} style={{ left: `${(px / VB) * 100}%`, top: `${(py / VB) * 100}%` }}>
                  <div className="fc-tag">{n.tag}</div>
                  <div className="fc-nm">{n.nm}</div>
                  <div className="fc-d">{n.d}</div>
                </div>
              );
            })}
          </div>
          <div className="fly-aside">
            <div className="fly-aside-tag">WHY THIS COMBINATION IS HARD TO REPLICATE</div>
            <ul>
              <li><strong>Microsoft</strong> — has the AI, no physical surface.</li>
              <li><strong>Apple</strong> — killed its AV bet in 2024.</li>
              <li><strong>Amazon</strong> — lacks the frontier model.</li>
              <li><strong>Tesla</strong> — lacks the platform.</li>
            </ul>
            <div className="fly-aside-foot"><span>Google's combination is genuinely difficult to replicate.</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
