import React from 'react'
import { Restaurante } from '../../pages/Home'
import Product from '../Product'
import { Container, Title, List, ListItem } from './styles'

type Props = {
  restaurantes: Restaurante[]
  title: string
}

export const formatapreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList: React.FC<Props> = ({ restaurantes, title }) => (
  <Container>
    <div>
      <Title>{title}</Title>
      {restaurantes.map((restaurante) => (
        <div key={restaurante.id}>
          <h3>{restaurante.titulo}</h3>
          <List>
            {restaurante.cardapio.map((item) => (
              <ListItem key={item.id}>
                <Product restaurante={restaurante} id={item.id} />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  </Container>
)

export default ProductsList
