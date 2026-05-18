import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

export function Slide07() {
  return (
    <>
      <Eyebrow>07 · NOTABLE ABSENCES</Eyebrow>
      <Title>The two best-capitalized rivals folded AVs into a parent P&L — and both failed.</Title>
      <Sub>​</Sub>
      <div className="u-body">
        <div className="tomb-wrap">
          <div className="tomb-timeline">
            <div className="tt-bar" />
            <span className="tt-yr left">2015</span>
            <span className="tt-yr right">2024</span>
            <div className="tt-mark" style={{ left: "94%" }}>
              <div className="x">✕</div>
              <div className="lbl">Titan cancelled · Feb 2024</div>
            </div>
            <div className="tt-mark" style={{ left: "98%" }}>
              <div className="x">✕</div>
              <div className="lbl alt">Cruise shut · Dec 2024</div>
            </div>
            <div className="tt-bracket"><span>INTEGRATION INTO PARENT P&amp;L</span></div>
          </div>
          <div className="tomb-pair">
            <div className="tomb">
              <div className="tag">GM · CRUISE</div>
              <div className="name">Cruise</div>
              <div className="big">$10B+</div>
              <div className="big-cap">spent before shutdown</div>
              <div className="mini-rule" />
              <div className="fate">Robotaxi unit shut · December 2024</div>
              <div className="detail">Integrated into GM's mainstream-auto P&amp;L. Oct 2023 SF pedestrian incident ended the company. Capital redirected to Super Cruise.</div>
            </div>
            <div className="tomb">
              <div className="tag">APPLE · TITAN</div>
              <div className="name">Project Titan</div>
              <div className="big">~$10B</div>
              <div className="big-cap">spent before cancellation</div>
              <div className="mini-rule" />
              <div className="fate">Cancelled · February 2024</div>
              <div className="detail">Inside a hardware-margin business for a decade. ~2,000 employees reassigned to AI. Never shipped a vehicle.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-source">Sources: NPR Dec 11 2024 · TechCrunch Feb 27 2024</div>
    </>
  );
}
