import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const R = [
  { n: "01", t: "Aligned data flywheel" },
  { n: "02", t: "Validated unit economics" },
  { n: "03", t: "Sidesteps OEM resistance" },
  { n: "04", t: "Sidesteps consumer reluctance" },
  { n: "05", t: "New-market disruption foothold" },
  { n: "06", t: "Mission fit, operational" },
];

export function Slide05() {
  return (
    <>
      <Eyebrow>05 · WHY OPERATOR-FIRST</Eyebrow>
      <Title>Six structural reasons.</Title>
      <Sub>Each one is a Christensen / B&amp;C / B&amp;M filter the operator path passes.</Sub>
      <div className="u-body">
        <div className="reasons">
          {R.map((r) => (
            <div key={r.n} className="reason">
              <div className="n">{r.n}</div>
              <div className="t">{r.t}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer n={5} />
    </>
  );
}
