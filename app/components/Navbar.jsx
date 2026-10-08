"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.2em]"
        >
          UNISH SHAKYA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm transition-all duration-300 hover:border-[#d6a84f] hover:text-[#d6a84f]"
        >
          Let's Talk
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </motion.nav>
  );
}