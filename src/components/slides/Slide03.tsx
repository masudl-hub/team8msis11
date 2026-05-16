import { Header } from "./_chrome";

export const slideClass = "s-landscape";

const ASSETS = [
  { k: "700K+", u: "mi", note: "Autonomous test miles on public roads (500K incident-free) by 2014." },
  { k: "20", u: "cars", note: "Lexus RX450h test fleet + new pod prototype (no steering wheel)." },
  { k: "$258M", u: "", note: "Invested in Uber via Google Ventures (2013) — a stake in the demand layer." },
  { k: "#1", u: "app", note: "Google Maps was the most popular mobile app in 2013 — the data substrate." },
];

const PLAYERS = [
  { name: "OEMs (Audi · BMW · Mercedes)", posture: "Sustaining L2/L3 features", lane: "Car-centric" },
  { name: "GM · Volvo", posture: "Partnered with Mobileye", lane: "Car-centric" },
  { name: "Tesla", posture: "High-end consumer AV", lane: "Car-centric" },
  { name: "Mobileye", posture: "Neutral perception supplier", lane: "Component" },
  { name: "Uber", posture: "Ride-hail demand layer; AV ambition", lane: "Network-centric" },
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
          <div className="label">Google's assets · 2014</div>
          <div className="asset-grid">
            {ASSETS.map((a) => (
              <div key={a.k} className="asset">
                <div className="num">{a.k}<span className="unit">{a.u && ` ${a.u}`}</span></div>
                <div className="note">{a.note}</div>
              </div>
            ))}
          </div>
          <div className="src">Case · pp. 6–7, Exhibit 4a</div>
        </div>
        <div className="rule" />
        <div className="pane field">
          <div className="label">The field · who else is in this race</div>
          <div className="players">
            {PLAYERS.map((p) => (
              <div key={p.name} className="player">
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
