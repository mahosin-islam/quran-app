"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SurahSidebar({ surahs, onSurahSelect, isMobile = false }: { surahs: any[], onSurahSelect?: () => void, isMobile?: boolean }) {
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();

    const filteredSurahs = surahs.filter((s) =>
        s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.number.toString().includes(searchQuery)
    );

    return (
        <div className="flex flex-col h-full ">
            {/* সার্চ ইনপুট */}
            <div className="p-4  dark:bg-slate-950 sticky top-0 z-20">
                <div className="relative flex items-center  dark:bg-slate-900 border border-transparent bg-gray-100/50 focus-within:border-teal-500/50 rounded-xl transition-all shadow-inner">
                    <Search className="absolute left-3 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Quick Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent py-2.5 pl-10 pr-4 text-sm outline-none text-slate-700 dark:text-slate-200"
                    />
                </div>
            </div>

            {/* সূরা লিস্ট */}
            <div className="flex-1 overflow-y-auto px-2 space-y-1 custom-scrollbar pb-10">
                {filteredSurahs.length > 0 ? (
                    filteredSurahs.map((s) => {
                        const isActive = pathname === `/surah/${s.number}`;
                        return (
                            <Link
                                key={s.number}
                                href={`/surah/${s.number}`}
                                onClick={() => {
                                    if (onSurahSelect) onSurahSelect(); // মোবাইলে ড্রয়ার বন্ধ করবে
                                }}
                                className={`flex items-center justify-between p-3 rounded-xl transition-all group ${
                                    isActive ? "bg-teal-500/10 border-teal-500/20 shadow-sm" : "hover:bg-slate-50 dark:hover:bg-slate-900"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`w-8 h-8 flex items-center justify-center rounded-lg text-[10px] font-bold ${
                                        isActive ? "bg-teal-500 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500 group-hover:bg-teal-500 group-hover:text-white"
                                    }`}>
                                        {s.number}
                                    </span>
                                    <div>
                                        <p className={`text-sm font-bold leading-tight ${isActive ? "text-teal-600" : "text-slate-700 dark:text-slate-200"}`}>
                                            {s.englishName}
                                        </p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                                            {s.numberOfAyahs} Ayahs
                                        </p>
                                    </div>
                                </div>
                                <p className="font-arabic text-xl text-teal-600/80">{s.name}</p>
                            </Link>
                        );
                    })
                ) : (
                    <p className="text-center text-xs text-slate-400 py-10">No surah matches your search</p>
                )}
            </div>
        </div>
    );
}