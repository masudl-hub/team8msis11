import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const P = [
  { tag: "NAVIGATION", name: "Maps", d: "Most-used navigation product globally; Waze real-time traffic." },
  { tag: "INTERFACE", name: "Android Auto", d: "~70% smartphone share; in nearly every new U.S. vehicle." },
  { tag: "FRONTIER AI", name: "Gemini", d: "Pichai's centerpiece; physical-world products are the moat." },
  { tag: "INFRASTRUCTURE", name: "Google Cloud", d: "Fastest-growing major cloud; TPU silicon; Vertex AI." },
  { tag: "ATTENTION", name: "YouTube", d: "2.5B+ monthly users; the in-ride entertainment surface." },
  { tag: "DEPLOYMENT", name: "AV subsidiary", d: "170M autonomous miles — the physical-AI proof point.", av: true },
];

export function Slide08() {
  return (
    <>
      <Eyebrow>08 · STRATEGIC POSITION</Eyebrow>
      <Title>Google's moat is the portfolio, not the AV unit.</Title>
      <Sub>Six platforms that compound when integrated.</Sub>
      <div className="u-body">
        <div className="portfolio">
          {P.map((p) => (
            <div key={p.name} className={`p-tile ${p.av ? "av" : ""}`}>
              <div>
                <div className="ptag">{p.tag}</div>
                <div className="pname">{p.name}</div>
              </div>
              <div className="pdesc">{p.d}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="portfolio-cap">
        Microsoft has the AI but no physical surface. Apple killed its bet. Amazon lacks the frontier model. Tesla lacks the platform. <strong>Google's combination is genuinely difficult to replicate.</strong>
      </div>
      <Footer n={8} />
    </>
  );
}
