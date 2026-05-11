export function Watermark() {
  return null;
}

export function Header({ num, title, sub }: { num: string; title: React.ReactNode; sub?: string }) {
  return (
    <header className="std-header">
      <div className="eyebrow-num">{num}</div>
      <h2 className="hero-headline">{title}</h2>
      {sub && <p className="hero-sub">{sub}</p>}
    </header>
  );
}
