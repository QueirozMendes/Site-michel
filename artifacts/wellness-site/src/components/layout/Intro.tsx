import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACCENT = "#A0A0A0";
const BG = "#0f0e0c";
const EASE = [0.16, 1, 0.3, 1] as const;

const WORDS = ["Michel", "Bueno"];
const LETTER_BASE = 0.55;
const LETTER_STAGGER = 0.05;

const totalLetters = WORDS.join("").length;
const lettersDoneAt = LETTER_BASE + totalLetters * LETTER_STAGGER + 0.9;

export default function Intro() {
  const [visible, setVisible] = useState(false);
  const prevOverflow = useRef("");
  const contentEl = useRef<HTMLElement | null>(null);

  const unlock = useCallback(() => {
    document.body.style.overflow = prevOverflow.current;
    const el = contentEl.current;
    if (el) {
      el.inert = false;
      el.removeAttribute("aria-hidden");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("mb_intro_seen")) return;

    setVisible(true);
    sessionStorage.setItem("mb_intro_seen", "1");

    // Lock scroll + make background inert (non-focusable) while the intro plays.
    prevOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const el = document.getElementById("app-content");
    contentEl.current = el;
    if (el) {
      el.inert = true;
      el.setAttribute("aria-hidden", "true");
    }

    const t = window.setTimeout(() => setVisible(false), 2700);
    return () => {
      window.clearTimeout(t);
      unlock();
    };
  }, [unlock]);

  let letterIndex = -1;

  return (
    <AnimatePresence onExitComplete={unlock}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
          style={{ backgroundColor: BG }}
          role="presentation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)", transition: { duration: 1, ease: EASE } }}
        >
          {/* Overline */}
          <motion.p
            className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-light mb-8 md:mb-10"
            style={{ color: ACCENT }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.6, ease: EASE } }}
          >
            Wellness · Longevidade · Performance
          </motion.p>

          {/* Name — letter-by-letter mask reveal */}
          <motion.h1
            className="font-serif text-white text-center leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-wrap justify-center gap-x-5 md:gap-x-7"
            exit={{ opacity: 0, y: -24, transition: { duration: 0.8, ease: EASE } }}
          >
            {WORDS.map((word, w) => (
              <span key={w} className="inline-flex overflow-hidden py-[0.1em]">
                {word.split("").map((char, c) => {
                  letterIndex += 1;
                  const delay = LETTER_BASE + letterIndex * LETTER_STAGGER;
                  return (
                    <motion.span
                      key={c}
                      className="inline-block"
                      initial={{ y: "115%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay, ease: EASE }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </motion.h1>

          {/* Accent hairline */}
          <motion.div
            className="mt-10 md:mt-12 h-px w-40 md:w-56 origin-center"
            style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: lettersDoneAt - 0.4, ease: EASE }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
