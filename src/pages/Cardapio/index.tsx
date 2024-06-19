import React from 'react'
import Banner from '../../components/header/Banner'
import ProductsList from '../../components/ProductsList'
import { useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../services/api'

const Cardapio: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: restaurante,
    error,
    isLoading
  } = useGetRestaurantByIdQuery(Number(id))

  if (isLoading) return <p>Loading...</p>
  if (error || !restaurante) return <p>Error loading cardapio</p>

  return (
    <div>
      <Banner />
      <ProductsList restaurantes={[restaurante]} title="Cardápio" />
    </div>
  )
}

export default Cardapio
