"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";

const signals = ["Machine Learning", "Generative AI", "Agentic Systems", "Data"];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="relative flex min-h-[84vh] w-full max-w-6xl items-center scroll-mt-[100rem]">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-full opacity-70" />
      <div className="relative grid w-full items-center gap-12 py-24 lg:grid-cols-[1fr_auto]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full surface px-3 py-1.5 text-[11px] font-medium text-violet-700 dark:text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Open to AI / ML opportunities
          </div>
          <p className="mb-5 text-sm font-semibold tracking-[.22em] text-slate-400 dark:text-white/35">HELLO, I&apos;M JAINIK PATEL</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-.045em] text-slate-950 sm:text-7xl dark:text-white">
            I build <span className="text-violet-600 dark:text-violet-300">intelligent products</span> that turn ideas into systems.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-white/55">
            Data Analyst with a software engineering background, focused on Machine Learning, LLM applications and practical AI systems—from data pipelines to usable products.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {signals.map((signal) => <span key={signal} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[.04] dark:text-white/50">{signal}</span>)}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="#projects" onClick={() => { setActiveSection("Projects"); setTimeOfLastClick(Date.now()); }} className="group flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-500/20">
              View my work <BsArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <a href="/Jainik_resume.pdf" download className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[.05] dark:text-white/75">
              Resume <HiDownload />
            </a>
            <a href="https://github.com/J3045" target="_blank" rel="noreferrer" className="p-3 text-lg text-slate-500 transition hover:text-slate-950 dark:text-white/45 dark:hover:text-white"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jainik-patel-b4a826200/" target="_blank" rel="noreferrer" className="p-3 text-lg text-slate-500 transition hover:text-slate-950 dark:text-white/45 dark:hover:text-white"><BsLinkedin /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6, delay: .1 }} className="hidden lg:block">
          <div className="float-slow relative">
            <div className="absolute -inset-8 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/20" />
            <div className="relative h-56 w-56 overflow-hidden rounded-[2rem] surface p-2">
              <Image src="/me2.jpg" alt="Jainik Patel" fill priority className="rounded-[1.55rem] object-cover object-center" />
            </div>
            <div className="absolute -bottom-5 -left-8 rounded-2xl surface px-4 py-3">
              <p className="text-[10px] font-semibold tracking-[.16em] text-slate-400">CURRENT FOCUS</p>
              <p className="mt-1 text-xs font-medium text-slate-700 dark:text-white/75">AI Engineering · LLM Systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}