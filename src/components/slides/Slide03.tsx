import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const M = [
  { n: "01", t: "Safety", d: "32K+ U.S. fatalities · 1.2M+ globally per year." },
  { n: "02", t: "Accessibility", d: "Mobility for the elderly, disabled, and unlicensed." },
  { n: "03", t: "Attention liberation", d: "Non-driving riders become Gmail, Maps, YouTube users." },
  { n: "04", t: "Physical-world data", d: "Bridges the offline world to Google's stack." },
  { n: "05", t: "Strategic options", d: "X moonshot culture; no near-term revenue gate." },
];

export function Slide03() {
  return (
    <>
      <Eyebrow>03 · 2014 MOTIVATION</Eyebrow>
      <Title>Every 2014 motivation extended a Google platform — none required becoming a car company.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="moti-wrap">
          <div className="moti-spine">
            <span>PLATFORM EXTENSIONS</span>
          </div>
          <div className="moti-list">
            {M.map((m) => (
              <div key={m.n} className="row">
                <div className="n">{m.n}</div>
                <div className="t">{m.t}</div>
                <div className="d">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="u-source">Source: HBS Google Car case (pp. 1, 2, 4, 6, 7)</div>
      <Footer n={3} />
    </>
  );
}
