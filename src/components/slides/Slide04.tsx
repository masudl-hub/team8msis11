import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

export function Slide04() {
  return (
    <>
      <Eyebrow>04 · MONETIZATION</Eyebrow>
      <Title>Only two monetization paths fit Google's moat.</Title>
      <Sub>Same framework filters as the 2014 brief. The 2026 evidence sharpens the verdict.</Sub>
      <div className="u-body">
        <div className="quadmap">
          <div className="qm-yaxis">
            <span className="qm-tick qm-tick-high">HIGH</span>
            <span className="qm-ytitle">UNIQUELY ALIGNED WITH GOOGLE&apos;S MOAT</span>
            <span className="qm-tick qm-tick-low">LOW</span>
          </div>

          <div className="qm-chart">
            <div className="qm-axis-h" />
            <div className="qm-axis-v" />

            <svg className="qm-curve" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 12,82 C 35,72 60,42 86,16"
                fill="none"
                stroke="rgba(0,0,0,0.18)"
                strokeWidth="0.35"
                strokeDasharray="1.4,1.4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="qm-q qm-q-tl">WAIT IT OUT</div>
            <div className="qm-q qm-q-tr qm-build">BUILD</div>
            <div className="qm-q qm-q-bl">WALK AWAY</div>
            <div className="qm-q qm-q-br">BUY OR PARTNER</div>

            <div className="qm-pt" style={{ left: "14%", bottom: "20%" }}>
              <div className="qm-dot qm-x" />
              <div className="qm-lbl qm-right">
                <div className="qm-ttl">A · SELL VEHICLES</div>
                <div className="qm-sub">reject · &ldquo;Google is not a car manufacturer&rdquo;</div>
              </div>
            </div>

            <div className="qm-pt" style={{ left: "58%", bottom: "26%" }}>
              <div className="qm-dot qm-x" />
              <div className="qm-lbl qm-right">
                <div className="qm-ttl">B · LICENSE TO OEMs</div>
                <div className="qm-sub">reject · Mobileye is the price floor</div>
              </div>
            </div>

            <div className="qm-pt qm-win" style={{ left: "58%", bottom: "58%" }}>
              <div className="qm-dot qm-circle" />
              <div className="qm-lbl qm-right">
                <div className="qm-ttl">D · NON-COMPETING LICENSE</div>
                <div className="qm-sub">recommend secondary · capital-light layer</div>
              </div>
            </div>

            <div className="qm-pt qm-win" style={{ left: "78%", bottom: "78%" }}>
              <div className="qm-dot qm-square" />
              <div className="qm-lbl qm-left">
                <div className="qm-ttl">C · OPERATE FIRST-PARTY RIDES</div>
                <div className="qm-sub">recommend primary · the data flywheel</div>
              </div>
            </div>
          </div>

          <div className="qm-corner" />
          <div className="qm-xaxis">
            <span className="qm-tick qm-tick-low">LOW</span>
            <span className="qm-xtitle">OPERATIONAL FIT FOR GOOGLE</span>
            <span className="qm-tick qm-tick-high">HIGH</span>
          </div>
        </div>
      </div>
    </>
  );
}
