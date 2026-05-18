import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

export function Slide07() {
  return (
    <>
      <Eyebrow>07 · NOTABLE ABSENCES</Eyebrow>
      <Title>Reject the parent-P&L model — the two rivals who tried it both quit in 2024.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="verdict-bar">
          <span className="vb-l">INTEGRATED INTO PARENT P&amp;L</span>
          <span className="vb-arrow">→</span>
          <span className="vb-r">BOTH KILLED IN 2024</span>
        </div>
        <div className="tomb-pair">
          <div className="tomb">
            <div className="tag">GM · CRUISE</div>
            <div className="name">Cruise</div>
            <div className="big">$10B+</div>
            <div className="big-cap">spent before shutdown</div>
            <div className="mini-rule" />
            <div className="fate">Robotaxi unit shut · December 2024</div>
            <div className="detail">Run inside GM's mainstream-auto P&amp;L. An October 2023 SF pedestrian incident ended the company. Remaining capital was redirected to Super Cruise.</div>
          </div>
          <div className="tomb">
            <div className="tag">APPLE · TITAN</div>
            <div className="name">Project Titan</div>
            <div className="big">~$10B</div>
            <div className="big-cap">spent before cancellation</div>
            <div className="mini-rule" />
            <div className="fate">Cancelled · February 2024</div>
            <div className="detail">A decade inside a hardware-margin business. ~2,000 employees were reassigned to AI. The program never shipped a vehicle.</div>
          </div>
        </div>
      </div>
      <div className="u-source">Sources: NPR · Dec 11 2024 · TechCrunch · Feb 27 2024</div>
    </>
  );
}
