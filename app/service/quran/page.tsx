// app/service/quran/page.tsx
import { BookOpen } from "lucide-react";

export default function QuranPage() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <BookOpen className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold text-base-content">Read Quran</h1>
        </div>
        <p className="text-base-content/60 mb-8">Read all 114 Surahs with translation and tafsir.</p>
        <div className="grid gap-3">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="p-4 rounded-xl bg-base-200 border border-base-300 flex items-center justify-between hover:border-secondary/30 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-medium text-base-content text-sm">Surah {["Al-Fatihah", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Maidah", "Al-Anam", "Al-Araf", "Al-Anfal", "At-Tawbah", "Yunus"][i]}</p>
                  <p className="text-xs text-base-content/40">7 Ayahs • Meccan</p>
                </div>
              </div>
              <span className="font-amiri text-xl text-secondary">
                {["الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}