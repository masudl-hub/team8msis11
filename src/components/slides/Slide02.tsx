import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

export function Slide02() {
  return (
    <>
      <Eyebrow>02 · THE QUESTION</Eyebrow>
      <Title>What the case asks. What we answer.</Title>
      <Sub>The prompt is broad. Our answer is one sentence.</Sub>
      <div className="u-body">
        <div className="two-col">
          <div className="col left">
            <div className="tag">THE CASE PROMPT</div>
            <h3>Advise Pichai on AV strategy.</h3>
            <div className="rule" />
            <p>Consider the original motivation, how Google can monetize, what competitors are doing, and Google's strategic positioning — with explicit attention to mission fit.</p>
            <div className="note">A broad strategic question.</div>
          </div>
          <div className="divider" />
          <div className="col right">
            <div className="tag">OUR ANSWER</div>
            <h3>Operator-first. Layered licensing. Integrated.</h3>
            <div className="rule" />
            <p>Operate first-party robotaxi as the economic engine, layer a non-competing licensing track, and integrate tightly with the rest of Google's platforms.</p>
            <div className="note">One sentence. Three components.</div>
          </div>
        </div>
      </div>
      <Footer n={2} />
    </>
  );
}
