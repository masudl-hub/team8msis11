export const slideClass = "s-title";

export function Slide01() {
  return (
    <>
      <div className="bar"><span /><span /><span /><span /></div>
      <div className="meta">MSIS 511 · Team 8 · Final Case · End of 2014</div>
      <h1 className="hero">
        Operate the<br />
        <span className="accent">Network.</span><br />
        <span className="dim">Don't sell the car.</span>
      </h1>
      <p className="tagline">A recommendation to Sundar Pichai on Google's autonomous vehicle program.</p>

      <div className="options">
        <span className="opt rejected">Discontinue</span>
        <span className="opt rejected">Build Cars</span>
        <span className="opt hedge">License · hedge</span>
        <span className="opt chosen">Operate Service</span>
      </div>

      <div className="footer">
        <div className="team">Team 8 · Five presenters · 12 minutes</div>
        <div className="hint">Press F for fullscreen · ← → to navigate</div>
      </div>
    </>
  );
}
