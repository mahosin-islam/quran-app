"use client";
import React, { useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { useAudioStore } from "@/store/useAudioStore";

export default function AudioPlayer() {
  const { isPlaying, audioUrl, togglePlay, currentSurah, currentAyahIndex } = useAudioStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioUrl]);

  if (!audioUrl) return null; // কোনো অডিও সিলেক্ট না থাকলে প্লেয়ার দেখাবে না

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border p-4 z-[100] transition-transform duration-500">
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        onEnded={togglePlay} // আয়াত শেষ হলে পজ হবে (পরবর্তীতে আমরা অটো-প্লে সেট করব)
      />
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 w-1/3">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
            {currentSurah?.number}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold">{currentSurah?.englishName}</p>
            <p className="text-[10px] text-muted-foreground">Ayah {currentAyahIndex + 1}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-6">
            <button className="text-muted-foreground hover:text-teal-500"><SkipBack size={20} /></button>
            <button 
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white shadow-lg"
            >
              {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
            </button>
            <button className="text-muted-foreground hover:text-teal-500"><SkipForward size={20} /></button>
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-end gap-4 w-1/3">
          <Volume2 size={20} className="text-muted-foreground" />
          <div className="w-20 h-1 bg-secondary rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-teal-500" />
          </div>
        </div>
      </div>
    </div>
  );
}