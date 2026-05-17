import { Eyebrow, Title, Sub, Footer } from "./_u";

export const slideClass = "s-u";

export function Slide07() {
  return (
    <>
      <Eyebrow>07 · NOTABLE ABSENCES</Eyebrow>
      <Title>Two best-capitalized rivals. Both gone.</Title>
      <Sub>Both tried integration. Both failed in the way B&amp;C 1995 predicted.</Sub>
      <div className="u-body">
        <div className="neg-split">
          <div className="col">
            <div className="tag">GM · CRUISE</div>
            <div className="name">Cruise</div>
            <div className="big">$10B+</div>
            <div className="big-cap">spent before shutdown</div>
            <div className="mini-rule" />
            <div className="fate">Robotaxi unit shut · December 2024</div>
            <div className="detail">Integrated into GM's mainstream-auto P&amp;L. Oct 2023 SF pedestrian incident ended the company. GM redirected capital to Super Cruise.</div>
          </div>
          <div className="divider" />
          <div className="col">
            <div className="tag">APPLE · TITAN</div>
            <div className="name">Project Titan</div>
            <div className="big">~$10B</div>
            <div className="big-cap">spent before cancellation</div>
            <div className="mini-rule" />
            <div className="fate">Cancelled · February 2024</div>
            <div className="detail">Integrated inside a hardware-margin business for a decade. ~2,000 employees reassigned to AI. Never shipped a vehicle.</div>
          </div>
        </div>
      </div>
      <div className="u-source">Sources: NPR Dec 11 2024 · TechCrunch Feb 27 2024</div>
      <Footer n={7} />
    </>
  );
}
