// app/service/audio/page.tsx
import { Headphones, Play } from "lucide-react";

const qaris = [
  { name: "Mishary Rashid Alafasy", style: "Murattal", flag: "🇰🇼" },
  { name: "Abdul Basit Abdul Samad", style: "Mujawwad", flag: "🇪🇬" },
  { name: "Mahmoud Khalil Al-Hussary", style: "Murattal", flag: "🇪🇬" },
  { name: "Saad Al-Ghamdi", style: "Murattal", flag: "🇸🇦" },
  { name: "Yusuf Islam", style: "Nasheed", flag: "🇬🇧" },
  { name: "Muhammad Ayyub", style: "Murattal", flag: "🇸🇦" },
];

export default function AudioPage() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Headphones className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold text-base-content">Audio Recitation</h1>
        </div>
        <p className="text-base-content/60 mb-8">Listen to beautiful recitations by world-renowned Qaris.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {qaris.map(({ name, style, flag }) => (
            <div key={name} className="p-5 rounded-xl bg-base-200 border border-base-300 flex items-center justify-between hover:border-secondary/30 transition-all group cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{flag}</span>
                <div>
                  <p className="font-medium text-base-content text-sm">{name}</p>
                  <p className="text-xs text-base-content/40">{style}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}