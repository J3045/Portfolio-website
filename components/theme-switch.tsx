"use client";
import { useTheme } from "@/context/theme-context";
import { BsMoonStars, BsSun } from "react-icons/bs";
export default function ThemeSwitch(){const {theme,toggleTheme}=useTheme();return <button aria-label="Toggle theme" className="fixed bottom-5 right-5 z-[1000] flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-lg backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-900/85 dark:text-white" onClick={toggleTheme}>{theme==="light"?<BsMoonStars/>:<BsSun/>}</button>;}