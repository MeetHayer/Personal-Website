import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'

type Item = { label: string; to: string; keywords?: string[] }

const items: Item[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Writing', to: '/writing' },
  { label: 'Contact', to: '/contact' },
]

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      if ((isMac && e.metaKey && e.key.toLowerCase() === 'k') || (!isMac && e.ctrlKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return items
    return items.filter(i => i.label.toLowerCase().includes(s) || i.keywords?.some(k => k.includes(s)))
  }, [q])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center p-4">
      <div className="w-full max-w-xl card p-2 overflow-hidden">
        <div className="flex items-center gap-2 p-2 border-b border-border">
          <Search size={18} className="opacity-70" />
          <input
            autoFocus
            placeholder="Type a page… (Esc to close)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 bg-transparent outline-none"
          />
          <button className="btn" onClick={() => setOpen(false)}><X size={16} /> Close</button>
        </div>

        <ul className="max-h-80 overflow-auto">
          {filtered.map(i => (
            <li key={i.to}>
              <button
                className="w-full text-left px-3 py-3 hover:bg-muted transition"
                onClick={() => { setOpen(false); navigate(i.to) }}
              >
                {i.label}
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-3 py-3 opacity-70">No matches</li>
          )}
        </ul>
      </div>
    </div>
  )
}
