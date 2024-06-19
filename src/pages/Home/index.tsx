import ProductsList2 from '../../components/ProductsList2'
import { useGetRestaurantsQuery } from '../../services/api'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurants, error, isLoading } = useGetRestaurantsQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading restaurants</p>

  if (restaurants) {
    const sortedRestaurants = [...restaurants].sort((a, b) => {
      if (a.destacado && !b.destacado) {
        return -1
      } else if (!a.destacado && b.destacado) {
        return 1
      } else {
        return b.avaliacao - a.avaliacao
      }
    })

    return (
      <>
        <ProductsList2 restaurantes={sortedRestaurants} title="Restaurantes" />
      </>
    )
  }

  return null
}

export default Home
