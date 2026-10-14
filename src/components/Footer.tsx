export function Footer() {
  return (
    <footer className="bg-ink py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-xl font-extrabold text-cream">
          Arte <span className="text-mustard">Gelato</span>
        </p>
        <p className="text-sm">Feito à mão, em pequenos lotes, todos os dias.</p>
        <p className="text-xs">© {new Date().getFullYear()} Arte Gelato. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
