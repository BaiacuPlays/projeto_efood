import { Link } from 'react-router-dom'

import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
    </div>
  </HeaderBar>
)

export default Header
