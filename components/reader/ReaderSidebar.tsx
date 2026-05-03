"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export default function ReaderSidebar({ surahs }: { surahs: any[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-80  border-r border-border bg-card flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <input 
            placeholder="সূরার নাম খুঁজুন..." 
            className="w-full bg-secondary py-2 pl-10 pr-4 rounded-lg text-sm outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {surahs.map((surah) => {
          const isActive = pathname.includes(`/surah/${surah.number}`);
          return (
            <Link 
              key={surah.number} 
              href={`/surah/${surah.number}`}
              className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                isActive ? "bg-teal-500/10 text-teal-600 border border-teal-500/20" : "hover:bg-secondary text-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold ${isActive ? "text-teal-600" : "text-muted-foreground"}`}>
                  {surah.number}
                </span>
                <span className="text-sm font-medium">{surah.englishName}</span>
              </div>
              <span className="font-arabic text-lg opacity-80">{surah.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}