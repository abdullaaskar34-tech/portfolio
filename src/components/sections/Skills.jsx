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
    <GlassCard className="flex flex-col h-full p-8 md:p-12">
      <SectionTitle icon={BrainCircuit} eyebrow={t.skills.technical.eyebrow} title={t.skills.technical.title} large={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
        {t.data.technicalSkills.map(({ name, description }, index) => {
          const { icon: Icon, tools } = technicalSkills[index];

          return (
            <div key={name} className="group relative rounded-3xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-sky-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-white shadow-sm text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-black text-slate-800 leading-tight mb-1">{name}</h4>
                  <p className="text-[13px] font-medium leading-relaxed text-slate-500">{description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                {tools.map(tool => (
                  <span key={tool} className="px-2.5 py-1 rounded-lg bg-white text-[10px] font-black uppercase tracking-wider text-slate-400 border border-slate-100 group-hover:text-sky-600 group-hover:border-sky-100 transition-all">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
});

export const ProfessionalSkills = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard delay={100} className="flex flex-col h-full p-8 md:p-12">
      <SectionTitle icon={Sparkles} eyebrow={t.skills.professional.eyebrow} title={t.skills.professional.title} large={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
        {t.data.professionalSkills.map(({ name, description }, index) => {
          const { icon: Icon } = professionalSkills[index];

          return (
            <div key={name} className="group flex items-start gap-5 p-6 rounded-3xl border border-slate-50 bg-slate-50/30 transition-all hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-emerald-100">
              <div className="p-3 rounded-2xl bg-white shadow-sm text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <Icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-800 leading-tight mb-1">{name}</h4>
                <p className="text-[13px] font-medium leading-relaxed text-slate-500">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
});

export const Languages = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <GlassCard delay={200} className="p-8 md:p-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <SectionTitle icon={Globe2} eyebrow={t.skills.languages.eyebrow} title={t.skills.languages.title} />
          <p className="text-lg font-medium text-slate-500 max-w-xl">
             {t.skills.languages.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 lg:gap-6">
          {t.data.languages.map(({ name, level }) => (
            <div key={name} className="group flex items-center gap-4 rounded-3xl bg-slate-50/50 p-4 pr-8 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-xl hover:ring-sky-100">
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-white shadow-sm text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                <CheckCircle2 size={24} />
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
