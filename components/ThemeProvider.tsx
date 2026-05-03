// components/ThemeProvider.tsx
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"    // ← "class" না, এটা লাগবে DaisyUI এর জন্য
      defaultTheme="dark"
      enableSystem={false}      // ← system theme চাইলে true করো
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}