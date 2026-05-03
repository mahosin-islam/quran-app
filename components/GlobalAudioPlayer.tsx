"use client";
import { useAudio } from "@/context/AudioContext";
import { Play, Pause, SkipForward } from "lucide-react";

export default function GlobalAudioPlayer() {
  const { isPlaying, togglePlay, currentAyah } = useAudio();

  // যদি কোনো অডিও সিলেক্ট করা না থাকে, তবে প্লেয়ার দেখাবে না
  if (currentAyah === null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4 z-[100] shadow-up flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-teal-500/10 p-2 rounded-lg text-teal-600 font-bold">
          {currentAyah}
        </div>
        <div>
          <p className="text-sm font-medium">Now Playing</p>
          <p className="text-xs text-muted-foreground text-slate-500">Ayah {currentAyah}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full transition-all"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
        </button>
      </div>
    </div>
  );
}