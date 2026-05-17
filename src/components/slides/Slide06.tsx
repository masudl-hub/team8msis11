import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const TILES = [
  { tag: "LEADER", name: "Waymo", l1: "500K rides / week", l2: "10 cities · 170M mi", lead: true },
  { tag: "CHALLENGER", name: "Tesla", l1: "~25 unsupervised vehicles", l2: "4–9× human crash rate" },
  { tag: "CHALLENGER", name: "Zoox / Amazon", l1: "Free rides in Vegas + SF", l2: "Paid pending NHTSA" },
  { tag: "LICENSOR", name: "Mobileye + VW", l1: "$24.5B 8-yr pipeline", l2: "100K AV fleet by 2033" },
  { tag: "DISTRIBUTOR", name: "Uber", l1: "Partners with Waymo, Zoox", l2: "~13.5B trips in 2025" },
];

export function Slide06() {
  return (
    <>
      <Eyebrow>06 · LANDSCAPE</Eyebrow>
      <Title>Five actors define the 2026 market.</Title>
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
      <Footer n={6} />
    </>
  );
}
