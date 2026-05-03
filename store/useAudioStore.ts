import { create } from 'zustand';

interface AudioState {
  currentSurah: any | null;
  currentAyahIndex: number;
  isPlaying: boolean;
  audioUrl: string | null;
  setAudio: (url: string, surah: any, index: number) => void;
  togglePlay: () => void;
  playNext: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  currentSurah: null,
  currentAyahIndex: 0,
  isPlaying: false,
  audioUrl: null,
  setAudio: (url, surah, index) => set({ audioUrl: url, currentSurah: surah, currentAyahIndex: index, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  playNext: () => set((state) => {
    if (state.currentSurah && state.currentAyahIndex < state.currentSurah.ayahs.length - 1) {
        const nextIndex = state.currentAyahIndex + 1;
        const nextAyah = state.currentSurah.ayahs[nextIndex];
        // এখানে পরবর্তী আয়াতের অডিও URL জেনারেট করতে হবে (API অনুযায়ী)
        return { currentAyahIndex: nextIndex };
    }
    return state;
  }),
}));