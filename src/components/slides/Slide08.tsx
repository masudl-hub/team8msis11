import { Eyebrow, Title, Footer } from "./_u";

export const slideClass = "s-u";

export function Slide08() {
  return (
    <>
      <Eyebrow>08 · MOAT</Eyebrow>
      <Title>Safety is Waymo's structural advantage.</Title>
      <div className="u-body no-sub">
        <div className="hero-num">92%</div>
        <div className="hero-num-cap">fewer serious-injury crashes than human drivers.</div>
        <div className="hero-num-rule" />
        <div className="hero-num-sub">Across 170M autonomous miles · statistically significant in every operating city.</div>
      </div>
      <div className="u-source">Source: Waymo Safety Hub, March 2026</div>
      <Footer n={8} />
    </>
  );
}
