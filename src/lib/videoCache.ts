// Preloads presenter videos into memory once, exposes blob: URLs so the
// <video> tag never streams over the network when slides switch.

const SOURCES = ["/slide6-presenter.mp4", "/slide7-presenter.mp4"] as const;

const cache = new Map<string, string>();
const inflight = new Map<string, Promise<string>>();
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

async function load(src: string): Promise<string> {
  if (cache.has(src)) return cache.get(src)!;
  if (inflight.has(src)) return inflight.get(src)!;
  const p = (async () => {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`Failed to load ${src}: ${res.status}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    cache.set(src, url);
    inflight.delete(src);
    notify();
    return url;
  })();
  inflight.set(src, p);
  return p;
}

export function preloadPresenterVideos() {
  SOURCES.forEach((s) => {
    load(s).catch((err) => console.warn("[videoCache]", err));
  });
}

export function getCachedVideoUrl(src: string): string | undefined {
  return cache.get(src);
}

export function subscribeVideoCache(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
