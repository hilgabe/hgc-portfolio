import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section className="projects-v3" id="projetos" aria-labelledby="projects-title">
      <div className="section-kicker section-kicker--light" data-reveal><span>01</span><p>PROJETOS SELECIONADOS / ABRA E CONFIRA</p></div>
      <div className="section-heading section-heading--dark" data-reveal>
        <h2 id="projects-title">Trabalho que você pode <em>investigar.</em></h2>
        <p>Projetos publicados, capturas reais e estudos de caso com contexto, decisões, responsabilidade e estágio atual.</p>
      </div>

      <div className="project-cards-v3">
        {projects.map((project, index) => (
          <article className="project-card-v3" key={project.slug} data-reveal>
            <a className="project-card-v3__image" href={`/projetos/${project.slug}`} aria-label={`Ler estudo de caso: ${project.title}`}>
              <img src={project.image} alt={`Captura real do projeto ${project.title}`} width="1440" height="900" loading="lazy" />
              <span>LER ESTUDO DE CASO ↗</span>
            </a>

            <div className="project-card-v3__body">
              <div className="project-card-v3__meta">
                <span>0{index + 1} / 03</span>
                <span><i aria-hidden="true" />{project.status}</span>
              </div>
              <p className="project-card-v3__label">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="project-card-v3__summary">{project.summary}</p>

              <ul className="tag-list" aria-label="Tecnologias utilizadas">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>

              <div className="project-card-v3__actions">
                <a href={`/projetos/${project.slug}`}>Ler estudo de caso <span aria-hidden="true">→</span></a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">Abrir projeto publicado <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
