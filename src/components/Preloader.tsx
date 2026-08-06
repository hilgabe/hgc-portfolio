import { useEffect, useState } from 'react'

export function Preloader({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const reducedTimer = window.setTimeout(onDone, 40)
      return () => window.clearTimeout(reducedTimer)
    }

    const leaveTimer = window.setTimeout(() => setLeaving(true), 520)
    const doneTimer = window.setTimeout(onDone, 980)
    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={leaving ? 'preloader is-leaving' : 'preloader'} aria-hidden="true">
      <img src="/brand/hgc-mark.png" alt="" />
      <div><b>HGC</b><span>PORTFÓLIO / 2026</span></div>
      <i><span /></i>
    </div>
  )
}
