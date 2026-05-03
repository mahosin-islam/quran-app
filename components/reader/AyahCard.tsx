"use client";
import { Play, Pause } from "lucide-react";
import { useAudioStore } from "@/store/useAudioStore";
import { useSettings } from "@/context/SettingsContext"; // এটি ইম্পোর্ট করুন

export default function AyahCard({ ayah, surah }: { ayah: any, surah: any }) {
  const { setAudio, isPlaying, audioUrl, togglePlay } = useAudioStore();
  
  // ১. সেটিংস কন্টেক্সট থেকে ভ্যালুগুলো নিন
  const { arabicFontSize, arabicFontFamily } = useSettings(); 

  const ayahAudioUrl = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`;
  const isCurrentAyah = audioUrl === ayahAudioUrl;

  const handlePlayClick = () => {
    if (isCurrentAyah) {
      togglePlay();
    } else {
      setAudio(ayahAudioUrl, surah, ayah.numberInSurah - 1);
    }
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 ${isCurrentAyah ? 'border-teal-500 bg-teal-500/5' : 'border-border bg-card/50'}`}>
      <div className="flex justify-between items-start gap-6">
        <div className="flex flex-col gap-3">
          <button 
            onClick={handlePlayClick}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
              isCurrentAyah && isPlaying ? 'bg-teal-500 text-white' : 'bg-teal-500/10 text-teal-500 hover:bg-teal-500 hover:text-white'
            }`}
          >
            {isCurrentAyah && isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
          </button>
        </div>

        <div className="flex-1 text-right">
          {/* ২. এখানে হার্ডকোডেড সাইজ রিমুভ করে ডাইনামিক স্টাইল দিন */}
          <p 
            className={`${arabicFontFamily} leading-[4.5rem]`}
            style={{ fontSize: `${arabicFontSize}px` }} 
          >
            {ayah.text}
          </p>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground">{ayah.translation}</p>
    </div>
  );
}