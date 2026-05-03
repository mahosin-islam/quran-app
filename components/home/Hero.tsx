"use client";
import React, { useState } from "react";
import { Search, Command } from "lucide-react";
import SearchModal from "./SearchModal";
import SurahSlider from "./SurahSlider";

const QUICK_SURAHS = [
  { name: "Al Mulk", id: 67 },
  { name: "Yasin", id: 36 },
  { name: "Al Kahf", id: 18 },
  { name: "Al Ikhlas", id: 112 },
  { name: "Ar-Rahman", id: 55 },
];

export default function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
<section
  className="relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center -mt-14 min-h-[600px] transition-all duration-500"
  style={{
    backgroundImage: "url('https://i.ibb.co.com/6cbGZqNK/Gemini-Generated-Image-bo6zu5bo6zu5bo6z.png')",
  }}
>
  {/* 🎨 Dark Mode Overlay - এটিই ইমেজকে ডার্ক মোডে অন্ধকার দেখাবে */}
  <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/80 transition-colors duration-500" />

  {/* Background Decor */}
  <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
    <div className="absolute top-0 left-10 w-24 h-40 border-l border-b rounded-bl-full border-teal-500/30" />
    <div className="absolute top-0 right-10 w-24 h-40 border-r border-b rounded-br-full border-teal-500/30" />
  </div>

  <div className="relative py-5 z-10 w-full max-w-4xl text-center px-6">
    {/* Title - Text color fixed for light/dark */}
    <h1 className="text-4xl md:text-6xl font-bold my-10 tracking-tight text-slate-900 dark:text-white transition-colors">
      QURAN MAZID
    </h1>

    {/* Search Bar Design */}
    <div 
      onClick={() => setIsSearchOpen(true)}
      className="group relative w-full max-w-2xl mx-auto mb-8 cursor-pointer transition-all duration-300 transform hover:scale-[1.01]"
    >
      <div className="absolute inset-0 bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-all" />
      <div className="relative flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-5 rounded-full shadow-lg group-hover:shadow-teal-500/10 transition-all">
        <Search className="text-slate-400 group-hover:text-teal-500 transition-colors" size={24} />
        <span className="flex-1 text-left text-slate-500 dark:text-slate-400 text-lg">What do you want to read?</span>
        <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          <Command size={12} /> K
        </div>
      </div>
    </div>

    {/* Quick Access Tags */}
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {QUICK_SURAHS.map((surah) => (
        <button
          key={surah.id}
          className="px-6 py-2.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-teal-500 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-sm"
        >
          {surah.name}
        </button>
      ))}
    </div>

    <SurahSlider />
  </div>

  {/* Decorative Mosque Silhouette at Bottom */}
  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent flex items-end justify-center pointer-events-none" />

  <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
</section>
  );
}