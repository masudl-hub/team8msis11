import { Header, Watermark } from "./_chrome";

export const slideClass = "s-wrong";

export function Slide04() {
  return (
    <>
      <Watermark />
      <Header
        num="03 · Eliminate consumer car sales"
        title={<>Selling cars puts Google in the <em>wrong game</em>.</>}
      />
      <div className="body">
        <div className="col us">
          <div className="head">Google brings</div>
          <div className="label">A platform company</div>
          <div className="name">Data ·<br />Software ·<br />Capital</div>
          <div className="strength">Mapping & sensor stack</div>
          <div className="strength">ML and simulation</div>
          <div className="strength">Patient capital</div>
        </div>
        <div className="vs">vs.</div>
        <div className="col them">
          <div className="head">OEMs already own</div>
          <div className="label">A car company</div>
          <div className="name">Plants ·<br />Dealers ·<br />Liability</div>
          <div className="strength">Manufacturing at scale</div>
          <div className="strength">Service & distribution</div>
          <div className="strength">Decades of liability</div>
        </div>
      </div>
      <div className="footnote">
        Only 20% of consumers would pay $3,000 for autonomous features. The pods cannot legally be driven without manual controls. This is a sustaining game Google does not need to win.
      </div>
    </>
  );
}
