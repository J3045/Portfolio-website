"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-36 w-full max-w-6xl">
      <SectionHeading>Things I&apos;m building</SectionHeading>
      <p className="mx-auto -mt-7 mb-12 max-w-2xl text-center text-white/45">
        A selection of experiments and systems at the intersection of machine learning, software engineering and modern AI.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {projectsData.map((project, index) => <Project key={index} {...project} index={index} />)}
      </div>
    </section>
  );
}