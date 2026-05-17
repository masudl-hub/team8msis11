import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const BARS = [
  { lab: "May 2024", val: 50 },
  { lab: "Apr 2025", val: 250 },
  { lab: "Mar 2026", val: 500 },
  { lab: "End 2026 (target)", val: 1000, target: true },
];
const MAX = 1000;

export function Slide07() {
  return (
    <>
      <Eyebrow>07 · GROWTH</Eyebrow>
      <Title>Weekly paid rides · <em>10× in 24 months</em>.</Title>
      <Sub>Waymo is on the steep part of the curve.</Sub>
      <div className="u-body">
        <div className="chart">
          <div className="bars">
            {BARS.map((b) => (
              <div key={b.lab} className="bar">
                <div className="val">{b.val.toLocaleString()}K</div>
                <div
                  className="col"
                  style={{
                    height: `${(b.val / MAX) * 100}%`,
                    opacity: b.target ? 0.55 : 1,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="labels">
            {BARS.map((b) => (
              <div key={b.lab} className={`lab ${b.target ? "target" : ""}`}>{b.lab}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="u-source">Source: TechCrunch, Mar 27 2026 · Waymo guidance</div>
      <Footer n={7} />
    </>
  );
}
