import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const M = [
  { n: "01", t: "Safety", d: "32K+ U.S. fatalities (2011); 1.2M+ globally per year." },
  { n: "02", t: "Accessibility", d: "Mobility for the elderly, disabled, and unlicensed." },
  { n: "03", t: "Attention liberation", d: "Riders not driving become Gmail, Maps, YouTube users." },
  { n: "04", t: "Physical-world data", d: "Bridge the offline world to Google's online stack." },
  { n: "05", t: "Strategic options", d: "Google X moonshot culture; no short-term revenue gate." },
];

export function Slide03() {
  return (
    <>
      <Eyebrow>03 · 2014 MOTIVATION</Eyebrow>
      <Title>Why Google invested in 2014.</Title>
      <Sub>Five motivations, all platform-extension. None of them argue for being a car company.</Sub>
      <div className="u-body">
        <div className="moti-list">
          {M.map((m) => (
            <div key={m.n} className="row">
              <div className="n">{m.n}</div>
              <div className="t">{m.t}</div>
              <div className="d">{m.d}</div>
            </div>
          ))}
        </div>
        <div className="moti-foot">
          All five are <strong>Google-platform extensions</strong>, not vehicle-business motivations. The 2026 strategy should honor that.
        </div>
      </div>
      <div className="u-source">Source: HBS Google Car case (pp. 1, 2, 4, 6, 7)</div>
      <Footer n={3} />
    </>
  );
}
