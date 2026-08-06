import { useState } from 'react'
import { services } from '../data/portfolio'

export function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section className="services-v2" id="servicos" aria-labelledby="services-title">
      <div className="section-kicker" data-reveal><span>02</span><p>SERVIÇOS / O QUE POSSO CONSTRUIR</p></div>
      <div className="services-v2__heading" data-reveal>
        <h2 id="services-title">Tecnologia útil.<br /><em>Escopo honesto.</em></h2>
        <p>Não começo pela ferramenta. Primeiro entendo a dor, o processo e o que precisa melhorar de verdade.</p>
      </div>

      <div className="service-accordion" data-reveal>
        {services.map((service, index) => {
          const active = open === index
          return (
            <article className={active ? 'service-row is-open' : 'service-row'} key={service.number}>
              <button
                type="button"
                aria-expanded={active}
                onClick={() => setOpen(active ? -1 : index)}
                onMouseEnter={() => setOpen(index)}
                data-cursor={active ? 'LER' : 'ABRIR'}
              >
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <i aria-hidden="true">{active ? '−' : '+'}</i>
              </button>
              <div className="service-row__reveal">
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
