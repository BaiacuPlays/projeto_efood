import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.textos};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h3`
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`

export const ButtonButton = styled.button`
  color: ${cores.textos};
  background-color: ${cores.footer};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  margin-top: 16px;
`
