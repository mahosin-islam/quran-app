// app/service/tafsir/page.tsx
import { BookMarked } from "lucide-react";

const tafsirs = [
  { name: "Ibn Kathir", lang: "English", desc: "Classical comprehensive tafsir" },
  { name: "Al-Jalalayn", lang: "English", desc: "Concise scholarly commentary" },
  { name: "Maariful Quran", lang: "Bengali", desc: "By Mufti Muhammad Shafi" },
  { name: "Fi Zilalil Quran", lang: "Bengali", desc: "By Sayyid Qutb" },
];

export default function TafsirPage() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <BookMarked className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold text-base-content">Tafsir</h1>
        </div>
        <p className="text-base-content/60 mb-8">In-depth scholarly explanations of the Quran.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {tafsirs.map(({ name, lang, desc }) => (
            <div key={name} className="p-6 rounded-xl bg-base-200 border border-base-300 hover:border-secondary/30 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-base-content">{name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">{lang}</span>
              </div>
              <p className="text-sm text-base-content/50">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}