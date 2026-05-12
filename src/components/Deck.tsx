import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./slides/deck.css";

import * as S01 from "./slides/Slide01";
import * as S02 from "./slides/Slide02";
import * as S03 from "./slides/Slide03";
import * as S04 from "./slides/Slide04";
import * as S05 from "./slides/Slide05";
import * as S06 from "./slides/Slide06";
import * as S07 from "./slides/Slide07";
import * as S08 from "./slides/Slide08";
import * as S09 from "./slides/Slide09";
import * as S10 from "./slides/Slide10";
import * as SA from "./slides/SlideA";
import * as SB from "./slides/SlideB";
import * as SC from "./slides/SlideC";
import * as SD from "./slides/SlideD";
import * as SE from "./slides/SlideE";

const SLIDES: { kind: string; Comp: () => React.ReactElement }[] = [
  { kind: S01.slideClass, Comp: S01.Slide01 },
  { kind: S02.slideClass, Comp: S02.Slide02 },
  { kind: S03.slideClass, Comp: S03.Slide03 },
  { kind: S04.slideClass, Comp: S04.Slide04 },
  { kind: S05.slideClass, Comp: S05.Slide05 },
  { kind: S06.slideClass, Comp: S06.Slide06 },
  { kind: S07.slideClass, Comp: S07.Slide07 },
  { kind: S08.slideClass, Comp: S08.Slide08 },
  { kind: S09.slideClass, Comp: S09.Slide09 },
  { kind: S10.slideClass, Comp: S10.Slide10 },
  { kind: SA.slideClass, Comp: SA.SlideA },
  { kind: SB.slideClass, Comp: SB.SlideB },
  { kind: SC.slideClass, Comp: SC.SlideC },
  { kind: SD.slideClass, Comp: SD.SlideD },
  { kind: SE.slideClass, Comp: SE.SlideE },
];

const MAIN_DECK_LENGTH = 10;

export function Deck() {
  const total = SLIDES.length;
  const initial = (() => {
    if (typeof window === "undefined") return 0;
    const p = new URLSearchParams(window.location.search).get("slide");
    const n = p ? parseInt(p, 10) - 1 : 0;
    return Number.isFinite(n) && n >= 0 && n < SLIDES.length ? n : 0;
  })();
  const [current, setCurrent] = useState(initial);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setCurrent((c) => Math.min(c + 1, total - 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setCurrent((c) => Math.max(c - 1, 0));
      } else if (e.key === "Home") {
        setCurrent(0);
      } else if (e.key === "End") {
        setCurrent(total - 1);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [total]);

  const onDeckClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    if (x > r.width / 2) setCurrent((c) => Math.min(c + 1, total - 1));
    else setCurrent((c) => Math.max(c - 1, 0));
  };

  const progressPct = Math.min((current + 1) / MAIN_DECK_LENGTH, 1) * 100;
  const isBackup = current >= MAIN_DECK_LENGTH;
  const counterText = isBackup
    ? `BACKUP ${String.fromCharCode(65 + (current - MAIN_DECK_LENGTH))} / E`
    : `${String(current + 1).padStart(2, "0")} / ${String(MAIN_DECK_LENGTH).padStart(2, "0")}`;

  return (
    <div id="deck" onClick={onDeckClick}>
      <div id="stage" ref={stageRef}>
        <AnimatePresence mode="wait">
          {(() => {
            const { kind, Comp } = SLIDES[current];
            return (
              <motion.div
                key={current}
                className={`slide ${kind} active`}
                data-i={current + 1}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Comp />
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
      <div id="progress" style={{ width: `${progressPct}%` }} />
      <div id="counter">{counterText}</div>
    </div>
  );
}
