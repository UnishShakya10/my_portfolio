"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const links = [
  {
  label: "shakyaunish5@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=shakyaunish5@gmail.com",
  icon: Mail,
  external: true,
  delay: 0.2,
  card: "hover:border-violet-500/40 hover:bg-violet-500/5",
  iconBox: "bg-violet-500/10 text-violet-400",
  arrow: "group-hover:text-violet-400",
},
{
  label: "+977 9861616232",
  href: "https://wa.me/9779861616232",
  icon: FaWhatsapp,
  external: true,
  delay: 0.3,
  card: "hover:border-green-500/40 hover:bg-green-500/5",
  iconBox: "bg-green-500/10 text-green-400",
  arrow: "group-hover:text-green-400",
},
  {
    label: "GitHub",
    href: "https://github.com/UnishShakya10",
    icon: FaGithub,
    external: true,
    delay: 0.4,
    card: "hover:border-pink-500/40 hover:bg-pink-500/5",
    iconBox: "bg-pink-500/10 text-pink-400",
    arrow: "group-hover:text-pink-400",
  },
  {
    label: "LinkedIn",
    href: "#", // TODO: put your real LinkedIn URL here
    icon: FaLinkedinIn,
    external: true,
    delay: 0.5,
    card: "hover:border-blue-500/40 hover:bg-blue-500/5",
    iconBox: "bg-blue-500/10 text-blue-400",
    arrow: "group-hover:text-blue-400",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32 md:px-10 md:py-40"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-600/10 blur-[140px]" />

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
            <span className="text-sm font-medium text-pink-400">05</span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Contact
            </span>
          </div>

          <ArrowDownRight size={22} className="text-neutral-600" />
        </motion.div>

        {/* MAIN MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Have an idea?
          </p>

          <h2 className="max-w-6xl text-[16vw] font-semibold leading-[0.78] tracking-[-0.07em] md:text-[11vw]">
            LET&apos;S
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              CONNECT.
            </span>
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 max-w-2xl text-lg leading-8 text-neutral-400 md:text-xl"
        >
          I&apos;m always open to discussing new projects, opportunities and
          ideas. If you&apos;re looking for someone to build thoughtful and
          modern digital experiences, let&apos;s talk.
        </motion.p>

        {/* ALL CONTACT LINKS */}
        <div className="mt-12 flex flex-wrap gap-4">
          {links.map(
            ({ label, href, icon: Icon, external, delay, card, iconBox, arrow }) => (
              <motion.a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay }}
                className={`group inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 transition-all duration-300 ${card}`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBox}`}
                >
                  <Icon size={17} />
                </span>

                <span className="text-neutral-300 transition-colors group-hover:text-white">
                  {label}
                </span>

                <ArrowUpRight
                  size={17}
                  className={`text-neutral-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${arrow}`}
                />
              </motion.a>
            )
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-28 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Unish Shakya</span>
          <span>Frontend Developer · Nepal</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </section>
  );
}