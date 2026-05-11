import { Header, Watermark } from "./_chrome";

export const slideClass = "s-bk";

export function SlideC() {
  const vars = [
    ["Equipment cost", "$150K per pod in 2014 dollars; lidar dominates."],
    ["Utilization", "Trips per vehicle per day; the lever that breaks unit economics."],
    ["Safety driver / remote ops", "Required during L3 pilots; phased out only after gates clear."],
    ["Insurance", "Captive or reinsurance partner; per-mile premium until incident history exists."],
    ["Maintenance", "Sensor calibration, cleaning, fleet uptime."],
    ["Depot & charging", "Real estate + power; sub-scale until geofence has density."],
    ["Mapping cost", "Per-mile HD-map capture and refresh inside the geofence."],
    ["Regulatory overhead", "State-by-state filings, incident reporting, lobbying."],
    ["Demand density", "Trips available within the geofence at target wait time."],
  ];
  return (
    <>
      <Watermark />
      <Header num="Backup C · Unit-economics variables" title="What the gate model actually contains." />
      <div className="body">
        <div className="vars">
          {vars.map(([name, note]) => (
            <div key={name} className="var">
              <div className="name">{name}</div>
              <div className="note">{note}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
