export const slideClass = "s-synth";

function TriangleSvg() {
  const top = { x: 500, y: 90 };
  const right = { x: 880, y: 470 };
  const left = { x: 120, y: 470 };
  const points = `${top.x},${top.y} ${right.x},${right.y} ${left.x},${left.y}`;
  const colors = ["#1A73E8", "#EA4335", "#F9AB00"];
  const verts = [top, right, left];
  return (
    <svg viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid meet">
      <polygon points={points} fill="#F2F1ED" stroke="#111111" strokeWidth="1.4" />
      {verts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="13" fill="#FAFAF7" stroke={colors[i]} strokeWidth="3" />
          <circle cx={p.x} cy={p.y} r="5" fill={colors[i]} />
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
          <div className="tag">Operate · License · Gate</div>
          <div className="verdict">Mobility as an information network.</div>
        </div>
      </div>
      <p className="closer">
        <strong>Continue. Operate. Separate. Gate. License selectively.</strong> Fund the AV subsidiary, launch constrained pilots, reject consumer car sales, keep OEM licensing as a hedge.
      </p>
    </>
  );
}
