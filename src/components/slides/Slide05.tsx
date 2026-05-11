import { Header } from "./_chrome";

export const slideClass = "s-license";

export function Slide05() {
  return (
    <>
      <Header
        num="04 · Position licensing"
        title={<>Licensing gives <em>scale</em> — but loosens Google's grip on the customer.</>}
      />
      <div className="body">
        <div className="balance">
          <div className="pan pro">
            <div className="head">Upside</div>
            <div className="big">Asset-light reach</div>
            <div className="small">OAA: 40+ partners willing to adopt Google software.</div>
          </div>
          <div className="fulcrum">
            <div className="verdict">
              Useful as a hedge.
              <strong>Weak as the primary strategy.</strong>
            </div>
          </div>
          <div className="pan con">
            <div className="head">Cost</div>
            <div className="big">No operating loop</div>
            <div className="small">Control flows to whoever owns the vehicle.</div>
          </div>
        </div>
      </div>
    </>
  );
}
