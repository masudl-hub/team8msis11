import { useEffect, useState } from "react";
import { getCachedVideoUrl, subscribeVideoCache } from "../../lib/videoCache";

type Props = {
  src: string;
  className?: string;
};

export function PresenterVideo({ src, className }: Props) {
  const [url, setUrl] = useState<string | undefined>(() => getCachedVideoUrl(src));

  useEffect(() => {
    if (url) return;
    return subscribeVideoCache(() => {
      const next = getCachedVideoUrl(src);
      if (next) setUrl(next);
    });
  }, [src, url]);

  return (
    <div className={`presenter-video ${className ?? ""}`}>
      <video
        key={url ?? src}
        src={url ?? src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}
