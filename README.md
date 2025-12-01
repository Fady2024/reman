# 🌿 Reman - Sustainable Men's Fashion

<div align="center">

![Reman Logo](https://img.shields.io/badge/Reman-Sustainable_Fashion-6B8E23?style=for-the-badge)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Premium recycled menswear. Zero waste, maximum style.**

[Live Demo](https://reman.co) • [Report Bug](https://github.com/Fady2024/reman/issues) • [Request Feature](https://github.com/Fady2024/reman/issues)

</div>

---

## 📖 About The Project

**Reman** is a sustainable men's fashion e-commerce platform that transforms premium end-of-season stock into unique, eco-friendly menswear. We rescue perfectly good garments from major fashion brands that would otherwise end up in landfills, redesign them with modern aesthetics, and offer them at accessible prices.

### 🎯 Mission

To prove that sustainable fashion can be stylish, affordable, and masculine. We rescue premium materials from waste streams and transform them into wardrobe essentials.

### 🌍 Impact

- **50K+** Pieces Rescued
- **2M** Liters of Water Saved
- **15K** Happy Customers
- **85%** Less Water Used vs. New Production
- **Zero** New Raw Materials for Fabric

---

## ✨ Features

### 🛍️ E-Commerce Functionality
- **Product Catalog** - Browse curated collections of sustainable menswear
- **Advanced Filtering** - Filter by category, size, price, and sustainability features
- **Product Details** - Detailed product pages with sizing guides and sustainability info
- **Shopping Cart** - Seamless cart management (ready for integration)
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🎨 Design & UX
- **Modern UI** - Clean, masculine aesthetic with premium feel
- **Smooth Animations** - Engaging micro-interactions and transitions
- **Dark Mode Ready** - Theme system with light/dark mode support
- **Accessibility** - WCAG compliant with semantic HTML
- **SEO Optimized** - Proper meta tags, structured data, and performance optimization

### 📄 Content Pages
- **Home** - Hero section with featured products and sustainability highlights
- **Shop** - Full product catalog with filtering and sorting
- **About** - Company story, mission, and values
- **Sustainability** - Detailed information about our eco-friendly process
- **Blog** - Fashion tips and sustainability insights
- **Contact** - Contact form and company information

### 🔧 Technical Features
- **TypeScript** - Full type safety across the application
- **Component Library** - Built with shadcn/ui and Radix UI primitives
- **Routing** - Client-side routing with React Router v6
- **State Management** - React Query for server state
- **Form Handling** - React Hook Form with Zod validation
- **Styling** - Tailwind CSS with custom design system

---

## 🛠️ Tech Stack

### Core
- **[React 18.3.1](https://reactjs.org/)** - UI library
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type safety
- **[Vite 5.4.19](https://vitejs.dev/)** - Build tool and dev server

### Styling
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Google Fonts - Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** - Typography

### Routing & State
- **[React Router v6](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Server state management

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** - Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fady2024/reman.git
   cd reman
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
reman/
├── public/                 # Static assets
│   ├── hero-main.jpg
│   ├── sustainability-hero.jpg
│   └── ...
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Navbar, Footer, Layout)
│   │   ├── ui/           # shadcn/ui components
│   │   ├── NavLink.tsx   # Navigation link component
│   │   └── ProductCard.tsx
│   ├── data/             # Static data and constants
│   │   └── products.ts   # Product catalog data
│   ├── lib/              # Utility functions
│   │   └── utils.ts      # Helper functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── Shop.tsx      # Product catalog
│   │   ├── Product.tsx   # Product detail page
│   │   ├── About.tsx     # About page
│   │   ├── Sustainability.tsx
│   │   ├── Blog.tsx      # Blog listing
│   │   ├── Contact.tsx   # Contact page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main app component with routes
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and Tailwind config
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

### Key Directories

- **`/components/layout`** - Reusable layout components (Navbar, Footer, Layout wrapper)
- **`/components/ui`** - shadcn/ui component library (49 components)
- **`/pages`** - Page-level components for routing
- **`/data`** - Static data files (products, blog posts, etc.)

---

## 🎨 Design System

### Color Palette

```css
/* Primary - Charcoal Black */
--primary: 0 0% 10%;

/* Accent - Olive Green */
--accent: 80 25% 35%;

/* Secondary - Warm Grey */
--secondary: 30 5% 92%;

/* Background */
--background: 0 0% 98%;
```

### Typography

- **Font Family**: Space Grotesk
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Custom Components

- **container-custom** - Responsive container with max-width
- **hover-lift** - Smooth lift animation on hover
- **text-gradient** - Gradient text effect
- **animate-fade-in** - Fade in animation
- **animate-fade-in-up** - Fade in with upward motion

---

## 🌐 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, featured products, sustainability highlights |
| **Shop** | `/shop` | Product catalog with filtering and sorting |
| **Product Detail** | `/product/:id` | Individual product page with details |
| **About** | `/about` | Company story, mission, values, and process |
| **Sustainability** | `/sustainability` | Environmental impact and sustainable practices |
| **Blog** | `/blog` | Fashion tips and sustainability articles |
| **Contact** | `/contact` | Contact form and company information |
| **404** | `*` | Not found page |

---

## 🔌 Integration Ready

The project is structured to easily integrate with:

- **Backend APIs** - Replace static data with API calls
- **Payment Gateways** - Stripe, PayPal integration ready
- **CMS** - Headless CMS for content management
- **Analytics** - Google Analytics, Mixpanel, etc.
- **Authentication** - Firebase, Auth0, or custom auth

---

## 📱 Responsive Design

Fully responsive across all devices:

- **Mobile** - 320px and up
- **Tablet** - 768px and up
- **Desktop** - 1024px and up
- **Large Desktop** - 1280px and up

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance (WCAG AA)

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Other Platforms

The project can be deployed to any static hosting service:
- **GitHub Pages**
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- **Firebase Hosting**

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 About the Developer

<div align="center">

### **Fady Gerges**
*Full-Stack Developer | Sustainable Tech Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-Fady2024-181717?style=for-the-badge&logo=github)](https://github.com/Fady2024/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady_Gerges-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/fady-gerges-kodsy/)
[![Facebook](https://img.shields.io/badge/Facebook-Fady_Gerges-1877F2?style=for-the-badge&logo=facebook)](https://www.facebook.com/fady.gerges.kodsy/)

---

**📧 Email:** [hello@reman.co](mailto:hello@reman.co)  
**📱 Phone:** [+20 111 111 1111](tel:+201111111111)  
**📍 Location:** Cairo, Egypt

---

### 💼 Skills & Technologies

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

### 🌟 About This Project

This project represents my commitment to combining modern web development with sustainable practices. **Reman** is more than just an e-commerce platform—it's a statement about the future of fashion and technology working together for a better planet.

### 🤝 Let's Connect!

I'm always open to collaborating on innovative projects, discussing sustainable tech solutions, or just connecting with fellow developers. Feel free to reach out through any of the platforms above!

</div>

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the amazing component library
- [Radix UI](https://www.radix-ui.com/) - For accessible primitives
- [Lucide](https://lucide.dev/) - For beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Lovable](https://lovable.dev/) - For the initial project scaffolding

---

<div align="center">

### 🌿 **Reman - Sustainable Fashion for the Modern Man**

**Made with 💚 by [Fady Gerges](https://github.com/Fady2024/)**

*Recycled • Redesigned • Restyled*

[![Star this repo](https://img.shields.io/github/stars/Fady2024/reman?style=social)](https://github.com/Fady2024/reman)

---

**© 2024 Reman. All rights reserved.**

</div>
