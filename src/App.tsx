import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Preloader } from './components/Preloader'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { experience, process, skillGroups } from './data/portfolio'

function App() {
  const [ready, setReady] = useState(false)
  const finishLoading = useCallback(() => setReady(true), [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.dataset.visible = 'true')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        ;(entry.target as HTMLElement).dataset.visible = 'true'
        observer.unobserve(entry.target)
      }),
      { threshold: 0.1, rootMargin: '0px 0px -7% 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const magnetic = document.querySelectorAll<HTMLElement>('[data-magnetic]')

    const cleanups = [...magnetic].map((element) => {
      const move = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18
        element.style.setProperty('--magnetic-x', `${x}px`)
        element.style.setProperty('--magnetic-y', `${y}px`)
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
  }, [ready])

  return (
    <div className={ready ? 'site-shell is-ready' : 'site-shell'}>
      {!ready && <Preloader onDone={finishLoading} />}
      <CustomCursor />
      <Header />

      <main>
        <Hero ready={ready} />

        <section className="manifesto" id="sobre" aria-labelledby="manifesto-title">
          <div className="section-kicker" data-reveal><span>01</span><p>SOBRE / COMO EU PENSO</p></div>
          <div className="manifesto__layout">
            <h2 id="manifesto-title" data-reveal>
              Eu não entrego apenas uma tela.<br />Eu entendo o processo, encontro o ruído e transformo isso em uma solução que a equipe consegue <em>usar.</em>
            </h2>
            <div className="manifesto__aside" data-reveal>
              <div className="orbit-seal" aria-hidden="true">
                <svg viewBox="0 0 120 120"><defs><path id="orbit" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs><text><textPath href="#orbit">HGC · TECNOLOGIA · PROCESSO · RESULTADO · </textPath></text></svg>
                <img src="/brand/hgc-mark.png" alt="" />
              </div>
              <p>Graduando em Sistemas de Informação e profissional de tecnologia com experiência próxima da operação, do suporte e dos processos empresariais.</p>
              <a href="#experiencia" data-magnetic data-cursor="VER">Conhecer minha trajetória <span>↘</span></a>
            </div>
          </div>
        </section>

        <Services />
        <Projects />

        <section className="experience-v2" id="experiencia" aria-labelledby="experience-title">
          <div className="section-kicker" data-reveal><span>04</span><p>TRAJETÓRIA / EXPERIÊNCIA</p></div>
          <div className="experience-v2__heading" data-reveal>
            <h2 id="experience-title">Tecnologia vista da<br /><em>operação real.</em></h2>
            <p>Meu repertório combina desenvolvimento, suporte e leitura de processos. É essa proximidade com o dia a dia que orienta as soluções.</p>
          </div>

          <ol className="experience-list">
            {experience.map((item, index) => (
              <li key={item.organization} data-reveal>
                <span>0{index + 1}</span>
                <div><p>{item.period}</p><h3>{item.role}</h3></div>
                <div><strong>{item.organization}</strong><p>{item.description}</p></div>
              </li>
            ))}
          </ol>

          <div className="technology-ribbon" aria-label="Tecnologias e competências">
            <div>
              {[...skillGroups.flatMap((group) => group.items), ...skillGroups.flatMap((group) => group.items)].map((item, index) => (
                <span key={`${item}-${index}`}>{item}<i>·</i></span>
              ))}
            </div>
          </div>
        </section>

        <section className="process-v2" id="processo" aria-labelledby="process-title">
          <div className="section-kicker section-kicker--light" data-reveal><span>05</span><p>PROCESSO / DO PROBLEMA À ENTREGA</p></div>
          <div className="process-v2__heading" data-reveal>
            <h2 id="process-title">Clareza antes<br />da <em>complexidade.</em></h2>
            <p>Um caminho visível, com decisões explicadas e validação ao longo do projeto.</p>
          </div>
          <ol className="process-track">
            {process.map((step, index) => (
              <li key={step.title} data-reveal>
                <span>0{index + 1}</span><i aria-hidden="true" />
                <h3>{step.title}</h3><p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <Contact />
      </main>

      <footer className="footer-v2">
        <a href="#inicio" className="footer-v2__brand" data-cursor="TOPO"><img src="/brand/hgc-mark.png" alt="" /><span>HGC</span></a>
        <p>TECNOLOGIA APLICADA A PROBLEMAS REAIS.</p>
        <div><a href="https://github.com/hilgabe" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/hgcba/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <span>© {new Date().getFullYear()} HILSON GABRIEL CARVALHO</span>
      </footer>
    </div>
  )
}

export default App
