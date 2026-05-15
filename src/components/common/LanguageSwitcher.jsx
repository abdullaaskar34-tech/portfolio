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
    <div 
      className="fixed z-[1200]" 
      style={{ 
        top: '18px', 
        right: '18px', 
        transform: 'scale(0.85)', 
        transformOrigin: 'top right' 
      }} 
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-[14px] border border-white/50 bg-white/40 p-1.5 pr-3 shadow-xl backdrop-blur-2xl transition-all hover:bg-white/60 hover:shadow-sky-200/50 active:scale-95 group"
        style={{ minWidth: '54px', height: '36px' }}
      >
        <div className="grid h-7 w-7 place-items-center rounded-lg bg-sky-500 text-white shadow-lg shadow-sky-200 transition-transform group-hover:rotate-12">
          <Globe size={16} />
        </div>
        <span className="text-[12px] font-black uppercase tracking-widest text-slate-800">
          {currentLang?.flag}
        </span>
        <ChevronDown size={12} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-40 overflow-hidden rounded-[20px] border border-white/50 bg-white/80 p-1.5 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in duration-200 origin-top-right">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                toggleLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-all ${
                language === lang.code
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-100'
                  : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'
              }`}
            >
              <span className="text-sm font-bold">
                {lang.name}
              </span>
              {language === lang.code && <Check size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
