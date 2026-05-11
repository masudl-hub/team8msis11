import { Header, Watermark } from "./_chrome";

export const slideClass = "s-bk";

export function SlideB() {
  const rows = [
    ["Audi · BMW · Mercedes", "OEM", "Sustaining L2/L3 features", "Brand-owned dashboards"],
    ["GM · Volvo", "OEM", "Partnered with Mobileye", "Conflicted with Google"],
    ["Nissan", "OEM", "Open to selective partners", "Not committed"],
    ["Tesla", "OEM", "High-end consumer AV", "Sustaining, cash-constrained"],
    ["Mobileye", "Supplier", "Embedded perception", "Cheaper, neutral, multi-OEM"],
    ["Cruise", "Startup", "AV stack + retrofits", "Acquisition target trajectory"],
    ["Uber", "Operator", "Ride-hail platform", "Demand layer; AV ambition"],
  ];
  return (
    <>
      <Watermark />
      <Header num="Backup B · Competitor map" title="Who else is in this race." />
      <div className="body">
        <table>
          <thead>
            <tr><th>Player</th><th>Type</th><th>Posture</th><th>Vector</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </>
  );
}
