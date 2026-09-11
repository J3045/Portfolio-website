"use client";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hook";
export default function Projects() {
 const { ref } = useSectionInView("Projects",0.5);
 return <section ref={ref} id="projects" className="mb-32 w-full max-w-6xl scroll-mt-28"><SectionHeading>Featured work</SectionHeading><p className="-mt-5 mb-10 max-w-2xl text-slate-600 dark:text-white/50">Practical projects exploring machine learning, generative AI and software systems.</p><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projectsData.map((project,index)=><Project key={index} {...project} index={index}/>)}</div></section>;
}