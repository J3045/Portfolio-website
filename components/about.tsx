"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-4xl mx-auto px-4 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-5">
        I&apos;m a <span className="font-medium">Data Analyst with a Computer Engineering background</span>,
        currently focused on building practical AI and Machine Learning applications. My professional work
        has given me hands-on experience with <span className="font-medium">Python, SQL, Pandas, data preprocessing,
        automation and exploratory data analysis</span>—the foundation I now use to build intelligent systems.
      </p>

      <p className="mb-5">
        My current focus is <span className="font-medium">Generative AI, LLM applications, Machine Learning,
        RAG and Agentic AI</span>. I&apos;ve worked on projects involving LLM-assisted data workflows,
        neural networks and multi-agent architectures, combining my software engineering background
        with modern AI development.
      </p>

      <p>
        I enjoy the full journey from <span className="italic">data → model → application</span>.
        My goal is to build reliable end-to-end AI products that solve real problems, while continuously
        deepening my understanding of machine learning systems and modern AI engineering.
      </p>
    </motion.section>
  );
}