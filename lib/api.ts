import { Surah, SurahDetail } from "@/types";

const BASE_URL = "https://api.alquran.cloud/v1";

/**
 * ১. সব সূরার লিস্ট নিয়ে আসার জন্য (Surah Sidebar & Search Suggestion)
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
 * ২. নির্দিষ্ট সূরার ডিটেইলস (আয়াত ও অনুবাদ) নিয়ে আসার জন্য
 */
export async function getSurahDetails(id: number): Promise<SurahDetail> {
    // Validate ID
    if (!id || id < 1 || id > 114) {
        throw new Error(`Invalid Surah ID: ${id}`);
    }

    try {
        // First try to get both Arabic and English
        const res = await fetch(`${BASE_URL}/surah/${id}/editions/quran-uthmani,en.sahih`, {
            next: { revalidate: 7200 }, // 2 hours for better stability
            signal: AbortSignal.timeout(10000), // 10 second timeout
        });

        if (res.ok) {
            const data = await res.json();

            // Check if data exists
            if (data.data && data.data.length >= 2) {
                // আরবী আয়াত এবং ইংরেজি অনুবাদ মার্জ করা
                const ayahs = data.data[0].ayahs.map((ayah: any, index: number) => ({
                    ...ayah,
                    translation: data.data[1]?.ayahs[index]?.text || ayah.text,
                }));

                return {
                    ...data.data[0],
                    ayahs,
                };
            }
        }

        // ব্যাকআপ: শুধু আরবী পান
        const backupRes = await fetch(`${BASE_URL}/surah/${id}/quran-uthmani`, {
            next: { revalidate: 7200 },
            signal: AbortSignal.timeout(10000),
        });

        if (!backupRes.ok) {
            throw new Error(`Surah ${id} not found`);
        }

        const backupData = await backupRes.json();
        return backupData.data;
    } catch (error) {
        console.error(`Fetch Error for Surah ${id}:`, error);
        throw new Error(`Could not load surah ${id} data`);
    }
}

/**
 * ৩. কুরআনের আয়াতের ভেতর টেক্সট সার্চ করার জন্য (Global Search)
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
