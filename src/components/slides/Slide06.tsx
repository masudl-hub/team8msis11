import { Eyebrow, Sub } from "./_u";
import { PresenterVideo } from "./PresenterVideo";
import waymoLogo from "../../assets/waymo-logo.png";
import teslaLogo from "../../assets/tesla.svg";
import amazonLogo from "../../assets/amazon.svg";
import mobileyeLogo from "../../assets/mobileye.svg";
import uberLogo from "../../assets/uber.svg";

export const slideClass = "s-u";

const COMP = [
  { logo: teslaLogo, tag: "CHALLENGER", name: "Tesla", stat: "~25", cap: "unsupervised vehicles", detail: "4–9× human crash rate · FSD v15 dependency" },
  { logo: amazonLogo, tag: "CHALLENGER", name: "Zoox / Amazon", stat: "2", cap: "cities (Vegas + SF)", detail: "Free rides only · paid service pending NHTSA" },
  { logo: mobileyeLogo, tag: "LICENSOR", name: "Mobileye + VW", hideName: true, stat: "$24.5B", cap: "8-yr automotive pipeline", detail: "100K AV fleet target by 2033" },
  { logo: uberLogo, tag: "DISTRIBUTOR", name: "Uber", hideName: true, stat: "13.5B", cap: "trips in 2025", detail: "Distribution partner, not operator" },
];

export function Slide06() {
  return (
    <>
      <Eyebrow>06 · LANDSCAPE</Eyebrow>
      <h2 className="u-title with-video">Google leads the AV field — and the gap is widening.</h2>
      <p className="u-sub with-video">One leader. Two challengers. A licensor. A distributor.</p>
      <PresenterVideo src="/slide6-presenter.mp4" />
      <div className="u-body with-video">
      <div className="u-body">
        <div className="landscape">
          <div className="ls-lead">
            <img src={waymoLogo} className="ls-logo-lg" alt="" />
            <div className="ls-tag">LEADER</div>
            <div className="ls-rule" />
            <div className="ls-big">500K</div>
            <div className="ls-big-cap">RIDES PER WEEK · 10 CITIES</div>
            <div className="ls-safety">92% fewer serious-injury crashes</div>
          </div>
          <div className="ls-grid">
            {COMP.map((c) => (
              <div key={c.name} className="ls-card">
                <img src={c.logo} className="ls-logo" alt="" />
                <div className="ls-card-tag">{c.tag}</div>
                {!c.hideName && <div className="ls-card-name">{c.name}</div>}
                <div className="ls-card-rule" />
                <div className="ls-card-stat">{c.stat}<span>{c.cap}</span></div>
                <div className="ls-card-detail">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
