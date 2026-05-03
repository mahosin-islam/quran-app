"use client";
import React, { useState, useRef, useEffect } from "react";
import AyahCard from "./AyahCard";

export default function AyahList({ ayahs, surah }: { ayahs: any[], surah: any }) {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // অটো-প্লে লজিক: একটি শেষ হলে পরেরটি শুরু হবে
    const handleNext = () => {
        if (playingIndex !== null && playingIndex < ayahs.length - 1) {
            setPlayingIndex(prev => prev! + 1);
        } else {
            setPlayingIndex(null);
        }
    };

    useEffect(() => {
        if (playingIndex !== null && audioRef.current) {
            audioRef.current.pause(); // আগের অডিও থামান
            audioRef.current.src = ayahs[playingIndex].audio;
            audioRef.current.load();
            
            // প্লে করার প্রমিজ হ্যান্ডেল করা
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.log("User interaction required"));
            }
        }
    }, [playingIndex, ayahs]);

    return (
        <div className="space-y-6">
            <audio ref={audioRef} onEnded={handleNext} className="hidden" />
            {ayahs.map((ayah, index) => (
                <AyahCard 
                    key={ayah.number} 
                    ayah={ayah} 
                    surah={surah}
                />
            ))}
        </div>
    );
}