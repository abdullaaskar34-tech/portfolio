import React, { useState, useEffect, memo } from "react";
import {
  UserRound,
  BrainCircuit,
  GraduationCap,
  CircuitBoard,
  Award,
  BriefcaseBusiness,
  Handshake,
  Mail,
  Linkedin,
  X,
  Menu
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import Dock from "../common/Dock";

const Sidebar = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: UserRound, label: t.nav.profile, id: "profile" },
    { icon: BrainCircuit, label: t.nav.skills, id: "skills" },
    { icon: GraduationCap, label: t.nav.education, id: "education" },
    { icon: BriefcaseBusiness, label: t.nav.experience, id: "experience" },
    { icon: Handshake, label: t.nav.leadership, id: "leadership" },
    { icon: CircuitBoard, label: t.nav.projects, id: "projects" },
    { icon: Award, label: t.nav.certificates, id: "certificates" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const sectionElements = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
    
    const handleIntersection = (entries) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    sectionElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [language]); 

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const dockItems = navItems.map(item => ({
    icon: <item.icon size={22} />,
    label: item.label,
    onClick: () => handleNavClick(item.id),
    className: activeSection === item.id ? "bg-sky-500 border-sky-400 shadow-lg shadow-sky-200/50" : ""
  }));

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/20 bg-white/60 px-5 backdrop-blur-xl lg:hidden">
        <span className="text-xs font-black uppercase tracking-widest text-slate-800">{t.hero.name} {t.hero.surname}</span>
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800 text-white shadow-lg active:scale-90 transition-transform"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Desktop Sidebar with Dock */}
      <div className="fixed left-8 top-0 bottom-0 z-40 hidden items-center lg:flex">
        <Dock 
          items={dockItems}
          panelWidth={60}
          baseItemSize={48}
          magnification={64}
          distance={150}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px] lg:hidden animate-in fade-in duration-300" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation Drawer */}
      <nav className={`fixed inset-y-0 z-50 w-72 transform bg-white/95 p-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        isMobileMenuOpen ? "translate-x-0 right-0 border-l border-white/20" : "translate-x-full right-0"
      }`}>
        <div className="flex flex-col gap-10 h-full">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 mb-1">{t.common.navigation}</p>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tighter">{t.common.menu}</h2>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="h-10 w-10 grid place-items-center rounded-xl bg-slate-50 text-slate-400">
                    <X size={20} />
                </button>
            </div>
            <div className="flex flex-col gap-3">
                {navItems.map(({ icon: Icon, label, id }) => (
                    <button
                        key={id}
                        onClick={() => handleNavClick(id)}
                        className={`flex items-center gap-4 rounded-2xl p-4 text-sm font-black transition-all active:scale-95 ${
                            activeSection === id ? "bg-sky-500 text-white shadow-xl shadow-sky-200 ring-1 ring-sky-400" : "text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                        <Icon size={20} className={activeSection === id ? "text-white" : "text-sky-500"} /> {label}
                    </button>
                ))}
            </div>
            <div className="mt-auto border-t border-slate-100 pt-8 flex flex-col gap-6">
                 <div className="flex gap-4 justify-center">
                    <a href="https://www.linkedin.com/in/abdulla-askar-424881274" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all active:scale-90">
                        <Linkedin size={22} />
                    </a>
                    <a href="mailto:abdullaaskar34@gmail.com" className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all active:scale-90">
                        <Mail size={22} />
                    </a>
                 </div>
                 <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-300">
                    {t.hero.name} {t.hero.surname}
                 </p>
            </div>
        </div>
      </nav>
    </>
  );
});

export default Sidebar;
