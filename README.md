# 🚀 Developer Portfolio

A modern, high-performance personal portfolio website built to showcase software engineering projects and technical skills. Designed with a focus on clean UI/UX, accessibility, and speed.

![Tech Stack](https://skillicons.dev/icons?i=react,ts,vite,tailwind)

## ✨ Features

- **⚡ Fast & Responsive:** Built with Vite for instant loading speeds and fully responsive on mobile/desktop.
- **🎨 Modern UI:** Clean, dark-mode aesthetic using **Tailwind CSS** and **shadcn/ui** components.
- **📂 Project Showcase:** Interactive grid layout to display GitHub projects with tech stack tags.
- **📄 Resume Integration:** Direct download button for PDF resume/CV.
- **👤 About Section:** specialized timeline/bio section for professional history.
- **🔗 Social Connectivity:** Integrated links for GitHub, LinkedIn, and Email.

## 🛠️ Tech Stack

This project uses the modern React ecosystem:

- **Framework:** [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

##  Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
   cd portfolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Install dependencies**
   ```bash
   npm run dev
   ```
4. **Open your browser to**
   ```bash
   http://localhost:8080
   ```
### Customization
Updating Content
- ** Personal Info: Edit src/pages/Index.tsx to update your name, bio, and taglines.
- ** Projects: Update the project array in src/components/Projects.tsx (or equivalent component).
- ** Resume: Place your PDF in the /public folder and update the link in the Navbar/Hero section.

### Deployment
- This project is optimized for Vercel.
1. Log in to Vercel.
2. Push your code to GitHub.
3. Click "Add New Project" and select this repository.
4. Click "Deploy". Vercel will detect Vite automatically.