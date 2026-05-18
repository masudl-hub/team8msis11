import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const R = [
  { r: "High-profile fatal incident in a flagship city.", m: "Safety governance, NHTSA transparency, pre-rehearsed comms." },
  { r: "Tesla closes the FSD gap with v15 by late 2026.", m: "Defend the safety-record narrative; weaponize NHTSA redactions." },
  { r: "Regulatory ceiling event — federal or municipal.", m: "Over-invest in gov-relations; be the standards-setter." },
  { r: "Alphabet ad-revenue downturn squeezes patience.", m: "$16B Feb-2026 raise; partial public listing as permanent fix." },
  { r: "International launch failure in Tokyo or London.", m: "Constrained district pilots; treat year one as learning." },
];

export function Slide11() {
  return (
    <>
      <Eyebrow>11 · RISKS</Eyebrow>
      <Title>Five risks. Five mitigations.</Title>
      <Sub>Each one names a lever we will pull if it materializes.</Sub>
      <div className="u-body">
        <div className="risk2">
          <div className="head">
            <div>#</div>
            <div>RISK</div>
            <div className="mh">MITIGATION</div>
          </div>
          {R.map((x, i) => (
            <div key={i} className="row">
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div className="r">{x.r}</div>
              <div className="m">{x.m}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer n={11} />
    </>
  );
}
