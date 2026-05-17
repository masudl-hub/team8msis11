import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

export function Slide05() {
  return (
    <>
      <Eyebrow>05 · NEGATIVE CASES</Eyebrow>
      <Title>Integration killed the two best-capitalized rivals.</Title>
      <Sub>Both failures match the Bower &amp; Christensen 1995 prediction.</Sub>
      <div className="u-body">
        <div className="neg-split">
          <div className="col">
            <div className="tag">GM · CRUISE</div>
            <div className="name">Cruise</div>
            <div className="big">$10B+</div>
            <div className="big-cap">spent before shutdown</div>
            <div className="mini-rule" />
            <div className="fate">Folded into Super Cruise · Dec 2024</div>
            <div className="detail">Integrated in mainstream-auto P&amp;L. SF pedestrian incident Oct 2023 triggered permit suspension. GM ended robotaxi funding citing capital needed to scale.</div>
          </div>
          <div className="divider" />
          <div className="col">
            <div className="tag">APPLE · TITAN</div>
            <div className="name">Project Titan</div>
            <div className="big">~$10B</div>
            <div className="big-cap">spent before cancellation</div>
            <div className="mini-rule" />
            <div className="fate">Cancelled · Feb 2024</div>
            <div className="detail">Integrated inside a hardware-margin business for a decade. ~2,000 employees reassigned to AI. Never shipped.</div>
          </div>
        </div>
      </div>
      <Footer n={5} />
    </>
  );
}
