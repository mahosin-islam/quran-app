# 📖 Quranul Hakim - Modern Quran Web Application

A professional, feature-rich Quran application built with **Next.js**, **Tailwind CSS v4.0**, and **TypeScript**. This project focuses on high-quality UI/UX standards, clean code architecture, and a seamless user experience for reading and listening to the Holy Quran.

---

## 🚀 Live Demo & Repository

- **Live Link:** [https://quran-app-snowy-two.vercel.app/](https://quran-app-snowy-two.vercel.app/)
- **Contact:** [https://quran-app-snowy-two.vercel.app/contact](https://quran-app-snowy-two.vercel.app/contact)
- **GitHub Repo:** [Your GitHub Link Here]

---

## ✨ Features

### 1. 🕌 Comprehensive Surah Management
- **Surah Sidebar:** A scrollable list of all 114 Surahs with Arabic names, English translations, and Surah numbers.
- **Dynamic Routing:** Clicking a Surah navigates instantly to its dedicated Ayah page using Next.js App Router.
- **Load More System:** Performance-optimized Surah grid that loads batches of Surahs to ensure lightning-fast initial page load.

### 2. 📖 Advanced Ayah Reader
- **Right-to-Left (RTL) Support:** Perfectly rendered Arabic text with proper Quranic fonts.
- **Detailed Metadata:** Displays Surah header with Revelation Place (Makkah/Madinah) and total Ayah count.
- **Translation:** Each verse includes English translation (Saheeh International) for better understanding.

### 3. 🔊 Audio Recitation
- **Individual Ayah Playback:** Play/Pause buttons for every verse to hear clear audio recitation.
- **Global Audio Store:** Managed via Zustand/Context API to ensure smooth playback across the application.

### 4. ⚙️ Personalized Settings Panel
- **Arabic Font Selection:** Choose between multiple professional fonts (e.g., Amiri, KFGQPC).
- **Dynamic Font Resizing:** Adjustable sliders for both **Arabic** and **Translation** font sizes.
- **Persistence:** All user preferences are saved in `localStorage`, so settings remain unchanged even after a page refresh.

### 5. 🔍 Global Search Functionality
- Search for specific Ayahs or Surahs by English translation or Arabic text.
- Keyboard shortcut (`Cmd/Ctrl + K`) to quickly access the search modal.

### 6. 📱 Responsive & Theme-Ready UI
- **Dark/Light Mode:** Full support for dark theme matching the QuranMazid reference design.
- **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop with a collapsible drawer for mobile users.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript (Strict Type Safety) |
| **Styling** | Tailwind CSS v4.0 |
| **Icons** | Lucide-React |
| **State Management** | React Context API / Zustand |
| **Deployment** | Vercel |

---

## 🧠 Challenges Faced & Solutions

### 1. Performance with 114 Surahs
**Challenge:** Loading all 114 Surahs and thousands of Ayahs at once caused slow page performance and large DOM trees.
**Solution:** Implemented a **"Load More"** pagination system for the Surah grid and utilized Next.js **Static Site Generation (SSG)** to pre-render content.

### 2. Synchronization of User Settings
**Challenge:** Ensuring font changes apply instantly across all components without unnecessary re-renders.
**Solution:** Developed a custom `SettingsProvider` to manage global states and synchronized them with `localStorage` for persistent data.

### 3. RTL Layout & Alignment
**Challenge:** Aligning Arabic text correctly with English translations while maintaining a clean UI on mobile devices.
**Solution:** Used CSS logical properties and Tailwind's RTL support to ensure a professional typography layout.

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/quran-app.git](https://github.com/your-username/quran-app.git)