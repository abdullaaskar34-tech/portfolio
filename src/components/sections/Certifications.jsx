import React, { useState, useEffect } from "react";
import { Award, ChevronRight, X, ExternalLink, Building2, Calendar, Maximize2, ShieldCheck } from "lucide-react";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import { certifications } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

function CertificationModal({ cert, onClose, language, t }) {
  if (!cert) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-2xl animate-in fade-in duration-300"
        onClick={onClose}
    >
      <div 
        className={`relative max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-[48px] border border-white/20 bg-white shadow-[0_32px_128px_rgba(0,0,0,0.4)] flex flex-col md:flex-row animate-in zoom-in-95 duration-500`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute z-[110] grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-500 shadow-xl hover:bg-slate-800 hover:text-white transition-all active:scale-90 right-8 top-8`}
        >
          <X size={24} />
        </button>

        <div className={`md:w-3/5 bg-slate-50/50 p-8 md:p-12 flex items-center justify-center border-slate-100 overflow-hidden md:border-r border-b md:border-b-0`}>
           <div className="relative group/image">
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl ring-1 ring-black/5 object-contain"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/5 opacity-0 group-hover/image:opacity-100 transition-opacity pointer-events-none" />
           </div>
        </div>

        <div className={`flex-1 p-10 md:p-16 overflow-y-auto flex flex-col`}>
            <div className="mb-12">
                <div className={`inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 ring-1 ring-emerald-100`}>
                    <ShieldCheck size={14} /> {language === 'tr' ? 'Doğrulanmış Profesyonel Kimlik' : 'Verified Professional Credential'}
                </div>
                <h3 className="mt-6 text-4xl font-black text-slate-800 leading-tight tracking-tight">
                    {cert.title}
                </h3>
                <p className="mt-4 text-lg font-bold text-sky-500 uppercase tracking-widest">{cert.category}</p>
            </div>

            <div className="space-y-6 mb-12 flex-grow">
                <div className={`flex items-center gap-5 p-6 rounded-3xl bg-slate-50 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-lg`}>
                    <div className="h-14 w-14 grid place-items-center rounded-2xl bg-white shadow-sm text-sky-500">
                        <Building2 size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.common.organization}</p>
                        <p className="text-lg font-black text-slate-700 leading-none">{cert.issuer}</p>
                    </div>
                </div>
                <div className={`flex items-center gap-5 p-6 rounded-3xl bg-slate-50 ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-lg`}>
                    <div className="h-14 w-14 grid place-items-center rounded-2xl bg-white shadow-sm text-sky-500">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.common.date}</p>
                        <p className="text-lg font-black text-slate-700 leading-none">{cert.date}</p>
                    </div>
                </div>
            </div>

            <a
                href={cert.document || cert.link}
                target="_blank"
                rel="noreferrer"
                className={`group flex w-full items-center justify-center gap-4 rounded-3xl bg-slate-800 px-10 py-6 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-slate-900 hover:scale-[1.02] active:scale-95 shadow-2xl shadow-slate-200`}
            >
                {language === 'tr' ? 'Sertifika Kaydını Doğrula' : 'Verify Credential Record'} <ExternalLink size={20} className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
            </a>
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ cert, onClick, language, t }) {
    return (
        <article
            onClick={onClick}
            className={`group cursor-pointer relative overflow-hidden rounded-[40px] border border-white bg-white/40 p-4 transition-all duration-500 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:ring-2 hover:ring-sky-100`}
        >
            <div className="relative aspect-[16/11] overflow-hidden rounded-[32px] bg-slate-100 mb-6 ring-1 ring-black/5">
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className={`flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.2em]`}>
                        {language === 'tr' ? 'Tam Görünüm' : 'Full View'} <Maximize2 size={16} />
                    </div>
                </div>
                <div className={`absolute top-5 left-5`}>
                    <span className="rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-slate-800 shadow-xl border border-white">
                        {cert.category}
                    </span>
                </div>
            </div>

            <div className="px-4 pb-4">
                <div className={`flex items-center justify-between mb-3`}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">
                        {cert.issuer}
                    </p>
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{cert.date}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800 leading-tight tracking-tight group-hover:text-sky-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                    {cert.title}
                </h3>
                <div className={`mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sky-500 transition-colors`}>
                    {language === 'tr' ? 'Detayları Gör' : 'View Details'} <ChevronRight size={14} className={`transition-transform group-hover:translate-x-1`} />
                </div>
            </div>
        </article>
    );
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <GlassCard id="certificates" className="w-full" delay={150}>
        <div className={`mb-16`}>
            <SectionTitle icon={Award} eyebrow={language === 'tr' ? 'Profesyonel Mükemmellik' : 'Professional Excellence'} title={t.nav.certificates} />
            <p className={`mt-6 max-w-6xl text-lg font-medium leading-relaxed text-slate-500`}>
                {language === 'tr' ? 'Yapay zeka, derin öğrenme, biyomedikal ekipman kalitesi, elektronik tasarımı ve Python programlama alanlarında seçilmiş profesyonel sertifikalar.' : 'Selected professional certifications in artificial intelligence, deep learning, biomedical equipment quality, electronics design, and Python programming.'}
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
}
