import * as THREE from 'three'

// Simple warm vertical gradient for the waffle cone, kept flat and
// low-frequency so it reads cleanly at the cone's oblique, curved UVs
// instead of aliasing into a moiré pattern.
export function createWaffleTexture() {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  const grad = ctx.createLinearGradient(0, 0, 0, size)
  grad.addColorStop(0, '#F0BE78')
  grad.addColorStop(0.55, '#E7A85A')
  grad.addColorStop(1, '#C98A3F')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}
