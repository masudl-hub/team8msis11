import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const R = [
  { sev: "HIGH",     r: "High-profile fatal incident in a flagship city.",   m: "Safety governance, NHTSA transparency, pre-rehearsed comms." },
  { sev: "HIGH",     r: "Tesla closes the FSD gap with v15 by late 2026.",   m: "Defend the safety-record narrative; weaponize NHTSA redactions." },
  { sev: "MEDIUM",   r: "Regulatory ceiling event — federal or municipal.",  m: "Over-invest in gov-relations; be the standards-setter." },
  { sev: "MEDIUM",   r: "Alphabet ad-revenue downturn squeezes patience.",   m: "$16B Feb-2026 raise; partial public listing as permanent fix." },
  { sev: "LOW",      r: "International launch failure in Tokyo or London.",  m: "Constrained district pilots; treat year one as learning.", win: true },
];

export function Slide11() {
  return (
    <>
      <Eyebrow>11 · RISKS</Eyebrow>
      <Title>Each of the five plausible risks already has a named lever.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="ladder">
          <div className="ladder-head">
            <div className="lh-sev">SEVERITY</div>
            <div className="lh-n">#</div>
            <div className="lh-r">RISK</div>
            <div className="lh-arrow" />
            <div className="lh-m">MITIGATION</div>
          </div>
          {R.map((x, i) => (
            <div key={i} className={`ladder-row sev-${x.sev.toLowerCase()} ${x.win ? "win" : ""}`}>
              <div className="lr-sev"><span className="dot" />{x.sev}</div>
              <div className="lr-n">{String(i + 1).padStart(2, "0")}</div>
              <div className="lr-r">{x.r}</div>
              <div className="lr-arrow">→</div>
              <div className="lr-m">{x.m}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
