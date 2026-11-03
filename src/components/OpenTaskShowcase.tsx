import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { STAGE, screens } from './OpenTaskScreens'
import './showcase.css'

function Scaled({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return undefined
    const update = () => setScale(Math.min(1, element.clientWidth / STAGE.width))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="showcase__viewport" ref={ref} style={{ height: STAGE.height * scale }}>
      <div className="showcase__stage" style={{ width: STAGE.width, height: STAGE.height, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  )
}

export function OpenTaskShowcase() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const total = screens.length
  const screen = screens[index]

  const go = useCallback((target: number) => {
    const next = (target + total) % total
    setDirection(target > index || (index === total - 1 && next === 0) ? 'next' : 'prev')
    setIndex(next)
  }, [index, total])

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1) }
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1) }
  }

  const pad = (value: number) => String(value).padStart(2, '0')

  return (
    <section className="showcase" id="galeria" aria-labelledby="showcase-title" onKeyDown={onKeyDown}>
      <div className="showcase__intro">
        <div className="case-section__index">VEJA POR DENTRO / MODELOS DAS TELAS</div>
        <div>
          <h2 id="showcase-title">Como o OpenTask <em>funciona por dentro.</em></h2>
          <p>
            Nove telas reconstruídas como modelos, com dados fictícios. O sistema real guarda informações privadas de colaboradores,
            então o que você vê aqui mostra a estrutura, as regras e o acabamento, não os dados da operação.
          </p>
        </div>
      </div>

      <div className="showcase__tabs" role="tablist" aria-label="Áreas do OpenTask">
        {(['Workspace TI', 'Portal do colaborador', 'App Windows'] as const).map((group) => {
          const first = screens.findIndex((item) => item.group === group)
          const active = screen.group === group
          return (
            <button key={group} type="button" role="tab" aria-selected={active} className={active ? 'is-active' : ''} onClick={() => go(first)}>
              {group}
            </button>
          )
        })}
      </div>

      <div className="showcase__device" data-direction={direction}>
        <div className="showcase__glow" aria-hidden="true" />
        <div key={screen.id} className="showcase__screen" role="img" aria-label={`Modelo da tela: ${screen.title}`}>
          <Scaled>{screen.render()}</Scaled>
        </div>
        <button type="button" className="showcase__arrow showcase__arrow--prev" onClick={() => go(index - 1)} aria-label="Tela anterior">←</button>
        <button type="button" className="showcase__arrow showcase__arrow--next" onClick={() => go(index + 1)} aria-label="Próxima tela">→</button>
      </div>

      <div className="showcase__pager" aria-label="Paginação das telas">
        <button type="button" onClick={() => go(index - 1)} aria-label="Tela anterior">Anterior</button>
        <ol>
          {screens.map((item, position) => (
            <li key={item.id}>
              <button
                type="button"
                className={position === index ? 'is-current' : ''}
                aria-current={position === index ? 'page' : undefined}
                aria-label={`Tela ${position + 1}: ${item.title}`}
                title={item.title}
                onClick={() => go(position)}
              >
                {pad(position + 1)}
              </button>
            </li>
          ))}
        </ol>
        <button type="button" onClick={() => go(index + 1)} aria-label="Próxima tela">Próxima</button>
      </div>

      <div className="showcase__info" aria-live="polite">
        <div className="showcase__count"><b>{pad(index + 1)}</b> / {pad(total)}<span>{screen.group}</span></div>
        <div>
          <h3>{screen.title}</h3>
          <p>{screen.description}</p>
        </div>
        <div>
          <h4>Como foi feito</h4>
          <ul>{screen.how.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

export function OpenTaskCapture({ index }: { index: number }) {
  const screen = screens[Math.min(Math.max(index, 0), screens.length - 1)]
  return <div className="capture-stage" style={{ width: STAGE.width, height: STAGE.height }}>{screen.render()}</div>
}
