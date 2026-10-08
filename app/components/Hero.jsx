
"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 md:px-10">

      

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-pink-500/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center">

        {/* AVAILABILITY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Available for opportunities
          </span>
        </motion.div>

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-5 text-lg text-neutral-400 md:text-xl"
        >
          Hello, I&apos;m
        </motion.p>

        {/* NAME */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[17vw] font-bold leading-[0.82] tracking-[-0.07em] md:text-[12vw]"
          >
            UNISH
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.35,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="gradient-text text-[17vw] font-bold leading-[0.82] tracking-[-0.07em] md:text-[12vw]"
          >
            SHAKYA
          </motion.h1>
        </div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 grid gap-10 md:grid-cols-2"
        >
          <div>
            <p className="text-2xl font-medium leading-tight md:text-3xl">
              Frontend Developer
              <br />
              <span className="gradient-text">
                & Computer Engineering Graduate
              </span>
            </p>
          </div>

          <div className="max-w-xl">
            <p className="leading-8 text-neutral-400 md:text-lg">
              I build modern, responsive and engaging digital
              experiences using React, JavaScript, Next.js and
              modern web technologies.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
              >
                View My Work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="gradient-border group relative flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
              >
                Contact Me

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </div>
        </motion.div>

        {/* BOTTOM INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-neutral-500"
        >
          <span>Nepal</span>

          <span className="hidden sm:block">
            React · Next.js · JavaScript
          </span>

          <span className="flex items-center gap-2">
            Scroll
            <ArrowDown size={14} />
          </span>
        </motion.div>

      </div>
    </section>
  );
}
