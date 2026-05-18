import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

// Position along the maturity axis (0 → 1) and label above/below for layout
const ONAXIS = [
  { pos: 0.10, role: "LICENSOR",   name: "Mobileye + VW", l1: "$24.5B 8-yr automotive pipeline", l2: "100K AV fleet target by 2033",       above: true  },
  { pos: 0.32, role: "CHALLENGER", name: "Tesla",         l1: "~25 unsupervised vehicles",       l2: "4–9× human crash rate · FSD v15",    above: false },
  { pos: 0.55, role: "CHALLENGER", name: "Zoox / Amazon", l1: "Free rides only · Vegas + SF",     l2: "Paid service pending NHTSA exemption",above: true  },
  { pos: 0.92, role: "LEADER",     name: "Google AV",     l1: "500K rides / week · 10 cities",   l2: "92% fewer serious-injury crashes",   above: false, lead: true },
];

const OFFAXIS = { role: "DISTRIBUTOR", name: "Uber", l1: "Partner, not competitor", l2: "~13.5B trips in 2025" };

export function Slide06() {
  return (
    <>
      <Eyebrow>06 · LANDSCAPE</Eyebrow>
      <Title>Google AV is the only operator at scale; everyone else is upstream or distribution.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="axis-wrap">
          <div className="axis-stages">
            <span>R&amp;D</span><span>PILOT</span><span>PAID PILOT</span><span>SCALED OPERATION</span>
          </div>
          <div className="axis-line">
            <div className="axis-bar" />
            {ONAXIS.map((a) => (
              <div key={a.name} className={`axis-pt ${a.above ? "above" : "below"} ${a.lead ? "lead" : ""}`} style={{ left: `${a.pos * 100}%` }}>
                <div className="dot" />
                <div className="card">
                  <div className="role">{a.role}</div>
                  <div className="nm">{a.name}</div>
                  <div className="l1">{a.l1}</div>
                  <div className="l2">{a.l2}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="axis-off">
            <div className="off-label">OFF-AXIS</div>
            <div className="off-card">
              <div className="role">{OFFAXIS.role}</div>
              <div className="nm">{OFFAXIS.name}</div>
              <div className="l1">{OFFAXIS.l1}</div>
              <div className="l2">{OFFAXIS.l2}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
