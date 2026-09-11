"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="fixed left-0 top-0 z-[999] w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#home" className="font-semibold tracking-tight text-white">
          JP<span className="text-violet-400">/</span>AI
        </Link>
        <nav className="hidden rounded-full border border-white/10 bg-white/[.035] px-2 py-1.5 backdrop-blur-xl md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); }}
                  className={clsx("rounded-full px-3 py-2 text-xs transition", activeSection === link.name ? "bg-white/10 text-white" : "text-white/45 hover:text-white")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200 transition hover:bg-violet-500/20">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}