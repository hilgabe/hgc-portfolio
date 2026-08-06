import { projects } from '../data/portfolio'

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === 'invest') {
    return (
      <div className="project-canvas project-canvas--invest" aria-label="Prévia conceitual do site Invest Corretora">
        <div className="canvas-browser"><i /><i /><i /><span>INVEST / SOLUÇÕES</span></div>
        <div className="invest-canvas">
          <span className="invest-canvas__seal">I</span>
          <p>Proteção começa com uma escolha bem orientada.</p>
          <div><span>Saúde</span><span>Vida</span><span>Empresa</span></div>
          <b>Falar com a Invest ↗</b>
        </div>
      </div>
    )
  }

  if (slug === 'opentask') {
    return (
      <div className="project-canvas project-canvas--opentask" aria-label="Prévia conceitual do sistema OpenTask">
        <aside><b>OT</b><i /><i /><i /></aside>
        <div className="opentask-canvas">
          <header><span>WORKSPACE / FILA OPERACIONAL</span><strong>12</strong></header>
          <p><i />Notebook sem acesso <span>EM ANÁLISE</span></p>
          <p><i />Entrega de equipamento <span>NOVO</span></p>
          <p><i />Ajuste de permissões <span>RESOLVIDO</span></p>
        </div>
      </div>
    )
  }

  return (
    <div className="project-canvas project-canvas--flow" aria-label="Prévia conceitual de um fluxo de atendimento">
      <div className="flow-grid" />
      <span className="flow-pill flow-pill--one">ENTRADA</span>
      <span className="flow-pill flow-pill--two">QUALIFICAR</span>
      <span className="flow-pill flow-pill--three">VALIDAR</span>
      <span className="flow-pill flow-pill--four">HUMANO</span>
      <i className="flow-route flow-route--one" /><i className="flow-route flow-route--two" /><i className="flow-route flow-route--three" />
      <div className="flow-console"><b>QA / EXECUÇÃO</b><span>persistência · fallback · webhook</span><i /></div>
    </div>
  )
}

export function Projects() {
  return (
    <section className="projects-v2" id="projetos" aria-labelledby="projects-title">
      <div className="section-kicker section-kicker--light" data-reveal><span>03</span><p>TRABALHO SELECIONADO / CASOS REAIS</p></div>
      <div className="projects-v2__heading" data-reveal>
        <h2 id="projects-title">Problemas reais.<br /><em>Soluções aplicáveis.</em></h2>
        <p>Projetos construídos a partir do contexto da operação, com decisões claras e tecnologia adequada ao momento de cada negócio.</p>
      </div>

      <div className="project-cards">
        {projects.map((project, index) => (
          <article className="project-card" key={project.slug} data-reveal>
            <div className="project-card__visual">
              <div className="project-card__visual-top"><span>0{index + 1}</span><span>{project.label}</span></div>
              <ProjectVisual slug={project.slug} />
            </div>
            <div className="project-card__content">
              <div className="project-card__status"><i />{project.status}</div>
              <h3>{project.title}</h3>
              <dl>
                <div><dt>Contexto</dt><dd>{project.context}</dd></div>
                <div><dt>Solução</dt><dd>{project.solution}</dd></div>
                <div><dt>Minha atuação</dt><dd>{project.role}</dd></div>
              </dl>
              <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
