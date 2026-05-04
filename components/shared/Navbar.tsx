"use client";
import { Settings, Heart } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { useSettings } from "@/context/SettingsContext";
import { ChevronDown, BookOpen, Headphones, Search, BookMarked, Globe } from "lucide-react";

const services = [
  { href: "/service/quran", label: "Read Quran", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/service/audio", label: "Audio Recitation", icon: <Headphones className="w-4 h-4" /> },
  { href: "/service/search", label: "Search Ayah", icon: <Search className="w-4 h-4" /> },
  { href: "/service/tafsir", label: "Tafsir", icon: <BookMarked className="w-4 h-4" /> },
  { href: "/service/dua", label: "Dua & Ruqyah", icon: <Heart className="w-4 h-4" /> },
  { href: "/service/translation", label: "Translation", icon: <Globe className="w-4 h-4" /> },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { openSettings } = useSettings();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const isServiceActive = pathname.startsWith("/service");

  return (
    <nav className="
      sticky md:block hidden top-0 z-25 w-full
      bg-base-100/50
      backdrop-blur-md
      border-b border-base-300
      px-4 md:px-6 py-3
    ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-1 md:gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="hidden md:flex w-10 h-10 items-center justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=iVqjL62Y9iSx&format=png&color=000000"
                alt="Logo"
              />
            </div>
            <h1 className="text-lg text-base-content md:text-xl font-bold leading-none">
              Quranul-Hakim
            </h1>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">

          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${active
                      ? "bg-secondary/15 text-secondary"
                      : "text-base-content/70 hover:text-base-content hover:bg-base-200"
                    }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                  )}
                </Link>
              </li>
            );
          })}

          {/* Service Dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${isServiceActive || isOpen
                  ? "bg-secondary/15 text-secondary"
                  : "text-base-content/70 hover:text-base-content hover:bg-base-200"
                }`}
            >
              Service
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              {isServiceActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
              )}
            </button>

            {isOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-base-100 border border-base-300 rounded-2xl shadow-xl z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-base-100 border-l border-t border-base-300 rotate-45" />
                <p className="text-[10px] font-semibold uppercase tracking-widest text-base-content/30 px-3 pt-2 pb-1">
                  Our Services
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {services.map(({ href, label, icon }) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-150
                          ${active
                            ? "bg-secondary/15 text-secondary font-medium"
                            : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                          }`}
                      >
                        <span className={active ? "text-secondary" : "text-base-content/40"}>
                          {icon}
                        </span>
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={openSettings}
            className="hidden md:flex p-2.5 rounded-full bg-base-200 hover:bg-base-300 transition-all"
          >
            <Settings className="w-5 h-5 text-base-content/70" />
          </button>

          <button className="
            bg-secondary hover:bg-secondary/80
            px-4 py-2 rounded-full
            text-xs md:text-sm font-semibold
            text-secondary-content
            flex items-center gap-2 shadow-sm
            transition-all
          ">
            <Heart className="w-4 h-4 fill-current" />
            <span>Support Us</span>
          </button>
        </div>

      </div>
    </nav>
  );
}