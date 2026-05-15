import React, { useState, useEffect } from "react";
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

export default function Sidebar() {
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
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      
      let closestSection = "";
      let minDistance = Infinity;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = item.id;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [language]); // Re-run if language changes because labels change

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for any fixed headers if present
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

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/20 bg-white/60 px-6 backdrop-blur-xl lg:hidden">
        <span className="text-sm font-black uppercase tracking-widest text-slate-800">{t.hero.name} {t.hero.surname}</span>
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800 text-white"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 rounded-full border border-white/50 bg-white/40 p-4 shadow-2xl backdrop-blur-2xl lg:flex left-8">
        {navItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`group relative grid h-12 w-12 place-items-center rounded-full transition-all duration-300 ${
              activeSection === id
                ? "bg-sky-500 text-white shadow-lg shadow-sky-200 scale-110"
                : "text-slate-400 hover:bg-white hover:text-sky-500"
            }`}
            aria-label={label}
          >
            <Icon size={20} />
            <span className="pointer-events-none absolute scale-95 rounded-xl bg-slate-800 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white opacity-0 shadow-2xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 left-16">
              {label}
            </span>
          </button>
        ))}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation Drawer */}
      <nav className={`fixed inset-y-0 z-50 w-64 transform border-white/20 bg-white/95 p-8 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? "translate-x-0 left-0 border-r" : "-translate-x-full left-0"
      }`}>
        <div className="flex flex-col gap-8 h-full">
            <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">{t.common.navigation}</p>
                <h2 className="text-xl font-black text-slate-800">{t.common.menu}</h2>
            </div>
            <div className="flex flex-col gap-4">
                {navItems.map(({ icon: Icon, label, id }) => (
                    <button
                        key={id}
                        onClick={() => handleNavClick(id)}
                        className={`flex items-center gap-4 rounded-2xl p-4 text-sm font-black transition-all ${
                            activeSection === id ? "bg-sky-50 text-sky-600 ring-1 ring-sky-100" : "text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                        <Icon size={20} /> {label}
                    </button>
                ))}
            </div>
            <div className="mt-auto border-t border-slate-100 pt-8 flex gap-4 justify-center">
                 <a href="https://www.linkedin.com/in/abdulla-askar-424881274" target="_blank" className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all">
                    <Linkedin size={20} />
                 </a>
                 <a href="mailto:abdullaaskar34@gmail.com" className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all">
                    <Mail size={20} />
                 </a>
            </div>
        </div>
      </nav>
    </>
  );
}
