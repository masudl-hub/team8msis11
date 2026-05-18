import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const R = [
  {
    stat: "170M+",
    unit: "autonomous miles operated",
    src: "Waymo Safety Hub · Mar 2026",
    t: "Aligned data flywheel",
    d: "Every mile feeds the stack, Maps, and Search Local — the 2014 HBS thesis, now operational.",
  },
  {
    stat: "60–70%",
    unit: "of ride-hail cost is driver labor",
    src: "Industry benchmark · Alphabet earnings",
    t: "Validated unit economics",
    d: "500K paid rides/week across 10 cities. Pichai guides AV unit to profit by 2027.",
  },
  {
    stat: "0",
    unit: "OEMs required to ship",
    src: "Continental, Magna · HBS p.9",
    t: "Sidesteps OEM resistance",
    d: "Contract-manufactured fleet: I-Pace → Ioniq 5 → Zeekr Ojai. No automaker has to cooperate.",
  },
  {
    stat: "20%",
    unit: "of consumers would pay $3K for AV",
    src: "HBS p.10",
    t: "Sidesteps consumer reluctance",
    d: "Riders summon a ride — they never face the purchase objection.",
  },
  {
    stat: "20,000×",
    unit: "Waymo rides vs. Tesla robotaxi",
    src: "Automotive World · May 2026",
    t: "New-market disruption foothold",
    d: "500K/wk vs. ~25 vehicles in 3 cities. The Christensen foothold is already taken.",
  },
  {
    stat: "1.2M",
    unit: "annual road deaths addressable",
    src: "HBS pp. 1–2, 4",
    t: "Mission fit, operational",
    d: "“Universally accessible” delivered as service — safer miles for riders who cannot drive.",
  },
];

export function Slide05() {
  return (
    <>
      <Eyebrow>05 · WHY OPERATOR-FIRST</Eyebrow>
      <Title>Operator-first clears all six filters — and the 2014–2026 data proves each one.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="proof">
          <div className="proof-rail">
            <div className="pr-count"><span className="pr-num">6</span><span className="pr-den">/6</span></div>
            <div className="pr-lbl">FILTERS<br/>CLEARED</div>
            <div className="pr-ticks">
              {R.map((_, i) => <span key={i} className="pr-tick" />)}
            </div>
          </div>
          <div className="proof-grid">
            {R.map((r, i) => (
              <div key={r.t} className="proof-card">
                <div className="pc-top">
                  <span className="pc-idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pc-pass">PASS</span>
                </div>
                <div className="pc-stat">
                  <div className="pc-num">{r.stat}</div>
                  <div className="pc-unit">{r.unit}</div>
                </div>
                <div className="pc-verdict">
                  <div className="pc-t">{r.t}</div>
                  <div className="pc-d">{r.d}</div>
                </div>
                <div className="pc-src">{r.src}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
