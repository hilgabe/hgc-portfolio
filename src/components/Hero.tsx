export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__meta" data-reveal>
          <span>Hilson Gabriel Carvalho</span>
          <span>Desenvolvedor de soluções digitais</span>
        </div>

        <h1 id="hero-title" data-reveal>
          Processos confusos.<br />
          <span>Soluções digitais claras.</span>
        </h1>

        <div className="hero__bottom">
          <p data-reveal>
            Desenvolvimento web, sistemas internos e integrações para empresas que precisam organizar atendimento,
            operação e informação.
          </p>
          <div className="hero__actions" data-reveal>
            <a className="button button--primary" href="#projetos">Conhecer projetos <span aria-hidden="true">↘</span></a>
            <a className="button button--text" href="#contato">Apresentar um problema <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>

      <div className="system-map" aria-hidden="true">
        <div className="system-map__brand"><img src="/brand/hgc-mark.png" alt="" /></div>
        <span className="node node--problem">problema</span>
        <span className="node node--process">processo</span>
        <span className="node node--interface">interface</span>
        <span className="node node--result">resultado</span>
        <i className="route route--one" />
        <i className="route route--two" />
        <i className="route route--three" />
      </div>

      <div className="hero__availability"><i /> Projetos independentes sob consulta</div>
    </section>
  )
}
