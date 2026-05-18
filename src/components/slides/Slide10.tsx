import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

const M = [
  { n: "01", t: "Physical-world data ingestion", d: "AV miles feed Maps and Search Local — the loop the 2014 case named as Google's most valuable potential asset." },
  { n: "02", t: "Universal accessibility",       d: "Mobility-as-a-service for the elderly, disabled, and unlicensed — the literal clause of Google's mission applied to mobility." },
  { n: "03", t: "Physical-AI proof point",       d: "170M autonomous miles makes Google's AI thesis credible vs OpenAI, Anthropic, and Meta — who cannot say the same.", win: true },
];

export function Slide10() {
  return (
    <>
      <Eyebrow>10 · MISSION FIT</Eyebrow>
      <Title>AV operations execute Google's mission through data, accessibility, and AI proof.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="pyr">
          <div className="pyr-cap">
            <div className="pyr-cap-tag">GOOGLE MISSION</div>
            <div className="pyr-cap-text">"Organize the world's information and make it universally accessible and useful."</div>
          </div>
          <div className="pyr-tiers">
            {M.map((m, i) => (
              <div key={m.n} className={`pyr-tier t${i} ${m.win ? "win" : ""}`}>
                <div className="pyr-inner">
                  <div className="pn">{m.n}</div>
                  <div className="pb">
                    <div className="pt">{m.t}</div>
                    <div className="pd">{m.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
