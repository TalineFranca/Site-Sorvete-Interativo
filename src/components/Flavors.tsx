import { flavors } from '../data/flavors'
import { FlavorCard } from './FlavorCard'

export function Flavors() {
  return (
    <section id="sabores" className="relative bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-berry">
            Sabores autorais
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-wine sm:text-5xl">
            Cada sabor, uma história
          </h2>
          <p className="mt-4 font-body text-lg text-ink/70">
            Sem essência, sem corante. Role a página e veja os ingredientes que
            entram em cada uma das nossas receitas.
          </p>
        </div>

        <div className="mt-8 divide-y divide-wine/10">
          {flavors.map((flavor, i) => (
            <FlavorCard key={flavor.id} flavor={flavor} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
