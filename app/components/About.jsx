"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10 md:py-40"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-violet-400">
              01
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              About Me
            </span>
          </div>

          <ArrowDownRight
            size={22}
            className="text-neutral-600"
          />
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================
              PROFILE IMAGE
          ================================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            {/* OUTER GLOW */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-pink-500/20 blur-2xl" />

            {/* IMAGE CARD */}
            <div className="gradient-border relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#0d0d1a]">

              <Image
                src="/images/unish.jpg"
                alt="Unish Shakya"
                fill
                priority
                className="object-cover object-center grayscale-[10%] transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070711] via-transparent to-transparent opacity-70" />

              {/* CORNER LABEL */}
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Unish Shakya
                </p>

                <p className="mt-2 text-sm text-white/80">
                  MernStack Developer
                </p>
              </div>

              {/* TOP BADGE */}
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <span className="text-[10px] uppercase tracking-[0.15em] text-white/70">
                  Available
                </span>
              </div>
            </div>

            {/* FLOATING ACCENT */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-5 hidden h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl md:block"
            >
              <div className="flex h-full items-center justify-center">
                <span className="text-2xl">✦</span>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================
              ABOUT CONTENT
          ================================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
              Who I am
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
              I&apos;m a{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                mern stacks developer
              </span>{" "}
              who enjoys turning ideas into digital experiences.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              I&apos;m a Computer Engineering graduate with a strong
              interest in modern web development. I enjoy transforming
              ideas into responsive, functional and engaging interfaces
              using technologies like React, JavaScript, Next.js and
              Tailwind CSS.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
              I&apos;m constantly learning, experimenting and building
              projects that challenge me to become a better developer.
              For me, every project is an opportunity to turn an idea
              into something useful.
            </p>

            {/* SKILL HIGHLIGHTS */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.08,
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-neutral-400 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#work"
              whileHover={{ x: 5 }}
              className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              Explore my work

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-500/10">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* =================================
            STATS
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-3"
        >
          {/* STAT 01 */}
          <div className="group border-b border-white/10 p-8 transition-colors duration-300 hover:bg-violet-500/[0.04] sm:border-b-0 sm:border-r">
            <p className="text-4xl font-semibold tracking-tight">
              01
            </p>

            <div className="mt-3 h-px w-8 bg-violet-500 transition-all duration-500 group-hover:w-16" />

            <p className="mt-4 text-sm text-neutral-500">
              Computer Engineering Graduate
            </p>
          </div>

          {/* STAT 02 */}
          <div className="group border-b border-white/10 p-8 transition-colors duration-300 hover:bg-blue-500/[0.04] sm:border-b-0 sm:border-r">
            <p className="text-4xl font-semibold tracking-tight">
              04+
            </p>

            <div className="mt-3 h-px w-8 bg-blue-500 transition-all duration-500 group-hover:w-16" />

            <p className="mt-4 text-sm text-neutral-500">
              Projects Built
            </p>
          </div>

          {/* STAT 03 */}
          <div className="group p-8 transition-colors duration-300 hover:bg-pink-500/[0.04]">
            <p className="text-4xl font-semibold tracking-tight">
              ∞
            </p>

            <div className="mt-3 h-px w-8 bg-pink-500 transition-all duration-500 group-hover:w-16" />

            <p className="mt-4 text-sm text-neutral-500">
              Always Learning
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}