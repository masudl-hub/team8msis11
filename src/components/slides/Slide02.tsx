import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

export function Slide02() {
  return (
    <>
      <Eyebrow>02 · THE QUESTION</Eyebrow>
      <Title>Operator-first, layered licensing, and tight integration is Google's AV strategy.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="two-col s02-flow">
          <div className="col left">
            <div className="tag">THE CASE PROMPT</div>
            <h3>Advise Pichai on AV strategy.</h3>
            <div className="rule" />
            <p>Consider the original motivation, how Google can monetize, what competitors are doing, and Google's strategic positioning — with explicit attention to mission fit.</p>
            <div className="note">A broad strategic question.</div>
          </div>
          <div className="divider">
            <svg className="flow-arrow" viewBox="0 0 64 32" aria-hidden="true">
              <path d="M0 16 L52 16 M40 4 L56 16 L40 28" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="col right">
            <div className="tag">OUR ANSWER</div>
            <h3>Operate. Layer. Integrate.</h3>
            <div className="rule" />
            <p>Operate first-party robotaxi as the economic engine, layer a non-competing licensing track on top, and integrate with the rest of Google's platforms.</p>
            <div className="note">One sentence. Three components.</div>
          </div>
        </div>
      </div>
      <Footer n={2} />
    </>
  );
}
