import Link from "next/link";
import { BookOpen, Headphones, Search, BookMarked, Heart, Globe } from "lucide-react";

const services = [
  { href: "/service/quran", label: "Read Quran", icon: BookOpen, desc: "Read all 114 Surahs with translation" },
  { href: "/service/audio", label: "Audio Recitation", icon: Headphones, desc: "Listen to world-renowned Qaris" },
  { href: "/service/search", label: "Search Ayah", icon: Search, desc: "Search any ayah instantly" },
  { href: "/service/tafsir", label: "Tafsir", icon: BookMarked, desc: "Deep scholarly explanations" },
  { href: "/service/dua", label: "Dua & Ruqyah", icon: Heart, desc: "Authentic duas for every occasion" },
  { href: "/service/translation", label: "Translation", icon: Globe, desc: "Multiple language translations" },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-3">Our Services</h1>
          <p className="text-base-content/60">Everything you need to connect with the Quran</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map(({ href, label, icon: Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="group p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-secondary/40 hover:bg-secondary/5 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary/20 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base-content mb-1">{label}</h3>
              <p className="text-sm text-base-content/50">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}