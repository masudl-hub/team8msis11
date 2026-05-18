import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const TILES = [
  { tag: "LEADER", name: "Google AV", l1: "500K rides / week · 10 cities", l2: "92% fewer serious-injury crashes", lead: true },
  { tag: "CHALLENGER", name: "Tesla", l1: "~25 unsupervised vehicles", l2: "4–9× human crash rate · FSD v15 dependency" },
  { tag: "CHALLENGER", name: "Zoox / Amazon", l1: "Free rides only · Vegas + SF", l2: "Paid service pending NHTSA exemption" },
  { tag: "LICENSOR", name: "Mobileye + VW", l1: "$24.5B 8-yr automotive pipeline", l2: "100K AV fleet target by 2033" },
  { tag: "DISTRIBUTOR", name: "Uber", l1: "Distribution partner, not competitor", l2: "~13.5B trips in 2025" },
];

export function Slide06() {
  return (
    <>
      <Eyebrow>06 · LANDSCAPE</Eyebrow>
      <Title>Google leads the AV field — and the gap is widening.</Title>
      <Sub>One leader. Two challengers. A licensor. A distributor.</Sub>
      <div className="u-body">
        <div className="tiles">
          {TILES.map((t) => (
            <div key={t.name} className={`tile ${t.lead ? "lead" : ""}`}>
              <div className="tag">{t.tag}</div>
              <div className="name">{t.name}</div>
              <div className="rule" />
              <div className="l1">{t.l1}</div>
              <div className="l2">{t.l2}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
