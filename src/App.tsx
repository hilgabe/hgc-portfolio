import { useEffect } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { ScrollProgress } from './components/ScrollProgress'
import { experience, process, skillGroups } from './data/portfolio'

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (reducedMotion) {
      elements.forEach((element) => element.dataset.visible = 'true')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        ;(entry.target as HTMLElement).dataset.visible = 'true'
        observer.unobserve(entry.target)
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />

        <section className="section about" id="sobre" aria-labelledby="about-title">
          <div className="section-index" aria-hidden="true">01 / SOBRE</div>
          <div className="about__grid">
            <div data-reveal>
              <p className="eyebrow">Tecnologia com contexto</p>
              <h2 id="about-title">Antes do código, vem o entendimento do problema.</h2>
            </div>
            <div className="about__content" data-reveal>
              <p className="about__lead">
                Sou Hilson Gabriel Carvalho, graduando em Sistemas de Informação e profissional de tecnologia com
                experiência em suporte, operação e soluções empresariais.
              </p>
              <p>
                Trabalho próximo de processos comerciais e operacionais. Isso me ajuda a enxergar onde a informação
                se perde, onde a equipe repete tarefas e onde uma interface bem construída pode tornar o trabalho mais
                simples, rastreável e confiável.
              </p>
              <div className="about__facts" aria-label="Resumo profissional">
                <span><strong>Base</strong> São Luís, MA</span>
                <span><strong>Formação</strong> Sistemas de Informação</span>
                <span><strong>Atuação</strong> Web, sistemas e integrações</span>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Projects />

        <section className="section experience" id="experiencia" aria-labelledby="experience-title">
          <div className="section-index" aria-hidden="true">04 / EXPERIÊNCIA</div>
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Prática e repertório</p>
            <h2 id="experience-title">Tecnologia vista da operação, não apenas da tela.</h2>
          </div>

          <div className="experience__layout">
            <ol className="timeline" aria-label="Experiência profissional">
              {experience.map((item, index) => (
                <li key={item.organization} data-reveal>
                  <span className="timeline__marker">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="timeline__meta">{item.period}</p>
                    <h3>{item.role}</h3>
                    <p className="timeline__org">{item.organization}</p>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="skills" data-reveal>
              {skillGroups.map((group) => (
                <div className="skills__group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skills__list">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="processo" aria-labelledby="process-title">
          <div className="section-index" aria-hidden="true">05 / PROCESSO</div>
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Como o trabalho acontece</p>
            <h2 id="process-title">Do problema observado à solução validada.</h2>
          </div>
          <ol className="process__grid">
            {process.map((step, index) => (
              <li key={step.title} data-reveal>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <Contact />
      </main>

      <footer className="footer">
        <img src="/brand/hgc-mark.png" alt="" aria-hidden="true" />
        <p>HGC — tecnologia aplicada a problemas reais.</p>
        <p>© {new Date().getFullYear()} Hilson Gabriel Carvalho</p>
      </footer>
    </div>
  )
}

export default App
