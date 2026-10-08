"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  /* lock scrolling while loading */
  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  /* counter 0 -> 100 */
  useEffect(() => {
    const duration = 2200; // ms, change to speed up or slow down
    let start = null;
    let frame;
    let timeout;

    const tick = (ts) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // fast start, soft finish
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timeout = setTimeout(() => setDone(true), 450);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-[#0a0a0f] px-6 py-8 md:px-10"
        >
          {/* BACKGROUND GLOWS */}
          <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]" />
          <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-pink-600/15 blur-[140px]" />

          {/* TOP BAR */}
          <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-500">
            <span>Unish Shakya</span>

            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Loading portfolio
            </span>
          </div>

          {/* CENTER MESSAGE */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14vw] font-semibold leading-[0.9] tracking-[-0.06em] md:text-[9vw]"
              >
                Building
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text pb-2 text-[14vw] font-semibold leading-[0.9] tracking-[-0.06em] text-transparent md:text-[9vw]"
              >
                experiences.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 text-xs uppercase tracking-[0.3em] text-neutral-500 md:text-sm"
            >
              Interfaces · Ideas · Impact
            </motion.p>
          </div>

          {/* COUNTER + PROGRESS */}
          <div className="relative">
            <div className="flex items-end justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-600">
                Frontend Developer · Nepal
              </span>

              <span className="font-mono text-6xl font-semibold tabular-nums leading-none tracking-tighter text-white md:text-8xl">
                {progress}
                <span className="text-pink-400">%</span>
              </span>
            </div>

            <div className="mt-6 h-px w-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}