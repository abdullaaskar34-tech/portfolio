import React, { memo } from "react";
import { Linkedin, Globe, MapPin, Calendar, Send } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import ShinyText from "../common/ShinyText";

const Profile = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { label: t.hero.birthYear, value: "2001", icon: Calendar },
    { label: t.hero.location, value: t.hero.locationVal, icon: MapPin },
    { label: t.hero.nationality, value: t.hero.nationalityVal, icon: Globe },
  ];

  return (
    <section id="profile" className="lg:col-span-12">
      <div className="relative overflow-hidden rounded-[40px] border border-slate-200/50 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-3xl p-6 sm:p-8 md:p-12">
          {/* Animated background blobs */}
          <div className="absolute -right-20 -top-20 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-sky-200/40 blur-[80px] sm:blur-[100px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-blue-100/30 blur-[60px] sm:blur-[80px]" />

          <div className={`relative z-10 flex flex-col-reverse items-start justify-between gap-8 sm:gap-12 lg:flex-row`}>
            <div className="flex-1 w-full text-center lg:text-left">
              <div className={`mb-6 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-sky-600 ring-1 ring-sky-500/20 backdrop-blur-md`}>
                <span className="h-2 w-2 rounded-full bg-sky-500 animate-ping" />
                {t.common.available}
              </div>
              
              <h1 className={`text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-slate-800 flex flex-wrap justify-center lg:justify-start gap-x-3 sm:gap-x-4`}>
                <ShinyText text={t.hero.name} />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 uppercase">
                  <ShinyText text={t.hero.surname} className="!bg-clip-text" />
                </span>
              </h1>
              
              <p className={`mt-6 sm:mt-8 max-w-6xl text-lg sm:text-xl font-medium leading-relaxed text-slate-600 md:text-2xl`}>
                {t.hero.bio}
              </p>

              <div className={`mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4`}>
                <button
                  onClick={() => window.location.href = "mailto:abdullaaskar34@gmail.com"}
                  className={`flex items-center gap-3 rounded-2xl bg-slate-800 px-8 py-4 sm:px-10 sm:py-5 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-slate-200 transition-all hover:scale-105 hover:bg-slate-900 active:scale-95`}
                >
                  <Send size={18} /> {t.common.getInTouch}
                </button>

                <a
                  href="https://www.linkedin.com/in/abdulla-askar-424881274"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 transition-all hover:scale-105 hover:border-sky-500 hover:text-sky-500 hover:shadow-xl active:scale-95"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            <div className="relative shrink-0 w-full lg:w-auto flex justify-center">
              <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-sky-400/20 to-blue-500/20 blur-2xl animate-pulse" />
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-72 md:w-72 overflow-hidden rounded-[40px] sm:rounded-[44px] border-4 sm:border-8 border-white shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}media/profile/my_photo.jpeg`}
                  alt={`${t.hero.name} ${t.hero.surname}`}
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-110 grayscale-[20%] hover:grayscale-0"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6 border-t border-slate-100 pt-8 sm:pt-10 sm:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className={`group p-3 sm:p-4 rounded-3xl transition-all hover:bg-white/40`}>
                <div className={`flex items-center gap-2 sm:gap-3 mb-2`}>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-sky-50 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <Icon size={14} className="sm:w-4 sm:h-4" />
                  </div>
                  <p className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-slate-400">
                      {label}
                  </p>
                </div>
                <p className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">{value}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
});

export default Profile;
