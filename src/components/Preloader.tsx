import { useEffect, useState } from 'react'

const words = ['ENTENDER', 'MAPEAR', 'CONSTRUIR', 'VALIDAR', 'HGC']

export function Preloader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLeaving(true)
      const reducedTimer = window.setTimeout(onDone, 80)
      return () => window.clearTimeout(reducedTimer)
    }

    const timers = words.slice(1).map((_, wordIndex) => (
      window.setTimeout(() => setIndex(wordIndex + 1), 190 * (wordIndex + 1))
    ))
    timers.push(window.setTimeout(() => setLeaving(true), 1160))
    timers.push(window.setTimeout(onDone, 1900))

    return () => timers.forEach(window.clearTimeout)
  }, [onDone])

  return (
    <div className={leaving ? 'preloader is-leaving' : 'preloader'} aria-hidden="true">
      <div className="preloader__top">
        <img src="/brand/hgc-mark.png" alt="" />
        <span>HILSON GABRIEL / PORTFÓLIO</span>
      </div>
      <div className="preloader__word" key={words[index]}>{words[index]}</div>
      <div className="preloader__foot">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <i><b style={{ width: `${((index + 1) / words.length) * 100}%` }} /></i>
        <span>05</span>
      </div>
    </div>
  )
}
