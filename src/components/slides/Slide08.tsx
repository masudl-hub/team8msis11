import { Eyebrow } from "./_u";
import googleMaps from "../../assets/google-maps.svg";
import androidAuto from "../../assets/android-auto.svg";
import gemini from "../../assets/gemini.svg";
import googleCloud from "../../assets/google-cloud.svg";
import youtube from "../../assets/youtube.svg";
import waymoLogo from "../../assets/waymo-logo.png";

export const slideClass = "s-u";

const NODES = [
  { logo: waymoLogo, tag: "DEPLOYMENT", name: "Waymo", d: "170M+ autonomous miles driven.", x: 50, y: 26, hub: true, align: "below" as const },
  { logo: googleMaps, tag: "NAVIGATION", name: "Maps", d: "Most-used navigation product globally; Waze real-time traffic.", x: 22, y: 10, align: "left" as const },
  { logo: androidAuto, tag: "INTERFACE", name: "Android Auto", d: "~70% smartphone share; in nearly every new U.S. vehicle.", x: 78, y: 10, align: "right" as const },
  { logo: youtube, tag: "ATTENTION", name: "YouTube", d: "2.5B+ monthly users; the in-ride entertainment surface.", x: 22, y: 48, align: "left" as const },
  { logo: gemini, tag: "FRONTIER AI", name: "Gemini", d: "Pichai's centerpiece; physical-world products are the moat.", x: 78, y: 48, align: "right" as const },
  { logo: googleCloud, tag: "INFRASTRUCTURE", name: "Google Cloud", d: "Fastest-growing major cloud; TPU silicon; Vertex AI.", x: 36, y: 76, align: "right" as const },
];

const PATHS = [
  "M 50 26 L 22 10",
  "M 50 26 L 78 10",
  "M 50 26 Q 24 22 22 48",
  "M 50 26 Q 76 22 78 48",
  "M 50 26 Q 86 50 36 76",
  "M 22 10 Q 50 20 78 10",
  "M 78 10 Q 72 29 78 48",
  "M 78 48 Q 54 62 36 76",
  "M 36 76 Q 28 62 22 48",
  "M 22 48 Q 28 29 22 10",
];

export function Slide08() {
  return (
    <>
      <Eyebrow>08 · STRATEGIC POSITION</Eyebrow>
      <h2 className="u-title">Google's moat is the portfolio, not the AV unit.</h2>
      <p className="u-sub">Six platforms that compound when integrated.</p>
      <div className="u-body">
        <div className="ecosystem">
          <svg className="eco-mesh" viewBox="0 0 100 100" preserveAspectRatio="none">
            {PATHS.map((d, i) => (
              <path key={i} d={d} fill="none" vectorEffect="non-scaling-stroke" />
            ))}
          </svg>
          {NODES.map((n) => (
            <div
              key={n.tag}
              className={`eco-node${n.hub ? " eco-hub" : ""}`}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div className="eco-ring">
                <img src={n.logo} alt="" />
              </div>
              <div className={`eco-text eco-text--${n.align}`}>
                <div className="eco-tag">{n.tag}</div>
                <div className="eco-name">{n.name}</div>
                <div className="eco-desc">{n.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="portfolio-cap">
        Microsoft has the AI but no physical surface. Apple killed its bet. Amazon lacks the frontier model. Tesla lacks the platform. <strong>Google's combination is genuinely difficult to replicate.</strong>
      </div>
    </>
  );
}
