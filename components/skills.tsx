"use client";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref} className="mb-36 max-w-5xl scroll-mt-28 text-center">
      <SectionHeading>Technical stack</SectionHeading>
      <div className="flex flex-wrap justify-center gap-3">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * .025, .4) }}
            className="rounded-2xl border border-white/10 bg-white/[.035] px-5 py-3 text-sm text-white/65 transition hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}