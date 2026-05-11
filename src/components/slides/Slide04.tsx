import { Header } from "./_chrome";

export const slideClass = "s-wrong";

export function Slide04() {
  return (
    <>
      <Header
        num="03 · Eliminate consumer car sales"
        title={<>Selling cars puts Google in the <em>wrong game</em>.</>}
      />
      <div className="body">
        <div className="col us">
          <div className="head">Google</div>
          <div className="name">Platform<br />company</div>
          <div className="label">Data · Software · Capital</div>
        </div>
        <div className="vs"><span>vs.</span></div>
        <div className="col them">
          <div className="head">OEMs</div>
          <div className="name">Car<br />company</div>
          <div className="label">Plants · Dealers · Liability</div>
        </div>
      </div>
      <div className="footnote">
        Only <strong>20%</strong> of consumers would pay $3,000 for autonomous features. A sustaining game Google does not need to win.
      </div>
    </>
  );
}
