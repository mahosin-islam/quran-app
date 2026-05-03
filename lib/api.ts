import { Surah, SurahDetail } from "@/types";

const BASE_URL = "https://api.alquran.cloud/v1";

/**
 * ১. সব সূরার লিস্ট নিয়ে আসার জন্য (Surah Sidebar & Search Suggestion)
 */
export async function getAllSurahs(): Promise<Surah[]> {
    try {
        const res = await fetch(`${BASE_URL}/surah`, {
            next: { revalidate: 3600 }, // ১ ঘণ্টা ক্যাশ থাকবে
        });

        if (!res.ok) throw new Error("Failed to fetch surah list");

        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error("Fetch Error:", error);
        return []; // এরর হলে খালি অ্যারে রিটার্ন করবে যাতে অ্যাপ ক্রাশ না করে
    }
}

/**
 * ২. নির্দিষ্ট সূরার ডিটেইলস (আয়াত ও অনুবাদ) নিয়ে আসার জন্য
 */
export async function getSurahDetails(id: number): Promise<SurahDetail> {
    try {
        const res = await fetch(`${BASE_URL}/surah/${id}/editions/quran-uthmani,en.sahih`, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            // ব্যাকআপ যদি কম্বাইন্ড এডিশন ফেইল করে
            const backupRes = await fetch(`${BASE_URL}/surah/${id}/quran-uthmani`);
            if (!backupRes.ok) throw new Error("API Error");
            const backupData = await backupRes.json();
            return backupData.data;
        }

        const data = await res.json();

        // আরবী আয়াত এবং ইংরেজি অনুবাদ মার্জ করা
        const ayahs = data.data[0].ayahs.map((ayah: any, index: number) => ({
            ...ayah,
            translation: data.data[1].ayahs[index].text,
        }));

        return {
            ...data.data[0],
            ayahs,
        };
    } catch (error) {
        console.error("Fetch Error:", error);
        throw new Error("Could not load surah data");
    }
}

/**
 * ৩. কুরআনের আয়াতের ভেতর টেক্সট সার্চ করার জন্য (Global Search)
 */
export async function searchQuran(query: string) {
    if (!query || query.length < 3) return [];
    
    try {
        const res = await fetch(`${BASE_URL}/search/${encodeURIComponent(query)}/all/en.sahih`);
        if (!res.ok) throw new Error("Search failed");
        
        const data = await res.json();
        return data.data.results; 
    } catch (error) {
        console.error("Search error:", error);
        return [];
    }
}