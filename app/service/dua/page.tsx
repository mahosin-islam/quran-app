// app/service/dua/page.tsx
import { Heart } from "lucide-react";

const duas = [
  { title: "Morning Adhkar", arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ", count: "12 duas" },
  { title: "Evening Adhkar", arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ", count: "10 duas" },
  { title: "Before Sleep", arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", count: "8 duas" },
  { title: "Ruqyah", arabic: "بِسْمِ اللَّهِ أَرْقِيكَ", count: "6 duas" },
];

export default function DuaPage() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Heart className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold text-base-content">Dua & Ruqyah</h1>
        </div>
        <p className="text-base-content/60 mb-8">Authentic duas and ruqyah for every occasion.</p>
        <div className="grid gap-4">
          {duas.map(({ title, arabic, count }) => (
            <div key={title} className="p-5 rounded-xl bg-base-200 border border-base-300 hover:border-secondary/30 transition-all cursor-pointer flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base-content mb-1">{title}</h3>
                <p className="text-xs text-base-content/40">{count}</p>
              </div>
              <p className="font-amiri text-xl text-secondary text-right max-w-[200px]">{arabic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}