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
import Plasma from "./components/common/Plasma";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";
import "./styles.css";

export default function App() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className={`min-h-screen overflow-x-hidden text-slate-700 selection:bg-sky-500/20 bg-transparent`}>
      {/* Plasma Background Effect */}
      <Plasma 
        color="#0ea5e9"
        speed={0.4}
        scale={1.2}
        opacity={0.4}
        mouseInteractive={true}
      />

      <LanguageSwitcher />
      <Sidebar />

      <div className="relative z-10 mx-auto max-w-[1480px] w-full px-4 sm:px-6 py-12 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:gap-16 lg:gap-20">
          
          {/* Hero Row */}
          <div id="profile" className="grid grid-cols-1">
             <Profile />
          </div>

          {/* Skill Identity Matrix */}
          <section id="skills" className="grid grid-cols-1 gap-8 sm:gap-12 py-6 sm:py-10">
            <div className="w-full">
               <div className={`flex items-center gap-4 mb-4 sm:mb-6`}>
                  <span className="h-px w-8 sm:w-12 bg-sky-500" />
                  <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-sky-600">{t.skills.eyebrow}</p>
               </div>
               <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-800 mb-6 sm:mb-8 leading-[1.1]`}>{t.skills.title}</h2>
               <p className={`text-lg sm:text-xl md:text-2xl font-medium text-slate-500 leading-relaxed w-full`}>
                  {t.skills.description}
               </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:gap-12">
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
