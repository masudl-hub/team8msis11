import { Header, Watermark } from "./_chrome";

export const slideClass = "s-license";

export function Slide05() {
  return (
    <>
      <Watermark />
      <Header
        num="04 · Position licensing"
        title={<>A useful <em>hedge</em> — not the strategy.</>}
      />
      <div className="body">
        <div className="scale">
          <div className="pan pro">
            <div className="head">Reach</div>
            <div className="big">Asset-light</div>
          </div>
          <div className="pan con">
            <div className="head">Cost</div>
            <div className="big">No loop</div>
          </div>
        </div>
        <div className="verdict">Keep licensing in non-competing use cases. Operate everywhere else.</div>
      </div>
    </>
  );
}
