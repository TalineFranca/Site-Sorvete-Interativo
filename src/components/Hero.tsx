import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { IceCreamScene } from './three/IceCreamScene'
import { initPointerTracking } from './three/pointerStore'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    return initPointerTracking(sectionRef.current)
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-gradient-to-b from-wine via-wine-dark to-ink"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-mustard/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-berry/20 blur-3xl" />

      <div className="absolute inset-0">
        <Canvas
          shadows
          camera={{ position: [0, 0.6, 6.2], fov: 38 }}
          gl={{ antialias: true }}
          dpr={[1, 2]}
        >
          <IceCreamScene />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto grid h-full max-w-6xl items-center px-6 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-mustard/40 bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-mustard-light backdrop-blur-sm">
            Sorveteria artesanal
          </span>
          <h1 className="font-display text-6xl font-extrabold leading-[0.95] text-cream drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)] sm:text-7xl">
            Arte <span className="text-mustard">Gelato</span>
          </h1>
          <p className="mt-5 max-w-md text-balance font-body text-lg text-cream/85 sm:text-xl">
            Gelato feito à mão, todos os dias, com fruta de verdade e sem
            pressa. Rola a página e vê o sorvete derreter de vontade.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#sabores"
              className="shine-sweep rounded-full bg-mustard px-8 py-3.5 font-display text-base font-bold text-wine-dark shadow-soft transition hover:-translate-y-0.5 hover:bg-mustard-light"
            >
              Ver sabores
            </a>
            <a
              href="#contato"
              className="rounded-full border-2 border-cream/40 px-8 py-3.5 font-display text-base font-bold text-cream transition hover:-translate-y-0.5 hover:border-cream"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 animate-float text-cream/70">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
