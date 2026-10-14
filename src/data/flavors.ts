import type { LucideIcon } from 'lucide-react'
import {
  Nut,
  Milk,
  Droplet,
  Droplets,
  Sparkles,
  Cherry,
  Grape,
  Candy,
  Bean,
  Cookie,
  Snowflake,
  Citrus,
  Leaf,
  Coffee,
} from 'lucide-react'

import pistacheImg from '../assets/images/pistache.jpg'
import frutasVermelhasImg from '../assets/images/frutasVermelhas.jpg'
import chocolateBelgaImg from '../assets/images/chocolateBelga.jpg'
import doceDeLeiteImg from '../assets/images/doceDeLeite.jpg'
import limaoImg from '../assets/images/limao.jpg'
import cafeImg from '../assets/images/cafe.jpg'

export interface Ingredient {
  name: string
  icon: LucideIcon
}

export interface Flavor {
  id: string
  name: string
  description: string
  color: string
  colorSoft: string
  ingredients: Ingredient[]
  /** Real product photo, cropped into a circle in the flavor card. */
  photo: string
  /** object-position override for shots with dead space (e.g. a tall photo
   * with lots of empty background above the scoop) */
  photoPosition?: string
}

export const flavors: Flavor[] = [
  {
    id: 'pistache',
    name: 'Pistache Siciliano',
    description:
      'Base cremosa de pistache torrado com pedaços crocantes por dentro, intenso, amanteigado, nada artificial.',
    color: '#7C8A4E',
    colorSoft: '#DDE3C4',
    photo: pistacheImg,
    ingredients: [
      { name: 'Pistache torrado', icon: Nut },
      { name: 'Creme de leite fresco', icon: Milk },
      { name: 'Pasta de pistache pura', icon: Droplet },
      { name: 'Raspas de pistache crocante', icon: Sparkles },
    ],
  },
  {
    id: 'frutas-vermelhas',
    name: 'Frutas Vermelhas',
    description:
      'Sorbet vibrante de morango, framboesa e amora com calda encorpada e pedaços reais da fruta.',
    color: '#A63A55',
    colorSoft: '#F1D3DA',
    photo: frutasVermelhasImg,
    ingredients: [
      { name: 'Morangos frescos', icon: Cherry },
      { name: 'Framboesa', icon: Grape },
      { name: 'Amora silvestre', icon: Grape },
      { name: 'Calda de frutas vermelhas', icon: Droplets },
    ],
  },
  {
    id: 'chocolate-belga',
    name: 'Chocolate Belga 70%',
    description:
      'Chocolate belga meio amargo derretido na base, com brownie artesanal picado e fio de ganache.',
    color: '#4A2A22',
    colorSoft: '#DCC6B8',
    photo: chocolateBelgaImg,
    // this shot has a lot of empty backdrop above the scoop, anchor low
    photoPosition: 'center 78%',
    ingredients: [
      { name: 'Chocolate belga 70%', icon: Candy },
      { name: 'Cacau em pó', icon: Bean },
      { name: 'Brownie artesanal', icon: Cookie },
      { name: 'Ganache cremosa', icon: Droplet },
    ],
  },
  {
    id: 'doce-de-leite',
    name: 'Doce de Leite com Nozes',
    description:
      'Doce de leite argentino em camadas com nozes caramelizadas e um toque de flor de sal.',
    color: '#B07A3E',
    colorSoft: '#EFDCBE',
    photo: doceDeLeiteImg,
    ingredients: [
      { name: 'Doce de leite artesanal', icon: Droplet },
      { name: 'Nozes caramelizadas', icon: Nut },
      { name: 'Flor de sal', icon: Snowflake },
      { name: 'Farofa crocante', icon: Sparkles },
    ],
  },
  {
    id: 'limao-siciliano',
    name: 'Limão Siciliano',
    description:
      'Sorbet refrescante de limão siciliano com raspas cítricas e um toque de hortelã fresca.',
    color: '#C7B23A',
    colorSoft: '#F1EBC4',
    photo: limaoImg,
    ingredients: [
      { name: 'Limão siciliano', icon: Citrus },
      { name: 'Raspas cítricas', icon: Sparkles },
      { name: 'Hortelã fresca', icon: Leaf },
      { name: 'Xarope natural', icon: Droplet },
    ],
  },
  {
    id: 'cafe-caramelo',
    name: 'Café com Caramelo Salgado',
    description:
      'Café espresso torra média encorpado, com rios de caramelo salgado e crocante de amêndoas.',
    color: '#6B4226',
    colorSoft: '#E4CBAE',
    photo: cafeImg,
    ingredients: [
      { name: 'Café espresso', icon: Coffee },
      { name: 'Caramelo salgado', icon: Droplet },
      { name: 'Amêndoas crocantes', icon: Nut },
      { name: 'Flor de sal', icon: Snowflake },
    ],
  },
]
