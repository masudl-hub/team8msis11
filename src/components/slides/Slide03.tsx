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
          <div className="spectrum">
            <svg viewBox="0 0 800 560" preserveAspectRatio="xMidYMid meet">
              {/* axis */}
              <line x1="60" y1="280" x2="740" y2="280" stroke="#111" strokeWidth="1.5" />
              {/* tick marks at ends */}
              <line x1="60" y1="270" x2="60" y2="290" stroke="#111" strokeWidth="1.5" />
              <line x1="740" y1="270" x2="740" y2="290" stroke="#111" strokeWidth="1.5" />
              {/* axis pole labels */}
              <text x="60" y="320" fontFamily="JetBrains Mono, monospace"
                    fontSize="13" letterSpacing="3" fill="#6B6B6B" fontWeight="700">
                CAR-CENTRIC
              </text>
              <text x="740" y="320" textAnchor="end" fontFamily="JetBrains Mono, monospace"
                    fontSize="13" letterSpacing="3" fill="#1A73E8" fontWeight="700">
                NETWORK-CENTRIC
              </text>
              <text x="60" y="340" fontFamily="JetBrains Mono, monospace"
                    fontSize="11" letterSpacing="2" fill="#9A9A98">
                SELL THE CAR
              </text>
              <text x="740" y="340" textAnchor="end" fontFamily="JetBrains Mono, monospace"
                    fontSize="11" letterSpacing="2" fill="#9A9A98">
                OPERATE THE SERVICE
              </text>

              {PLAYERS.map((p) => {
                const cx = 60 + (p.x / 100) * 680;
                const isTop = p.side === "top";
                const labelY = isTop ? 120 : 460;
                const connY = isTop ? 268 : 292;
                const connEndY = isTop ? 145 : 435;
                const r = p.us ? 11 : 6;
                const fill = p.us ? "#111" : "#2A2A2A";
                return (
                  <g key={p.name}>
                    <line x1={cx} y1={connY} x2={cx} y2={connEndY}
                          stroke={p.us ? "#111" : "#C9C8C3"} strokeWidth={p.us ? 1.5 : 1} />
                    {p.us && (
                      <circle cx={cx} cy={280} r={20} fill="none"
                              stroke="#1A73E8" strokeWidth="1.5" strokeDasharray="3 3" />
                    )}
                    <circle cx={cx} cy={280} r={r} fill={fill} />
                    <text x={cx} y={labelY} textAnchor="middle"
                          fontFamily="Inter, sans-serif"
                          fontSize={p.us ? 26 : 18}
                          fontWeight={p.us ? 700 : 600}
                          fill={p.us ? "#111" : "#2A2A2A"}
                          letterSpacing="-0.01em">
                      {p.name}
                    </text>
                    {p.us && (
                      <text x={cx} y={labelY + 30} textAnchor="middle"
                            fontFamily="JetBrains Mono, monospace"
                            fontSize="11" letterSpacing="3" fill="#1A73E8" fontWeight="700">
                        OUR LANE
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="legend-note">
            Everyone else is building a better car. <strong>Google's assets point the other way.</strong>
          </div>
          <div className="src">Case · pp. 4–9</div>
        </div>
      </div>
    </>
  );
}
