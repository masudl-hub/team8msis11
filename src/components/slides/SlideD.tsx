import { Header, Watermark } from "./_chrome";

export const slideClass = "s-bk";

export function SlideD() {
  return (
    <>
      <Watermark />
      <Header num="Backup D · Privacy architecture" title="What flows to Maps — and what does not." />
      <div className="body">
        <div className="split">
          <div className="pane flow">
            <div className="head">Flows to Maps · aggregate</div>
            <ul>
              <li>Lane geometry, signage, hazards</li>
              <li>Traffic flow and travel-time deltas</li>
              <li>Construction, closures, weather impact</li>
              <li>Safety / incident telemetry</li>
            </ul>
          </div>
          <div className="pane hold">
            <div className="head">Stays inside · per rider</div>
            <ul>
              <li>Trip origin / destination history</li>
              <li>Identity-linked behavior</li>
              <li>In-cabin sensor streams</li>
              <li>Non-safety personalization (opt-in only)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
