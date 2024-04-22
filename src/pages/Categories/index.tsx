import Banner from '../../components/header/Banner'
import ProductsList from '../../components/ProductsList'
import Local from '../../models/Local'

import pizza from '../../assets/images/pizza.png'

const promocoes: Local[] = [
  {
    id: 1,
    category: 'ação',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    system: 'tudo q existe',
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    category: 'ação',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    system: 'tudo q existe',
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    category: 'ação',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    system: 'Pc computadores',
    title: 'Pizza Marguerita'
  },
  {
    id: 4,
    category: 'ação',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    system: 'tudo q existe',
    title: 'Pizza Marguerita'
  },
  {
    id: 5,
    category: 'ação',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    system: 'tudo q existe',
    title: 'Pizza Marguerita'
  },
  {
    id: 6,
    category: 'ação',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    system: 'tudo q existe',
    title: 'Pizza Marguerita'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList locais={promocoes} title="Promoções" background="gray" />
  </>
)

export default Home
