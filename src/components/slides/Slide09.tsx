import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

const BOXES = [
  { n: "01", t: "Growth shape", d: "How fast and where to expand geographically and into adjacent products." },
  { n: "02", t: "Structural relationship", d: "Continued subsidiary, IPO, or full separation from Alphabet." },
  { n: "03", t: "Moat strategy", d: "How to defend the data and mapping lead as autonomy commoditizes." },
];

export function Slide09() {
  return (
    <>
      <Eyebrow>09 · THE 2026 QUESTION</Eyebrow>
      <Title>Pichai faces three real decisions.</Title>
      <Sub>Not whether to play — but how to convert leadership into a moat.</Sub>
      <div className="u-body">
        <div className="boxes">
          {BOXES.map((b) => (
            <div key={b.n} className="box">
              <div className="num">{b.n}</div>
              <h3>{b.t}</h3>
              <div className="rule" />
              <p>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer n={9} />
    </>
  );
}
