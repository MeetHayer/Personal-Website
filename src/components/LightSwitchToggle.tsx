import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function LightSwitchToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* Light Switch Plate with 3D effect */}
        <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-2xl border-2 border-gray-500 transform perspective-1000">
          {/* Switch Body with 3D depth */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg border-2 border-gray-400 shadow-inner">
            {/* Switch Toggle with enhanced 3D effect */}
            <button
              onClick={toggleTheme}
              className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full transition-all duration-300 ease-in-out ${
                isDark 
                  ? 'top-1 bg-gradient-to-b from-yellow-200 to-yellow-300 shadow-2xl shadow-yellow-400/50' 
                  : 'top-7 bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg shadow-gray-400/50'
              }`}
              style={{
                transform: isDark ? 'translateX(-50%) translateY(0) scale(1.05)' : 'translateX(-50%) translateY(0) scale(1)',
                boxShadow: isDark 
                  ? '0 8px 16px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.3)' 
                  : '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5)'
              }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center">
                {isDark ? (
                  <Moon size={14} className="text-gray-700 drop-shadow-sm" />
                ) : (
                  <Sun size={14} className="text-yellow-600 drop-shadow-sm" />
                )}
              </div>
            </button>
            
            {/* Switch Track with 3D effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-gray-500 to-gray-300 rounded-full top-2 shadow-inner"></div>
          </div>
          
          {/* Switch Label with better contrast */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 dark:text-gray-200 drop-shadow-sm">
            {isDark ? 'OFF' : 'ON'}
          </div>
        </div>
      </div>
    </div>
  )
}
