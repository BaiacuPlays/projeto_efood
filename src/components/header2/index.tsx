import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderBar, LogoContainer, BottomText } from './styles'

const Header2 = () => (
  <HeaderBar>
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
    </LogoContainer>
    <div>
      <BottomText>
        Viva experiências gastronômicas no conforto da sua casa
      </BottomText>
    </div>
  </HeaderBar>
)

export default Header2
