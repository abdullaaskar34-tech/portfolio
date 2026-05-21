import React, { useState, useEffect, memo } from "react";
import { Award, ChevronRight, X, ExternalLink, Building2, Calendar, Maximize2, ShieldCheck } from "lucide-react";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import { certifications } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import GlareHover from "../common/GlareHover";

const CertificationModal = memo(({ cert, onClose, language, t }) => {
    useEffect(() => {
        if (!cert) return;
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [cert, onClose]);

    if (!cert) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-0 sm:p-4 backdrop-blur-2xl animate-in fade-in duration-300" onClick={onClose}>
            <div className="relative h-full sm:h-auto sm:max-h-[95vh] w-full max-w-7xl overflow-hidden sm:rounded-[48px] border border-white/20 bg-white shadow-[0_32px_128px_rgba(0,0,0,0.4)] flex flex-col md:flex-row animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
                
                <button onClick={onClose} className="absolute z-[110] grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-white/90 text-slate-500 shadow-xl hover:bg-slate-800 hover:text-white transition-all active:scale-90 right-4 top-4 sm:right-8 sm:top-8">
                    <X size={20} className="sm:w-6 sm:h-6" />
                </button>

                <div className="md:w-3/5 bg-slate-50/50 p-6 sm:p-8 md:p-12 flex items-center justify-center border-slate-100 overflow-hidden md:border-r border-b md:border-b-0">
                    <div className="relative group/image">
                        <img src={cert.image} alt={cert.title} className="max-w-full max-h-[50vh] sm:max-h-[70vh] rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-black/5 object-contain" loading="lazy" decoding="async" />
                        <div className="absolute inset-0 rounded-2xl bg-black/5 opacity-0 group-hover/image:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                </div>

                <div className="flex-1 p-8 sm:p-10 md:p-16 overflow-y-auto flex flex-col">
                    <div className="mb-8 sm:mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 ring-1 ring-emerald-100">
                            <ShieldCheck size={12} className="sm:w-3.5 sm:h-3.5" /> {language === 'tr' ? 'Doğrulanmış' : 'Verified'}
                        </div>
                        <h3 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-black text-slate-800 leading-tight tracking-tight">{cert.title}</h3>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-sky-500 uppercase tracking-widest">{cert.category}</p>
                    </div>

                    <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 flex-grow">
                        <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-lg">
                            <div className="h-10 w-10 sm:h-14 sm:w-14 grid place-items-center rounded-xl sm:rounded-2xl bg-white shadow-sm text-sky-500">
                                <Building2 size={20} className="sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5 sm:mb-1">{t.common.organization}</p>
                                <p className="text-base sm:text-lg font-black text-slate-700 leading-none">{cert.issuer}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-lg">
                            <div className="h-10 w-10 sm:h-14 sm:w-14 grid place-items-center rounded-xl sm:rounded-2xl bg-white shadow-sm text-sky-500">
                                <Calendar size={20} className="sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5 sm:mb-1">{t.common.date}</p>
                                <p className="text-base sm:text-lg font-black text-slate-700 leading-none">{cert.date}</p>
                            </div>
                        </div>
                    </div>

                    <a 
                        href={cert.document || cert.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group flex w-full items-center justify-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl bg-slate-800 px-8 py-5 sm:px-10 sm:py-6 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-slate-900 hover:scale-[1.02] active:scale-95 shadow-2xl shadow-slate-200"
                    >
                        {language === 'tr' ? 'Doğrula' : 'Verify'} <ExternalLink size={18} className="sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </div>
            </div>
        </div>
    );
});

const CertificationCard = memo(({ cert, onClick, language, t }) => {
    return (
        <GlareHover 
            width="100%"
            height="100%"
            borderRadius="32px sm:40px" 
            borderColor="rgba(120, 150, 180, 0.45)"
            background="rgba(255, 255, 255, 0.75)"
            glareOpacity={0.3} 
            glareSize={300}
            className="h-full"
        >
            <article 
                onClick={onClick}
                className="group cursor-pointer relative flex flex-col h-full w-full overflow-hidden p-3 sm:p-4 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:-translate-y-1.5"
            >
                <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] sm:rounded-[32px] bg-slate-100 mb-4 sm:mb-6 ring-1 ring-black/5">
                    <img src={cert.image} alt={cert.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-8">
                        <div className="flex items-center gap-2 sm:gap-3 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                            {language === 'tr' ? 'Görüntüle' : 'View'} <Maximize2 size={14} className="sm:w-4 sm:h-4" />
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                        <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] text-slate-800 shadow-xl border border-white">{cert.category}</span>
                    </div>
                </div>

                <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">{cert.issuer}</p>
                        <span className="text-[8px] sm:text-[9px] font-bold text-slate-300 uppercase tracking-widest">{cert.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-800 leading-tight tracking-tight group-hover:text-sky-600 transition-colors line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">{cert.title}</h3>
                    <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sky-500 transition-colors">
                        {language === 'tr' ? 'Detaylar' : 'Details'} <ChevronRight size={12} className="sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </article>
        </GlareHover>
    );
});

const Certifications = memo(() => {
  const [activeCert, setActiveCert] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <GlassCard id="certificates" className="w-full" delay={150}>
        <div className="mb-10 sm:mb-16">
            <SectionTitle icon={Award} eyebrow={t.certifications.eyebrow} title={t.nav.certificates} />
            <p className="mt-6 max-w-6xl text-base sm:text-lg font-medium leading-relaxed text-slate-500">
                {t.certifications.description}
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <CertificationCard 
                key={cert.title} 
                cert={cert} 
                onClick={() => setActiveCert(cert)}
                language={language}
                t={t}
            />
          ))}
        </div>
      </GlassCard>

      <CertificationModal cert={activeCert} onClose={() => setActiveCert(null)} language={language} t={t} />
    </>
  );
});

export default Certifications;
