import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonButton } from '../../components/Product/styles'
import axios from 'axios'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Valorpreco,
  CartItem,
  CheckOutForm,
  Input,
  Label,
  FormRow,
  EmptyCart,
  Final,
  AlertMessage,
  CheckOutFooter
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, clearCart } from '../../store/reducers/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const [currentTab, setCurrentTab] = useState('cart')
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [cvv, setCvv] = useState('')
  const [mesVencimento, setMesVencimento] = useState('')
  const [anoVencimento, setAnoVencimento] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)

  const [validNome, setValidNome] = useState(false)
  const [validEndereco, setValidEndereco] = useState(false)
  const [validCidade, setValidCidade] = useState(false)
  const [validCep, setValidCep] = useState(false)
  const [validNumero, setValidNumero] = useState(false)
  const [validNomeCartao, setValidNomeCartao] = useState(false)
  const [validNumeroCartao, setValidNumeroCartao] = useState(false)
  const [validCVV, setValidCVV] = useState(false)
  const [validMesVencimento, setValidMesVencimento] = useState(false)
  const [validAnoVencimento, setValidAnoVencimento] = useState(false)

  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acumulador, Valoratual) => {
      return acumulador + Valoratual.preco
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formatapreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const handleContinueToCheckout = () => {
    setCurrentTab('checkout')
  }

  const handleContinueToPayment = () => {
    if (canProceedToNextTab()) {
      setCurrentTab('payment')
    } else {
      setAlertMessage('Por favor, preencha todos os campos obrigatórios.')
      setShowAlert(true)
    }
  }

  const handleInputChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      validator?: React.Dispatch<React.SetStateAction<boolean>>
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setter(value)
      if (validator) {
        validator(!!value)
      }
    }

  const handleNumeroCartaoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formattedValue = event.target.value.replace(/\D/g, '')
    const blocks = formattedValue.match(/.{1,4}/g)
    const value = blocks ? blocks.join(' ') : formattedValue
    setNumeroCartao(value)
    setValidNumeroCartao(!!value)
  }

  const handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 3)
    setCvv(value)
    setValidCVV(!!value)
  }

  const handleMesVencimentoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 2)
    setMesVencimento(value)
    setValidMesVencimento(!!value)
  }

  const handleAnoVencimentoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 4)
    setAnoVencimento(value)
    setValidAnoVencimento(!!value)
  }

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = event.target.value.replace(/\D/g, '')
    setCep(
      formattedValue.length <= 5
        ? formattedValue
        : formattedValue.slice(0, 5) + '-' + formattedValue.slice(5, 8)
    )
    setValidCep(!!formattedValue)
  }

  const handleNumeroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '')
    setNumero(value)
    setValidNumero(!!value)
  }

  const clearCartAndReset = () => {
    dispatch(clearCart())
    setPedidoFinalizado(false)
    setCurrentTab('cart')
    dispatch(close())
  }

  const handleFinalizarPagamento = async () => {
    if (canFinalizePayment()) {
      const data = {
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: nome,
          address: {
            description: endereco,
            city: cidade,
            zipCode: cep,
            number: numero,
            complement: ''
          }
        },
        payment: {
          card: {
            name: nomeCartao,
            number: numeroCartao.replace(/\s/g, ''),
            code: parseInt(cvv),
            expires: {
              month: parseInt(mesVencimento),
              year: parseInt(anoVencimento)
            }
          }
        }
      }

      try {
        const response = await axios.post(
          'https://fake-api-tau.vercel.app/api/efood/checkout',
          data
        )
        console.log('Resposta da API:', response.data)

        if (response.data && response.data.orderId) {
          setOrderId(response.data.orderId)
        }

        setPedidoFinalizado(true)
        setCurrentTab('finalizado')
      } catch (error) {
        console.error('Erro ao enviar pedido:', error)
        setAlertMessage('Erro ao enviar pedido. Tente novamente mais tarde.')
        setShowAlert(true)
      }
    } else {
      setAlertMessage('Por favor, preencha todos os campos obrigatórios.')
      setShowAlert(true)
    }
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    setCurrentTab('closed')
  }

  const canProceedToNextTab = () => {
    if (
      currentTab === 'checkout' &&
      (!validNome ||
        !validEndereco ||
        !validCidade ||
        !validCep ||
        !validNumero)
    ) {
      return false
    }
    return true
  }

  const canFinalizePayment = () => {
    if (
      !validNomeCartao ||
      !validNumeroCartao ||
      !validCVV ||
      !validMesVencimento ||
      !validAnoVencimento
    ) {
      return false
    }
    return true
  }

  const hideAlertMessage = () => {
    setShowAlert(false)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {showAlert && (
          <AlertMessage>
            <p>{alertMessage}</p>
            <button onClick={hideAlertMessage}>OK</button>
          </AlertMessage>
        )}
        {currentTab === 'cart' ? (
          <div>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{formatapreco(item.preco)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      ></button>
                    </CartItem>
                  ))}
                </ul>
                <Valorpreco>
                  Valor total {formatapreco(getTotalPrice())}
                </Valorpreco>
                <ButtonButton
                  title="Continuar com a entrega"
                  style={{ padding: '4px', marginTop: '16px', width: '100%' }}
                  onClick={handleContinueToCheckout}
                >
                  Continuar com a entrega
                </ButtonButton>
              </>
            ) : (
              <EmptyCart>Carrinho vazio</EmptyCart>
            )}
          </div>
        ) : currentTab === 'checkout' ? (
          <CheckOutForm>
            <h2>Entrega</h2>
            <Label>Quem irá receber *</Label>
            <Input
              value={nome}
              onChange={handleInputChange(setNome, setValidNome)}
              required
            />

            <Label>Endereço *</Label>
            <Input
              value={endereco}
              onChange={handleInputChange(setEndereco, setValidEndereco)}
              required
            />

            <Label>Cidade *</Label>
            <Input
              value={cidade}
              onChange={handleInputChange(setCidade, setValidCidade)}
              required
            />

            <FormRow>
              <div>
                <Label>CEP *</Label>
                <Input
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCepChange}
                  maxLength={9}
                  required
                />
              </div>
              <div>
                <Label>Número *</Label>
                <Input value={numero} onChange={handleNumeroChange} required />
              </div>
            </FormRow>
            <Label>Complemento (opcional)</Label>
            <Input />
            <CheckOutFooter>* Campos obrigatórios</CheckOutFooter>
            <ButtonButton
              title="Continuar para o pagamento"
              style={{ padding: '4px', marginTop: '16px', width: '100%' }}
              onClick={handleContinueToPayment}
            >
              Continuar para o pagamento
            </ButtonButton>
            <ButtonButton
              title="Voltar ao carrinho"
              style={{
                padding: '4px',
                width: '100%'
              }}
              onClick={() => setCurrentTab('cart')}
            >
              Voltar ao carrinho
            </ButtonButton>
          </CheckOutForm>
        ) : currentTab === 'payment' ? (
          <CheckOutForm>
            <h2>Pagamento</h2>
            <Label>Nome no Cartão *</Label>
            <Input
              value={nomeCartao}
              onChange={handleInputChange(setNomeCartao, setValidNomeCartao)}
              required
            />

            <FormRow>
              <div>
                <Label style={{ minWidth: '120px' }}>Número do Cartão</Label>
                <Input
                  placeholder="0000 0000 0000 0000"
                  style={{ width: '228px' }}
                  value={numeroCartao}
                  onChange={handleNumeroCartaoChange}
                  maxLength={19}
                  required
                />
              </div>
              <div>
                <Label>CVV *</Label>
                <Input
                  placeholder="000"
                  value={cvv}
                  onChange={handleCVVChange}
                  maxLength={3}
                  required
                />
              </div>
            </FormRow>
            <FormRow>
              <div style={{ marginRight: '16px' }}>
                <Label>Mês de vencimento *</Label>
                <Input
                  placeholder="00"
                  value={mesVencimento}
                  onChange={handleMesVencimentoChange}
                  maxLength={2}
                  required
                />
              </div>
              <div>
                <Label>Ano de vencimento *</Label>
                <Input
                  placeholder="0000"
                  value={anoVencimento}
                  onChange={handleAnoVencimentoChange}
                  maxLength={4}
                  required
                />
              </div>
            </FormRow>
            <CheckOutFooter>* Campos obrigatórios</CheckOutFooter>
            <ButtonButton
              title="Finalizar pagamento"
              style={{ padding: '4px', marginTop: '10px', width: '100%' }}
              onClick={handleFinalizarPagamento}
            >
              Finalizar pagamento
            </ButtonButton>
            <ButtonButton
              title="Voltar para a edição de endereço"
              style={{ padding: '4px', width: '100%' }}
              onClick={() => setCurrentTab('checkout')}
            >
              Voltar para a edição de endereço
            </ButtonButton>
          </CheckOutForm>
        ) : (
          <div>
            <Final>
              <h2>Pedido Finalizado {orderId && ` - Pedido ID: ${orderId}`}</h2>
              <p>Seu pedido foi confirmado com sucesso!</p>

              <p>Valor total: {formatapreco(getTotalPrice())}</p>
              <p>Entrega para: {nome}</p>
              <p>
                Endereço: {endereco}, {numero}, {cidade} - {cep}
              </p>
              <p>Forma de pagamento: Cartão de Crédito</p>
              <p>Nome no cartão: {nomeCartao}</p>
              <p>
                Data de expiração: {mesVencimento}/{anoVencimento}
              </p>

              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </Final>
            <Link to="/" className="link-concluir">
              <ButtonButton
                title="Concluir"
                style={{ padding: '4px', marginTop: '16px', width: '100%' }}
                onClick={clearCartAndReset}
              >
                Concluir
              </ButtonButton>
            </Link>
          </div>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
