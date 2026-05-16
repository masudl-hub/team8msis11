import { Header } from "./_chrome";

export const slideClass = "s-econ";

const VARS = [
  { g: "Cost stack", items: ["Equipment per vehicle", "Safety driver / remote ops", "Insurance", "Sensor calibration & maintenance", "Depot, charging, HD-map refresh"] },
  { g: "Revenue stack", items: ["Trips per vehicle per day (utilization)", "Demand density inside geofence", "Average fare per trip"] },
  { g: "Constraints", items: ["Regulatory clearance per jurisdiction", "Weather + road complexity of the geofence", "Disengagement / incident review"] },
];

export function Slide05() {
  return (
    <>
      <Header
        num="07 · §C · What the gates measure"
        title={<>One number decides expansion: <em>cost per revenue-mile</em>.</>}
      />
      <div className="body">
        <div className="formula">
          <div className="lhs">
            <div className="lbl">Gate metric</div>
            <div className="expr">
              <span className="den">cost</span>
              <span className="bar" />
              <span className="num">revenue mile</span>
            </div>
          </div>
          <div className="op">&lt;</div>
          <div className="rhs">
            <div className="lbl">Threshold (per city)</div>
            <div className="expr-note">Modeled against ride-hail substitute price in the same geofence.</div>
          </div>
        </div>

        <div className="vars">
          {VARS.map((v) => (
            <div key={v.g} className="col">
              <div className="head">{v.g}</div>
              <ul>
                {v.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule-line" />
        <div className="rule-text">
          No new geofence opens until its model clears. <strong>If multiple cities miss, weight shifts to OEM licensing.</strong>
        </div>
      </div>
    </>
  );
}
