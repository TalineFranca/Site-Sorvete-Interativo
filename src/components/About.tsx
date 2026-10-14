import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

// No real storefront photo was supplied yet, swap the SVG illustration
// below for one once available, e.g.:
// import lojaFachada from '../assets/images/loja-fachada.jpg'

const stats: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 2016, label: 'Ano de fundação' },
  { value: 100, suffix: '%', label: 'Artesanal, em lote pequeno' },
  { value: 35, prefix: '+', label: 'Sabores já criados' },
]

function StatCounter({ value, prefix, suffix, label, start }: (typeof stats)[number] & { start: boolean }) {
  const count = useCountUp(value, start)
  return (
    <div className="rounded-2xl bg-cream/10 px-5 py-4 backdrop-blur-sm">
      <p className="font-display text-2xl font-extrabold text-mustard-light">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-sm text-cream/75">{label}</p>
    </div>
  )
}

function StorefrontIllustration() {
  return (
    <svg viewBox="0 0 400 340" className="h-full w-full" role="img" aria-label="Ilustração da loja Arte Gelato">
      <rect width="400" height="340" rx="28" fill="#F3E5CE" />
      {/* sky glow */}
      <circle cx="330" cy="55" r="60" fill="#EAC978" opacity="0.35" />

      {/* building */}
      <rect x="50" y="120" width="300" height="180" rx="10" fill="#FBF3E7" stroke="#4A1730" strokeWidth="3" />

      {/* awning */}
      <path d="M40 120 L360 120 L340 155 Q200 175 60 155 Z" fill="#6B2142" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={40 + i * 40} y="120" width="20" height="35" fill={i % 2 === 0 ? '#D9A441' : '#6B2142'} />
      ))}
      <path d="M40 155 Q200 178 360 155 L360 165 Q200 188 40 165 Z" fill="#4A1730" />

      {/* door */}
      <rect x="175" y="210" width="50" height="90" rx="6" fill="#B5657D" stroke="#4A1730" strokeWidth="3" />
      <circle cx="212" cy="255" r="3" fill="#4A1730" />

      {/* windows */}
      <rect x="75" y="190" width="80" height="70" rx="8" fill="#DDE3C4" stroke="#4A1730" strokeWidth="3" />
      <rect x="245" y="190" width="80" height="70" rx="8" fill="#DDE3C4" stroke="#4A1730" strokeWidth="3" />

      {/* ice cream in left window */}
      <g transform="translate(95,205)">
        <path d="M20 45 L10 15 L30 15 Z" fill="#E7A85A" stroke="#4A1730" strokeWidth="2" />
        <circle cx="20" cy="12" r="13" fill="#F3D89A" stroke="#4A1730" strokeWidth="2" />
      </g>
      {/* pot of gelato in right window */}
      <g transform="translate(265,205)">
        <rect x="4" y="18" width="34" height="24" rx="4" fill="#A63A55" stroke="#4A1730" strokeWidth="2" />
        <ellipse cx="21" cy="18" rx="17" ry="8" fill="#F1D3DA" stroke="#4A1730" strokeWidth="2" />
      </g>

      {/* hanging sign */}
      <line x1="200" y1="95" x2="200" y2="115" stroke="#4A1730" strokeWidth="3" />
      <circle cx="200" cy="80" r="30" fill="#D9A441" stroke="#4A1730" strokeWidth="3" />
      <g transform="translate(188,66)">
        <path d="M12 34 L4 14 L20 14 Z" fill="#E7A85A" stroke="#4A1730" strokeWidth="1.5" />
        <circle cx="12" cy="11" r="9" fill="#FBF3E7" stroke="#4A1730" strokeWidth="1.5" />
      </g>

      {/* string lights */}
      <path d="M20 60 Q200 20 380 60" stroke="#4A1730" strokeWidth="2" fill="none" opacity="0.5" />
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 20 + i * 45
        const y = 60 - Math.sin((i / 8) * Math.PI) * 38
        return <circle key={i} cx={x} cy={y} r="4" fill="#EAC978" />
      })}

      {/* potted plants */}
      <g transform="translate(55,270)">
        <rect width="22" height="24" rx="3" fill="#8C3A5D" />
        <circle cx="11" cy="-6" r="16" fill="#7C8A4E" />
      </g>
      <g transform="translate(325,270)">
        <rect width="22" height="24" rx="3" fill="#8C3A5D" />
        <circle cx="11" cy="-6" r="16" fill="#7C8A4E" />
      </g>
    </svg>
  )
}

export function About() {
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>(0.5)

  return (
    <section id="sobre" className="relative overflow-hidden bg-wine py-24 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] shadow-soft">
          <StorefrontIllustration />
        </div>

        <div>
          <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-mustard-light">
            Nossa história
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
            De uma cozinha pequena para o bairro inteiro
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-cream/85">
            A Arte Gelato nasceu em 2016, na cozinha de casa, com uma sorveteira
            velha e uma vontade danada de fazer sorvete de verdade, daqueles
            com pedaço de fruta que você vê, e não só sente o gosto. Hoje
            fazemos tudo em pequenos lotes, todos os dias, com fruta da feira,
            chocolate de origem e sem nenhum atalho de fábrica.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-cream/85">
            Não é sobre ter cem sabores na vitrine. É sobre ter poucos sabores
            e cada um deles ser inesquecível. Se você provar e sentir que
            lembra de alguém fazendo com carinho, a gente cumpriu o que se
            propôs.
          </p>

          <div ref={statsRef} className="mt-8 flex flex-wrap gap-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} start={statsInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
