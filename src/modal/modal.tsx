import React from 'react'
import styled from 'styled-components'
import { cores } from '../styles'

type ModalProps = {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}

const ModalWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background: #e57373;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
  align-items: center;
  color: #fff;
  position: relative;
  flex-direction: row;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 10px 0;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
  width: 16px;
  height: 16px;

  gap: 0px;
  opacity: 0px;
`

export const ModalButton = styled.button`
  color: ${cores.textos};
  background-color: ${cores.footer};
  cursor: pointer;
  border: none;
  padding: 0 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  padding: 5px;
  margin-top: 30px;
`

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  return (
    <ModalWrapper show={show} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
