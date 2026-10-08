"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowDownRight,
  Code2,
  Database,
  Brain,
  Wrench,
  Server,
} from "lucide-react";

const capabilities = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    accent: "#8B5CF6",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "CRUD"],
    accent: "#3B82F6",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "SQL"],
    accent: "#06B6D4",
  },
  {
    title: "Programming & AI",
    icon: Brain,
    skills: ["Python", "C", "C++", "AI", "Deep Learning"],
    accent: "#EC4899",
  },
  {
    title: "Tools & Deploy",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "Vercel", "Render"],
    accent: "#F59E0B",
  },
];

/* ---------- BASE LAYOUT ---------- */
const W = 1000;
const H = 760;
const CX = W / 2;
const CY = H / 2;

const round = (n) => Math.round(n * 100) / 100;

const nodes = capabilities.map((cap, i) => {
  const angle = ((-90 + i * 72) * Math.PI) / 180;
  const x = round(CX + Math.cos(angle) * 235);
  const y = round(CY + Math.sin(angle) * 195);

  const n = cap.skills.length;
  const spread = (Math.min(110, n * 26) * Math.PI) / 180;

  const skills = cap.skills.map((name, j) => {
    const offset = n === 1 ? 0 : (j / (n - 1) - 0.5) * spread;
    const a = angle + offset;
    const d = j % 2 === 0 ? 115 : 142;
    return {
      name,
      x: round(x + Math.cos(a) * d),
      y: round(y + Math.sin(a) * d),
    };
  });

  return { ...cap, angle, x, y, skills };
});

