import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const cursor = cursorRef.current
    if (!cursor) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const move = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      cursor.dataset.visible = 'true'
      cursor.dataset.active = (event.target as HTMLElement).closest('a, button') ? 'true' : 'false'
    }
    const hide = () => { cursor.dataset.visible = 'false' }
    window.addEventListener('pointermove', move)
    document.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />
}
