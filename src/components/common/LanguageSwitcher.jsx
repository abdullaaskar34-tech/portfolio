import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English', flag: 'EN' },
  { code: 'tr', name: 'Türkçe', flag: 'TR' },
];

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="fixed top-6 right-6 z-[100] lg:right-10 lg:top-8" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/40 p-2 pr-4 shadow-xl backdrop-blur-2xl transition-all hover:bg-white/60 hover:shadow-sky-200/50 active:scale-95 group"
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500 text-white shadow-lg shadow-sky-200 transition-transform group-hover:rotate-12">
          <Globe size={20} />
        </div>
        <span className="text-xs font-black uppercase tracking-widest text-slate-800">
          {currentLang?.flag}
        </span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-4 w-48 overflow-hidden rounded-[24px] border border-white/50 bg-white/80 p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in duration-200 origin-top-right">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                toggleLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                language === lang.code
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-100'
                  : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'
              }`}
            >
              <span className="text-sm font-bold">
                {lang.name}
              </span>
              {language === lang.code && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
