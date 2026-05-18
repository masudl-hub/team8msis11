import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

// Pentagon positions around hub. Center (864, 320), rx=620, ry=260.
// Cards anchored by center; we offset via translate(-50%,-50%).
const SPOKES = [
  { n: "01", t: "Safety",              d: "32K+ U.S. fatalities · 1.2M+ globally per year.",      x: 864,  y: 30  },
  { n: "02", t: "Accessibility",       d: "Mobility for the elderly, disabled, and unlicensed.",  x: 1484, y: 240 },
  { n: "03", t: "Attention liberation",d: "Non-driving riders become Gmail, Maps, YouTube users.",x: 1230, y: 600 },
  { n: "04", t: "Physical-world data", d: "Bridges the offline world to Google's stack.",         x: 498,  y: 600 },
  { n: "05", t: "Strategic options",   d: "X moonshot culture; no near-term revenue gate.",       x: 244,  y: 240 },
];

const HUB = { x: 864, y: 320 };
const VB_W = 1728;
const VB_H = 660;

export function Slide03() {
  return (
    <>
      <Eyebrow>03 · 2014 MOTIVATION</Eyebrow>
      <Title>Every 2014 motivation extended a Google platform — none required becoming a car company.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="hub-wrap">
          <svg className="hub-svg" viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            {SPOKES.map((s) => (
              <line key={s.n} x1={HUB.x} y1={HUB.y} x2={s.x} y2={s.y} stroke="var(--rule-strong)" strokeWidth="1.5" />
            ))}
            <circle cx={HUB.x} cy={HUB.y} r="140" fill="var(--g-blue)" />
            <circle cx={HUB.x} cy={HUB.y} r="148" fill="none" stroke="var(--g-blue)" strokeWidth="2" opacity="0.25" />
          </svg>
          <div className="hub-core" style={{ left: `${(HUB.x / VB_W) * 100}%`, top: `${(HUB.y / VB_H) * 100}%` }}>
            <div className="hub-label">GOOGLE</div>
            <div className="hub-label">PLATFORM</div>
          </div>
          {SPOKES.map((s) => (
            <div
              key={s.n}
              className="hub-node"
              style={{ left: `${(s.x / VB_W) * 100}%`, top: `${(s.y / VB_H) * 100}%` }}
            >
              <div className="hn-num">{s.n}</div>
              <div className="hn-title">{s.t}</div>
              <div className="hn-desc">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="u-source">Source: HBS Google Car case (pp. 1, 2, 4, 6, 7)</div>
    </>
  );
}
