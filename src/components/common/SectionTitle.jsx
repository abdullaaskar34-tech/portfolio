import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function SectionTitle({ icon: Icon, eyebrow, title, large = false }) {
  return (
    <div className={`${large ? "mb-10" : "mb-8"} flex items-center gap-6`}>
      <div className={`flex ${large ? "h-16 w-16" : "h-14 w-14"} items-center justify-center rounded-2xl bg-sky-50 text-sky-600 shadow-sm ring-1 ring-sky-100/50 transition-all duration-500`}>
        <Icon size={large ? 32 : 28} className="transition-transform group-hover:scale-110" />
      </div>
      <div>
        <p className={`${large ? "text-[11px]" : "text-[10px]"} font-black uppercase tracking-[0.2em] text-sky-500 mb-1.5`}>
          {eyebrow}
        </p>
        <h2 className={`${large ? "text-4xl" : "text-3xl"} font-black tracking-tight text-slate-800 transition-all`}>
          {title}
        </h2>
      </div>
    </div>
  );
}
