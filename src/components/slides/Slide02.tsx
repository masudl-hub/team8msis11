import { Header, Watermark } from "./_chrome";

export const slideClass = "s-frame";

export function Slide02() {
  return (
    <>
      <Watermark />
      <Header
        num="01 · The strategic question"
        title={<>This case is about <em>information</em>, not just cars.</>}
      />
      <div className="body">
        <div>
          <div className="col-head">Why Google cares</div>
          <div className="motive"><span className="num">01</span><span className="label">Physical-world data for Maps</span></div>
          <div className="motive"><span className="num">02</span><span className="label">Mobility access as mission</span></div>
          <div className="motive"><span className="num">03</span><span className="label">Commute attention recovered</span></div>
          <div className="motive"><span className="num">04</span><span className="label">Safety upside at scale</span></div>
        </div>
        <div className="divider" />
        <div className="decisions">
          <div className="decision">
            <div className="q">What does Google sell?</div>
            <div className="a"><span className="strike">cars</span> · <span className="strike">software only</span> · <span className="pick">rides</span></div>
          </div>
          <div className="decision">
            <div className="q">Where does the bet live?</div>
            <div className="a"><span className="strike">inside Google</span> · <span className="pick">separated subsidiary</span></div>
          </div>
          <div className="decision">
            <div className="q">How does it reach the road?</div>
            <div className="a"><span className="strike">national L4</span> · <span className="pick">gated geofences</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
