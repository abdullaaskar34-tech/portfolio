import React, { memo } from "react";
import { 
  MapPin, 
  Calendar, 
} from "lucide-react";
import GlassCard from "../common/GlassCard";
import { leadershipExperience } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

const Leadership = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  const translatedLeadership = leadershipExperience.map((item, index) => {
    const transItem = t.data.leadershipExperience?.[index];
    if (!transItem) return item;

    return {
        ...item,
        role: transItem.role,
        organization: transItem.organization,
        description: transItem.description,
        tags: transItem.tags,
        date: transItem.date || item.date
    };
  });

  return (
    <section id="leadership" className="py-24">
      <div className="w-full mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-sky-500" />
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-sky-600">{language === 'tr' ? 'Etki ve Hizmet' : 'Impact & Service'}</p>
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-800 mb-8 leading-[1.1]">{t.leadership.title}</h2>
        <p className="text-xl md:text-2xl font-medium text-slate-500 leading-relaxed w-full max-w-4xl">
          {t.leadership.description}
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {translatedLeadership.map((item, index) => (
          <GlassCard 
            key={index} 
            delay={index * 100} 
            className="group p-0 border-white/60 bg-white/40 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-start p-8 md:p-12 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-500/0 group-hover:bg-sky-500 transition-all duration-500" />

              <div className="flex items-center justify-center shrink-0">
                {item.logo ? (
                  <div className="leadership-logo-box ring-1 ring-slate-100/50 transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src={item.logo} 
                      alt={`${item.organization} logo`} 
                      className="p-2"
                      style={{ transform: `scale(${item.scale || 1.15})` }}
                    />
                  </div>
                ) : (
                  <div className="leadership-logo-box bg-sky-50 text-sky-600 transition-all duration-500 group-hover:bg-sky-500 group-hover:text-white shadow-lg ring-1 ring-sky-100/50 group-hover:scale-105">
                    <item.icon size={48} />
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight group-hover:text-sky-600 transition-colors mb-2">
                    {item.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">
                        {item.organization}
                      </p>
                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          <MapPin size={12} className="text-sky-500" />
                          {item.location}
                        </div>
                      )}
                  </div>
                </div>
                
                <p className="text-base md:text-lg font-medium text-slate-500 leading-relaxed mb-8 max-w-4xl">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                    {item.tags.map((tag, idx) => (
                    <span 
                        key={idx} 
                        className="px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-400 border border-slate-100 group-hover:bg-sky-50 group-hover:text-sky-600 group-hover:border-sky-100 transition-all"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
              </div>

              <div className="md:text-right shrink-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-xs font-black text-sky-600 uppercase tracking-widest border border-slate-100/50 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-500">
                      <Calendar size={14} />
                      {item.date}
                  </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
});

export default Leadership;
