import { ButtonButton, Card, Descricao, Titulo } from './styles'
import Tag2 from '../header/Tag2'

type Props = {
  title: string
  system: string
  description: string
  image: string
  category?: string
}

const Product = ({ title, description, image, category, system }: Props) => (
  <Card>
    <div style={{ position: 'relative' }}>
      <img src={image} alt={title} />
      <div style={{ position: 'absolute', top: 9, right: 12 }}>
        {category && <Tag2>{category}</Tag2>} <Tag2>{system}</Tag2>
      </div>
    </div>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <ButtonButton>Saiba mais</ButtonButton>
  </Card>
)

export default Product
