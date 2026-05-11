import { Header } from "./_chrome";

export const slideClass = "s-frame";

type Row = { q: string; opts: { label: string; pick?: boolean }[] };

const ROWS: Row[] = [
  { q: "What does Google sell?", opts: [{ label: "Cars" }, { label: "Software only" }, { label: "Rides", pick: true }] },
  { q: "Where does the bet live?", opts: [{ label: "Inside Google" }, { label: "Separated subsidiary", pick: true }] },
  { q: "How does it reach the road?", opts: [{ label: "National L4" }, { label: "Gated geofences", pick: true }] },
];

export function Slide02() {
  return (
    <>
      <Header
        num="01 · The strategic question"
        title={<>This case is about <em>information</em>, not just cars.</>}
      />
      <div className="body">
        <div className="matrix">
          {ROWS.map((row) => (
            <div key={row.q} className="row">
              <div className="q">{row.q}</div>
              <div className="opts">
                {row.opts.map((o) => (
                  <div key={o.label} className={`opt ${o.pick ? "pick" : "skip"}`}>
                    <span className="dot" />
                    <span className="lbl">{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
