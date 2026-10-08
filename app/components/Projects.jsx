"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight, FlaskConical } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* ---------- STATUS LABELS ---------- */
const statusStyles = {
  LIVE: { color: "#34D399", pulse: true },
  BUILDING: { color: "#F59E0B", pulse: true },
  TESTED: { color: "#3B82F6", pulse: false },
  COMPLETED: { color: "#8B5CF6", pulse: false },
  EXPERIMENT: { color: "#EC4899", pulse: true },
};

/* ---------- EXPERIMENTS (ordered as a progression) ---------- */
const projects = [
  {
    id: "EXP-01",
    phase: "Phase 01 · Foundations",
    title: "Job Tracker",
    status: "COMPLETED",
    description:
      "A focused interface for organizing and keeping track of job applications.",
    image: "/projects/job.webp",
    stack: ["React", "Vite", "CSS", "React Icons"],
    tested: [
      "Component-based UI structure",
      "State handling for adding and updating entries",
      "Responsive layout across screen sizes",
    ],
    challenge:
      "Keeping application status in sync across the interface as entries change.",
    learned:
      "Planning state before writing components makes a UI far easier to maintain.",
    accent: "#10B981", // green
    github: "#", // paste your repo link
    live: null, // paste your live demo link
  },
  {
    id: "EXP-02",
    phase: "Phase 02 · Full-stack flow",
    title: "Expense Tracker",
    status: "TESTED",
    description:
      "A practical app for recording, organizing and managing personal expenses.",
    image: "/projects/expense.jpg",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
    tested: [
      "CRUD flow from React to Node and MongoDB",
      "REST API design and routes",
      "Form handling and validation",
    ],
    challenge:
      "Connecting frontend actions to API routes while keeping stored data consistent.",
    learned:
      "How a single request travels through the entire stack, end to end.",
    accent: "#3B82F6", // blue
    github: "#",
    live: null,
  },
  {
    id: "EXP-03",
    phase: "Phase 03 · Production-style build",
    title: "Singha Handicraft",
    status: "LIVE",
    description:
      "A complete e-commerce platform for handcrafted Buddhist statues.",
    image: "/projects/logo-singha.jpg",
    fit: "contain",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
    tested: [
      "Authentication and protected routes",
      "Product management, cart and order flow",
      "Admin dashboard for managing the store",
    ],
    challenge:
      "Managing many connected features without letting the codebase become tangled.",
    learned:
      "Building feature by feature keeps a large project manageable and testable.",
    accent: "#8B5CF6", // purple
    github: "#",
    live: "https://singha-handicraft-e-commerce.vercel.app/",
  },
  {
    id: "EXP-04",
    phase: "Phase 04 · Beyond the web",
    title: "Heart Disease Prediction",
    status: "EXPERIMENT",
    description:
      "An AI application exploring heart disease prediction from clinical data.",
    image: "/projects/heart.jpg",
    stack: ["Python", "AI", "Deep Learning", "Data Processing"],
    tested: [
      "Preprocessing real clinical data",
      "Training a deep learning model",
      "Evaluating prediction results",
    ],
    challenge:
      "Cleaning and preparing real-world data before the model could learn anything useful.",
    learned: "Data quality shapes the results as much as the model itself.",
    accent: "#EF4444", // red
    github: "#",
    live: null,
  },
  {
  id: "EXP-05",
  phase: "Phase 05 · Putting it together",
  title: "Personal Portfolio",
  status: "LIVE",
  description:
    "The interactive portfolio you're looking at: a dark, animated site that tells my story as a developer.",
  image: "/projects/me.jpg",
  stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide", "React Icons"],
  tested: [
    "Scroll-based reveal animations with Framer Motion",
    "Interactive SVG skills constellation",
    "Responsive layouts across desktop and mobile",
  ],
  challenge:
    "Keeping animations smooth while handling server and client rendering differences in Next.js.",
  learned:
    "Small details like spacing, motion and hierarchy decide whether a site feels polished.",
  accent: "#F59E0B", // amber
  github: "#", // paste your portfolio repo link
  live: "https://my-portfolio-three-amber-37.vercel.app/",
},
];

