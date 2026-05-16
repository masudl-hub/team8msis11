export const slideClass = "s-title";

export function Slide01() {
  return (
    <>
      <div className="bar"><span /><span /><span /><span /></div>

      <div className="meta">Recommendation · Self-Driving Cars · MSIS 511</div>

      <h1 className="hero">
        A <span className="accent">Google-operated</span><br />
        <span>autonomous</span><br />
        <span className="dim">ride service.</span>
      </h1>

      <p className="tagline">
        Our recommendation to Sundar Pichai on what to do with the
        self-driving car program.
      </p>

      <div className="footer">
        <div className="team">
          <div>Norah · Surbhi · Fardeen · Ashish · Masud</div>
          <div className="course">MSIS 511 · Group [#]</div>
        </div>
        <div className="hint">Press F for fullscreen · ← → to navigate</div>
      </div>
    </>
  );
}
