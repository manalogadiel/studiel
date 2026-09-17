<p align="center">
  <img src="public/app-logo.png" alt="Studiel Logo" width="110" style="border-radius: 22px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);" />
</p>

<h1 align="center">Studiel — Flashcards, Learn & Quiz</h1>

<p align="center">
  <strong>A modern, interactive, and offline-ready Progressive Web Application designed for active recall, exam preparation, and multi-subject mastery.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

---

## 📌 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Study Modes](#-study-modes)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Built-In Course Modules](#-built-in-course-modules)
- [Fullstack Developer](#-fullstack-developer)
- [License](#-license)

---

## 📖 About the Project

**Studiel** is a high-performance web and mobile study companion built to enhance information retention through active recall and spaced self-testing. Developed with modern web technologies, it offers a seamless learning workflow whether you are reviewing definitions on desktop or swiping through flashcards on mobile.

Featuring an offline-first **Progressive Web App (PWA)** architecture, fluid gesture-driven card animations, customizable decks, and intelligent fuzzy-matched identification assessments, Studiel transforms static lecture materials into an engaging study system.

---

## ✨ Key Features

- **📱 Progressive Web App (PWA):** Fully installable on iOS, Android, macOS, and Windows. Works offline with dedicated Service Worker caching.
- **📚 Multi-Subject Manager:** Easily switch between different course modules or create custom subjects with custom tags and codes.
- **⚡ Bulk Deck Creator:** Add cards individually or bulk paste formatted study notes (tab, colon, or comma-delimited) with instant auto-parsing.
- **🌓 Dark & Light Themes:** Native system-theme synchronization and manual toggle, complete with theme-color meta adaptation.
- **📱 Touch & Mobile Optimized:** Bottom navigation sheet, iOS safe-area support, and responsive typography tuned for handhelds, tablets, and wide screens.
- **🎉 Gamified Learning:** Interactive score counters, progress meters, and dynamic celebratory confetti effects powered by `canvas-confetti`.
- **💾 Local Persistence:** All custom subjects, selected active subjects, and theme preferences automatically persist in `localStorage`.

---

## 🎯 Study Modes

Studiel provides four specialized learning modes tailored for each stage of learning:

| Mode | Icon | Description |
| :--- | :---: | :--- |
| **Flashcards** | 🗂️ | Interactive 3D flip cards with swipe-to-sort gestures (swipe left for review, swipe right for known), definition-first inversion, shuffle, and confetti celebrations. |
| **Quiz Mode** | 📝 | Multiple-choice format with dynamically generated distractors, real-time color feedback, live scoring, and comprehensive performance results. |
| **Identification** | ✍️ | Active recall text-entry mode equipped with a forgiving fuzzy-match normalizer (ignores accents, case, punctuation, and parenthetical suffixes), hint reveals, and answer validation. |
| **Review Table** | 📖 | Structured, searchable master table of all terms and definitions for rapid scanning, skimming, and cram sessions. |

---

## 🛠️ Tech Stack

### Core Technologies
- **[React 18](https://react.dev/)** — Component-driven reactive UI architecture.
- **[TypeScript](https://www.typescriptlang.org/)** — End-to-end static type safety.
- **[Vite 6](https://vitejs.dev/)** — Next-generation frontend build tooling and hot module replacement.

### Styling & UI Components
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first, performant modern CSS styling engine.
- **[Radix UI Primitives](https://www.radix-ui.com/)** — Accessible, unstyled UI primitives (Dialogs, Tabs, Switches, Progress, Dropdowns).
- **[Lucide React](https://lucide.dev/)** — Crisp, consistent icon set.
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** — Keyframe animation utilities.

### Animation & Interactivity
- **[Motion](https://motion.dev/) (Framer Motion)** — Hardware-accelerated fluid drag physics, 3D card flips, and transitions.
- **[Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)** — Visual celebration effects for deck completion and high quiz scores.

### Offline & PWA Infrastructure
- **Service Worker (`sw.js`)** — Cache-first static asset caching for offline resilience.
- **Web App Manifest (`manifest.webmanifest`)** — Native standalone app installation experience on mobile and desktop.

---

## 📂 Project Directory Structure

```text
Studiel/
├── public/                     # Static assets & PWA configuration
│   ├── app-logo.png            # Application primary brand logo
│   ├── favicon.png             # Browser favicon
│   ├── icon-192.png / 512.png  # PWA standard and maskable icons
│   ├── apple-touch-icon.png    # iOS home screen web-clip icon
│   ├── manifest.webmanifest    # Web App Manifest specification
│   └── sw.js                   # Service Worker for offline caching
├── src/
│   ├── app/
│   │   ├── components/         # Core application components
│   │   │   ├── ui/             # Radix UI + Tailwind design components
│   │   │   ├── FlashcardMode.tsx      # 3D animated flip & drag flashcards
│   │   │   ├── QuizMode.tsx           # Multiple choice quiz engine
│   │   │   ├── IdentificationMode.tsx # Type-in identification mode
│   │   │   ├── TableMode.tsx          # Glossary review table
│   │   │   ├── SubjectManager.tsx     # Deck switcher & custom subject modal
│   │   │   ├── ThemeToggle.tsx        # Light / Dark mode switcher
│   │   │   └── InstallButton.tsx      # PWA prompt install handler
│   │   ├── data/               # Deck datasets & subject state models
│   │   │   ├── subjects.ts            # Subject loader, registry, & storage
│   │   │   ├── mobileComputingCards.ts# Mobile Computing & Wireless Networks
│   │   │   ├── qmGurusCards.ts        # Quality Management Gurus
│   │   │   ├── qmChapter1Cards.ts     # Quality Management (Ch. 1)
│   │   │   ├── qmChapter1V2Cards.ts   # Quality Management (Ch. 1 v2)
│   │   │   ├── emergingTrendsCards.ts # Emerging Trends in Quality
│   │   │   └── automataTheoryCards.ts # Set Theory & Finite Automata
│   │   ├── App.tsx             # Root layout, navigation bar, & view orchestration
│   │   └── index.html          # HTML5 entrypoint with PWA meta tags
│   ├── styles/
│   │   └── index.css           # Global Tailwind and custom safe-area styles
│   └── main.tsx                # Application mounting entry
├── package.json                # Project dependencies and npm scripts
├── vite.config.ts              # Vite bundler configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/manalogadiel/Studiel---Flash-Cards--Learn---Quiz.git
cd Studiel---Flash-Cards--Learn---Quiz
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```
The optimized production output will be generated in the `dist/` directory.

---

## 📚 Built-In Course Modules

Studiel comes pre-loaded with curated flashcard datasets for university-level computing and engineering subjects:

- **MC 301 — Mobile Computing & Wireless Networks**: Concepts, network topologies, transmission media, cellular architecture, and 1G through 6G evolutions.
- **QMG 201 — Quality Management Gurus**: Deming (14 Points, PDCA cycle), Juran (Quality Trilogy), Crosby, Feigenbaum, and Ishikawa.
- **ETQ 301 — Emerging Trends in Quality**: Industry 4.0, Quality 4.0 pillars (C-I-A), Big Data, IoT, and AI integration.
- **QM 101 / 102 — Quality Management (Ch. 1 & v2)**: Definitions of Quality, TQM philosophies, ISO principles, Quality Circles, and Kaizen.
- **IT 321 — Human-Computer Interaction**: Mental models, desktop metaphors, ergonomics, memory systems, and interaction styles.
- **CS 201 — Set Theory & Finite Automata**: Set operations, builder notation, formal languages, and DFA vs. NDFA.
- **SCI 101 — Environmental Science**: Ecology, biogeochemical cycles, renewable energy, and resource sustainability.

---

## 👨‍💻 Fullstack Developer

<p align="center">
  <strong>Gadiel Gospel L. Manalo</strong><br />
  <em>Fullstack Developer</em>
</p>

<p align="center">
  <a href="https://github.com/manalogadiel">
    <img src="https://img.shields.io/badge/GitHub-manalogadiel-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
</p>

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).
Feel free to fork, customize, and study with it!