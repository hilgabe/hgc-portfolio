import { useEffect } from 'react'
import type { Project } from '../data/portfolio'
import { contact, projects } from '../data/portfolio'

export function CaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const contactUrl = `https://wa.me/${contact.phone}?text=${encodeURIComponent(`Olá, Hilson. Vi o estudo de caso ${project.title} e quero conversar sobre um projeto.`)}`

  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const previousDescription = description?.content
    const previousCanonical = canonical?.href
    document.title = `${project.title} — Estudo de caso | HGC`
    if (description) description.content = project.summary
    if (canonical) canonical.href = `https://hgc-portfolio.vercel.app/projetos/${project.slug}`
    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.content = previousDescription
      if (canonical && previousCanonical) canonical.href = previousCanonical
    }
  }, [project])

  return (
    <main className="case-study" id="main-content">
      <section className="case-hero" aria-labelledby="case-title">
        <a className="case-back" href="/#projetos">← Voltar aos projetos</a>
        <div className="case-hero__meta"><span>{project.label}</span><span><i aria-hidden="true" />{project.status}</span></div>
        <h1 id="case-title">{project.title}</h1>
        <p>{project.summary}</p>
        <div className="case-hero__actions">
          {project.liveUrl
            ? <a className="button-link button-link--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Abrir projeto publicado <span aria-hidden="true">↗</span></a>
            : <span className="case-private">{project.availabilityLabel}</span>}
          {project.repositoryUrl
            ? <a className="button-link button-link--ghost" href={project.repositoryUrl} target="_blank" rel="noreferrer">Ver repositório <span aria-hidden="true">↗</span></a>
            : <span className="case-private">{project.repositoryLabel}</span>}
        </div>
      </section>

      <section className={`case-media${project.mobileImage ? '' : ' case-media--single'}`} aria-label={`Capturas do projeto ${project.title}`}>
        <figure className="case-media__desktop">
          <img src={project.image} alt={`Tela desktop real do projeto ${project.title}`} width="1440" height="900" />
          <figcaption>Captura real · desktop</figcaption>
        </figure>
        {project.mobileImage && (
          <figure className="case-media__mobile">
            <img src={project.mobileImage} alt={`Tela mobile real do projeto ${project.title}`} width="390" height="844" loading="lazy" />
            <figcaption>Captura real · mobile</figcaption>
          </figure>
        )}
      </section>

      <section className="case-section" aria-labelledby="case-context-title">
        <div className="case-section__index">01 / PONTO DE PARTIDA</div>
        <div className="case-section__content">
          <h2 id="case-context-title">O problema antes da interface.</h2>
          <div className="case-facts">
            <div><h3>Contexto</h3><p>{project.context}</p></div>
            <div><h3>Quem utiliza</h3><p>{project.audience}</p></div>
            <div><h3>Antes da solução</h3><p>{project.before}</p></div>
          </div>
        </div>
      </section>

      <section className="case-section case-section--dark" aria-labelledby="case-decisions-title">
        <div className="case-section__index">02 / SOLUÇÃO E DECISÕES</div>
        <div className="case-section__content">
          <h2 id="case-decisions-title">Restrições claras.<br /><em>Decisões justificadas.</em></h2>
          <p className="case-lead">{project.solution}</p>
          <div className="case-columns">
            <div><h3>Restrições consideradas</h3><ul>{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h3>Principais decisões</h3><ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="case-role-title">
        <div className="case-section__index">03 / ATUAÇÃO E RESULTADO</div>
        <div className="case-section__content">
          <h2 id="case-role-title">O que eu fiz e o que pode ser observado.</h2>
          <div className="case-role">
            <div>
              <h3>Minha atuação</h3>
              <p>{project.role}</p>
            </div>
            <div>
              <h3>Resultados observáveis</h3>
              <ul className="case-checks">{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h3>Próximas melhorias</h3>
              <ul className="case-checks case-checks--next">{project.nextSteps.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="case-cta">
        <p>Precisa organizar uma jornada, produto ou processo semelhante?</p>
        <h2>Vamos conversar sobre o seu contexto.</h2>
        <a href={contactUrl} target="_blank" rel="noreferrer">Iniciar conversa no WhatsApp <span aria-hidden="true">↗</span></a>
      </section>

      <a className="next-case" href={`/projetos/${nextProject.slug}`}>
        <span>PRÓXIMO ESTUDO DE CASO</span><strong>{nextProject.title}</strong><i aria-hidden="true">→</i>
      </a>
    </main>
  )
}
