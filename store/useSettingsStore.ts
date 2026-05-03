import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  arabicFont: string;
  arabicSize: number;
  translationSize: number;
  setArabicFont: (font: string) => void;
  setArabicSize: (size: number) => void;
  setTranslationSize: (size: number) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      arabicFont: 'font-amiri',
      arabicSize: 32,
      translationSize: 16,
      setArabicFont: (font) => set({ arabicFont: font }),
      setArabicSize: (size) => set({ arabicSize: size }),
      setTranslationSize: (size) => set({ translationSize: size }),
    }),
    { name: 'quran-settings' } // এটি localStorage-এ ডাটা সেভ রাখবে
  )
);