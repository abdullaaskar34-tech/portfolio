import React from "react";
import useInView from "../../hooks/useInView";

export default function GlassCard({ children, className = "", id, delay = 0 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      <div className="rounded-[32px] border border-slate-200/50 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl p-6 md:p-10">
        {children}
      </div>
    </div>
  );
}
