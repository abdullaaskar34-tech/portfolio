import React, { useState, useRef, memo } from "react";
import { CircuitBoard, ExternalLink, X, ChevronRight, Play, FileText, UserRound, Code2, Rocket, Layout, Database, Image as ImageIcon } from "lucide-react";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import GlareHover from "../common/GlareHover";

const ProjectModal = memo(({ project, onClose, language, t }) => {
  if (!project) return null;
  
  const leftMedia = [
        ...(project.document ? [{ 
            type: 'document', 
            src: project.document, 
            label: project.documentLabel || (language === 'tr' ? 'Teknik Dokümantasyon' : 'Technical Documentation'),
            description: project.documentDescription
        }] : []),
        ...(project.media || [])
      ];
  
  const [activeMedia, setActiveMedia] = useState(leftMedia[0]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-0 sm:p-4 backdrop-blur-xl transition-all duration-500">
      <div className="relative h-full sm:h-auto sm:max-h-[95vh] w-full max-w-7xl overflow-hidden sm:rounded-[48px] border border-white/20 bg-white/95 shadow-[0_32px_128px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row animate-slideUp">
        
        <button
          onClick={onClose}
          className="absolute z-[70] grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-white/90 text-slate-500 shadow-xl hover:bg-slate-800 hover:text-white transition-all active:scale-90 right-4 top-4 sm:right-8 sm:top-8"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="lg:w-[60%] h-[350px] sm:h-[500px] lg:h-auto bg-slate-900 relative overflow-hidden flex flex-col">
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                {activeMedia?.type === 'document' ? (
                    <div className="w-full h-full bg-white flex flex-col">
                        <div className="flex items-center justify-between px-6 py-3 sm:px-8 sm:py-4 bg-slate-50 border-b border-slate-200">
                            <div className="flex items-center gap-3">
                                <FileText size={16} className="text-sky-500 sm:w-[18px] sm:h-[18px]" />
                                <div className="max-w-[150px] sm:max-w-none">
                                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-600 block leading-none mb-1">{language === 'tr' ? 'Teknik Rapor' : 'Technical Report'}</span>
                                    {activeMedia.description && (
                                        <span className="text-[7px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-widest truncate block leading-none">
                                            {activeMedia.description}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <a 
                                href={activeMedia.src} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-600 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                            >
                                <ExternalLink size={10} className="sm:w-3 sm:h-3" /> {language === 'tr' ? 'Aç' : 'Open'}
                            </a>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            {activeMedia.src.toLowerCase().endsWith('.pdf') ? (
                                <iframe
                                    src={`${activeMedia.src}#toolbar=0&navpanes=0&scrollbar=1`}
                                    className="w-full h-full border-none"
                                    title="Technical Documentation"
                                />
                            ) : (
                                <div className="h-full overflow-y-auto p-8 sm:p-12 bg-slate-50 flex flex-col items-center justify-center text-center">
                                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-3xl bg-white shadow-xl shadow-slate-200 grid place-items-center mb-6 ring-1 ring-slate-100">
                                        <FileText size={40} className="text-sky-500 sm:w-12 sm:h-12" />
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-black text-slate-800 mb-2">{language === 'tr' ? 'Doküman Görüntüleme' : 'Document Preview'}</h4>
                                    <p className="text-sm sm:text-base font-medium text-slate-500 mb-8 max-w-md">
                                        {language === 'tr' 
                                            ? 'Bu dosya türü doğrudan önizleme için desteklenmiyor. Lütfen dosyayı açmak veya indirmek için aşağıdaki butonu kullanın.' 
                                            : 'This file type is not supported for direct preview. Please use the button below to open or download the file.'}
                                    </p>
                                    <a 
                                        href={activeMedia.src} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 rounded-2xl bg-slate-800 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-[1.02] hover:bg-slate-900 active:scale-95 shadow-xl shadow-slate-200"
                                    >
                                        <ExternalLink size={18} /> {language === 'tr' ? 'Dosyayı Aç' : 'Open File'}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ) : activeMedia?.type === 'video' ? (
                    <div className="w-full h-full flex flex-col p-4 sm:p-8">
                        <div className="project-video-wrapper flex-1" onClick={(e) => e.stopPropagation()}>
                            <video
                                controls
                                playsInline
                                preload="metadata"
                                poster={project.preview}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "block",
                                    objectFit: "contain",
                                    borderRadius: "16px sm:24px",
                                    backgroundColor: "#000",
                                    pointerEvents: "auto"
                                }}
                            >
                                <source src={activeMedia.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full p-6 sm:p-8 flex items-center justify-center">
                        <img 
                            src={activeMedia?.src || project.preview} 
                            alt="Project media" 
                            className="max-w-full max-h-full object-contain rounded-2xl sm:rounded-[32px] shadow-2xl" 
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                )}
            </div>
            
            {leftMedia.length > 1 && (
                <div className="p-4 sm:p-6 bg-slate-950/20 backdrop-blur-xl border-t border-white/5">
                    <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2">
                        {leftMedia.map((m, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveMedia(m)}
                                className={`shrink-0 flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl border-2 transition-all ${
                                    activeMedia?.src === m.src ? "border-sky-500 bg-sky-500/10 text-white shadow-[0_0_20px_rgba(14,165,233,0.2)]" : "border-white/10 text-white/40 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                <div className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                                    {m.type === 'video' ? <Play size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor" /> : m.type === 'document' ? <FileText size={12} className="sm:w-3.5 sm:h-3.5" /> : <ImageIcon size={12} className="sm:w-3.5 sm:h-3.5" />}
                                </div>
                                <div className="text-left">
                                    <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest opacity-60">
                                        {m.type === 'video' ? 'Video' : m.type === 'document' ? (language === 'tr' ? 'Belge' : 'Doc') : (language === 'tr' ? 'Görsel' : 'Image')}
                                    </p>
                                    <p className="text-[9px] sm:text-[10px] font-bold truncate max-w-[100px]">{m.label || `Media ${idx + 1}`}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>

        <div className="flex-1 overflow-y-auto p-8 sm:p-10 lg:p-16 bg-white scrollbar-premium">
            <div className="mb-10 sm:mb-12">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                    <span className="rounded-full bg-sky-50 px-4 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-sky-600 ring-1 ring-sky-100 shadow-sm">
                        {project.category}
                    </span>
                    <span className="rounded-full bg-slate-900 px-4 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                        {project.year}
                    </span>
                    {project.status && (
                        <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-600 ring-1 ring-emerald-100">
                           {project.status}
                        </span>
                    )}
                </div>
                
                <h3 className="text-3xl sm:text-5xl font-black text-slate-800 leading-[1.1] tracking-tighter mb-6 sm:mb-8">
                    {project.title}
                </h3>
            </div>

            <div className="mb-10 sm:mb-12">
                <p className="text-lg sm:text-xl leading-relaxed text-slate-600 font-medium border-sky-100 border-l-4 pl-5 sm:pl-6">
                    {project.description}
                </p>
            </div>

            <div className="mb-10 sm:mb-12">
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 sm:mb-6 flex items-center gap-3">
                    <Code2 size={14} className="text-sky-500 sm:w-4 sm:h-4" /> {t.common.tech}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech?.map((techItem) => (
                        <span key={techItem} className="rounded-xl bg-slate-50 px-3 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-[11px] font-bold text-slate-700 ring-1 ring-slate-200/60 shadow-sm transition-all hover:bg-white hover:ring-sky-200">
                            {techItem}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-4 mb-10 sm:mb-12">
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 sm:mb-6 flex items-center gap-3">
                    <Rocket size={14} className="text-sky-500 sm:w-4 sm:h-4" /> {t.common.details}
                </p>
                <div className="grid gap-3 sm:gap-4">
                    {project.details.map((point) => (
                        <div key={point} className="flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl sm:rounded-[24px] bg-slate-50/50 ring-1 ring-slate-100/50 hover:bg-white hover:shadow-xl hover:ring-sky-50 transition-all group/point">
                            <div className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 grid place-items-center rounded-lg bg-sky-500 text-white shadow-lg shadow-sky-100 group-hover/point:scale-110 transition-transform">
                                <ChevronRight size={12} className="sm:w-3.5 sm:h-3.5" />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
});

const ProjectCard = memo(({ project, onClick, language, t }) => {
    return (
        <GlareHover 
            width="100%"
            height="100%"
            borderRadius="32px sm:48px" 
            borderColor="rgba(120, 150, 180, 0.45)"
            background="rgba(255, 255, 255, 0.75)"
            glareOpacity={0.3} 
            glareSize={300}
            className="h-full"
        >
            <article
                onClick={onClick}
                className="group cursor-pointer flex flex-col h-full w-full overflow-hidden transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
            >
                <div className="relative h-64 sm:h-72 overflow-hidden p-3 sm:p-4">
                    <div className="h-full w-full rounded-2xl sm:rounded-[36px] overflow-hidden bg-slate-900 shadow-inner relative">
                        <img
                            src={project.preview}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                        />
                        {project.media && project.media[0]?.type === 'video' && (
                            <div className="absolute bottom-4 sm:bottom-6 h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-500 right-4 sm:right-6">
                                <Play size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
                            </div>
                        )}
                    </div>
                    <div className="absolute top-6 flex gap-2 left-6 sm:top-8 sm:left-8">
                        <span className="rounded-lg sm:rounded-xl bg-slate-900/90 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                            {project.year}
                        </span>
                    </div>
                </div>
                
                <div className="flex flex-1 flex-col p-6 sm:p-10 pt-2 sm:pt-4">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">
                            {project.category}
                        </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-4 sm:mb-6 leading-tight group-hover:text-sky-600 transition-colors line-clamp-1">
                        {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-6 sm:mb-8">
                        {project.tech?.slice(0, 3).map((techItem) => (
                            <span key={techItem} className="rounded-lg bg-slate-50 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold text-slate-500 ring-1 ring-slate-100">
                                {techItem}
                            </span>
                        ))}
                        {project.tech?.length > 3 && (
                            <span className="rounded-lg bg-sky-50 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold text-sky-600 ring-1 ring-sky-100">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-50 flex items-center justify-between">
                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-800 flex items-center gap-2 group-hover:gap-4 transition-all">
                            {language === 'tr' ? 'Detayları Gör' : 'View Details'} <ChevronRight size={14} className="text-sky-500 sm:w-4 sm:h-4" />
                        </p>
                        <div className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-xl bg-slate-50 text-slate-300 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-sm">
                            <Layout size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </div>
                    </div>
                </div>
            </article>
        </GlareHover>
    );
});

const Projects = memo(() => {
  const [activeProject, setActiveProject] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const translatedProjects = projects.map((project, index) => {
    const transProject = t.data.projects?.[index];
    if (!transProject) return project;

    return {
        ...project,
        title: transProject.title,
        description: transProject.description,
        details: transProject.details
    };
  });

  return (
    <>
      <GlassCard id="projects" className="w-full">
        <div className="mb-16">
            <SectionTitle icon={CircuitBoard} eyebrow={t.projects.eyebrow} title={t.projects.title} />
            <p className="mt-6 max-w-6xl text-lg font-medium text-slate-500 leading-relaxed">
                {t.projects.description}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {translatedProjects.map((project) => (
            <ProjectCard 
                key={project.title} 
                project={project} 
                onClick={() => setActiveProject(project)}
                language={language}
                t={t}
            />
          ))}
        </div>
      </GlassCard>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        language={language}
        t={t}
      />
    </>
  );
});

export default Projects;
