export function Hero() {
  return (
    <section className="hero-v3" id="inicio" aria-labelledby="hero-title">
      <div className="hero-v3__mesh" aria-hidden="true" />

      <div className="hero-v3__grid">
        <div className="hero-v3__content">
          <p className="hero-v3__status"><i aria-hidden="true" /> DISPONÍVEL PARA NOVOS PROJETOS</p>
          <p className="hero-v3__eyebrow">DESENVOLVIMENTO WEB · SISTEMAS · INTEGRAÇÕES</p>
          <h1 id="hero-title">Soluções digitais para processos que precisam <em>funcionar melhor.</em></h1>
          <p className="hero-v3__summary">
            Eu ajudo empresas a transformar informações dispersas, tarefas manuais e jornadas confusas em experiências digitais claras e utilizáveis.
          </p>

          <div className="hero-v3__actions">
            <a className="button-link button-link--primary" href="#projetos" data-magnetic>
              Ver projetos reais <span aria-hidden="true">↓</span>
            </a>
            <a className="button-link button-link--ghost" href="#contato" data-magnetic>
              Falar sobre um problema <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-system" aria-label="Frentes de atuação: sites, sistemas e integrações">
          <div className="hero-system__top"><span>HGC / SISTEMA 01</span><i /><span>ONLINE</span></div>
          <div className="hero-system__core" aria-hidden="true">
            <div className="hero-system__orbit hero-system__orbit--one" />
            <div className="hero-system__orbit hero-system__orbit--two" />
            <img src="/brand/hgc-mark.png" alt="" />
            <span className="hero-system__node hero-system__node--one">WEB</span>
            <span className="hero-system__node hero-system__node--two">DADOS</span>
            <span className="hero-system__node hero-system__node--three">FLUXOS</span>
          </div>
          <div className="hero-system__services">
            <span><b>01</b> Sites e experiências web</span>
            <span><b>02</b> Sistemas internos</span>
            <span><b>03</b> Integrações e automações</span>
          </div>
          <div className="hero-system__foot"><span>SÃO LUÍS · MA</span><span>TECNOLOGIA APLICADA À OPERAÇÃO</span></div>
        </div>
      </div>
    </section>
  )
}
