export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface Ayah {
  number: number;
  text: string;
  translation: string;
  audio: string;
  numberInSurah: number;
  juz: number;
}

export interface SurahDetail extends Surah {
  ayahs: Ayah[];
}