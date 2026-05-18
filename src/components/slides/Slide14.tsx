import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const RISKS = [
  "High-profile fatal incident in a flagship city.",
  "Tesla closes the gap on FSD v15 by late 2026.",
  "Regulatory ceiling event — federal or municipal.",
  "Alphabet ad-segment downturn squeezes patience.",
  "International launch failure in Tokyo or London.",
];

export function Slide14() {
  return (
    <>
      <Eyebrow>14 · RISKS</Eyebrow>
      <Title>Five risks we are taking seriously.</Title>
      <Sub>Each one names a lever we will pull if it materializes.</Sub>
      <div className="u-body">
        <div className="risk-rows">
          {RISKS.map((r, i) => (
            <div key={i} className="row">
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div className="t">{r}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
