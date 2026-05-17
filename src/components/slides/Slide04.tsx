import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const COLS = [
  {
    tag: "BOWER & CHRISTENSEN · 1995",
    title: "Organizational separation",
    body: "Disruptive businesses fail inside integrated firms. Alphabet (2015) and Waymo (2016) executed the prescription. Cruise and Apple Titan did not — and exited.",
  },
  {
    tag: "CHRISTENSEN · 2015",
    title: "New-market disruption",
    body: "Start with non-consumers in bounded domains. Waymo opened in geofenced Phoenix suburbs serving constrained-mobility riders — exactly the prescribed foothold.",
  },
  {
    tag: "BRYNJOLFSSON & MCAFEE · 2012",
    title: "Trajectory argument",
    body: "AV capability would improve faster than mainstream demand required. 700K test miles in 2014 → 170M autonomous miles in 2026. The curve held.",
  },
];

export function Slide04() {
  return (
    <>
      <Eyebrow>04 · VALIDATION</Eyebrow>
      <Title>The 2014 framework predicted this outcome.</Title>
      <Sub>Three readings, three predictions, three validations.</Sub>
      <div className="u-body">
        <div className="three-col">
          {COLS.map((c) => (
            <div key={c.tag} className="c">
              <div className="rule" />
              <div className="tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer n={4} />
    </>
  );
}
