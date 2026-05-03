"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SUMMARIES = [
  {
    text: "The example of Paradise, which the righteous have been promised, is [that] beneath it rivers flow. Its fruit is lasting, and its shade.",
    reference: "[ Ar Rad : 35 ]",
  },
  {
    text: "Indeed, with hardship comes ease. Truly, with hardship comes ease.",
    reference: "[ Ash-Sharh : 5-6 ]",
  },
  {
    text: "Successful indeed are the believers: those who humble themselves in prayer and shun whatever is useless.",
    reference: "[ Al-Mu'minun : 1-3 ]",
  },
  {
    text: "And He found you lost and guided you. And He found you in need and made you self-sufficient.",
    reference: "[ Ad-Duha : 7-8 ]",
  },
];

export default function SurahSlider() {
  const [index, setIndex] = useState(0);

  // প্রতি ৮ সেকেন্ড পর পর স্লাইড পরিবর্তন হবে
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SUMMARIES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl  mx-auto text-center min-h-50 flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* Main Summary Text */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
            "{SUMMARIES[index].text}"
          </p>

          {/* Reference */}
          <p className="text-teal-600 font-bold tracking-[0.2em] uppercase text-sm">
            {SUMMARIES[index].reference}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {SUMMARIES.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === index ? "w-8 bg-teal-500" : "w-2 bg-slate-300 dark:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}