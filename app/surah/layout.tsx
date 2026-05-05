import { getAllSurahs } from "@/lib/api";
import SurahSidebar from "@/components/SurahSidebar";
import MobileSurahDrawer from "@/components/MobileSurahDrawer";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Settings } from "lucide-react";
import { Surah } from "@/types";

export const revalidate = 3600; // Revalidate every hour

export default async function Layout({ children }: { children: React.ReactNode }) {
    let surahs: Surah[] = [];

    try {
        const fetchedSurahs = await getAllSurahs();
        surahs = fetchedSurahs || [];
    } catch (error) {
        console.error("Failed to fetch surahs in surah layout:", error);
        surahs = [];
    }

    return (
        <div className="flex h-screen overflow-hidden bg-base-100">
            {/* ডেস্কটপ সাইডবার */}
            <aside className="hidden md:flex w-80 flex-col border-r border-base-300 bg-base-100">
                <SurahSidebar surahs={surahs} />
            </aside>

            {/* মেইন এরিয়া */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">

                {/* মোবাইল হেডার */}
                <header className="md:hidden flex items-center h-14 px-4 border-b border-base-300 bg-base-100 sticky top-0 z-50">
                    <MobileSurahDrawer surahs={surahs} />
                    <div className="flex justify-between items-center w-full">
                        <Link href="/">
                            <h1 className="text-lg font-bold text-base-content">
                                Quran-Mazid
                            </h1>
                        </Link>

                        <div className="flex items-center gap-3 text-info-content">
                            {/* থিম টগল বাটন */}
                            <div className="flex items-center justify-center">
                                <ThemeToggle />
                            </div>

                            {/* সেটিংস আইকন */}
                            <button className="p-2 rounded-full hover:bg-base-content/10 transition-all flex items-center justify-center">
                                <Settings className="w-5 h-5 text-base-content/70" />
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
}
