import { Header, Watermark } from "./_chrome";

export const slideClass = "s-gates";

export function Slide07() {
  const phases = [
    { year: "2015–16", label: "Private pilots", gate: "Disengagement rate trend", cls: "now" },
    { year: "2017–18", label: "Paid pilots", gate: "Incident review clears", cls: "" },
    { year: "2019–20", label: "Gated expansion", gate: "Cost / revenue-mile bar", cls: "" },
    { year: "2021+", label: "Driverless geofences", gate: "Regulatory approval", cls: "" },
    { year: "2024+", label: "Highway · logistics", gate: "Network economics proven", cls: "late" },
  ];
  return (
    <>
      <Watermark />
      <Header
        num="06 · §C · Gated deployment"
        title={<>From L3 testing to L4 service — <em>through gates</em>, not on a press calendar.</>}
      />
      <div className="body">
        <div className="timeline">
          <div className="rail" />
          <div className="phases">
            {phases.map((p) => (
              <div key={p.year} className={`phase ${p.cls}`}>
                <div className="year">{p.year}</div>
                <div className="dot" />
                <div className="label">{p.label}</div>
                <div className="gate">{p.gate}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bridge">
          The 2014 asset is a <strong>Level 3</strong> system; the strategy is to build toward <strong>Level 4</strong> through bounded, driver-supervised pilots. No nationwide promise.
        </div>
      </div>
    </>
  );
}
