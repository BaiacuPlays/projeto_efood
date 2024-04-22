import { ButtonButton, Card, ContentWrapper, Descricao, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <ContentWrapper>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
    </ContentWrapper>
    <ButtonButton>Adicionar ao Carrinho</ButtonButton>
  </Card>
)

export default Product
