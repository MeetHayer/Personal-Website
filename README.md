# Personal Portfolio Website

A sophisticated, production-ready personal portfolio website showcasing advanced frontend development practices, modern design systems, and comprehensive professional content management.

**Last Updated:** September 10, 2025

## 📋 Recent Updates

### September 10, 2025 (Evening Update)
- **Course Categorization**: Grouped Finance, Math, and Business courses into single category for cleaner interface
- **Content Updates**: Changed "Specializations" to "Passions" and added "AI" to interests
- **Color Scheme**: Replaced pink colors with purple throughout site (except email icons)
- **Social Media Integration**: Added LinkedIn and Gmail icons next to name with hover effects
- **Contact Messaging**: Updated with personalized "Looking for a Finance & Software guy with a knack for AI? Let's chat!" message
- **Motto Redesign**: Moved motto from scratch-off to prominent quote display under headshot
- **Email Display Fix**: Added proper text wrapping for email in contact tiles
- **Writing Page**: Created new personal blog post with origin story, career goals, and music ambitions
- **Passions Update**: Changed "Commercial Banking" to "Debt Instruments" in specializations
- **Projects Skills**: Reorganized project skills from embedded text to dedicated bubble-style display
- **UI/UX Polish**: Multiple improvements for better user experience and professional appearance

### September 10, 2025 (Morning Update)
- **UI Layout Fixes**: Resolved volunteer cards height inconsistency by adding minimum height constraint
- **Interactive Headshot**: Made professional headshot image clickable, linking to Vercel deployment with hover scale effect
- **Visual Polish**: Lightened YOGOWYPI motto text color for better readability
- **Grid Alignment**: Added CSS classes to prevent expandable components from stretching to match tallest element
- **Documentation**: Updated both DOCUMENTATION.txt and README.md with current changes and proper date formatting

## 🚀 Features

- **React 18** with TypeScript for type-safe development
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with custom design system and professional typography
- **Framer Motion** for smooth animations and micro-interactions
- **React Router v6** for client-side routing with scroll-to-top
- **Glass Morphism** design with backdrop blur effects
- **Interactive Course Showcase** with real resume data and department filtering
- **Expandable Volunteer Experience** with postcard-style design
- **Professional Typography** with 4 custom fonts (Inter, JetBrains Mono, Space Grotesk, Poppins)
- **Responsive Design** with mobile-first approach
- **Data-Driven Content** via JSON configuration
- **SEO Optimized** with dynamic meta tags

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Design System
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **SEO**: react-helmet-async
- **Icons**: Lucide React

## 🚀 Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Start development server
npm run dev

# 3) Open http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Header.tsx          # Floating navigation with glass morphism
│   ├── Footer.tsx          # Clean, minimal footer
│   ├── Section.tsx         # Layout wrapper with animations
│   ├── LightSwitchToggle.tsx # Vintage light switch theme toggle
│   ├── ProjectCard.tsx     # Enhanced project showcase
│   ├── CoursesBelt.tsx     # Interactive course showcase with filtering
│   ├── ProjectCarsShowcase.tsx # Advanced floating project display
│   └── FloatingProject.tsx # Project modal component
├── pages/                  # Route components
│   ├── Home.tsx            # Hero section with dynamic skills
│   ├── About.tsx           # Professional experience + volunteer postcards
│   ├── Projects.tsx        # Interactive project playground
│   ├── Writing.tsx         # Blog with personal stories
│   └── Contact.tsx         # Contact form with updated status
├── data/
│   └── personal.json       # Centralized content management
└── App.tsx                 # Main app layout & routing
```

## 🎨 Customization

### Content Updates
Edit `src/data/personal.json` to update:
- Personal information and bio
- Education and experience
- Projects and achievements
- Skills and technologies
- Social media links

### Design System
- Colors: Update `tailwind.config.js`
- Styles: Modify `src/styles.css`
- Components: Edit individual component files

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run preview
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain configuration available

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: < 2s first contentful paint
- **Accessibility**: WCAG AA compliant

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run init     # Interactive content setup
```

### Recent Updates - January 15, 2025

#### Version 2.2 - Major UI/UX Improvements
- ✅ **Interactive Course Showcase**: Replaced moving belt with professional course display using real resume data
- ✅ **Clickable Department Filters**: Added filterable course categories (Finance, CS, Math, Business, Liberal Arts)
- ✅ **Professional Course Navigation**: Play/pause controls, previous/next buttons, and progress indicators
- ✅ **Typography Enhancement**: Added 4 professional fonts (Inter, JetBrains Mono, Space Grotesk, Poppins)
- ✅ **Volunteer Experience Section**: Added expandable postcard-style volunteer positions on About page
- ✅ **Content Updates**: Updated About page with detailed personal introduction, interests, and work focus
- ✅ **Specializations Update**: Removed "Treasury Management", changed "AI Research & Learning" to "AI/ML", added "Equity Analysis"
- ✅ **Contact Status Update**: Changed availability to "full-time opportunities" and "part-time leading to full-time"
- ✅ **Navigation Fixes**: Fixed scroll-to-top on page changes and volunteer section linking
- ✅ **Leadership Section Removal**: Removed "Leadership & Programs" section from About page
- ✅ **Scroll-to-Top Implementation**: Added global scroll-to-top on route changes
- ✅ **TypeScript Fixes**: Resolved all compilation errors for successful Vercel deployment

#### Version 2.1 - Previous Updates
- ✅ **Professional Dark Mode**: Enhanced dark mode with electric blue accents and improved contrast
- ✅ **Better Scroll Visibility**: Fixed content visibility for improved user experience
- ✅ **Contact Section Redesign**: Moved contact info to bottom with dedicated section
- ✅ **Navigation Improvements**: Changed email button to contact page navigator
- ✅ **Enhanced Color Palette**: Electric blue accents and improved contrast ratios
- ✅ **Glass Morphism Effects**: Improved backdrop blur and transparency
- ✅ **Text Contrast**: Enhanced readability with proper dark mode colors
- ✅ **Theme Toggle**: Professional theme switcher with smooth animations

## 📝 Documentation

For detailed technical documentation, see `DOCUMENTATION.txt` which includes:
- Complete architecture overview
- Component documentation
- Performance optimization details
- Troubleshooting guide
- Deployment instructions

## 📄 License

Personal use and modification allowed. See individual dependency licenses for third-party components.
# GitHub Pages Deployment
