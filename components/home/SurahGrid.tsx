"use client";
import { useState } from "react";
import Link from "next/link";
import { Surah } from "@/types";
import { ChevronDown } from "lucide-react"; // আইকনটি ইম্পোর্ট করুন

interface SurahGridProps {
  surahs: Surah[];
}

export default function SurahGrid({ surahs }: SurahGridProps) {
  // শুরুতে কয়টি সূরা দেখাবে (ধরি ১৫টি)
  const [visibleCount, setVisibleCount] = useState(15);

  const showMoreSurahs = () => {
    // প্রতি ক্লিকে আরও ১৫টি করে সূরা বাড়বে
    setVisibleCount((prev) => prev + 15);
  };

  // ১১৪টি সূরার মধ্যে শুধু নির্দিষ্ট সংখ্যক সূরা স্লাইস করে নেওয়া হচ্ছে
  const visibleSurahs = surahs.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleSurahs.map((surah) => (
          <Link 
            key={surah.number} 
            href={`/surah/${surah.number}`}
            className="group flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg text-sm font-bold group-hover:bg-teal-500 group-hover:text-white transition-colors">
                {surah.number}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{surah.englishName}</h3>
                <p className="text-xs text-gray-500">{surah.englishNameTranslation}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-arabic text-teal-600 dark:text-teal-400">{surah.name}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">{surah.numberOfAyahs} Ayahs</p>
            </div>
          </Link>
        ))}
      </div>

      {/* যদি আরও সূরা বাকি থাকে, তবেই বাটনটি দেখাবে */}
      {visibleCount < surahs.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={showMoreSurahs}
            className="flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-teal-500/20 active:scale-95"
          >
            Show More Surahs
            <ChevronDown size={20} />
          </button>
        </div>
      )}
    </div>
  );
}