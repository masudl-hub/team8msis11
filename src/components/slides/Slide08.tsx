import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const LEFT = [
  { tag: "NAVIGATION",     nm: "Maps",         d: "Most-used navigation product globally; Waze real-time traffic." },
  { tag: "ATTENTION",      nm: "YouTube",      d: "2.5B+ monthly users; the in-ride entertainment surface." },
  { tag: "DEPLOYMENT",     nm: "AV subsidiary",d: "170M autonomous miles — the physical-AI proof point." },
];

const RIGHT = [
  { tag: "INTERFACE",      nm: "Android Auto", d: "~70% smartphone share; in nearly every new U.S. vehicle." },
  { tag: "INFRASTRUCTURE", nm: "Google Cloud", d: "Fastest-growing major cloud; TPU silicon; Vertex AI." },
  { tag: "FRONTIER AI",    nm: "Gemini",       d: "Pichai's centerpiece; physical-world products are the moat." },
];

export function Slide08() {
  return (
    <>
      <Eyebrow>08 · STRATEGIC POSITION</Eyebrow>
      <Title>Defend the AV bet as a six-platform moat — not as a standalone car program.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="hub-wrap">
          <div className="hub-grid">
            <div className="hub-col left">
              {LEFT.map((p) => (
                <div key={p.nm} className="hub-card right-align">
                  <div className="hc-tag">{p.tag}</div>
                  <div className="hc-nm">{p.nm}</div>
                  <div className="hc-d">{p.d}</div>
                  <div className="hc-spoke" />
                </div>
              ))}
            </div>

            <div className="hub-center">
              <div className="hub-core">
                <div className="hc-core-tag">AV SUBSIDIARY</div>
                <div className="hc-core-stat">170M</div>
                <div className="hc-core-cap">autonomous miles</div>
              </div>
            </div>

            <div className="hub-col right">
              {RIGHT.map((p) => (
                <div key={p.nm} className="hub-card left-align">
                  <div className="hc-spoke left" />
                  <div className="hc-tag">{p.tag}</div>
                  <div className="hc-nm">{p.nm}</div>
                  <div className="hc-d">{p.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hub-foot">
            <div className="hf-tag">WHY THIS COMBINATION IS HARD TO REPLICATE</div>
            <div className="hf-row">
              <div className="hf-item"><strong>Microsoft</strong> — has the AI, no physical surface.</div>
              <div className="hf-item"><strong>Apple</strong> — killed its AV bet in 2024.</div>
              <div className="hf-item"><strong>Amazon</strong> — lacks the frontier model.</div>
              <div className="hf-item"><strong>Tesla</strong> — lacks the platform.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
