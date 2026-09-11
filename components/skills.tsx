"use client";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
export default function Skills(){const {ref}=useSectionInView("Skills");return <section id="skills" ref={ref} className="mb-32 w-full max-w-6xl scroll-mt-28"><SectionHeading>Tools I work with</SectionHeading><div className="flex flex-wrap gap-2.5">{skillsData.map((skill,index)=><motion.span key={skill} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:Math.min(index*.02,.3)}} className="rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-sm text-slate-600 transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-700 dark:border-white/10 dark:bg-white/[.035] dark:text-white/55 dark:hover:border-violet-400/40 dark:hover:text-violet-200">{skill}</motion.span>)}</div></section>;}