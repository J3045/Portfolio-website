import React from "react";
export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return <div className="mb-10"><p className="mb-3 text-xs font-semibold uppercase tracking-[.22em] text-violet-600 dark:text-violet-300">Portfolio</p><h2 className="text-4xl font-semibold tracking-[-.035em] text-slate-950 sm:text-5xl dark:text-white">{children}</h2></div>;
}