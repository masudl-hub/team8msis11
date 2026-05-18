import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const R = [
  {
    stat: "170M+",
    unit: "autonomous miles",
    src: "Safety Hub, Mar 2026",
    t: "Aligned data flywheel",
    d: "Every operated mile feeds the stack, Maps, and Search Local — HBS p.7 thesis, now operational.",
    accent: "blue",
  },
  {
    stat: "60–70%",
    unit: "of ride-hail cost is driver labor",
    src: "Industry benchmark · Alphabet earnings",
    t: "Validated unit economics",
    d: "500K paid rides/week across 10 cities; Pichai guides AV unit to profit by 2027.",
    accent: "green",
  },
  {
    stat: "0",
    unit: "OEMs required",
    src: "Continental, Magna · HBS p.9",
    t: "Sidesteps OEM resistance",
    d: "Contract-manufactured fleet (I-Pace → Ioniq 5, Zeekr Ojai). No automaker has to ship Google software.",
    accent: "yellow",
  },
  {
    stat: "20%",
    unit: "of consumers would pay $3K for AV features",
    src: "HBS p.10",
    t: "Sidesteps consumer reluctance",
    d: "Riders summon a ride instead of buying a self-driving car — the purchase objection never appears.",
    accent: "red",
  },
  {
    stat: "~25",
    unit: "Tesla robotaxis vs. 500K Waymo rides/wk",
    src: "Automotive World, May 2026",
    t: "New-market disruption foothold",
    d: "Phoenix geofenced launch is the Christensen-prescribed foothold; high-end consumer entry is still stalling.",
    accent: "blue",
  },
  {
    stat: "1.2M",
    unit: "global crash deaths/year addressable",
    src: "HBS pp.1–2, 4",
    t: "Mission fit, operational",
    d: "“Universally accessible” clause delivered as service: safer miles for riders who cannot drive themselves.",
    accent: "green",
  },
];

export function Slide05() {
  return (
    <>
      <Eyebrow>05 · WHY OPERATOR-FIRST</Eyebrow>
      <Title>Operator-first clears all six filters — and the 2014–2026 data proves each one.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="hex">
          {R.map((r) => (
            <div key={r.t} className={`hex-cell accent-${r.accent}`}>
              <div className="hc-stat">
                <div className="hc-num">{r.stat}</div>
                <div className="hc-unit">{r.unit}</div>
              </div>
              <div className="hc-rule" />
              <div className="hc-t">{r.t}</div>
              <div className="hc-d">{r.d}</div>
              <div className="hc-src">{r.src}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
