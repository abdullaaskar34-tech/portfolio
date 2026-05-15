import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Profile from "./components/sections/Profile";
import { TechnicalSkills, ProfessionalSkills, Languages } from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Leadership from "./components/sections/Leadership";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import LanguageSwitcher from "./components/common/LanguageSwitcher";
import CardNav from "./components/common/CardNav";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";
import "./styles.css";

export default function App() {
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    {
      label: language === 'tr' ? 'Profil' : 'Profile',
      bgColor: "#0f172a",
      textColor: "#fff",
      links: [
        { label: language === 'tr' ? 'Biyografi' : 'Biography', href: "#profile", ariaLabel: "Profile section" },
        { label: language === 'tr' ? 'Dil Yetkinlikleri' : 'Languages', href: "#skills", ariaLabel: "Skills section" }
      ]
    },
    {
      label: language === 'tr' ? 'Akademik' : 'Academic',
      bgColor: "#0ea5e9",
      textColor: "#fff",
      links: [
        { label: language === 'tr' ? 'Eğitim' : 'Education', href: "#education", ariaLabel: "Education section" },
        { label: language === 'tr' ? 'Sertifikalar' : 'Certifications', href: "#certificates", ariaLabel: "Certifications section" }
      ]
    },
    {
      label: language === 'tr' ? 'Kariyer' : 'Career',
      bgColor: "#10b981",
      textColor: "#fff",
      links: [
        { label: language === 'tr' ? 'Deneyim' : 'Experience', href: "#experience", ariaLabel: "Experience section" },
        { label: language === 'tr' ? 'Projeler' : 'Projects', href: "#projects", ariaLabel: "Projects section" }
      ]
    }
  ];

  return (
    <main className={`min-h-screen overflow-x-hidden bg-[#f8fbff] text-slate-700 selection:bg-sky-500/20`}>
      {/* Premium Background Effects */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-sky-200/20 blur-[120px] animate-pulse" />
        <div className="absolute right-[-5%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] rounded-full bg-indigo-50/40 blur-[140px]" />
      </div>

      <CardNav 
        items={navItems}
        baseColor="rgba(255, 255, 255, 0.8)"
        buttonBgColor="#0f172a"
        className="backdrop-blur-md"
      />
      <LanguageSwitcher />
      <Sidebar />

      <div className="relative z-10 mx-auto max-w-[1480px] w-[94vw] px-6 py-12 lg:px-12 lg:py-20">
        <div className="grid gap-20">
          
          {/* Hero Row */}
          <div id="profile" className="grid grid-cols-1">
             <Profile />
          </div>

          {/* Skill Identity Matrix */}
          <section id="skills" className="grid grid-cols-1 gap-12 py-10">
            <div className="w-full">
               <div className={`flex items-center gap-4 mb-6`}>
                  <span className="h-px w-12 bg-sky-500" />
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-sky-600">{t.skills.eyebrow}</p>
               </div>
               <h2 className={`text-5xl md:text-6xl font-black tracking-tight text-slate-800 mb-8 leading-[1.1]`}>{t.skills.title}</h2>
               <p className={`text-xl md:text-2xl font-medium text-slate-500 leading-relaxed w-full`}>
                  {t.skills.description}
               </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              <TechnicalSkills />
              <ProfessionalSkills />
              <Languages />
            </div>
          </section>

          {/* Scholastic & Work Row - Stacked Vertically */}
          <div className="grid grid-cols-1 gap-16">
            <Education />
            <Experience />
            <Leadership />
          </div>

          {/* Innovation Row */}
          <div id="projects" className="grid grid-cols-1">
            <Projects />
          </div>

          {/* Achievement Row */}
          <div id="certificates" className="grid grid-cols-1">
            <Certifications />
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-slate-200 py-16 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                &copy; 2026 {t.hero.name} {t.hero.surname}. {t.common.rights}
            </p>
            <p className="mt-6 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                {t.common.precision}
            </p>
        </footer>
      </div>
    </main>
  );
}
