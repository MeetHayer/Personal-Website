import { Link, NavLink } from 'react-router-dom'
import LightSwitchToggle from './LightSwitchToggle'
import { Menu, X, Home, User, Code, PenTool, Mail, Sparkles } from 'lucide-react'
import { useState } from 'react'

const FloatingNavItem = ({ to, label, icon: Icon }: { to: string; label: string; icon: any }) => (
  <NavLink
    to={to}
    onClick={() => window.scrollTo(0, 0)}
    className={({ isActive }) =>
      `group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 hover:scale-110 ${
        isActive 
          ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25' 
          : 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-300 hover:bg-violet-50/80 dark:hover:bg-violet-500/10 border border-slate-200/50 dark:border-slate-700/50'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <Icon size={24} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'md:group-hover:scale-110'}`} />
        {/* Tooltip */}
        <div className="absolute left-full ml-3 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          {label}
        </div>
      </>
    )}
  </NavLink>
)

const NavItem = ({ to, label, icon: Icon }: { to: string; label: string; icon: any }) => (
  <NavLink
    to={to}
    onClick={() => window.scrollTo(0, 0)}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 relative group hover:scale-105 ${
        isActive 
          ? 'text-primary-600 bg-primary-50 shadow-lg dark:text-electric-300 dark:bg-electric-500/20 dark:shadow-electric-500/20' 
          : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50/50 dark:text-slate-300 dark:hover:text-electric-300 dark:hover:bg-electric-500/10'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <Icon size={20} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'md:group-hover:scale-110'}`} />
        <span>{label}</span>
      </>
    )}
  </NavLink>
)

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Floating Left Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        <FloatingNavItem to="/" label="Home" icon={Home} />
        <FloatingNavItem to="/about" label="About" icon={User} />
        <FloatingNavItem to="/projects" label="Projects" icon={Code} />
        <FloatingNavItem to="/writing" label="Writing" icon={PenTool} />
        <FloatingNavItem to="/contact" label="Contact" icon={Mail} />
      </nav>

      {/* Light Switch Toggle */}
      <LightSwitchToggle />

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/90 glass-effect">
        <div className="container flex items-center justify-between h-18">
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)}
            className="font-bold tracking-tight text-xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
          >
            Manmeet Singh Hayer
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-border/50 bg-background/95 backdrop-blur-md">
            <nav className="container py-4 flex flex-col gap-2">
              <NavItem to="/" label="Home" icon={Home} />
              <NavItem to="/about" label="About" icon={User} />
              <NavItem to="/projects" label="Projects" icon={Code} />
              <NavItem to="/writing" label="Writing" icon={PenTool} />
              <NavItem to="/contact" label="Contact" icon={Mail} />
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
