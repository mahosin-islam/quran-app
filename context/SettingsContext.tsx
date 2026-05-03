"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type SettingsContextType = {
  // Sheet open/close
  isOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  // Font settings
  arabicFontSize: number;
  arabicFontFamily: string;
  updateFontSize: (size: number) => void;
  updateFontFamily: (font: string) => void;
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arabicFontSize, setArabicFontSize] = useState(32);
  const [arabicFontFamily, setArabicFontFamily] = useState("font-amiri");

  useEffect(() => {
    const savedSize = localStorage.getItem("arabicFontSize");
    const savedFont = localStorage.getItem("arabicFontFamily");
    if (savedSize) setArabicFontSize(parseInt(savedSize));
    if (savedFont) setArabicFontFamily(savedFont);
  }, []);

  const updateFontSize = (size: number) => {
    setArabicFontSize(size);
    localStorage.setItem("arabicFontSize", size.toString());
  };

  const updateFontFamily = (font: string) => {
    setArabicFontFamily(font);
    localStorage.setItem("arabicFontFamily", font);
  };

  return (
    <SettingsContext.Provider value={{
      isOpen,
      openSettings: () => setIsOpen(true),
      closeSettings: () => setIsOpen(false),
      arabicFontSize,
      arabicFontFamily,
      updateFontSize,
      updateFontFamily,
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
};