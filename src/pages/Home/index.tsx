import ProductsList2 from '../../components/ProductsList2'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        if (response.status === 200) {
          console.log('API response:', response.data)
          setRestaurants(response.data)
        }
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error)
      }
    }

    fetchRestaurants()
  }, [])

  return (
    <>
      <ProductsList2 restaurantes={restaurants} title="Restaurantes" />
    </>
  )
}

export default Home
