// app/not-found.tsx
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <h2 className="text-8xl font-bold text-teal-600/20">404</h2>
      <h3 className="text-2xl font-bold mt-4">Page Not Found</h3>
      <p className="text-slate-500 mt-2 max-w-md">
        দুঃখিত! আপনি যে পাতাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি। দয়া করে সঠিক লিঙ্কটি চেক করুন।
      </p>
      <Link 
        href="/" 
        className="mt-8 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
}