"use client";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number] & { index: number };

const visuals = [
  { icon: "◌", label: "ML / LLM", glow: "from-violet-500/30 via-indigo-500/10 to-transparent" },
  { icon: "✦", label: "AGENT SYSTEM", glow: "from-cyan-500/25 via-emerald-500/10 to-transparent" },
  { icon: "▦", label: "DATA / INSIGHTS", glow: "from-blue-500/25 via-violet-500/10 to-transparent" },
];

export default function Project({ title, description, tags, url, index }: ProjectProps) {
  const visual = visuals[index % visuals.length];
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-6 shadow-2xl shadow-black/20"
    >
      <div className={"absolute inset-x-0 top-0 h-56 bg-gradient-to-br " + visual.glow} />
      <div className="absolute -right-10 top-12 h-44 w-44 rounded-full border border-white/10 bg-white/[.03] blur-[1px]" />
      <div className="absolute right-8 top-8 text-7xl font-light text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-white/20">{visual.icon}</div>

      <div className="relative flex h-full flex-col">
        <div className="mb-20 inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-white/50">
          {visual.label}
        </div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
          <FiArrowUpRight className="mt-1 text-xl text-white/40 transition group-hover:text-white" />
        </div>
        <p className="leading-7 text-white/50">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-8">
          {tags.map((tag) => <li key={tag} className="rounded-full border border-white/10 bg-white/[.045] px-3 py-1.5 text-[10px] font-medium text-white/60">{tag}</li>)}
        </ul>
      </div>
    </motion.a>
  );
}