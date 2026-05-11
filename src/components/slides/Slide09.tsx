import { Header, Watermark } from "./_chrome";

export const slideClass = "s-risk";

export function Slide09() {
  const rows = [
    { r: "Capability", m: "Weather-simple, pre-mapped geofences; pause if disengagements rise", g: "Disengagement rate", t: "TREND ↓" },
    { r: "Liability", m: "Safety board, incident protocol, insurance + reinsurance partner", g: "Incident review", t: "PASS / FAIL" },
    { r: "Privacy", m: "Environmental data → Maps; rider trip data segregated, opt-in only", g: "Audit coverage", t: "100% AUDITED" },
    { r: "Economics", m: "No paid expansion until modeled cost / revenue-mile clears threshold", g: "Unit economics", t: "GATE PER CITY" },
  ];
  return (
    <>
      <Watermark />
      <Header
        num="08 · Risks & mitigations"
        title={<>The recommendation works only if these are <em>actively managed</em>.</>}
      />
      <div className="body">
        <div className="grid">
          <div className="gh">Risk</div>
          <div className="gh">Mitigation</div>
          <div className="gh">Gate</div>
          <div className="gh">Threshold</div>
          {rows.map((row) => (
            <div key={row.r} style={{ display: "contents" }}>
              <div className="row risk">{row.r}</div>
              <div className="row mit">{row.m}</div>
              <div className="row gate">{row.g}</div>
              <div className="row threshold">{row.t}</div>
            </div>
          ))}
        </div>
        <div className="kill">
          <div className="tag">Kill criterion</div>
          <div className="body-text">
            If Level 4 capability or city-level economics do not clear gates within defined milestones, slow expansion and shift emphasis to restricted environments or selective licensing.
          </div>
        </div>
      </div>
    </>
  );
}
