import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

export function Slide02() {
  return (
    <>
      <Eyebrow>02 · FRAMING</Eyebrow>
      <Title>The question has changed.</Title>
      <Sub>The 2014 prompt is closed. A different decision faces Pichai in 2026.</Sub>
      <div className="u-body">
        <div className="two-col">
          <div className="col left">
            <div className="tag">2014</div>
            <h3>The case question</h3>
            <div className="rule" />
            <p>Should Google enter autonomous vehicles? What business model? How to compete with established automakers?</p>
            <div className="note">Decision under technical uncertainty.</div>
          </div>
          <div className="divider" />
          <div className="col right">
            <div className="tag">2026</div>
            <h3>The question we are answering</h3>
            <div className="rule" />
            <p>Waymo has won the proof. 500K rides/week. $126B valuation. How does Alphabet convert leadership into durable economic value before rivals close the gap?</p>
            <div className="note">Decision under commercial validation.</div>
          </div>
        </div>
      </div>
      <Footer n={2} />
    </>
  );
}
