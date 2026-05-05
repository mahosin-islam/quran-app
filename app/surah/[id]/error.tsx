"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error loading surah:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center py-12">
            <AlertTriangle className="w-20 h-20 text-red-500 mb-4" />
            <h2 className="text-3xl font-bold mb-2">সূরা লোড করতে ব্যর্থ</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                দুঃখিত! এই সূরা ডেটা লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
                <button
                    onClick={() => reset()}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-all font-medium"
                >
                    আবার চেষ্টা করুন
                </button>
                <Link
                    href="/"
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-8 py-3 rounded-lg transition-all font-medium"
                >
                    হোম এ যান
                </Link>
            </div>
        </div>
    );
}
