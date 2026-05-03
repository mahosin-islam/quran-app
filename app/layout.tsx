

// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SettingsProvider } from "@/context/SettingsContext";
import { AudioProvider } from "@/context/AudioContext";
import SettingsSheet from "@/components/SettingsSheet";
import Navbar from "@/components/shared/Navbar";
import AudioPlayer from "@/components/reader/AudioPlayer";
import Footer from "@/components/shared/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased mb-30">
        <ThemeProvider>
          <SettingsProvider>
            <AudioProvider>

              <Navbar />
               <div className="min-h-screen">
                {children}
               </div>
              <AudioPlayer />

              {/* একবারই বসাও — যেকোনো জায়গা থেকে open হবে */}
              <SettingsSheet />

            </AudioProvider>
          </SettingsProvider>
        </ThemeProvider>

        <Footer />
      </body>
    </html>
  );
}
