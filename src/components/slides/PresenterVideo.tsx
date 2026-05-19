import { useEffect, useRef, useState } from "react";
import { getCachedVideoUrl, subscribeVideoCache } from "../../lib/videoCache";

type Props = {
  src: string;
  className?: string;
};

export function PresenterVideo({ src, className }: Props) {
  const [url, setUrl] = useState<string | undefined>(() => getCachedVideoUrl(src));
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (url) return;
    return subscribeVideoCache(() => {
      const next = getCachedVideoUrl(src);
      if (next) setUrl(next);
    });
  }, [src, url]);

  // Try to autoplay with sound; if browser blocks, fall back to muted autoplay
  // and unmute on the first user interaction anywhere on the page.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryUnmuted = async () => {
      try {
        v.muted = false;
        v.volume = 1;
        await v.play();
        setMuted(false);
      } catch {
        v.muted = true;
        setMuted(true);
        try { await v.play(); } catch {}
      }
    };
    tryUnmuted();

    const unmuteOnInteract = async () => {
      try {
        v.muted = false;
        v.volume = 1;
        await v.play();
        setMuted(false);
        cleanup();
      } catch {}
    };
    const cleanup = () => {
      window.removeEventListener("pointerdown", unmuteOnInteract);
      window.removeEventListener("keydown", unmuteOnInteract);
      window.removeEventListener("touchstart", unmuteOnInteract);
    };
    window.addEventListener("pointerdown", unmuteOnInteract);
    window.addEventListener("keydown", unmuteOnInteract);
    window.addEventListener("touchstart", unmuteOnInteract);
    return cleanup;
  }, [url]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    v.play().catch(() => {});
  };

  return (
    <div className={`presenter-video ${className ?? ""}`}>
      <video
        ref={videoRef}
        key={url ?? src}
        src={url ?? src}
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      <button
        type="button"
        onClick={handleClick}
        aria-label={muted ? "Unmute video" : "Mute video"}
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          width: 40,
          height: 40,
          borderRadius: 9999,
          border: "none",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
