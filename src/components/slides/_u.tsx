import type { ReactNode } from "react";

export const FOOTER_TEXT = "MSIS 511 · TEAM 8 · GOOGLE CAR · MAY 18, 2026";

export function Footer(_: { n: number }) {
  return null;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="u-eyebrow">{children}</div>;
}

export function Title({ children }: { children: ReactNode }) {
  return <h2 className="u-title">{children}</h2>;
}

export function Sub({ children }: { children: ReactNode }) {
  return <p className="u-sub my-[27px]">{children}</p>;
}
