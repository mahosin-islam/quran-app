"use client";
import React, { useState } from "react";
import { Menu, X, BookOpen, Search } from "lucide-react";
import SurahSidebar from "./SurahSidebar";
import Link from "next/link";

export default function MobileSurahDrawer({ surahs }: { surahs: any[] }) {
    const [isOpen, setIsOpen] = useState(false);

    // সূরা সিলেক্ট করলে ড্রয়ার বন্ধ হবে
    const handleSelection = () => setIsOpen(false);

    return (
        <div className="md:hidden flex items-center">
            {/* ১. নেভবার আইকন - যা মোবাইলে সবসময় থাকবে */}
            <button 
                onClick={() => setIsOpen(true)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors focus:outline-none"
                aria-label="Open Sidebar"
            >
                <Menu className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            </button>

            {/* ২. ব্যাকড্রপ Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* ৩. স্লাইড-আউট ড্রয়ার (ইমেজ ১ac৩৩৫.png স্টাইল) */}
            <div className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white dark:bg-slate-950 z-[110] shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col h-full">
                    {/* ড্রয়ার হেডার */}
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-teal-600 p-1.5 rounded-lg shadow-sm">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            
                            <Link href="/">
                            
                            <div>
                                <h2 className="font-bold text-slate-800 dark:text-white leading-tight">Quran Mazid</h2>
                                <p className="text-[10px] text-teal-600 font-medium uppercase tracking-wider">Navigation</p>
                            </div>
                            </Link>
                             
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-1.5  rounded-full">
                            <X className="w-5 h-5 text-slate-400" />
                        </button>
                      
                    </div>

                    {/* ৪. ড্রয়ারের ভেতর সার্চ এবং সূরা লিস্ট */}
                    <div className="flex-1 overflow-hidden">
                        <SurahSidebar surahs={surahs} onSurahSelect={handleSelection} isMobile={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}