import { useEffect, useState } from 'react'
import { Moon, Sun, Zap } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  const handleToggle = () => {
    setIsAnimating(true)
    setDark(d => !d)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <button 
      className={`btn group relative overflow-hidden transition-all duration-300 ${
        dark 
          ? 'bg-gradient-to-r from-electric-500 to-electric-600 text-white border-electric-500 hover:from-electric-600 hover:to-electric-700' 
          : 'bg-gradient-to-r from-slate-600 to-slate-700 text-white border-slate-600 hover:from-slate-500 hover:to-slate-600'
      } ${isAnimating ? 'scale-95' : 'scale-100'}`}
      onClick={handleToggle} 
      aria-label="Toggle theme"
    >
      <div className="flex items-center gap-2 relative z-10">
        {dark ? (
          <Sun size={18} className="group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        )}
        <span className="font-medium">
          {dark ? 'Light' : 'Dark'}
        </span>
      </div>
      
      {/* Tesla-inspired electric effect */}
      {dark && (
        <div className="absolute inset-0 bg-gradient-to-r from-electric-400/20 to-electric-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Animated background effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 transition-transform duration-500 ${
        isAnimating ? 'translate-x-full' : '-translate-x-full'
      }`} />
    </button>
  )
}
