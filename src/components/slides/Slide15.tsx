import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const ITEMS = [
  { t: "Per-mile unit economics", d: "Waymo has not disclosed contribution margin by city or vehicle." },
  { t: "Real Tesla fleet trajectory", d: "Redacted crash narratives and unproven FSD v15 leave the scaling curve opaque." },
  { t: "International market response", d: "Tokyo and London regulatory and demand behavior is unmodeled." },
];

export function Slide15() {
  return (
    <>
      <Eyebrow>15 · OPEN QUESTIONS</Eyebrow>
      <Title>What we still don't know.</Title>
      <Sub>Three uncertainties that should shape how we read the next 18 months.</Sub>
      <div className="u-body">
        <div className="rows">
          {ITEMS.map((it, i) => (
            <div key={i} className="row">
              <div className="n">?</div>
              <div className="t">{it.t}</div>
              <div className="d">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer n={15} />
    </>
  );
}
