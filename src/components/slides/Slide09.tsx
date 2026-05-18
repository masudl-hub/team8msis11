export const slideClass = "s-u recommend";

const C = [
  { n: "01", t: <>Operate <em>first-party AV service</em> as the primary economic engine.</> },
  { n: "02", t: <>Layer a <em>non-competing licensing track</em> — logistics, freight, mining, agriculture, defense.</> },
  { n: "03", t: <>Integrate tightly with <em>Maps, Android Auto, Gemini, Cloud, Search Local, YouTube</em>.</> },
];

export function Slide09() {
  return (
    <>
      <div className="r-eyebrow">RECOMMENDATION TO PICHAI</div>
      <div className="r-rule" />
      <div className="r-components">
        {C.map((c) => (
          <div key={c.n} className="r-comp">
            <div className="rn">{c.n}</div>
            <div className="rt">{c.t}</div>
          </div>
        ))}
      </div>
      <div className="r-tag">OPERATE · LAYER · INTEGRATE</div>
    </>
  );
}
