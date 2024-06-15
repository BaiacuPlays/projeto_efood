import React from 'react'
import { Container, List } from './styles'
import { Restaurante } from '../../pages/Home'
import Product2 from '../Product2'

export type Props = {
  title: string
  restaurantes: Restaurante[]
}

const ProductsList2: React.FC<Props> = ({ restaurantes }) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Product2 key={restaurante.id} restaurante={restaurante} />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList2
