# Ar. Aditya N. Kamalakar — Architectural Portfolio Website

A sophisticated, high-performance architecture portfolio website and freelance business platform for **Ar. Aditya N. Kamalakar** (B.Arch, Dr. Baliram Hiray College of Architecture, Mumbai), serving as the foundational platform for **Indraprastha Architects & Design Studio**.

---

## 🏛️ Purpose & Capabilities

1. **Professional Job Application Platform**:
   - Recruiter & Hiring Principal Mode with quick candidate dossier summary.
   - Print/Save Resume (PDF) generator.
   - Highlights academic credentials from **Dr. Baliram Hiray College of Architecture, Mumbai**.
   - Clear breakdown of architectural competencies (AutoCAD, Revit, Lumion, D5 Render, NBC & DCR compliance).

2. **Freelance Business Engine**:
   - 7 detailed freelance services (Planning, GFC Working Drawings, Detailing, Interior Design, 3D Modeling, Rendering, Walkthroughs).
   - Interactive Project Enquiry Form with instant pre-filled **WhatsApp** message generator and **Email** launcher.
   - Configurable placeholders for direct client calls.

3. **Future Studio Identity — Indraprastha Architects & Design Studio**:
   - Visionary identity exploring contextual Indian modernism and high-detail construction.
   - Ethical, honest disclaimer framing the studio as a conceptual design research umbrella without falsely claiming a registered firm exists yet.

4. **Technical Drawing Gallery**:
   - Dedicated interactive blueprint sheet inspector with zoom (100% to 300%) and pan controls.
   - Blueprint mode vs Crisp white drafting paper mode toggle.
   - Architectural sheets for:
     * Plans (Ground Floor Working Plans, Setting Out)
     * Sections (Double-Height Long Sections)
     * Elevations (Terracotta Brick Jaali North-East Elevations)
     * Construction Drawings (Column Centerline & Foundation Grids)
     * Staircase Details (Cantilever Steel Stringer & Timber Treads)
     * Toilet Details (Sunken Slab Waterproofing & Linear Drain Sets)
     * Door-Window Details (Aluminum Thermal Break & Glazing Schedules)
     * Joinery Details (Custom Fluted Oak Paneling & Flush Pivot Doors)

---

## 🚀 Quick Launch (Immediate Viewing in Chrome)

You don't even need Node.js or a build server to preview the entire website immediately!

1. Navigate to:
   `C:\Users\ADITYA\.gemini\antigravity\scratch\aditya-kamalakar-portfolio`
2. Double-click **`index.html`** or right-click and choose **Open with Google Chrome**.
3. The full application runs with complete React interactivity, filtering, zooming blueprint viewer, and form handling.

---

## 💻 Full Developer Setup (Vite + React + TypeScript + Tailwind)

When you wish to run the project using Vite in a Node.js environment:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build optimized production bundle
npm run build
```

The production assets will be built into the `dist/` folder, ready for any web server.

---

## ✏️ How to Easily Customize Projects & Drawings

The website was designed with a decoupled data architecture so you never need to touch complex React UI components to update your portfolio.

### 1. Adding or Editing Projects:
Open **`src/data/projectsData.ts`**:
- Each project has fields for:
  - `title`, `subtitle`, `typology`, `location`, `year`
  - `categories` (Pick from: `'Architecture'`, `'Residential Design'`, `'Commercial Design'`, `'Institutional Projects'`, `'Working Drawings'`, `'Architectural Detailing'`, `'Interior Design'`, `'Exterior Rendering'`, `'Interior Rendering'`, `'3D Walkthroughs'`, `'Freelance Projects'`)
  - `coverImage` & `galleryImages`
  - `drawings` (list of technical sheets associated with this project)
  - `softwareUsed` (e.g., AutoCAD 2021, Lumion 12.5, Revit, SketchUp)
  - `myContribution` (specific architectural duties)

### 2. Adding or Editing Technical Drawing Sheets:
Open **`src/data/drawingsData.ts`**:
- Each sheet includes:
  - `sheetNo` (e.g., `ARC-P-101`, `DET-STR-401`)
  - `category` (`Plans`, `Sections`, `Elevations`, `Construction Drawings`, `Staircase Details`, `Toilet Details`, `Door-Window Details`, `Joinery Details`)
  - `scale`, `date`, `software`, `specs`
  - `keyNotes` (bulleted site tolerances and contractor specifications)

### 3. Updating Your Contact Details & Socials:
Open **`src/data/profileData.ts`**:
```typescript
contact: {
  email: 'aditya.kamalakar.arch@gmail.com',  // Replace with your active email
  phone: '+91 98765 43210',                  // Replace with your phone number
  whatsapp: '919876543210',                  // Replace with country code + number (no + or spaces)
  location: 'Mumbai, Maharashtra, India',
  linkedin: 'https://linkedin.com/in/...',
  instagram: 'https://instagram.com/...'
}
```

---

## 🌐 Free One-Click Deployment Guide

### Option A: Vercel (Recommended)
1. Push your folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Vite and deploys your site with a free SSL certificate.

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the `dist/` folder (or the root folder containing `index.html`) directly into the Netlify dashboard.
3. Your site goes live instantly on your own custom domain (e.g. `adityakamalakar.com` or `indraprasthastudio.in`).

### Option C: GitHub Pages
1. In your GitHub repository, go to **Settings > Pages**.
2. Select the `main` branch or `gh-pages` branch and click **Save**.

---

© 2026 Ar. Aditya N. Kamalakar • Indraprastha Architects & Design Studio
