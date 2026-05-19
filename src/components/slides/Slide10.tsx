import { Eyebrow, Title, Sub } from "./_u";

export const slideClass = "s-u";

function IllustIngestion() {
  return (
    <svg className="mech-svg" viewBox="0 0 200 160" fill="none">
      <line x1="45" y1="142" x2="155" y2="142" stroke="#E4E2DC" strokeWidth="1.5" />
      <rect x="78" y="126" width="44" height="15" rx="4" stroke="#111" strokeWidth="1.5" />
      <rect x="86" y="116" width="28" height="13" rx="3" stroke="#111" strokeWidth="1.5" />
      <circle cx="90" cy="142" r="5" fill="#FAFAF7" stroke="#111" strokeWidth="1.5" />
      <circle cx="110" cy="142" r="5" fill="#FAFAF7" stroke="#111" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="2" fill="#1A73E8" opacity="0.3" />
      <circle cx="100" cy="85" r="2.5" fill="#1A73E8" opacity="0.45" />
      <circle cx="100" cy="70" r="3" fill="#1A73E8" opacity="0.6" />
      <path d="M 97 70 Q 80 50 68 40" stroke="#1A73E8" strokeWidth="0.75" opacity="0.2" strokeDasharray="3 3" />
      <path d="M 103 70 Q 120 50 132 40" stroke="#1A73E8" strokeWidth="0.75" opacity="0.2" strokeDasharray="3 3" />
      <circle cx="68" cy="34" r="6" stroke="#1A73E8" strokeWidth="1.5" fill="#1A73E8" fillOpacity="0.06" />
      <circle cx="100" cy="14" r="7" stroke="#1A73E8" strokeWidth="1.5" fill="#1A73E8" fillOpacity="0.06" />
      <circle cx="132" cy="34" r="6" stroke="#1A73E8" strokeWidth="1.5" fill="#1A73E8" fillOpacity="0.06" />
      <line x1="68" y1="34" x2="100" y2="14" stroke="#1A73E8" strokeWidth="1" opacity="0.4" />
      <line x1="100" y1="14" x2="132" y2="34" stroke="#1A73E8" strokeWidth="1" opacity="0.4" />
      <line x1="68" y1="34" x2="132" y2="34" stroke="#1A73E8" strokeWidth="1" opacity="0.25" />
    </svg>
  );
}

function IllustAccess() {
  const spokes: [number, number][] = [
    [100, 10], [162, 32], [178, 92], [150, 152], [62, 155], [24, 105], [38, 35],
  ];
  return (
    <svg className="mech-svg" viewBox="0 0 200 170" fill="none">
      {spokes.map(([x, y], i) => (
        <line key={`l${i}`} x1="100" y1="85" x2={x} y2={y} stroke="#1A73E8" strokeWidth="1.5" opacity="0.25" />
      ))}
      <circle cx="100" cy="85" r="18" stroke="#1A73E8" strokeWidth="1.5" fill="#FAFAF7" />
      <circle cx="100" cy="85" r="5" fill="#1A73E8" />
      {spokes.map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r="5" stroke="#1A73E8" strokeWidth="1.5" fill="#FAFAF7" />
      ))}
    </svg>
  );
}

function IllustProof() {
  const dots: [number, number, number, number][] = [
    [16, 148, 3, 0.15],
    [36, 132, 3, 0.22],
    [54, 114, 3.5, 0.32],
    [70, 96, 3.5, 0.42],
    [88, 78, 4, 0.52],
    [108, 62, 4, 0.62],
    [128, 48, 4.5, 0.72],
    [148, 34, 5, 0.84],
    [168, 22, 5.5, 0.93],
    [186, 14, 6, 1],
  ];
  return (
    <svg className="mech-svg" viewBox="0 0 200 160" fill="none">
      {dots.map(([x, y, r, o], i) => (
        <g key={i}>
          {i > 0 && (
            <line x1={dots[i - 1][0]} y1={dots[i - 1][1]} x2={x} y2={y}
              stroke="#1A73E8" strokeWidth="1" opacity={o * 0.4} />
          )}
          <circle cx={x} cy={y} r={r} fill="#1A73E8" opacity={o} />
        </g>
      ))}
      <line x1="128" y1="48" x2="168" y2="22" stroke="#1A73E8" strokeWidth="0.75" opacity="0.2" />
      <line x1="148" y1="34" x2="186" y2="14" stroke="#1A73E8" strokeWidth="0.75" opacity="0.25" />
      <line x1="108" y1="62" x2="148" y2="34" stroke="#1A73E8" strokeWidth="0.75" opacity="0.15" />
    </svg>
  );
}

const ILLUSTRATIONS = [IllustIngestion, IllustAccess, IllustProof];

const M = [
  { n: "01", t: "Physical-world data ingestion", d: "AV miles feed Maps and Search Local — the loop the 2014 case named as Google's most valuable potential asset." },
  { n: "02", t: "Universal accessibility", d: "Mobility-as-a-service for the elderly, disabled, and unlicensed — the literal clause of Google's mission applied to mobility." },
  { n: "03", t: "Physical-AI proof point", d: "170M autonomous miles makes Google's AI thesis credible vs OpenAI, Anthropic, and Meta — who cannot say the same." },
];

export function Slide10() {
  return (
    <>
      <Eyebrow>10 · MISSION FIT</Eyebrow>
      <Title>The AV unit already delivers on Google's mission.</Title>
      <Sub>"Organize the world's information and make it universally accessible and useful."</Sub>
      <div className="u-body">
        <div className="mech-cols">
          {M.map((m, i) => {
            const Illust = ILLUSTRATIONS[i];
            return (
              <div key={m.n} className="mech-col">
                <Illust />
                <div className="mn">{m.n}</div>
                <div className="mt">{m.t}</div>
                <div className="md">{m.d}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
