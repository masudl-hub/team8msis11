import { Header, Watermark } from "./_chrome";

export const slideClass = "s-license";

export function Slide05() {
  return (
    <>
      <Watermark />
      <Header
        num="04 · Position licensing"
        title={<>Licensing gives <em>scale</em> — but loosens Google's grip on the customer.</>}
      />
      <div className="body">
        <div className="balance">
          <div className="pan pro">
            <div className="head">Upside</div>
            <div className="big">Asset-light reach</div>
            <div className="small">OAA showed 40+ partners willing to adopt Google software in dashboards.</div>
          </div>
          <div className="fulcrum">
            <div className="axis" />
            <div className="verdict">Useful as a hedge.<br/>Weak as the primary strategy.</div>
            <div className="axis" style={{ transform: "rotate(180deg)" }} />
          </div>
          <div className="pan con">
            <div className="head">Cost</div>
            <div className="big">No operating loop</div>
            <div className="small">Maps, brain, rider interface, fleet data — control flows to whoever owns the vehicle.</div>
          </div>
        </div>
        <div className="signals">
          <div className="signal">
            <div className="who">Mercedes + Nokia HERE</div>
            <div className="what">OEMs are buying maps elsewhere to avoid Google dependency.</div>
          </div>
          <div className="signal">
            <div className="who">Mobileye</div>
            <div className="what">Already embedded with GM, BMW, Volvo — cheaper, partner-friendly, neutral.</div>
          </div>
          <div className="signal">
            <div className="who">Nissan · OAA</div>
            <div className="what">Selective partnership appetite exists where Google does not control the vehicle.</div>
          </div>
        </div>
      </div>
    </>
  );
}
