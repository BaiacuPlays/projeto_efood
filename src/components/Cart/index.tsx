import { ButtonButton } from '../../components/Product/styles'

import { Overlay, CartContainer, Sidebar, Valorpreco, CartItem } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const getTotalPrice = () => {
    return items.reduce((acumulador, Valoratual) => {
      return (acumulador += Valoratual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const formatapreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatapreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Valorpreco>Valor total {formatapreco(getTotalPrice())}</Valorpreco>
        <ButtonButton
          title="Clique aqui para confirmar a compra"
          style={{
            padding: '4px',
            marginTop: '16px',
            width: '100%'
          }}
        >
          Continuar com a entrega
        </ButtonButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
