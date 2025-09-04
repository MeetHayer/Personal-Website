import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <button className="btn" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}
