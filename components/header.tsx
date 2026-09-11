"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className="fixed left-0 top-0 z-[999] w-full">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#home" className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
          JAINIK<span className="text-violet-500">.</span>
        </Link>
        <nav className="hidden rounded-full surface p-1 md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.hash}
                  onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); }}
                  className={clsx("block rounded-full px-3.5 py-2 text-xs transition", activeSection === link.name ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-500 hover:text-slate-950 dark:text-white/45 dark:hover:text-white")}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="rounded-full bg-slate-900 px-4 py-2.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900">
          Let&apos;s connect
        </a>
      </div>
    </header>
  );
}