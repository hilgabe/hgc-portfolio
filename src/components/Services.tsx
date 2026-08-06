import { services } from '../data/portfolio'

export function Services() {
  return (
    <section className="section services" id="servicos" aria-labelledby="services-title">
      <div className="section-index" aria-hidden="true">02 / SERVIÇOS</div>
      <div className="section-heading section-heading--split" data-reveal>
        <div>
          <p className="eyebrow">O que posso construir</p>
          <h2 id="services-title">Tecnologia útil, com escopo honesto.</h2>
        </div>
        <p>
          Cada serviço parte de uma dor observável. Integrações, automações e assistentes são definidos conforme o
          canal, a infraestrutura e os custos reais de cada projeto.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <article className={service.featured ? 'service-card service-card--featured' : 'service-card'} key={service.title} data-reveal>
            <div className="service-card__top">
              <span>{service.number}</span>
              <span className="service-card__signal" aria-hidden="true" />
            </div>
            <h3>{service.title}</h3>
            <div className="service-card__copy">
              <p><strong>Problema</strong>{service.problem}</p>
              <p><strong>Entrega</strong>{service.delivery}</p>
            </div>
            <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
