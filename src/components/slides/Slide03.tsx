import { Header } from "./_chrome";

export const slideClass = "s-landscape";

const SUPPORTING = [
  { k: "20", u: "cars", note: "Lexus RX450h test fleet + a new pod prototype with no steering wheel." },
  { k: "$258M", u: "", note: "Invested in Uber via Google Ventures (2013) — a stake in the demand layer." },
  { k: "#1", u: "app", note: "Google Maps was the most-used mobile app in 2013 — the data substrate." },
];

const LANES: { key: string; title: string; sub: string; players: string[]; us?: boolean }[] = [
  {
    key: "car",
    title: "Sell the car",
    sub: "Vehicle-centric · driver-assist or owned autonomy",
    players: ["Audi · BMW · Mercedes", "GM · Volvo", "Tesla"],
  },
  {
    key: "comp",
    title: "Supply the parts",
    sub: "Neutral component to OEMs",
    players: ["Mobileye"],
  },
  {
    key: "net",
    title: "Operate the service",
    sub: "Network-centric · rides, not cars",
    players: ["Uber", "Google"],
    us: true,
  },
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
          <div className="lanes">
            {LANES.map((lane) => (
              <div key={lane.key} className={`lane-col ${lane.us ? "us" : ""}`}>
                <div className="lane-head">
                  <div className="lane-key">{lane.key.toUpperCase()}</div>
                  <div className="lane-title">{lane.title}</div>
                  <div className="lane-sub">{lane.sub}</div>
                </div>
                <ul className="lane-players">
                  {lane.players.map((p) => (
                    <li key={p} className={p === "Google" ? "google" : ""}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="legend-note">
            Five players sell cars. <strong>Google is one of two betting on the network</strong> — and the only one with the full stack.
          </div>
          <div className="src">Case · pp. 4–9</div>
        </div>
      </div>
    </>
  );
}
