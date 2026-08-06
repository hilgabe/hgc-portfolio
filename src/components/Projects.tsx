import { useState } from 'react'
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
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState<string | null>(projects[0].slug)
  const project = projects[active]

  return (
    <section className="projects-v2" id="projetos" aria-labelledby="projects-title">
      <div className="section-kicker section-kicker--light" data-reveal><span>03</span><p>TRABALHO SELECIONADO / CASOS REAIS</p></div>
      <div className="projects-v2__heading" data-reveal>
        <h2 id="projects-title">Trabalho que começa<br />com um <em>problema.</em></h2>
        <p>Passe pelos projetos para explorar. Clique para entender o contexto, a solução e a minha atuação.</p>
      </div>

      <div className="project-showcase">
        <div className="project-list" data-reveal>
          {projects.map((item, index) => {
            const isExpanded = expanded === item.slug
            return (
              <article className={active === index ? 'project-row is-active' : 'project-row'} key={item.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => {
                    setActive(index)
                    setExpanded(isExpanded ? null : item.slug)
                  }}
                  aria-expanded={isExpanded}
                  data-cursor="ABRIR"
                >
                  <span>0{index + 1}</span>
                  <div><h3>{item.title}</h3><p>{item.label}</p></div>
                  <i aria-hidden="true">↗</i>
                </button>
                <div className={isExpanded ? 'project-row__details is-open' : 'project-row__details'}>
                  <div>
                    <p><b>Contexto</b>{item.context}</p>
                    <p><b>Solução</b>{item.solution}</p>
                    <p><b>Atuação</b>{item.role}</p>
                    <ul>{item.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="project-stage" data-reveal aria-live="polite">
          <div className="project-stage__frame" key={project.slug}>
            <div className="project-stage__top"><span>{project.label}</span><span>0{active + 1} / 03</span></div>
            <ProjectVisual slug={project.slug} />
            <div className="project-stage__status"><i />{project.status}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
