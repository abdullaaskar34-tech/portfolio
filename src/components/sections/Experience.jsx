import React, { useState, useEffect, memo } from "react";
import { BriefcaseBusiness, ChevronRight, ChevronLeft, X, Building2, CircuitBoard, Activity, ShieldCheck, Settings2, Image as ImageIcon, Maximize2 } from "lucide-react";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import { experience } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import GlareHover from "../common/GlareHover";

const FullscreenImage = memo(({ images, currentIndex, onIndexChange, onClose, language }) => {
    const activeImage = images[currentIndex];

    const handlePrevious = (e) => {
        e.stopPropagation();
        onIndexChange((currentIndex - 1 + images.length) % images.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        onIndexChange((currentIndex + 1) % images.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') onIndexChange((currentIndex - 1 + images.length) % images.length);
            if (e.key === 'ArrowRight') onIndexChange((currentIndex + 1) % images.length);
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, images.length, onIndexChange, onClose]);

    return (
        <div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-10 animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Header Controls */}
            <div className="absolute inset-x-0 top-0 z-[110] flex items-center justify-between p-4 sm:p-10">
                <div className="px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-2xl">
                    {currentIndex + 1} / {images.length}
                </div>
                <button 
                    onClick={onClose}
                    className="h-10 w-10 sm:h-12 sm:w-12 grid place-items-center rounded-xl sm:rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90 border border-white/10 shadow-2xl"
                >
                    <X size={20} className="sm:w-6 sm:h-6" />
                </button>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button 
                        onClick={handlePrevious}
                        className="absolute z-[110] h-12 w-12 sm:h-14 sm:w-14 grid place-items-center rounded-xl sm:rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90 border border-white/10 shadow-2xl group left-4 sm:left-10"
                    >
                        <ChevronLeft size={24} className="sm:w-8 sm:h-8 transition-transform group-hover:-translate-x-1" />
                    </button>
                    <button 
                        onClick={handleNext}
                        className="absolute z-[110] h-12 w-12 sm:h-14 sm:w-14 grid place-items-center rounded-xl sm:rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90 border border-white/10 shadow-2xl group right-4 sm:right-10"
                    >
                        <ChevronRight size={24} className="sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1" />
                    </button>
                </>
            )}

            {/* Main Image View */}
            <div className="relative flex flex-col items-center gap-6 sm:gap-8 w-full max-w-7xl">
                <img 
                    src={activeImage.src} 
                    alt={activeImage.alt} 
                    className="max-h-[65vh] sm:max-h-[75vh] w-auto object-contain rounded-xl sm:rounded-2xl shadow-[0_32px_128px_rgba(0,0,0,0.5)] animate-in zoom-in duration-500 ring-1 ring-white/10"
                    onClick={(e) => e.stopPropagation()}
                />
                
                {activeImage.caption && (
                    <div className="max-w-2xl text-center px-6 py-4 sm:px-10 sm:py-6 rounded-2xl sm:rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed italic drop-shadow-md">
                            "{activeImage.caption}"
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
});

const CaseModal = memo(({ caseStudy, onClose, language, t }) => {
    if (!caseStudy) return null;
    const [activeImage, setActiveImage] = useState(caseStudy.images[0]);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const activeIndex = caseStudy.images.findIndex(img => img.src === activeImage.src);

    return (
        <>
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-0 sm:p-4 backdrop-blur-xl transition-all duration-500">
                <div className="relative h-full sm:h-auto sm:max-h-[95vh] w-full max-w-7xl overflow-hidden sm:rounded-[48px] border border-white/20 bg-white/95 shadow-[0_32px_128px_rgba(0,0,0,0.3)] flex flex-col animate-slideUp">
                    
                    {/* Modal Header */}
                    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/80 p-6 sm:p-8 backdrop-blur-md">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="h-10 w-10 sm:h-12 sm:w-12 grid place-items-center rounded-xl sm:rounded-2xl bg-slate-800 text-white shadow-xl shadow-slate-200">
                                <CircuitBoard size={20} className="sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 mb-0.5">{caseStudy.category}</p>
                                <h3 className="text-lg sm:text-2xl font-black text-slate-800 tracking-tight line-clamp-1">{caseStudy.title}</h3>
                            </div>
                        </div>
                        <button onClick={onClose} className="group grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-slate-100 text-slate-500 hover:bg-slate-800 hover:text-white transition-all active:scale-90">
                            <X size={20} className="sm:w-6 sm:h-6 transition-transform group-hover:rotate-90" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="grid lg:grid-cols-2 h-full">
                            {/* Technical Report Side */}
                            <div className="p-6 sm:p-8 md:p-12 space-y-8 sm:space-y-10 border-slate-100 lg:border-r">
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-7 w-7 sm:h-8 sm:w-8 grid place-items-center rounded-lg sm:rounded-xl bg-red-50 text-red-500">
                                            <Activity size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        </div>
                                        <h4 className="text-[12px] sm:text-sm font-black uppercase tracking-widest text-slate-400">{t.experience.problem}</h4>
                                    </div>
                                    <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-5 sm:p-6 ring-1 ring-slate-100">
                                        <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">{caseStudy.problem}</p>
                                    </div>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-7 w-7 sm:h-8 sm:w-8 grid place-items-center rounded-lg sm:rounded-xl bg-sky-50 text-sky-500">
                                            <Settings2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        </div>
                                        <h4 className="text-[12px] sm:text-sm font-black uppercase tracking-widest text-slate-400">{t.experience.intervention}</h4>
                                    </div>
                                    <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-5 sm:p-6 ring-1 ring-slate-100">
                                        <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">{caseStudy.intervention}</p>
                                    </div>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-7 w-7 sm:h-8 sm:w-8 grid place-items-center rounded-lg sm:rounded-xl bg-emerald-50 text-emerald-500">
                                            <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        </div>
                                        <h4 className="text-[12px] sm:text-sm font-black uppercase tracking-widest text-slate-400">{t.experience.result}</h4>
                                    </div>
                                    <div className="rounded-2xl sm:rounded-3xl bg-emerald-50/50 p-5 sm:p-6 ring-1 ring-emerald-100">
                                        <p className="text-sm sm:text-base font-bold leading-relaxed text-emerald-800">{caseStudy.result}</p>
                                    </div>
                                </section>
                            </div>

                            {/* Media Gallery Side */}
                            <div className="bg-slate-50/50 p-6 sm:p-8 md:p-12">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="h-7 w-7 sm:h-8 sm:w-8 grid place-items-center rounded-lg sm:rounded-xl bg-slate-200 text-slate-500">
                                        <ImageIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </div>
                                    <h4 className="text-[12px] sm:text-sm font-black uppercase tracking-widest text-slate-400">{language === 'tr' ? 'Teknik Kanıtlar' : 'Technical Evidence'}</h4>
                                </div>

                                <div className="space-y-6">
                                    <div 
                                        className="group/main relative aspect-video overflow-hidden rounded-2xl sm:rounded-[32px] border-4 border-white shadow-2xl bg-slate-200/50 cursor-pointer"
                                        onClick={() => setIsFullscreen(true)}
                                    >
                                        <img 
                                            src={activeImage.src} 
                                            className="h-full w-full object-contain animate-in fade-in zoom-in duration-500" 
                                            alt={activeImage.alt || "Case evidence"} 
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-slate-800 scale-90 group-hover/main:scale-100 transition-transform">
                                                <Maximize2 size={20} className="sm:w-6 sm:h-6" />
                                            </div>
                                        </div>
                                    </div>

                                    {activeImage.caption && (
                                        <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-[24px] bg-white border border-slate-100 shadow-sm ring-1 ring-slate-50">
                                            <p className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed text-center italic">
                                                "{activeImage.caption}"
                                            </p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-4 gap-3 sm:gap-4">
                                        {caseStudy.images.map((img, idx) => (
                                            <button 
                                                key={idx} 
                                                onClick={() => setActiveImage(img)}
                                                className={`relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl border-2 transition-all hover:scale-105 active:scale-95 ${activeImage.src === img.src ? 'border-sky-500 ring-2 sm:ring-4 ring-sky-100 shadow-lg' : 'border-white shadow-md'}`}
                                            >
                                                <img 
                                                  src={img.src} 
                                                  className="h-full w-full object-cover" 
                                                  alt={img.alt || `Evidence ${idx + 1}`} 
                                                  loading="lazy"
                                                  decoding="async"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 bg-slate-50/80 p-4 sm:p-6 text-center">
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{language === 'tr' ? 'Klinik Mühendislik Bakım Raporu — Onaylı Kayıt' : 'Clinical Engineering Maintenance Report — Certified Record'}</p>
                    </div>
                </div>
            </div>

            {isFullscreen && (
                <FullscreenImage 
                    images={caseStudy.images}
                    currentIndex={activeIndex}
                    onIndexChange={(idx) => setActiveImage(caseStudy.images[idx])}
                    onClose={() => setIsFullscreen(false)} 
                    language={language}
                />
            )}
        </>
    );
});

const CaseCard = memo(({ caseStudy, onClick, language }) => {
    return (
        <GlareHover 
            width="100%"
            height="100%"
            borderRadius="24px" 
            borderColor="rgba(120, 150, 180, 0.45)"
            background="rgba(255, 255, 255, 0.75)"
            glareOpacity={0.3} 
            glareSize={300}
            className="h-full"
        >
            <div 
                onClick={onClick}
                className="group cursor-pointer relative h-full overflow-hidden p-3 sm:p-4 transition-all hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5"
            >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-[24px] mb-4 sm:mb-6">
                    <img 
                        src={caseStudy.thumbnail} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt={caseStudy.title} 
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                        <p className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                            {language === 'tr' ? 'Tam Raporu Görüntüle' : 'View Full Report'} <ChevronRight size={12} className="sm:w-3.5 sm:h-3.5" />
                        </p>
                    </div>
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1.5 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-800 shadow-lg">
                            {caseStudy.category.split(' / ')[0]}
                        </span>
                    </div>
                </div>

                <div className="px-1 sm:px-2 pb-1 sm:pb-2">
                    <h4 className="text-base sm:text-lg font-black text-slate-800 mb-1.5 sm:mb-2 group-hover:text-sky-600 transition-colors line-clamp-1">{caseStudy.title}</h4>
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500 line-clamp-2 leading-relaxed">
                        {caseStudy.problem}
                    </p>
                </div>
            </div>
        </GlareHover>
    );
});

const Experience = memo(() => {
  const [activeCase, setActiveCase] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const getExperience = () => {
    return experience.map((internship, index) => {
        const transInternship = t.data.experience?.[index];
        if (!transInternship) return internship;

        return {
            ...internship,
            title: transInternship.title,
            place: transInternship.place, 
            description: transInternship.description,
            cases: internship.cases.map((c, cIdx) => {
                const transCase = transInternship.cases?.[cIdx];
                return {
                    ...c,
                    title: transCase?.title || c.title,
                    problem: transCase?.problem || c.problem,
                    intervention: transCase?.intervention || c.intervention,
                    result: transCase?.result || c.result
                };
            })
        };
    });
  };

  const translatedExperience = getExperience();

  return (
    <>
      <GlassCard id="experience" className="w-full">
        <div className="mb-10 sm:mb-16">
          <SectionTitle 
            icon={BriefcaseBusiness} 
            eyebrow={language === 'tr' ? 'Klinik Mühendislik' : 'Clinical Engineering'} 
            title={t.nav.experience} 
          />
          <p className="mt-6 max-w-6xl text-base sm:text-lg font-medium leading-relaxed text-slate-500">
            {t.data.experience[0].description}
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {translatedExperience.map((internship, idx) => (
            <div key={idx} className="relative">
              <div className="mb-10 sm:mb-14">
                <div className="flex flex-col gap-4">
                   <h3 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tighter">
                     {internship.title}
                   </h3>
                   <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-[16px] bg-sky-50 text-sky-600 ring-1 ring-sky-100 shadow-sm shadow-sky-50">
                         <Building2 size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-slate-500 tracking-tight uppercase">
                        {internship.place}
                      </p>
                   </div>
                </div>
                <div className="mt-8 sm:mt-10 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {internship.cases.map((c, cIdx) => (
                    <CaseCard key={cIdx} caseStudy={c} onClick={() => setActiveCase(c)} language={language} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <CaseModal caseStudy={activeCase} onClose={() => setActiveCase(null)} language={language} t={t} />
    </>
  );
});

export default Experience;
