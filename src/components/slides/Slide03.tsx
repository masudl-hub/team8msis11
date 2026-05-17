import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const ITEMS = [
  { y: "2015", t: "Alphabet", d: "Holding-co restructure; AV moved to Other Bets" },
  { y: "2016", t: "Waymo", d: "Spun out of Google X as subsidiary" },
  { y: "2018", t: "Waymo One", d: "First commercial driverless service · Phoenix" },
  { y: "2024", t: "Apple Titan", d: "Cancelled after ~$10B, decade of work", muted: true },
  { y: "2024", t: "Cruise", d: "GM ends robotaxi funding · $10B+ sunk", muted: true },
  { y: "2026", t: "Waymo $126B", d: "$16B raise · largest AV round in history" },
  { y: "2026", t: "500K / wk", d: "10 cities · 170M autonomous miles" },
];

export function Slide03() {
  return (
    <>
      <Eyebrow>03 · WHAT HAPPENED</Eyebrow>
      <Title>Twelve years of separation and shakeout.</Title>
      <Sub>2014 → 2026: the framework predicted both the winners and the failures.</Sub>
      <div className="u-body">
        <div className="timeline-wrap">
          <div className="timeline-line" />
          {ITEMS.map((it, i) => {
            const pct = (i / (ITEMS.length - 1)) * 100;
            const left = `calc(${pct}% * 0.92 + 4%)`;
            return (
              <div key={i} className={`tl-item ${it.muted ? "muted" : ""}`} style={{ left }}>
                <div className="above">
                  <div className="yr">{it.y}</div>
                  <div className="ttl">{it.t}</div>
                </div>
                <div className="dot" />
                <div className="below">
                  <div className="desc">{it.d}</div>
                </div>
              </div>
            );
          })}
          <div className="tl-footnote">
            Two failures (Apple, Cruise) match the Bower &amp; Christensen 1995 prediction: integration kills disruptive bets.
          </div>
        </div>
      </div>
      <Footer n={3} />
    </>
  );
}
