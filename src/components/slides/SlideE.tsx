import { Header, Watermark } from "./_chrome";

export const slideClass = "s-bk";

export function SlideE() {
  const qa = [
    ["Isn't this just Uber?", "Uber serves existing riders. Our foothold is constrained-mobility non-consumers — a new-market disruption, with ride-hail substitution only as a later phase."],
    ["Why not license first?", "Licensing leaks control of the rider, the map, and the data. We keep it as a hedge in non-competing use cases."],
    ["Why a spinoff?", "AV metrics — disengagements, geofence coverage, city economics — do not fit ad-product governance. Independence is the safest structure."],
    ["What if Level 4 takes longer?", "We hold inside Level 3 driver-supervised pilots until disengagement and cost gates clear. No press-driven timeline."],
    ["What kills the program?", "If unit economics or capability gates fail across milestones, we slow expansion, restrict to bounded environments, or shift weight to licensing."],
    ["Privacy vs. ad synergy?", "Aggregate environmental data feeds Maps. Identity-linked rider behavior stays inside the AV co. unless the rider opts in."],
    ["Why not OEM partner first?", "Partnership is fragile when Google controls the brain and the map. Selective licensing — yes; OEM-led path — no."],
    ["Is the safety claim proven?", "We claim a promising record under constrained testing, not statistical superiority over human drivers."],
  ];
  return (
    <>
      <Watermark />
      <Header num="Backup E · Cold-call answers" title="The eight questions worth rehearsing." />
      <div className="body">
        <div className="qa-grid">
          {qa.map(([q, a]) => (
            <div key={q} className="qa">
              <div className="q">{q}</div>
              <div className="a">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
