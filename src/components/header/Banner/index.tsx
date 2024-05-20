import { Imagem, TagHeader, Titulo, Container } from './styles'
import bannerImg from '../../../assets/images/apresentacao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <TagHeader>Italiana</TagHeader>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </Container>
  </Imagem>
)

export default Banner
