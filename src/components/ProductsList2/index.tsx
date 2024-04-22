import React from 'react'
import Product2 from '../Product2'
import Local from '../../models/Local'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  locais: Local[]
}

const ProductsList2: React.FC<Props> = ({ background, locais }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {locais.map((local, index) => (
          <Product2
            key={local.id}
            category={index === 0 ? local.category : undefined} // Renderiza a categoria apenas no primeiro card
            description={local.description}
            image={local.image}
            system={local.system}
            title={local.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList2
