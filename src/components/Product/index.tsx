import React, { useState } from 'react'
import { ButtonButton, Card, ContentWrapper, Descricao, Titulo } from './styles'
import Modal from '../../modal/modal'
import { ModalButton } from '../../modal/modal'
import { Restaurante } from '../../pages/Home'
import { formatapreco } from '../ProductsList'

type Props = {
  restaurante: Restaurante
  id: number
}

const Product: React.FC<Props> = ({ restaurante, id }) => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const item = restaurante.cardapio.find((item) => item.id === id)

  if (!item) {
    return null
  }

  return (
    <>
      <Card>
        <ContentWrapper>
          <img src={item.foto} alt={item.nome} />
          <Titulo>{item.nome}</Titulo>
          <Descricao>{item.descricao}</Descricao>
        </ContentWrapper>
        <ButtonButton onClick={handleOpenModal}>
          Adicionar ao Carrinho
        </ButtonButton>
      </Card>
      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal}>
          <img src={item.foto} alt={item.nome} />
          <div>
            <h2 style={{ paddingBottom: '25px' }}>{item.nome}</h2>
            <p>{item.descricao}</p>
            <p style={{ paddingTop: '20px' }}>Serve: {item.porcao}</p>
            <ModalButton onClick={handleCloseModal}>
              Adicionar ao carrinho - {formatapreco(item.preco)}
            </ModalButton>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Product
