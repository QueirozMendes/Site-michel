import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";

const BG = "#0f0e0c";
const EASE = [0.16, 1, 0.3, 1] as const;
const MAX_DURATION = 10000;

const MP4 = `${import.meta.env.BASE_URL}intro.mp4`;
const WEBM = `${import.meta.env.BASE_URL}intro.webm`;

export default function Intro() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();
  const prevOverflow = useRef("");
  const contentEl = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play the intro every time the home route is entered.
  useEffect(() => {
    if (location === "/") {
      setVisible(true);
    }
  }, [location]);

  const unlock = useCallback(() => {
    document.body.style.overflow = prevOverflow.current;
    const el = contentEl.current;
    if (el) {
      el.inert = false;
      el.removeAttribute("aria-hidden");
    }
  }, []);

  // Lock scroll + make the background inert + force playback while visible.
  useEffect(() => {
    if (!visible) return;

    prevOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const el = document.getElementById("app-content");
    contentEl.current = el;
    if (el) {
      el.inert = true;
      el.setAttribute("aria-hidden", "true");
    }

    // Force playback from the start (some browsers ignore the autoPlay attr).
    const v = videoRef.current;
    if (v) {
      try {
        v.currentTime = 0;
      } catch {
        /* noop */
      }
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          /* if autoplay is blocked, the safety timeout still reveals the site */
        });
      }
    }

    // Safety net in case the video never fires `ended`.
    const t = window.setTimeout(() => setVisible(false), MAX_DURATION);
    return () => window.clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence onExitComplete={unlock}>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: BG }}
          role="presentation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)", transition: { duration: 0.9, ease: EASE } }}
        >
          <video
            ref={videoRef}
            className="w-[64%] h-[64%] object-contain"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setVisible(false)}
            onError={() => setVisible(false)}
          >
            <source src={MP4} type="video/mp4" />
            <source src={WEBM} type="video/webm" />
          </video>

          {/* Subtle vignette for cohesion with the dark theme */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          <button
            type="button"
            onClick={() => setVisible(false)}
            className="absolute bottom-8 right-8 text-[11px] tracking-[0.25em] uppercase text-white/70 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
          >
            Pular intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
