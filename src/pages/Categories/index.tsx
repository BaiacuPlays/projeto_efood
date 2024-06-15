import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardapioItem, Restaurante } from '../../pages/Home'
import Banner from '../../components/header/Banner'
import { useParams } from 'react-router-dom'
import ProductsList from '../../components/ProductsList'
import Product from '../../components/Product'

const Categories: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await axios.get(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        if (response.status === 200) {
          setRestaurante(response.data)
        }
      } catch (error) {
        console.error('Erro ao buscar restaurante:', error)
      }
    }

    fetchRestaurante()
  }, [id])

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <Banner />

      <ProductsList restaurantes={[restaurante]} title="Cardápio" />
    </div>
  )
}

export default Categories
