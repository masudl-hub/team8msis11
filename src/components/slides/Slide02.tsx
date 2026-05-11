import { Header, Watermark } from "./_chrome";

export const slideClass = "s-frame";

export function Slide02() {
  const rows = [
    { q: "What does Google sell?", rejected: ["cars", "software only"], pick: "rides" },
    { q: "Where does the bet live?", rejected: ["inside Google"], pick: "a separated subsidiary" },
    { q: "How does it reach the road?", rejected: ["national Level 4"], pick: "gated geofences" },
  ];
  return (
    <>
      <Watermark />
      <Header
        num="01 · The strategic question"
        title={<>Three decisions. <em>One direction.</em></>}
      />
      <div className="body">
        {rows.map((r) => (
          <div key={r.q} className="row">
            <div className="q">{r.q}</div>
            <div className="answers">
              {r.rejected.map((x) => (
                <span key={x} className="rej">{x}</span>
              ))}
              <span className="dot" />
              <span className="pick">{r.pick}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
