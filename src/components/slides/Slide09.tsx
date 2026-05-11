import { Header, Watermark } from "./_chrome";

export const slideClass = "s-risk";

export function Slide09() {
  const cards = [
    { r: "Capability", t: "Trend ↓", color: "var(--g-blue)", note: "Disengagement rate" },
    { r: "Liability", t: "Pass / fail", color: "var(--g-red)", note: "Incident review" },
    { r: "Privacy", t: "100% audited", color: "var(--g-yellow)", note: "Rider data segregated" },
    { r: "Economics", t: "Gate per city", color: "var(--g-green)", note: "Cost / revenue-mile" },
  ];
  return (
    <>
      <Watermark />
      <Header
        num="08 · Risks & mitigations"
        title={<>Four gates. <em>Actively managed.</em></>}
      />
      <div className="body">
        <div className="cards">
          {cards.map((c) => (
            <div key={c.r} className="card">
              <span className="chip" style={{ background: c.color }} />
              <div className="r">{c.r}</div>
              <div className="note">{c.note}</div>
              <div className="t">{c.t}</div>
            </div>
          ))}
        </div>
        <div className="kill">
          <span className="tag">Kill criterion</span>
          <span className="body-text">Gates fail across milestones → slow, restrict, or shift to selective licensing.</span>
        </div>
      </div>
    </>
  );
}
