import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const PHASES = [
  { ph: "PHASE 1", yr: "2026", t: "Scale", d: "1M rides/week. Tokyo + London pilots. Stand up Waymo Platform B2B." },
  { ph: "PHASE 2", yr: "2027", t: "Profit inflection", d: "Unit-economics positive in lead cities. IPO preparation." },
  { ph: "PHASE 3", yr: "late-27 / mid-28", t: "Partial spin", d: "Waymo IPO. Alphabet retains majority." },
  { ph: "PHASE 4", yr: "2028–29", t: "Platform breadth", d: "Licensing in logistics, freight, mining, agriculture, defense." },
  { ph: "PHASE 5", yr: "2029–30", t: "Density moats", d: "Per-city profitability compounds; international density follows." },
];

export function Slide13() {
  return (
    <>
      <Eyebrow>13 · ROADMAP</Eyebrow>
      <Title>Implementation, 2026 → 2030.</Title>
      <Sub>Five phases. Each gated by the previous.</Sub>
      <div className="u-body">
        <div className="roadmap">
          <div className="line" />
          {PHASES.map((p, i) => {
            const pct = (i / (PHASES.length - 1)) * 100;
            const left = `calc(${pct}% * 0.84 + 8%)`;
            return (
              <div key={p.ph} className="phase" style={{ left }}>
                <div className="above">
                  <div className="ph">{p.ph}</div>
                  <div className="yr">{p.yr}</div>
                  <div className="ttl">{p.t}</div>
                </div>
                <div className="dot" />
                <div className="below">
                  <div className="desc">{p.d}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
