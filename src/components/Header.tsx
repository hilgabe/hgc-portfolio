import { useState } from 'react'

const links = [
  ['Sobre', '#sobre'],
  ['Serviços', '#servicos'],
  ['Projetos', '#projetos'],
  ['Experiência', '#experiencia'],
  ['Contato', '#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="HGC — voltar ao início">
        <img src="/brand/hgc-mark.png" alt="" />
        <span>HGC</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Fechar' : 'Menu'}</span>
        <i aria-hidden="true" />
      </button>

      <nav className={open ? 'navigation is-open' : 'navigation'} id="main-navigation" aria-label="Navegação principal">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="navigation__cta" href="#contato" onClick={() => setOpen(false)}>Conversar sobre um projeto</a>
      </nav>
    </header>
  )
}
