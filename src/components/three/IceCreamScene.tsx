import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { Cone } from './Cone'
import { Scoop } from './Scoop'
import { Drips } from './Drips'
import { pointer, scrollState } from './pointerStore'

export function IceCreamScene() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return
    const autoRotate = state.clock.getElapsedTime() * 0.12
    const targetY = autoRotate + pointer.x * 0.6
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta)

    const targetTilt = -pointer.y * 0.12
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetTilt, 4, delta)

    const isDesktop = state.size.width > 768
    const baseScale = isDesktop ? 1 : 0.62
    const targetScale = baseScale - scrollState.progress * 0.15
    const s = THREE.MathUtils.damp(group.current.scale.x, targetScale, 4, delta)
    group.current.scale.set(s, s, s)

    // Sit the cone in the right half of the hero on wide screens so it
    // doesn't collide with the left-aligned headline. On mobile the layout
    // stacks, so shrink and lift the cone above the text instead.
    const targetX = isDesktop ? 1.5 : 0
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, delta)
    const targetY2 = isDesktop ? 0 : 1.15
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      targetY2 - scrollState.progress * 0.6,
      4,
      delta,
    )
  })

  return (
    <>
      <ambientLight intensity={0.65} color="#FFF3E0" />
      <directionalLight
        position={[3.5, 5, 3]}
        intensity={1.2}
        color="#FFFFFF"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 2, -3]} intensity={0.35} color="#D9A441" />
      <pointLight position={[0, 1.5, -3]} intensity={0.5} color="#6B2142" />

      <group ref={group} position={[0, 0.1, 0]}>
        <Cone />
        <Scoop />
        <Drips />
      </group>

      <ContactShadows
        position={[0, -2.05, 0]}
        opacity={0.35}
        scale={6}
        blur={2.4}
        far={2.5}
        color="#4A1730"
      />
    </>
  )
}
