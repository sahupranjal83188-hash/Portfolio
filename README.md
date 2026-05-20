# Pranjal Sahu — Portfolio 🚀

A modern, interactive 3D portfolio website built with React, Three.js, and GSAP. Featuring a fully animated 3D character, physics-based tech stack visualization, smooth scroll animations, and a premium dark-themed UI.

🔗 **Live Demo:** _Coming Soon_

---

## ✨ Features

- **Interactive 3D Character** — A rigged and animated character model that tracks your mouse cursor in real-time
- **Physics-Based Tech Stack** — Bouncing 3D balls powered by Rapier physics engine, each textured with technology logos (Python, Java, C, SQL)
- **Smooth Scroll Animations** — GSAP ScrollTrigger and ScrollSmoother for buttery-smooth section transitions
- **Horizontal Project Showcase** — A scroll-snap based horizontal gallery for project highlights
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Loading Screen** — Custom animated loading experience with a progress indicator
- **Dynamic Marquee** — Eye-catching text marquee on the loading screen

---

## 🛠️ Tech Stack

| Category       | Technologies                                      |
|----------------|---------------------------------------------------|
| **Frontend**   | React, TypeScript, HTML, CSS                      |
| **3D/WebGL**   | Three.js, React Three Fiber, React Three Drei     |
| **Physics**    | React Three Rapier                                |
| **Animations** | GSAP, ScrollTrigger, ScrollSmoother               |
| **Build Tool** | Vite                                              |
| **Icons**      | React Icons                                       |

---

## 📂 Project Structure

```
Portfolio-Website/
├── public/
│   ├── draco/              # DRACO decoder for 3D model compression
│   ├── images/             # Tech stack logos (Python, Java, C, SQL)
│   └── models/             # Encrypted 3D character model
├── src/
│   ├── components/
│   │   ├── Character/      # 3D character scene, lighting, animations
│   │   ├── styles/         # Component-specific CSS files
│   │   ├── utils/          # GSAP scroll utilities, initial effects
│   │   ├── About.tsx       # About Me section
│   │   ├── Career.tsx      # Academic & Qualifications timeline
│   │   ├── Contact.tsx     # Contact info & social links
│   │   ├── Landing.tsx     # Hero/landing section
│   │   ├── Loading.tsx     # Loading screen with animations
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── TechStack.tsx   # 3D physics-based tech balls
│   │   ├── WhatIDo.tsx     # Skills & services cards
│   │   └── Work.tsx        # Project showcase (horizontal scroll)
│   ├── context/            # React context providers
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Entry point
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/sahupranjal83188-hash/Portfolio.git

# Navigate to the project directory
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be output to the `dist/` folder.

---

## 📸 Sections Overview

| Section                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Landing**              | Hero section with animated 3D character and introduction                    |
| **About Me**             | Brief bio highlighting skills and achievements                              |
| **What I Do**            | Interactive cards showcasing Development and Data Analysis skillsets         |
| **Academic & Qualifications** | Timeline of education — B.Tech (Data Science), 12th (ISC), 10th (ICSE) |
| **My Techstack**         | 3D physics simulation with bouncing tech logo balls                         |
| **My Work**              | Horizontal scrolling project showcase                                       |
| **Contact**              | Email, phone, address, and social media links (GitHub, LinkedIn)            |

---

## 🔗 Connect With Me

- **Email:** sahupranjal83188@gmail.com
- **LinkedIn:** [Pranjal Sahu](https://www.linkedin.com/in/pranjal-sahu-354290360/)
- **GitHub:** [sahupranjal83188-hash](https://github.com/sahupranjal83188-hash)

---

## 🙏 Credits

- Portfolio template inspired by [Moncy Yohannan](https://github.com/MoncyDev)
- 3D rendering powered by [Three.js](https://threejs.org/) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Animations by [GSAP](https://gsap.com/)
- Physics engine by [Rapier](https://rapier.rs/)

---

## ⚠️ Note

This project uses GSAP trial plugins (ScrollSmoother). Trial plugins are for development/testing only and cannot be used in production deployments. For production use, refer to the [GSAP Installation Guide](https://gsap.com/docs/v3/Installation/) for official Club plugins.

---

## 📄 License

This project is open source and available for learning and inspiration.  
Please provide proper credit if you use any part of the code.

---

> Built with ❤️ by **Pranjal Sahu**
