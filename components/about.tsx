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
      <p className="mb-3">
        During my <span className="font-medium">8th semester</span> of Computer Engineering, I completed an internship at{" "}
        <span className="font-medium">Code Expert Solution</span>, where I worked on developing Propluse, a freelancing marketplace. This experience
        honed my skills in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). Following my graduation, I further
        pursued my passion for programming by enrolling in the <span className="font-medium">100x Dev Cohort (0-100)</span> program, which
        focused on comprehensive full-stack development training. I also completed a summer internship at <span className="font-medium">Tatvsoft</span>,
        where I gained valuable experience in ReactJS and developed a Book Store Application.
      </p>

      <p>
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with TypeScript and Prisma. I am always
        looking to learn new technologies. Additionally, I have experience with{" "}
        <span className="font-medium">Cloudflare</span> for performance optimization and security enhancements.
      </p>
    </motion.section>
  );
}
