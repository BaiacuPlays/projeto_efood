import { Container, FooterSection, Logo, Redes } from './styles'
import logo from '../../assets/images/logo.png'
import redes from '../../assets/images/redes sociais.png'

const Footer = () => (
  <Container>
    <FooterSection>
      <div className="container">
        <Logo src={logo} alt="logo" />
        <Redes src={redes} alt="redes-sociais" />
      </div>
    </FooterSection>
    <FooterSection>
      <div className="container">
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </FooterSection>
  </Container>
)

export default Footer
