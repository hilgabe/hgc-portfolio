import { useState } from 'react'
import { services } from '../data/portfolio'
import { SectionAtmosphere } from './SectionAtmosphere'

export function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section className="services-v2" id="servicos" aria-labelledby="services-title">
      <SectionAtmosphere variant="services" />
      <div className="section-kicker" data-reveal><span>02</span><p>SERVIÇOS / O QUE POSSO CONSTRUIR</p></div>
      <div className="section-heading" data-reveal>
        <h2 id="services-title">Tecnologia útil.<br /><em>Escopo honesto.</em></h2>
        <p>Todo projeto começa com um diagnóstico do processo. A ferramenta entra depois, quando já está claro o que precisa melhorar.</p>
      </div>

      <div className="service-accordion" data-reveal>
        {services.map((service, index) => {
          const active = open === index
          return (
            <article className={active ? 'service-row is-open' : 'service-row'} key={service.number}>
              <button
                id={`service-button-${index}`}
                type="button"
                aria-expanded={active}
                aria-controls={`service-panel-${index}`}
                onClick={() => setOpen(active ? -1 : index)}
              >
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <i aria-hidden="true">{active ? '−' : '+'}</i>
              </button>
              <div
                className="service-row__reveal"
                id={`service-panel-${index}`}
                role="region"
                aria-labelledby={`service-button-${index}`}
                aria-hidden={!active}
              >
                <div>
                  <p><b>O problema</b>{service.problem}</p>
                  <p><b>O que entrego</b>{service.delivery}</p>
                  <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
