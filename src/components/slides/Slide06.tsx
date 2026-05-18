import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const STAGES = [
  {
    k: "R&D",
    players: [
      { role: "LICENSOR", nm: "Mobileye + VW", sig: "$24.5B 8-yr pipeline · 100K AV fleet by 2033" },
    ],
  },
  {
    k: "PILOT",
    players: [
      { role: "CHALLENGER", nm: "Tesla", sig: "~25 unsupervised vehicles · 4–9× human crash rate (FSD v15)" },
    ],
  },
  {
    k: "PAID PILOT",
    players: [
      { role: "CHALLENGER", nm: "Zoox / Amazon", sig: "Free rides only · Vegas + SF · paid pending NHTSA exemption" },
    ],
  },
  {
    k: "SCALED OPERATION",
    players: [
      { role: "LEADER", nm: "Google AV", sig: "500K rides / week · 10 cities · 92% fewer serious-injury crashes", lead: true },
    ],
  },
];

const OFFAXIS = { role: "DISTRIBUTOR", nm: "Uber", sig: "Partner, not competitor · ~13.5B trips in 2025" };

export function Slide06() {
  return (
    <>
      <Eyebrow>06 · LANDSCAPE</Eyebrow>
      <Title>Google AV is the only operator at scale — every rival is still upstream.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="stage-board">
          <div className="sb-grid">
            {STAGES.map((s) => (
              <div key={s.k} className={`sb-col ${s.players.some((p) => p.lead) ? "lead" : ""}`}>
                <div className="sb-stage">{s.k}</div>
                {s.players.map((p) => (
                  <div key={p.nm} className={`sb-card ${p.lead ? "lead" : ""}`}>
                    <div className="sb-role">{p.role}</div>
                    <div className="sb-nm">{p.nm}</div>
                    <div className="sb-sig">{p.sig}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="sb-off">
            <div className="sb-off-tag">OFF-AXIS · DISTRIBUTION LAYER</div>
            <div className="sb-off-card">
              <div className="sb-role">{OFFAXIS.role}</div>
              <div className="sb-nm">{OFFAXIS.nm}</div>
              <div className="sb-sig">{OFFAXIS.sig}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
