import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-4 py-2 rounded-xl font-medium transition-all duration-300 relative group ${
        isActive 
          ? 'text-primary-600 bg-primary-50 shadow-sm dark:text-electric-300 dark:bg-electric-500/20 dark:shadow-electric-500/20' 
          : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50/50 dark:text-slate-300 dark:hover:text-electric-300 dark:hover:bg-electric-500/10'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {label}
        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full dark:from-electric-500 dark:to-accent-400 ${isActive ? 'w-full' : ''}`} />
      </>
    )}
  </NavLink>
)

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/90 glass-effect">
      <div className="container flex items-center justify-between h-18">
        <Link 
          to="/" 
          className="font-bold tracking-tight text-xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hover:from-primary-700 hover:to-accent-700 transition-all duration-300 dark:tesla-gradient-text dark:hover:tesla-gradient-text"
        >
          Manmeet Singh Hayer
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/writing" label="Writing" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <nav className="container py-4 flex flex-col gap-2">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/projects" label="Projects" />
            <NavItem to="/writing" label="Writing" />
            <NavItem to="/contact" label="Contact" />
          </nav>
        </div>
      )}
    </header>
  )
}
