import React, { useState } from "react";
import { GraduationCap, Building2, BadgeCheck, ChevronRight, Zap } from "lucide-react";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import { biomedicalCourses, electricalCourses } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { X } from "lucide-react";

function CourseCard({ course, language, t }) {
  return (
    <div
      key={course.title}
      className="group relative rounded-[32px] border border-slate-100 bg-white/50 p-8 transition-all hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:ring-2 hover:ring-sky-100"
    >
      <div className="flex justify-between items-start gap-6 mb-6">
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-lg bg-sky-50 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-sky-500 ring-1 ring-sky-100">
                {course.category}
            </span>
          </div>
          <h4 className="text-xl font-black text-slate-800 leading-tight group-hover:text-sky-600 transition-colors">
            {course.title}
          </h4>
        </div>
        <div className={`shrink-0 flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-black text-white shadow-lg ${
          course.grade === 'AA' ? 'bg-gradient-to-br from-emerald-500 to-emerald-400 shadow-emerald-100' :
          course.grade.startsWith('B') ? 'bg-gradient-to-br from-sky-500 to-blue-500 shadow-sky-100' :
          'bg-gradient-to-br from-slate-500 to-slate-400 shadow-slate-100'
        }`}>
          <span className="text-[10px] opacity-70 uppercase tracking-tighter mb-0.5">{t.common.grade}</span>
          <span className="text-2xl leading-none">{course.grade}</span>
        </div>
      </div>
      
      <p className="text-[13px] font-medium leading-relaxed text-slate-500 mb-8 border-slate-100 pl-4 border-l-2">
        {course.note}
      </p>
      
      <div className="flex items-center gap-5">
         <div className="relative h-2 flex-1 rounded-full bg-slate-50 overflow-hidden shadow-inner">
            <div 
              className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ${
                course.grade === 'AA' ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.4)]' :
                'bg-gradient-to-r from-sky-500 to-blue-500'
              }`}
              style={{ width: `${course.score}%` }}
            />
         </div>
         <span className="text-[11px] font-black text-slate-400 tabular-nums">{course.score}%</span>
      </div>
    </div>
  );
}

function TranscriptModal({ open, onClose, title, subtitle, courses, icon: Icon, themeColor = "sky", language, t }) {
  if (!open) return null;

  const highPerformance = courses.filter(c => c.grade === "AA");
  const technicalFoundation = courses.filter(c => c.grade !== "AA");

  const colorClasses = {
    sky: "text-sky-500 bg-sky-500",
    emerald: "text-emerald-500 bg-emerald-500",
    indigo: "text-indigo-500 bg-indigo-500"
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xl transition-all duration-500">
      <div className="relative h-full max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-[48px] border border-white/30 bg-white/90 shadow-[0_32px_128px_rgba(0,0,0,0.2)] backdrop-blur-3xl flex flex-col animate-slideUp">
        
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200/50 bg-white/80 p-10 backdrop-blur-md">
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-slate-800 text-white shadow-xl shadow-slate-200">
                <Icon size={32} />
            </div>
            <div>
              <p className={`text-[11px] font-black uppercase tracking-[0.4em] mb-1.5 ${colorClasses[themeColor].split(' ')[0]}`}>{subtitle}</p>
              <h3 className="text-4xl font-black text-slate-800 tracking-tighter">{title}</h3>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={onClose}
              className="group grid h-14 w-14 place-items-center rounded-2xl bg-slate-100 text-slate-500 transition-all hover:bg-slate-800 hover:text-white active:scale-90"
            >
              <X size={28} className="transition-transform group-hover:rotate-90" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-10 pb-20 pt-10 scrollbar-premium">
          <div className="grid gap-20">
            <section>
              <div className="sticky top-0 z-10 mb-10 flex items-center gap-4 bg-white/0 py-2">
                 <h4 className="rounded-2xl bg-slate-800 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-200 ring-4 ring-white">
                    {t.common.highPerf}
                 </h4>
                 <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {highPerformance.map(course => <CourseCard key={course.title} course={course} language={language} t={t} />)}
              </div>
            </section>

            <section>
              <div className="sticky top-0 z-10 mb-10 flex items-center gap-4 bg-white/0 py-2">
                 <h4 className="rounded-2xl bg-slate-500 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-100 ring-4 ring-white">
                    {t.common.foundation}
                 </h4>
                 <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {technicalFoundation.map(course => <CourseCard key={course.title} course={course} language={language} t={t} />)}
              </div>
            </section>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50/50 p-6 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                {title} • {t.common.verification}
            </p>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const [modalType, setModalType] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];
  const base = import.meta.env.BASE_URL;

  // Refactored education data
  const educationData = [
    {
      id: "biomedical",
      degree: t.education.biomedical,
      years: "2021 — 2025",
      gpa: "3.58 / 4.00",
      gpaLabel: language === 'tr' ? 'Final Not Ortalaması' : 'Final GPA',
      status: t.education.graduated,
      statusIcon: BadgeCheck,
      university: t.education.university,
      info: t.education.completed,
      transcriptUrl: `${base}transcripts/biomedical-transcript.pdf`,
      themeColor: "emerald",
      bgGradient: "from-white to-emerald-50/30",
      ringColor: "hover:ring-emerald-200",
      badgeBg: "bg-emerald-500",
      badgeShadow: "shadow-emerald-100",
      textAccent: "text-emerald-600",
      icon: Building2
    },
    {
      id: "electrical",
      degree: t.education.electrical,
      years: "2023 — 2026",
      gpa: "3.58 / 4.00",
      gpaLabel: language === 'tr' ? 'Güncel Not Ortalaması' : 'Current GPA',
      status: t.education.doubleMajor,
      statusIcon: Zap,
      university: t.education.university,
      info: t.education.doubleMajor,
      transcriptUrl: `${base}transcripts/electrical-electronics-transcript.pdf`,
      themeColor: "sky",
      bgGradient: "from-white to-sky-50/30",
      ringColor: "hover:ring-sky-200",
      badgeBg: "bg-sky-500",
      badgeShadow: "shadow-sky-100",
      textAccent: "text-sky-500",
      icon: Zap
    }
  ];

  const getCourses = (type) => {
    const original = type === 'biomedical' ? biomedicalCourses : electricalCourses;
    const translated = type === 'biomedical' ? t.data.biomedicalCourses : t.data.electricalCourses;
    
    return original.map((course, index) => ({
      ...course,
      title: translated[index].title,
      category: translated[index].category,
      note: translated[index].note
    }));
  };

  return (
    <>
      <GlassCard id="education" className="w-full">
        <SectionTitle icon={GraduationCap} eyebrow={t.education.title} title={t.nav.education} />
        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((item) => (
            <div key={item.id} className={`group relative overflow-hidden rounded-[32px] bg-gradient-to-br ${item.bgGradient} p-8 ring-1 ring-slate-100 transition-all hover:shadow-2xl ${item.ringColor}`}>
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${item.id === 'biomedical' ? 'bg-emerald-100/20' : 'bg-sky-100/20'} blur-3xl transition-all group-hover:opacity-40`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex flex-col gap-2">
                      <p className={`text-sm font-black ${item.textAccent}`}>{item.years}</p>
                      <div className={`inline-flex items-center gap-2 rounded-full ${item.badgeBg} px-4 py-1.5 text-[10px] font-black text-white shadow-lg ${item.badgeShadow} uppercase tracking-widest`}>
                         <item.statusIcon size={14} /> {item.status}
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.gpaLabel}</p>
                      <p className={`text-xl font-black ${item.textAccent}`}>{item.gpa}</p>
                   </div>
                </div>

                <h3 className="text-2xl font-black text-slate-800 mb-1">{item.degree} BSc</h3>
                <p className="text-sm font-bold text-slate-400 mb-8">{item.university} {item.id === 'biomedical' ? `• ${item.info}` : `(${item.info})`}</p>
                
                <div className="flex flex-col gap-3">
                    <a
                      href={item.transcriptUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-800 px-6 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] hover:bg-slate-900 active:scale-95 shadow-xl"
                    >
                      {t.education.viewTranscript} <ChevronRight size={18} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </>
  );
}
