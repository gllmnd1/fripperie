import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [isAdmin, setIsAdmin] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    let mounted = true
    ;(async ()=>{
      try{
        const res = await fetch('/api/admin/status')
        const j = await res.json()
        if(mounted) setIsAdmin(!!j.admin)
      }catch(e){}
    })()
    return ()=>{ mounted = false }
  }, [])

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold">F</div>
          <div>
            <div className="font-semibold">La Fripperie</div>
            <div className="text-xs text-gray-500">Mame Diarra</div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-[var(--accent)]">Accueil</Link>
            <Link href="/collections" className="hover:text-[var(--accent)]">Collections</Link>
            <Link href="/about" className="hover:text-[var(--accent)]">À propos</Link>
            <Link href="/contact" className="hover:text-[var(--accent)]">Contact</Link>
            {isAdmin ? (
              <Link href="/admin" className="text-[var(--accent)]">Dashboard</Link>
            ) : (
              <Link href="/admin" className="border px-3 py-1 rounded">Se connecter</Link>
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={()=>setOpen(o=>!o)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t bg-white`}> 
        <div className="container py-4 flex flex-col gap-3">
          <Link href="/" className="block hover:text-[var(--accent)]">Accueil</Link>
          <Link href="/collections" className="block hover:text-[var(--accent)]">Collections</Link>
          <Link href="/about" className="block hover:text-[var(--accent)]">À propos</Link>
          <Link href="/contact" className="block hover:text-[var(--accent)]">Contact</Link>
          {isAdmin ? (
            <Link href="/admin" className="block text-[var(--accent)]">Dashboard</Link>
          ) : (
            <Link href="/admin" className="block border px-3 py-2 rounded">Se connecter</Link>
          )}
        </div>
      </div>
    </header>
  )
}
