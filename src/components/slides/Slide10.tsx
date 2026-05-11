export const slideClass = "s-synth";

function TriangleSvg() {
  // Triangle vertices in viewBox space, matching the .vertex % positions below.
  const top = { x: 500, y: 90 };
  const right = { x: 880, y: 470 };
  const left = { x: 120, y: 470 };
  const points = `${top.x},${top.y} ${right.x},${right.y} ${left.x},${left.y}`;
  return (
    <svg viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="tri-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <polygon points={points} fill="url(#tri-g)" stroke="rgba(139,180,255,0.55)" strokeWidth="1.4" />
      {[top, right, left].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="14" fill="#0B0D10" stroke="#8BB4FF" strokeWidth="2" />
          <circle cx={p.x} cy={p.y} r="4" fill="#8BB4FF" />
        </g>
      ))}
    </svg>
  );
}

export function Slide10() {
  return (
    <>
      <div className="lead">09 · The final answer</div>
      <div className="triangle">
        <TriangleSvg />
        <div className="vertex top">
          <div className="lbl">Mission fit</div>
          <div className="v">Universally useful</div>
        </div>
        <div className="vertex right">
          <div className="lbl">Data flywheel</div>
          <div className="v">Physical-world Maps</div>
        </div>
        <div className="vertex left">
          <div className="lbl">Org structure</div>
          <div className="v">Separated subsidiary</div>
        </div>
        <div className="center">
          <div className="ring">Operate · License · Gate</div>
          <div className="verdict">Mobility as an information network.</div>
        </div>
      </div>
      <p className="closer">
        <strong>Continue. Operate. Separate. Gate. License selectively.</strong> Fund the AV subsidiary, launch constrained pilots, reject consumer car sales, keep OEM licensing as a hedge.
      </p>
    </>
  );
}
