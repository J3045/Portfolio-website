import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import Dashboard from "@/public/Dashboard.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Data Analyst",
    companyname: "AU Small Finance Bank",
    location: "Jaipur, Rajasthan",
    description:
      "Working with Python, SQL, Pandas and Excel to analyze business and credit portfolio data. Building automated reporting and data-processing workflows, performing data cleaning, validation and exploratory analysis to support data-driven decision making.",
    icon: React.createElement(CgWorkAlt),
    date: "Current",
  },
  {
    title: "Software Developer",
    companyname: "Sankhyana Consultancy Service",
    location: "Remote",
    description:
      "Contributed to web applications using React and Node.js, including form development, payment gateway integrations and full-stack feature development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Full-Stack Developer Intern",
    companyname: "Code Expert Solutions",
    location: "Surat, Gujarat",
    description:
      "Built features for a freelancing marketplace using the MERN stack, including authentication, project workflows and payment integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Computer Engineering",
    companyname: "G.H. Patel College of Engineering & Technology",
    location: "Anand, Gujarat",
    description:
      "Bachelor of Engineering in Computer Engineering. Built a foundation in programming, software engineering and problem solving.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "ReactJS Intern",
    companyname: "TatvaSoft",
    location: "Ahmedabad, Gujarat",
    description:
      "Developed responsive UI components and API-integrated features for a Book Store application using ReactJS.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "LLM-Enhanced Product Price Prediction",
    description:
      "Machine learning project exploring LLM-assisted preprocessing and feature engineering for product price prediction, using neural networks and modern fine-tuning techniques.",
    tags: ["Python", "PyTorch", "Machine Learning", "LLMs", "QLoRA"],
    imageUrl: Dashboard,
    url: "https://github.com/J3045",
  },
  {
    title: "Multi-Agent AI Trading System",
    description:
      "Agentic AI trading simulation that combines LLM-powered agents, MCP, API integrations and portfolio intelligence workflows for research, decision support and monitoring.",
    tags: ["Python", "LLMs", "Agentic AI", "MCP", "SQLite", "Gradio"],
    imageUrl: Dashboard,
    url: "https://github.com/J3045",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive data visualization application that processes structured data and presents insights through dynamic charts and dashboards.",
    tags: ["Python", "SQL", "Data Analytics", "React", "Visualization"],
    imageUrl: Dashboard,
    url: "https://github.com/J3045/Dashboard",
  },
] as const;

export const skillsData = [
  "Python",
  "Machine Learning",
  "PyTorch",
  "Pandas",
  "NumPy",
  "SQL",
  "Data Analysis",
  "Feature Engineering",
  "Generative AI",
  "LLMs",
  "LangChain",
  "OpenAI SDK",
  "RAG",
  "Agentic AI",
  "MCP",
  "CrewAI",
  "Docker",
  "AWS",
  "REST APIs",
  "Git",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
] as const;