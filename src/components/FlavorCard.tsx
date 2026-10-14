import { useInView } from '../hooks/useInView'
import type { Flavor } from '../data/flavors'

interface Props {
  flavor: Flavor
  index: number
}

// Scattered starting offsets so each ingredient chip "flies in" from a
// different direction and assembles onto the scoop as the card scrolls
// into view.
const OFFSETS = [
  { x: -120, y: -90, rot: -35 },
  { x: 130, y: -70, rot: 28 },
  { x: -140, y: 80, rot: 40 },
  { x: 120, y: 100, rot: -24 },
]

// Fixed positions (percent) around the scoop where chips land.
const LANDING = [
  { top: '8%', left: '18%' },
  { top: '4%', left: '62%' },
  { top: '62%', left: '6%' },
  { top: '66%', left: '68%' },
]

export function FlavorCard({ flavor, index }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Visual: scoop cross-section with assembling ingredient chips */}
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <div
          className="absolute inset-6 overflow-hidden rounded-full shadow-soft transition-transform duration-700"
          style={{
            transform: inView ? 'scale(1)' : 'scale(0.85)',
            opacity: inView ? 1 : 0.4,
          }}
        >
          <img
            src={flavor.photo}
            alt={flavor.name}
            className="h-full w-full object-cover"
            style={{ objectPosition: flavor.photoPosition ?? 'center' }}
            loading="lazy"
          />
          {/* wedge cut showing cross-section */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(50% 50%, 100% 30%, 100% 100%, 50% 100%)',
              background: `linear-gradient(135deg, ${flavor.color}, ${flavor.colorSoft})`,
              opacity: 0.35,
            }}
          />
        </div>

        {flavor.ingredients.slice(0, 4).map((ing, i) => {
          const offset = OFFSETS[i % OFFSETS.length]
          const land = LANDING[i % LANDING.length]
          return (
            <div
              key={ing.name}
              className="absolute flex h-16 w-16 items-center justify-center rounded-full border-2 border-cream bg-cream text-2xl shadow-soft transition-all ease-out"
              style={{
                top: land.top,
                left: land.left,
                transitionDuration: '800ms',
                transitionDelay: `${i * 110}ms`,
                transform: inView
                  ? 'translate(0, 0) rotate(0deg) scale(1)'
                  : `translate(${offset.x}px, ${offset.y}px) rotate(${offset.rot}deg) scale(0.5)`,
                opacity: inView ? 1 : 0,
              }}
              title={ing.name}
            >
              <ing.icon className="h-6 w-6 text-wine" strokeWidth={1.75} aria-hidden />
            </div>
          )
        })}
      </div>

      {/* Text content */}
      <div>
        <span
          className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-cream"
          style={{ backgroundColor: flavor.color }}
        >
          Sabor da casa
        </span>
        <h3 className="font-display text-3xl font-extrabold text-wine sm:text-4xl">{flavor.name}</h3>
        <p className="mt-3 max-w-md font-body text-base text-ink/75 sm:text-lg">{flavor.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {flavor.ingredients.map((ing) => (
            <li
              key={ing.name}
              className="flex items-center gap-1.5 rounded-full bg-cream-dark px-3 py-1.5 text-sm font-bold text-ink/80 shadow-sm"
            >
              <ing.icon className="h-4 w-4 text-wine" strokeWidth={1.75} aria-hidden />
              {ing.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
