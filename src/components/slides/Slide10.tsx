import { Eyebrow, Title, Footer } from "./_u";

export const slideClass = "s-u";

const OPTS = [
  { k: "A", nm: "Harvest", play: "Slow investment, milk leadership.", verdict: "REJECT · Abandons the flywheel.", win: false },
  { k: "B", nm: "License primary", play: "Mobileye-style stack sales to OEMs.", verdict: "REJECT · Surrenders the rider relationship.", win: false },
  { k: "C", nm: "Operate (current path)", play: "Continue first-party robotaxi only.", verdict: "ACCEPTABLE · Single-product risk.", win: false },
  { k: "D", nm: "Operate + separate + layer", play: "First-party rides, IPO Waymo, license non-competing verticals.", verdict: "RECOMMEND · Defends moat, opens optionality.", win: true },
];

export function Slide10() {
  return (
    <>
      <Eyebrow>10 · OPTIONS</Eyebrow>
      <Title>Four paths. One recommended.</Title>
      <div className="u-body no-sub">
        <div className="opts">
          {OPTS.map((o) => (
            <div key={o.k} className={`opt-card ${o.win ? "win" : ""}`}>
              <div className="k">{o.k}</div>
              <div className="nm">{o.nm}</div>
              <div className="mini" />
              <div className="lbl">PLAY</div>
              <div className="play">{o.play}</div>
              <div className={`lbl v ${o.win ? "win" : ""}`}>VERDICT</div>
              <div className="verdict">{o.verdict}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer n={10} />
    </>
  );
}
