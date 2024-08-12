import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Propluse from "@/public/Propluse.png";
import Dashboard from "@/public/Dashboard.png";
import Referal from "@/public/Referal.png";
import invoice from "@/public/invoice.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "Ahemdabad, GJ",
    description:
      "Developed and implemented UI components using ReactJS for a Book Store app during my internship at Tatvsoft. Enhanced user experience with responsive design and integrated API features for seamless interaction.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Computer Engineering",
    location: "Anand, GJ",
    description:
      "Graduated with a Bachelor of Engineering in Computer Engineering from G.H. Patel College of Engineering & Technology in May 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Surat, GJ",
    description:
      "During my internship at Code Expert Solution, I served as a Full Stack Web Developer, where I led the development of Propluse, a dynamic freelancing marketplace. Utilizing the MERN stack (MongoDB, Express.js, React, Node.js), I developed and optimized key features such as user authentication, project management, and payment processing. My role involved close collaboration with a team to ensure seamless front-end and back-end integration, while adhering to best practices in coding and agile development.",
    icon: React.createElement(CgWorkAlt),
    date: "April - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "PROPLUSE",
    description:
      "Propluse is a MERN stack freelancing marketplace featuring user authentication, project management, and Stripe payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    imageUrl: Propluse,
    url: "https://github.com/J3045/Propluse/tree/main/Propluse_Fullstack",
  },
  
  {
    title: "Invoice Generator",
    description:
      "Invoice Generator quickly creates and manages customizable invoices with client details and payment terms.",
    tags: ["React", "Tailwind", "JsPdf", "Bootstrap"],
    imageUrl: invoice,
    url: "https://github.com/J3045/AurikaTech__/tree/master",
  },
  {
    title: "Refer & Earn",
    description:
      "Refer & Earn allows users to generate referral emails to earn rewards.",
    tags: ["React", "Tailwind", "Node.js","Prisma","SQL","Google Cloud"],
    imageUrl: Referal,
    url: "https://66940e6d4b9eb491ddf31ea2--steady-khapse-62eef7.netlify.app/",
  },
  {
    title: "Dashboard",
    description:
      "A React-based data visualization tool that connects to MongoDB, displaying interactive charts and graphs from JSON data.",
    tags: ["React", "Chart.js", "Node.js", "Tailwind", "Express.js"],
    imageUrl: Dashboard,
    url:"https://github.com/J3045/Dashboard",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "c/C++",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "SQL",
  "Cloudflare",
  "Hono",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Framer Motion",
] as const;