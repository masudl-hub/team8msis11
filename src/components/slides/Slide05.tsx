import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const R = [
  {
    n: "01",
    t: "Aligned data flywheel",
    stat: "170M",
    statSub: "autonomous miles by 2026",
    body: "Every operated mile feeds Google's stack and Maps — the 2014 case called this potentially Google's most valuable asset.",
    src: "SAFETY HUB · MAR 2026",
  },
  {
    n: "02",
    t: "Validated unit economics",
    stat: "60–70%",
    statSub: "of ride-hail cost is driver labor",
    body: "Remove the driver and the cost curve bends. Pichai signals AV-unit profitability by 2027.",
    src: "ALPHABET EARNINGS · 2026",
  },
  {
    n: "03",
    t: "Sidesteps OEM resistance",
    stat: "0",
    statSub: "OEM partnerships required",
    body: "Contract manufacturers (Hyundai Ioniq 5, Zeekr) build to spec — no Android-Auto-style leverage problem.",
    src: "HBS p.9 · 2026",
  },
  {
    n: "04",
    t: "Sidesteps consumer reluctance",
    stat: "20%",
    statSub: "would pay $3,000 for AV features",
    body: "Riders summon a service. They never have to buy the vehicle.",
    src: "HBS p.10",
  },
  {
    n: "05",
    t: "New-market disruption foothold",
    stat: "1 → 10",
    statSub: "Phoenix suburb to 10 U.S. cities",
    body: "Geofenced, constrained-mobility users first. The Christensen pattern, executed in order.",
    src: "CRM 2015",
  },
  {
    n: "06",
    t: "Mission fit, operational",
    stat: "500K",
    statSub: "paid rides per week in 2026",
    body: "Mobility-as-a-service for the elderly, disabled, and unlicensed — the literal clause delivered.",
    src: "BLOOMBERG · FEB 2026",
  },
];

export function Slide05() {
  return (
    <>
      <Eyebrow>05 · WHY OPERATOR-FIRST</Eyebrow>
      <Title>The operator model passes every strategic test.</Title>
      <Sub>Six filters drawn from Christensen, Bower &amp; Christensen, and Bartlett &amp; McLean.</Sub>
      <div className="u-body">
        <div className="reasons">
          {R.map((r) => (
            <div key={r.n} className="reason">
              <div className="r-head">
                <span className="t">{r.t}</span>
              </div>
              <div className="r-stat">
                <span className="stat">{r.stat}</span>
                <span className="statSub">{r.statSub}</span>
              </div>
              <div className="r-body">{r.body}</div>
              <div className="r-src">{r.src}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
