import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { pointer } from './pointerStore'
import { SCOOP_Y, SCOOP_RADIUS, SCOOP_SQUASH } from './constants'

export function Scoop() {
  const mesh = useRef<THREE.Mesh>(null)
  const swirl = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const bob = Math.sin(t * 1.1) * 0.05
    const pointerPull = 1 - Math.min(Math.hypot(pointer.x, pointer.y), 1)
    const squish = 1 - pointerPull * 0.04

    if (mesh.current) {
      mesh.current.position.y = SCOOP_Y + bob
      mesh.current.scale.set(1 + pointerPull * 0.02, SCOOP_SQUASH * squish, 1 + pointerPull * 0.02)
    }
    if (swirl.current) {
      swirl.current.position.y = SCOOP_Y + bob + SCOOP_RADIUS * SCOOP_SQUASH * 0.62
      swirl.current.rotation.y = t * 0.6
    }
  })

  return (
    <group>
      <mesh ref={mesh} position={[0, SCOOP_Y, 0]} scale={[1, SCOOP_SQUASH, 1]} castShadow>
        <icosahedronGeometry args={[SCOOP_RADIUS, 1]} />
        <meshStandardMaterial color="#F3D89A" roughness={0.45} metalness={0.05} flatShading />
      </mesh>
      <mesh ref={swirl} castShadow>
        <icosahedronGeometry args={[0.34, 1]} />
        <meshStandardMaterial color="#F8E7C0" roughness={0.4} flatShading />
      </mesh>
    </group>
  )
}
