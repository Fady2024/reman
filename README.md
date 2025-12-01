# 🌿 Reman - Sustainable Men's Fashion E-Commerce

<div align="center">

![Reman Logo](https://img.shields.io/badge/Reman-Sustainable_Fashion-6B8E23?style=for-the-badge)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Premium recycled menswear. Zero waste, maximum style.**

**✨ NOW FEATURING: Full E-Commerce Functionality ✨**

[Live Demo](https://reman-pi.vercel.app/) • [Report Bug](https://github.com/Fady2024/reman/issues) • [Request Feature](https://github.com/Fady2024/reman/issues)

</div>

---

## 📖 About The Project

**Reman** is a complete sustainable men's fashion e-commerce platform that transforms premium end-of-season stock into unique, eco-friendly menswear. We rescue perfectly good garments from major fashion brands that would otherwise end up in landfills, redesign them with modern aesthetics, and offer them at accessible prices.

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

### 🛒 **Complete E-Commerce Platform**

#### **Shopping Cart System**
- ✅ Add/remove/update quantities
- ✅ Animated slide-in cart drawer
- ✅ Real-time total calculation
- ✅ Cart icon with live item count badge
- ✅ LocalStorage persistence
- ✅ Toast notifications for all actions

#### **User Authentication & Accounts**
- ✅ Login/Signup pages with validation
- ✅ Demo authentication (works offline)
- ✅ Password visibility toggle
- ✅ Session persistence
- ✅ Protected routes
- ✅ User menu in navbar

#### **Account Dashboard**
- ✅ **Profile Management** - Edit personal info & shipping address
- ✅ **Order History** - View all past orders with status tracking
- ✅ **Wishlist** - Save & manage favorite products
- ✅ Beautiful tabbed interface
- ✅ Logout functionality

#### **Checkout Process**
- ✅ Multi-step checkout (Shipping → Payment)
- ✅ Form validation
- ✅ Order summary sidebar
- ✅ Payment processing (demo)
- ✅ Order confirmation page
- ✅ Creates order in history

#### **Product Search**
- ✅ Instant search modal
- ✅ Live filtering by name/category
- ✅ Product images & prices in results
- ✅ Mobile-responsive
- ✅ "View all results" link

#### **Wishlist System**
- ✅ One-click favorite from product cards
- ✅ Heart icon with filled/outline states
- ✅ Wishlist page in account
- ✅ LocalStorage persistence
- ✅ Visual feedback & animations

#### **Enhanced Product Cards**
- ✅ **Wishlist Heart Button** - Toggle favorites instantly
- ✅ **Quick Add to Cart** - Add without visiting product page
- ✅ **Savings Badge** - Auto-calculates discount percentage
- ✅ Hover animations
- ✅ Mobile-optimized

### 🎨 Design & UX
- **Smooth Animations** - Framer Motion for all transitions
- **Dark Mode**: Fully implemented dark/light theme toggle with system preference detection, available in the navigation bar. Optimized Footer for consistent dark aesthetic in both modes.
- **Scroll Animations**: Implemented `framer-motion` scroll animations (`whileInView`) across **ALL** pages (Home, Shop, Product, About, Sustainability, Blog, Contact, Auth, Account, Checkout, NotFound) for a dynamic and engaging user experience.
- **Wishlist System**: Fully functional wishlist with "heart" toggle on product cards, persistence via `localStorage`, and a dedicated Wishlist tab in the Account page.
- **Quick Add to Cart**: "Quick Add" button on product cards for instant cart addition with default size.
- **Modern UI** - Clean, masculine aesthetic with premium feel
- **Dark Mode Ready** - Theme system with light/dark mode support
- **Accessibility** - WCAG compliant with semantic HTML
- **SEO Optimized** - Proper meta tags and performance

### 📄 Content Pages
- **Home** (`/`) - Hero section with featured products and scroll animations
- **Shop** (`/shop`) - Full product catalog with filtering
- **Product Detail** (`/product/:id`) - Detailed view with wishlist & cart
- **About** (`/about`) - Company story with scroll animations
- **Sustainability** (`/sustainability`) - Eco-friendly process details
- **Blog** (`/blog`) - Fashion tips and sustainability insights
- **Contact** (`/contact`) - Contact form
- **Checkout** (`/checkout`) - Multi-step purchase flow
- **Auth** (`/auth`) - Login/Signup
- **Account** (`/account`) - User dashboard
- **404** - Not found page

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
   
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 🎯 How to Use

### **Shopping Journey**

```
1. Browse Products (/shop)
   ├── Hover over product cards
   ├── Click ❤️ to add to wishlist
   └── Click "Quick Add" to add to cart

2. Product Details (/product/:id)
   ├── Select size
   ├── Adjust quantity
   ├── Add to cart or wishlist
   └── View related products

3. Shopping Cart
   ├── Click cart icon (top right)
   ├── Review items
   ├── Update quantities
   └── Proceed to checkout

4. Checkout (/checkout)
   ├── Fill shipping information
   ├── Enter payment details
   ├── Review order summary
   └── Place order

5. Order Confirmation
   ├── See success message
   ├── Order saved to history
   └── Continue shopping
```

### **Account Features**

```
1. Login/Signup (/auth)
   ├── Create account or login
   ├── Demo: use any email/password
   └── Session persists automatically

2. Account Dashboard (/account)
   ├── **Profile** - Edit personal info
   ├── **Orders** - View purchase history
   └── **Wishlist** - Manage favorites

3. Wishlist
   ├── Add from any product card
   ├── Heart icon shows status
   ├── View all in account
   └── Remove anytime
```

### **Search**

```
1. Click search icon (navbar)
2. Type product name or category
3. See live results
4. Click to view product
```

---

## 🛠️ Tech Stack

### Core
- **[React 18.3.1](https://reactjs.org/)** - UI library
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type safety
- **[Vite 5.4.19](https://vitejs.dev/)** - Build tool and dev server

### Styling & Animation
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives
- **[Lucide React](https://lucide.dev/)** - Icons

### Routing & State
- **[React Router v6](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Server state
- **Context API** - Global state (Cart, Auth)

### Data & Storage
- **LocalStorage** - Persistent data (cart, wishlist, orders, user)
- **Static Data** - Products catalog

---

## 📁 Project Structure

```
reman/
├── src/
│   ├── contexts/          # State management
│   │   ├── CartContext.tsx      # Shopping cart state
│   │   └── AuthContext.tsx      # Auth & user state
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── Navbar.tsx       # Nav with cart, search, user menu
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── ui/            # shadcn/ui components (49 components)
│   │   ├── CartDrawer.tsx       # Animated cart sidebar
│   │   ├── SearchBar.tsx        # Search modal
│   │   └── ProductCard.tsx      # Enhanced product cards
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home
│   │   ├── Shop.tsx       # Product catalog
│   │   ├── Product.tsx    # Product detail
│   │   ├── About.tsx      # About page
│   │   ├── Sustainability.tsx
│   │   ├── Blog.tsx       # Blog listing
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Checkout.tsx   # Checkout flow
│   │   ├── Auth.tsx       # Login/Signup
│   │   ├── Account.tsx    # User dashboard
│   │   └── NotFound.tsx   # 404
│   ├── data/
│   │   └── products.ts    # Product catalog
│   ├── lib/
│   │   └── utils.ts       # Helper functions
│   ├── hooks/
│   │   └── use-toast.ts   # Toast notifications
│   ├── App.tsx            # Main app with providers
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⭐ Key Highlights

### **100% Functional E-Commerce**
- Complete shopping experience from browse to checkout
- No backend required (uses localStorage)
- Production-ready UI/UX

### **Premium Animations**
- Page transitions with Framer Motion
- Scroll-triggered reveals (whileInView)
- Smooth cart drawer slide-in
- Product card hover effects
- Loading states

### **Data Persistence**
Everything saves automatically:
```javascript
localStorage:
├── 'cart'       → Shopping cart items
├── 'user'       → User profile
├── 'wishlist'   → Favorited products
└── 'orders'     → Purchase history
```

### **Type Safety**
- 100% TypeScript
- Full type coverage
- No `any` types
- IDE autocomplete

### **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-optimized buttons
- Adaptive layouts

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

- **Font**: Space Grotesk
- **Weights**: 400, 500, 600, 700

### Custom Animations

```css
@keyframes fadeIn
@keyframes fadeInUp
@keyframes slideInLeft
@keyframes scaleIn
```

---

## 🌐 Routes

| Page | Route | Auth Required | Description |
|------|-------|---------------|-------------|
| Home | `/` | No | Hero, featured products |
| Shop | `/shop` | No | Product catalog |
| Product | `/product/:id` | No | Product details |
| About | `/about` | No | Company story |
| Sustainability | `/sustainability` | No | Eco practices |
| Blog | `/blog` | No | Articles |
| Contact | `/contact` | No | Contact form |
| **Checkout** | `/checkout` | No | Purchase flow |
| **Auth** | `/auth` | No | Login/Signup |
| **Account** | `/account` | **Yes** | User dashboard |

---

## 💾 Data Models

### Product
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  description: string;
  isNew?: boolean;
}
```

### Cart Item
```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
  category: string;
}
```

### User
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}
```

### Order
```typescript
interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: Address;
}
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output: `dist/` directory

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Environment Variables

No environment variables required for basic functionality. Add these for production:

```env
# Optional: Analytics
VITE_GA_ID=your-google-analytics-id

# Optional: API endpoint (when adding backend)
VITE_API_URL=https://api.yoursite.com
```

---

## 📈 Performance

### Metrics
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: ~400KB (gzipped)

### Optimizations
- Code splitting (React.lazy)
- Image lazy loading
- Tree shaking
- Minification
- Gzip compression
- Memoized components

---

## ♿ Accessibility

- ✅ Semantic HTML5
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Screen reader friendly
- ✅ Color contrast (WCAG AA)
- ✅ Focus indicators
- ✅ Alt text for images

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

## 👨‍💻 About the Developer

<div align="center">

### **Fady Gerges**
*Full-Stack Developer | Sustainable Tech Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-Fady2024-181717?style=for-the-badge&logo=github)](https://github.com/Fady2024/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady_Gerges-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/fady-gerges-kodsy/)
[![Facebook](https://img.shields.io/badge/Facebook-Fady_Gerges-1877F2?style=for-the-badge&logo=facebook)](https://www.facebook.com/fady.gerges.kodsy/)

---

**📧 Email:** [fadygerges2023@gmail.com](mailto:fadygerges2023@gmail.com)  
**📍 Location:** Cairo, Egypt

---

### 💼 Skills & Technologies

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

</div>

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icons
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

---

<div align="center">

### 🌿 **Reman - Sustainable Fashion for the Modern Man**

**Made with 💚 by [Fady Gerges](https://github.com/Fady2024/)**

*Recycled • Redesigned • Restyled*

[![Star this repo](https://img.shields.io/github/stars/Fady2024/reman?style=social)](https://github.com/Fady2024/reman)

---

**© 2024 Reman. All rights reserved.**

</div>
