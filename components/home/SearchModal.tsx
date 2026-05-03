"use client";
import React, { useState, useEffect } from "react";
import { Search, X, BookOpen, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAllSurahs } from "@/lib/api";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState("");
    const [allSurahs, setAllSurahs] = useState<any[]>([]);
    const [filteredSurahs, setFilteredSurahs] = useState<any[]>([]);
    const router = useRouter();

    // মাউন্ট হওয়ার সময় সব সূরার নাম লোড করে রাখা
    useEffect(() => {
        async function loadSurahs() {
            const data = await getAllSurahs();
            setAllSurahs(data);
        }
        loadSurahs();
    }, []);

    // সার্চ লজিক (Case Insensitive)
    useEffect(() => {
        if (query.trim() === "") {
            setFilteredSurahs([]);
            return;
        }

        const filtered = allSurahs.filter((surah: any) =>
            surah.englishName.toLowerCase().includes(query.toLowerCase()) ||
            surah.englishNameTranslation.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredSurahs(filtered.slice(0, 5)); // সর্বোচ্চ ৫টি রেজাল্ট দেখাবে
    }, [query, allSurahs]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[150]  flex items-start justify-center pt-24 px-4 bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-border animate-in fade-in zoom-in duration-200">

                {/* Input Area */}
                <div className="p-5 flex items-center gap-4 border-b border-border">
                    <BookOpen className="text-teal-600" size={24} />
                    <input
                        autoFocus
                        className="flex-1 bg-transparent outline-none text-lg text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                        placeholder="Find wisdom in the Quran"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="flex items-center gap-2">
                        <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-medium text-slate-500">Quran ⌄</div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                            <X size={20} className="text-slate-500" />
                        </button>
                    </div>
                </div>

                {/* Results / Suggestions */}
                <div className="p-6">
                    {query.length === 0 ? (
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Try to navigate</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Al-Fatiha", "Juz 30", "Surah Yasin", "Page 1"].map((tag) => (
                                        <button key={tag} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-teal-500 hover:text-white rounded-xl text-sm transition-colors">
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Suggestions</p>
                            {filteredSurahs.map((surah: any) => (
                                <button
                                    key={surah.number}
                                    onClick={() => {
                                        router.push(`/surah/${surah.number}`);
                                        onClose();
                                        setQuery("");
                                    }}
                                    className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-2xl group transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <ArrowRight size={18} className="text-slate-400 group-hover:text-teal-500" />
                                        <div className="text-left">
                                            <p className="font-bold text-slate-700 dark:text-slate-200">{surah.englishName}</p>
                                            <p className="text-xs text-slate-400">{surah.englishNameTranslation}</p>
                                        </div>
                                    </div>
                                    <span className="font-arabic text-xl text-teal-600/50">{surah.name}</span>
                                </button>
                            ))}

                            {/* Search in Translation Option */}
                            <button className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-2xl transition-all border-t border-dashed border-border mt-2">
                                <ArrowRight size={18} className="text-slate-400" />
                                <p className="text-sm">Search In Translation: <span className="font-bold text-teal-600">{query}</span></p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}