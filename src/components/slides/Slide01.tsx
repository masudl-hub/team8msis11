export const slideClass = "s-u title-slide";

export function Slide01() {
  return (
    <>
      <div className="side-bar" />
      <div className="waymo-logo">
        <svg viewBox="0 0 200 40" width="200" height="40" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="32" fontFamily="'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="36" fontWeight="700" letterSpacing="-0.04em" fill="#111111">Waymo</text>
        </svg>
      </div>
      <div className="t-meta">STRATEGY RECOMMENDATION · MAY 2026</div>
      <h1 className="t-hero">
        Advising Sundar Pichai <br />on Autonomous Vehicles.
      </h1>
      <div className="t-sub">Operate. Layer. Integrate.</div>
      <div className="t-rule" />
      <div className="t-adv">A recommendation to Alphabet's CEO</div>
      <div className="t-credits">
        <div className="label">MSIS 511 · TEAM 8</div>
        <div className="names">Norah · Surbhi · Fardeen · Ashish · Masud</div>
        <div className="date">May 18, 2026</div>
      </div>
    </>
  );
}
