import React from "react";
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

export function TechnicalSkills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard className="flex flex-col h-full p-8 md:p-12">
      <SectionTitle icon={BrainCircuit} eyebrow={t.skills.technical.eyebrow} title={t.skills.technical.title} large={true} animate={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
        {t.data.technicalSkills.map(({ name, description }, index) => {
          const { icon: Icon, tools } = technicalSkills[index];

          return (
            <div
              key={name}
              className="group relative flex flex-col h-full overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative z-10 flex flex-col gap-8 h-full">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[20px] bg-sky-50 text-sky-600 transition-all duration-500 group-hover:bg-sky-500 group-hover:text-white shadow-sm ring-1 ring-sky-100/50">
                  <Icon size={32} />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <h4 className="text-[20px] font-black text-slate-800 leading-tight tracking-tight pr-4">{name}</h4>
                  </div>
                  <p className="text-[16px] font-medium text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors mb-6">
                    {description}
                  </p>
                  
                  {tools && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {tools.map(tool => (
                        <span key={tool} className="px-3 py-1 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-400 border border-slate-100 group-hover:bg-sky-50 group-hover:text-sky-600 group-hover:border-sky-100 transition-all">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}

export function ProfessionalSkills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard delay={100} className="flex flex-col h-full p-8 md:p-12">
      <SectionTitle icon={Sparkles} eyebrow={t.skills.professional.eyebrow} title={t.skills.professional.title} large={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
        {t.data.professionalSkills.map(({ name, description }, index) => {
          const { icon: Icon } = professionalSkills[index];

          return (
            <div
              key={name}
              className="group relative flex flex-col h-full overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative z-10 flex flex-col gap-8 h-full">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[20px] bg-sky-50 text-sky-600 transition-all duration-500 group-hover:bg-sky-500 group-hover:text-white shadow-sm ring-1 ring-sky-100/50">
                  <Icon size={32} />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <h4 className="text-[20px] font-black text-slate-800 leading-tight tracking-tight pr-4">{name}</h4>
                  </div>
                  <p className="text-[16px] font-medium text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}

export function Languages() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard delay={200} className="p-8 md:p-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
              <Globe2 className="text-sky-500" size={24} />
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">{t.skills.languages.title}</h3>
          </div>
          <p className="text-lg font-medium text-slate-500 leading-relaxed">
              {t.skills.languages.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {t.data.languages.map(({ name, level }) => (
            <div 
              key={name}
              className="group flex flex-col items-center text-center gap-3 p-6 rounded-[32px] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-white text-sky-500 shadow-sm ring-1 ring-slate-100">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-[15px] font-black text-slate-800 tracking-tight">{name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-sky-600 mt-1">{level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
