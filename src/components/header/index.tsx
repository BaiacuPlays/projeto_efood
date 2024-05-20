import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Links,
  LinkItem,
  LinkCart,
  InnerContainer,
  LogoContainer
} from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <InnerContainer>
      <Links>
        <LinkItem>
          <Link to="/categories">Restaurantes</Link>
        </LinkItem>
      </Links>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
      </LogoContainer>
      <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
    </InnerContainer>
  </HeaderBar>
)

export default Header
