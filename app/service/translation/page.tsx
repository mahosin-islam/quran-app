// app/service/translation/page.tsx
import { Globe } from "lucide-react";

const translations = [
  { lang: "Bengali", author: "Muhiuddin Khan", flag: "🇧🇩", default: true },
  { lang: "English", author: "Sahih International", flag: "🇬🇧", default: false },
  { lang: "Urdu", author: "Fateh Muhammad Jalandhari", flag: "🇵🇰", default: false },
  { lang: "Hindi", author: "Azizul Haque Al-Umari", flag: "🇮🇳", default: false },
  { lang: "Turkish", author: "Diyanet Isleri", flag: "🇹🇷", default: false },
  { lang: "Indonesian", author: "Kemenag RI", flag: "🇮🇩", default: false },
];

export default function TranslationPage() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Globe className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold text-base-content">Translation</h1>
        </div>
        <p className="text-base-content/60 mb-8">Choose your preferred translation language.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {translations.map(({ lang, author, flag, default: isDefault }) => (
            <div key={lang} className={`p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between
              ${isDefault
                ? "bg-secondary/10 border-secondary/30"
                : "bg-base-200 border-base-300 hover:border-secondary/30"
              }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{flag}</span>
                <div>
                  <p className="font-medium text-base-content text-sm">{lang}</p>
                  <p className="text-xs text-base-content/40">{author}</p>
                </div>
              </div>
              {isDefault && (
                <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary font-medium">Default</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}