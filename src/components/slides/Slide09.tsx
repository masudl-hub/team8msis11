import { Header } from "./_chrome";

export const slideClass = "s-risk";

const RISKS = [
  { name: "Capability", mit: "Weather-simple, pre-mapped geofences", tag: "Disengagement ↓", color: "var(--g-blue)" },
  { name: "Liability", mit: "Safety board + reinsurance partner", tag: "Incident review", color: "var(--g-red)" },
  { name: "Privacy", mit: "Aggregate → Maps · rider data opt-in", tag: "100% audited", color: "var(--g-yellow)" },
  { name: "Economics", mit: "No expansion without modeled cost / mile", tag: "Gate per city", color: "var(--g-green)" },
];

export function Slide09() {
  return (
    <>
      <Header
        num="08 · Risks & mitigations"
        title={<>The recommendation works only if these are <em>actively managed</em>.</>}
      />
      <div className="body">
        <div className="risk-grid">
          {RISKS.map((r) => (
            <div key={r.name} className="card">
              <span className="bullet" style={{ background: r.color }} />
              <div className="name">{r.name}</div>
              <div className="mit">{r.mit}</div>
              <div className="tag">{r.tag}</div>
            </div>
          ))}
        </div>
        <div className="kill">
          <div className="tag">Kill criterion</div>
          <div className="body-text">
            If capability or city-level economics miss the gates, slow expansion and shift weight to licensing.
          </div>
        </div>
      </div>
    </>
  );
}
