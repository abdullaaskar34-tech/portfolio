import React, { memo } from "react";
import { 
  BrainCircuit, 
  Sparkles, 
  Globe2, 
  CheckCircle2, 
} from "lucide-react";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import { technicalSkills, professionalSkills } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const TechnicalSkills = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard className="flex flex-col h-full p-6 sm:p-8 md:p-12 overflow-hidden relative group/section">
      {/* Decorative background accent */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/20 blur-[80px] group-hover/section:bg-sky-200/30 transition-colors duration-1000" />
      
      <SectionTitle icon={BrainCircuit} eyebrow={t.skills.technical.eyebrow} title={t.skills.technical.title} large={true} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 flex-grow relative z-10">
        {t.data.technicalSkills.map(({ name, tools }) => (
          <div key={name} className="card-lift group relative rounded-[32px] border border-slate-100 bg-white/40 p-6 sm:p-8 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 hover:ring-2 hover:ring-sky-100/50 flex flex-col hover-glow-blue">
            <h4 className="text-lg font-black text-slate-800 leading-tight mb-5 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-sky-500 group-hover:scale-150 group-hover:animate-pulse transition-transform" />
                {name}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {tools.map(tool => (
                <span key={tool} className="px-3.5 py-1.5 rounded-xl bg-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 border border-slate-100/80 shadow-sm transition-all hover:bg-sky-500 hover:text-white hover:border-sky-400 hover:scale-105 active:scale-95 cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
});

export const ProfessionalSkills = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard delay={100} className="flex flex-col h-full p-6 sm:p-8 md:p-12 overflow-hidden relative group/section">
      {/* Decorative background accent */}
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-100/20 blur-[80px] group-hover/section:bg-emerald-200/30 transition-colors duration-1000" />

      <SectionTitle icon={Sparkles} eyebrow={t.skills.professional.eyebrow} title={t.skills.professional.title} large={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 flex-grow relative z-10">
        {t.data.professionalSkills.map(({ name, tools }) => (
          <div key={name} className="card-lift group relative rounded-[32px] border border-slate-100 bg-white/40 p-6 sm:p-8 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:ring-2 hover:ring-emerald-100/50 flex flex-col hover-glow-emerald">
            <h4 className="text-lg font-black text-slate-800 leading-tight mb-5 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 group-hover:scale-150 group-hover:animate-pulse transition-transform" />
                {name}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {tools.map(tool => (
                <span key={tool} className="px-3.5 py-1.5 rounded-xl bg-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 border border-slate-100/80 shadow-sm transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:scale-105 active:scale-95 cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
});

export const Languages = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard delay={200} className="p-6 sm:p-8 md:p-12 overflow-hidden relative group/section">
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-50/20 blur-[100px] pointer-events-none" />
      
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10 sm:gap-14 relative z-10">
        <div className="max-w-2xl">
          <SectionTitle icon={Globe2} eyebrow={t.skills.languages.eyebrow} title={t.skills.languages.title} />
          <p className="text-lg sm:text-xl font-medium text-slate-500 leading-relaxed">
             {t.skills.languages.description}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 w-full lg:w-auto">
          {t.data.languages.map(({ name, level }) => (
            <div key={name} className="card-lift group flex items-center gap-5 rounded-[28px] bg-white shadow-lg shadow-slate-200/50 p-5 pr-8 sm:pr-10 border border-slate-100 transition-all hover:shadow-2xl hover:shadow-sky-500/15 hover:ring-2 hover:ring-sky-100 w-full lg:min-w-[240px] hover-glow-blue">
              <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 grid place-items-center rounded-2xl bg-slate-50 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-inner">
                <CheckCircle2 size={28} className="sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black text-slate-800 leading-none mb-2 group-hover:text-sky-600 transition-colors">{name}</h4>
                <div className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 group-hover:animate-ping" />
                    <p className="text-[11px] font-black uppercase tracking-widest text-sky-600/80">{level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
});
