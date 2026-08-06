import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const cursor = cursorRef.current
    const label = labelRef.current
    if (!cursor || !label) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let frame = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      frame = window.requestAnimationFrame(render)
    }

    const move = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      cursor.dataset.visible = 'true'
      const interactive = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
      const value = interactive?.dataset.cursor ?? ''
      label.textContent = value
      cursor.dataset.active = value ? 'true' : 'false'
    }

    const hide = () => { cursor.dataset.visible = 'false' }
    window.addEventListener('pointermove', move)
    document.addEventListener('mouseleave', hide)
    frame = window.requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="custom-cursor" ref={cursorRef}><span ref={labelRef} /></div>
}
