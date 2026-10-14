import { flavors } from '../data/flavors'

import imagePistache from '../assets/images/imagePistache.jpg'
import imageFrutas from '../assets/images/imageFrutas.jpg'
import imageChocolate from '../assets/images/imageChocolate.jpg'
import imageDoceDeLeite from '../assets/images/imageDocedeLeite.jpg'
import imageLimao from '../assets/images/imagemlimao.jpg'
import imageCafe from '../assets/images/imagemCafe.jpg'

const sizes = [
  { label: 'Casquinha', price: 'R$ 14' },
  { label: 'Pote 200ml', price: 'R$ 19' },
  { label: 'Pote 500ml', price: 'R$ 34' },
]

const cardapioPhotos: Record<string, { src: string; position?: string }> = {
  pistache: { src: imagePistache },
  'frutas-vermelhas': { src: imageFrutas },
  'chocolate-belga': { src: imageChocolate, position: 'center 75%' },
  'doce-de-leite': { src: imageDoceDeLeite },
  'limao-siciliano': { src: imageLimao },
  'cafe-caramelo': { src: imageCafe },
}

export function Gallery() {
  return (
    <section id="cardapio" className="bg-cream-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-berry">
            Cardápio visual
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-wine sm:text-5xl">
            Escolha com os olhos
          </h2>
          <p className="mt-4 font-body text-lg text-ink/70">
            Sabor de verdade, foto de verdade, sem essência, sem banco de imagem.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
          {flavors.map((flavor) => {
            const photo = cardapioPhotos[flavor.id]
            return (
              <div
                key={flavor.id}
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={photo.src}
                  alt={flavor.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  style={{ objectPosition: photo.position ?? 'center' }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
                  <p className="font-display text-base font-bold text-cream sm:text-lg">{flavor.name}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-wine px-6 py-8 text-cream shadow-soft sm:px-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="font-display text-xl font-extrabold text-mustard-light">Tamanhos e preços</p>
              <p className="mt-1 text-sm text-cream/75">Válido para qualquer sabor da casa</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {sizes.map((s) => (
                <div key={s.label} className="rounded-2xl bg-cream/10 px-5 py-3 text-center backdrop-blur-sm">
                  <p className="font-display text-lg font-extrabold text-cream">{s.price}</p>
                  <p className="text-xs uppercase tracking-wide text-cream/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
