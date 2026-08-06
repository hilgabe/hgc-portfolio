import { useEffect, useRef } from 'react'

export function Hero({ ready }: { ready: boolean }) {
  const heroRef = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const media = mediaRef.current
    if (!hero || !media || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const updateScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / Math.max(hero.offsetHeight, 1), 1)
        media.style.setProperty('--hero-scroll', `${progress * 72}px`)
        hero.style.setProperty('--title-shift', `${progress * -12}vw`)
        frame = 0
      })
    }

    const updatePointer = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12
      media.style.setProperty('--hero-x', `${x}px`)
      media.style.setProperty('--hero-y', `${y}px`)
    }

    const resetPointer = () => {
      media.style.setProperty('--hero-x', '0px')
      media.style.setProperty('--hero-y', '0px')
    }

    window.addEventListener('scroll', updateScroll, { passive: true })
    hero.addEventListener('pointermove', updatePointer)
    hero.addEventListener('pointerleave', resetPointer)
    updateScroll()

    return () => {
      window.removeEventListener('scroll', updateScroll)
      hero.removeEventListener('pointermove', updatePointer)
      hero.removeEventListener('pointerleave', resetPointer)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className={ready ? 'hero-v2 is-ready' : 'hero-v2'} id="inicio" aria-labelledby="hero-title" ref={heroRef}>
      <div className="hero-v2__mesh" aria-hidden="true" />

      <div className="hero-v2__location hero-enter">
        <span>LOCALIZADO EM</span>
        <strong>SÃO LUÍS<br />MARANHÃO</strong>
        <i aria-hidden="true"><img src="/brand/hgc-mark.png" alt="" /></i>
      </div>

      <div className="hero-v2__role hero-enter">
        <span aria-hidden="true">↘</span>
        <p>Desenvolvedor de<br /><strong>soluções digitais</strong></p>
      </div>

      <div className="hero-v2__media hero-enter" ref={mediaRef}>
        <div className="hero-v2__halo" />
        <img src="/brand/hilson-gabriel.jpg" alt="Hilson Gabriel Carvalho" />
        <div className="hero-v2__media-label"><span>HGC / 2026</span><span>WEB · SISTEMAS · INTEGRAÇÕES</span></div>
      </div>

      <div className="hero-v2__marquee hero-enter" aria-hidden="true">
        <div>
          <span>HILSON GABRIEL —</span><span>HILSON GABRIEL —</span><span>HILSON GABRIEL —</span>
        </div>
      </div>

      <div className="hero-v2__intro hero-enter">
        <p className="eyebrow">TECNOLOGIA APLICADA A PROBLEMAS REAIS</p>
        <h1 id="hero-title">Eu transformo processos confusos em experiências digitais <em>claras.</em></h1>
        <div>
          <p>Sites, sistemas internos e integrações construídos a partir do que a empresa realmente precisa resolver.</p>
          <a className="round-cta" href="#projetos" data-magnetic data-cursor="VER">
            <span>Explorar<br />trabalho</span><i aria-hidden="true">↘</i>
          </a>
        </div>
      </div>

      <a className="hero-v2__scroll" href="#sobre" aria-label="Rolar para conhecer o portfólio" data-cursor="ROLAR">
        <span>SCROLL</span><i aria-hidden="true" />
      </a>
    </section>
  )
}
