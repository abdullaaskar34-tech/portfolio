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
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xl transition-all duration-500">
      <div className="relative h-full max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-[48px] border border-white/20 bg-white/95 shadow-[0_32px_128px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row animate-slideUp">
        
        <button
          onClick={onClose}
          className="absolute z-[70] grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-slate-500 shadow-xl hover:bg-slate-800 hover:text-white transition-all active:scale-90 right-8 top-8"
        >
          <X size={24} />
        </button>

        <div className="lg:w-[60%] h-[500px] lg:h-auto bg-slate-900 relative overflow-hidden flex flex-col">
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                {activeMedia?.type === 'document' ? (
                    <div className="w-full h-full bg-white flex flex-col">
                        <div className="flex items-center justify-between px-8 py-4 bg-slate-50 border-b border-slate-200">
                            <div className="flex items-center gap-3">
                                <FileText size={18} className="text-sky-500" />
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 block leading-none mb-1">{language === 'tr' ? 'Teknik Rapor Önizleme' : 'Technical Report Preview'}</span>
                                    {activeMedia.description && (
                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest truncate max-w-[300px] block leading-none">
                                            {activeMedia.description}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <a 
                                href={activeMedia.src} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-slate-600 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                            >
                                <ExternalLink size={12} /> {language === 'tr' ? 'Tam Ekran' : 'Full Screen'}
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
                                <div className="h-full overflow-y-auto p-8 bg-slate-100 flex justify-center">
                                    <img 
                                        src={activeMedia.src} 
                                        alt="Document Preview" 
                                        className="max-w-full h-auto shadow-2xl rounded-sm"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ) : activeMedia?.type === 'video' ? (
                    <div className="w-full h-full flex flex-col p-8">
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
                                    borderRadius: "24px",
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
                    <div className="w-full h-full p-8 flex items-center justify-center">
                        <img 
                            src={activeMedia?.src || project.preview} 
                            alt="Project media" 
                            className="max-w-full max-h-full object-contain rounded-[32px] shadow-2xl" 
                        />
                    </div>
                )}
            </div>
            
            {leftMedia.length > 1 && (
                <div className="p-6 bg-slate-950/20 backdrop-blur-xl border-t border-white/5">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                        {leftMedia.map((m, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveMedia(m)}
                                className={`shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-2xl border-2 transition-all ${
                                    activeMedia?.src === m.src ? "border-sky-500 bg-sky-500/10 text-white shadow-[0_0_20px_rgba(14,165,233,0.2)]" : "border-white/10 text-white/40 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                <div className="h-8 w-8 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                                    {m.type === 'video' ? <Play size={14} fill="currentColor" /> : m.type === 'document' ? <FileText size={14} /> : <ImageIcon size={14} />}
                                </div>
                                <div className="text-left">
                                    <p className="text-[8px] font-black uppercase tracking-widest opacity-60">
                                        {m.type === 'video' ? (language === 'tr' ? 'Video Demo' : 'Video Demo') : m.type === 'document' ? (language === 'tr' ? 'Teknik Belge' : 'Technical Doc') : (language === 'tr' ? 'Sistem Görseli' : 'System Image')}
                                    </p>
                                    <p className="text-[10px] font-bold truncate max-w-[120px]">{m.label || `Media ${idx + 1}`}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>

        <div className="flex-1 overflow-y-auto p-10 lg:p-16 bg-white scrollbar-premium">
            <div className="mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="rounded-full bg-sky-50 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-sky-600 ring-1 ring-sky-100 shadow-sm">
                        {project.category}
                    </span>
                    <span className="rounded-full bg-slate-900 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                        {project.year}
                    </span>
                    {project.status && (
                        <span className="rounded-full bg-emerald-50 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 ring-1 ring-emerald-100">
                           {project.status}
                        </span>
                    )}
                </div>
                
                <h3 className="text-5xl font-black text-slate-800 leading-[1.1] tracking-tighter mb-8">
                    {project.title}
                </h3>

                <div className="flex items-center gap-4 text-sm font-bold text-slate-500 bg-slate-50 p-5 rounded-[24px] ring-1 ring-slate-100">
                    <div className="h-10 w-10 shrink-0 grid place-items-center rounded-xl bg-white shadow-sm text-sky-500">
                        <UserRound size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.common.role}</p>
                        <p className="text-slate-800 uppercase tracking-tighter">{project.role}</p>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <p className="text-xl leading-relaxed text-slate-600 font-medium border-sky-100 border-l-4 pl-6">
                    {project.description}
                </p>
            </div>

            <div className="mb-12">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-3">
                    <Code2 size={16} className="text-sky-500" /> {t.common.tech}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech?.map((techItem) => (
                        <span key={techItem} className="rounded-xl bg-slate-50 px-4 py-2.5 text-[11px] font-bold text-slate-700 ring-1 ring-slate-200/60 shadow-sm transition-all hover:bg-white hover:ring-sky-200">
                            {techItem}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-4 mb-12">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-3">
                    <Rocket size={16} className="text-sky-500" /> {t.common.details}
                </p>
                <div className="grid gap-4">
                    {project.details.map((point) => (
                        <div key={point} className="flex gap-5 p-5 rounded-[24px] bg-slate-50/50 ring-1 ring-slate-100/50 hover:bg-white hover:shadow-xl hover:ring-sky-50 transition-all group/point">
                            <div className="h-6 w-6 shrink-0 grid place-items-center rounded-lg bg-sky-500 text-white shadow-lg shadow-sky-100 group-hover/point:scale-110 transition-transform">
                                <ChevronRight size={14} />
                            </div>
                            <span className="text-sm font-bold text-slate-700 leading-relaxed">{point}</span>
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
            borderRadius="48px" 
            borderColor="rgba(120, 150, 180, 0.45)"
            background="rgba(255, 255, 255, 0.75)"
            glareOpacity={0.3} 
            glareSize={300}
            className="h-full"
        >
            <article
                onClick={onClick}
                className="group cursor-pointer flex flex-col h-full w-full overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
            >
                <div className="relative h-72 overflow-hidden p-4">
                    <div className="h-full w-full rounded-[36px] overflow-hidden bg-slate-900 shadow-inner relative">
                        <img
                            src={project.preview}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {project.media && project.media[0]?.type === 'video' && (
                            <div className="absolute bottom-6 h-10 w-10 grid place-items-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-500 right-6">
                                <Play size={18} fill="currentColor" />
                            </div>
                        )}
                    </div>
                    <div className="absolute top-8 flex gap-2 left-8">
                        <span className="rounded-xl bg-slate-900/90 backdrop-blur-md px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                            {project.year}
                        </span>
                        {project.status === "Production Ready" && (
                            <span className="rounded-xl bg-emerald-500/90 backdrop-blur-md px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                            Live
                            </span>
                        )}
                    </div>
                </div>
                
                <div className="flex flex-1 flex-col p-10 pt-4">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">
                            {project.category}
                        </span>
                        <div className="h-1 w-1 rounded-full bg-slate-200" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                            {project.role.split(' & ')[0]}
                        </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-800 mb-6 leading-tight group-hover:text-sky-600 transition-colors">
                        {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech?.slice(0, 3).map((techItem) => (
                            <span key={techItem} className="rounded-lg bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-500 ring-1 ring-slate-100">
                                {techItem}
                            </span>
                        ))}
                        {project.tech?.length > 3 && (
                            <span className="rounded-lg bg-sky-50 px-3 py-1.5 text-[10px] font-bold text-sky-600 ring-1 ring-sky-100">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-800 flex items-center gap-2 group-hover:gap-4 transition-all">
                            {language === 'tr' ? 'Proje Detaylarını Gör' : 'View Project Details'} <ChevronRight size={16} className="text-sky-500" />
                        </p>
                        <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-50 text-slate-300 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-sm">
                            <Layout size={18} />
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
    const transProject = t.data.projects[index];
    return {
        ...project,
        title: transProject.title,
        role: transProject.role,
        description: transProject.description,
        details: transProject.details
    };
  });

  return (
    <>
      <GlassCard id="projects" className="w-full">
        <div className="mb-16">
            <SectionTitle icon={CircuitBoard} eyebrow={language === 'tr' ? 'İnovasyon Laboratuvarı' : 'Innovation Lab'} title={language === 'tr' ? 'Öne Çıkan Mühendislik Projeleri' : 'Featured Engineering Projects'} />
            <p className="mt-6 max-w-6xl text-lg font-medium text-slate-500 leading-relaxed">
                {language === 'tr' ? 'Bilgisayarlı görü, gömülü mimari ve tıbbi YZ genelinde yüksek hassasiyetli sistemlerin geliştirilmesi. Ölçeklenebilir, gerçek dünya mühendislik çözümlerine odaklanılmıştır.' : 'Development of high-precision systems across computer vision, embedded architecture, and medical AI. Focused on scalable, real-world engineering solutions.'}
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