/* ---------- SINGLE EXPERIMENT ---------- */
function Experiment({ project }) {
  const status = statusStyles[project.status];

  // cursor position for spotlight
  const mx = useMotionValue(-500);
  const my = useMotionValue(-500);

  // normalised position for tilt
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [3, -3]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-3, 3]), {
    stiffness: 150,
    damping: 20,
  });

  const spotlight = useMotionTemplate`radial-gradient(450px circle at ${mx}px ${my}px, ${project.accent}1f, transparent 65%)`;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mx.set(x);
    my.set(y);
    px.set(x / rect.width - 0.5);
    py.set(y / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(-500);
    my.set(-500);
    px.set(0);
    py.set(0);
  };

  return (
    <div className="grid gap-6 md:grid-cols-[80px_1fr]">
      {/* TIMELINE NODE */}
      <div className="hidden justify-center md:flex">
        <motion.span
          className="relative z-10 mt-14 h-3.5 w-3.5 rounded-full border-2 bg-[#0a0a0f]"
          initial={{
            scale: 0.6,
            borderColor: "rgba(255,255,255,0.2)",
            boxShadow: "0 0 0px rgba(0,0,0,0)",
          }}
          whileInView={{
            scale: 1,
            borderColor: project.accent,
            boxShadow: `0 0 20px ${project.accent}`,
          }}
          viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* PANEL */}
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          whileHover={{ y: -4 }}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="group relative overflow-hidden rounded-[2rem] p-px"
        >
          {/* ANIMATED BORDER */}
          <div
            className="pointer-events-none absolute -inset-[100%] animate-[spin_6s_linear_infinite] opacity-30 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, transparent 65%, ${project.accent} 90%, transparent 100%)`,
            }}
          />

          {/* INNER PANEL */}
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[#0a0a0f] p-7 md:p-10">
            {/* CURSOR SPOTLIGHT */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ background: spotlight }}
            />

            {/* CORNER GLOW */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-10 blur-[90px] transition-opacity duration-700 group-hover:opacity-25"
              style={{ backgroundColor: project.accent }}
            />

            <div className="relative">
              {/* TOP ROW */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
                  <span style={{ color: project.accent }}>{project.id}</span>
                  <span className="text-neutral-600">{project.phase}</span>
                </div>

                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.15em]"
                  style={{
                    color: status.color,
                    borderColor: `${status.color}55`,
                    backgroundColor: `${status.color}12`,
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    {status.pulse && (
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                        style={{ backgroundColor: status.color }}
                      />
                    )}
                    <span
                      className="relative inline-flex h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: status.color }}
                    />
                  </span>
                  {project.status}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-8 text-3xl font-medium tracking-tight md:text-5xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-2xl leading-8 text-neutral-500">
                {project.description}
              </p>

              {/* PROJECT PREVIEW (with color tint) */}
              {project.image && (
                <div
                  className="mt-10 overflow-hidden rounded-2xl border bg-white/[0.02] transition-shadow duration-500"
                  style={{
                    borderColor: `${project.accent}40`,
                    boxShadow: `0 0 40px ${project.accent}22`,
                  }}
                >
                  {/* browser bar */}
                  <div
                    className="flex items-center gap-1.5 border-b px-4 py-3"
                    style={{ borderColor: `${project.accent}25` }}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  </div>

                  {/* screenshot */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 768px) 900px, 100vw"
                      className={`grayscale-[0.5] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                        project.fit === "contain"
                          ? "object-contain p-8"
                          : "object-cover object-top"
                      }`}
                    />

                    {/* color tint (fades on hover) */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-60 mix-blend-color transition-opacity duration-700 group-hover:opacity-0"
                      style={{ backgroundColor: project.accent }}
                    />

                    {/* bottom color glow */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${project.accent}55, transparent 55%)`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* TESTED + LEARNING */}
              <div className="mt-10 grid gap-10 md:grid-cols-2">
                {/* TEST LOG */}
                <div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600">
                    What was tested
                  </p>

                  <ul className="space-y-3">
                    {project.tested.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                        className="flex gap-3 font-mono text-sm leading-6 text-neutral-400"
                      >
                        <span style={{ color: project.accent }}>✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CHALLENGE + LEARNING */}
                <div className="space-y-6">
                  <div>
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600">
                      Challenge
                    </p>
                    <p className="text-sm leading-7 text-neutral-400">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <p
                      className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em]"
                      style={{ color: project.accent }}
                    >
                      Learned
                    </p>
                    <p className="text-sm leading-7 text-neutral-300">
                      {project.learned}
                    </p>
                  </div>
                </div>
              </div>

              {/* STACK + ACTIONS */}
              <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-neutral-300 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
                  >
                    <FaGithub size={15} />
                    Code
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:opacity-90"
                      style={{ backgroundColor: project.accent }}
                    >
                      Live Demo
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-dashed border-white/10 px-4 py-2.5 text-sm text-neutral-600">
                      Demo soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}

/* ---------- SECTION ---------- */
export default function Projects() {
  const listRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const inProgress = projects.filter(
    (p) => p.status === "BUILDING" || p.status === "EXPERIMENT"
  ).length;

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10 md:py-40"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-pink-600/10 blur-[140px]" />

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
            <span className="text-sm font-medium text-blue-400">03</span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Projects Tested
            </span>
          </div>

          <ArrowDownRight size={22} className="text-neutral-600" />
        </motion.div>

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-4xl"
        >
          <p className="mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
            <FlaskConical size={16} className="text-violet-400" />
            The lab
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Not just built.{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Tested, broken, and learned from.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
            Every project here is an experiment in real implementation: what I
            tried, where it got hard, and what stuck.
          </p>
        </motion.div>

        {/* LAB STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500"
        >
          <span>
            Experiments{" "}
            <span className="text-white">
              {String(projects.length).padStart(2, "0")}
            </span>
          </span>
          <span>
            In progress{" "}
            <span className="text-white">
              {String(inProgress).padStart(2, "0")}
            </span>
          </span>
          <span>
            Path <span className="text-white">Frontend → Full Stack → AI</span>
          </span>
        </motion.div>

        {/* EXPERIMENT LIST WITH PROGRESS SPINE */}
        <div ref={listRef} className="relative space-y-10">
          <div className="absolute bottom-0 left-[40px] top-0 hidden w-px bg-white/10 md:block" />

          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-0 left-[40px] top-0 hidden w-px origin-top bg-gradient-to-b from-violet-500 via-blue-500 to-pink-500 md:block"
          />

          {projects.map((project) => (
            <Experiment key={project.id} project={project} />
          ))}
        </div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-neutral-600 md:ml-[104px]"
        >
          <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-pink-500" />
          More experiments in progress
        </motion.div>
      </div>
    </section>
  );
}