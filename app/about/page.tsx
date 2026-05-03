"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Heart, Globe, Shield, Star, Users, Layers, Sparkles } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "6,236", label: "Ayahs" },
  { value: "114", label: "Surahs" },
  { value: "30", label: "Para / Juz" },
  { value: "10K+", label: "Daily Readers" },
];

const features = [
  { icon: <BookOpen className="w-5 h-5" />, title: "Multiple Translations", desc: "Read the Quran with verified translations in Bengali, English, and more." },
  { icon: <Heart className="w-5 h-5" />, title: "Ad-Free Experience", desc: "Completely free and ad-free. Built for the Ummah, not for profit." },
  { icon: <Globe className="w-5 h-5" />, title: "Multi-Language", desc: "Interface and translations available in multiple languages worldwide." },
  { icon: <Shield className="w-5 h-5" />, title: "Authentic Sources", desc: "All content verified by qualified Islamic scholars and authentic texts." },
  { icon: <Star className="w-5 h-5" />, title: "Beautiful Recitation", desc: "High-quality audio recitation by world-renowned Qaris." },
  { icon: <Layers className="w-5 h-5" />, title: "Tafsir & Notes", desc: "In-depth Tafsir and scholarly notes for deeper understanding." },
];

const team = [
  { name: "Sheikh Abdullah", role: "Islamic Scholar & Advisor", initial: "SA" },
  { name: "Rafiq Hossain", role: "Lead Developer", initial: "RH" },
  { name: "Nusrat Jahan", role: "UI/UX Designer", initial: "NJ" },
  { name: "Dr. Tariq Islam", role: "Content Reviewer", initial: "TI" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-base-100 overflow-x-hidden">

      {/* Hero */}
      <section className="relative bg-base-200 py-24 px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.05]"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          aria-hidden
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern id="islamic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="1"/>
                <polygon points="50,18 82,35 82,65 50,82 18,65 18,35" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                <line x1="50" y1="5" x2="50" y2="18" stroke="currentColor" strokeWidth="0.4"/>
                <line x1="95" y1="27.5" x2="82" y2="35" stroke="currentColor" strokeWidth="0.4"/>
                <line x1="95" y1="72.5" x2="82" y2="65" stroke="currentColor" strokeWidth="0.4"/>
                <line x1="50" y1="95" x2="50" y2="82" stroke="currentColor" strokeWidth="0.4"/>
                <line x1="5" y1="72.5" x2="18" y2="65" stroke="currentColor" strokeWidth="0.4"/>
                <line x1="5" y1="27.5" x2="18" y2="35" stroke="currentColor" strokeWidth="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic)" className="text-base-content"/>
          </svg>
        </motion.div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-medium text-secondary tracking-wide">Our Story & Mission</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-amiri text-4xl text-secondary mb-6 leading-loose"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-base-content leading-tight mb-6"
          >
            Bringing the <span className="text-secondary">Quran</span> Closer to Every Heart
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg text-base-content/60 max-w-2xl mx-auto leading-relaxed"
          >
            Quranul-Hakim is a free, open-access platform dedicated to making the words of Allah accessible to every Muslim — regardless of language, location, or background.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-base-100 border-b border-base-300">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }, i) => (
            <FadeUp key={label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-base-200 border border-base-300 hover:border-secondary/30 transition-colors">
                <motion.p
                  className="text-3xl font-bold text-secondary mb-1"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                >
                  {value}
                </motion.p>
                <p className="text-sm text-base-content/50">{label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                <Users className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-medium text-secondary">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-base-content leading-tight">
                Built for the Ummah, <br />
                <span className="text-secondary">by the Ummah</span>
              </h2>
              <p className="text-base-content/60 leading-relaxed">
                We believe every Muslim deserves access to the Quran in a way that is clear, beautiful, and deeply personal. Our platform is developed by volunteers who love the Deen, guided by scholars who ensure authenticity.
              </p>
              <p className="text-base-content/60 leading-relaxed">
                IRD Foundation established Quranul-Hakim with one goal: spread the words of Allah without barriers — no subscriptions, no ads, no compromises.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/5 rounded-3xl" />
              <div className="relative bg-base-200 border border-base-300 rounded-2xl p-8 space-y-5">
                <p className="font-amiri text-3xl text-secondary text-center leading-loose">
                  إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
                </p>
                <p className="text-sm text-base-content/50 text-center italic">
                  "Indeed, it is We who sent down the Quran and indeed, We will be its guardian." — Al-Hijr 15:9
                </p>
                <div className="border-t border-base-300 pt-4 grid grid-cols-3 gap-3 text-center">
                  {[["2020", "Founded"], ["50+", "Volunteers"], ["100%", "Free"]].map(([val, lbl]) => (
                    <div key={lbl}>
                      <p className="font-bold text-base-content text-lg">{val}</p>
                      <p className="text-xs text-base-content/40">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Everything You Need to <span className="text-secondary">Connect with the Quran</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-base-100 border border-base-300 rounded-2xl p-6 hover:border-secondary/30 transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-base-content mb-2">{title}</h3>
                  <p className="text-sm text-base-content/55 leading-relaxed">{desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-3">The People</p>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Meet the <span className="text-secondary">Team</span>
            </h2>
            <p className="text-base-content/50 mt-3 max-w-lg mx-auto">
              A dedicated group of Muslims working to make this platform a sadaqah jariyah for all involved.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {team.map(({ name, role, initial }, i) => (
              <FadeUp key={name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="bg-base-200 border border-base-300 rounded-2xl p-6 text-center hover:border-secondary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center text-secondary font-bold text-lg mx-auto mb-4">
                    {initial}
                  </div>
                  <p className="font-semibold text-base-content text-sm">{name}</p>
                  <p className="text-xs text-base-content/45 mt-1">{role}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-base-200">
        <FadeUp>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="font-amiri text-3xl text-secondary leading-loose">
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </p>
            <p className="text-xs text-base-content/40 italic">
              "Read in the name of your Lord who created" — Al-Alaq 96:1
            </p>
            <h2 className="text-3xl font-bold text-base-content">Start Reading Today</h2>
            <p className="text-base-content/55">
              Join thousands of Muslims who read, study, and reflect on the Quran daily with Quranul-Hakim.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <motion.a
                href="/quran"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-full bg-secondary text-secondary-content font-semibold text-sm"
              >
                Read the Quran
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-full border border-base-300 text-base-content font-semibold text-sm hover:bg-base-300 transition-all"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}