export default function Skills() {
  const [active, setActive] = useState(null);
  const [time, setTime] = useState(0);

  const mapRef = useRef(null);
  const inView = useInView(mapRef, { margin: "-100px" });

  /* ---------- ANIMATION LOOP ---------- */
  useEffect(() => {
    if (!inView) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame;
    let start = null;

    const loop = (ts) => {
      if (start === null) start = ts;
      setTime(ts - start);
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  /* ---------- LIVE POSITIONS ---------- */
  const t = time;

  const live = nodes.map((cat, i) => {
    const cx = round(cat.x + Math.sin(t * 0.0005 + i * 1.7) * 14);
    const cy = round(cat.y + Math.cos(t * 0.0004 + i * 2.3) * 12);

    const skills = cat.skills.map((skill, j) => ({
      name: skill.name,
      x: round(cx + (skill.x - cat.x) + Math.sin(t * 0.0009 + i * 3 + j * 1.1) * 9),
      y: round(cy + (skill.y - cat.y) + Math.cos(t * 0.0008 + i * 2 + j * 1.4) * 9),
      twinkle: round(0.65 + 0.35 * Math.sin(t * 0.003 + i + j * 1.3)),
    }));

    return { ...cat, cx, cy, skills };
  });

  const centerX = round(CX + Math.sin(t * 0.0003) * 4);
  const centerY = round(CY + Math.cos(t * 0.00035) * 4);

  return (
    <section
      id="capability"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10 md:py-40"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-violet-400">04</span>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Capability Map
              </span>
            </div>
            <ArrowDownRight size={22} className="text-neutral-600" />
          </div>

          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
              What I work with
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              A constellation of{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                connected skills.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* LEGEND (also controls highlight) */}
        <div className="mt-12 flex flex-wrap gap-3">
          {live.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs text-neutral-300 transition-all duration-300"
                style={{
                  borderColor:
                    active === i ? cat.accent : "rgba(255,255,255,0.1)",
                  backgroundColor:
                    active === i ? `${cat.accent}1A` : "rgba(255,255,255,0.03)",
                }}
              >
                <Icon size={14} style={{ color: cat.accent }} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* CONSTELLATION (tablet and desktop) */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-10 hidden md:block"
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mx-auto h-auto w-full max-w-5xl"
            role="img"
            aria-label="Skills constellation"
          >
            {/* faint links between neighbouring categories */}
            {live.map((cat, i) => {
              const next = live[(i + 1) % live.length];
              return (
                <line
                  key={`ring-${i}`}
                  x1={cat.cx}
                  y1={cat.cy}
                  x2={next.cx}
                  y2={next.cy}
                  stroke="white"
                  strokeOpacity={0.07}
                  strokeDasharray="4 6"
                />
              );
            })}

            {live.map((cat, i) => {
              const dim = active !== null && active !== i;
              const lit = active === i;

              return (
                <g
                  key={cat.title}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    opacity: dim ? 0.12 : 1,
                    transition: "opacity 0.3s",
                    cursor: "pointer",
                  }}
                >
                  {/* center -> category */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={cat.cx}
                    y2={cat.cy}
                    stroke={cat.accent}
                    strokeOpacity={lit ? 0.9 : 0.45}
                    strokeWidth={lit ? 2 : 1.2}
                  />

                  {/* skills */}
                  {cat.skills.map((skill) => {
                    const right = skill.x >= cat.cx;
                    return (
                      <g key={skill.name}>
                        <line
                          x1={cat.cx}
                          y1={cat.cy}
                          x2={skill.x}
                          y2={skill.y}
                          stroke={cat.accent}
                          strokeOpacity={lit ? 0.7 : 0.3}
                          strokeWidth={1}
                        />

                        {/* glow */}
                        <circle
                          cx={skill.x}
                          cy={skill.y}
                          r={lit ? 11 : 8}
                          fill={cat.accent}
                          opacity={lit ? 0.25 : 0.12}
                        />

                        {/* star */}
                        <circle
                          cx={skill.x}
                          cy={skill.y}
                          r={4}
                          fill={cat.accent}
                          opacity={skill.twinkle}
                        />

                        <text
                          x={round(skill.x + (right ? 14 : -14))}
                          y={round(skill.y + 4)}
                          textAnchor={right ? "start" : "end"}
                          fontSize={13}
                          fill={lit ? "#ffffff" : "#a3a3a3"}
                        >
                          {skill.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* category star */}
                  <circle
                    cx={cat.cx}
                    cy={cat.cy}
                    r={lit ? 30 : 24}
                    fill={cat.accent}
                    opacity={0.15}
                  />
                  <circle
                    cx={cat.cx}
                    cy={cat.cy}
                    r={9}
                    fill={cat.accent}
                    stroke="white"
                    strokeOpacity={0.6}
                    strokeWidth={1.5}
                  />

                  {/* category label */}
                  <text
                    x={round(cat.cx - Math.cos(cat.angle) * 34)}
                    y={round(cat.cy - Math.sin(cat.angle) * 28 + 4)}
                    textAnchor="middle"
                    fontSize={13}
                    fontWeight={600}
                    fill="#ffffff"
                    stroke="#0a0a0f"
                    strokeWidth={4}
                    paintOrder="stroke"
                  >
                    {cat.title}
                  </text>
                </g>
              );
            })}

            {/* center node */}
            <circle cx={centerX} cy={centerY} r={46} fill="white" opacity={0.04} />
            <circle
              cx={centerX}
              cy={centerY}
              r={30}
              fill="#0a0a0f"
              stroke="white"
              strokeOpacity={0.4}
              strokeWidth={1.5}
            />
            <text
              x={centerX}
              y={round(centerY + 4)}
              textAnchor="middle"
              fontSize={12}
              fontWeight={600}
              letterSpacing={2}
              fill="#ffffff"
            >
              UNISH
            </text>
          </svg>
        </motion.div>

        {/* MOBILE FALLBACK */}
        <div className="mt-10 grid gap-4 md:hidden">
          {nodes.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${cat.accent}1A` }}
                  >
                    <Icon size={18} style={{ color: cat.accent }} />
                  </span>
                  <h3 className="text-lg font-medium">{cat.title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-400"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-neutral-600"
        >
          <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-pink-500" />
          Always learning. Always building.
        </motion.div>
      </div>
    </section>
  );
}