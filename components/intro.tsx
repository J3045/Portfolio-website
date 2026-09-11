"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDown, BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";

const signals = ["ML SYSTEMS", "GENAI", "AGENTIC AI", "RAG / MCP"];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id="home" className="relative flex min-h-[92vh] w-full max-w-7xl items-center justify-center scroll-mt-[100rem]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => <motion.span key={i} className="absolute h-1.5 w-1.5 rounded-full bg-violet-300/70" style={{ left: (i * 17) % 100 + "%", top: (i * 29) % 90 + "%" }} animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.8, 1], y: [0, i % 2 ? -35 : 35, 0] }} transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * .12 }} />)}
      </div>
      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.4fr_.6fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-[10px] font-semibold tracking-[.24em] text-violet-200/80"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />AVAILABLE FOR AI / ML OPPORTUNITIES</div>
          <div className="mb-5 text-xs font-semibold tracking-[.42em] text-white/35">JAINIK PATEL — 01</div>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[.92] tracking-[-.065em] text-white sm:text-8xl xl:text-[8.5rem]">BUILDING<br /><span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">INTELLIGENT</span><br />SYSTEMS.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">Data Analyst & software engineer evolving into AI engineering — building machine learning, LLM and agentic systems from data to deployment.</p>
          <div className="mt-8 flex flex-wrap gap-2">{signals.map((signal) => <span key={signal} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-2 text-[10px] tracking-[.16em] text-white/45">{signal}</span>)}</div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="#projects" onClick={() => { setActiveSection("Projects"); setTimeOfLastClick(Date.now()); }} className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.03]">Explore systems <BsArrowRight className="transition group-hover:translate-x-1" /></Link>
            <a href="/Jainik_resume.pdf" download className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/70 transition hover:bg-white/5">Resume <HiDownload /></a>
            <a href="https://github.com/J3045" target="_blank" rel="noreferrer" className="p-3 text-xl text-white/50 hover:text-white"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jainik-patel-b4a826200/" target="_blank" rel="noreferrer" className="p-3 text-xl text-white/50 hover:text-white"><BsLinkedin /></a>
          </div>
        </motion.div>
        <motion.div className="relative mx-auto hidden lg:block" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}>
          <div className="absolute inset-[-5rem] rounded-full bg-violet-500/15 blur-3xl" />
          <div className="relative aspect-square w-[26rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[.08] to-transparent p-5 shadow-2xl">
            <Image src="/me2.png" alt="Jainik Patel" fill priority className="object-cover opacity-85 grayscale-[20%] mix-blend-luminosity" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl"><div className="text-[10px] tracking-[.25em] text-white/40">CURRENT FOCUS</div><div className="mt-2 text-sm text-white">AI Engineering · LLM Systems · Intelligent Agents</div></div>
          </div>
        </motion.div>
      </div>
      <Link href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/35 transition hover:text-white" aria-label="Scroll to about"><BsArrowDown className="animate-bounce" /></Link>
    </section>
  );
}