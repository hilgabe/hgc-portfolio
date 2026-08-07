import { useLayoutEffect, useRef } from 'react'

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const visual = visualRef.current
    if (!visual) return

    const orbits = [
      visual.querySelector<HTMLElement>('.hero-system__orbit--outer'),
      visual.querySelector<HTMLElement>('.hero-system__orbit--middle'),
      visual.querySelector<HTMLElement>('.hero-system__orbit--inner'),
      visual.querySelector<HTMLElement>('.hero-system__orbit--ellipse'),
    ]
    if (orbits.some((orbit) => !orbit)) return

    const baseSpeeds = [4.6, -5.4, 6.8, 8.2]
    const angles = [8, 112, 224, 332]
    let animationTimer = 0
    let previousFrame = performance.now()

    const animate = (time: number) => {
      const delta = Math.min((time - previousFrame) / 1000, 0.05)
      previousFrame = time

      orbits.forEach((orbit, index) => {
        angles[index] = (angles[index] + baseSpeeds[index] * delta) % 360
        orbit?.style.setProperty('--orbit-angle', `${angles[index]}deg`)
      })
      visual.style.setProperty('--orbit-energy', `${0.16 + (Math.sin(time / 780) + 1) * 0.06}`)
      visual.style.setProperty('--logo-float-y', `${Math.sin(time / 920) * 8}px`)
      visual.style.setProperty('--portrait-float-y', `${Math.sin(time / 1080 + 1.4) * 6}px`)
      visual.style.setProperty('--portrait-ring-angle', `${(time * 0.018) % 360}deg`)
      visual.style.setProperty('--scan-angle', `${(time * 0.012) % 360}deg`)
    }

    const move = (event: PointerEvent) => {
      const rect = visual.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      visual.style.setProperty('--logo-light-x', `${(x + 0.5) * 100}%`)
      visual.style.setProperty('--logo-light-y', `${(y + 0.5) * 100}%`)
      visual.style.setProperty('--logo-shadow-x', `${x * -30}px`)
      visual.style.setProperty('--logo-shadow-y', `${y * -30 + 14}px`)
      visual.style.setProperty('--logo-glow-x', `${x * 18}px`)
      visual.style.setProperty('--logo-glow-y', `${y * 18}px`)
    }
    const reset = () => {
      visual.style.setProperty('--logo-light-x', '50%')
      visual.style.setProperty('--logo-light-y', '38%')
      visual.style.setProperty('--logo-shadow-x', '0px')
      visual.style.setProperty('--logo-shadow-y', '14px')
      visual.style.setProperty('--logo-glow-x', '0px')
      visual.style.setProperty('--logo-glow-y', '0px')
    }

    orbits.forEach((orbit, index) => orbit?.style.setProperty('--orbit-angle', `${angles[index]}deg`))
    animationTimer = window.setInterval(() => animate(performance.now()), 16)
    visual.addEventListener('pointermove', move)
    visual.addEventListener('pointerleave', reset)
    return () => {
      window.clearInterval(animationTimer)
      visual.removeEventListener('pointermove', move)
      visual.removeEventListener('pointerleave', reset)
    }
  }, [])

  return (
    <section className="hero-v3" id="inicio" aria-labelledby="hero-title">
      <div className="hero-v3__mesh" aria-hidden="true" />
      <div className="hero-code-bg" aria-hidden="true">
        <div className="hero-code-bg__editor hero-code-bg__editor--primary">
          <div className="hero-code-bg__bar">
            <span className="hero-code-bg__dots"><i /><i /><i /></span>
            <span>Hero.tsx</span>
          </div>
          <pre><code>
            <span className="hero-code-bg__line" data-line="01"><span className="code-token--keyword">const</span> solution = {'{'}</span>
            <span className="hero-code-bg__line" data-line="02">  <span className="code-token--property">web</span>: <span className="code-token--value">true</span>,</span>
            <span className="hero-code-bg__line" data-line="03">  <span className="code-token--property">systems</span>: <span className="code-token--function">scalable</span>,</span>
            <span className="hero-code-bg__line" data-line="04">  <span className="code-token--property">integrations</span>: <span className="code-token--string">'connected'</span>,</span>
            <span className="hero-code-bg__line" data-line="05">{'}'}</span>
            <span className="hero-code-bg__line" data-line="06"> </span>
            <span className="hero-code-bg__line" data-line="07"><span className="code-token--keyword">export</span> <span className="code-token--keyword">default</span> <span className="code-token--function">build</span>(solution)</span>
          </code></pre>
        </div>

        <div className="hero-code-bg__editor hero-code-bg__editor--secondary">
          <div className="hero-code-bg__bar">
            <span className="hero-code-bg__dots"><i /><i /><i /></span>
            <span>process.ts</span>
          </div>
          <pre><code>
            <span className="hero-code-bg__line" data-line="12"><span className="code-token--keyword">async function</span> <span className="code-token--function">improve</span>(process) {'{'}</span>
            <span className="hero-code-bg__line" data-line="13">  <span className="code-token--keyword">const</span> flow = <span className="code-token--keyword">await</span> <span className="code-token--function">map</span>(process)</span>
            <span className="hero-code-bg__line" data-line="14">  <span className="code-token--keyword">return</span> <span className="code-token--function">create</span>({'{'}</span>
            <span className="hero-code-bg__line" data-line="15">    <span className="code-token--property">experience</span>: <span className="code-token--string">'clear'</span>,</span>
            <span className="hero-code-bg__line" data-line="16">    <span className="code-token--property">operation</span>: <span className="code-token--string">'connected'</span>,</span>
            <span className="hero-code-bg__line" data-line="17">    <span className="code-token--property">result</span>: <span className="code-token--string">'measurable'</span></span>
            <span className="hero-code-bg__line" data-line="18">  {'}'})</span>
            <span className="hero-code-bg__line" data-line="19">{'}'}</span>
          </code></pre>
        </div>
      </div>

      <div className="hero-v3__grid">
        <div className="hero-v3__content">
          <p className="hero-v3__signature"><i aria-hidden="true" /> HILSON GABRIEL CARVALHO</p>
          <div className="hero-v3__rule" aria-hidden="true"><i /></div>
          <h1 id="hero-title" aria-label="Soluções digitais para processos que precisam funcionar melhor.">
            <span>Soluções digitais</span>
            <span>para processos que</span>
            <span>precisam funcionar</span>
            <span>melhor<b>.</b></span>
          </h1>
          <p className="hero-v3__eyebrow">SITES · SISTEMAS · INTEGRAÇÕES</p>
          <p className="hero-v3__summary">
            Eu ajudo empresas a transformar informações dispersas, tarefas manuais e jornadas confusas em experiências digitais claras e utilizáveis.
          </p>

          <div className="hero-v3__actions">
            <a className="button-link button-link--primary" href="#projetos" data-magnetic>
              Ver projetos reais <span aria-hidden="true">→</span>
            </a>
            <a className="button-link button-link--ghost" href="#contato" data-magnetic>
              Falar sobre um problema <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div ref={visualRef} className="hero-system" role="img" aria-label="Marca HGC cercada por órbitas tecnológicas animadas">
          <div className="hero-system__stage" aria-hidden="true">
            <div className="hero-system__radar" />
            <div className="hero-system__axis hero-system__axis--x" />
            <div className="hero-system__axis hero-system__axis--y" />
            <div className="hero-system__orbit hero-system__orbit--outer"><i /><b /><span className="hero-system__target hero-system__target--one" /></div>
            <div className="hero-system__orbit hero-system__orbit--middle"><i /><b /><span className="hero-system__target hero-system__target--two" /></div>
            <div className="hero-system__orbit hero-system__orbit--inner"><i /></div>
            <div className="hero-system__orbit hero-system__orbit--ellipse"><i /><b /><span className="hero-system__target hero-system__target--three" /></div>
            <div className="hero-system__scan" />
            <img className="hero-system__mark" src="/brand/hgc-mark.png" alt="" />
            <span className="hero-system__mark-light" />
            <span className="hero-system__cross hero-system__cross--one">+</span>
            <span className="hero-system__cross hero-system__cross--two">+</span>
          </div>
          <div className="hero-system__portrait" aria-hidden="true">
            <span className="hero-system__portrait-orbit"><i /><b /></span>
            <span className="hero-system__portrait-frame"><img src="/brand/hilson-pixel.webp" alt="" /></span>
          </div>
          <div className="hero-system__telemetry" aria-hidden="true"><span>HGC // CORE</span><i /> <span>SISTEMA ONLINE</span></div>
        </div>
      </div>
    </section>
  )
}
