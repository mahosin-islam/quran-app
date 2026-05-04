import { getAllSurahs } from "@/lib/api";
import SurahGrid from "@/components/home/SurahGrid";
import Hero from "@/components/home/Hero";

export default async function HomePage() {
    const surahs = await getAllSurahs();

    return (
        <main className="min-h-screen bg-background">
            {/* Navbar (এটি পরে তৈরি করব, আপাতত প্লেসহোল্ডার) */}


            <Hero />

            {/* Surah List Section */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5  pb-6">
                    <div>
                        <h2 className="text-3xl font-bold">Quran Mazid</h2>
                        <p className="text-gray-400 text-sm">Explore all 114 Surahs</p>
                    </div>

                    {/* Tab Switcher - Image 1 এর মতো */}
                    <div className="flex gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                        <button className="px-6 py-2 text-sm font-medium rounded-lg bg-teal-500 text-white shadow-lg transition-all">Surah</button>
                        <button className="px-6 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white transition-all">Juz</button>
                        <button className="px-6 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white transition-all">Page</button>
                    </div>
                </div>

                <SurahGrid surahs={surahs} />
            </section>
        </main>
    );
}