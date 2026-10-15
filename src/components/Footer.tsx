import { Cherry, IceCreamCone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-ink pt-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-xl font-extrabold text-cream">
          Arte <span className="text-mustard">Gelato</span>
        </p>
        <p className="text-sm">Feito à mão, em pequenos lotes, todos os dias.</p>
        <p className="text-xs">© {new Date().getFullYear()} Arte Gelato. Todos os direitos reservados.</p>
      </div>

      <div className="mt-8 border-t border-dashed border-cream/15 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
          <p className="inline-flex items-center gap-2">
            <IceCreamCone size={14} className="shrink-0 text-mustard" aria-hidden />
            Site demonstrativo criado por Lunia Sites - empresa fictícia
          </p>
          <p className="inline-flex items-center gap-2">
            Arte Gelato não existe: endereço, telefone e preços são inventados.
            <Cherry size={14} className="shrink-0 text-berry" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  )
}
