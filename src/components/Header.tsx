import { useEffect, useRef, useState } from 'react'

const links = [
  ['Projetos', '/#projetos'],
  ['Serviços', '/#servicos'],
  ['Sobre', '/#sobre'],
  ['Contato', '/#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const navigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.dataset.menuOpen = open ? 'true' : 'false'
    const background = document.querySelectorAll<HTMLElement>('.site-shell > main, .site-shell > footer')
    background.forEach((element) => { element.inert = open })

    const focusable = () => [...(navigationRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? [])]
    const focusTimer = open
      ? window.setTimeout(() => focusable()[0]?.focus({ preventScroll: true }), 40)
      : undefined

    const handleKeyboard = (event: KeyboardEvent) => {
      if (!open) return
      if (event.key === 'Escape') {
        setOpen(false)
        window.requestAnimationFrame(() => toggleRef.current?.focus())
        return
      }
      if (event.key !== 'Tab') return
      const items = focusable()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => {
      background.forEach((element) => { element.inert = false })
      if (focusTimer) window.clearTimeout(focusTimer)
      delete document.body.dataset.menuOpen
      window.removeEventListener('keydown', handleKeyboard)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={scrolled ? 'header is-scrolled' : 'header'}>
      <a className="brand" href="/#inicio" aria-label="HGC — voltar ao início">
        <img src="/brand/hgc-mark.png" alt="" />
        <span><b>Hilson Gabriel</b><small>Desenvolvedor</small></span>
      </a>

      <nav className="header__links" aria-label="Navegação principal">
        {links.map(([label, href]) => (
          <a key={href} href={href} data-magnetic>{label}</a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Fechar' : 'Menu'}</span><i aria-hidden="true" /><i aria-hidden="true" />
      </button>

      <div className={open ? 'menu-layer is-open' : 'menu-layer'} aria-hidden={!open}>
        <div className="menu-layer__wash" onClick={closeMenu} aria-hidden="true" />
        <nav className="navigation" ref={navigationRef} id="mobile-navigation" aria-label="Navegação móvel">
          <p>NAVEGAÇÃO</p>
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{label}<i aria-hidden="true">↗</i>
            </a>
          ))}
          <div className="navigation__foot">
            <span>São Luís — MA</span><span>Disponível para novos projetos</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
