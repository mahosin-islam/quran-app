import { getSurahDetails } from "@/lib/api";
import AyahList from "@/components/reader/AyahList";


export default async function SurahPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const surah = await getSurahDetails(Number(id));

    return (
        <div className="max-w-4xl mx-auto py-12 px-6 pb-32"> 
            {/* ২. সেটিংস প্যানেলটি এখানে যুক্ত করুন যাতে ইউজার শুরুতেই এটি পায় */}
           

            {/* Surah Banner */}
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-800 text-white text-center mb-12 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h1 className="text-4xl font-bold mb-2">{surah.englishName}</h1>
                <p className="text-teal-100 mb-6">{surah.englishNameTranslation} • {surah.numberOfAyahs} Ayahs</p>
                
                {Number(id) !== 9 && (
                    <div className="text-4xl font-arabic border-t border-white/20 pt-6 opacity-90">
                        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                    </div>
                )}
            </div>

            {/* Ayahs List */}
            <AyahList ayahs={surah.ayahs} surah={surah} />
        </div>
    );
}