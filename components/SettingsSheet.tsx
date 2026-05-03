"use client";
import { useSettings } from "@/context/SettingsContext";
import { Settings, X, Type } from "lucide-react";

export default function SettingsSheet() {
  // props নেই — সব context থেকে
  const {
    isOpen, closeSettings,
    arabicFontSize, updateFontSize,
    arabicFontFamily, updateFontFamily
  } = useSettings();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[150]" onClick={closeSettings} />

      <div className="fixed right-0 top-0 h-full w-[350px] bg-base-100 border-l border-base-300 z-[200] shadow-2xl p-6 overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-secondary">
            <Settings className="w-6 h-6" />
            <h2 className="text-xl font-bold text-base-content">Settings</h2>
          </div>
          <button onClick={closeSettings} className="p-2 hover:bg-base-200 rounded-full transition-all">
            <X className="w-5 h-5 text-base-content" />
          </button>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            
            {/* Section Title */}
            <div className="flex items-center gap-2 text-base-content/50 border-b border-base-300 pb-2">
              <Type className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Font Settings</span>
            </div>

            {/* Font Size Slider */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm text-base-content">Arabic Font Size</label>
                <span className="text-secondary font-bold">{arabicFontSize}px</span>
              </div>
              <input
                type="range" min="20" max="70" value={arabicFontSize}
                onChange={(e) => updateFontSize(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </div>

            {/* Font Family */}
            <div className="pt-4 space-y-3">
              <label className="text-sm text-base-content block">Arabic Font Style</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { value: "font-amiri", label: "Classic Amiri" },
                  { value: "font-indopak", label: "IndoPak" },
                  { value: "font-uthmani", label: "Uthmani" },
                ].map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => updateFontFamily(value)}
                    className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                      arabicFontFamily === value
                        ? "border-secondary bg-secondary/10 text-secondary"
                        : "border-base-300 hover:bg-base-200 text-base-content"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}