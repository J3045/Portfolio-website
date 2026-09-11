import React from "react";

type SectionHeadingProps = { children: React.ReactNode; };

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-300/70">
        Selected intelligence
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
        {children}
      </h2>
    </div>
  );
}