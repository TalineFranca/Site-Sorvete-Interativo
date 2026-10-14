import { useMemo } from 'react'
import * as THREE from 'three'
import { createWaffleTexture } from './textures'

export function Cone() {
  const texture = useMemo(() => createWaffleTexture(), [])

  return (
    <mesh position={[0, -0.9, 0]} rotation={[Math.PI, 0, 0]} castShadow receiveShadow>
      <coneGeometry args={[1.05, 2.2, 12, 1, true]} />
      <meshStandardMaterial
        map={texture}
        color="#E7A85A"
        roughness={0.85}
        metalness={0}
        flatShading
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
