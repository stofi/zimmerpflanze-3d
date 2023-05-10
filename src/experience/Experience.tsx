import { Suspense } from 'react'

import { PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import { Leva } from 'leva'
import { Perf } from 'r3f-perf'

import Scene from '#/Scene'
import Effects from '$/Effects'

export default function Experience(props: { enableDebug?: boolean }) {
  return (
    <>
      <Leva hidden={!props.enableDebug} />
      <Canvas
        flat={false}
        shadows={true}
        dpr={1}
        camera={{
          position: [5, 5, 5],
        }}
      >
        <color args={['lightblue']} attach='background' />
        {props.enableDebug && (
          <>
            <axesHelper args={[5]} />
            <Perf position='top-left' />
            <PerformanceMonitor />
          </>
        )}
        <Suspense>
          <Physics>
            <Effects />
            <Scene />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}
