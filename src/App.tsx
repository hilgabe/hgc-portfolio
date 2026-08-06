import { useEffect } from 'react'
import './App.css'
import { CaseStudy } from './components/CaseStudy'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { experience, process, projects, skillGroups } from './data/portfolio'

function Footer() {
  return (
    <footer className="footer-v3">
      <a href="/#inicio" className="footer-v3__brand"><img src="/brand/hgc-mark.png" alt="" /><span>HGC</span></a>
      <p>TECNOLOGIA APLICADA A PROBLEMAS REAIS.</p>
      <div><a href="https://github.com/hilgabe" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/hgcba/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      <span>© {new Date().getFullYear()} HILSON GABRIEL CARVALHO</span>
    </footer>
  )
}

function HomePage() {
  return (
    <main id="main-content">
      <Hero />

      <section className="proof-strip" aria-label="Informações profissionais verificáveis">
        <div><span>ATUAÇÃO</span><strong>Web, sistemas e integrações</strong></div>
        <div><span>EXPERIÊNCIA</span><strong>Suporte de TI e operação</strong></div>
        <div><span>FORMAÇÃO</span><strong>Sistemas de Informação · em curso</strong></div>
        <div><span>LOCALIZAÇÃO</span><strong>São Luís · Maranhão</strong></div>
      </section>

      <Projects />
      <Services />

      <section className="experience-v3" id="sobre" aria-labelledby="experience-title">
        <div className="section-kicker" data-reveal><span>03</span><p>SOBRE / EXPERIÊNCIA E REPERTÓRIO</p></div>
        <div className="section-heading" data-reveal>
          <h2 id="experience-title">Tecnologia vista da <em>operação real.</em></h2>
          <p>Meu repertório combina desenvolvimento, suporte e proximidade com quem usa a solução no dia a dia.</p>
        </div>

        <ol className="experience-list-v3">
          {experience.map((item, index) => (
            <li key={item.organization} data-reveal>
              <span>0{index + 1}</span>
              <div><p>{item.period}</p><h3>{item.role}</h3></div>
              <div><strong>{item.organization}</strong><p>{item.description}</p></div>
            </li>
          ))}
        </ol>

        <div className="skills-grid" data-reveal>
          {skillGroups.map((group, index) => (
            <section key={group.title} aria-labelledby={`skill-group-${index}`}>
              <h3 id={`skill-group-${index}`}>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ))}
        </div>
      </section>

      <section className="process-v3" id="processo" aria-labelledby="process-title">
        <div className="section-kicker section-kicker--light" data-reveal><span>04</span><p>COMO TRABALHO / ENTREGAS VISÍVEIS</p></div>
        <div className="section-heading section-heading--dark" data-reveal>
          <h2 id="process-title">Quatro etapas.<br /><em>Nenhuma caixa-preta.</em></h2>
          <p>O cliente sabe o que está sendo decidido, construído e entregue em cada fase.</p>
        </div>
        <ol className="process-grid">
          {process.map((step, index) => (
            <li key={step.title} data-reveal>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <strong>{step.deliverable}</strong>
            </li>
          ))}
        </ol>
      </section>

      <Contact />
    </main>
  )
}

function App() {
  const slug = window.location.pathname.match(/^\/projetos\/([^/]+)\/?$/)?.[1]
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => { element.dataset.visible = 'true' })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        ;(entry.target as HTMLElement).dataset.visible = 'true'
        observer.unobserve(entry.target)
      }),
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [project])

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const magnetic = document.querySelectorAll<HTMLElement>('[data-magnetic]')
    const cleanups = [...magnetic].map((element) => {
      const move = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect()
        element.style.setProperty('--magnetic-x', `${(event.clientX - rect.left - rect.width / 2) * 0.12}px`)
        element.style.setProperty('--magnetic-y', `${(event.clientY - rect.top - rect.height / 2) * 0.12}px`)
      }
      const reset = () => {
        element.style.setProperty('--magnetic-x', '0px')
        element.style.setProperty('--magnetic-y', '0px')
      }
      element.addEventListener('pointermove', move)
      element.addEventListener('pointerleave', reset)
      return () => {
        element.removeEventListener('pointermove', move)
        element.removeEventListener('pointerleave', reset)
      }
    })
    return () => cleanups.forEach((cleanup) => cleanup())
  }, [project])

  return (
    <div className="site-shell">
      <CustomCursor />
      <Header />
      {project ? <CaseStudy project={project} /> : <HomePage />}
      <Footer />
    </div>
  )
}

export default App
