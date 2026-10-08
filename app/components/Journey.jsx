
"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const journey = [
  {
    year: "01",
    period: "Education",
    title: "Computer Engineering",
    description:
      "Built a strong foundation in programming, problem solving, databases, computer systems and software development.",
    skills: ["Programming", "Algorithms", "Databases"],
    color: "from-violet-500 to-violet-400",
    accent: "#8B5CF6",
  },
  {
    year: "02",
    period: "Development",
    title: "MERN Stack",
    description:
      "Expanded into modern full-stack development by building practical applications with React, Node.js, Express and MongoDB.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    color: "from-blue-500 to-blue-400",
    accent: "#3B82F6",
  },
  {
    year: "03",
    period: "Specialization",
    title: "Frontend Development",
    description:
      "Focused on creating responsive, polished interfaces with component-based architecture, modern styling and better user experiences.",
    skills: ["React", "Next.js", "Tailwind CSS", "UI"],
    color: "from-cyan-500 to-cyan-400",
    accent: "#06B6D4",
  },
  {
    year: "04",
    period: "Now",
    title: "Building Real Projects",
    description:
      "Turning ideas into working products while continuously improving my development skills through real-world projects and experimentation.",
    skills: ["Web Apps", "E-Commerce", "Dashboards", "AI"],
    color: "from-pink-500 to-pink-400",
    accent: "#EC4899",
  },
];
export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10 md:py-40"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-violet-400">
              02
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              My Journey
            </span>
          </div>

          <ArrowDownRight
            size={22}
            className="text-neutral-600"
          />
        </motion.div>

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-28 max-w-4xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
            How I got here
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            From engineering fundamentals to{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              building digital experiences.
            </span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* TIMELINE LINE */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-blue-500 to-pink-500 opacity-40 md:block" />

          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative md:pl-16"
              >

                {/* TIMELINE DOT */}
                <div className="absolute left-[9px] top-10 hidden md:block">
                  <motion.div
                    whileHover={{
                      scale: 1.5,
                    }}
                    className={`h-3 w-3 rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_20px_rgba(139,92,246,0.6)]`}
                  />
                </div>

                {/* CARD */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] md:p-10">

                  {/* HOVER GRADIENT */}
                  <div
                    className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-r ${item.color} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  <div className="relative">

                    {/* TOP */}
                    <div className="mb-8 flex items-start justify-between">

                      <div>
                        <p
                          className={`mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent`}
                        >
                          {item.period}
                        </p>

                        <span className="text-xs text-neutral-600">
                          {item.year}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={22}
                        className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">

                      <h3 className="text-3xl font-medium md:text-4xl">
                        {item.title}
                      </h3>

                      <div>
                        <p className="max-w-2xl leading-8 text-neutral-400">
                          {item.description}
                        </p>

                        {/* SKILLS */}
                        <div className="mt-7 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-400 transition-colors duration-300 group-hover:border-white/20 group-hover:text-neutral-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* END NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-neutral-600"
        >
          <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-pink-500" />
          The journey continues
        </motion.div>

      </div>
    </section>
  );
}

