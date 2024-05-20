import { Imagem, TagHeader, Titulo, Container, Overlay } from './styles'
import bannerImg from '../../../assets/images/apresentacao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Overlay />
    <Container>
      <TagHeader>Italiana</TagHeader>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </Container>
  </Imagem>
)

export default Banner
