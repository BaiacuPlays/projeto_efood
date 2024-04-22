import Local from '../../models/Local'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  locais: Local[]
}

const ProductsList = ({ background, locais }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {locais.map((local) => (
          <Product
            key={local.id}
            category={local.category}
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

export default ProductsList
