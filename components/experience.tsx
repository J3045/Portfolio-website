"use client";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section id="experience" ref={ref} className="mb-36 w-full max-w-5xl scroll-mt-28">
      <SectionHeading>Career trajectory</SectionHeading>
      <div className="relative mx-auto max-w-4xl border-l border-white/10 pl-6 sm:pl-10">
        {experiencesData.map((item, index) => (
          <motion.article key={index} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: Math.min(index * .08, .4) }} className="relative mb-6 last:mb-0">
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-[#07070a] bg-violet-400 shadow-[0_0_25px_rgba(139,92,246,.8)] sm:-left-[47px]" />
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[.025] p-6 transition hover:border-violet-400/30 hover:bg-white/[.04] sm:p-7">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-[.18em] text-violet-300/70">{item.date}</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/45">{item.companyname} · {item.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[.04] p-3 text-xl text-white/55">{item.icon}</div>
              </div>
              <p className="max-w-3xl leading-7 text-white/50">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}