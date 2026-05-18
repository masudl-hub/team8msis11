import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const OPTS = [
  { k: "A", nm: "Sell vehicles", play: "Build and sell Google-branded self-driving cars to consumers.", verdict: "REJECT · Google is not a car manufacturer.", win: false },
  { k: "B", nm: "License AV stack to OEMs", play: "Sell perception, mapping, and software to automakers.", verdict: "REJECT · OEM resistance; Mobileye is the price floor.", win: false },
  { k: "C", nm: "Operate first-party rides", play: "Google operates the service; passengers summon via Google apps.", verdict: "RECOMMEND PRIMARY · Aligned data flywheel.", win: true },
  { k: "D", nm: "License non-competing verticals", play: "B2B platform for logistics, freight, mining, agriculture, defense.", verdict: "RECOMMEND SECONDARY · Capital-light layer on top.", win: true },
];

export function Slide04() {
  return (
    <>
      <Eyebrow>04 · MONETIZATION</Eyebrow>
      <Title>Four paths. Two recommended.</Title>
      <Sub>Same framework filters as the 2014 brief. The 2026 evidence sharpens the verdict.</Sub>
      <div className="u-body">
        <div className="opts">
          {OPTS.map((o) => (
            <div key={o.k} className={`opt-card ${o.win ? "win" : ""}`}>
              <div className="k">{o.k}</div>
              <div className="nm">{o.nm}</div>
              <div className="mini" />
              <div className="lbl">MODEL</div>
              <div className="play">{o.play}</div>
              <div className={`lbl v ${o.win ? "win" : ""}`}>VERDICT</div>
              <div className="verdict">{o.verdict}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer n={4} />
    </>
  );
}
