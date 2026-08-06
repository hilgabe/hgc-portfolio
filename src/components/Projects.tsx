import { projects } from '../data/portfolio'

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === 'invest') {
    return (
      <div className="project-visual project-visual--invest" aria-label="Composição visual do site Invest Corretora">
        <div className="mock-browser"><i /><i /><i /><span>INVEST / SOLUÇÕES</span></div>
        <div className="invest-screen">
          <p>Proteção começa com uma escolha bem orientada.</p>
          <div><span>Saúde</span><span>Vida</span><span>Empresa</span></div>
          <button tabIndex={-1}>Falar com a Invest</button>
        </div>
      </div>
    )
  }

  if (slug === 'opentask') {
    return (
      <div className="project-visual project-visual--opentask" aria-label="Composição visual do sistema OpenTask">
        <div className="task-sidebar"><b>OT</b><i /><i /><i /></div>
        <div className="task-board">
          <div><span>Fila operacional</span><strong>12</strong></div>
          <div className="task-row"><i /> Notebook sem acesso <span>Em análise</span></div>
          <div className="task-row"><i /> Entrega de equipamento <span>Novo</span></div>
          <div className="task-row"><i /> Ajuste de permissões <span>Resolvido</span></div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual project-visual--flow" aria-label="Composição visual de um fluxo de atendimento">
      <span className="flow-node flow-node--start">Entrada</span>
      <span className="flow-node flow-node--qualify">Qualificar</span>
      <span className="flow-node flow-node--check">Validar</span>
      <span className="flow-node flow-node--human">Humano</span>
      <i className="flow-line flow-line--a" /><i className="flow-line flow-line--b" /><i className="flow-line flow-line--c" />
      <div className="flow-log"><b>QA / EXECUÇÃO</b><span>persistência · fallback · webhook</span></div>
    </div>
  )
}

export function Projects() {
  return (
    <section className="section projects" id="projetos" aria-labelledby="projects-title">
      <div className="section-index" aria-hidden="true">03 / PROJETOS</div>
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Trabalho selecionado</p>
        <h2 id="projects-title">Projetos explicados pelo problema que resolvem.</h2>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <article className="project" key={project.slug} data-reveal>
            <div className="project__number">{String(index + 1).padStart(2, '0')}</div>
            <div className="project__copy">
              <p className="project__label">{project.label}</p>
              <h3>{project.title}</h3>
              <dl>
                <div><dt>Contexto</dt><dd>{project.context}</dd></div>
                <div><dt>Solução</dt><dd>{project.solution}</dd></div>
                <div><dt>Atuação</dt><dd>{project.role}</dd></div>
              </dl>
              <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <p className="project__status"><i /> {project.status}</p>
            </div>
            <ProjectVisual slug={project.slug} />
          </article>
        ))}
      </div>
    </section>
  )
}
