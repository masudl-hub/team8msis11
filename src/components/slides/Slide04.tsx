import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

// Quadrants by (capital intensity, data flywheel strength)
const OPTS = [
  { k: "A", q: "tl", nm: "Sell vehicles",            play: "Build and sell Google-branded self-driving cars to consumers.", verdict: "REJECT · Google is not a car manufacturer.",         win: false },
  { k: "C", q: "tr", nm: "Operate first-party rides",play: "Google operates the service; passengers summon via Google apps.", verdict: "PRIMARY · Aligned data flywheel.",                 win: true  },
  { k: "B", q: "bl", nm: "License AV stack to OEMs", play: "Sell perception, mapping, and software to automakers.",          verdict: "REJECT · OEM resistance; Mobileye is the price floor.", win: false },
  { k: "D", q: "br", nm: "License non-competing verticals", play: "B2B platform for logistics, freight, mining, agriculture, defense.", verdict: "SECONDARY · Capital-light layer on top.",      win: true  },
];

export function Slide04() {
  return (
    <>
      <Eyebrow>04 · MONETIZATION</Eyebrow>
      <Title>Choose the two monetization paths that survive the strategic filter.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="matrix">
          <div className="m-axis y">
            <span className="hi">HIGH</span>
            <span className="lbl">CAPITAL INTENSITY</span>
            <span className="lo">LOW</span>
          </div>
          <div className="m-axis x">
            <span className="lo">WEAK</span>
            <span className="lbl">DATA FLYWHEEL</span>
            <span className="hi">STRONG</span>
          </div>
          <div className="m-grid">
            {OPTS.map((o) => (
              <div key={o.k} className={`m-cell ${o.q} ${o.win ? "win" : ""}`}>
                <div className="mc-head">
                  <div className="mc-k">{o.k}</div>
                  <div className="mc-nm">{o.nm}</div>
                </div>
                <div className="mc-play">{o.play}</div>
                <div className="mc-verdict">{o.verdict}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
