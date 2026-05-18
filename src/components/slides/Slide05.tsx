import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const R = [
  { n: "01", t: "Aligned data flywheel",         d: "Every mile feeds Maps, Search Local, and the model.",      tag: "DATA",        accent: "blue"   },
  { n: "02", t: "Validated unit economics",      d: "Phoenix and SF prove the per-ride margins work.",          tag: "ECONOMICS",   accent: "green"  },
  { n: "03", t: "Sidesteps OEM resistance",      d: "No automaker has to be convinced to ship Google software.", tag: "CHANNEL",     accent: "yellow" },
  { n: "04", t: "Sidesteps consumer reluctance", d: "Riders don't buy a self-driving car — they just hail one.", tag: "DEMAND",      accent: "red"    },
  { n: "05", t: "New-market disruption foothold",d: "Christensen's textbook entry vector for incumbents.",       tag: "THEORY",      accent: "blue"   },
  { n: "06", t: "Mission fit, operational",      d: "Accessibility moves from slogan to delivered service.",     tag: "MISSION",     accent: "green"  },
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
            <div key={r.n} className={`hex-cell accent-${r.accent}`}>
              <div className="hc-ghost">{r.n}</div>
              <div className="hc-head">
                <span className="hc-n">FILTER {r.n}</span>
                <span className="hc-tag">{r.tag}</span>
              </div>
              <div className="hc-t">{r.t}</div>
              <div className="hc-d">{r.d}</div>
              <div className="hc-check">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>CLEARS FILTER</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
