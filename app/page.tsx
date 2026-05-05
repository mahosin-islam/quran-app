import { getAllSurahs } from "@/lib/api";
import SurahGrid from "@/components/home/SurahGrid";
import Hero from "@/components/home/Hero";
import { AlertCircle } from "lucide-react";
import { Surah } from "@/types";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
    let surahs: Surah[] = [];
    let hasError = false;

    try {
        const fetchedSurahs = await getAllSurahs();
        surahs = fetchedSurahs || [];
        if (!surahs || surahs.length === 0) {
            hasError = true;
            console.warn("No surahs returned from API");
        }
    } catch (error) {
        console.error("Failed to fetch surahs:", error);
        hasError = true;
    }

    return (
        <main className="min-h-screen bg-background">
            <Hero />

            {/* Surah List Section */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5  pb-6">
                    <div>
                        <h2 className="text-3xl font-bold">Quran Mazid</h2>
                        <p className="text-gray-400 text-sm">Explore all 114 Surahs</p>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                        <button className="px-6 py-2 text-sm font-medium rounded-lg bg-teal-500 text-white shadow-lg transition-all">Surah</button>
                        <button className="px-6 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white transition-all">Juz</button>
                        <button className="px-6 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white transition-all">Page</button>
                    </div>
                </div>

                {/* Error State */}
                {hasError && (
                    <div className="bg-yellow-50/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">সার্ভার সংযোগ সমস্যা</h3>
                                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                                    আমরা কুরআন ডেটা লোড করতে পারছি না। অনুগ্রহ করে কিছুক্ষণ পর পুনরায় চেষ্টা করুন।
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Surahs Grid or Empty State */}
                {surahs && surahs.length > 0 ? (
                    <SurahGrid surahs={surahs} />
                ) : (
                    !hasError && (
                        <div className="text-center py-16">
                            <p className="text-gray-500">সূরা তথ্য লোড হচ্ছে...</p>
                        </div>
                    )
                )}
            </section>
        </main>
    );
}