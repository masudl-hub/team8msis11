export const slideClass = "s-synth";

function TriangleSvg() {
  return (
    <svg viewBox="0 0 900 540" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="tri-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polygon points="450,40 860,500 40,500" fill="url(#tri-g)" stroke="#4F8CFF" strokeWidth="1.5" />
      <polygon points="450,180 660,420 240,420" fill="none" stroke="rgba(255,255,255,0.18)" strokeDasharray="3 6" />
      <circle cx="450" cy="40" r="10" fill="#0B0D10" stroke="#8BB4FF" strokeWidth="2" />
      <circle cx="860" cy="500" r="10" fill="#0B0D10" stroke="#8BB4FF" strokeWidth="2" />
      <circle cx="40" cy="500" r="10" fill="#0B0D10" stroke="#8BB4FF" strokeWidth="2" />
    </svg>
  );
}

export function Slide10() {
  return (
    <>
      <div className="lead">09 · The final answer</div>
      <div className="triangle">
        <TriangleSvg />
        <div className="vertex" style={{ left: "50%", top: "8%" }}>
          <div className="lbl">Mission fit</div>
          <div className="v">Universally useful</div>
        </div>
        <div className="vertex" style={{ left: "95%", top: "92%" }}>
          <div className="lbl">Data flywheel</div>
          <div className="v">Physical-world Maps</div>
        </div>
        <div className="vertex" style={{ left: "5%", top: "92%" }}>
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
