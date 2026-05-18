import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const M = [
  { n: "01", t: "Physical-world data ingestion", d: "AV miles feed Maps and Search Local — the loop the 2014 case named as Google's most valuable potential asset." },
  { n: "02", t: "Universal accessibility", d: "Mobility-as-a-service for the elderly, disabled, and unlicensed — the literal clause of Google's mission applied to mobility." },
  { n: "03", t: "Physical-AI proof point", d: "170M autonomous miles makes Google's AI thesis credible vs OpenAI, Anthropic, and Meta — who cannot say the same." },
];

export function Slide10() {
  return (
    <>
      <Eyebrow>10 · MISSION FIT</Eyebrow>
      <Title>Three mechanisms. All operational in 2026.</Title>
      <Sub>"Organize the world's information and make it universally accessible and useful."</Sub>
      <div className="u-body">
        <div className="mech-list">
          {M.map((m) => (
            <div key={m.n} className="mech">
              <div className="mn">{m.n}</div>
              <div className="mb">
                <div className="mt">{m.t}</div>
                <div className="md">{m.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer n={10} />
    </>
  );
}
