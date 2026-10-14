// Illustrative address for a fictional shop, intentionally not wired to a
// live Maps query so it can never resolve to a real place.
const address = '[Endereço da loja aqui] - Bairro, Cidade - UF'

const hours = [
  ['Terça a sexta', '13h - 22h'],
  ['Sábado e domingo', '12h - 23h'],
  ['Segunda-feira', 'Fechado'],
]

function MapIllustration() {
  return (
    <svg viewBox="0 0 400 320" className="h-full w-full" role="img" aria-label="Mapa estilizado até a loja">
      <rect width="400" height="320" fill="#EFE4CE" />
      <g stroke="#D9A441" strokeWidth="10" opacity="0.5">
        <line x1="0" y1="90" x2="400" y2="70" />
        <line x1="0" y1="230" x2="400" y2="250" />
      </g>
      <g stroke="#8C3A5D" strokeWidth="8" opacity="0.4">
        <line x1="120" y1="0" x2="150" y2="320" />
        <line x1="300" y1="0" x2="270" y2="320" />
      </g>
      {[
        [60, 40],
        [200, 30],
        [320, 120],
        [70, 180],
        [250, 200],
        [340, 260],
        [40, 270],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={34} height={26} rx={4} fill="#FBF3E7" stroke="#4A1730" strokeWidth="2" opacity="0.7" />
      ))}
      <g transform="translate(190,130)">
        <circle cx="20" cy="20" r="34" fill="#6B2142" opacity="0.15" />
        <path
          d="M20 0C9 0 0 9 0 20c0 15 20 34 20 34s20-19 20-34C40 9 31 0 20 0Z"
          fill="#6B2142"
          stroke="#4A1730"
          strokeWidth="2"
        />
        <circle cx="20" cy="19" r="9" fill="#F3D89A" />
      </g>
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contato" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-berry">
            Venha nos visitar
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-wine sm:text-5xl">
            Localização e contato
          </h2>
        </div>

        <div className="mt-12 grid gap-8 overflow-hidden rounded-[2rem] bg-wine-dark shadow-soft lg:grid-cols-2">
          <div className="order-2 overflow-hidden lg:order-1">
            <MapIllustration />
          </div>

          <div className="order-1 flex flex-col justify-center gap-7 p-8 text-cream sm:p-12 lg:order-2">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-mustard-light">
                Endereço
              </p>
              <p className="mt-2 text-lg font-body">{address}</p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-mustard-light underline decoration-mustard-light/40 underline-offset-4 hover:text-mustard"
              >
                Abrir no Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17 17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-mustard-light">
                Horário de funcionamento
              </p>
              <ul className="mt-2 space-y-1">
                {hours.map(([day, time]) => (
                  <li key={day} className="flex justify-between gap-6 text-sm text-cream/85">
                    <span>{day}</span>
                    <span className="font-bold">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled
                className="shine-sweep inline-flex items-center gap-2 rounded-full bg-mustard px-5 py-2.5 font-display text-sm font-bold text-wine-dark shadow-soft transition hover:bg-mustard-light"
              >
                [Seu WhatsApp aqui]
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-5 py-2.5 font-display text-sm font-bold text-cream transition hover:border-cream"
              >
                @artegelato
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-5 py-2.5 font-display text-sm font-bold text-cream transition hover:border-cream"
              >
                (00) 00000-0000
              </a>
            </div>
            <p className="text-xs text-cream/50">
              Contatos ilustrativos - projeto de demonstração, loja fictícia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
