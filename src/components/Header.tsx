import { useEffect, useState } from 'react'

const links = [
  ['Trabalho', '#projetos'],
  ['Sobre', '#sobre'],
  ['Serviços', '#servicos'],
  ['Contato', '#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.dataset.menuOpen = open ? 'true' : 'false'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      delete document.body.dataset.menuOpen
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <header className={scrolled ? 'header is-scrolled' : 'header'}>
      <a className="brand" href="#inicio" aria-label="HGC — voltar ao início">
        <img src="/brand/hgc-mark.png" alt="" />
        <span><b>Hilson Gabriel</b><small>Desenvolvedor</small></span>
      </a>

      <nav className="header__links" aria-label="Navegação rápida">
        {links.slice(0, 3).map(([label, href]) => (
          <a key={href} href={href} data-magnetic data-cursor="IR">{label}</a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((value) => !value)}
        data-cursor={open ? 'FECHAR' : 'MENU'}
      >
        <span>{open ? 'Fechar' : 'Menu'}</span><i aria-hidden="true" /><i aria-hidden="true" />
      </button>

      <div className={open ? 'menu-layer is-open' : 'menu-layer'} aria-hidden={!open}>
        <div className="menu-layer__wash" />
        <nav className="navigation" id="main-navigation" aria-label="Navegação principal">
          <p>NAVEGAÇÃO</p>
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
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
