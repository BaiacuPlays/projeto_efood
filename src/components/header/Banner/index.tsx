import { Imagem, TagHeader, Titulo } from './styles'

import bannerImg from '../../../assets/images/apresentacao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <TagHeader>Italiana</TagHeader>
    <div className="container">
      <div>
        <Titulo>La Dolce Vita Trattoria </Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
