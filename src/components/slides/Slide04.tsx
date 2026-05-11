import { Header, Watermark } from "./_chrome";

export const slideClass = "s-wrong";

export function Slide04() {
  return (
    <>
      <Watermark />
      <Header
        num="03 · Eliminate consumer car sales"
        title={<>Wrong <em>game</em>.</>}
      />
      <div className="body">
        <div className="col us">
          <div className="head">Google</div>
          <ul>
            <li>Data</li>
            <li>Software</li>
            <li>Capital</li>
          </ul>
        </div>
        <div className="vs">vs</div>
        <div className="col them">
          <div className="head">OEMs</div>
          <ul>
            <li>Plants</li>
            <li>Dealers</li>
            <li>Liability</li>
          </ul>
        </div>
      </div>
      <div className="footnote">A sustaining game Google does not need to win.</div>
    </>
  );
}
