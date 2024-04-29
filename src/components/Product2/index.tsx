import { ButtonButton, Card, Descricao, Titulo, Estrela } from './styles'
import Tag2 from '../header/Tag2'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

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
    <Titulo>
      <span>{title}</span>
      <Estrela src={estrela} alt={title} />
      <span style={{ marginRight: '10px', float: 'right' }}>4.6</span>
    </Titulo>
    <Descricao>{description}</Descricao>
    <div>
      <Link to="/categories">
        <ButtonButton>Saiba mais</ButtonButton>
      </Link>
    </div>
  </Card>
)

export default Product
