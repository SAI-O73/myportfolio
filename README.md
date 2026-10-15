# D. Rama Venkata Sai — Developer Portfolio

A modern, cinematic developer portfolio website built using **React.js + Vite**, **Tailwind CSS**, and **Framer Motion**. Designed for **D. Rama Venkata Sai**, a final-year Diploma in Computer Science student at **AANM & VVRSR Polytechnic College, Gudlavalleru**, aspiring in modern web development and Android programming.

---

## 🌟 Live Features & Highlights

- **Hero Section**: Personal introduction, animated developer code window, and direct actions to view projects, contact, or download the resume.
- **About Me**: Academic background at AANM & VVRSR Polytechnic College, foundational computer science training, and key areas of interest.
- **Technical Skills**: Grouped cards for Web Development, Android Development, and Development Tools with clean tags and no fabricated percentages.
- **Featured Project — AI Gym Fitness**: Dedicated showcase for the college fitness web application with direct links to the [Live Website](http://fitness-073.vercel.app/) and [GitHub Repository](https://github.com/SAI-O73/gym-project).
- **Education Timeline**: Final-year Diploma in Computer Science milestone with authentic course details.
- **Development Interests**: Highlighting ongoing exploration in React web development and Android application programming.
- **Interactive Contact Form**: Integrated with **EmailJS** (`@emailjs/browser`) with input validation, honeypot spam protection, loading state, and error handling.
- **Design System**: Midnight navy background (`#0B1120`), dark slate surfaces (`#111827`), electric cyan accents (`#38BDF8`), Space Grotesk headings, and Inter body typography.
- **Motion & Accessibility**: Fluid Framer Motion animations with full support for `prefers-reduced-motion` and keyboard navigation.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular component-driven frontend architecture |
| **Vite** | Fast build tooling and local development server |
| **Tailwind CSS** | Custom styling, design tokens, and responsive utilities |
| **Framer Motion** | Controlled transitions, reveals, and interactive animations |
| **Lucide React** | Consistent, modern developer and UI icons |
| **EmailJS** | Client-side email dispatching without exposed server secrets |
| **Vercel** | Production deployment platform |

---

## 📁 Project Structure

```
myportfolio/
├── public/
│   ├── favicon.svg          # Custom SVG favicon with 'SAI' initials
│   └── resume.pdf           # D. Rama Venkata Sai resume file
├── src/
│   ├── assets/              # Static assets & media
│   ├── components/
│   │   ├── About.jsx        # Academic background & interests
│   │   ├── Contact.jsx      # Controlled EmailJS contact form
│   │   ├── CursorGlow.jsx   # Subtle desktop cursor glow effect
│   │   ├── Education.jsx    # Polytechnic timeline
│   │   ├── Footer.jsx       # Personal footer & back-to-top
│   │   ├── Hero.jsx         # Hero banner with code visual & CTA
│   │   ├── Interests.jsx    # Web & Android specialization cards
│   │   ├── Navbar.jsx       # Sticky header with active highlight
│   │   ├── Projects.jsx     # AI Gym Fitness showcase card
│   │   └── Skills.jsx       # Web dev, Android & tool cards
│   ├── data/
│   │   └── portfolio.js     # Centralized portfolio data
│   ├── services/
│   │   └── emailService.js  # EmailJS integration service
│   ├── utils/
│   │   └── animations.js    # Reusable Framer Motion variants
│   ├── App.jsx              # Main application layout
│   ├── index.css            # Tailwind directives, fonts & scrollbar
│   └── main.jsx             # React DOM root entry
├── .env.example             # Template for environment variables
├── .gitignore               # Ignored files (node_modules, .env, dist)
├── index.html               # Semantic HTML, Google Fonts & SEO tags
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Custom colors, fonts, and shadows
└── vite.config.js           # Vite build configuration
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### 2. Clone the repository
```bash
git clone https://github.com/SAI-O73/gym-project.git
cd myportfolio
```

### 3. Install dependencies
```bash
npm install
```

### 4. Configure environment variables (optional for contact form)
Create a `.env` file in the root folder by copying `.env.example`:
```bash
cp .env.example .env
```
Update the keys with your credentials from [EmailJS](https://www.emailjs.com/):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
> **Note**: If environment variables are not supplied, the form will guide visitors to contact `dsaimtm@gmail.com` directly via their mail client.

### 5. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for production
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

---

## 📧 EmailJS Setup Guide

To enable live email delivery from the contact form:
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS dashboard, click **Add New Service** (select **Gmail** or your preferred email provider). Note the **Service ID**.
3. Create an **Email Template** with the following template variables:
   - `{{from_name}}` — Visitor's name
   - `{{reply_to}}` — Visitor's email address
   - `{{to_email}}` — Set default recipient to `dsaimtm@gmail.com`
   - `{{subject}}` — Message subject
   - `{{message}}` — Message content
4. Go to **Account > API Keys** and copy your **Public Key**.
5. Add these credentials to your `.env` file or in your Vercel Project Settings.

---

## 🌐 Deployment to Vercel

### Method 1: Deploy with Git (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete React portfolio for D. Rama Venkata Sai"
   git branch -M main
   git remote add origin https://github.com/SAI-O73/sai-portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
8. Click **Deploy**. Vercel will build and assign a production URL.

---

## 👤 Personal Information & Contact

- **Full Name**: D. Rama Venkata Sai
- **College**: AANM & VVRSR Polytechnic College, Gudlavalleru
- **Course**: Final-Year Diploma Student in Computer Science
- **Email**: [dsaimtm@gmail.com](mailto:dsaimtm@gmail.com)
- **Phone**: [+91 8919086393](tel:+918919086393)
- **Social Username**: `@rowdysai2112`
- **Featured Project**: [AI Gym Fitness](http://fitness-073.vercel.app/)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
