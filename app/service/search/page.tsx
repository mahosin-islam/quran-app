// app/service/search/page.tsx
"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Search className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold text-base-content">Search Ayah</h1>
        </div>
        <p className="text-base-content/60 mb-8">Search any ayah by keyword, surah name, or topic.</p>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ayah, surah, or topic..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-base-200 border border-base-300 text-base-content placeholder:text-base-content/30 focus:outline-none focus:border-secondary transition-colors text-sm"
          />
        </div>

        {query === "" && (
          <div className="text-center py-16">
            <p className="font-amiri text-3xl text-secondary mb-3">ٱقْرَأْ</p>
            <p className="text-base-content/40 text-sm">Type something to search the Quran</p>
          </div>
        )}
      </div>
    </div>
  );
}