import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  InnerContainer,
  LogoContainer
} from './styles'
import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <InnerContainer>
        <Links>
          <LinkItem>
            <Link to="/">Restaurantes</Link>
          </LinkItem>
        </Links>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
        </LogoContainer>
        <CartButton onClick={openCart}>
          {items.length} - produto(s) no carrinho
        </CartButton>
      </InnerContainer>
    </HeaderBar>
  )
}

export default Header
