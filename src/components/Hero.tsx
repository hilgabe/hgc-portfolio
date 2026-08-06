import { useEffect, useRef } from 'react'

export function Hero({ ready }: { ready: boolean }) {
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = mediaRef.current
    if (!media || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const move = (event: PointerEvent) => {
      const rect = media.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8
      media.style.setProperty('--portrait-x', `${x}px`)
      media.style.setProperty('--portrait-y', `${y}px`)
    }
    const reset = () => {
      media.style.setProperty('--portrait-x', '0px')
      media.style.setProperty('--portrait-y', '0px')
    }

    media.addEventListener('pointermove', move)
    media.addEventListener('pointerleave', reset)
    return () => {
      media.removeEventListener('pointermove', move)
      media.removeEventListener('pointerleave', reset)
    }
  }, [])

  return (
    <section className={ready ? 'hero-v2 is-ready' : 'hero-v2'} id="inicio" aria-labelledby="hero-title">
      <div className="hero-v2__mesh" aria-hidden="true" />

      <div className="hero-v2__grid">
        <div className="hero-v2__content hero-enter">
          <p className="hero-v2__status"><i aria-hidden="true" /> DISPONÍVEL PARA NOVOS PROJETOS</p>
          <p className="hero-v2__eyebrow">HILSON GABRIEL CARVALHO · DESENVOLVEDOR</p>
          <h1 id="hero-title">Soluções digitais para processos que precisam <em>funcionar melhor.</em></h1>
          <p className="hero-v2__summary">
            Desenvolvo sites, sistemas internos e integrações sob medida — com clareza de escopo, tecnologia viável e foco no que a empresa realmente precisa resolver.
          </p>

          <div className="hero-v2__actions">
            <a className="button-link button-link--primary" href="#projetos" data-magnetic data-cursor="VER">
              Conhecer projetos <span aria-hidden="true">↘</span>
            </a>
            <a className="button-link button-link--ghost" href="#contato" data-magnetic>
              Falar sobre um projeto <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-v2__meta" aria-label="Áreas de atuação">
            <span><b>01</b> Produtos web</span>
            <span><b>02</b> Sistemas internos</span>
            <span><b>03</b> Integrações</span>
          </div>
        </div>

        <div className="hero-v2__portrait-wrap hero-enter">
          <div className="hero-v2__portrait" ref={mediaRef}>
            <div className="hero-v2__halo" aria-hidden="true" />
            <img src="/brand/hilson-gabriel.jpg" alt="Hilson Gabriel Carvalho" />
            <div className="hero-v2__portrait-footer">
              <span>HGC / 2026</span>
              <span>SÃO LUÍS · MA</span>
            </div>
          </div>
          <div className="hero-v2__badge" aria-hidden="true">
            <img src="/brand/hgc-mark.png" alt="" />
            <span>TECNOLOGIA<br />COM PROPÓSITO</span>
          </div>
          <div className="hero-v2__signal" aria-hidden="true">
            <i /><span>SISTEMAS<br />EM MOVIMENTO</span>
          </div>
        </div>
      </div>

      <div className="hero-v2__ticker" aria-label="Tecnologias e entregas">
        <div>
          <span>REACT</span><i>·</i><span>TYPESCRIPT</span><i>·</i><span>FIREBASE</span><i>·</i><span>VERCEL</span><i>·</i><span>APIS</span><i>·</i><span>DASHBOARDS</span><i>·</i>
          <span>REACT</span><i>·</i><span>TYPESCRIPT</span><i>·</i><span>FIREBASE</span><i>·</i><span>VERCEL</span><i>·</i><span>APIS</span><i>·</i><span>DASHBOARDS</span><i>·</i>
        </div>
      </div>
    </section>
  )
}
