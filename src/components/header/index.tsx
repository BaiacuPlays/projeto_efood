import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <Links>
      <LinkItem>
        <Link to="/categories">Restaurantes</Link>
      </LinkItem>
    </Links>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
    </div>
    <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
  </HeaderBar>
)

export default Header
