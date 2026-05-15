import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Profile from "./components/sections/Profile";
import { TechnicalSkills, SoftSkills } from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import GradualBlur from "./components/common/GradualBlur";
import "./styles.css";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fbff] text-slate-700 selection:bg-sky-500/20">
      <GradualBlur preset="page-header" />
      <GradualBlur preset="page-footer" />
      {/* Premium Background Effects */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-sky-200/20 blur-[120px] animate-pulse" />
        <div className="absolute right-[-5%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] rounded-full bg-indigo-50/40 blur-[140px]" />
      </div>

      <Sidebar />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-8 lg:pl-32 lg:pr-10">
        {/* Header Dashboard Title */}
        <header className="mb-12 flex flex-col justify-between gap-6 rounded-[40px] border border-white/60 bg-white/40 p-8 shadow-glass backdrop-blur-3xl md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
                <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-600">
                    Engineering Portfolio
                </p>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-midnight">
              Abdulla ASKAR <span className="text-slate-300 font-light">/ Dashboard</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {["Karabuk", "AI Health Tech", "Embedded Systems"].map((tag) => (
              <span key={tag} className="rounded-2xl bg-white px-5 py-2.5 text-[11px] font-bold text-slate-500 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md hover:ring-sky-100">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="grid gap-8">
          {/* Profile & Skills Row */}
          <div className="grid gap-8 xl:grid-cols-[1.1fr_1fr]">
            <Profile />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <TechnicalSkills />
              <SoftSkills />
            </div>
          </div>

          {/* Education & Experience Row */}
          <div className="grid gap-8 lg:grid-cols-2">
            <Education />
            <Experience />
          </div>

          {/* Projects Row */}
          <div className="w-full">
            <Projects />
          </div>

          {/* Certifications Row */}
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
                <Certifications />
            </div>
            {/* You could add a 'Contact' or 'Quick Stats' card here in the remaining 4 columns if needed */}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-200 py-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                &copy; 2026 Abdulla Askar. All Rights Reserved.
            </p>
            <p className="mt-4 text-[10px] font-medium text-slate-300">
                Built with React, Tailwind CSS & Precision.
            </p>
        </footer>
      </div>
    </main>
  );
}
