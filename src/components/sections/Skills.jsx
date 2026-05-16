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
    <GlassCard className="flex flex-col h-full p-6 sm:p-8 md:p-12">
      <SectionTitle icon={BrainCircuit} eyebrow={t.skills.technical.eyebrow} title={t.skills.technical.title} large={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 flex-grow">
        {t.data.technicalSkills.map(({ name, tools }) => (
          <div key={name} className="group relative rounded-3xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-sky-100 flex flex-col">
            <h4 className="text-base font-black text-slate-800 leading-tight mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                {name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <span key={tool} className="px-3 py-1 rounded-xl bg-white text-[10px] sm:text-[11px] font-bold text-slate-500 border border-slate-100 group-hover:text-sky-600 group-hover:border-sky-100 transition-all shadow-sm">
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
    <GlassCard delay={100} className="flex flex-col h-full p-6 sm:p-8 md:p-12">
      <SectionTitle icon={Sparkles} eyebrow={t.skills.professional.eyebrow} title={t.skills.professional.title} large={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 flex-grow">
        {t.data.professionalSkills.map(({ name, tools }) => (
          <div key={name} className="group relative rounded-3xl border border-slate-50 bg-slate-50/30 p-6 transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-emerald-100">
            <h4 className="text-base font-black text-slate-800 leading-tight mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <span key={tool} className="px-3 py-1 rounded-xl bg-white text-[10px] sm:text-[11px] font-bold text-slate-600 border border-slate-100 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all shadow-sm">
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
    <GlassCard delay={200} className="p-6 sm:p-8 md:p-12">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 sm:gap-10">
        <div>
          <SectionTitle icon={Globe2} eyebrow={t.skills.languages.eyebrow} title={t.skills.languages.title} />
          <p className="text-lg font-medium text-slate-500 max-w-xl">
             {t.skills.languages.description}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {t.data.languages.map(({ name, level }) => (
            <div key={name} className="group flex items-center gap-4 rounded-3xl bg-slate-50/50 p-4 pr-6 sm:pr-8 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-xl hover:ring-sky-100 w-full lg:w-auto flex-1 lg:flex-none">
              <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 grid place-items-center rounded-2xl bg-white shadow-sm text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                <CheckCircle2 size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-800 leading-tight">{name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-sky-600 mt-1">{level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
});
