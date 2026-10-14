import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { pointer, scrollState } from './pointerStore'
import { DRIP_COUNT, DRIP_RING_RADIUS, DRIP_RING_Y } from './constants'

interface DripDef {
  angle: number
  phase: number
  speed: number
  weight: number // relative "heaviness" - longer drips melt further
}

export function Drips() {
  const refs = useRef<(THREE.Mesh | null)[]>([])

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(0.12, 10, 10)
    geo.translate(0, -0.12, 0) // pivot at top so scaling stretches downward
    return geo
  }, [])

  const drips = useMemo<DripDef[]>(() => {
    return Array.from({ length: DRIP_COUNT }, (_, i) => ({
      angle: (i / DRIP_COUNT) * Math.PI * 2 + (i % 2 === 0 ? 0.08 : -0.05),
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 0.5,
      weight: 0.7 + Math.random() * 1.1,
    }))
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const pointerEnergy = 1 - Math.min(Math.hypot(pointer.x, pointer.y), 1) // closer to center = more energy
    const melt = scrollState.progress

    drips.forEach((d, i) => {
      const mesh = refs.current[i]
      if (!mesh) return
      const wobble = Math.sin(t * d.speed + d.phase) * 0.12
      const drip = 0.55 + melt * 1.6 * d.weight + pointerEnergy * 0.5 * d.weight + wobble
      mesh.scale.set(1, Math.max(0.35, drip), 1)
    })
  })

  return (
    <group>
      {drips.map((d, i) => (
        <mesh
          key={i}
          ref={(el) => (refs.current[i] = el)}
          geometry={geometry}
          position={[
            Math.cos(d.angle) * DRIP_RING_RADIUS,
            DRIP_RING_Y,
            Math.sin(d.angle) * DRIP_RING_RADIUS,
          ]}
          castShadow
        >
          <meshStandardMaterial color="#7A2444" roughness={0.28} metalness={0.05} />
        </mesh>
      ))}
    </group>
  )
}
