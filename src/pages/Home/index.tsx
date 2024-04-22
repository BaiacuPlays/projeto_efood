import ProductsList2 from '../../components/ProductsList2'
import Local from '../../models/Local'

import japonesa from '../../assets/images/japonesa.png'
import italiana from '../../assets/images/italiana.png'

const restaurantes: Local[] = [
  {
    id: 1,
    category: 'Destaque da semana',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japonesa,
    system: 'Japonesa',
    title: 'Hioki Sushi'
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    system: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    system: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    system: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    system: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    system: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  }
]

const Categories = () => (
  <>
    <ProductsList2 locais={restaurantes} title={''} background={'gray'} />
  </>
)

export default Categories
