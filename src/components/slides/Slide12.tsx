import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const ROWS = [
  { n: "01", t: "Talent retention", d: "Equity that competes with Zoox, Tesla, and Wayve packages." },
  { n: "02", t: "Structural protection", d: "Patient losses sheltered from ad-segment quarterly metrics." },
  { n: "03", t: "Public price signal", d: "A market-clearing valuation for the strategic asset." },
  { n: "04", t: "Acquisition currency", d: "A tradable security for tuck-in mobility deals." },
];

export function Slide12() {
  return (
    <>
      <Eyebrow>12 · STRUCTURE</Eyebrow>
      <Title>Why spin Waymo when Alphabet has the capital?</Title>
      <Sub>Separation is not about money. It is about four other things.</Sub>
      <div className="u-body">
        <div className="rows">
          {ROWS.map((r) => (
            <div key={r.n} className="row">
              <div className="n">{r.n}</div>
              <div className="t">{r.t}</div>
              <div className="d">{r.d}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer n={12} />
    </>
  );
}
