import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const R = [
  { n: "01", t: "Aligned data flywheel",        d: "Every mile feeds Maps, Search Local, and the model." },
  { n: "02", t: "Validated unit economics",     d: "Phoenix and SF prove the per-ride margins work." },
  { n: "03", t: "Sidesteps OEM resistance",     d: "No automaker has to be convinced to ship Google software." },
  { n: "04", t: "Sidesteps consumer reluctance",d: "Riders don't buy a self-driving car — they just hail one." },
  { n: "05", t: "New-market disruption foothold",d: "Christensen's textbook entry vector for incumbents." },
  { n: "06", t: "Mission fit, operational",     d: "Accessibility moves from slogan to delivered service.", win: true },
];

export function Slide05() {
  return (
    <>
      <Eyebrow>05 · WHY OPERATOR-FIRST</Eyebrow>
      <Title>Use operator-first because it clears all six structural filters.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="hex">
          {R.map((r) => (
            <div key={r.n} className={`hex-cell ${r.win ? "win" : ""}`}>
              <div className="hc-n">{r.n}</div>
              <div className="hc-t">{r.t}</div>
              <div className="hc-d">{r.d}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
