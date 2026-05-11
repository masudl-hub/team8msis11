import { Header, Watermark } from "./_chrome";

export const slideClass = "s-bk";

export function SlideA() {
  return (
    <>
      <Watermark />
      <Header num="Backup A · Source bank" title="Case quotes and reading anchors." />
      <div className="body">
        <div className="label">Case</div>
        <table style={{ marginBottom: 32 }}>
          <thead><tr><th style={{ width: 220 }}>Anchor</th><th>Quote / fact</th></tr></thead>
          <tbody>
            <tr><td>Mission</td><td>"Organize the world's information and make it universally accessible and useful."</td></tr>
            <tr><td>Maps</td><td>Google Maps was the most popular mobile app in 2013.</td></tr>
            <tr><td>Miles</td><td>700,000+ autonomous miles by 2014; 500,000 without incident.</td></tr>
            <tr><td>Pods</td><td>2014 pods required temporary manual controls for California testing.</td></tr>
            <tr><td>Urmson</td><td>AV described as a "shared resource" for Google's products.</td></tr>
          </tbody>
        </table>
        <div className="label">Readings</div>
        <table>
          <thead><tr><th style={{ width: 220 }}>Source</th><th>Use in the brief</th></tr></thead>
          <tbody>
            <tr><td>CRM 2015</td><td>Classifies Tesla as sustaining; supports new-market framing for constrained-mobility riders.</td></tr>
            <tr><td>B&C 1995</td><td>Independent organization required when resource-allocation logic favors core business.</td></tr>
            <tr><td>B&M 2012</td><td>"Second half of the chessboard" — exponential ML trajectory.</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
