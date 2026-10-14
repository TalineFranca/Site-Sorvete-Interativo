import { useEffect, useState } from 'react'

const links = [
  { href: '#sabores', label: 'Sabores' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#contato', label: 'Localização' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className={`font-display text-2xl font-extrabold transition-colors ${
            scrolled ? 'text-wine' : 'text-cream'
          }`}
        >
          Arte <span className="text-mustard">Gelato</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-body text-sm font-bold uppercase tracking-wide transition-colors hover:text-mustard ${
                  scrolled ? 'text-ink' : 'text-cream'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-full bg-mustard px-5 py-2 font-display text-sm font-bold text-wine-dark shadow-soft transition hover:bg-mustard-light md:inline-block"
        >
          Visitar loja
        </a>

        <button
          aria-label="Abrir menu"
          className={`md:hidden ${scrolled ? 'text-wine' : 'text-cream'}`}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-wine/10 bg-cream px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base font-bold uppercase tracking-wide text-ink hover:text-wine"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
