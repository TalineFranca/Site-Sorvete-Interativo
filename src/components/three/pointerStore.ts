// Lightweight mutable stores (outside React state) so the R3F render loop
// can read pointer/scroll data every frame without triggering re-renders.
export const pointer = { x: 0, y: 0 }
export const scrollState = { progress: 0 }

export function initPointerTracking(target: HTMLElement) {
  const handleMove = (e: PointerEvent) => {
    const rect = target.getBoundingClientRect()
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1
  }

  const handleLeave = () => {
    pointer.x = 0
    pointer.y = 0
  }

  const handleScroll = () => {
    const rect = target.getBoundingClientRect()
    const progress = -rect.top / (rect.height * 0.8)
    scrollState.progress = Math.min(Math.max(progress, 0), 1)
  }

  window.addEventListener('pointermove', handleMove, { passive: true })
  window.addEventListener('pointerleave', handleLeave, { passive: true })
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  return () => {
    window.removeEventListener('pointermove', handleMove)
    window.removeEventListener('pointerleave', handleLeave)
    window.removeEventListener('scroll', handleScroll)
  }
}
