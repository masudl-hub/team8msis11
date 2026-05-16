import { Header } from "./_chrome";

export const slideClass = "s-landscape";

const SUPPORTING = [
  { k: "20", u: "cars", note: "Lexus RX450h test fleet + a new pod prototype with no steering wheel." },
  { k: "$258M", u: "", note: "Invested in Uber via Google Ventures (2013) — a stake in the demand layer." },
  { k: "#1", u: "app", note: "Google Maps was the most-used mobile app in 2013 — the data substrate." },
];

// x = position on Car-centric ↔ Network-centric axis (0–100)
// labelSide alternates so labels don't collide
const PLAYERS: { name: string; x: number; side: "top" | "bot"; us?: boolean }[] = [
  { name: "Audi · BMW · Mercedes", x: 6, side: "top" },
  { name: "GM · Volvo", x: 16, side: "bot" },
  { name: "Tesla", x: 26, side: "top" },
  { name: "Mobileye", x: 48, side: "bot" },
  { name: "Uber", x: 78, side: "top" },
  { name: "Google", x: 95, side: "bot", us: true },
];

export function Slide03() {
  return (
    <>
      <Header
        num="01 · The landscape"
        title={<>Google enters an industry it does not <em>resemble</em>.</>}
      />
      <div className="body">
        <div className="pane assets">
          <div className="label">Google's hand · 2014</div>
          <div className="hero-stat">
            <div className="num">700K<span className="unit">mi</span></div>
            <div className="cap">
              Autonomous test miles on public roads — <strong>500K incident-free</strong>.
              No one else in the industry is close.
            </div>
          </div>
          <div className="support">
            {SUPPORTING.map((s) => (
              <div key={s.k} className="line">
                <div className="k">{s.k}{s.u && <span className="u"> {s.u}</span>}</div>
                <div className="n">{s.note}</div>
              </div>
            ))}
          </div>
          <div className="src">Case · pp. 6–7, Exhibit 4a</div>
        </div>
        <div className="rule" />
        <div className="pane field">
          <div className="label">The field · who else is in the race</div>
          <div className="players">
            {PLAYERS.map((p) => (
              <div key={p.name} className={`player ${p.us ? "us" : ""}`}>
                <div className="who">{p.name}</div>
                <div className="post">{p.posture}</div>
                <div className={`lane ${p.lane.toLowerCase().split("-")[0]}`}>{p.lane}</div>
              </div>
            ))}
          </div>
          <div className="src">Case · pp. 4–9</div>
        </div>
      </div>
    </>
  );
}
