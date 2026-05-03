"use client";
import React, { createContext, useContext, useState, useRef, useEffect } from "react";

const AudioContext = createContext<any>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentAyah, setCurrentAyah] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [surahData, setSurahData] = useState<any>(null); // পুরো সূরার আয়াত লিস্ট
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // অটো-প্লে লজিক: এক আয়াত শেষ হলে পরেরটি প্লে হবে
  const handleAyahEnd = () => {
    if (surahData && currentAyah !== null) {
      const nextAyahIndex = currentAyah + 1;
      if (nextAyahIndex <= surahData.verses.length) {
        playAyah(nextAyahIndex, surahData);
      } else {
        setIsPlaying(false);
      }
    }
  };

  const playAyah = (ayahNumber: number, data: any) => {
    setSurahData(data);
    setCurrentAyah(ayahNumber);
    const audioUrl = data.verses[ayahNumber - 1]?.audio?.url; // আপনার API অনুযায়ী পাথ
    
    if (audioRef.current && audioUrl) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AudioContext.Provider value={{ currentAyah, isPlaying, playAyah, togglePlay }}>
      {children}
      <audio 
        ref={audioRef} 
        onEnded={handleAyahEnd} // অটো-প্লে ট্রিগার
        className="hidden"
      />
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);